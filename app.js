
/* ================= i18n (prototype-local; production: owner-editable TextTemplates) ================= */
const T = {
en:{pickup:"Pickup",delivery:"Delivery",address_ph:"Delivery address — street, apt",check_zone:"Check my zone",
zone_ok:"We deliver to you! Fee {fee}, ~{eta} min.",menu_builder:"Pizza builder",menu_pizza:"Pizzas",menu_salads:"Salads",menu_drinks:"Drinks",menu_desserts:"Desserts",
add:"Add",customize:"Customize",back:"Back",checkout:"Checkout",your_order:"Your order",subtotal:"Subtotal",tax:"Tax",
delivery_fee:"Delivery fee",tip:"Tip",total:"Total",time_order:"Order for later (time order)",name:"Name",name_ph:"Your name",
phone:"Phone",phone_ph:"+1 (___) ___-____",create_account:"Create an account with this phone",payment:"Payment",card:"Card",
cant_pay:"I can't pay right now",no_payment_warning:"We cannot accept an order without payment. Pay now, or come to the store and wait while we prepare your order.",
no_order_title:"No order without payment",no_order_created:"No order was created. Nothing was sent to the kitchen.",ok_pay:"OK — I'll pay now",
order_confirmed:"Order confirmed!",paid:"Paid",sms_note:"We'll text you when your order is ready. (SMS stub — wire the SMS adapter.)",
back_to_menu:"Back to menu",sample_note:"SAMPLE DATA — the owner loads the real menu, prices and photos later.",sample_note2:"demo prototype",
stripe_note:"Payments are processed securely by Stripe. We never see or store your card number.",processing:"Processing…",
pickup_eta:"Ready in ~25 min",delivery_eta:"Arriving in ~{eta} min",deals:"Hot deals",
build_title:"Build your pizza",size:"1. Size",crust:"2. Crust",sauce:"3. Sauce",cheese:"4. Cheese",toppings:"5. Toppings",
your_pizza:"Your pizza",add_to_cart:"Add to cart",half_hint:"Tap a topping, then choose Light / Normal / Extra and Left / Whole / Right half.",
p_light:"Light",p_normal:"Normal",p_extra:"Extra",h_left:"Left",h_whole:"Whole",h_right:"Right",
order_again:"Loved it last time?",reorder_btn:"Order it again — 1 tap",
deal_tag:"Mon\u2013Thu",deal1t:"2 Pizzas + Wings Deal",deal1d:"2 large cheese pizzas, 12 plain wings, 2L soda. Monday\u2013Thursday.",deal2t:"2 Pizzas + Sub Deal",deal2d:"2 large cheese pizzas, one whole sub, 2L soda. Monday\u2013Thursday.",deal3t:"Large Cheese Pizza",deal3d:"16\" cheese pizza. Monday\u2013Thursday.",
no_toppings:"Just cheese, please",qty:"Qty",
change_city:"Choose your city",city_note:"SAMPLE — more cities coming. Each city will have its own menu, tax and delivery zones.",
coming_soon:"soon",new_badge:"NEW",points_earn:"This order earns",points:"pts",
reward_hint_title:"Almost there!",reward_hint:"Just {n} more points — and {reward} is yours!",great:"Great!",
loyal_sample:"SAMPLE — the full points program launches later.",
my_points:"My points",points_soon:"SAMPLE — the full loyalty program launches later. Points from your orders will be waiting.",
taxexempt_check:"I'm ordering for a tax-exempt organization",taxexempt_title:"Tax-exempt organization?",
taxexempt_text:"If you are a non-profit organization and don't want to pay sales tax — upload your exemption document.",
taxexempt_upload:"Upload document",taxexempt_sent:"Document uploaded — sent for review.",
taxexempt_simulate:"Simulate approval (demo)",taxexempt_approved:"Approved! No sales tax on this order.",taxexempt_line:"TAX-EXEMPT ✓",
allergy_label:"Allergy note for the kitchen",allergy_ph:"e.g. nut allergy — the kitchen will be alerted",
alg_milk:"milk",alg_gluten:"gluten",alg_nuts:"nuts",alg_egg:"egg",alg_soy:"soy",
paused_title:"Online ordering is temporarily paused",paused_text:"Call us or visit the store — we'll happily take your order.",
out_of_stock:"Out of stock",tap_to_add:"Tap to add to cart",
f_hours:"Open daily 11:00 AM – 10:00 PM",f_addr:"3324 Babcock Blvd, Pittsburgh, PA 15237",
hint_gift:"Add {x} more — garlic sticks FREE!",hint_dessert:"How about dessert?",hint_xcheese:"Try extra cheese!",
hint_deals:"Check our weekly specials!",hints_off:"don't show hints",hints_on:"show hints",
first_order_promo:"Sign up and get {p}% off your first order!",first_order_disc:"First-order signup discount",
acct_save:"With an account this order would cost {x} less ({p}% off)",
sms_consent:"I agree to receive SMS marketing messages",email_consent:"I agree to receive email marketing messages",
consent_note:"Consents are saved to your customer profile for our future mailing list. You can withdraw anytime.",menu_subs:"Subs",menu_appetizers:"Appetizers",menu_wings:"Wings",menu_chicken:"Chicken",menu_stromboli:"Stromboli",menu_rolls:"Rolls",menu_breadsticks:"Breadsticks",menu_kids:"Kids Menu",menu_breakfast:"Breakfast",min_delivery_warn:"Delivery minimum is {m} — add {x} more for delivery (pickup has no minimum).",hint_mindel:"Delivery starts at {m} — add {x} more!",tips:"Tips",tips_note:"Tips are optional — no pressure. Our crew appreciates every bit!",tip_custom:"Custom",tip_custom_ph:"Amount, e.g. 3.50",no_tip:"No tip",menu_extra:"Extras",build_sub:"Build your sub",kids_title:"Fun food for little champions!",kids_desc:"Small portions, big smiles.",build_salad:"Build your salad",build_drink:"Pick your drink",sec_bread:"2. Bread",sec_fillings:"3. Fillings",sec_base:"1. Base",sec_flavor:"2. Flavor",sec_dsize:"1. Size",your_build:"Your build",free_sauce:"Free sauce",free:"free",hint_sauce:"Want to add an extra sauce?",dip_ranch:"Ranch",dip_marinara:"Marinara",dip_garlic:"Garlic Butter",dip_bbq:"BBQ",extra_dip_name:"Extra Dipping Sauce",extra_dip_desc:"2 oz cup — ranch, marinara, garlic butter or BBQ",allergy_tag:"Allergy",reorder_tab:"Order again",reorder_empty:"No past orders yet — your history will show up here.",reorder_repeat:"Repeat",mixmatch_title:"Mix & Match — build your own combo",mixmatch_desc:"Pick any 2 from the list — {p} each. SAMPLE price, the owner edits the real one.",mixmatch_pick:"Pick 2",mixmatch_add:"Add combo",mixmatch_need:"Pick 2 items to add the combo",tracker_title:"Track your order",tracker_ph:"Order number, e.g. LF-123456",tracker_btn:"Track",tracker_notfound:"Order not found — check the number on your receipt.",tr_prep:"Preparing",tr_oven:"In the oven",tr_way:"On the way",tr_ready:"Ready for pickup",tr_eta:"~{n} min",sec_size:"1. Size",sec_cheese:"4. Cheese",sec_veggies:"5. Veggies",sec_protein:"2. Protein",sec_ingr:"3. Ingredients",sec_dressing:"4. Dressing",multi_hint:"tap to toggle",style:"Style",build_wings:"Build your wings",sec_count:"1. Count",sec_wtype:"2. Style",p_none:"no",cheese_none:"No cheese",edit_item:"Edit",save_item:"Save",promo_ph:"Promo code",promo_apply:"Apply",promo_ok:"Promo applied: -{p}%",promo_bad:"That code didn't work",promo_disc:"Promo discount",upsell_title:"Add to your order?"},
ru:{pickup:"Самовывоз",delivery:"Доставка",address_ph:"Адрес доставки — улица, квартира",check_zone:"Проверить мою зону",
zone_ok:"Доставим! Стоимость {fee}, ~{eta} мин.",menu_builder:"Конструктор пиццы",menu_pizza:"Пиццы",menu_salads:"Салаты",menu_drinks:"Напитки",menu_desserts:"Десерты",
add:"Добавить",customize:"Собрать",back:"Назад",checkout:"Оформить",your_order:"Ваш заказ",subtotal:"Сумма",tax:"Налог",
delivery_fee:"Доставка",tip:"Чаевые",total:"Итого",time_order:"Заказ ко времени",name:"Имя",name_ph:"Ваше имя",
phone:"Телефон",phone_ph:"+1 (___) ___-____",create_account:"Создать аккаунт на этот телефон",payment:"Оплата",card:"Карта",
cant_pay:"Не могу оплатить сейчас",no_payment_warning:"Мы не можем принять заказ без оплаты. Оплатите сейчас или приезжайте в магазин и подождите, пока мы приготовим ваш заказ.",
no_order_title:"Нет заказа без оплаты",no_order_created:"Заказ не создан. На кухню ничего не отправлено.",ok_pay:"Хорошо — оплачу сейчас",
order_confirmed:"Заказ принят!",paid:"Оплачено",sms_note:"Мы пришлём SMS, когда заказ будет готов. (Заглушка SMS.)",
back_to_menu:"Вернуться в меню",sample_note:"ДЕМО-ДАННЫЕ — владелица загрузит настоящее меню, цены и фото позже.",sample_note2:"демо-прототип",
stripe_note:"Оплата безопасно обрабатывается Stripe. Мы не видим и не храним номер вашей карты.",processing:"Обработка…",
pickup_eta:"Будет готово ~через 25 мин",delivery_eta:"Привезём ~через {eta} мин",deals:"Горячие предложения",
build_title:"Соберите пиццу",size:"1. Размер",crust:"2. Тесто",sauce:"3. Соус",cheese:"4. Сыр",toppings:"5. Начинки",
your_pizza:"Ваша пицца",add_to_cart:"В корзину",half_hint:"Нажмите на начинку, затем выберите Мало / Норма / Много и Левая / Вся / Правая половина.",
p_light:"Мало",p_normal:"Норма",p_extra:"Много",h_left:"Левая",h_whole:"Вся",h_right:"Правая",
order_again:"Понравилось в прошлый раз?",reorder_btn:"Заказать снова — в 1 тап",
deal_tag:"Пн\u2013Чт",deal1t:"2 пиццы + крылышки",deal1d:"2 большие сырные пиццы, 12 крылышек, газировка 2 л. Понедельник\u2013четверг.",deal2t:"2 пиццы + саб",deal2d:"2 большие сырные пиццы, целый саб, газировка 2 л. Понедельник\u2013четверг.",deal3t:"Большая сырная пицца",deal3d:"Сырная пицца 16\". Понедельник\u2013четверг.",
no_toppings:"Только сыр, спасибо",qty:"Кол-во",
change_city:"Выберите город",city_note:"ДЕМО — скоро будет больше городов. У каждого города своё меню, налог и зоны доставки.",
coming_soon:"скоро",new_badge:"НОВИНКА",points_earn:"Этот заказ принесёт",points:"баллов",
reward_hint_title:"Почти получилось!",reward_hint:"Ещё {n} баллов — и {reward} ваша!",great:"Отлично!",
loyal_sample:"ДЕМО — программа лояльности запустится позже.",
my_points:"Мои баллы",points_soon:"ДЕМО — программа лояльности запустится позже. Баллы за ваши заказы будут вас ждать.",
taxexempt_check:"Заказываю для некоммерческой организации (без налога с продаж)",taxexempt_title:"Некоммерческая организация?",
taxexempt_text:"Если вы некоммерческая организация и не хотите платить налог с продаж — загрузите документ об освобождении.",
taxexempt_upload:"Загрузить документ",taxexempt_sent:"Документ загружен — отправлен на проверку.",
taxexempt_simulate:"Симулировать подтверждение (демо)",taxexempt_approved:"Подтверждено! Налог с продаж за этот заказ не взимается.",taxexempt_line:"БЕЗ НАЛОГА ✓",
allergy_label:"Примечание об аллергии для кухни",allergy_ph:"напр. аллергия на орехи — кухня будет предупреждена",
alg_milk:"молоко",alg_gluten:"глютен",alg_nuts:"орехи",alg_egg:"яйцо",alg_soy:"соя",
paused_title:"Онлайн-заказы временно приостановлены",paused_text:"Позвоните нам или приходите в магазин — с радостью примем заказ.",
out_of_stock:"Нет в наличии",tap_to_add:"Нажмите, чтобы добавить в корзину",
f_hours:"Ежедневно 11:00–22:00",f_addr:"3324 Babcock Blvd, Pittsburgh, PA 15237",
hint_gift:"Добавь ещё на {x} — чесночные палочки в подарок!",hint_dessert:"А десерт не хочешь?",hint_xcheese:"Попробуй экстра-чиз!",
hint_deals:"Глянь наши спешалы недели!",hints_off:"не показывать подсказки",hints_on:"показывать подсказки",
first_order_promo:"Зарегистрируйся и получи скидку {p}% на первый заказ!",first_order_disc:"Скидка за регистрацию",
acct_save:"С аккаунтом этот заказ стоил бы на {x} меньше (скидка {p}%)",
sms_consent:"Согласен получать SMS-рассылки",email_consent:"Согласен получать email-рассылки",
consent_note:"Согласия сохраняются в ваш профиль клиента для будущей базы рассылок. Можно отозвать в любой момент.",menu_subs:"Сабы",menu_appetizers:"Закуски",menu_wings:"Крылышки",menu_chicken:"Курица",menu_stromboli:"Стромболи",menu_rolls:"Роллы",menu_breadsticks:"Хлебные палочки",menu_kids:"Детское меню",menu_breakfast:"Завтраки",min_delivery_warn:"Минимальный заказ для доставки — {m}. Добавь ещё на {x} (для самовывоза минимума нет).",hint_mindel:"Доставка от {m} — добавь ещё на {x}!",tips:"Чаевые",tips_note:"Чаевые необязательны — только по желанию. Команда будет благодарна!",tip_custom:"Своя сумма",tip_custom_ph:"Сумма, напр. 3.50",no_tip:"Без чаевых",kids_title:"Весёлая еда для маленьких чемпионов!",kids_desc:"Маленькие порции — большие улыбки.",menu_extra:"Дополнительно",build_sub:"Собери саб",build_salad:"Собери салат",build_drink:"Выбери напиток",sec_bread:"2. Хлеб",sec_fillings:"3. Начинка",sec_base:"1. Основа",sec_flavor:"2. Вкус",sec_dsize:"1. Размер",your_build:"Ваш набор",free_sauce:"Соус в подарок",free:"в подарок",hint_sauce:"Соус не хочешь добавить?",dip_ranch:"Ранч",dip_marinara:"Маринара",dip_garlic:"Чесночное масло",dip_bbq:"Барбекю",extra_dip_name:"Доп. соус",extra_dip_desc:"Соусник 60 мл — ранч, маринара, чесночный или барбекю",allergy_tag:"Аллергия",reorder_tab:"Закажи снова",reorder_empty:"Прошлых заказов пока нет — история появится здесь.",reorder_repeat:"Повторить",mixmatch_title:"Комбо «Собери сам»",mixmatch_desc:"Выбери любые 2 позиции из списка — {p} за каждую. ДЕМО-цена, владелица поставит настоящую.",mixmatch_pick:"Выбери 2",mixmatch_add:"В корзину",mixmatch_need:"Выбери 2 позиции, чтобы добавить комбо",tracker_title:"Где моя пицца",tracker_ph:"Номер заказа, напр. LF-123456",tracker_btn:"Найти",tracker_notfound:"Заказ не найден — проверь номер в чеке.",tr_prep:"Готовим",tr_oven:"В печи",tr_way:"В пути",tr_ready:"Готов к выдаче",tr_eta:"~{n} мин",sec_size:"1. Размер",sec_cheese:"4. Сыр",sec_veggies:"5. Овощи",sec_protein:"2. Белок",sec_ingr:"3. Ингредиенты",sec_dressing:"4. Заправка",multi_hint:"нажми, чтобы выбрать",style:"Стиль",build_wings:"Собери крылышки",sec_count:"1. Количество",sec_wtype:"2. Вид",p_none:"без",cheese_none:"Без сыра",edit_item:"Изменить",save_item:"Сохранить",promo_ph:"Промокод",promo_apply:"Применить",promo_ok:"Промокод применён: -{p}%",promo_bad:"Такой код не найден",promo_disc:"Скидка по промокоду",upsell_title:"Добавить к заказу?"},
es:{pickup:"Recoger",delivery:"Entrega",address_ph:"Dirección de entrega",check_zone:"Verificar mi zona",
zone_ok:"¡Entregamos! Tarifa {fee}, ~{eta} min.",menu_builder:"Arma tu pizza",menu_pizza:"Pizzas",menu_salads:"Ensaladas",menu_drinks:"Bebidas",menu_desserts:"Postres",
add:"Añadir",customize:"Personalizar",back:"Atrás",checkout:"Pagar",your_order:"Su pedido",subtotal:"Subtotal",tax:"Impuesto",
delivery_fee:"Entrega",tip:"Propina",total:"Total",time_order:"Pedido programado",name:"Nombre",name_ph:"Su nombre",
phone:"Teléfono",phone_ph:"+1 (___) ___-____",create_account:"Crear una cuenta con este teléfono",payment:"Pago",card:"Tarjeta",
cant_pay:"No puedo pagar ahora",no_payment_warning:"No podemos aceptar un pedido sin pago. Pague ahora o venga a la tienda y espere.",
no_order_title:"Sin pago no hay pedido",no_order_created:"No se creó ningún pedido.",ok_pay:"OK — pagaré ahora",
order_confirmed:"¡Pedido confirmado!",paid:"Pagado",sms_note:"Le avisaremos por SMS cuando esté listo.",
back_to_menu:"Volver al menú",sample_note:"DATOS DE EJEMPLO.",sample_note2:"prototipo demo",
stripe_note:"Pagos procesados por Stripe.",processing:"Procesando…",
pickup_eta:"Listo en ~25 min",delivery_eta:"Llega en ~{eta} min",deals:"Ofertas",
build_title:"Arma tu pizza",size:"1. Tamaño",crust:"2. Masa",sauce:"3. Salsa",cheese:"4. Queso",toppings:"5. Ingredientes",
your_pizza:"Tu pizza",add_to_cart:"Añadir",half_hint:"Toca un ingrediente y elige Poco / Normal / Extra y mitad Izquierda / Entera / Derecha.",
p_light:"Poco",p_normal:"Normal",p_extra:"Extra",h_left:"Izq.",h_whole:"Entera",h_right:"Der.",
order_again:"¿Te gustó la última vez?",reorder_btn:"Pídelo de nuevo — 1 toque",
deal_tag:"Lun\u2013Jue",deal1t:"2 pizzas + alitas",deal1d:"2 pizzas grandes de queso, 12 alitas, refresco 2 l. Lunes a jueves.",deal2t:"2 pizzas + sub",deal2d:"2 pizzas grandes de queso, un sub entero, refresco 2 l. Lunes a jueves.",deal3t:"Pizza grande de queso",deal3d:"Pizza de queso 16\". Lunes a jueves.",
no_toppings:"Solo queso, gracias",qty:"Cant.",
change_city:"Elige tu ciudad",city_note:"EJEMPLO — más ciudades pronto. Cada ciudad tendrá su menú, impuesto y zonas.",
coming_soon:"pronto",new_badge:"NUEVO",points_earn:"Este pedido gana",points:"pts",
reward_hint_title:"¡Casi listo!",reward_hint:"¡Solo {n} puntos más y {reward} es tuya!",great:"¡Genial!",
loyal_sample:"EJEMPLO — el programa de puntos llegará pronto.",
my_points:"Mis puntos",points_soon:"EJEMPLO — el programa de puntos llegará pronto. Tus puntos te estarán esperando.",
taxexempt_check:"Pido para una organización exenta de impuestos",taxexempt_title:"¿Organización exenta de impuestos?",
taxexempt_text:"Si es una organización sin fines de lucro y no quiere pagar el impuesto sobre las ventas — suba su documento de exención.",
taxexempt_upload:"Subir documento",taxexempt_sent:"Documento subido — enviado para revisión.",
taxexempt_simulate:"Simular aprobación (demo)",taxexempt_approved:"¡Aprobado! Sin impuesto sobre las ventas en este pedido.",taxexempt_line:"EXENTO ✓",
allergy_label:"Nota de alergia para la cocina",allergy_ph:"ej. alergia a frutos secos — se avisará a la cocina",
alg_milk:"leche",alg_gluten:"gluten",alg_nuts:"frutos secos",alg_egg:"huevo",alg_soy:"soja",
paused_title:"Pedidos en línea en pausa temporal",paused_text:"Llámenos o visite la tienda — con gusto tomamos su pedido.",
out_of_stock:"Agotado",tap_to_add:"Toque para añadir",
f_hours:"Todos los días 11:00–22:00",f_addr:"3324 Babcock Blvd, Pittsburgh, PA 15237",
hint_gift:"¡Añade {x} más y llévate palitos de ajo GRATIS!",hint_dessert:"¿Y un postre?",hint_xcheese:"¡Prueba el queso extra!",
hint_deals:"¡Mira nuestras ofertas de la semana!",hints_off:"no mostrar consejos",hints_on:"mostrar consejos",
first_order_promo:"¡Regístrate y obtén {p}% de descuento en tu primer pedido!",first_order_disc:"Descuento por registro",
acct_save:"Con una cuenta este pedido costaría {x} menos ({p}% de descuento)",
sms_consent:"Acepto recibir mensajes SMS promocionales",email_consent:"Acepto recibir correos promocionales",
consent_note:"Los consentimientos se guardan en tu perfil de cliente para nuestra futura lista de correo. Puedes retirarlos cuando quieras.",menu_subs:"Subs",menu_appetizers:"Aperitivos",menu_wings:"Alitas",menu_chicken:"Pollo",menu_stromboli:"Stromboli",menu_rolls:"Rollos",menu_breadsticks:"Palitos de pan",menu_kids:"Menú infantil",menu_breakfast:"Desayuno",min_delivery_warn:"El pedido mínimo para entrega es {m} — añade {x} más (recoger no tiene mínimo).",hint_mindel:"La entrega es desde {m} — ¡añade {x} más!",tips:"Propina",tips_note:"La propina es opcional — sin presión. ¡Nuestro equipo la agradece!",tip_custom:"Otra",tip_custom_ph:"Cantidad, ej. 3.50",no_tip:"Sin propina",menu_extra:"Extras",build_sub:"Arma tu sub",kids_title:"¡Comida divertida para pequeños campeones!",kids_desc:"Porciones pequeñas, grandes sonrisas.",build_salad:"Arma tu ensalada",build_drink:"Elige tu bebida",sec_bread:"2. Pan",sec_fillings:"3. Relleno",sec_base:"1. Base",sec_flavor:"2. Sabor",sec_dsize:"1. Tamaño",your_build:"Tu creación",free_sauce:"Salsa gratis",free:"gratis",hint_sauce:"¿Quieres añadir una salsa extra?",dip_ranch:"Ranch",dip_marinara:"Marinara",dip_garlic:"Mantequilla de ajo",dip_bbq:"BBQ",extra_dip_name:"Salsa extra",extra_dip_desc:"Vaso 2 oz — ranch, marinara, ajo o BBQ",allergy_tag:"Alergia",reorder_tab:"Pedir de nuevo",reorder_empty:"Aún no hay pedidos anteriores — tu historial aparecerá aquí.",reorder_repeat:"Repetir",mixmatch_title:"Combo «Arma el tuyo»",mixmatch_desc:"Elige 2 de la lista — {p} cada uno. Precio EJEMPLO.",mixmatch_pick:"Elige 2",mixmatch_add:"Añadir combo",mixmatch_need:"Elige 2 artículos para añadir el combo",tracker_title:"¿Dónde está mi pizza?",tracker_ph:"Número de pedido, ej. LF-123456",tracker_btn:"Rastrear",tracker_notfound:"Pedido no encontrado — revisa el número del recibo.",tr_prep:"Preparando",tr_oven:"En el horno",tr_way:"En camino",tr_ready:"Lista para recoger",tr_eta:"~{n} min",sec_size:"1. Tamaño",sec_cheese:"4. Queso",sec_veggies:"5. Verduras",sec_protein:"2. Proteína",sec_ingr:"3. Ingredientes",sec_dressing:"4. Aderezo",multi_hint:"toca para elegir",style:"Estilo",build_wings:"Arma tus alitas",sec_count:"1. Cantidad",sec_wtype:"2. Estilo",p_none:"sin",cheese_none:"Sin queso",edit_item:"Editar",save_item:"Guardar",promo_ph:"Código promo",promo_apply:"Aplicar",promo_ok:"Promo aplicado: -{p}%",promo_bad:"Ese código no funciona",promo_disc:"Descuento promo",upsell_title:"¿Añadir a tu pedido?"}
};
let LANG='en';
const t=k=>(T[LANG]&&T[LANG][k])||T.en[k]||k;
/* ICONS: tiny inline SVGs (no emojis in the UI). Add/replace icons here. */
const IC={
 check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E9E5B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="M4 12l5 5L20 6"/></svg>',
 fly:'<svg width="30" height="30" viewBox="0 0 76 76"><path d="M38 8 L66 64 Q38 74 10 64 Z" fill="#F9DC5C" stroke="#141414" stroke-width="4"/><circle cx="40" cy="34" r="5" fill="#B03A2E" stroke="#141414" stroke-width="3"/><circle cx="50" cy="46" r="5" fill="#B03A2E" stroke="#141414" stroke-width="3"/></svg>'
};

