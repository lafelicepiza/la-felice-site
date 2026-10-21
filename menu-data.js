/* ============================================================================
   MENU DATA — ЕДИНЫЙ ИСТОЧНИК МЕНЮ И ЦЕН / SINGLE SOURCE FOR MENU & PRICES
   ----------------------------------------------------------------------------
   RU: Этот файл — ЕДИНЫЙ ИСТОЧНИК меню и цен для всей программы La Felice.
       Сюда смотрят: сайт для клиентов (и копия сайта на хосте программы
       /site/, и отдельный сайт lafelice.pizza), сама программа и будущее
       приложение для клиентов. Цены и меню правятся ТОЛЬКО здесь, в одном
       месте, — сайт вручную никто не редактирует: сайт сам подхватывает
       этот файл (при открытии он запрашивает свежую копию с хоста программы).
   EN: This file is the SINGLE SOURCE for the menu and prices of the whole
       La Felice program. The customer site (both the copy served from the
       program host at /site/ and the standalone lafelice.pizza), the program
       itself and the future customer app ALL read the menu from here.
       Edit prices ONLY here — the site picks this file up automatically,
       nobody ever edits the site by hand.
   ============================================================================ */

/* ================= sample data (SAMPLE — owner loads real menu) ================= */
/* SCOPE NOTE: everything below lives inside ONE block { ... } so the only
   thing this file exports to the page is window.LF_MENU_DATA (set at the
   bottom). The data consts must NOT be top-level: app.js / app2.js declare
   the same names from window.LF_MENU_DATA, and duplicate top-level const
   declarations are a SyntaxError that kills the whole app. */
{
/* SIZES: real inches — the visual radius scales with inches (Small visibly smaller).
   CRUSTS: gluten-free / cauliflower pin their own size via sizeIn (configurable).
   SHAPES: round + sicilian square today; add more shapes here later. */
const BUILDER={
 sizes:[{id:'s12',in:12,label:'12"',price:1399},{id:'s14',in:14,label:'14"',price:1599},{id:'s16',in:16,label:'16"',price:1799},{id:'s18',in:18,label:'18"',price:1999}],
 crusts:[{id:'hand',en:'Hand Tossed',ru:'Классическое',es:'Clásica',price:0},
  {id:'thin',en:'Thin',ru:'Тонкое',es:'Delgada',price:0},
  {id:'gf',en:'Gluten-Free 10"',ru:'Без глютена 10"',es:'Sin gluten 10"',price:0,base:1599,sizeIn:10},
  {id:'cauli',en:'Cauliflower 10"',ru:'Из цветной капусты 10"',es:'Coliflor 10"',price:0,base:1599,sizeIn:10},
  {id:'sic',en:'Sicilian 16-cut',ru:'Сицилийская (16 кусков)',es:'Siciliana (16 cortes)',price:0,base:2399,sizeIn:16,shape:'sicilian'}],
 shapes:[{id:'round',en:'Classic Round',ru:'Классическая круглая',es:'Redonda clásica'},{id:'sicilian',en:'Sicilian Square',ru:'Сицилийская квадратная',es:'Siciliana cuadrada'}],
 sauces:[{id:'tomato',en:'Tomato',ru:'Томатный',es:'Tomate',color:'#C0392B',price:0},{id:'white',en:'White Garlic',ru:'Чесночный',es:'Ajo',color:'#F3E9D2',price:0},{id:'bbq',en:'BBQ',ru:'Барбекю',es:'BBQ',color:'#7B3F00',price:50},{id:'none',en:'No sauce',ru:'Без соуса',es:'Sin salsa',color:null,price:0}],
 cheese:[{id:'light',price:0},{id:'normal',price:0},{id:'extra',price:175},{id:'none',price:0}],
 tops:[
  /* MEATS */
  {id:'pepperoni',en:'Pepperoni',ru:'Пепперони',es:'Pepperoni',color:'#B03A2E',shape:'pep'},
  {id:'sausage',en:'Sausage',ru:'Колбаски',es:'Salchicha',color:'#8B5A2B',shape:'saus'},
  {id:'steak',en:'Steak',ru:'Стейк',es:'Bistec',color:'#6E4A2F',shape:'saus'},
  {id:'bacon',en:'Bacon',ru:'Бекон',es:'Tocino',color:'#A93226',shape:'bacon'},
  {id:'meatballs',en:'Meatballs',ru:'Митболы',es:'Albóndigas',color:'#7B3F00',shape:'saus'},
  {id:'ham',en:'Ham',ru:'Ветчина',es:'Jamón',color:'#E58AA0',shape:'pep'},
  {id:'salami',en:'Salami',ru:'Салями',es:'Salami',color:'#A93226',shape:'pep'},
  {id:'capicola',en:'Capicola',ru:'Капикола',es:'Capicola',color:'#C0392B',shape:'pep'},
  {id:'chicken',en:'Chicken',ru:'Курица',es:'Pollo',color:'#D9A441',shape:'saus'},
  {id:'crab',en:'Crab Meat',ru:'Краб',es:'Cangrejo',color:'#E8A79E',shape:'dot'},
  {id:'shrimp',en:'Shrimp',ru:'Креветки',es:'Camarones',color:'#F0A080',shape:'dot'},
  {id:'gyro',en:'Gyro Meat',ru:'Мясо гиро',es:'Carne gyro',color:'#8B5A2B',shape:'saus'},
  /* VEGGIES */
  {id:'mushrooms',en:'Mushrooms',ru:'Грибы',es:'Champiñones',color:'#EAD9B8',shape:'mush'},
  {id:'gpeppers',en:'Green Peppers',ru:'Зелёный перец',es:'Pimiento verde',color:'#27AE60',shape:'gpep'},
  {id:'ronions',en:'Red Onions',ru:'Красный лук',es:'Cebolla roja',color:'#C080C0',shape:'onion'},
  {id:'tomatoes',en:'Tomatoes',ru:'Томаты',es:'Tomate',color:'#C0392B',shape:'dot'},
  {id:'blackolives',en:'Black Olives',ru:'Чёрные оливки',es:'Aceitunas negras',color:'#1A1A1A',shape:'olive'},
  {id:'greenolives',en:'Green Olives',ru:'Зелёные оливки',es:'Aceitunas verdes',color:'#7ED321',shape:'olive'},
  {id:'bpeppers',en:'Banana Peppers',ru:'Банановый перец',es:'Pimiento banana',color:'#F4D03F',shape:'gpep'},
  {id:'jalapenos',en:'Jalapeños',ru:'Халапеньо',es:'Jalapeños',color:'#1E8449',shape:'gpep'},
  {id:'spinach',en:'Spinach',ru:'Шпинат',es:'Espinaca',color:'#2E9E5B',shape:'dot'},
  {id:'broccoli',en:'Broccoli',ru:'Брокколи',es:'Brócoli',color:'#27AE60',shape:'mush'},
  {id:'pineapple',en:'Pineapple',ru:'Ананас',es:'Piña',color:'#F9DC5C',shape:'dot'},
  {id:'artichokes',en:'Artichokes',ru:'Артишоки',es:'Alcachofas',color:'#7D8C5C',shape:'mush'},
  {id:'rpeppers',en:'Roasted Red Peppers',ru:'Печёный перец',es:'Pimiento asado',color:'#C0392B',shape:'gpep'},
  {id:'pickles',en:'Pickles',ru:'Огурчики',es:'Pepinillos',color:'#1E8449',shape:'dot'},
  /* CHEESES */
  {id:'xcheese',en:'Extra Cheese',ru:'Доп. сыр',es:'Queso extra',color:'#F7DC6F',shape:'xch'},
  {id:'ricotta',en:'Ricotta',ru:'Рикотта',es:'Ricota',color:'#FFFDF5',shape:'xch'},
  {id:'feta',en:'Feta',ru:'Фета',es:'Feta',color:'#FFFFFF',shape:'dot'},
  {id:'parmesan',en:'Parmesan',ru:'Пармезан',es:'Parmesano',color:'#F5E6B8',shape:'dot'},
  {id:'gorgonzola',en:'Gorgonzola',ru:'Горгонзола',es:'Gorgonzola',color:'#D6DBDF',shape:'dot'},
  {id:'freshmozz',en:'Fresh Mozzarella',ru:'Свежая моцарелла',es:'Mozzarella fresca',color:'#FFFDF5',shape:'xch'},
  {id:'cheddar',en:'Cheddar',ru:'Чеддер',es:'Cheddar',color:'#F5A623',shape:'xch'}
 ]
};

/* REAL topping prices: half / whole topping depends on pizza size (owner's menu). */
const TOPPING_PRICE={s12:{half:99,whole:199},s14:{half:159,whole:299},s16:{half:199,whole:349},s18:{half:250,whole:399},sicilian:{half:250,whole:399},gf:{half:99,whole:199}};

/* ================= MENU — ONE CONFIG (SAMPLE DATA) =================
   The whole storefront renders from CATS + MENU below. To load the real menu,
   replace names/prices/photos HERE (or sync via API later) — no other code changes.
   item = {id, name:{en,ru,es}, desc:{en,ru,es}, art, sizes:[{id,label,price}],
           builder:null|'sub'|'salad'|'drink', preset, allergens:[], isNew, outOfStock}
   art = illustration key — see ART REGISTRY below; 'url:assets/x.png' = real photo. */
const CATS=[
 {id:'pizza',nameKey:'menu_pizza'},
 {id:'breakfast',nameKey:'menu_breakfast',hot:true},
 {id:'appetizers',nameKey:'menu_appetizers'},
 {id:'wings',nameKey:'menu_wings'},
 {id:'chicken',nameKey:'menu_chicken'},
 {id:'stromboli',nameKey:'menu_stromboli'},
 {id:'rolls',nameKey:'menu_rolls'},
 {id:'breadsticks',nameKey:'menu_breadsticks'},
 {id:'salads',nameKey:'menu_salads'},
 {id:'subs',nameKey:'menu_subs'},
 {id:'drinks',nameKey:'menu_drinks'},
 {id:'desserts',nameKey:'menu_desserts'},
 {id:'kids',nameKey:'menu_kids'},
 {id:'reorder',nameKey:'reorder_tab'},
];
const SZ1=p=>[{id:'reg',label:'',price:p}]; // single-size item
const SIG_SIZES=[{id:'s12',label:'12"',price:1599},{id:'s14',label:'14"',price:2199},{id:'s16',label:'16"',price:2599},{id:'s18',label:'18"',price:2999},{id:'sic',label:'Sicilian 16-cut',price:3299}];
const SUB_SIZES=[{id:'half',label:'Half',price:899},{id:'whole',label:'Whole',price:1799}];
const MENU={
pizza:[
 {id:'pz-cheese',name:{en:'Cheese Pizza',ru:'Пицца «Сырная»',es:'Pizza de queso'},desc:{en:'Classic mozzarella — customize it in the builder',ru:'Классическая моцарелла — собери свою в конструкторе',es:'Mozzarella clásica — ármala en el constructor'},art:'pizza',sizes:[{id:'s12',label:'12"',price:1399},{id:'s14',label:'14"',price:1599},{id:'s16',label:'16"',price:1799},{id:'s18',label:'18"',price:1999}],preset:{},allergens:['milk','gluten']},
 {id:'pz-pittsburgh',name:{en:'Pittsburgh Pizza',ru:'Пицца «Питтсбург»',es:'Pizza Pittsburgh'},desc:{en:'Steak, red onion, green peppers, pickles, provolone and mozzarella cheese, white garlic sauce',ru:'Стейк, красный лук, зелёный перец, маринованные огурчики, проволоне и моцарелла, белый чесночный соус',es:'Bistec, cebolla roja, pimiento verde, pepinillos, provolone y mozzarella, salsa blanca de ajo'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-meatbomb',name:{en:'Meat Bomb',ru:'Мясная бомба',es:'Bomba de carne'},desc:{en:'Pepperoni, bacon, sausage, ham, provolone and mozzarella cheese, marinara sauce',ru:'Пепперони, бекон, колбаски, ветчина, проволоне и моцарелла, соус маринара',es:'Pepperoni, tocino, salchicha, jamón, provolone y mozzarella, salsa marinara'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-philly',name:{en:'Philly Steak Pizza',ru:'Пицца «Филли-стейк»',es:'Pizza Philly steak'},desc:{en:'Steak, mushrooms, red onion, green peppers, provolone and mozzarella cheese, white garlic sauce',ru:'Стейк, грибы, красный лук, зелёный перец, проволоне и моцарелла, белый чесночный соус',es:'Bistec, champiñones, cebolla roja, pimiento verde, provolone y mozzarella, salsa blanca de ajo'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-buffalo',name:{en:'Buffalo Chicken Ranch',ru:'Пицца «Баффало с курицей»',es:'Pizza búfalo con pollo'},desc:{en:'Grilled chicken, buffalo fries, cheddar cheese, provolone and mozzarella cheese, ranch sauce, hot sauce',ru:'Курица гриль, картофель баффало, чеддер, проволоне и моцарелла, соус ранч, острый соус',es:'Pollo a la parrilla, papas búfalo, cheddar, provolone y mozzarella, salsa ranch, salsa picante'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten','egg']},
 {id:'pz-megapep',name:{en:'Mega Pepperoni',ru:'Мега-пепперони',es:'Mega pepperoni'},desc:{en:'Double pepperoni, provolone and mozzarella cheese, parmesan cheese, oregano, marinara sauce',ru:'Двойная пепперони, проволоне и моцарелла, пармезан, орегано, соус маринара',es:'Doble pepperoni, provolone y mozzarella, parmesano, orégano, salsa marinara'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-burger',name:{en:'Burger Pizza',ru:'Пицца «Бургер»',es:'Pizza hamburguesa'},desc:{en:'Burger meat, red onion, cheddar cheese, pickles, provolone and mozzarella cheese, special burger sauce',ru:'Котлета для бургера, красный лук, чеддер, огурчики, проволоне и моцарелла, фирменный бургер-соус',es:'Carne de hamburguesa, cebolla roja, cheddar, pepinillos, provolone y mozzarella, salsa especial'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-deluxe',name:{en:'Grand Deluxe',ru:'Гранд делюкс',es:'Gran deluxe'},desc:{en:'Pepperoni, sausage, bacon, green peppers, red onion, mushrooms, black olives, tomatoes, provolone and mozzarella cheese, marinara sauce',ru:'Пепперони, колбаски, бекон, зелёный перец, красный лук, грибы, чёрные оливки, томаты, проволоне и моцарелла, соус маринара',es:'Pepperoni, salchicha, tocino, pimiento verde, cebolla roja, champiñones, aceitunas negras, tomate, provolone y mozzarella, salsa marinara'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-aloha',name:{en:'Aloha Hawaiian',ru:'Пицца «Алоха»',es:'Pizza hawaiana Aloha'},desc:{en:'Ham, bacon, pineapples, provolone and mozzarella cheese, marinara sauce',ru:'Ветчина, бекон, ананасы, проволоне и моцарелла, соус маринара',es:'Jamón, tocino, piña, provolone y mozzarella, salsa marinara'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-margherita',name:{en:'Margherita Pizza',ru:'Пицца «Маргарита»',es:'Pizza margarita'},desc:{en:'Tomato, basil, fresh mozzarella, olive oil, marinara sauce',ru:'Томаты, базилик, свежая моцарелла, оливковое масло, соус маринара',es:'Tomate, albahaca, mozzarella fresca, aceite de oliva, salsa marinara'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
 {id:'pz-pear',name:{en:'Pear Gorgonzola',ru:'Пицца с грушей и горгонзолой',es:'Pizza de pera y gorgonzola'},desc:{en:'Gorgonzola, pear, honey, provolone and mozzarella cheese, white garlic sauce',ru:'Горгонзола, груша, мёд, проволоне и моцарелла, белый чесночный соус',es:'Gorgonzola, pera, miel, provolone y mozzarella, salsa blanca de ajo'},art:'pizza',sizes:SIG_SIZES,allergens:['milk','gluten']},
],
appetizers:[
 {id:'ap-mozz',photo:'photo-mozz-placeholder.jpg',name:{en:'Mozzarella Sticks',ru:'Моцарелла-стики',es:'Palitos de mozzarella'},desc:{en:'6 pc, golden-fried, marinara dip',ru:'6 шт, золотистые, соус маринара',es:'6 uds., dorados, salsa marinara'},art:'appetizer',sizes:SZ1(699),allergens:['milk','gluten']},
 {id:'ap-poppers',photo:'photo-poppers-placeholder.jpg',name:{en:'Jalapeño Poppers',ru:'Халапеньо-попперсы',es:'Jalapeños rellenos'},desc:{en:'6 pc, crispy, creamy filling',ru:'6 шт, хрустящие, с нежной начинкой',es:'6 uds., crujientes, relleno cremoso'},art:'appetizer',sizes:SZ1(699),allergens:['milk','gluten']},
 {id:'ap-rings',photo:'photo-rings-placeholder.jpg',name:{en:'Onion Rings',ru:'Луковые кольца',es:'Aros de cebolla'},desc:{en:'10 pc, beer-battered crunch',ru:'10 шт, хрустящие',es:'10 uds., crujientes'},art:'appetizer',sizes:SZ1(699),allergens:['gluten']},
 {id:'ap-fries',name:{en:'Fries',ru:'Картофель фри',es:'Papas fritas'},desc:{en:'Golden and crispy',ru:'Золотистый и хрустящий',es:'Doradas y crujientes'},art:'appetizer',sizes:SZ1(599)},
 {id:'ap-sidefries',name:{en:'Side Fries',ru:'Фри маленькая порция',es:'Papas pequeñas'},desc:{en:'A smaller portion of our fries',ru:'Маленькая порция нашего фри',es:'Porción pequeña de papas'},art:'appetizer',sizes:SZ1(399)},
],
wings:[
 {id:'wg-fresh',name:{en:'Fresh Wings',ru:'Крылышки',es:'Alitas'},desc:{en:'Choose count — fresh, never frozen',ru:'Выбери количество — всегда свежие',es:'Elige cantidad — siempre frescas'},art:'wings',sizes:SZ1(899),builder:'wings'},
],
chicken:[
 {id:'ch-popcorn',name:{en:'Popcorn Chicken',ru:'Куриный попкорн',es:'Palomitas de pollo'},desc:{en:'Bite-size crispy chicken',ru:'Хрустящие куриные кусочки',es:'Bocados crujientes de pollo'},art:'chicken',sizes:SZ1(999),allergens:['gluten']},
 {id:'ch-tenders',name:{en:'Chicken Tenders',ru:'Куриные стрипсы',es:'Tiras de pollo'},desc:{en:'5 pc, crispy',ru:'5 шт, хрустящие',es:'5 uds., crujientes'},art:'chicken',sizes:SZ1(1099),allergens:['gluten']},
 {id:'ch-nuggets',name:{en:'Chicken Nuggets',ru:'Наггетсы',es:'Nuggets de pollo'},desc:{en:'10 pc, kid-approved crunch',ru:'10 шт, хрустящие',es:'10 uds., crujientes'},art:'chicken',sizes:SZ1(899),allergens:['gluten']},
],
stromboli:[
 {id:'st-pep',name:{en:'Pepperoni Stromboli',ru:'Стромболи с пепперони',es:'Stromboli de pepperoni'},desc:{en:'Rolled golden crust, pepperoni + mozzarella, marinara dip',ru:'Рулетик из теста, пепперони и моцарелла, маринара',es:'Rollo dorado, pepperoni y mozzarella, marinara'},art:'stromboli',sizes:SZ1(1099),allergens:['milk','gluten']},
 {id:'st-veg',name:{en:'Veggie Stromboli',ru:'Стромболи овощной',es:'Stromboli vegetal'},desc:{en:'Peppers, onions, mushrooms, mozzarella',ru:'Перец, лук, грибы, моцарелла',es:'Pimiento, cebolla, champiñones, mozzarella'},art:'stromboli',sizes:SZ1(1049),allergens:['milk','gluten']},
],
rolls:[
 {id:'rl-pep',name:{en:'Pepperoni Roll',ru:'Ролл с пепперони',es:'Rollo de pepperoni'},desc:{en:'Baked roll, pepperoni & cheese',ru:'Запечённый ролл с пепперони и сыром',es:'Rollo horneado con pepperoni y queso'},art:'rolls',sizes:SZ1(1499),allergens:['milk','gluten']},
 {id:'rl-steak',name:{en:'Steak Roll',ru:'Ролл со стейком',es:'Rollo de bistec'},desc:{en:'Baked roll, steak & cheese',ru:'Запечённый ролл со стейком и сыром',es:'Rollo horneado con bistec y queso'},art:'rolls',sizes:SZ1(1499),allergens:['milk','gluten']},
 {id:'rl-spinach',name:{en:'Spinach Feta Roll',ru:'Ролл со шпинатом и фетой',es:'Rollo de espinaca y feta'},desc:{en:'Baked roll, spinach & feta',ru:'Запечённый ролл со шпинатом и фетой',es:'Rollo horneado con espinaca y feta'},art:'rolls',sizes:SZ1(1499),allergens:['milk','gluten']},
 {id:'rl-buffalo',name:{en:'Buffalo Chicken Roll',ru:'Ролл с курицей баффало',es:'Rollo de pollo búfalo'},desc:{en:'Baked roll, buffalo chicken & cheese',ru:'Запечённый ролл с курицей баффало и сыром',es:'Rollo horneado con pollo búfalo y queso'},art:'rolls',sizes:SZ1(1499),allergens:['milk','gluten']},
],
breadsticks:[
 {id:'bs-garlic',name:{en:'Breadsticks',ru:'Хлебные палочки',es:'Palitos de pan'},desc:{en:'Garlic butter, parmesan dust',ru:'Чесночное масло, пармезан',es:'Mantequilla de ajo, parmesano'},art:'breadsticks',sizes:SZ1(799),allergens:['gluten','milk']},
 {id:'bs-cheesy',name:{en:'Cheesy Breadsticks',ru:'Сырные палочки',es:'Palitos con queso'},desc:{en:'Loaded with mozzarella, marinara dip',ru:'С моцареллой, соус маринара',es:'Con mozzarella, salsa marinara'},art:'breadsticks',sizes:SZ1(1099),allergens:['milk','gluten']},
],
salads:[
 {id:'sl-caesar',name:{en:'Caesar Salad',ru:'Салат «Цезарь»',es:'Ensalada César'},desc:{en:'Romaine, parmesan, croutons, Caesar dressing',ru:'Ромэн, пармезан, сухарики, соус цезарь',es:'Lechuga romana, parmesano, crutones, aderezo césar'},art:'salad',sizes:SZ1(1499),allergens:['milk','egg','gluten']},
 {id:'sl-bufchick',name:{en:'Buffalo Chicken Salad',ru:'Салат с курицей баффало',es:'Ensalada de pollo búfalo'},desc:{en:'Greens, buffalo chicken, ranch dressing',ru:'Зелень, курица баффало, соус ранч',es:'Verdes, pollo búfalo, aderezo ranch'},art:'salad',sizes:SZ1(1499),allergens:['milk','egg']},
 {id:'sl-steak',name:{en:'Steak Salad',ru:'Салат со стейком',es:'Ensalada de bistec'},desc:{en:'Greens, grilled steak, balsamic dressing',ru:'Зелень, стейк гриль, бальзамик',es:'Verdes, bistec a la parrilla, balsámico'},art:'salad',sizes:SZ1(1499)},
 {id:'sl-garden',name:{en:'Classic Garden Salad',ru:'Классический садовый салат',es:'Ensalada clásica'},desc:{en:'Fresh garden greens, tomato, cucumber',ru:'Свежая зелень, томаты, огурец',es:'Verdes frescas, tomate, pepino'},art:'salad',sizes:SZ1(799)},
 {id:'sl-build',name:{en:'Build Your Own Salad',ru:'Собери свой салат',es:'Arma tu ensalada'},desc:{en:'Pick base, protein, toppings, dressing',ru:'Выбери основу, белок, топпинги, заправку',es:'Elige base, proteína, ingredientes, aderezo'},art:'salad',sizes:SZ1(799),builder:'salad'},
],
subs:[
 {id:'sub-philly',name:{en:'Philly Steak',ru:'Филли-стейк',es:'Philly steak'},desc:{en:'Steak, fried onion, cheese sauce',ru:'Стейк, жареный лук, сырный соус',es:'Bistec, cebolla frita, salsa de queso'},art:'sub',sizes:SUB_SIZES,allergens:['gluten','milk']},
 {id:'sub-italian',name:{en:'Italian Sub',ru:'Итальянский саб',es:'Sub italiano'},desc:{en:'Ham, salami, capicola, provolone, lettuce, tomato, onion, Italian dressing',ru:'Ветчина, салями, капикола, проволоне, салат, томат, лук, итальянская заправка',es:'Jamón, salami, capicola, provolone, lechuga, tomate, cebolla, aderezo italiano'},art:'sub',sizes:SUB_SIZES,allergens:['gluten','milk']},
 {id:'sub-steak',name:{en:'Steak Sub',ru:'Стейк-саб',es:'Sub de bistec'},desc:{en:'Steak, onion, mushrooms, provolone, mayo, lettuce, tomato',ru:'Стейк, лук, грибы, проволоне, майонез, салат, томат',es:'Bistec, cebolla, champiñones, provolone, mayonesa, lechuga, tomate'},art:'sub',sizes:SUB_SIZES,allergens:['gluten','milk','egg']},
 {id:'sub-buffalo',name:{en:'Buffalo Chicken Sub',ru:'Саб с курицей баффало',es:'Sub de pollo búfalo'},desc:{en:'Breaded chicken, hot sauce, provolone, buffalo fries',ru:'Курица в панировке, острый соус, проволоне, картофель баффало',es:'Pollo empanado, salsa picante, provolone, papas búfalo'},art:'sub',sizes:SUB_SIZES,allergens:['gluten','milk']},
 {id:'sub-build',name:{en:'Build Your Own Sub',ru:'Собери свой саб',es:'Arma tu sub'},desc:{en:'Pick bread, fillings, cheese, veggies, sauce',ru:'Выбери хлеб, начинку, сыр, овощи, соус',es:'Elige pan, relleno, queso, verduras, salsa'},art:'sub',sizes:SZ1(899),builder:'sub',allergens:['gluten']},
],
drinks:[
 {id:'dr-can',name:{en:'Can Soda',ru:'Газировка в банке',es:'Refresco en lata'},desc:{en:'12 oz can — pick your flavor',ru:'Банка — выбери вкус',es:'Lata — elige sabor'},art:'soda',sizes:SZ1(105),builder:'drink',drinkSizes:[{id:'can',n:{en:'Can 12 oz',ru:'Банка',es:'Lata'},p:0}]},
 {id:'dr-2l',name:{en:'2-Liter Soda',ru:'Газировка 2 литра',es:'Refresco 2 litros'},desc:{en:'2-liter bottle — pick your flavor',ru:'Бутылка 2 л — выбери вкус',es:'Botella 2 l — elige sabor'},art:'soda',sizes:SZ1(399),builder:'drink',drinkSizes:[{id:'twol',n:{en:'2-liter bottle',ru:'Бутылка 2 л',es:'Botella 2 l'},p:0}]},
 {id:'dr-coffee',name:{en:'Filter Coffee',ru:'Фильтр-кофе',es:'Café de filtro'},desc:{en:'Freshly brewed, just like home',ru:'Свежесваренный, как дома',es:'Recién hecho, como en casa'},art:'coffee',sizes:[{id:'c12',label:'12 oz',price:249},{id:'c16',label:'16 oz',price:299}]},
 {id:'dr-water',name:{en:'Water',ru:'Вода',es:'Agua'},desc:{en:'Bottled water',ru:'Вода в бутылке',es:'Agua embotellada'},art:'soda',sizes:SZ1(199)},
],
desserts:[
 {id:'ds-tiramisu',photo:'photo-tiramisu-placeholder.jpg',name:{en:'Tiramisu',ru:'Тирамису',es:'Tiramisú'},desc:{en:'Classic Italian dessert',ru:'Классический итальянский десерт',es:'Clásico postre italiano'},art:'dessert',sizes:SZ1(699),allergens:['milk','gluten','egg']},
 {id:'ds-oreo',photo:'photo-oreo-placeholder.jpg',name:{en:'Oreo Cheesecake',ru:'Чизкейк Oreo',es:'Cheesecake de Oreo'},desc:{en:'Cookies & cream cheesecake',ru:'Чизкейк с печеньем',es:'Cheesecake de galletas'},art:'dessert',sizes:SZ1(699),allergens:['milk','gluten','egg','soy']},
 {id:'ds-strawberry',photo:'photo-strawberry-placeholder.jpg',name:{en:'Strawberry Cheesecake',ru:'Клубничный чизкейк',es:'Cheesecake de fresa'},desc:{en:'Topped with strawberries',ru:'С клубникой',es:'Con fresas'},art:'dessert',sizes:SZ1(699),allergens:['milk','gluten','egg']},
],
breakfast:[
 {id:'bk-pizza',name:{en:'Breakfast Pizza',ru:'Пицца «Завтрак»',es:'Pizza desayuno'},desc:{en:'Scrambled eggs, bacon, cheddar, breakfast sauce',ru:'Яйца, бекон, чеддер, утренний соус',es:'Huevos revueltos, tocino, cheddar'},art:'pizza',sizes:[{id:'s12',label:'12"',price:1099}],allergens:['milk','gluten','egg']},
 {id:'bk-sub',name:{en:'Bacon & Egg Sub',ru:'Саб с беконом и яйцом',es:'Sub de tocino y huevo'},desc:{en:'Toasted roll, bacon, fried egg, cheddar',ru:'Тёплая булочка, бекон, яйцо, чеддер',es:'Pan tostado, tocino, huevo, cheddar'},art:'sub',sizes:SZ1(699),allergens:['gluten','milk','egg']},
 {id:'bk-hash',name:{en:'Hash Browns',ru:'Хашбраун',es:'Papas hash'},desc:{en:'6 pc, golden & crispy',ru:'6 шт, золотистые',es:'6 uds., doradas y crujientes'},art:'appetizer',sizes:SZ1(399)},
],
kids:[
 {id:'kd-nuggets',name:{en:'Kids Nuggets Meal',ru:'Детский набор с наггетсами',es:'Menú infantil de nuggets'},desc:{en:'5 nuggets + side fries + drink',ru:'5 наггетсов + фри + напиток',es:'5 nuggets + papas + bebida'},art:'kids',sizes:SZ1(799),allergens:['milk','gluten']},
 {id:'kd-tenders',name:{en:'Kids Tenders Meal',ru:'Детский набор со стрипсами',es:'Menú infantil de tiras'},desc:{en:'2 tenders + side fries + drink',ru:'2 стрипса + фри + напиток',es:'2 tiras + papas + bebida'},art:'chicken',sizes:SZ1(799),allergens:['milk','gluten']},
],
};

/* ================= order rules & offers (moved from app.js / app2.js) =================
   Dips, the generic builder configs (wings / subs / salads / drinks), tax &
   delivery constants, weekday DEALS, the Mix&Match combo, promo codes, the
   first-order discount and the free-gift threshold — all of it is menu /
   offer data. It lives ONLY here, like the rest of the menu. */

/* DIPS: 1 FREE with every pizza (ranch default) + paid extra dips. Names: t('dip_'+id). */
const DIPS=[{id:'ranch'},{id:'marinara'},{id:'garlic'},{id:'bbq'}];
const FREE_DIP_DEFAULT='ranch';
const EXTRA_DIP_PRICE=149;
/* ---- generic builder configs (subs / salads / drinks) ----
   WINGS: quantity + type choice only (no visual assembly — just an appetizing
   picture that reflects the count and glaze). Counts and types configurable. */
const WINGDEF={
 counts:[{id:'w6',n:{en:'6 pc',ru:'6 шт',es:'6 uds.'},p:0},{id:'w12',n:{en:'12 pc',ru:'12 шт',es:'12 uds.'},p:800},{id:'w24',n:{en:'24 pc',ru:'24 шт',es:'24 uds.'},p:2100}],
 types:[{id:'plain',n:{en:'Plain',ru:'Классические',es:'Clásicas'},p:0}],
};
const SUBDEF={
 breads:[{id:'white',n:{en:'White',ru:'Белый',es:'Blanco'},p:0},{id:'wheat',n:{en:'Wheat',ru:'Цельнозерновой',es:'Integral'},p:0},{id:'garlic',n:{en:'Garlic & herb',ru:'Чесночный',es:'Ajo y hierbas'},p:50}],
 sizes:[{id:'half',label:'Half',p:0},{id:'whole',label:'Whole',p:900}],
 fillings:[{id:'turkey',n:{en:'Turkey',ru:'Индейка',es:'Pavo'},p:0},{id:'ham',n:{en:'Ham',ru:'Ветчина',es:'Jamón'},p:0},{id:'meatball',n:{en:'Meatballs',ru:'Митболы',es:'Albóndigas'},p:100},{id:'veggie',n:{en:'Veggie',ru:'Овощной',es:'Vegetal'},p:0}],
 cheese:[{id:'none',n:{en:'No cheese',ru:'Без сыра',es:'Sin queso'},p:0},{id:'mozz',n:{en:'Mozzarella',ru:'Моцарелла',es:'Mozzarella'},p:0},{id:'prov',n:{en:'Provolone',ru:'Проволоне',es:'Provolone'},p:50}],
 veggies:[{id:'lettuce',n:{en:'Lettuce',ru:'Салат',es:'Lechuga'}},{id:'tomato',n:{en:'Tomato',ru:'Томат',es:'Tomate'}},{id:'onion',n:{en:'Onion',ru:'Лук',es:'Cebolla'}},{id:'peppers',n:{en:'Peppers',ru:'Перец',es:'Pimiento'}},{id:'pickles',n:{en:'Pickles',ru:'Огурчики',es:'Pepinillos'}}],
 sauces:[{id:'mayo',n:{en:'Mayo',ru:'Майонез',es:'Mayonesa'}},{id:'mustard',n:{en:'Mustard',ru:'Горчица',es:'Mostaza'}},{id:'oilvin',n:{en:'Oil & vinegar',ru:'Масло и уксус',es:'Aceite y vinagre'}},{id:'ranchd',n:{en:'Ranch',ru:'Ранч',es:'Ranch'}}],
};
const SALADDEF={
 bases:[{id:'romaine',n:{en:'Romaine',ru:'Ромэн',es:'Romana'},p:0},{id:'garden',n:{en:'Garden mix',ru:'Микс-салат',es:'Mezcla'},p:0},{id:'spinach',n:{en:'Spinach',ru:'Шпинат',es:'Espinaca'},p:50}],
 proteins:[{id:'none',n:{en:'No protein',ru:'Без белка',es:'Sin proteína'},p:0},{id:'chicken',n:{en:'Grilled chicken',ru:'Курица гриль',es:'Pollo a la parrilla'},p:250},{id:'tuna',n:{en:'Tuna',ru:'Тунец',es:'Atún'},p:200}],
 ingredients:[{id:'croutons',n:{en:'Croutons',ru:'Сухарики',es:'Crutones'}},{id:'parmesan',n:{en:'Parmesan',ru:'Пармезан',es:'Parmesano'}},{id:'tomato',n:{en:'Tomato',ru:'Томат',es:'Tomate'}},{id:'cucumber',n:{en:'Cucumber',ru:'Огурец',es:'Pepino'}},{id:'olives',n:{en:'Olives',ru:'Оливки',es:'Aceitunas'}},{id:'egg',n:{en:'Egg',ru:'Яйцо',es:'Huevo'}}],
 dressings:[{id:'ranch',n:{en:'Ranch',ru:'Ранч',es:'Ranch'}},{id:'caesar',n:{en:'Caesar',ru:'Цезарь',es:'César'}},{id:'italian',n:{en:'Italian',ru:'Итальянская',es:'Italiano'}},{id:'balsamic',n:{en:'Balsamic',ru:'Бальзамик',es:'Balsámico'}}],
};
const DRINKDEF={
 sizes:[{id:'can',n:{en:'Can 12 oz',ru:'Банка',es:'Lata 12 oz'},p:0},{id:'twol',n:{en:'2-liter bottle',ru:'Бутылка 2 л',es:'Botella 2 l'},p:0}],
 flavors:[{id:'pepsi',n:{en:'Pepsi',ru:'Пепси',es:'Pepsi'},c:'#004B93'},{id:'dietpepsi',n:{en:'Diet Pepsi',ru:'Пепси лайт',es:'Pepsi Light'},c:'#5D6D7E'},{id:'coke',n:{en:'Coca-Cola',ru:'Кока-Кола',es:'Coca-Cola'},c:'#C0392B'},{id:'cokezero',n:{en:'Coca-Cola Zero',ru:'Кола зеро',es:'Coca-Cola Zero'},c:'#2C2C2C'},{id:'dew',n:{en:'Mountain Dew',ru:'Маунтин Дью',es:'Mountain Dew'},c:'#7ED321'},{id:'orange',n:{en:'Orange',ru:'Апельсин',es:'Naranja'},c:'#E67E22'},{id:'gingerale',n:{en:'Ginger Ale',ru:'Джинджер-эль',es:'Ginger Ale'},c:'#D9B44A'},{id:'drpepper',n:{en:'Dr Pepper',ru:'Доктор Пеппер',es:'Dr Pepper'},c:'#7B241C'},{id:'rootbeer',n:{en:'Root Beer',ru:'Рутбир',es:'Root Beer'},c:'#5C3A12'},{id:'brisk',n:{en:'Brisk Iced Tea',ru:'Бриск айс-ти',es:'Brisk helado'},c:'#A67C3D'}],
};

const TAX_BPS=700, DELIVERY_FEE=399;
const MIN_DELIVERY_TOTAL=1500; /* $15 delivery minimum — pickup has no minimum. Owner-editable. */

/* SAMPLE promos — each deal adds a bundle line to the cart (real deals: owner edits in admin) */
/* REAL weekday specials (Mon–Thu) — owner's menu */
const DEALS=[
 {t:'deal1t',d:'deal1d',alt:false,price:2999,img:PHOTO_DATA['photo-deal1-placeholder.jpg'],contents:{en:'2× 16" Cheese Pizzas + 12 Wings (plain) + 2L Soda',ru:'2× сырные пиццы 16" + 12 крылышек + газировка 2 л',es:'2× pizzas de queso 16" + 12 alitas + refresco 2 l'}},
 {t:'deal2t',d:'deal2d',alt:true,price:2999,img:PHOTO_DATA['photo-deal2-placeholder.jpg'],contents:{en:'2× 16" Cheese Pizzas + One Whole Sub + 2L Soda',ru:'2× сырные пиццы 16" + целый саб + газировка 2 л',es:'2× pizzas de queso 16" + sub entero + refresco 2 l'}},
 {t:'deal3t',d:'deal3d',alt:false,price:1199,img:PHOTO_DATA['photo-pizza-placeholder.jpg'],contents:{en:'16" Cheese Pizza',ru:'Сырная пицца 16"',es:'Pizza de queso 16"'}}
];

/* ================= Mix & Match (Domino's mechanic, our comic style) =================
   Pick any 2 items from the list — fixed SAMPLE price each. The owner edits the
   real price + item list; item ids must exist in MENU above. */
const MIXMATCH={price:699,items:['ap-mozz','ap-poppers','ap-rings','ds-tiramisu','ds-oreo','ds-strawberry']};

/* SAMPLE promo codes — the owner edits the real codes/discounts later */
const PROMOS=[{code:'PIZZA10',pct:10},{code:'FELICE15',pct:15}];

/* FIRST-ORDER DISCOUNT — SAMPLE %, owner edits the real value later (was in app2.js). */
const FIRST_ORDER_DISCOUNT_PCT=5;

/* Free-gift rule for the mascot hints (was in app2.js). */
const HINTS={giftThreshold:4000 /* $40 → SAMPLE free garlic sticks; owner edits the real gift rule later */};

/* The one export: the whole menu/prices data set. Sites and apps
   read window.LF_MENU_DATA; nothing else in this file is global. */
window.LF_MENU_DATA = {BUILDER: BUILDER, TOPPING_PRICE: TOPPING_PRICE, CATS: CATS, SIG_SIZES: SIG_SIZES, SUB_SIZES: SUB_SIZES, MENU: MENU, SZ1: SZ1, DIPS: DIPS, FREE_DIP_DEFAULT: FREE_DIP_DEFAULT, EXTRA_DIP_PRICE: EXTRA_DIP_PRICE, WINGDEF: WINGDEF, SUBDEF: SUBDEF, SALADDEF: SALADDEF, DRINKDEF: DRINKDEF, TAX_BPS: TAX_BPS, DELIVERY_FEE: DELIVERY_FEE, MIN_DELIVERY_TOTAL: MIN_DELIVERY_TOTAL, DEALS: DEALS, MIXMATCH: MIXMATCH, PROMOS: PROMOS, FIRST_ORDER_DISCOUNT_PCT: FIRST_ORDER_DISCOUNT_PCT, HINTS: HINTS};
} /* end of the data block — only window.LF_MENU_DATA is global */
