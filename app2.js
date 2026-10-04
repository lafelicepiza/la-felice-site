/* ================= PIZZA BUILDER ================= */
const B={size:0,crust:0,sauce:0,cheese:'normal',shape:'round',tops:{},qty:1,freeDip:'ranch',xdips:[],editIdx:null};
function openBuilder(presetItem,edit){
  if(edit&&edit.cfg){const c=edit.cfg;  // "Edit" from cart: reopen with the saved configuration
    B.size=c.size;B.crust=c.crust;B.sauce=c.sauce;B.cheese=c.cheese;B.shape=c.shape||'round';
    B.freeDip=c.freeDip;B.xdips=[...c.xdips];B.tops=JSON.parse(JSON.stringify(c.tops));
    B.editIdx=edit.idx;
  }else{
    B.size=0;B.crust=0;B.sauce=0;B.cheese='normal';B.shape='round';B.qty=1;B.freeDip=FREE_DIP_DEFAULT;B.xdips=[];
    B.tops=presetItem&&presetItem.preset?JSON.parse(JSON.stringify(presetItem.preset)):{};
    if(presetItem&&presetItem.sizes.length>1){/* keep default size */}
    B.editIdx=null;
  }
  buildBuilderUI();updateBuilder();
  document.getElementById('allergyNote').value='';
  document.getElementById('bSheet').classList.add('open');
  document.getElementById('bBody').scrollTop=0;
}
document.getElementById('bClose').onclick=()=>document.getElementById('bSheet').classList.remove('open');

function segBtn(label,price,on,fn,next){
  const b=document.createElement('button');if(on)b.classList.add('on');
  b.innerHTML=label+(price?` <span class="p">+${fmt(price)}</span>`:'');
  b.onclick=()=>{fn();b.classList.add('picked');setTimeout(()=>b.classList.remove('picked'),350);
    if(next){const n=document.getElementById(next);
      if(n){n.scrollIntoView({behavior:'smooth',block:'start'});
        n.classList.remove('flash');void n.offsetWidth;n.classList.add('flash');}}};
  return b;
}
function buildBuilderUI(){
  const sz=document.getElementById('bSizes');sz.innerHTML='';
  BUILDER.sizes.forEach((s,i)=>sz.appendChild(segBtn(s.label,s.price,i===B.size,()=>{B.size=i;buildBuilderUI();updateBuilder();},'bs-crust')));
  const cr=document.getElementById('bCrusts');cr.innerHTML='';
  BUILDER.crusts.forEach((c,i)=>cr.appendChild(segBtn(tname(c),c.price,i===B.crust,()=>{B.crust=i;buildBuilderUI();updateBuilder();},'bs-sauce')));
  const shp=document.getElementById('bShapes');shp.innerHTML='';
  BUILDER.shapes.forEach(sp=>shp.appendChild(segBtn(tname(sp),0,B.shape===sp.id,()=>{B.shape=sp.id;buildBuilderUI();updateBuilder();},'bs-sauce')));
  const sc=document.getElementById('bSauces');sc.innerHTML='';
  BUILDER.sauces.forEach((s,i)=>sc.appendChild(segBtn(tname(s),s.price,i===B.sauce,()=>{B.sauce=i;buildBuilderUI();updateBuilder();},'bs-cheese')));
  const ch=document.getElementById('bCheese');ch.innerHTML='';
  BUILDER.cheese.forEach(c=>ch.appendChild(segBtn(t('p_'+c.id),c.price,B.cheese===c.id,()=>{B.cheese=c.id;buildBuilderUI();updateBuilder();},'bs-tops')));
  const dp=document.getElementById('bDips');dp.innerHTML='';
  DIPS.forEach(d=>dp.appendChild(segBtn(t('dip_'+d.id),0,B.freeDip===d.id,()=>{B.freeDip=d.id;buildBuilderUI();updateBuilder();})));
  let xd=document.getElementById('bXDips');
  if(!xd){xd=document.createElement('div');xd.className='seg';xd.id='bXDips';
    const lbl=document.createElement('div');lbl.style.cssText='width:100%;font-family:Arial;font-size:12px;margin:8px 0 2px';
    lbl.id='bXDipsLbl';document.getElementById('bs-dip').appendChild(lbl);document.getElementById('bs-dip').appendChild(xd);}
  document.getElementById('bXDipsLbl').textContent=t('extra_dip_name')+' (+'+fmt(EXTRA_DIP_PRICE)+')';
  xd.innerHTML='';
  DIPS.forEach(d=>{const b=document.createElement('button');if(B.xdips.includes(d.id))b.classList.add('on');
    b.innerHTML=t('dip_'+d.id)+` <span class="p">+${fmt(EXTRA_DIP_PRICE)}</span>`;
    b.onclick=()=>{const i=B.xdips.indexOf(d.id);if(i>=0)B.xdips.splice(i,1);else B.xdips.push(d.id);buildBuilderUI();updateBuilder();};
    xd.appendChild(b);});
  const tw=document.getElementById('bTops');tw.innerHTML='';
  BUILDER.tops.forEach(tp=>{
    const st=B.tops[tp.id],on=!!st;
    const row=document.createElement('div');row.className='toprow'+(on?' on':'');
    row.innerHTML=`<div class="tophead"><span class="tdot" style="background:${tp.color}"></span>
      <span class="tname">${tname(tp)}</span><span class="tprice">+${fmt(tp.price)}</span>
      <button class="tcheck">${on?'✓':''}</button></div><div class="topopts"></div>`;
    const opts=row.querySelector('.topopts');
    if(on){
      opts.innerHTML=`<div class="mini-label">${t('toppings')} — ${tname(tp)}</div>`;
      const pseg=document.createElement('div');pseg.className='mini-seg';
      ['light','normal','extra'].forEach(p=>{const b=document.createElement('button');
        b.textContent=t('p_'+p);if(st.p===p)b.classList.add('on');
        b.onclick=e=>{e.stopPropagation();st.p=p;buildBuilderUI();updateBuilder();};pseg.appendChild(b);});
      opts.appendChild(pseg);
      const hseg=document.createElement('div');hseg.className='mini-seg';
      ['left','whole','right'].forEach(h=>{const b=document.createElement('button');
        b.textContent=t('h_'+h);if(st.h===h)b.classList.add('on');
        b.onclick=e=>{e.stopPropagation();st.h=h;buildBuilderUI();updateBuilder();};hseg.appendChild(b);});
      opts.appendChild(hseg);
    }
    row.querySelector('.tophead').onclick=()=>{
      if(B.tops[tp.id])delete B.tops[tp.id];else B.tops[tp.id]={p:'normal',h:'whole'};
      buildBuilderUI();updateBuilder();
    };
    tw.appendChild(row);
  });
}
function builderPrice(){
  let p=BUILDER.sizes[B.size].price+BUILDER.crusts[B.crust].price+BUILDER.sauces[B.sauce].price;
  const ch=BUILDER.cheese.find(c=>c.id===B.cheese);p+=ch.price;
  Object.keys(B.tops).forEach(tid=>{const tp=BUILDER.tops.find(x=>x.id===tid);if(tp)p+=tp.price;});
  p+=B.xdips.length*EXTRA_DIP_PRICE;
  return p;
}
function pizzaSummary(){
  const csz=BUILDER.crusts[B.crust];
  const parts=[csz.sizeIn?csz.sizeIn+'"':BUILDER.sizes[B.size].label,tname(BUILDER.crusts[B.crust]),tname(BUILDER.sauces[B.sauce]),
    (B.cheese==='none'?t('cheese_none'):t('p_'+B.cheese)+' '+t('cheese')).replace(/^4\. /,'').replace(/^\d+\. /,'')];
  const tn=Object.keys(B.tops);
  if(!tn.length)parts.push(t('no_toppings'));
  tn.forEach(tid=>{const tp=BUILDER.tops.find(x=>x.id===tid),st=B.tops[tid];
    parts.push(`${tname(tp)} (${t('p_'+st.p)}, ${t('h_'+st.h)})`);});
  parts.push(t('free_sauce')+': '+t('dip_'+B.freeDip));
  if(B.xdips.length)parts.push(t('extra_dip_name')+': '+B.xdips.map(d=>t('dip_'+d)).join(', '));
  if(B.shape!=='round')parts.push(tname(BUILDER.shapes.find(x=>x.id===B.shape)));
  return parts.join(' • ');
}
function updateBuilder(){
  renderPizzaSVG();
  document.getElementById('bsummary').innerHTML='<b>'+pizzaSummary()+'</b>';
  const p=builderPrice();
  document.getElementById('bAdd').textContent=`${B.editIdx!=null?t('save_item'):t('add_to_cart')} — ${fmt(p)}`;
}
document.getElementById('bAdd').onclick=()=>{
  if(isPaused())return;
  const p=builderPrice();
  const an=document.getElementById('allergyNote').value.trim();
  const line={name:t('build_title'),name_en:T.en.build_title,
    desc:pizzaSummary(),desc_en:withLang('en',pizzaSummary),unit:p,qty:1,ill:'pizza',xcheese:(B.cheese==='extra'),
    freeDip:B.freeDip,xdips:[...B.xdips],allergy:an||null,
    cfg:{kind:'pizza',size:B.size,crust:B.crust,sauce:B.sauce,cheese:B.cheese,shape:B.shape,
      tops:JSON.parse(JSON.stringify(B.tops)),freeDip:B.freeDip,xdips:[...B.xdips]}};
  if(B.editIdx!=null){line.qty=cart[B.editIdx].qty;cart[B.editIdx]=line;B.editIdx=null;}  // "Edit" → replace, don't duplicate
  else cart.push(line);
  // TODO(server): allergy note must print on the kitchen ticket — packages/api lib/tickets.ts
  flyToCart(document.getElementById('bAdd'));
  document.getElementById('bSheet').classList.remove('open');
  renderCart();
};

