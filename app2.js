/* ================= ALLERGY — ONE order-level block (§10.8.4) =================
   Allergy is NOT a topping tweak and NOT a buried comment field: ONE
   block for the whole order — a checkbox "I have a food allergy" and a
   text field that appears when it is ticked. The block sits at the TOP
   of the pizza builder (above the toppings — the builder's old bottom
   note section is rebuilt as this block and moved up) and again at the
   TOP of the checkout form, before payment. Both blocks edit the SAME
   shared state (orderAllergy, app.js): fill it in the builder and it
   shows filled at checkout, editable in both places. Unticked = the
   customer just skips the block, nothing blocks the order. Ticked but
   empty = checkout stops with a gentle prompt to name the allergen.
   At order time the state feeds the EXISTING kitchen-ticket contract:
   EVERY item carries allergyAlert + the 'ALLERGY: <text>' note — a
   line's own per-item allergy note is merged in, never clobbered. */
let allergyNudged=false; // a submit was blocked → the gentle prompt shows
function allergyText(){return orderAllergy.on?orderAllergy.text.trim():'';}
function effAllergy(l){
  const oa=allergyText(),own=((l&&l.allergy)||'').trim();
  if(oa&&own&&own!==oa)return oa+' + '+own;
  return oa||own||null;
}
function allergyValid(){return !orderAllergy.on||!!allergyText();}
function allergyBlock(ids){
  const wrap=document.createElement('div');
  wrap.className='algbox';if(ids.box)wrap.id=ids.box;
  const row=document.createElement('label');row.className='algrow';
  const chk=document.createElement('input');chk.type='checkbox';chk.id=ids.chk;
  const warn=document.createElement('span');warn.className='algwarn';warn.textContent='⚠';
  const bold=document.createElement('b');bold.setAttribute('data-t','allergy_have');bold.textContent=t('allergy_have');
  row.appendChild(chk);row.appendChild(warn);row.appendChild(bold);
  const field=document.createElement('div');field.className='algfield';field.id=ids.field;field.hidden=true;
  const lab=document.createElement('label');lab.setAttribute('data-t','allergy_what');lab.textContent=t('allergy_what');lab.htmlFor=ids.note;
  const note=document.createElement('input');note.id=ids.note;note.type='text';note.setAttribute('autocomplete','off');
  note.setAttribute('data-ph','allergy_what_ph');note.placeholder=t('allergy_what_ph');
  field.appendChild(lab);field.appendChild(note);
  const msg=document.createElement('div');msg.className='algmsg';msg.id=ids.msg;msg.hidden=true;
  msg.setAttribute('data-t','allergy_need');msg.textContent=t('allergy_need');
  wrap.appendChild(row);wrap.appendChild(field);wrap.appendChild(msg);
  return wrap;
}
function syncAllergyUI(){
  [['allergyChk','allergyNote','allergyField','allergyMsg'],
   ['coAllergyChk','coAllergyNote','coAllergyField','coAllergyMsg']].forEach(function(ids){
    const chk=document.getElementById(ids[0]),note=document.getElementById(ids[1]),
          fld=document.getElementById(ids[2]),msg=document.getElementById(ids[3]);
    if(!chk)return;
    chk.checked=orderAllergy.on;
    if(note&&document.activeElement!==note)note.value=orderAllergy.text;
    if(fld)fld.hidden=!orderAllergy.on;
    if(msg)msg.hidden=!(allergyNudged&&orderAllergy.on&&!orderAllergy.text.trim());
  });
}
function wireAllergy(chkId,noteId){
  const chk=document.getElementById(chkId),note=document.getElementById(noteId);
  if(chk)chk.addEventListener('change',function(){
    orderAllergy.on=chk.checked;syncAllergyUI();renderCart();
    if(chk.checked&&note)note.focus();
  });
  if(note)note.addEventListener('input',function(){
    orderAllergy.text=note.value;syncAllergyUI();renderCart();
  });
}
function allergyGate(){
  if(allergyValid())return true;
  allergyNudged=true;syncAllergyUI();
  const box=document.getElementById('coAlgBox');
  if(box&&box.scrollIntoView)box.scrollIntoView({behavior:'smooth',block:'center'});
  const note=document.getElementById('coAllergyNote');if(note)note.focus();
  return false;
}
(function initAllergyUI(){
  /* Builder: rebuild the old bottom note section as the shared block
     and move it to the very top of the builder — first thing seen,
     above size and above the toppings. The text input keeps its
     #allergyNote id (the builder already reads/writes that id). */
  const sec=document.getElementById('bs-allergy');
  if(sec){
    sec.innerHTML='';
    sec.appendChild(allergyBlock({chk:'allergyChk',field:'allergyField',note:'allergyNote',msg:'allergyMsg'}));
    const body=document.getElementById('bBody');
    if(body)body.insertBefore(sec,body.firstChild);
  }
  /* Checkout: the same block at the top of the form, before Name/payment. */
  const nameInput=document.getElementById('cName');
  const nameField=nameInput&&nameInput.closest('.field');
  if(nameField&&nameField.parentNode)
    nameField.parentNode.insertBefore(
      allergyBlock({box:'coAlgBox',chk:'coAllergyChk',field:'coAllergyField',note:'coAllergyNote',msg:'coAllergyMsg'}),
      nameField);
  /* Cart summary: the visible "⚠ Allergy: …" line under the cart lines. */
  const linesEl=document.getElementById('lines');
  if(linesEl&&linesEl.parentNode){
    const line=document.createElement('div');
    line.id='cartAllergyLine';line.className='algline';line.hidden=true;
    linesEl.parentNode.insertBefore(line,linesEl.nextSibling);
  }
  wireAllergy('allergyChk','allergyNote');
  wireAllergy('coAllergyChk','coAllergyNote');
  syncAllergyUI();
})();