/* ================= sample data (SAMPLE — owner loads real menu) ================= */
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
function builderSizeKey(){const c=BUILDER.crusts[B.crust];if(!c)return BUILDER.sizes[B.size].id;if(c.id==='sic')return 'sicilian';if(c.id==='gf'||c.id==='cauli')return 'gf';return BUILDER.sizes[B.size].id;}
function toppingPrice(tp){const pr=TOPPING_PRICE[builderSizeKey()]||TOPPING_PRICE.s12;const st=B.tops[tp.id];return (st&&st.h!=='whole')?pr.half:pr.whole;}
const tname=o=>o[LANG]||o.en;
/* IRON RULE: the customer orders in EN/RU/ES, but the cashier/kitchen ALWAYS see English.
   Every cart line and order snapshot carries BOTH name_en (canonical) and name_localized (display). */
function withLang(l,fn){const prev=LANG;try{LANG=l;return fn();}finally{LANG=prev;}}
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
 {id:'ap-mozz',name:{en:'Mozzarella Sticks',ru:'Моцарелла-стики',es:'Palitos de mozzarella'},desc:{en:'6 pc, golden-fried, marinara dip',ru:'6 шт, золотистые, соус маринара',es:'6 uds., dorados, salsa marinara'},art:'appetizer',sizes:SZ1(699),allergens:['milk','gluten']},
 {id:'ap-poppers',name:{en:'Jalapeño Poppers',ru:'Халапеньо-попперсы',es:'Jalapeños rellenos'},desc:{en:'6 pc, crispy, creamy filling',ru:'6 шт, хрустящие, с нежной начинкой',es:'6 uds., crujientes, relleno cremoso'},art:'appetizer',sizes:SZ1(699),allergens:['milk','gluten']},
 {id:'ap-rings',name:{en:'Onion Rings',ru:'Луковые кольца',es:'Aros de cebolla'},desc:{en:'10 pc, beer-battered crunch',ru:'10 шт, хрустящие',es:'10 uds., crujientes'},art:'appetizer',sizes:SZ1(699),allergens:['gluten']},
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
 {id:'ds-tiramisu',name:{en:'Tiramisu',ru:'Тирамису',es:'Tiramisú'},desc:{en:'Classic Italian dessert',ru:'Классический итальянский десерт',es:'Clásico postre italiano'},art:'dessert',sizes:SZ1(699),allergens:['milk','gluten','egg']},
 {id:'ds-oreo',name:{en:'Oreo Cheesecake',ru:'Чизкейк Oreo',es:'Cheesecake de Oreo'},desc:{en:'Cookies & cream cheesecake',ru:'Чизкейк с печеньем',es:'Cheesecake de galletas'},art:'dessert',sizes:SZ1(699),allergens:['milk','gluten','egg','soy']},
 {id:'ds-strawberry',name:{en:'Strawberry Cheesecake',ru:'Клубничный чизкейк',es:'Cheesecake de fresa'},desc:{en:'Topped with strawberries',ru:'С клубникой',es:'Con fresas'},art:'dessert',sizes:SZ1(699),allergens:['milk','gluten','egg']},
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
/* ================= ART REGISTRY (replaceable visuals) =================
   Every menu-card illustration goes through artFor(item.art):
   - 'pizza' | 'salad' | ... → drawn comic SVG from illSVG() (placeholders);
   - 'url:assets/my-photo.png' → a real photo <img>.
   To swap ALL art for real photos later: change the art values in MENU above.
   Zero layout-code changes. */