/* ================= GENERIC BUILDER (subs / salads / drinks) =================
   Same comic style as the pizza builder: a live SVG visual that gains fillings
   as you tap. Configs: SUBDEF / SALADDEF / DRINKDEF in the MENU config above. */
const GB={item:null,kind:null,sel:null,qty:1,editIdx:null};
function openGBuilder(it,edit){
  GB.item=it;GB.kind=it.builder;GB.qty=1;
  if(edit&&edit.cfg){GB.sel=JSON.parse(JSON.stringify(edit.cfg.sel));GB.editIdx=edit.idx;}  // "Edit" from cart
  else{
    if(it.builder==='sub')GB.sel={size:'s8',bread:'white',fillings:['turkey'],cheese:'mozz',veggies:['lettuce','tomato'],sauce:'mayo'};
    else if(it.builder==='salad')GB.sel={base:'romaine',protein:'none',ingredients:['croutons','parmesan'],dressing:'ranch'};
    else if(it.builder==='wings')GB.sel={count:'w6',wtype:'plain'};
  else GB.sel={size:'can',flavor:'coke'};
    GB.editIdx=null;
  }
  renderG();
  document.getElementById('gSheet').classList.add('open');
}
document.getElementById('gClose').onclick=()=>document.getElementById('gSheet').classList.remove('open');

function gSeg(opts,cur,fn,multi){
  const d=document.createElement('div');d.className='seg';
  opts.forEach(o=>{
    const on=multi?cur.includes(o.id):cur===o.id;
    const b=document.createElement('button');if(on)b.classList.add('on');
    b.innerHTML=(o.n?(o.n[LANG]||o.n.en):(o.label||o.id))+(o.p?` <span class="p">+${fmt(o.p)}</span>`:'');
    b.onclick=()=>{fn(o.id);renderG();};
    d.appendChild(b);});
  return d;
}
function gSec(title,el){
  const d=document.createElement('div');d.className='bsec';
  const h=document.createElement('h3');h.textContent=title;d.appendChild(h);d.appendChild(el);return d;
}
function gToggle(list,id){const i=list.indexOf(id);if(i>=0)list.splice(i,1);else list.push(id);}

/* ---- live comic SVG visuals ---- */
/* ================= SALAD ART — layered, swappable =================
   The salad bowl is drawn in replaceable LAYERS: bowl → greens → protein →
   ingredients → dressing. Each ingredient is its own function in SALAD_ART.
   The owner will photograph REAL ingredients — swap a function body for e.g.:
     tomato:(x,y)=>`<image href="assets/ingr-tomato.png" x="${x-8}" y="${y-8}" width="16" height="16"/>`
   Positions are computed by saladSVG(); art drops in without layout changes. */