/* ================= PIZZA BUILDER ================= */
/* Extra-dip QUANTITIES (owner requirement 2026-10-24): xdips is a map
   id -> qty (0 = not ordered). normXdips accepts the old array form
   (each entry = 1) so saved/edited lines keep working. */
function normXdips(x){ if(!x) return {}; if(Array.isArray(x)){ const m={}; x.forEach(d=>{m[d]=(m[d]||0)+1;}); return m; } const m={}; Object.keys(x).forEach(d=>{ if(x[d]>0) m[d]=x[d]; }); return m; }
function xdipEntries(x){ const m=normXdips(x); return Object.keys(m).map(d=>({id:d,qty:m[d]})); }
function xdipTotal(x){ return xdipEntries(x).reduce((a,e)=>a+e.qty,0); }
const B={size:0,crust:0,sauce:0,cheese:'normal',shape:'round',tops:{},qty:1,freeDip:'ranch',xdips:{},editIdx:null};
function openBuilder(presetItem,edit){
  if(edit&&edit.cfg){const c=edit.cfg;  // "Edit" from cart: reopen with the saved configuration
    B.size=c.size;B.crust=c.crust;B.sauce=c.sauce;B.cheese=c.cheese;B.shape=c.shape||'round';
    B.freeDip=c.freeDip;B.xdips=normXdips(c.xdips);B.tops=JSON.parse(JSON.stringify(c.tops));
    B.editIdx=edit.idx;
    B.qty=cart[edit.idx]?cart[edit.idx].qty:1;
  }else{
    B.size=0;B.crust=0;B.sauce=0;B.cheese='normal';B.shape='round';B.qty=1;B.freeDip=FREE_DIP_DEFAULT;B.xdips={};
    B.tops=presetItem&&presetItem.preset?JSON.parse(JSON.stringify(presetItem.preset)):{};
    if(presetItem&&presetItem.sizes.length>1){/* keep default size */}
    B.editIdx=null;
  }
  buildBuilderUI();updateBuilder();
  /* The builder block shows the ORDER-level allergy state (§10.8.4),
     shared with checkout. A line's own per-item note is never restored
     into it (and never dropped either — bAdd preserves it on save). */
  syncAllergyUI();
  document.getElementById('bSheet').classList.add('open');
  document.getElementById('bBody').scrollTop=0;
}
document.getElementById('bClose').onclick=()=>document.getElementById('bSheet').classList.remove('open');
document.getElementById('bBackFixed').onclick=()=>document.getElementById('bSheet').classList.remove('open');

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
  BUILDER.crusts.forEach((c,i)=>cr.appendChild(segBtn(tname(c),c.price,i===B.crust,()=>{B.crust=i;const cc=BUILDER.crusts[i];B.shape=cc.shape||'round';buildBuilderUI();updateBuilder();},'bs-sauce')));
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
  DIPS.forEach(d=>{
    const q=B.xdips[d.id]||0;
    const row=document.createElement('div');
    row.style.cssText='display:flex;align-items:center;gap:8px;width:100%;padding:6px 0';
    const nm=document.createElement('span');nm.style.flex='1';nm.textContent=t('dip_'+d.id)+` (+${fmt(EXTRA_DIP_PRICE)})`;
    const minus=document.createElement('button');minus.textContent='\u2212';
    minus.style.cssText='border:3px solid var(--black);border-radius:8px;background:#fff;width:32px;height:32px;font-size:18px;font-weight:bold;cursor:pointer';
    minus.onclick=()=>{const v=(B.xdips[d.id]||0)-1;if(v<=0)delete B.xdips[d.id];else B.xdips[d.id]=v;buildBuilderUI();updateBuilder();};
    const val=document.createElement('span');val.style.cssText='min-width:24px;text-align:center;font-weight:bold';val.textContent=q;
    const plus=document.createElement('button');plus.textContent='+';
    plus.style.cssText='border:3px solid var(--black);border-radius:8px;background:var(--yellow);width:32px;height:32px;font-size:18px;font-weight:bold;cursor:pointer';
    plus.onclick=()=>{B.xdips[d.id]=(B.xdips[d.id]||0)+1;buildBuilderUI();updateBuilder();};
    row.appendChild(nm);row.appendChild(minus);row.appendChild(val);row.appendChild(plus);
    xd.appendChild(row);});
  /* Topping price is the SAME for all toppings — it only varies by pizza
     size (owner requirement 2026-10-24). Price lives ONCE here, in the
     section header, and follows size/crust changes because buildBuilderUI
     re-runs on every such change. Rows and half buttons stay plain. */
  let tp2=document.getElementById('bTopsPrice');
  if(!tp2){tp2=document.createElement('div');tp2.id='bTopsPrice';tp2.style.cssText='font-family:Arial;font-size:12px;margin:2px 0 6px';
    document.getElementById('bs-tops').insertBefore(tp2,document.getElementById('bTops'));}
  tp2.textContent='\u2022 \u00bd +'+fmt(TOPPING_PRICE[builderSizeKey()].half)+' / '+t('h_whole')+' +'+fmt(TOPPING_PRICE[builderSizeKey()].whole);
  const tw=document.getElementById('bTops');tw.innerHTML='';
  BUILDER.tops.forEach(tp=>{
    const st=B.tops[tp.id],on=!!st;
    const row=document.createElement('div');row.className='toprow'+(on?' on':'');
    row.innerHTML=`<div class="tophead"><span class="tdot" style="background:${tp.color}"></span>
      <span class="tname">${tname(tp)}</span>
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
  const csz=BUILDER.crusts[B.crust];
  let p=(csz.base||BUILDER.sizes[B.size].price)+csz.price+BUILDER.sauces[B.sauce].price;
  const ch=BUILDER.cheese.find(c=>c.id===B.cheese);p+=ch.price;
  Object.keys(B.tops).forEach(tid=>{const tp=BUILDER.tops.find(x=>x.id===tid);if(tp)p+=toppingPrice(tp);});
  p+=xdipTotal(B.xdips)*EXTRA_DIP_PRICE;
  return p;
}
/* Calories in the builder (menu-data.js `cal` fields only — see the
   CALORIES convention there): base = BUILDER.sizes[size].cal (crust +
   sauce + cheese for that size); each topping adds its cal — a number
   (whole normal portion) or an object keyed like TOPPING_PRICE. Base
   unknown → null → the calorie line is hidden entirely. */
function toppingCal(tp){
  if(!tp||tp.cal==null)return null;
  if(typeof tp.cal==='number')return tp.cal;
  const v=tp.cal[builderSizeKey()];
  return typeof v==='number'?v:null;
}
function builderCalories(){
  const sz=BUILDER.sizes[B.size];
  if(!sz||typeof sz.cal!=='number')return null;
  let total=sz.cal;
  Object.keys(B.tops).forEach(tid=>{const c=toppingCal(BUILDER.tops.find(x=>x.id===tid));if(c!=null)total+=c;});
  return total;
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
  const xe0=xdipEntries(B.xdips);if(xe0.length)parts.push(t('extra_dip_name')+': '+xe0.map(e=>t('dip_'+e.id)+(e.qty>1?' \u00d7'+e.qty:'')).join(', '));
  if(B.shape!=='round')parts.push(tname(BUILDER.shapes.find(x=>x.id===B.shape)));
  return parts.join(' • ');
}
function updateBuilder(){
  renderPizzaSVG();
  const bc=builderCalories();
  document.getElementById('bsummary').innerHTML='<b>'+pizzaSummary()+'</b>'
    +(bc!=null?`<div class="cal-line">${bc} cal</div>`:'');
  const p=builderPrice();
  /* quantity stepper (created once, lives next to the Add button) */
  let qc=document.getElementById('bQtyCtl');
  if(!qc){
    qc=document.createElement('div');qc.id='bQtyCtl';qc.className='qtyctl';
    qc.innerHTML='<button type="button" data-qdec aria-label="−">−</button><span class="qv"></span><button type="button" data-qinc aria-label="+">+</button>';
    const cta=document.getElementById('bCTA');
    cta.insertBefore(qc,document.getElementById('bAdd'));
    qc.querySelector('[data-qdec]').onclick=()=>{if(B.qty>1)B.qty--;updateBuilder();};
    qc.querySelector('[data-qinc]').onclick=()=>{if(B.qty<20)B.qty++;updateBuilder();};
  }
  qc.querySelector('.qv').textContent=t('qty')+': '+B.qty;
  document.getElementById('bAdd').textContent=`${B.editIdx!=null?t('save_item'):t('add_to_cart')} — ${fmt(p*B.qty)}`;
}
document.getElementById('bAdd').onclick=()=>{
  if(isPaused())return;
  const p=builderPrice();
  /* Pull the builder block straight into the shared order state (belt &
     braces on top of the live input handlers). The pizza line itself
     carries NO order allergy — orderAllergy covers the whole order at
     ticket time; only a pre-existing per-item note on an edited line is
     preserved, so editing can never silently drop it. */
  const bChk=document.getElementById('allergyChk'),bNote=document.getElementById('allergyNote');
  if(bChk&&bNote){orderAllergy.on=bChk.checked;orderAllergy.text=bNote.value;syncAllergyUI();}
  const prevAlg=B.editIdx!=null&&cart[B.editIdx]?cart[B.editIdx].allergy||null:null;
  const line={name:t('build_title'),name_en:T.en.build_title,
    desc:pizzaSummary(),desc_en:withLang('en',pizzaSummary),unit:p,qty:B.qty,ill:'pizza',xcheese:(B.cheese==='extra'),
    freeDip:B.freeDip,xdips:Object.assign({},B.xdips),allergy:prevAlg,
    cfg:{kind:'pizza',size:B.size,crust:B.crust,sauce:B.sauce,cheese:B.cheese,shape:B.shape,
      tops:JSON.parse(JSON.stringify(B.tops)),freeDip:B.freeDip,xdips:Object.assign({},B.xdips)}};
  const bc=builderCalories();if(bc!=null)line.cal=bc; // per-pizza total (base + toppings), rides into order + ticket
  if(B.editIdx!=null){cart[B.editIdx]=line;B.editIdx=null;}  // "Edit" → replace, don't duplicate
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
  if(edit&&edit.cfg){GB.sel=JSON.parse(JSON.stringify(edit.cfg.sel));GB.editIdx=edit.idx;GB.qty=cart[edit.idx]?cart[edit.idx].qty:1;}  // "Edit" from cart
  else{
    if(it.builder==='sub')GB.sel={size:'half',bread:'white',fillings:['turkey'],cheese:'mozz',veggies:['lettuce','tomato'],sauce:'mayo'};
    else if(it.builder==='salad')GB.sel={base:'romaine',protein:'none',ingredients:['croutons','parmesan'],dressing:'ranch'};
    else if(it.builder==='wings')GB.sel={count:'w6',wtype:'plain'};
  else GB.sel={size:(it.drinkSizes||DRINKDEF.sizes)[0].id,flavor:'pepsi'};
    GB.editIdx=null;
  }
  renderG();
  document.getElementById('gSheet').classList.add('open');
}
document.getElementById('gClose').onclick=()=>document.getElementById('gSheet').classList.remove('open');
document.getElementById('gBackFixed').onclick=()=>document.getElementById('gSheet').classList.remove('open');

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
  const bc=SUB_ART.breadColor(s.bread), sc=s.size==='whole'?1.12:0.98;
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
  }else{const D=DRINKDEF,SZ=it.drinkSizes||D.sizes;p+=SZ.find(x=>x.id===s.size).p;}
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
  }else{const D=DRINKDEF,SZ=GB.item.drinkSizes||D.sizes,one=(l,id)=>nm(l.find(x=>x.id===id));
    parts.push(one(SZ,s.size),one(D.flavors,s.flavor));}
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
  }else{const D=DRINKDEF,SZ=it.drinkSizes||D.sizes;
    body.appendChild(gSec(t('sec_dsize'),gSeg(SZ,s.size,id=>{s.size=id;})));
    body.appendChild(gSec(t('sec_flavor'),gSeg(D.flavors,s.flavor,id=>{s.flavor=id;})));
  }
  const sum=document.createElement('div');sum.id='bsummary';sum.innerHTML='<b>'+gSummary()+'</b>';body.appendChild(sum);
  /* quantity stepper (created once, lives next to the Add button) */
  let qc=document.getElementById('gQtyCtl');
  if(!qc){
    qc=document.createElement('div');qc.id='gQtyCtl';qc.className='qtyctl';
    qc.innerHTML='<button type="button" data-qdec aria-label="−">−</button><span class="qv"></span><button type="button" data-qinc aria-label="+">+</button>';
    const gAddBtn=document.getElementById('gAdd');
    gAddBtn.parentNode.insertBefore(qc,gAddBtn);
    qc.querySelector('[data-qdec]').onclick=()=>{if(GB.qty>1)GB.qty--;renderG();};
    qc.querySelector('[data-qinc]').onclick=()=>{if(GB.qty<20)GB.qty++;renderG();};
  }
  qc.querySelector('.qv').textContent=t('qty')+': '+GB.qty;
  document.getElementById('gAdd').textContent=`${GB.editIdx!=null?t('save_item'):t('add_to_cart')} — ${fmt(gPrice()*GB.qty)}`;
}
document.getElementById('gAdd').onclick=()=>{
  if(isPaused())return;
  const it=GB.item,p=gPrice();
  const line={name:mname(it),name_en:it.name.en,desc:gSummary(),desc_en:withLang('en',gSummary),unit:p,qty:GB.qty,ill:it.art,
    cfg:{kind:GB.kind,itemId:it.id,sel:JSON.parse(JSON.stringify(GB.sel))}};
  const gc=itemCal(it,it.sizes[0]);if(gc!=null)line.cal=gc;
  if(GB.editIdx!=null){cart[GB.editIdx]=line;GB.editIdx=null;}
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
const {FIRST_ORDER_DISCOUNT_PCT} = window.LF_MENU_DATA; /* value lives in menu-data.js — single source */
function isRegistered(){
  const cb=document.getElementById('mkAccount'),ph=document.getElementById('cPhone');
  return !!(cb&&cb.checked&&ph&&ph.value.trim().length>3);
}
function totals(){
  const sub=cart.reduce((s,l)=>s+l.unit*l.qty,0);
  /* delivery fee applies once delivery is chosen AND the zone is confirmed —
     or an address is typed in (checking the zone stays a stub, but a typed
     address must never silently mean a $0 delivery fee) */
  const addrEl=document.getElementById('addr');
  const hasAddr=!!(addrEl&&addrEl.value.trim().length>5);
  const fee=(orderType==='delivery'&&(zoneOk||hasAddr))?DELIVERY_FEE:0;
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
  /* the checkout bar lives only while the order is being built — hidden on a fresh homepage */
  document.getElementById('bar').style.display=cart.length?'flex':'none';
  applyPausedBanner();
  const L=document.getElementById('lines');L.innerHTML='';
  cart.forEach((l,i)=>{const d=document.createElement('div');d.className='line small';
    d.innerHTML=`<span class="thumb">${artFor(l.ill||'pizza')}</span><span><a href="#" data-dec="${i}" title="−" style="color:var(--blue);font-weight:bold;padding:0 5px">−</a>${l.qty}×<a href="#" data-inc="${i}" title="+" style="color:var(--blue);font-weight:bold;padding:0 5px">+</a> ${l.name}<br><span style="color:#666">${l.desc||''}</span>${l.freeDip?'<br><span style="color:var(--green)">'+t('free_sauce')+': '+t('dip_'+l.freeDip)+'</span>':''}${(()=>{const xe=xdipEntries(l.xdips);return xe.length?'<br><span style="color:#666">'+t('extra_dip_name')+': '+xe.map(e=>t('dip_'+e.id)+(e.qty>1?' \u00d7'+e.qty:'')).join(', ')+'</span>':'';})()}${l.allergy?'<br><b style="color:var(--red)">'+t('allergy_tag')+': '+l.allergy+'</b>':''}</span><span>${fmt(l.unit*l.qty)} ${l.cfg?`<a href="#" data-e="${i}" title="${t('edit_item')}" style="color:var(--blue)">✎</a> `:''}<a href="#" data-i="${i}" style="color:var(--red)">✕</a></span>`;
    L.appendChild(d);});
  L.querySelectorAll('a[data-i]').forEach(a=>a.onclick=e=>{e.preventDefault();cart.splice(+a.dataset.i,1);renderCart();});
  L.querySelectorAll('a[data-inc]').forEach(a=>a.onclick=e=>{e.preventDefault();cart[+a.dataset.inc].qty++;renderCart();});
  L.querySelectorAll('a[data-dec]').forEach(a=>a.onclick=e=>{e.preventDefault();const i=+a.dataset.dec;if(cart[i].qty>1)cart[i].qty--;else cart.splice(i,1);renderCart();});
  L.querySelectorAll('a[data-e]').forEach(a=>a.onclick=e=>{e.preventDefault();editCartLine(+a.dataset.e);});
  /* order-level allergy (§10.8.4): ONE visible ⚠ line for the whole order */
  const calEl=document.getElementById('cartAllergyLine');
  if(calEl){const at=allergyText();calEl.hidden=!at;
    if(at)calEl.textContent='⚠ '+t('allergy_tag')+': '+at;}
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
  renderPayLater();
  penguinTick();
}
document.getElementById('checkoutBtn').onclick=()=>{if(cart.length)document.getElementById('cartSheet').classList.add('open');};
document.getElementById('cartBack').onclick=()=>document.getElementById('cartSheet').classList.remove('open');

/* ================= checkout: the iron rule ================= */
let paid=false;
function stripeStubPay(method,btn){
  if(!allergyGate())return; // allergy ticked but not named → gentle prompt, no charge (§10.8.4)
  const btns=[payCard,payApple,payGoogle];btns.forEach(b=>b.disabled=true);
  const label=btn.querySelector('span')||btn,orig=label.innerHTML;
  label.innerHTML='<span class="spin"></span> '+t('processing');
  setTimeout(()=>{btns.forEach(b=>b.disabled=false);label.innerHTML=orig;paid=true;placeOrder(method);},1200);
}
const payCard=document.getElementById('payCard'),payApple=document.getElementById('payApple'),payGoogle=document.getElementById('payGoogle');

/* ================= Stripe card (Stage C1, config-gated) =================
   Elements mount ONLY when a publishable key is configured
   (stripe-config.js → window.LF_STRIPE_PUBLISHABLE_KEY). No key: the
   card area shows the plain "coming soon — pay at pickup" note and the
   Card button never charges. With a key: Stripe.js loads and a card
   Element mounts into #cardElement (card data goes straight to
   Stripe — it never touches our servers). Confirming against a
   PaymentIntent activates with the API order flow (C1 next increment);
   until then the button shows the mounted form + readiness note
   instead of faking a charge. window.LF_CARD exposes state for
   diagnostics and the click-through tests. */
const LF_CARD={pk:'',mounted:false,stripe:null,cardEl:null};
window.LF_CARD=LF_CARD;
function lfCardShow(which){
  const box=document.getElementById('cardBox');if(!box)return;
  box.style.display='block';
  document.getElementById('cardSoon').style.display=which==='soon'?'block':'none';
  document.getElementById('cardElement').style.display=which==='form'?'block':'none';
  document.getElementById('cardReadyNote').style.display=which==='form'?'block':'none';
}
function lfMountStripe(pk){
  const doMount=()=>{
    try{
      LF_CARD.stripe=window.Stripe(pk);
      const elements=LF_CARD.stripe.elements();
      LF_CARD.cardEl=elements.create('card',{hidePostalCode:true});
      LF_CARD.cardEl.mount('#cardElement');
      LF_CARD.mounted=true;
      lfCardShow('form');
    }catch(e){lfCardShow('soon');}
  };
  if(window.Stripe){doMount();return;}
  const s=document.createElement('script');
  s.src='https://js.stripe.com/v3/';
  s.onload=doMount;
  s.onerror=()=>lfCardShow('soon');
  document.head.appendChild(s);
}
(function initLfCard(){
  LF_CARD.pk=(window.LF_STRIPE_PUBLISHABLE_KEY||'').trim();
  if(!LF_CARD.pk){lfCardShow('soon');return;}
  lfMountStripe(LF_CARD.pk);
})();
payCard.onclick=()=>{
  lfCardShow(LF_CARD.mounted?'form':'soon');
  const box=document.getElementById('cardBox');
  if(box&&box.scrollIntoView)box.scrollIntoView({behavior:'smooth',block:'center'});
};
payApple.onclick=()=>stripeStubPay('apple_pay',payApple);
payGoogle.onclick=()=>stripeStubPay('google_pay',payGoogle);
document.getElementById('noPay').onclick=()=>document.getElementById('warnSheet').classList.add('open');
document.getElementById('warnBack').onclick=()=>document.getElementById('warnSheet').classList.remove('open');

/* ================= pay at the store — the owner's safety valve (§10.9) =================
   The "Pay at the store" choice EXISTS only while the owner's
   allowPayLater toggle is ON. The checkout reads the shared program
   settings key ('la-felice.settings.v1' — the same key her owner
   screen writes) dynamically: at load and on every cart render, so
   flipping her ONE owner switch shows/hides the button with no
   rebuild and no other control anywhere. Default / absent /
   unreadable = OFF: the button is never created, no text mentions
   it, and checkout behaves exactly as it always has — every order
   prepaid 100%. */
function payLaterAllowed(){
  try{
    const s=JSON.parse(localStorage.getItem('la-felice.settings.v1')||'{}');
    return !!(s&&s.allowPayLater===true);
  }catch(e){return false;}
}
function renderPayLater(){
  const anchor=document.getElementById('payGoogle');
  if(!anchor)return;
  const on=payLaterAllowed();
  let btn=document.getElementById('payAtStore');
  if(on&&!btn){
    btn=document.createElement('button');
    btn.className='paybtn';btn.id='payAtStore';
    btn.onclick=payAtStoreNow;
    anchor.parentNode.insertBefore(btn,anchor.nextSibling);
  }
  if(btn){
    btn.textContent=t('pay_at_store');
    btn.style.display=on?'':'none';
    btn.disabled=orderType==='delivery'&&totals().sub>0&&totals().sub<MIN_DELIVERY_TOTAL;
  }
  /* while the option is ON, the static "we cannot accept an order
     without payment" box under the buttons would contradict it */
  const wb=document.querySelector('#noPay + .warnbox');
  if(wb)wb.style.display=on?'none':'';
}
function payAtStoreNow(){
  if(!payLaterAllowed())return; // her toggle rules — never place while off
  if(!allergyGate())return;      // same allergy gate as card payment (§10.8.4)
  paid=true;placeOrder('pay_at_store');
}
renderPayLater();

/* Kitchen ticket → the KDS outbox (apps/kitchen contract: key
   'la-felice.kitchen.outbox.v1', JSON array, allergy items FIRST, English
   names only, NO prices). The kitchen screen on the same device polls this
   key and renders the ticket; written here so a site order shows up in the
   kitchen exactly like a register order. */
function lfKitchenTicket(num,isTime,when,tipMinor,payLater){
  try{
    const dipName=id=>({ranch:'Ranch',marinara:'Marinara',garlic:'Garlic Sauce',bbq:'BBQ',hot:'Hot Sauce'})[id]||id;
    const stationFor=l=>l.ill==='pizza'?'pizza':l.ill==='wings'?'fry'
      :(l.ill==='soda'||l.ill==='shake'||l.ill==='coffee')?'drink':l.ill==='salad'?'other':'oven';
    const items=cart.map(l=>{
      const mods=[];
      let sizeLabel='';
      const descEn=l.desc_en||l.desc||'';
      if(l.cfg){ if(descEn)mods.push(descEn); }            // builder lines: full build in modifiers
      else if(descEn&&descEn.length<=8)sizeLabel=descEn;  // simple lines: desc IS the size label
      else if(descEn)mods.push(descEn);                   // deals etc.: long text → modifier line
      if(l.freeDip)mods.push('1 FREE sauce: '+dipName(l.freeDip));
      xdipEntries(l.xdips).forEach(e=>mods.push('Extra sauce: '+dipName(e.id)+(e.qty>1?' \u00d7'+e.qty:'')));
      const eff=effAllergy(l); // order-level state merged with the line's own note (§10.8.4)
      const it={name:l.name_en||l.name,sizeLabel,modifiers:mods,
        allergyAlert:!!eff,station:stationFor(l),quantity:l.qty};
      if(typeof l.cal==='number')it.cal=l.cal; // per-line calories, only when known (additive — shape unchanged otherwise)
      if(eff)it.notes='ALLERGY: '+eff;
      return it;
    });
    items.sort((a,b)=>(b.allergyAlert?1:0)-(a.allergyAlert?1:0)); // allergy first (KDS contract)
    const ticket={id:'ticket-'+num,orderId:num,channel:'site',type:orderType,items,
      tipMinor:tipMinor||0, /* C1: the tip chosen in the gentle tip window rides the ticket contract */
      createdAtUtc:new Date().toISOString(),
      customer:(document.getElementById('cName').value||'').trim(),
      phone:(document.getElementById('cPhone').value||'').trim(),
      address:orderType==='delivery'?(document.getElementById('addr').value||'').trim():''};
    /* pay-later (§10.9): additive marking — the kitchen sees this order
       is NOT PAID and must be settled at the store */
    if(payLater){ticket.paymentTerms='pay_at_store';ticket.unpaid=true;}
    if(isTime&&when){const d=new Date(when);if(!isNaN(d))ticket.scheduledForUtc=d.toISOString();}
    const key='la-felice.kitchen.outbox.v1';
    const arr=JSON.parse(localStorage.getItem(key)||'[]');
    arr.push(ticket);
    localStorage.setItem(key,JSON.stringify(arr));
  }catch(e){}
}

function placeOrder(method){
  if(!paid){document.getElementById('warnSheet').classList.add('open');return;}
  if(!allergyGate())return; // backstop: ticked-but-unnamed allergy never places (§10.8.4)
  const tt=totals();
  const isTime=document.getElementById('isTimeOrder').checked;
  const when=document.getElementById('timeWhen').value;
  const num='LF-'+Math.floor(100000+Math.random()*900000);
  lfSaveOrder({num,ts:Date.now(),mode:orderType,total:tt.total,tipMinor:tt.tip,
    ...(method==='pay_at_store'?{paymentTerms:'pay_at_store'}:{}),
    lines:cart.map(l=>({qty:l.qty,name:l.name,name_en:l.name_en||l.name,unit:l.unit,ill:l.ill||'pizza',
      ...(typeof l.cal==='number'?{cal:l.cal}:{})}))});
  lfKitchenTicket(num,isTime,when,tt.tip,method==='pay_at_store'); // → kitchen display outbox (same-device KDS)
  // IRON RULE: the customer orders in EN/RU/ES, but the cashier screen and kitchen ticket are ALWAYS English.
  // The snapshot sent to the API carries BOTH name_en (canonical) and name_localized (customer display).
  // TODO(server): POST /v1/orders with lines below — packages/api/lib/tickets.ts renders ONLY name_en.
  const orderSnapshot=cart.map(l=>({name_en:l.name_en||l.name,name_localized:l.name,
    desc_en:l.desc_en||l.desc,desc_localized:l.desc,unit:l.unit,qty:l.qty,allergy:effAllergy(l),
    ...(typeof l.cal==='number'?{cal:l.cal}:{})}));
  document.getElementById('ordNum').textContent='#'+num;
  const tb=document.getElementById('timeBanner');
  if(isTime&&when){tb.style.display='block';document.getElementById('timeWhenOut').textContent=new Date(when).toLocaleString();}
  else tb.style.display='none';
  const dl=document.getElementById('doneLines');dl.innerHTML='';
  cart.forEach(l=>{const d=document.createElement('div');d.className='line';const eff=effAllergy(l);
    d.innerHTML=`<span>${l.qty}× ${l.name}${l.desc?'<br><span style="color:#666">'+l.desc+'</span>':''}${eff?'<br><b style="color:var(--red)">'+t('allergy_tag')+': '+eff+'</b> <span style="color:#666">(→ kitchen ticket)</span>':''}</span><span>${fmt(l.unit*l.qty)}</span>`;dl.appendChild(d);});
  const meta=document.createElement('div');meta.className='line small';
  const payLabel=method==='pay_at_store'
    ? t('pay_at_store')+' — '+t('pay_at_store_note')
    : t('paid')+': '+method;
  meta.innerHTML=`<span>${orderType==='pickup'?t('pickup'):t('delivery')} • ${payLabel}${taxEx.approved?'<br>'+t('taxexempt_line'):''}</span><span>${orderType==='pickup'?t('pickup_eta'):t('delivery_eta').replace('{eta}','45')}</span>`;
  dl.appendChild(meta);
  document.getElementById('doneTotal').textContent=fmt(tt.total);
  const dtl=document.querySelector('#doneSheet .line.total span');
  if(dtl)dtl.textContent=method==='pay_at_store'?t('to_pay'):t('paid');
  try{localStorage.setItem('lf_last',JSON.stringify(cart.map(l=>({name:l.name,name_en:l.name_en,desc:l.desc,desc_en:l.desc_en,unit:l.unit,qty:l.qty,ill:l.ill,...(typeof l.cal==='number'?{cal:l.cal}:{})}))));}catch(e){}
  console.log('[order] created after payment:',{num,method,total:tt.total,tax:tt.tax,tipMinor:tt.tip,discount:tt.discount,taxExempt:taxEx.approved,
    consents:{sms:document.getElementById('consentSms').checked,email:document.getElementById('consentEmail').checked},
    // TODO(server): save consents to the customer profile (POST /v1/customers) — future mailing database
    timeOrder:isTime?when:null,allergies:[...new Set(cart.map(l=>effAllergy(l)).filter(Boolean))],lines:orderSnapshot});
  cart.length=0;paid=false;
  orderAllergy.on=false;orderAllergy.text='';allergyNudged=false;syncAllergyUI(); // allergy belongs to THAT order — the next one starts clean
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
    document.getElementById('reorderBtn').onclick=()=>{last.forEach(l=>cart.push({name:l.name,name_en:l.name_en||l.name,desc:l.desc,desc_en:l.desc_en||l.desc,unit:l.unit,qty:l.qty,ill:l.ill,...(typeof l.cal==='number'?{cal:l.cal}:{})}));renderCart();};
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
const {HINTS} = window.LF_MENU_DATA; /* gift rule lives in menu-data.js — single source */
const hintSt={done:false,shownId:null,muted:false,visible:false,arrived:false};
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
  if(cart.length>0&&!cart.some(l=>xdipTotal(l.xdips)>0)&&document.getElementById('cartSheet').classList.contains('open'))
    return{id:'sauce',html:t('hint_sauce')};  // end of order: offer an extra dipping sauce
  return null;
}
function penguinShow(h){
  hintSt.done=true;hintSt.shownId=h.id;hintSt.visible=true;hintSt.arrived=false;
  document.getElementById('pengyText').innerHTML=h.html;
  pengEl.classList.remove('out');pengEl.classList.add('in');
  /* the speech bubble appears only AFTER the penguin arrives — no flash, stays readable */
}
function penguinHide(){
  if(!hintSt.visible)return;
  hintSt.visible=false;hintSt.arrived=false;
  document.getElementById('pengyBubble').classList.remove('show');
  pengEl.classList.remove('in','idle');pengEl.classList.add('out');
}
pengEl.addEventListener('animationend',e=>{
  if(e.target!==pengEl)return;  /* ignore animations of the bubble / image inside */
  if(e.animationName==='pengywalkin'){
    pengEl.classList.remove('in');pengEl.classList.add('idle');hintSt.arrived=true;
    /* show the bubble only if the hint is still relevant now that he's here */
    if(hintSt.visible&&!hintSt.muted&&penguinCondition())
      document.getElementById('pengyBubble').classList.add('show');
    else
      penguinHide();
  }
  if(e.animationName==='pengywalkout'){pengEl.classList.remove('out');}
});
function penguinTick(){
  if(hintSt.muted){if(hintSt.visible)penguinHide();return;}
  const c=penguinCondition();
  if(!c){if(hintSt.visible&&hintSt.arrived)penguinHide();return;}  /* never cut the walk-in short */
  if(!hintSt.visible&&!hintSt.done)penguinShow(c);
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