function artFor(a){
  if(a&&a.indexOf('url:')===0)return `<img class="ill photo" src="${a.slice(4)}" alt="">`;
  return illSVG(a||'pizza');
}
const findItem=id=>{for(const c of CATS){const it=(MENU[c.id]||[]).find(x=>x.id===id);if(it)return{cat:c.id,it};}return null;};
const basePrice=it=>Math.min(...it.sizes.map(x=>x.price));
const TAX_BPS=700, DELIVERY_FEE=399;
const MIN_DELIVERY_TOTAL=1500; /* $15 delivery minimum — pickup has no minimum. Owner-editable. */
/* ===== editable store constants (owner-editable later via admin) ===== */
const STORE={phone:'(412) 358-9770',addrShort:'3324 Babcock Blvd, Pittsburgh',addrFull:'3324 Babcock Blvd, Pittsburgh, PA 15237'};
/* ===== pure helpers (unit-tested in node; no DOM) ===== */
function computeTotals(sub,tipPct,fee,taxBps,taxExempt,discount){
  const tax=taxExempt?0:Math.round(sub*taxBps/10000);
  const tip=tipFixed!=null?tipFixed:Math.round(sub*tipPct/100);
  discount=discount||0; // SAMPLE: first-order signup discount applied after tax
  return{sub,tax,tip,fee,discount,total:sub+tax+tip+fee-discount};
}
function parsePaused(search){try{return new URLSearchParams(search).get('paused')==='1';}catch(e){return false;}}
function visibleItems(items){return items.filter(i=>!i.outOfStock);}