const SALAD_ART={
 bowl(){return `<path d="M8 40 Q38 70 68 40 L61 56 Q38 72 15 56 Z" fill="#2C6AC9" stroke="#141414" stroke-width="3"/><ellipse cx="38" cy="40" rx="30" ry="9" fill="#3D7DD8" stroke="#141414" stroke-width="3"/>`;},
 green(baseId,x,y,r){
   const c=baseId==='romaine'?'#2E9E5B':baseId==='spinach'?'#1E6B3A':'#37B268';
   return `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="#141414" stroke-width="2"/>`;},
 protein(pid,x,y){
   if(pid==='chicken')return `<rect x="${x-4}" y="${y-4}" width="8" height="8" rx="2.5" fill="#D9A441" stroke="#141414" stroke-width="2"/>`;
   if(pid==='tuna')return `<ellipse cx="${x}" cy="${y}" rx="5" ry="3.4" fill="#8FA3B8" stroke="#141414" stroke-width="2"/>`;
   return '';},
 ingredient(id,x,y,i){
   x=+x;y=+y;
   if(id==='croutons')return `<rect x="${(x-3.4).toFixed(1)}" y="${(y-3.4).toFixed(1)}" width="6.8" height="6.8" rx="1.6" fill="#B96A1B" stroke="#141414" stroke-width="1.8"/>`;
   if(id==='parmesan')return `<rect x="${(x-4).toFixed(1)}" y="${(y-1.6).toFixed(1)}" width="8" height="3.2" rx="1.4" fill="#FFFDF5" stroke="#141414" stroke-width="1.4" transform="rotate(${i*37} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
   if(id==='tomato')return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.8" fill="#C0392B" stroke="#141414" stroke-width="1.8"/>`;
   if(id==='cucumber')return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.8" fill="#7ED321" stroke="#141414" stroke-width="1.8"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.8" fill="#D9F2B8"/>`;
   if(id==='olives')return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4" fill="none" stroke="#141414" stroke-width="3.4"/>`;
   if(id==='egg')return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#FFFDF5" stroke="#141414" stroke-width="1.8"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.9" fill="#F4D03F"/>`;
   return '';},
 dressing(id){
   const c={ranch:'#F3E9D2',caesar:'#F5E6B8',italian:'#E67E22',balsamic:'#5C3A12'}[id]||'#F3E9D2';
   return `<path d="M20 26 q9 -6 18 0 t18 0" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;},
};
/* ================= SUB ART — layered, swappable =================
   Layers: bread → fillings → cheese → veggies → sauce drizzle.
   Swap any function body for a real photo <image> later. */
const SUB_ART={
 breadColor(breadId){return breadId==='wheat'?'#D9A441':breadId==='garlic'?'#EDBE5A':'#F2C063';},
 bunTop(c){return `<path d="M10 44 Q38 16 66 44 Q38 56 10 44 Z" fill="${c}" stroke="#141414" stroke-width="3"/>`;},
 bunBottom(c){return `<path d="M10 62 Q38 80 66 62 L66 70 Q38 88 10 70 Z" fill="${c}" stroke="#141414" stroke-width="3"/>`;},
 sesame(){return `<circle cx="28" cy="32" r="1.8" fill="#FFF"/><circle cx="40" cy="28" r="1.8" fill="#FFF"/><circle cx="50" cy="34" r="1.8" fill="#FFF"/>`;},
 filling(id,x,y,w){
   const c={turkey:'#E8A79E',ham:'#E58AA0',meatball:'#7B3F00',veggie:'#27AE60'}[id]||'#999';
   return `<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" fill="${c}" stroke="#141414" stroke-width="2.5"/>`;},
 cheese(x,y,w){return `<rect x="${x}" y="${y}" width="${w}" height="8" rx="4" fill="#F9DC5C" stroke="#141414" stroke-width="2.5"/>`;},
 veggie(id,x,y){
   const c={lettuce:'#2E9E5B',tomato:'#C0392B',onion:'#F6F1FF',peppers:'#7ED321',pickles:'#1E8449'}[id]||'#999';
   return `<circle cx="${x}" cy="${y}" r="4.4" fill="${c}" stroke="#141414" stroke-width="2"/>`;},
 sauce(id){
   const c={mayo:'#FFFFFF',mustard:'#F4D03F',oilvin:'#C98A2B',ranchd:'#F3E9D2'}[id]||'#FFF';
   return `<path d="M14 44 q9 -7 18 0 t18 0 t18 0" fill="none" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/>`;},
};
function subSVG(s){
  const bc=SUB_ART.breadColor(s.bread), sc=s.size==='s12'?1.12:0.98;
  let mid='';
  s.fillings.forEach((f,i)=>{mid+=SUB_ART.filling(f,14+i*3,36+i*8,50);});
  if(s.cheese!=='none')mid+=SUB_ART.cheese(12,62,54);
  s.veggies.forEach((v,i)=>{mid+=SUB_ART.veggie(v,20+i*10,78+(i%2)*5);});
  mid+=SUB_ART.sauce(s.sauce);
  return `<svg viewBox="0 0 76 96"><g transform="translate(38 48) scale(${sc}) translate(-38 -48)">`
    +SUB_ART.bunBottom(bc)+mid+SUB_ART.bunTop(bc)
    +(s.bread==='white'?SUB_ART.sesame():'')
    +`</g></svg>`;
}
function saladSVG(s){
  const r=rng(hash('salad'+s.base+s.protein+s.ingredients.join(',')));
  let g='';
  for(let i=0;i<7;i++){const a=r()*6.283,d=r()*15;
    g+=SALAD_ART.green(s.base,(38+Math.cos(a)*d).toFixed(1),(30+Math.sin(a)*d*0.6).toFixed(1),(5+r()*3).toFixed(1));}
  if(s.protein==='chicken')for(let i=0;i<4;i++){const a=r()*6.283,d=5+r()*10;
    g+=SALAD_ART.protein('chicken',(38+Math.cos(a)*d).toFixed(1),(30+Math.sin(a)*d*0.6).toFixed(1));}
  if(s.protein==='tuna')for(let i=0;i<3;i++){const a=r()*6.283,d=5+r()*10;
    g+=SALAD_ART.protein('tuna',(38+Math.cos(a)*d).toFixed(1),(30+Math.sin(a)*d*0.6).toFixed(1));}
  s.ingredients.forEach((ing,i)=>{const a=i*2.4+0.6,d=7+(i%3)*5;
    g+=SALAD_ART.ingredient(ing,38+Math.cos(a)*d,30+Math.sin(a)*d*0.6,i);});
  g+=SALAD_ART.dressing(s.dressing);
  return `<svg viewBox="0 0 76 76">${SALAD_ART.bowl()}${g}</svg>`;
}
/* ================= WING ART — replaceable =================
   wing(type,x,y,rot) draws one wing; swap its body for a real photo:
     wing:(type,x,y,rot)=>`<image href="assets/wing-breaded.png" x="${x-9}" y="${y-7}" width="18" height="14"/>` */
const WING_ART={
 tray(){return `<path d="M10 34 L66 34 L60 66 L16 66 Z" fill="#C96A2C" stroke="#141414" stroke-width="3"/><path d="M10 34 L66 34 L64 42 L12 42 Z" fill="#A8561F" stroke="#141414" stroke-width="2.5"/>`;},
 wing(type,x,y,rot){
   const c=type==='plain'?['#C25E2E','#A84E24']:type==='zing'?['#B03A2E','#8E2F22']:['#D9A441','#C08A2E'];
   let s=`<g transform="rotate(${rot} ${x} ${y})">`;
   s+=`<ellipse cx="${x}" cy="${y}" rx="7" ry="5" fill="${c[0]}" stroke="#141414" stroke-width="2.2"/>`;
   s+=`<rect x="${+x+5}" y="${+y-1.5}" width="7" height="3" rx="1.5" fill="#F3E9D2" stroke="#141414" stroke-width="1.6"/>`;
   if(type!=='plain')s+=`<circle cx="${+x-2}" cy="${+y-1}" r="1.4" fill="${c[1]}"/><circle cx="${+x+2}" cy="${+y+1.5}" r="1.4" fill="${c[1]}"/>`;
   if(type==='zing')s+=`<path d="M${+x-4} ${+y-2} q4 -3 8 0" stroke="#FF6B4A" stroke-width="1.8" fill="none"/>`;
   return s+'</g>';},
};
function wingSVG(s){
  const n=s.count==='w12'?12:6, cols=n===6?3:4, rows=n===6?2:3;
  const r=rng(hash('wings'+s.count+s.wtype));
  let g=`<svg viewBox="0 0 76 76">${WING_ART.tray()}`;
  for(let row=0;row<rows;row++)for(let c=0;c<cols;c++){
    const x=(20+c*(36/((cols-1)||1))+(r()-0.5)*4).toFixed(1), y=(46+row*8+(r()-0.5)*3).toFixed(1);
    g+=WING_ART.wing(s.wtype,x,y,(r()*40-20).toFixed(0));
  }
  return g+'</svg>';
}
function drinkSVG(s){
  const f=DRINKDEF.flavors.find(x=>x.id===s.flavor)||DRINKDEF.flavors[0];
  let body='';
  if(s.size==='can')
    body=`<rect x="26" y="30" width="24" height="36" rx="6" fill="${f.c}" stroke="#141414" stroke-width="3"/><rect x="28" y="32" width="8" height="30" rx="4" fill="#fff" opacity="0.3"/><text x="38" y="58" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">LF</text>`;
  else if(s.size==='fountain')
    body=`<path d="M28 22 L48 22 L44 68 L32 68 Z" fill="${f.c}" stroke="#141414" stroke-width="3"/><rect x="30" y="24" width="7" height="40" fill="#fff" opacity="0.3"/><path d="M38 22 L48 8" stroke="#141414" stroke-width="3.4" stroke-linecap="round"/><text x="38" y="54" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">LF</text>`;
  else
    body=`<path d="M30 20 h16 v8 q6 4 6 12 v26 h-28 v-26 q0 -8 6 -12 z" fill="${f.c}" stroke="#141414" stroke-width="3"/><rect x="30" y="15" width="16" height="7" rx="2.5" fill="#141414"/><rect x="33" y="36" width="6" height="26" fill="#fff" opacity="0.3"/><text x="38" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">LF</text>`;
  return `<svg viewBox="0 0 76 76">${body}</svg>`;
}

/* ---- pricing / summary / render ---- */
function gPrice(){
  const it=GB.item,s=GB.sel;let p=it.sizes[0].price;
  if(GB.kind==='sub'){const D=SUBDEF;
    p+=D.sizes.find(x=>x.id===s.size).p+D.breads.find(x=>x.id===s.bread).p
     +s.fillings.reduce((a,f)=>a+D.fillings.find(x=>x.id===f).p,0)
     +D.cheese.find(x=>x.id===s.cheese).p;
  }else if(GB.kind==='salad'){const D=SALADDEF;
    p+=D.bases.find(x=>x.id===s.base).p+D.proteins.find(x=>x.id===s.protein).p;
  }else if(GB.kind==='wings'){const D=WINGDEF;
    p+=D.counts.find(x=>x.id===s.count).p+D.types.find(x=>x.id===s.wtype).p;
  }else{const D=DRINKDEF;p+=D.sizes.find(x=>x.id===s.size).p;}
  return p;
}
function gSummary(){
  const s=GB.sel,parts=[],nm=o=>o.n[LANG]||o.n.en;
  if(GB.kind==='sub'){const D=SUBDEF,one=(l,id)=>nm(l.find(x=>x.id===id));
    parts.push(D.sizes.find(x=>x.id===s.size).label,one(D.breads,s.bread),
      s.fillings.map(f=>one(D.fillings,f)).join(' + '),one(D.cheese,s.cheese),
      s.veggies.map(v=>one(D.veggies,v)).join(', '),one(D.sauces,s.sauce));
  }else if(GB.kind==='salad'){const D=SALADDEF,one=(l,id)=>nm(l.find(x=>x.id===id));
    parts.push(one(D.bases,s.base),one(D.proteins,s.protein),
      s.ingredients.map(i=>one(D.ingredients,i)).join(', '),one(D.dressings,s.dressing));
  }else if(GB.kind==='wings'){const D=WINGDEF,one=(l,id)=>nm(l.find(x=>x.id===id));
    parts.push(one(D.counts,s.count),one(D.types,s.wtype));
  }else{const D=DRINKDEF,one=(l,id)=>nm(l.find(x=>x.id===id));
    parts.push(one(D.sizes,s.size),one(D.flavors,s.flavor));}
  return parts.join(' • ');
}
function renderG(){
  const it=GB.item,s=GB.sel;
  document.getElementById('gTitle').textContent=t(it.builder==='sub'?'build_sub':it.builder==='salad'?'build_salad':it.builder==='wings'?'build_wings':'build_drink');
  const body=document.getElementById('gBody');body.innerHTML='';
  const vis=document.createElement('div');vis.id='gVisual';
  vis.innerHTML=GB.kind==='sub'?subSVG(s):GB.kind==='salad'?saladSVG(s):GB.kind==='wings'?wingSVG(s):drinkSVG(s);
  body.appendChild(vis);
  const hint=document.createElement('div');hint.className='halfhint';hint.textContent=t('multi_hint');body.appendChild(hint);
  if(GB.kind==='sub'){const D=SUBDEF;
    body.appendChild(gSec(t('sec_size'),gSeg(D.sizes,s.size,id=>{s.size=id;})));
    body.appendChild(gSec(t('sec_bread'),gSeg(D.breads,s.bread,id=>{s.bread=id;})));
    body.appendChild(gSec(t('sec_fillings'),gSeg(D.fillings,s.fillings,id=>gToggle(s.fillings,id),true)));
    body.appendChild(gSec(t('sec_cheese'),gSeg(D.cheese,s.cheese,id=>{s.cheese=id;})));
    body.appendChild(gSec(t('sec_veggies'),gSeg(D.veggies,s.veggies,id=>gToggle(s.veggies,id),true)));
    body.appendChild(gSec(t('sauce').replace(/^\d+\.\s*/,''),gSeg(D.sauces,s.sauce,id=>{s.sauce=id;})));
  }else if(GB.kind==='salad'){const D=SALADDEF;
    body.appendChild(gSec(t('sec_base'),gSeg(D.bases,s.base,id=>{s.base=id;})));
    body.appendChild(gSec(t('sec_protein'),gSeg(D.proteins,s.protein,id=>{s.protein=id;})));
    body.appendChild(gSec(t('sec_ingr'),gSeg(D.ingredients,s.ingredients,id=>gToggle(s.ingredients,id),true)));
    body.appendChild(gSec(t('sec_dressing'),gSeg(D.dressings,s.dressing,id=>{s.dressing=id;})));
  }else if(GB.kind==='wings'){const D=WINGDEF;
    body.appendChild(gSec(t('sec_count'),gSeg(D.counts,s.count,id=>{s.count=id;})));
    body.appendChild(gSec(t('sec_wtype'),gSeg(D.types,s.wtype,id=>{s.wtype=id;})));
  }else{const D=DRINKDEF;
    body.appendChild(gSec(t('sec_dsize'),gSeg(D.sizes,s.size,id=>{s.size=id;})));
    body.appendChild(gSec(t('sec_flavor'),gSeg(D.flavors,s.flavor,id=>{s.flavor=id;})));
  }
  const sum=document.createElement('div');sum.id='bsummary';sum.innerHTML='<b>'+gSummary()+'</b>';body.appendChild(sum);
  document.getElementById('gAdd').textContent=`${GB.editIdx!=null?t('save_item'):t('add_to_cart')} — ${fmt(gPrice())}`;
}
document.getElementById('gAdd').onclick=()=>{
  if(isPaused())return;
  const it=GB.item,p=gPrice();
  const line={name:mname(it),name_en:it.name.en,desc:gSummary(),desc_en:withLang('en',gSummary),unit:p,qty:1,ill:it.art,
    cfg:{kind:GB.kind,itemId:it.id,sel:JSON.parse(JSON.stringify(GB.sel))}};
  if(GB.editIdx!=null){line.qty=cart[GB.editIdx].qty;cart[GB.editIdx]=line;GB.editIdx=null;}
  else cart.push(line);
  flyToCart(document.getElementById('gAdd'));
  document.getElementById('gSheet').classList.remove('open');
  renderCart();
};

/* ================= fulfillment / zone / tips ================= */
const tP=document.getElementById('tPickup'),tD=document.getElementById('tDelivery');
tP.onclick=()=>{orderType='pickup';tP.classList.add('on');tD.classList.remove('on');
  document.getElementById('addrRow').classList.remove('show');renderCart();};
tD.onclick=()=>{orderType='delivery';tD.classList.add('on');tP.classList.remove('on');
  document.getElementById('addrRow').classList.add('show');renderCart();};
document.getElementById('zoneBtn').onclick=()=>{
  const a=document.getElementById('addr').value.trim();
  const okEl=document.getElementById('zoneOk');
  zoneOk=a.length>5; // STUB — real: POST /v1/deliveries quote
  okEl.textContent=zoneOk?t('zone_ok').replace('{fee}',fmt(DELIVERY_FEE)).replace('{eta}','45'):(t('address_ph'));
  okEl.classList.add('show');renderCart();
};
document.querySelectorAll('#tips button[data-tip]').forEach(b=>b.onclick=()=>{
  tipFixed=null;tipPct=+b.dataset.tip;
  document.querySelectorAll('#tips button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  document.getElementById('tipCustomRow').style.display='none';
  renderCart();});
document.getElementById('tipNo').onclick=()=>{
  tipFixed=0; /* explicit "no tip" — tips are optional */
  document.querySelectorAll('#tips button').forEach(x=>x.classList.remove('on'));
  document.getElementById('tipNo').classList.add('on');
  document.getElementById('tipCustomRow').style.display='none';
  renderCart();};
document.getElementById('tipCustomBtn').onclick=()=>{
  document.querySelectorAll('#tips button').forEach(x=>x.classList.remove('on'));
  document.getElementById('tipCustomBtn').classList.add('on');
  document.getElementById('tipCustomRow').style.display='block';
  document.getElementById('tipCustom').focus();};
document.getElementById('tipCustom').oninput=e=>{
  const v=parseFloat(e.target.value);tipFixed=isNaN(v)||v<0?0:Math.round(v*100);renderCart();};
document.getElementById('mkAccount').onchange=()=>renderCart();
document.getElementById('isTimeOrder').onchange=e=>{
  document.getElementById('timeWhen').style.display=e.target.checked?'block':'none';};

/* ===== online paused state (owner toggle; demo: ?paused=1 or triple-tap the logo) ===== */
let pausedDemo=false;
function isPaused(){return pausedDemo||parsePaused(location.search);}
function applyPausedBanner(){document.getElementById('pausedBanner').classList.toggle('show',isPaused());}
let h1taps=0,h1timer=null;
document.querySelector('header h1').onclick=()=>{h1taps++;clearTimeout(h1timer);h1timer=setTimeout(()=>h1taps=0,700);
  if(h1taps>=3){h1taps=0;pausedDemo=!pausedDemo;console.log('[demo] online paused =',pausedDemo);applyPausedBanner();renderCart();}};

/* ===== tax-exempt org flow (STUB: production verifies via /v1/org-documents) ===== */
document.getElementById('isTaxExempt').onchange=e=>{
  if(e.target.checked)document.getElementById('taxexSheet').classList.add('open');
  else{taxEx={uploaded:false,approved:false};renderTaxEx();renderCart();}
};
document.getElementById('taxexFile').onchange=()=>{
  taxEx.uploaded=true;document.getElementById('taxexSent').style.display='block';
};
document.getElementById('taxexSim').onclick=()=>{
  taxEx.approved=true;document.getElementById('taxexSheet').classList.remove('open');
  renderTaxEx();renderCart();
};
document.getElementById('taxexBack').onclick=()=>{
  if(!taxEx.approved){document.getElementById('isTaxExempt').checked=false;taxEx={uploaded:false,approved:false};}
  document.getElementById('taxexSheet').classList.remove('open');renderTaxEx();renderCart();
};
function renderTaxEx(){
  const ok=taxEx.approved;
  document.getElementById('taxexStatus').innerHTML=ok?(IC.check+' <b>'+t('taxexempt_approved')+'</b>'):'';
  const row=document.getElementById('taxexRow');if(row)row.style.display=ok?'flex':'none';
}

/* ================= loyalty — SAMPLE groundwork, full points program later ================= */
const LOYALTY={pointsPerDollar:1,rewardThreshold:250,
  demoBalance:228, // SAMPLE demo balance so the owner can see the hint popup; real balance loads from the account later
  reward:{en:'a free pizza',ru:'бесплатную пиццу',es:'una pizza gratis'}};
let loyalHintShownFor=null;
function earnedPoints(){return Math.floor(totals().sub/100)*LOYALTY.pointsPerDollar;}
function checkLoyalHint(){
  const earned=earnedPoints(),remaining=LOYALTY.rewardThreshold-LOYALTY.demoBalance-earned;
  const key=earned+'/'+cart.length;
  if(earned>0&&remaining>0&&remaining<=60&&loyalHintShownFor!==key){
    loyalHintShownFor=key;
    document.getElementById('loyalText').textContent=
      t('reward_hint').replace('{n}',remaining).replace('{reward}',LOYALTY.reward[LANG]||LOYALTY.reward.en);
    document.getElementById('loyalSheet').classList.add('open');
  }
}
document.getElementById('loyalBack').onclick=()=>document.getElementById('loyalSheet').classList.remove('open');

/* ================= cart ================= */
/* FIRST-ORDER DISCOUNT — SAMPLE 5%, owner edits the real value later. Applies when the guest
   registers at checkout (checkbox + phone). TODO: social signup (Facebook, Google, Apple) — later. */
const FIRST_ORDER_DISCOUNT_PCT=5;
function isRegistered(){
  const cb=document.getElementById('mkAccount'),ph=document.getElementById('cPhone');
  return !!(cb&&cb.checked&&ph&&ph.value.trim().length>3);
}
function totals(){
  const sub=cart.reduce((s,l)=>s+l.unit*l.qty,0);
  const fee=(orderType==='delivery'&&zoneOk)?DELIVERY_FEE:0;
  const discount=((isRegistered()&&sub>0)?Math.round(sub*FIRST_ORDER_DISCOUNT_PCT/100):0)
    +((promo&&sub>0)?Math.round(sub*promo.pct/100):0);
  return computeTotals(sub,tipPct,fee,TAX_BPS,taxEx.approved,discount);
}
function renderCart(){
  const n=cart.reduce((s,l)=>s+l.qty,0),tt=totals();
  if(!cart.length){hintSt.done=false;hintSt.shownId=null;}  // new order → penguin may hint once again
  penguinTick();
  document.getElementById('count').textContent=n;
  document.getElementById('bartotal').textContent=fmt(tt.total);
  document.getElementById('checkoutBtn').disabled=!cart.length||isPaused();
  applyPausedBanner();
  const L=document.getElementById('lines');L.innerHTML='';
  cart.forEach((l,i)=>{const d=document.createElement('div');d.className='line small';
    d.innerHTML=`<span class="thumb">${artFor(l.ill||'pizza')}</span><span>${l.qty}× ${l.name}<br><span style="color:#666">${l.desc||''}</span>${l.freeDip?'<br><span style="color:var(--green)">'+t('free_sauce')+': '+t('dip_'+l.freeDip)+'</span>':''}${l.xdips&&l.xdips.length?'<br><span style="color:#666">'+t('extra_dip_name')+': '+l.xdips.map(x=>t('dip_'+x)).join(', ')+'</span>':''}${l.allergy?'<br><b style="color:var(--red)">'+t('allergy_tag')+': '+l.allergy+'</b>':''}</span><span>${fmt(l.unit*l.qty)} ${l.cfg?`<a href="#" data-e="${i}" title="${t('edit_item')}" style="color:var(--blue)">✎</a> `:''}<a href="#" data-i="${i}" style="color:var(--red)">✕</a></span>`;
    L.appendChild(d);});
  L.querySelectorAll('a[data-i]').forEach(a=>a.onclick=e=>{e.preventDefault();cart.splice(+a.dataset.i,1);renderCart();});
  L.querySelectorAll('a[data-e]').forEach(a=>a.onclick=e=>{e.preventDefault();editCartLine(+a.dataset.e);});
  document.getElementById('lSub').textContent=fmt(tt.sub);
  document.getElementById('lTax').textContent=fmt(tt.tax);
  document.getElementById('lTip').textContent=fmt(tt.tip);
  document.getElementById('feeRow').style.display=tt.fee?'flex':'none';
  const needMin=orderType==='delivery'&&tt.sub>0&&tt.sub<MIN_DELIVERY_TOTAL;
  const mdw=document.getElementById('minDelWarn');
  if(mdw){mdw.style.display=needMin?'block':'none';
    if(needMin)document.getElementById('minDelWarnText').textContent=
      t('min_delivery_warn').replace('{m}',fmt(MIN_DELIVERY_TOTAL)).replace('{x}',fmt(MIN_DELIVERY_TOTAL-tt.sub));}
  ['payCard','payApple','payGoogle'].forEach(id=>{const b=document.getElementById(id);if(b)b.disabled=needMin;});
  document.getElementById('lFee').textContent=fmt(tt.fee);
  document.getElementById('lTotal').textContent=fmt(tt.total);
  document.getElementById('lPts').textContent='+'+earnedPoints()+' '+t('points');
  const pdisc=(promo&&tt.sub>0)?Math.round(tt.sub*promo.pct/100):0;
  document.getElementById('promoRow').style.display=pdisc?'flex':'none';
  if(pdisc)document.getElementById('lPromo').textContent='−'+fmt(pdisc);
  renderUpsell();
  /* first-order discount display + guest nudge */
  const reg=isRegistered(),showPromo=!reg&&cart.length>0;
  document.getElementById('discRow').style.display=tt.discount?'flex':'none';
  if(tt.discount)document.getElementById('lDisc').textContent='−'+fmt(tt.discount);
  document.getElementById('firstOrderPromo').style.display=showPromo?'block':'none';
  document.getElementById('firstOrderPromoText').textContent=t('first_order_promo').replace('{p}',FIRST_ORDER_DISCOUNT_PCT);
  document.getElementById('acctSaveNote').style.display=showPromo?'block':'none';
  const saveAmt=Math.round(tt.sub*FIRST_ORDER_DISCOUNT_PCT/100);
  document.getElementById('acctSaveText').textContent=t('acct_save').replace('{x}',fmt(saveAmt)).replace('{p}',FIRST_ORDER_DISCOUNT_PCT);
  renderTaxEx();
  checkLoyalHint();
  penguinTick();
}
document.getElementById('checkoutBtn').onclick=()=>{if(cart.length)document.getElementById('cartSheet').classList.add('open');};
document.getElementById('cartBack').onclick=()=>document.getElementById('cartSheet').classList.remove('open');

/* ================= checkout: the iron rule ================= */
let paid=false;
function stripeStubPay(method,btn){
  const btns=[payCard,payApple,payGoogle];btns.forEach(b=>b.disabled=true);
  const label=btn.querySelector('span')||btn,orig=label.innerHTML;
  label.innerHTML='<span class="spin"></span> '+t('processing');
  setTimeout(()=>{btns.forEach(b=>b.disabled=false);label.innerHTML=orig;paid=true;placeOrder(method);},1200);
}
const payCard=document.getElementById('payCard'),payApple=document.getElementById('payApple'),payGoogle=document.getElementById('payGoogle');
payCard.onclick=()=>stripeStubPay('card',payCard);
payApple.onclick=()=>stripeStubPay('apple_pay',payApple);
payGoogle.onclick=()=>stripeStubPay('google_pay',payGoogle);
document.getElementById('noPay').onclick=()=>document.getElementById('warnSheet').classList.add('open');
document.getElementById('warnBack').onclick=()=>document.getElementById('warnSheet').classList.remove('open');

function placeOrder(method){
  if(!paid){document.getElementById('warnSheet').classList.add('open');return;}
  const tt=totals();
  const isTime=document.getElementById('isTimeOrder').checked;
  const when=document.getElementById('timeWhen').value;
  const num='LF-'+Math.floor(100000+Math.random()*900000);
  lfSaveOrder({num,ts:Date.now(),mode:orderType,total:tt.total,
    lines:cart.map(l=>({qty:l.qty,name:l.name,name_en:l.name_en||l.name,unit:l.unit,ill:l.ill||'pizza'}))});
  // IRON RULE: the customer orders in EN/RU/ES, but the cashier screen and kitchen ticket are ALWAYS English.
  // The snapshot sent to the API carries BOTH name_en (canonical) and name_localized (customer display).
  // TODO(server): POST /v1/orders with lines below — packages/api/lib/tickets.ts renders ONLY name_en.
  const orderSnapshot=cart.map(l=>({name_en:l.name_en||l.name,name_localized:l.name,
    desc_en:l.desc_en||l.desc,desc_localized:l.desc,unit:l.unit,qty:l.qty,allergy:l.allergy||null}));
  document.getElementById('ordNum').textContent='#'+num;
  const tb=document.getElementById('timeBanner');
  if(isTime&&when){tb.style.display='block';document.getElementById('timeWhenOut').textContent=new Date(when).toLocaleString();}
  else tb.style.display='none';
  const dl=document.getElementById('doneLines');dl.innerHTML='';
  cart.forEach(l=>{const d=document.createElement('div');d.className='line';
    d.innerHTML=`<span>${l.qty}× ${l.name}${l.desc?'<br><span style="color:#666">'+l.desc+'</span>':''}${l.allergy?'<br><b style="color:var(--red)">'+t('allergy_tag')+': '+l.allergy+'</b> <span style="color:#666">(→ kitchen ticket)</span>':''}</span><span>${fmt(l.unit*l.qty)}</span>`;dl.appendChild(d);});
  const meta=document.createElement('div');meta.className='line small';
  meta.innerHTML=`<span>${orderType==='pickup'?t('pickup'):t('delivery')} • ${t('paid')}: ${method}${taxEx.approved?'<br>'+t('taxexempt_line'):''}</span><span>${orderType==='pickup'?t('pickup_eta'):t('delivery_eta').replace('{eta}','45')}</span>`;
  dl.appendChild(meta);
  document.getElementById('doneTotal').textContent=fmt(tt.total);
  try{localStorage.setItem('lf_last',JSON.stringify(cart.map(l=>({name:l.name,name_en:l.name_en,desc:l.desc,desc_en:l.desc_en,unit:l.unit,qty:l.qty,ill:l.ill}))));}catch(e){}
  console.log('[order] created after payment:',{num,method,total:tt.total,tax:tt.tax,discount:tt.discount,taxExempt:taxEx.approved,
    consents:{sms:document.getElementById('consentSms').checked,email:document.getElementById('consentEmail').checked},
    // TODO(server): save consents to the customer profile (POST /v1/customers) — future mailing database
    timeOrder:isTime?when:null,allergies:cart.map(l=>l.allergy).filter(Boolean),lines:orderSnapshot});
  cart.length=0;paid=false;
  document.getElementById('cartSheet').classList.remove('open');
  document.getElementById('doneSheet').classList.add('open');
  renderCart();renderReorder();
}
document.getElementById('doneBack').onclick=()=>document.getElementById('doneSheet').classList.remove('open');
document.getElementById('trLink').onclick=e=>{e.preventDefault();document.getElementById('trSheet').classList.add('open');};
document.getElementById('doneTrack').onclick=()=>{document.getElementById('doneSheet').classList.remove('open');document.getElementById('trSheet').classList.add('open');};
document.getElementById('trBack').onclick=()=>document.getElementById('trSheet').classList.remove('open');

/* ================= quick reorder ================= */
function renderReorder(){
  let last=null;try{last=JSON.parse(localStorage.getItem('lf_last')||'null');}catch(e){}
  const box=document.getElementById('reorder');
  if(last&&last.length){
    box.classList.add('show');
    document.getElementById('reorderDesc').textContent=last.map(l=>l.qty+'× '+l.name).join(', ');
    document.getElementById('reorderBtn').onclick=()=>{last.forEach(l=>cart.push({name:l.name,name_en:l.name_en||l.name,desc:l.desc,desc_en:l.desc_en||l.desc,unit:l.unit,qty:l.qty,ill:l.ill}));renderCart();};
  }else box.classList.remove('show');
}

/* ================= cart upsell "Add to your order?" (Dodo) =================
   Tabs: extra sauces / drinks / desserts — shown in the cart at payment time. */
function renderUpsell(){
  const tabs=document.getElementById('upsTabs');if(!tabs)return;
  tabs.innerHTML='';
  [[ 'sauces',t('extra_dip_name')],['drinks',t('menu_drinks')],['desserts',t('menu_desserts')]].forEach(([id,label])=>{
    const b=document.createElement('button');b.textContent=label;if(upsTab===id)b.classList.add('on');
    b.onclick=()=>{upsTab=id;renderUpsell();};tabs.appendChild(b);});
  const box=document.getElementById('upsItems');box.innerHTML='';
  const addRow=(name,price,fn)=>{
    const r=document.createElement('div');r.className='upsrow';
    const un=document.createElement('span');un.className='un';un.textContent=name;
    const up=document.createElement('span');up.className='up';up.textContent=fmt(price);
    const b=document.createElement('button');b.className='upsadd';b.textContent='+';b.setAttribute('aria-label',name);
    b.onclick=()=>{fn();};r.appendChild(un);r.appendChild(up);r.appendChild(b);box.appendChild(r);};
  if(upsTab==='sauces'){
    DIPS.forEach(d=>addRow(t('dip_'+d.id),EXTRA_DIP_PRICE,()=>{
      cart.push({name:t('extra_dip_name')+': '+t('dip_'+d.id),name_en:'Extra dipping sauce: '+d.id,
        desc:'',desc_en:'',unit:EXTRA_DIP_PRICE,qty:1,ill:'dip'});renderCart();}));
  }else{
    visibleItems(MENU[upsTab==='drinks'?'drinks':'desserts']).forEach(it=>{
      const sz=it.sizes[0];
      addRow(mname(it)+(sz.label?' ('+sz.label+')':''),sz.price,()=>quickAdd(it));});
  }
}
document.getElementById('promoBtn').onclick=()=>{
  const code=document.getElementById('promoIn').value.trim().toUpperCase();
  const msg=document.getElementById('promoMsg');
  const hit=PROMOS.find(x=>x.code===code);
  if(hit){promo=hit;msg.style.color='var(--green)';msg.textContent=t('promo_ok').replace('{p}',hit.pct);}
  else{promo=null;msg.style.color='var(--red)';msg.textContent=t('promo_bad');}
  renderCart();
};

/* ================= edit cart line (Dodo: "Изменить") ================= */
function editCartLine(i){
  const l=cart[i];if(!l||!l.cfg)return;
  document.getElementById('cartSheet').classList.remove('open');
  if(l.cfg.kind==='pizza')openBuilder(null,{cfg:l.cfg,idx:i});
  else{const f=findItem(l.cfg.itemId);if(f)openGBuilder(f.it,{cfg:l.cfg,idx:i});}
}

/* ================= penguin mascot hints =================
   CONTEXTUAL ONLY — no timers, no intervals, no random popups.
   The penguin waddles in from the left edge when exactly one order-relevant
   condition holds, and waddles away when it resolves. Max 1 hint per order
   (resets when the cart is emptied). Never blocks checkout. */
const HINTS={giftThreshold:4000 /* $40 → SAMPLE free garlic sticks; owner edits the real gift rule later */};
const hintSt={done:false,shownId:null,muted:false};
try{hintSt.muted=localStorage.getItem('lf_hints_muted')==='1';}catch(e){}
const pengEl=document.getElementById('pengy');
function syncMuteLabel(){const l=document.getElementById('pengyMuteLabel');
  if(l)l.textContent=t(hintSt.muted?'hints_on':'hints_off');}
function penguinCondition(){
  const tt=totals();
  if(orderType==='delivery'&&tt.sub>0&&tt.sub<MIN_DELIVERY_TOTAL)   // priority: blocks payment
    return{id:'mindel',html:t('hint_mindel').replace('{m}',fmt(MIN_DELIVERY_TOTAL)).replace('{x}',fmt(MIN_DELIVERY_TOTAL-tt.sub))};
  if(tt.sub>0&&tt.sub<HINTS.giftThreshold)
    return{id:'gift',html:t('hint_gift').replace('{x}',fmt(HINTS.giftThreshold-tt.sub))};
  if(cart.some(l=>l.ill==='pizza'&&!l.xcheese))
    return{id:'xcheese',html:t('hint_xcheese')};
  const hasSavory=cart.some(l=>['pizza','salad'].includes(l.ill));
  const hasDessert=cart.some(l=>['cake','shake'].includes(l.ill));
  if(hasSavory&&!hasDessert)
    return{id:'dessert',html:t('hint_dessert')};
  if(cart.length>0&&!cart.some(l=>l.xdips&&l.xdips.length)&&document.getElementById('cartSheet').classList.contains('open'))
    return{id:'sauce',html:t('hint_sauce')};  // end of order: offer an extra dipping sauce
  return null;
}
function penguinShow(h){
  hintSt.done=true;hintSt.shownId=h.id;   // max 1 hint per order
  document.getElementById('pengyText').innerHTML=h.html;
  document.getElementById('pengyBubble').classList.add('show');
  pengEl.classList.remove('out');pengEl.classList.add('in');
}
function penguinHide(){
  document.getElementById('pengyBubble').classList.remove('show');
  pengEl.classList.remove('in','idle');pengEl.classList.add('out');
}
pengEl.addEventListener('animationend',e=>{
  if(e.animationName==='pengywalkin'){pengEl.classList.remove('in');pengEl.classList.add('idle');}
  if(e.animationName==='pengywalkout'){pengEl.classList.remove('out');}
});
function penguinTick(){
  const visible=pengEl.classList.contains('in')||pengEl.classList.contains('idle');
  if(hintSt.muted){if(visible)penguinHide();return;}
  const c=penguinCondition();
  if(!c){if(visible)penguinHide();return;}       // condition resolved → waddles away
  if(!visible&&!hintSt.done)penguinShow(c);       // new relevant condition → waddles in
}
document.getElementById('pengyX').onclick=()=>{hintSt.done=true;penguinHide();};
document.getElementById('pengyImg').onclick=()=>{
  const b=document.getElementById('pengyBubble');
  b.classList.toggle('show');  // tap the penguin = peek/hide the current hint
};
document.getElementById('pengyMute').onclick=()=>{
  hintSt.muted=!hintSt.muted;
  try{localStorage.setItem('lf_hints_muted',hintSt.muted?'1':'0');}catch(e){}
  syncMuteLabel();if(hintSt.muted)penguinHide();
};
/* keep the mute label correct after language switches */
const _origApplyLang=applyLang;
applyLang=function(){_origApplyLang();syncMuteLabel();};

syncMuteLabel();
applyLang();