/* ================= cities (region/location foundation; menu/tax/zones per city later) ================= */
const CITIES=[
 {id:'pittsburgh',name:{en:'Pittsburgh',ru:'Питтсбург',es:'Pittsburgh'},active:true},
 {id:'cleveland',name:{en:'Cleveland',ru:'Кливленд',es:'Cleveland'},active:false},
 {id:'columbus',name:{en:'Columbus',ru:'Колумбус',es:'Columbus'},active:false}
];
let currentCity='pittsburgh'; // later: drives menu, tax, delivery zones per location
try{currentCity=localStorage.getItem('lf_city')||'pittsburgh';}catch(e){}
const cname=c=>c.name[LANG]||c.name.en;
function renderCity(){
  document.getElementById('cityName').textContent=cname(CITIES.find(c=>c.id===currentCity));
  const L=document.getElementById('cityList');L.innerHTML='';
  CITIES.forEach(c=>{
    const d=document.createElement('div');d.className='cityrow'+(c.id===currentCity?' on':'')+(c.active?'':' off');
    d.innerHTML=`<b>${cname(c)}</b>`+(c.active?'':`<span class="soon">${t('coming_soon')}</span>`);
    if(c.active)d.onclick=()=>{currentCity=c.id;try{localStorage.setItem('lf_city',c.id);}catch(e){}
      renderCity();document.getElementById('citySheet').classList.remove('open');};
    L.appendChild(d);
  });
}
document.getElementById('cityBtn').onclick=()=>{renderCity();document.getElementById('citySheet').classList.add('open');};
document.getElementById('cityBack').onclick=()=>document.getElementById('citySheet').classList.remove('open');
const fmt=c=>'$'+(c/100).toFixed(2);
/* SAMPLE promos — each deal adds a bundle line to the cart (real deals: owner edits in admin) */
/* REAL weekday specials (Mon–Thu) — owner's menu */
const DEALS=[
 {t:'deal1t',d:'deal1d',alt:false,price:2999,contents:{en:'2× 16" Cheese Pizzas + 12 Wings (plain) + 2L Soda',ru:'2× сырные пиццы 16" + 12 крылышек + газировка 2 л',es:'2× pizzas de queso 16" + 12 alitas + refresco 2 l'}},
 {t:'deal2t',d:'deal2d',alt:true,price:2999,contents:{en:'2× 16" Cheese Pizzas + One Whole Sub + 2L Soda',ru:'2× сырные пиццы 16" + целый саб + газировка 2 л',es:'2× pizzas de queso 16" + sub entero + refresco 2 l'}},
 {t:'deal3t',d:'deal3d',alt:false,price:1199,contents:{en:'16" Cheese Pizza',ru:'Сырная пицца 16"',es:'Pizza de queso 16"'}}
];
const dcontents=x=>x.contents[LANG]||x.contents.en;

/* ================= Mix & Match (Domino's mechanic, our comic style) =================
   Pick any 2 items from the list — fixed SAMPLE price each. The owner edits the
   real price + item list; item ids must exist in MENU above. */
const MIXMATCH={price:699,items:['ap-mozz','ap-poppers','ap-rings','ds-tiramisu','ds-oreo','ds-strawberry']};
let mmSel=[];
function renderMixMatch(){
  const box=document.getElementById('mmItems');if(!box)return;box.innerHTML='';
  document.getElementById('mmDesc').textContent=t('mixmatch_desc').replace('{p}',fmt(MIXMATCH.price));
  MIXMATCH.items.forEach(id=>{
    const f=findItem(id);if(!f)return;
    const d=document.createElement('div');d.className='mmitem'+(mmSel.includes(id)?' on':'');
    d.innerHTML=`${artFor(f.it.art)}<span>${mname(f.it)}<br><b>${fmt(MIXMATCH.price)}</b></span>`;
    d.onclick=()=>{
      const i=mmSel.indexOf(id);
      if(i>=0)mmSel.splice(i,1);
      else{if(mmSel.length>=2)mmSel.shift();mmSel.push(id);}
      renderMixMatch();};
    box.appendChild(d);});
  document.getElementById('mmTotal').textContent=mmSel.length===2?fmt(MIXMATCH.price*2):t('mixmatch_pick');
  document.getElementById('mmAdd').disabled=mmSel.length!==2||isPaused();
}
document.getElementById('mmAdd').onclick=()=>{
  if(isPaused()||mmSel.length!==2)return;
  mmSel.forEach(id=>{const f=findItem(id);if(!f)return;
    cart.push({name:mname(f.it),name_en:f.it.name.en,desc:t('mixmatch_title'),desc_en:T.en.mixmatch_title,
      unit:MIXMATCH.price,qty:1,ill:f.it.art});});
  mmSel=[];renderMixMatch();renderCart();
};

/* ================= order tracker (Domino's mechanic, our comic style) =================
   Every paid order is saved to localStorage 'lf_orders'. The tracker shows
   preparing → in the oven → on the way / ready for pickup by elapsed time. */
function lfOrders(){try{return JSON.parse(localStorage.getItem('lf_orders')||'[]');}catch(e){return[];}}
function lfSaveOrder(o){try{const a=lfOrders();a.unshift(o);localStorage.setItem('lf_orders',JSON.stringify(a.slice(0,20)));}catch(e){}}
function trackStage(o){
  const mins=(Date.now()-o.ts)/60000;
  return mins<10?0:mins<25?1:2;  // preparing → in the oven → on the way / ready
}
document.getElementById('trGo').onclick=()=>{
  const num=document.getElementById('trNum').value.trim().toUpperCase().replace(/^#/,'');
  const out=document.getElementById('trOut');
  const o=lfOrders().find(x=>x.num===num);
  if(!o){out.innerHTML=`<div class="warnbox">${t('tracker_notfound')}</div>`;return;}
  const st=trackStage(o);
  const steps=o.mode==='delivery'?['tr_prep','tr_oven','tr_way']:['tr_prep','tr_oven','tr_ready'];
  const etaMin=Math.max(5,Math.round((o.mode==='delivery'?40:20)-(Date.now()-o.ts)/60000));
  out.innerHTML=`<div class="reorder-card"><b class="logostyle" style="font-size:17px">#${o.num}</b>`
    +`<div class="trsteps">${steps.map((k,i)=>
      `<div class="trstep${i<st?' done':i===st?' now':''}"><div class="dot">${i<st?'✓':i+1}</div><div>${t(k)}</div></div>`).join('')}</div>`
    +`<div class="small">${t('tr_eta').replace('{n}',etaMin)} &bull; ${o.lines.map(l=>l.qty+'&times; '+l.name).join(', ')}</div></div>`;
};

/* ================= reorder tab (full order history) ================= */
function renderReorderTab(g){
  const orders=lfOrders();
  if(!orders.length){
    const d=document.createElement('div');d.className='reorder-card';d.textContent=t('reorder_empty');g.appendChild(d);return;
  }
  orders.forEach(o=>{
    const d=document.createElement('div');d.className='reorder-card';
    const dt=new Date(o.ts).toLocaleDateString()+' '+new Date(o.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    const info=document.createElement('div');
    info.innerHTML=`<b>#${o.num}</b> <span style="color:#666">&bull; ${dt} &bull; ${fmt(o.total)}</span><br>${o.lines.map(l=>l.qty+'&times; '+l.name).join(', ')}`;
    const b=document.createElement('button');b.textContent=t('reorder_repeat');b.style.cssText='margin-top:8px';
    b.onclick=()=>{o.lines.forEach(l=>cart.push({name:l.name,name_en:l.name_en||l.name,desc:'',desc_en:'',
      unit:l.unit,qty:l.qty,ill:l.ill||'pizza'}));renderCart();activeCat='pizza';renderChips();renderMenu();};
    d.appendChild(info);d.appendChild(b);g.appendChild(d);});
}

/* ================= seeded random (stable topping layout) ================= */
function rng(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}

/* ================= topping shapes (comic style, bold outlines) ================= */
function topShape(tp,x,y,rot){
  const g=`transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})"`;
  switch(tp.shape){
    case 'pep': return `<g ${g}><circle r="7" fill="${tp.color}" stroke="#141414" stroke-width="2"/><circle r="2.2" cx="-2" cy="-1" fill="#7B241C"/><circle r="2.2" cx="2.5" cy="1.5" fill="#7B241C"/></g>`;
    case 'saus': return `<g ${g}><ellipse rx="7" ry="5" fill="${tp.color}" stroke="#141414" stroke-width="2"/></g>`;
    case 'mush': return `<g ${g}><path d="M-6,2 A6,6 0 0 1 6,2 Z" fill="${tp.color}" stroke="#141414" stroke-width="2"/><rect x="-2" y="2" width="4" height="5" fill="${tp.color}" stroke="#141414" stroke-width="1.6"/></g>`;
    case 'onion': return `<g ${g}><path d="M-6,0 A6,6 0 0 1 6,0" fill="none" stroke="${tp.color}" stroke-width="3.4" stroke-linecap="round"/><path d="M-6,0 A6,6 0 0 1 6,0" fill="none" stroke="#141414" stroke-width="5" stroke-linecap="round" opacity="0.25"/></g>`;
    case 'gpep': return `<g ${g}><rect x="-7" y="-2.6" width="14" height="5.2" rx="2.6" fill="${tp.color}" stroke="#141414" stroke-width="2"/></g>`;
    case 'olive': return `<g ${g}><circle r="5.4" fill="none" stroke="#141414" stroke-width="4.6"/><circle r="5.4" fill="none" stroke="${tp.color}" stroke-width="2.4"/></g>`;
    case 'bacon': return `<g ${g}><path d="M-8,-3 Q-4,-6 0,-3 Q4,0 8,-3 L8,3 Q4,6 0,3 Q-4,0 -8,3 Z" fill="${tp.color}" stroke="#141414" stroke-width="2"/></g>`;
    case 'xch': return `<g ${g}><ellipse rx="8" ry="5" fill="${tp.color}" stroke="#141414" stroke-width="1.6" opacity="0.9"/></g>`;
    default: return `<g ${g}><circle r="5" fill="${tp.color}" stroke="#141414" stroke-width="2"/></g>`;
  }
}

/* ================= topping layout: golden-angle phyllotaxis =================
   Deterministic spiral: every topping of a kind is spread evenly over the whole
   disc — no clumps. Half toppings are mirrored onto their side. Pure function,
   unit-tested in node (see tests below the fold). */
const GA=Math.PI*(3-Math.sqrt(5)); // golden angle ≈ 137.508°
const PORTION_N={light:6,normal:11,extra:16};
function phylloPoints(seedStr,n,rMax,half){
  const off=(hash(seedStr)%628)/100; // deterministic 0..2π from seed
  const pts=[];
  for(let i=0;i<n;i++){
    const r=rMax*Math.sqrt((i+0.5)/n), a=off+i*GA;
    let x=100+Math.cos(a)*r, y=100+Math.sin(a)*r;
    if(half==='left'&&x>100)x=200-x;
    if(half==='right'&&x<100)x=200-x;
    pts.push({x:+x.toFixed(1),y:+y.toFixed(1),rot:hash(seedStr+':'+i)%360});
  }
  return pts;
}

/* ================= PIZZA ART — layered, swappable =================
   The pizza is drawn in replaceable LAYERS: crust → sauce → cheese → toppings.
   Each layer is a function in PIZZA_ART. TO USE REAL PHOTOS/ART LATER, replace a
   layer body with e.g.:
     crust:(type,R)=>`<image href="assets/crust-hand.png" x="2" y="2" width="196" height="196"/>`
   Topping POSITIONS (phylloPoints) are independent of topping ART, so photos
   drop in without touching the layout code. Sizes and crusts stay parametric. */
const PIZZA_ART={
 /* Crust changes VISIBLY per type: thin = crisp & dark narrow rim, hand-tossed =
    puffy golden rim with highlight, stuffed = thick pale rim with cheese dashes. */
 crust(type,R){
   const w=type==='thin'?7:type==='stuffed'?21:type==='gf'?10:type==='cauli'?12:15; // visible rim width per crust
   const pal=type==='thin'?['#E8B25A','#D89A3A','#A86414']
         :type==='stuffed'?['#F7D384','#EFBB5E','#D99A35']
         :type==='gf'?['#EFD9A0','#E3C078','#C49A4A']
         :type==='cauli'?['#F5E3B0','#EDD199','#D9B26A']
         :['#F2C063','#E8A94E','#CE8227'];
   const gid='crg'+type;
   const grad=`<radialGradient id="${gid}" cx="50%" cy="42%" r="68%"><stop offset="0%" stop-color="${pal[0]}"/><stop offset="72%" stop-color="${pal[1]}"/><stop offset="100%" stop-color="${pal[2]}"/></radialGradient>`;
   let spots='';
   const r=rng(hash('crustspots'+type));
   const nSpots=type==='thin'?36:28;
   for(let i=0;i<nSpots;i++){const a=r()*6.283, rr=R-w/2+(r()-0.5)*w*0.95;
     spots+=`<circle cx="${(100+Math.cos(a)*rr).toFixed(1)}" cy="${(100+Math.sin(a)*rr).toFixed(1)}" r="${(1.8+r()*3.2).toFixed(1)}" fill="#8F5310" opacity="${(0.3+r()*0.45).toFixed(2)}"/>`;}
   let s=`${grad}<circle cx="100" cy="100" r="${R}" fill="url(#${gid})" stroke="#141414" stroke-width="4.5"/>${spots}`;
   if(type==='thin')
     s+=`<circle cx="100" cy="100" r="${(R-3.5).toFixed(1)}" fill="none" stroke="#7B4A0E" stroke-width="2.2" opacity="0.8"/>`; // crisp dark edge
   else
     s+=`<circle cx="100" cy="100" r="${(R-w*0.22).toFixed(1)}" fill="none" stroke="#FFF3D6" stroke-width="${type==='stuffed'?'3.4':'2.4'}" opacity="0.75"/>`; // puffy highlight
   if(type==='stuffed')
     s+=`<circle cx="100" cy="100" r="${(R-w*0.45).toFixed(1)}" fill="none" stroke="#F9DC5C" stroke-width="${(w*0.5).toFixed(1)}" stroke-dasharray="11 7" opacity="0.9"/>`; // cheese inside the rim
   // soft inner shadow where crust meets the cheese — depth like a real bake
   s+=`<circle cx="100" cy="100" r="${(R-w+2).toFixed(1)}" fill="none" stroke="#8B5A1B" stroke-width="3" opacity="0.3"/>`;
   return s;
 },
 sauce(color,r){
   return `<circle cx="100" cy="100" r="${r}" fill="${color}" stroke="#141414" stroke-width="2.5"/>`;
 },
 cheese(r,level,seedStr){
   const op=level==='light'?0.45:level==='extra'?0.95:0.75;
   let s=`<circle cx="100" cy="100" r="${r}" fill="#F9DC5C" opacity="${op}"/>`;
   // browned "leopard" spots — the real-pizzeria look, comic style
   const n=level==='light'?6:level==='extra'?20:12, rr=rng(hash('cheese'+seedStr+level));
   for(let i=0;i<n;i++){const a=rr()*6.283, d=Math.sqrt(rr())*(r-8);
     const cx=(100+Math.cos(a)*d).toFixed(1), cy=(100+Math.sin(a)*d).toFixed(1);
     s+=`<ellipse cx="${cx}" cy="${cy}" rx="${(4+rr()*7).toFixed(1)}" ry="${(3+rr()*5).toFixed(1)}" fill="#D89A2B" opacity="${(0.35+rr()*0.35).toFixed(2)}" transform="rotate(${(rr()*180).toFixed(0)} ${cx} ${cy})"/>`;}
   return s;
 },
 topping(tp,x,y,rot){ return topShape(tp,x,y,rot); },
};

/* Pizza geometry: the visual radius scales with REAL inches — Small is visibly
   smaller than Large. pizzaR() is unit-tested (18" > 12"). */
function pizzaR(inches){return 30+inches*3.6;} // 10"→66, 12"→73, 14"→80, 16"→88, 18"→95
function effSizeIn(){const c=BUILDER.crusts[B.crust];return c.sizeIn||BUILDER.sizes[B.size].in;}

/* Grid layout for SQUARE pizzas: even rows/cols with tiny deterministic jitter.
   Halves split the grid by x (left/right of center). */
function gridPoints(seedStr,n,half,halfSel){
  const cols=Math.ceil(Math.sqrt(n)), rows=Math.ceil(n/cols);
  const x0=halfSel==='left'?100-half:halfSel==='right'?100:100-half;
  const x1=halfSel==='left'?100:halfSel==='right'?100+half:100+half;
  const pts=[];let k=0;
  for(let r=0;r<rows&&pts.length<n;r++)for(let c=0;c<cols&&pts.length<n;c++){
    const x=x0+(x1-x0)*(cols===1?0.5:(c+0.5)/cols);
    const y=100-half+(2*half)*(rows===1?0.5:(r+0.5)/rows);
    const jx=((hash(seedStr+'jx'+k)%100)/100-0.5)*half*0.14;
    const jy=((hash(seedStr+'jy'+k)%100)/100-0.5)*half*0.14;
    pts.push({x:+(x+jx).toFixed(1),y:+(y+jy).toFixed(1),rot:hash(seedStr+':g:'+k)%360});k++;
  }
  return pts;
}

/* Sicilian: SQUARE, 16 slices (4x4), large-size box. Toppings on a grid.
   More shapes later: add to BUILDER.shapes + a renderer here. */
function sicilianSVG(o){
  const R=pizzaR(16), rimW=14, rIn=R-rimW+2, H=rIn-10, gid='sqcrg';
  let s=`<svg id="pizzaSvg" viewBox="0 0 200 200" style="width:100%;height:auto" role="img" aria-label="sicilian pizza">`;
  s+=`<defs><radialGradient id="${gid}" cx="50%" cy="42%" r="68%"><stop offset="0%" stop-color="#F2C063"/><stop offset="72%" stop-color="#E8A94E"/><stop offset="100%" stop-color="#CE8227"/></radialGradient></defs>`;
  s+=`<rect x="${100-R}" y="${100-R}" width="${2*R}" height="${2*R}" rx="16" fill="url(#${gid})" stroke="#141414" stroke-width="4.5"/>`;
  const rr=rng(hash('sqspots'));let placed=0;
  for(let i=0;i<60&&placed<26;i++){const x=(rr()*2-1)*R, y=(rr()*2-1)*R;
    if(Math.max(Math.abs(x),Math.abs(y))>rIn-2){placed++;
      s+=`<circle cx="${(100+x).toFixed(1)}" cy="${(100+y).toFixed(1)}" r="${(1.8+rr()*3).toFixed(1)}" fill="#8F5310" opacity="${(0.3+rr()*0.4).toFixed(2)}"/>`;}}
  if(o.sauceColor)s+=`<rect x="${100-rIn}" y="${100-rIn}" width="${2*rIn}" height="${2*rIn}" rx="8" fill="${o.sauceColor}" stroke="#141414" stroke-width="2.5"/>`;
  if(o.cheese!=='none'){
    const op=o.cheese==='light'?0.45:o.cheese==='extra'?0.95:0.75;
    s+=`<rect x="${100-rIn+4}" y="${100-rIn+4}" width="${2*(rIn-4)}" height="${2*(rIn-4)}" rx="6" fill="#F9DC5C" opacity="${op}"/>`;
    const n=o.cheese==='light'?6:o.cheese==='extra'?20:12, q=rng(hash('sqcheese'+o.cheese));
    for(let i=0;i<n;i++){const x=(q()*2-1)*(rIn-12), y=(q()*2-1)*(rIn-12);
      s+=`<ellipse cx="${(100+x).toFixed(1)}" cy="${(100+y).toFixed(1)}" rx="${(4+q()*7).toFixed(1)}" ry="${(3+q()*5).toFixed(1)}" fill="#D89A2B" opacity="0.55"/>`;}
  }
  for(let i=1;i<4;i++){const pp=(100-rIn+4)+(2*(rIn-4))*i/4; // 16 slices
    s+=`<line x1="${pp.toFixed(1)}" y1="${100-rIn+4}" x2="${pp.toFixed(1)}" y2="${100+rIn-4}" stroke="#141414" stroke-width="1.6" opacity="0.35"/>`;
    s+=`<line x1="${100-rIn+4}" y1="${pp.toFixed(1)}" x2="${100+rIn-4}" y2="${pp.toFixed(1)}" stroke="#141414" stroke-width="1.6" opacity="0.35"/>`;}
  (o.tops||[]).forEach(it=>{
    const pts=gridPoints(it.tp.id+it.portion+it.half,PORTION_N[it.portion]||11,H,it.half);
    pts.forEach(pt=>{s+=PIZZA_ART.topping(it.tp,pt.x,pt.y,pt.rot);});
  });
  return s+'</svg>';
}

/* Pure pizza renderer — returns the full SVG string. o:
   {sizeIn, shape:'round'|'sicilian', crust, sauceColor, cheese, tops:[{tp, portion, half}]} */
function pizzaSVG(o){
  if(o.shape==='sicilian')return sicilianSVG(o);
  const R=pizzaR(o.sizeIn); // real inches → visibly different sizes
  const rimW=o.crust==='thin'?7:o.crust==='stuffed'?21:o.crust==='gf'?10:o.crust==='cauli'?12:15;
  const rIn=R-rimW+3;
  let s=PIZZA_ART.crust(o.crust,R);
  if(o.sauceColor)s+=PIZZA_ART.sauce(o.sauceColor,rIn); // 'no sauce' = bare crust, like Dodo
  if(o.cheese!=='none')s+=PIZZA_ART.cheese(rIn-4,o.cheese,o.sizeLabel+o.crust); // cheese slightly smaller → a real sauce ring shows
  let halfUsed=false;
  (o.tops||[]).forEach(it=>{
    if(it.half!=='whole')halfUsed=true;
    const pts=phylloPoints(it.tp.id+it.portion+it.half,PORTION_N[it.portion]||11,rIn-11,it.half); // margin: toppings never touch the crust
    pts.forEach(pt=>{s+=PIZZA_ART.topping(it.tp,pt.x,pt.y,pt.rot);});
  });
  if(halfUsed)s+=`<line x1="100" y1="${(100-rIn).toFixed(0)}" x2="100" y2="${(100+rIn).toFixed(0)}" stroke="#141414" stroke-width="2.5" stroke-dasharray="7 5" opacity="0.7"/>`;
  s+=`<circle cx="100" cy="100" r="${R}" fill="none" stroke="#141414" stroke-width="4.5" opacity="0.15"/>`;
  return `<svg id="pizzaSvg" viewBox="0 0 200 200" style="width:100%;height:auto" role="img" aria-label="pizza preview">${s}</svg>`;
}
/* Live builder preview: reads builder state B and repaints the pizza. */
function renderPizzaSVG(){
  const tops=Object.keys(B.tops).map(tid=>({tp:BUILDER.tops.find(x=>x.id===tid),portion:B.tops[tid].p,half:B.tops[tid].h}));
  const el=document.getElementById('pizzaSvg');
  if(el)el.outerHTML=pizzaSVG({
    sizeIn:effSizeIn(), shape:B.shape, crust:BUILDER.crusts[B.crust].id,
    sauceColor:BUILDER.sauces[B.sauce].color, cheese:B.cheese, tops});
}

/* ================= menu card illustrations (SVG, comic style) ================= */
function illSVG(kind){
  const o='stroke="#141414" stroke-width="3"';
  if(kind==='pizza')return `<svg viewBox="0 0 76 76" class="ill"><path d="M38 8 L66 64 Q38 74 10 64 Z" fill="#F9DC5C" ${o}/><path d="M38 8 L66 64 Q52 69 38 69 Z" fill="#F5C93C" ${o}/><circle cx="40" cy="34" r="5" fill="#B03A2E" ${o}/><circle cx="50" cy="46" r="5" fill="#B03A2E" ${o}/><circle cx="32" cy="50" r="5" fill="#B03A2E" ${o}/><path d="M14 62 Q38 72 62 62" fill="none" stroke="#E6A756" stroke-width="7"/></svg>`;
  if(kind==='salad')return `<svg viewBox="0 0 76 76" class="ill"><ellipse cx="38" cy="52" rx="28" ry="12" fill="#fff" ${o}/><path d="M10 52 Q38 66 66 52 L60 58 Q38 70 16 58 Z" fill="#2C6AC9" ${o}/><circle cx="28" cy="40" r="8" fill="#2E9E5B" ${o}/><circle cx="44" cy="36" r="8" fill="#37B268" ${o}/><circle cx="52" cy="46" r="6" fill="#2E9E5B" ${o}/><circle cx="36" cy="48" r="4" fill="#C0392B" ${o}/></svg>`;
  if(kind==='soda')return `<svg viewBox="0 0 76 76" class="ill"><path d="M26 18 L50 18 L46 66 L30 66 Z" fill="#C0392B" ${o}/><rect x="24" y="12" width="28" height="8" rx="3" fill="#fff" ${o}/><path d="M38 12 L46 2" stroke="#141414" stroke-width="3"/><rect x="30" y="28" width="16" height="26" fill="#fff" opacity="0.35"/></svg>`;
  if(kind==='shake')return `<svg viewBox="0 0 76 76" class="ill"><path d="M26 24 L50 24 L46 66 L30 66 Z" fill="#F9DC5C" ${o}/><ellipse cx="38" cy="24" rx="14" ry="7" fill="#fff" ${o}/><circle cx="32" cy="12" r="4" fill="#C0392B" ${o}/><path d="M38 18 L52 4" stroke="#141414" stroke-width="3"/></svg>`;
  if(kind==='cake')return `<svg viewBox="0 0 76 76" class="ill"><path d="M14 56 L38 20 L62 56 Z" fill="#7B3F00" ${o}/><path d="M14 56 L38 20 L38 56 Z" fill="#5C2E00" ${o}/><path d="M22 46 L38 24 L54 46" fill="none" stroke="#F9DC5C" stroke-width="4"/><circle cx="38" cy="14" r="4" fill="#C0392B" ${o}/></svg>`;
  if(kind==='appetizer')return `<svg viewBox="0 0 76 76" class="ill"><rect x="10" y="28" width="11" height="32" rx="5.5" fill="#E6A756" ${o}/><rect x="25" y="22" width="11" height="38" rx="5.5" fill="#F2C063" ${o}/><rect x="40" y="28" width="11" height="32" rx="5.5" fill="#E6A756" ${o}/><path d="M53 46 h15 v8 a7.5 7.5 0 0 1 -15 0 z" fill="#C0392B" ${o}/><ellipse cx="60.5" cy="46" rx="9.5" ry="4.5" fill="#fff" ${o}/></svg>`;
  if(kind==='wings')return `<svg viewBox="0 0 76 76" class="ill"><g ${o}><ellipse cx="28" cy="34" rx="11" ry="14" fill="#C25E2E"/><ellipse cx="48" cy="30" rx="11" ry="14" fill="#D4692F" transform="rotate(18 48 30)"/><ellipse cx="40" cy="52" rx="11" ry="13" fill="#B9582A" transform="rotate(-14 40 52)"/><rect x="25.5" y="44" width="5" height="11" fill="#F3E9D2"/><rect x="45.5" y="40" width="5" height="11" fill="#F3E9D2" transform="rotate(18 48 45)"/></g><path d="M22 28 l4 4 M34 26 l3 5" stroke="#7B3A12" stroke-width="2.4"/></svg>`;
  if(kind==='chicken')return `<svg viewBox="0 0 76 76" class="ill"><rect x="14" y="24" width="16" height="34" rx="8" fill="#E6A756" ${o} transform="rotate(-14 22 41)"/><rect x="40" y="22" width="16" height="36" rx="8" fill="#F2C063" ${o} transform="rotate(12 48 40)"/><circle cx="22" cy="36" r="2.2" fill="#B96A1B"/><circle cx="48" cy="34" r="2.2" fill="#B96A1B"/><circle cx="50" cy="46" r="2.2" fill="#B96A1B"/></svg>`;
  if(kind==='stromboli')return `<svg viewBox="0 0 76 76" class="ill"><path d="M8 52 Q38 6 68 52 Q38 66 8 52 Z" fill="#E6A756" ${o}/><path d="M8 52 Q38 6 68 52" fill="none" stroke="#F2C063" stroke-width="5"/><path d="M30 34 l6 8 M40 30 l6 8 M50 32 l5 7" stroke="#B96A1B" stroke-width="3.4" stroke-linecap="round"/></svg>`;
  if(kind==='rolls')return `<svg viewBox="0 0 76 76" class="ill"><g ${o}><circle cx="24" cy="38" r="13" fill="#E6A756"/><circle cx="50" cy="32" r="13" fill="#F2C063"/><circle cx="42" cy="54" r="11" fill="#E6A756"/></g><path d="M24 38 a6 6 0 1 1 6 6 a3.5 3.5 0 1 0 -3.5 -3.5" fill="none" stroke="#B03A2E" stroke-width="2.6"/><path d="M50 32 a6 6 0 1 1 6 6 a3.5 3.5 0 1 0 -3.5 -3.5" fill="none" stroke="#B03A2E" stroke-width="2.6"/></svg>`;
  if(kind==='breadsticks')return `<svg viewBox="0 0 76 76" class="ill"><rect x="16" y="14" width="10" height="48" rx="5" fill="#E6A756" ${o}/><rect x="33" y="10" width="10" height="52" rx="5" fill="#F2C063" ${o}/><rect x="50" y="16" width="10" height="46" rx="5" fill="#E6A756" ${o}/><circle cx="21" cy="26" r="2.4" fill="#fff"/><circle cx="38" cy="22" r="2.4" fill="#fff"/><circle cx="55" cy="30" r="2.4" fill="#fff"/><circle cx="38" cy="44" r="2.4" fill="#2E9E5B"/></svg>`;
  if(kind==='sub')return `<svg viewBox="0 0 76 76" class="ill"><rect x="6" y="28" width="64" height="22" rx="11" fill="#E6A756" ${o}/><rect x="10" y="24" width="56" height="10" rx="5" fill="#27AE60" ${o}/><rect x="14" y="30" width="48" height="7" rx="3.5" fill="#C0392B" ${o}/><rect x="10" y="40" width="56" height="4" rx="2" fill="#F2C063" opacity="0.8"/></svg>`;
  if(kind==='kids')return `<svg viewBox="0 0 76 76" class="ill"><path d="M38 8 L66 64 Q38 74 10 64 Z" fill="#F9DC5C" ${o}/><circle cx="33" cy="38" r="3.4" fill="#141414"/><circle cx="47" cy="38" r="3.4" fill="#141414"/><path d="M30 50 Q40 58 50 50" fill="none" stroke="#141414" stroke-width="3" stroke-linecap="round"/><circle cx="40" cy="30" r="4" fill="#B03A2E" ${o}/></svg>`;
  if(kind==='dessert')return `<svg viewBox="0 0 76 76" class="ill"><rect x="24" y="16" width="12" height="44" rx="6" fill="#8B5A2B" ${o} transform="rotate(-10 30 38)"/><rect x="42" y="16" width="12" height="44" rx="6" fill="#A67C3D" ${o} transform="rotate(10 48 38)"/><path d="M28 26 q4 6 0 12 M46 26 q-4 6 0 12" stroke="#5C3A12" stroke-width="2.4" fill="none"/><circle cx="32" cy="52" r="1.8" fill="#fff"/><circle cx="48" cy="50" r="1.8" fill="#fff"/></svg>`;
  if(kind==='coffee')return `<svg viewBox="0 0 76 76" class="ill"><path d="M24 44 q3 -7 0 -13 M32 44 q3 -7 0 -13" fill="none" stroke="#8B5E34" stroke-width="2.6" stroke-linecap="round"/><path d="M26 22 L50 22 L45 64 L31 64 Z" fill="#F2C063" ${o}/><rect x="24" y="13" width="28" height="9" rx="3" fill="#8B5E34" ${o}/><rect x="30" y="4" width="16" height="9" rx="2" fill="#8B5E34" ${o}/><path d="M50 34 q11 2 9 12 q-2 9 -12 8" fill="none" ${o}/><rect x="30" y="30" width="6" height="28" fill="#fff" opacity="0.3"/></svg>`;
  if(kind==='dip')return `<svg viewBox="0 0 76 76" class="ill"><path d="M20 30 h36 l-5 28 h-26 z" fill="#F3E9D2" stroke="#141414" stroke-width="3"/><ellipse cx="38" cy="30" rx="18" ry="7" fill="#fff" stroke="#141414" stroke-width="3"/><path d="M28 31 q10 6 20 0" stroke="#C0392B" stroke-width="3" fill="none"/></svg>`;
  return `<svg viewBox="0 0 76 76" class="ill"><circle cx="38" cy="38" r="26" fill="#F9DC5C" ${o}/></svg>`;
}

/* ================= menu / deals / reorder ================= */
const cart=[]; // {name,desc,unit,qty,ill,allergy,cfg}
/* SAMPLE promo codes — the owner edits the real codes/discounts later */
const PROMOS=[{code:'PIZZA10',pct:10},{code:'FELICE15',pct:15}];
let promo=null; // {code,pct} once applied
let upsTab='sauces';
let taxEx={uploaded:false,approved:false}; // tax-exempt org flow (STUB: production verifies via /v1/org-documents)
let orderType='pickup', zoneOk=false, tipPct=15, tipFixed=null, activeCat='pizza'; /* tipFixed: custom tip in cents; null = use tipPct */
const mname=o=>o.name[LANG]||o.name.en, mdesc=o=>o.desc[LANG]||o.desc.en;

function applyLang(){
  document.querySelectorAll('[data-t]').forEach(el=>el.textContent=t(el.dataset.t));
  document.querySelectorAll('[data-ph]').forEach(el=>el.placeholder=t(el.dataset.ph));
  document.querySelectorAll('#lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===LANG));
  renderDeals();renderMixMatch();renderChips();renderMenu();updateBuilder();renderCart();renderReorder();renderCity();
  document.getElementById('fAddr').textContent=t('f_addr');
  document.getElementById('fPhone').textContent=STORE.phone;
  document.getElementById('fHours').textContent=t('f_hours');
  document.querySelector('header .sub').textContent=STORE.addrShort+' • '+STORE.phone;
  applyPausedBanner();
}
document.querySelectorAll('#lang button').forEach(b=>b.onclick=()=>{LANG=b.dataset.l;applyLang();});

function renderDeals(){
  const d=document.getElementById('deals');d.innerHTML='';
  DEALS.forEach(x=>{const e=document.createElement('div');e.className='deal'+(x.alt?' alt':'');
    e.innerHTML=`<span class="tag">${t('deal_tag')}</span><b>${t(x.t)}</b><p>${t(x.d)}</p><p><b>${fmt(x.price)}</b> <span style="font-size:11px">${t('tap_to_add')}</span></p>`;
    e.onclick=()=>addDeal(x,e);d.appendChild(e);});
}
function addDeal(x,fromEl){
  if(isPaused())return;
  cart.push({name:t(x.t),name_en:T.en[x.t],desc:dcontents(x),desc_en:x.contents.en,unit:x.price,qty:1,ill:'pizza'});
  if(fromEl)flyToCart(fromEl);
  renderCart();
}
function renderChips(){
  const c=document.getElementById('chips');c.innerHTML='';
  CATS.forEach(cat=>{const b=document.createElement('button');
    b.innerHTML=t(cat.nameKey)+(cat.hot?`<span class="tabnew">${t('new_badge')}</span>`:'');
    if(cat.id===activeCat)b.classList.add('on');if(cat.hot)b.classList.add('hot');
    b.onclick=()=>{activeCat=cat.id;renderChips();renderMenu();};c.appendChild(b);});
}
function menuCard(it){
  const d=document.createElement('div');d.className='card'+(it.outOfStock?' oos':'');
  const from=basePrice(it),multi=it.sizes.length>1;
  const alg=(it.allergens||[]).map(a=>`<span>${t('alg_'+a)}</span>`).join('');
  d.innerHTML=`${artFor(it.art)}<div class="info"><div class="name">${mname(it)}${it.isNew?`<span class="newbadge">${t('new_badge')}</span>`:''}</div><div class="desc">${mdesc(it)}${multi?' • '+it.sizes.map(x=>x.label).join(' / '):''}</div><div class="allg">${alg}</div><div class="price">${fmt(from)}+</div><div class="row"></div></div>`;
  const row=d.querySelector('.row');
  if(it.outOfStock){
    const b=document.createElement('button');b.className='oosbtn';b.disabled=true;
    b.textContent=t('out_of_stock');row.appendChild(b);
  }else{
    if(multi&&!it.builder&&!it.preset){
      it.sizes.forEach((sz,idx)=>{const b=document.createElement('button');
        b.innerHTML=`${sz.label} \u2014 ${fmt(sz.price)}`;
        b.onclick=e=>{e.stopPropagation();quickAdd(it,b,idx);};row.appendChild(b);});
    }else{
      const b=document.createElement('button');b.textContent=t('add');
      b.onclick=e=>{e.stopPropagation();quickAdd(it,b);};row.appendChild(b);
    }
    const custom=it.builder&&it.builder!=='pizza'?()=>openGBuilder(it):(it.preset?()=>openBuilder(it):null);
    if(custom){
      const c2=document.createElement('button');c2.className='ghost';c2.textContent=t('customize');
      c2.onclick=e=>{e.stopPropagation();custom();};row.appendChild(c2);
      d.onclick=custom;
    }
  }
  return d;
}
function renderMenu(){
  const g=document.getElementById('menu');g.innerHTML='';
  if(activeCat==='reorder'){renderReorderTab(g);return;}
  if(activeCat==='kids'){
    const kb=document.createElement('div');kb.className='kidsbanner';
    kb.innerHTML=`${illSVG('kids')}<div><b class="logostyle">${t('kids_title')}</b><p>${t('kids_desc')}</p></div>`;
    g.appendChild(kb);
  }
  if(activeCat==='pizza'){
    const d=document.createElement('div');d.className='card builder-card';
    d.innerHTML=`${illSVG('pizza')}<div class="info"><div class="name">${t('menu_builder')}</div><div class="desc">${t('half_hint')}</div></div>`;
    d.onclick=()=>openBuilder(null);g.appendChild(d);
  }
  [...(MENU[activeCat]||[])].sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0)).forEach(it=>g.appendChild(menuCard(it)));
}
/* fly-to-cart animation */
function flyToCart(fromEl){
  try{
    const r=fromEl.getBoundingClientRect(),bar=document.getElementById('bar').getBoundingClientRect();
    const f=document.createElement('div');f.className='fly';f.innerHTML=IC.fly;
    f.style.left=(r.left+r.width/2-17)+'px';f.style.top=(r.top-10)+'px';
    document.body.appendChild(f);
    requestAnimationFrame(()=>{
      f.style.transform=`translate(${bar.left+bar.width/2-(r.left+r.width/2)}px,${bar.top+40-r.top}px) scale(.4)`;
      f.style.opacity='0';
    });
    setTimeout(()=>f.remove(),750);
  }catch(e){}
}
function quickAdd(it,fromEl,si){
  if(isPaused())return;
  const s=it.sizes[si||0];
  const line={name:mname(it),name_en:it.name.en,desc:s.label,desc_en:s.label,qty:1,unit:s.price,ill:it.art};
  if(it.art==='pizza')line.freeDip=FREE_DIP_DEFAULT; // every pizza comes with 1 free sauce (ranch default)
  cart.push(line);
  if(fromEl)flyToCart(fromEl);
  renderCart();
  const bar=document.getElementById('bar');bar.style.transform='scale(1.04)';
  setTimeout(()=>bar.style.transform='',150);
}
