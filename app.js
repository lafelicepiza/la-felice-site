
/* ================= i18n (prototype-local; production: owner-editable TextTemplates) ================= */
const T = {
en:{pickup:"Pickup",delivery:"Delivery",address_ph:"Delivery address — street, apt",check_zone:"Check my zone",
zone_ok:"We deliver to you! Fee {fee}, ~{eta} min.",menu_builder:"Pizza builder",menu_pizza:"Pizzas",menu_salads:"Salads",menu_drinks:"Drinks",menu_desserts:"Desserts",
add:"Add",customize:"Customize",back:"Back",checkout:"Checkout",your_order:"Your order",subtotal:"Subtotal",tax:"Tax",
delivery_fee:"Delivery fee",tip:"Tip",total:"Total",time_order:"Order for later (time order)",name:"Name",name_ph:"Your name",
phone:"Phone",phone_ph:"+1 (___) ___-____",create_account:"Create an account with this phone",payment:"Payment",card:"Card",
cant_pay:"I can't pay right now",no_payment_warning:"We cannot accept an order without payment. Pay now, or come to the store and wait while we prepare your order.",
no_order_title:"No order without payment",no_order_created:"No order was placed and nothing was charged.",ok_pay:"OK — I'll pay now",
order_confirmed:"Order confirmed!",paid:"Paid",sms_note:"We'll text you when your order is ready.",
back_to_menu:"Back to menu",sample_note:"Demo data — the real menu, prices and photos are coming soon.",sample_note2:"demo",
stripe_note:"Payments are processed securely by Stripe. We never see or store your card number.",processing:"Processing…",
pickup_eta:"Ready in ~25 min",delivery_eta:"Arriving in ~{eta} min",deals:"Hot deals",
build_title:"Build your pizza",size:"1. Size",crust:"2. Crust",sauce:"3. Sauce",cheese:"4. Cheese",toppings:"5. Toppings",
your_pizza:"Your pizza",add_to_cart:"Add to cart",half_hint:"Tap a topping, then choose Light / Normal / Extra and Left / Whole / Right half.",
p_light:"Light",p_normal:"Normal",p_extra:"Extra",h_left:"Left",h_whole:"Whole",h_right:"Right",
order_again:"Loved it last time?",reorder_btn:"Order it again — 1 tap",
deal_tag:"Mon\u2013Thu",deal1t:"2 Pizzas + Wings Deal",deal1d:"2 large cheese pizzas, 12 plain wings, 2L soda. Monday\u2013Thursday.",deal2t:"2 Pizzas + Sub Deal",deal2d:"2 large cheese pizzas, one whole sub, 2L soda. Monday\u2013Thursday.",deal3t:"Large Cheese Pizza",deal3d:"16\" cheese pizza. Monday\u2013Thursday.",
no_toppings:"Just cheese, please",qty:"Qty",
change_city:"Choose your city",city_note:"More cities coming soon.",
coming_soon:"soon",new_badge:"NEW",points_earn:"This order earns",points:"pts",
reward_hint_title:"Almost there!",reward_hint:"Just {n} more points — and {reward} is yours!",great:"Great!",
loyal_sample:"Our points program is coming soon.",
my_points:"My points",points_soon:"Our loyalty program is coming soon — points from your orders will be waiting.",
taxexempt_check:"I'm ordering for a tax-exempt organization",taxexempt_title:"Tax-exempt organization?",
taxexempt_text:"If you are a non-profit organization and don't want to pay sales tax — upload your exemption document.",
taxexempt_upload:"Upload document",taxexempt_sent:"Document uploaded — sent for review.",
taxexempt_simulate:"Simulate approval (demo)",taxexempt_approved:"Approved! No sales tax on this order.",taxexempt_line:"TAX-EXEMPT ✓",
allergy_label:"Allergy note for the kitchen",allergy_ph:"e.g. nut allergy — the kitchen will be alerted",
alg_milk:"milk",alg_gluten:"gluten",alg_nuts:"nuts",alg_egg:"egg",alg_soy:"soy",
paused_title:"Online ordering is temporarily paused",paused_text:"Call us or visit the store — we'll happily take your order.",
out_of_stock:"Out of stock",tap_to_add:"Tap to add to cart",
f_hours:"Tue–Sat 8:00 AM – 10:00 PM, Sun 10:00 AM – 9:00 PM, Mon closed",f_addr:"3324 Babcock Blvd, Pittsburgh, PA 15237",
hint_gift:"Add {x} more — garlic sticks FREE!",hint_dessert:"How about dessert?",hint_xcheese:"Try extra cheese!",
hint_deals:"Check our weekly specials!",hints_off:"don't show hints",hints_on:"show hints",
first_order_promo:"Sign up and get {p}% off your first order!",first_order_disc:"First-order signup discount",
acct_save:"With an account this order would cost {x} less ({p}% off)",
sms_consent:"I agree to receive SMS marketing messages",email_consent:"I agree to receive email marketing messages",
consent_note:"Consents are saved to your customer profile for our future mailing list. You can withdraw anytime.",menu_subs:"Subs",menu_appetizers:"Appetizers",menu_wings:"Wings",menu_chicken:"Chicken",menu_stromboli:"Stromboli",menu_rolls:"Rolls",menu_breadsticks:"Breadsticks",menu_kids:"Kids Menu",menu_breakfast:"Breakfast",min_delivery_warn:"Delivery minimum is {m} — add {x} more for delivery (pickup has no minimum).",hint_mindel:"Delivery starts at {m} — add {x} more!",tips:"Tips",tips_note:"Tips are optional — no pressure. Our crew appreciates every bit!",tip_custom:"Custom",tip_custom_ph:"Amount, e.g. 3.50",no_tip:"No tip",menu_extra:"Extras",build_sub:"Build your sub",kids_title:"Fun food for little champions!",kids_desc:"Small portions, big smiles.",build_salad:"Build your salad",build_drink:"Pick your drink",sec_bread:"2. Bread",sec_fillings:"3. Fillings",sec_base:"1. Base",sec_flavor:"2. Flavor",sec_dsize:"1. Size",your_build:"Your build",free_sauce:"Free sauce",free:"free",hint_sauce:"Want to add an extra sauce?",dip_ranch:"Ranch",dip_marinara:"Marinara",dip_garlic:"Garlic Butter",dip_bbq:"BBQ",extra_dip_name:"Extra Dipping Sauce",extra_dip_desc:"2 oz cup — ranch, marinara, garlic butter or BBQ",allergy_tag:"Allergy",reorder_tab:"Order again",reorder_empty:"No past orders yet — your history will show up here.",reorder_repeat:"Repeat",mixmatch_title:"Mix & Match — build your own combo",mixmatch_desc:"Pick any 2 from the list — {p} each.",mixmatch_pick:"Pick 2",mixmatch_add:"Add combo",mixmatch_need:"Pick 2 items to add the combo",tracker_title:"Track your order",tracker_ph:"Order number, e.g. LF-123456",tracker_btn:"Track",tracker_notfound:"Order not found — check the number on your receipt.",tr_prep:"Preparing",tr_oven:"In the oven",tr_way:"On the way",tr_ready:"Ready for pickup",tr_eta:"~{n} min",sec_size:"1. Size",sec_cheese:"4. Cheese",sec_veggies:"5. Veggies",sec_protein:"2. Protein",sec_ingr:"3. Ingredients",sec_dressing:"4. Dressing",multi_hint:"tap to toggle",style:"Style",build_wings:"Build your wings",sec_count:"1. Count",sec_wtype:"2. Style",p_none:"no",cheese_none:"No cheese",edit_item:"Edit",save_item:"Save",promo_ph:"Promo code",promo_apply:"Apply",promo_ok:"Promo applied: -{p}%",promo_bad:"That code didn't work",promo_disc:"Promo discount",upsell_title:"Add to your order?",tagline:"PIZZA • WINGS • SUBS",mixmatch_sub:"Build Your Own Combo",mixmatch_each:"each",trust_d1:"5 Mile Delivery",trust_d2:"$3.99 delivery fee",trust_f1:"Fresh Ingredients",trust_f2:"Great taste, every day",trust_l1:"Local & Independent",trust_l2:"Proudly serving Pittsburgh"},
ru:{pickup:"Самовывоз",delivery:"Доставка",address_ph:"Адрес доставки — улица, квартира",check_zone:"Проверить мою зону",
zone_ok:"Доставим! Стоимость {fee}, ~{eta} мин.",menu_builder:"Конструктор пиццы",menu_pizza:"Пиццы",menu_salads:"Салаты",menu_drinks:"Напитки",menu_desserts:"Десерты",
add:"Добавить",customize:"Собрать",back:"Назад",checkout:"Оформить",your_order:"Ваш заказ",subtotal:"Сумма",tax:"Налог",
delivery_fee:"Доставка",tip:"Чаевые",total:"Итого",time_order:"Заказ ко времени",name:"Имя",name_ph:"Ваше имя",
phone:"Телефон",phone_ph:"+1 (___) ___-____",create_account:"Создать аккаунт на этот телефон",payment:"Оплата",card:"Карта",
cant_pay:"Не могу оплатить сейчас",no_payment_warning:"Мы не можем принять заказ без оплаты. Оплатите сейчас или приезжайте в магазин и подождите, пока мы приготовим ваш заказ.",
no_order_title:"Нет заказа без оплаты",no_order_created:"Заказ не оформлен, оплата не списана.",ok_pay:"Хорошо — оплачу сейчас",
order_confirmed:"Заказ принят!",paid:"Оплачено",sms_note:"Мы пришлём SMS, когда заказ будет готов.",
back_to_menu:"Вернуться в меню",sample_note:"Демо-данные — настоящее меню, цены и фото скоро появятся.",sample_note2:"демо",
stripe_note:"Оплата безопасно обрабатывается Stripe. Мы не видим и не храним номер вашей карты.",processing:"Обработка…",
pickup_eta:"Будет готово ~через 25 мин",delivery_eta:"Привезём ~через {eta} мин",deals:"Горячие предложения",
build_title:"Соберите пиццу",size:"1. Размер",crust:"2. Тесто",sauce:"3. Соус",cheese:"4. Сыр",toppings:"5. Начинки",
your_pizza:"Ваша пицца",add_to_cart:"В корзину",half_hint:"Нажмите на начинку, затем выберите Мало / Норма / Много и Левая / Вся / Правая половина.",
p_light:"Мало",p_normal:"Норма",p_extra:"Много",h_left:"Левая",h_whole:"Вся",h_right:"Правая",
order_again:"Понравилось в прошлый раз?",reorder_btn:"Заказать снова — в 1 тап",
deal_tag:"Пн\u2013Чт",deal1t:"2 пиццы + крылышки",deal1d:"2 большие сырные пиццы, 12 крылышек, газировка 2 л. Понедельник\u2013четверг.",deal2t:"2 пиццы + саб",deal2d:"2 большие сырные пиццы, целый саб, газировка 2 л. Понедельник\u2013четверг.",deal3t:"Большая сырная пицца",deal3d:"Сырная пицца 16\". Понедельник\u2013четверг.",
no_toppings:"Только сыр, спасибо",qty:"Кол-во",
change_city:"Выберите город",city_note:"Скоро появятся и другие города.",
coming_soon:"скоро",new_badge:"НОВИНКА",points_earn:"Этот заказ принесёт",points:"баллов",
reward_hint_title:"Почти получилось!",reward_hint:"Ещё {n} баллов — и {reward} ваша!",great:"Отлично!",
loyal_sample:"Наша программа баллов скоро запустится.",
my_points:"Мои баллы",points_soon:"Наша программа лояльности скоро запустится — баллы за ваши заказы будут вас ждать.",
taxexempt_check:"Заказываю для некоммерческой организации (без налога с продаж)",taxexempt_title:"Некоммерческая организация?",
taxexempt_text:"Если вы некоммерческая организация и не хотите платить налог с продаж — загрузите документ об освобождении.",
taxexempt_upload:"Загрузить документ",taxexempt_sent:"Документ загружен — отправлен на проверку.",
taxexempt_simulate:"Симулировать подтверждение (демо)",taxexempt_approved:"Подтверждено! Налог с продаж за этот заказ не взимается.",taxexempt_line:"БЕЗ НАЛОГА ✓",
allergy_label:"Примечание об аллергии для кухни",allergy_ph:"напр. аллергия на орехи — кухня будет предупреждена",
alg_milk:"молоко",alg_gluten:"глютен",alg_nuts:"орехи",alg_egg:"яйцо",alg_soy:"соя",
paused_title:"Онлайн-заказы временно приостановлены",paused_text:"Позвоните нам или приходите в магазин — с радостью примем заказ.",
out_of_stock:"Нет в наличии",tap_to_add:"Нажмите, чтобы добавить в корзину",
f_hours:"Вт–Сб 8:00–22:00, Вс 10:00–21:00, Пн — выходной",f_addr:"3324 Babcock Blvd, Pittsburgh, PA 15237",
hint_gift:"Добавь ещё на {x} — чесночные палочки в подарок!",hint_dessert:"А десерт не хочешь?",hint_xcheese:"Попробуй экстра-чиз!",
hint_deals:"Глянь наши спешалы недели!",hints_off:"не показывать подсказки",hints_on:"показывать подсказки",
first_order_promo:"Зарегистрируйся и получи скидку {p}% на первый заказ!",first_order_disc:"Скидка за регистрацию",
acct_save:"С аккаунтом этот заказ стоил бы на {x} меньше (скидка {p}%)",
sms_consent:"Согласен получать SMS-рассылки",email_consent:"Согласен получать email-рассылки",
consent_note:"Согласия сохраняются в ваш профиль клиента для будущей базы рассылок. Можно отозвать в любой момент.",menu_subs:"Сабы",menu_appetizers:"Закуски",menu_wings:"Крылышки",menu_chicken:"Курица",menu_stromboli:"Стромболи",menu_rolls:"Роллы",menu_breadsticks:"Хлебные палочки",menu_kids:"Детское меню",menu_breakfast:"Завтраки",min_delivery_warn:"Минимальный заказ для доставки — {m}. Добавь ещё на {x} (для самовывоза минимума нет).",hint_mindel:"Доставка от {m} — добавь ещё на {x}!",tips:"Чаевые",tips_note:"Чаевые необязательны — только по желанию. Команда будет благодарна!",tip_custom:"Своя сумма",tip_custom_ph:"Сумма, напр. 3.50",no_tip:"Без чаевых",kids_title:"Весёлая еда для маленьких чемпионов!",kids_desc:"Маленькие порции — большие улыбки.",menu_extra:"Дополнительно",build_sub:"Собери саб",build_salad:"Собери салат",build_drink:"Выбери напиток",sec_bread:"2. Хлеб",sec_fillings:"3. Начинка",sec_base:"1. Основа",sec_flavor:"2. Вкус",sec_dsize:"1. Размер",your_build:"Ваш набор",free_sauce:"Соус в подарок",free:"в подарок",hint_sauce:"Соус не хочешь добавить?",dip_ranch:"Ранч",dip_marinara:"Маринара",dip_garlic:"Чесночное масло",dip_bbq:"Барбекю",extra_dip_name:"Доп. соус",extra_dip_desc:"Соусник 60 мл — ранч, маринара, чесночный или барбекю",allergy_tag:"Аллергия",reorder_tab:"Закажи снова",reorder_empty:"Прошлых заказов пока нет — история появится здесь.",reorder_repeat:"Повторить",mixmatch_title:"Комбо «Собери сам»",mixmatch_desc:"Выбери любые 2 позиции из списка — {p} за каждую.",mixmatch_pick:"Выбери 2",mixmatch_add:"В корзину",mixmatch_need:"Выбери 2 позиции, чтобы добавить комбо",tracker_title:"Где моя пицца",tracker_ph:"Номер заказа, напр. LF-123456",tracker_btn:"Найти",tracker_notfound:"Заказ не найден — проверь номер в чеке.",tr_prep:"Готовим",tr_oven:"В печи",tr_way:"В пути",tr_ready:"Готов к выдаче",tr_eta:"~{n} мин",sec_size:"1. Размер",sec_cheese:"4. Сыр",sec_veggies:"5. Овощи",sec_protein:"2. Белок",sec_ingr:"3. Ингредиенты",sec_dressing:"4. Заправка",multi_hint:"нажми, чтобы выбрать",style:"Стиль",build_wings:"Собери крылышки",sec_count:"1. Количество",sec_wtype:"2. Вид",p_none:"без",cheese_none:"Без сыра",edit_item:"Изменить",save_item:"Сохранить",promo_ph:"Промокод",promo_apply:"Применить",promo_ok:"Промокод применён: -{p}%",promo_bad:"Такой код не найден",promo_disc:"Скидка по промокоду",upsell_title:"Добавить к заказу?",tagline:"PIZZA • WINGS • SUBS",mixmatch_sub:"Собери своё комбо",mixmatch_each:"за штуку",trust_d1:"Доставка 5 миль",trust_d2:"Доставка $3.99",trust_f1:"Свежие продукты",trust_f2:"Вкусно каждый день",trust_l1:"Местные и независимые",trust_l2:"С гордостью служим Питтсбургу"},
es:{pickup:"Recoger",delivery:"Entrega",address_ph:"Dirección de entrega",check_zone:"Verificar mi zona",
zone_ok:"¡Entregamos! Tarifa {fee}, ~{eta} min.",menu_builder:"Arma tu pizza",menu_pizza:"Pizzas",menu_salads:"Ensaladas",menu_drinks:"Bebidas",menu_desserts:"Postres",
add:"Añadir",customize:"Personalizar",back:"Atrás",checkout:"Pagar",your_order:"Su pedido",subtotal:"Subtotal",tax:"Impuesto",
delivery_fee:"Entrega",tip:"Propina",total:"Total",time_order:"Pedido programado",name:"Nombre",name_ph:"Su nombre",
phone:"Teléfono",phone_ph:"+1 (___) ___-____",create_account:"Crear una cuenta con este teléfono",payment:"Pago",card:"Tarjeta",
cant_pay:"No puedo pagar ahora",no_payment_warning:"No podemos aceptar un pedido sin pago. Pague ahora o venga a la tienda y espere.",
no_order_title:"Sin pago no hay pedido",no_order_created:"No se hizo ningún pedido ni se cobró nada.",ok_pay:"OK — pagaré ahora",
order_confirmed:"¡Pedido confirmado!",paid:"Pagado",sms_note:"Le avisaremos por SMS cuando esté listo.",
back_to_menu:"Volver al menú",sample_note:"Datos de demostración: el menú real llegará pronto.",sample_note2:"demo",
stripe_note:"Pagos procesados por Stripe.",processing:"Procesando…",
pickup_eta:"Listo en ~25 min",delivery_eta:"Llega en ~{eta} min",deals:"Ofertas",
build_title:"Arma tu pizza",size:"1. Tamaño",crust:"2. Masa",sauce:"3. Salsa",cheese:"4. Queso",toppings:"5. Ingredientes",
your_pizza:"Tu pizza",add_to_cart:"Añadir",half_hint:"Toca un ingrediente y elige Poco / Normal / Extra y mitad Izquierda / Entera / Derecha.",
p_light:"Poco",p_normal:"Normal",p_extra:"Extra",h_left:"Izq.",h_whole:"Entera",h_right:"Der.",
order_again:"¿Te gustó la última vez?",reorder_btn:"Pídelo de nuevo — 1 toque",
deal_tag:"Lun\u2013Jue",deal1t:"2 pizzas + alitas",deal1d:"2 pizzas grandes de queso, 12 alitas, refresco 2 l. Lunes a jueves.",deal2t:"2 pizzas + sub",deal2d:"2 pizzas grandes de queso, un sub entero, refresco 2 l. Lunes a jueves.",deal3t:"Pizza grande de queso",deal3d:"Pizza de queso 16\". Lunes a jueves.",
no_toppings:"Solo queso, gracias",qty:"Cant.",
change_city:"Elige tu ciudad",city_note:"Más ciudades próximamente.",
coming_soon:"pronto",new_badge:"NUEVO",points_earn:"Este pedido gana",points:"pts",
reward_hint_title:"¡Casi listo!",reward_hint:"¡Solo {n} puntos más y {reward} es tuya!",great:"¡Genial!",
loyal_sample:"Nuestro programa de puntos llegará pronto.",
my_points:"Mis puntos",points_soon:"Nuestro programa de puntos llegará pronto. Tus puntos te estarán esperando.",
taxexempt_check:"Pido para una organización exenta de impuestos",taxexempt_title:"¿Organización exenta de impuestos?",
taxexempt_text:"Si es una organización sin fines de lucro y no quiere pagar el impuesto sobre las ventas — suba su documento de exención.",
taxexempt_upload:"Subir documento",taxexempt_sent:"Documento subido — enviado para revisión.",
taxexempt_simulate:"Simular aprobación (demo)",taxexempt_approved:"¡Aprobado! Sin impuesto sobre las ventas en este pedido.",taxexempt_line:"EXENTO ✓",
allergy_label:"Nota de alergia para la cocina",allergy_ph:"ej. alergia a frutos secos — se avisará a la cocina",
alg_milk:"leche",alg_gluten:"gluten",alg_nuts:"frutos secos",alg_egg:"huevo",alg_soy:"soja",
paused_title:"Pedidos en línea en pausa temporal",paused_text:"Llámenos o visite la tienda — con gusto tomamos su pedido.",
out_of_stock:"Agotado",tap_to_add:"Toque para añadir",
f_hours:"Mar–Sáb 8:00 AM – 10:00 PM, Dom 10:00 AM – 9:00 PM, Lun cerrado",f_addr:"3324 Babcock Blvd, Pittsburgh, PA 15237",
hint_gift:"¡Añade {x} más y llévate palitos de ajo GRATIS!",hint_dessert:"¿Y un postre?",hint_xcheese:"¡Prueba el queso extra!",
hint_deals:"¡Mira nuestras ofertas de la semana!",hints_off:"no mostrar consejos",hints_on:"mostrar consejos",
first_order_promo:"¡Regístrate y obtén {p}% de descuento en tu primer pedido!",first_order_disc:"Descuento por registro",
acct_save:"Con una cuenta este pedido costaría {x} menos ({p}% de descuento)",
sms_consent:"Acepto recibir mensajes SMS promocionales",email_consent:"Acepto recibir correos promocionales",
consent_note:"Los consentimientos se guardan en tu perfil de cliente para nuestra futura lista de correo. Puedes retirarlos cuando quieras.",menu_subs:"Subs",menu_appetizers:"Aperitivos",menu_wings:"Alitas",menu_chicken:"Pollo",menu_stromboli:"Stromboli",menu_rolls:"Rollos",menu_breadsticks:"Palitos de pan",menu_kids:"Menú infantil",menu_breakfast:"Desayuno",min_delivery_warn:"El pedido mínimo para entrega es {m} — añade {x} más (recoger no tiene mínimo).",hint_mindel:"La entrega es desde {m} — ¡añade {x} más!",tips:"Propina",tips_note:"La propina es opcional — sin presión. ¡Nuestro equipo la agradece!",tip_custom:"Otra",tip_custom_ph:"Cantidad, ej. 3.50",no_tip:"Sin propina",menu_extra:"Extras",build_sub:"Arma tu sub",kids_title:"¡Comida divertida para pequeños campeones!",kids_desc:"Porciones pequeñas, grandes sonrisas.",build_salad:"Arma tu ensalada",build_drink:"Elige tu bebida",sec_bread:"2. Pan",sec_fillings:"3. Relleno",sec_base:"1. Base",sec_flavor:"2. Sabor",sec_dsize:"1. Tamaño",your_build:"Tu creación",free_sauce:"Salsa gratis",free:"gratis",hint_sauce:"¿Quieres añadir una salsa extra?",dip_ranch:"Ranch",dip_marinara:"Marinara",dip_garlic:"Mantequilla de ajo",dip_bbq:"BBQ",extra_dip_name:"Salsa extra",extra_dip_desc:"Vaso 2 oz — ranch, marinara, ajo o BBQ",allergy_tag:"Alergia",reorder_tab:"Pedir de nuevo",reorder_empty:"Aún no hay pedidos anteriores — tu historial aparecerá aquí.",reorder_repeat:"Repetir",mixmatch_title:"Combo «Arma el tuyo»",mixmatch_desc:"Elige 2 de la lista — {p} cada uno.",mixmatch_pick:"Elige 2",mixmatch_add:"Añadir combo",mixmatch_need:"Elige 2 artículos para añadir el combo",tracker_title:"¿Dónde está mi pizza?",tracker_ph:"Número de pedido, ej. LF-123456",tracker_btn:"Rastrear",tracker_notfound:"Pedido no encontrado — revisa el número del recibo.",tr_prep:"Preparando",tr_oven:"En el horno",tr_way:"En camino",tr_ready:"Lista para recoger",tr_eta:"~{n} min",sec_size:"1. Tamaño",sec_cheese:"4. Queso",sec_veggies:"5. Verduras",sec_protein:"2. Proteína",sec_ingr:"3. Ingredientes",sec_dressing:"4. Aderezo",multi_hint:"toca para elegir",style:"Estilo",build_wings:"Arma tus alitas",sec_count:"1. Cantidad",sec_wtype:"2. Estilo",p_none:"sin",cheese_none:"Sin queso",edit_item:"Editar",save_item:"Guardar",promo_ph:"Código promo",promo_apply:"Aplicar",promo_ok:"Promo aplicado: -{p}%",promo_bad:"Ese código no funciona",promo_disc:"Descuento promo",upsell_title:"¿Añadir a tu pedido?",tagline:"PIZZA • WINGS • SUBS",mixmatch_sub:"Arma tu propio combo",mixmatch_each:"c/u",trust_d1:"Entrega 5 millas",trust_d2:"Entrega $3.99",trust_f1:"Ingredientes frescos",trust_f2:"Gran sabor, cada día",trust_l1:"Local e independiente",trust_l2:"Sirviendo a Pittsburgh con orgullo"}
};
let LANG='en';
const t=k=>(T[LANG]&&T[LANG][k])||T.en[k]||k;
/* ICONS: tiny inline SVGs (no emojis in the UI). Add/replace icons here. */
const IC={
 check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E9E5B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="M4 12l5 5L20 6"/></svg>',
 fly:'<svg width="30" height="30" viewBox="0 0 76 76"><path d="M38 8 L66 64 Q38 74 10 64 Z" fill="#F9DC5C" stroke="#141414" stroke-width="4"/><circle cx="40" cy="34" r="5" fill="#B03A2E" stroke="#141414" stroke-width="3"/><circle cx="50" cy="46" r="5" fill="#B03A2E" stroke="#141414" stroke-width="3"/></svg>'
};

/* ================= menu & prices: SINGLE SOURCE in menu-data.js =================
   BUILDER / TOPPING_PRICE / CATS / SIG_SIZES / SUB_SIZES / MENU (and the SZ1
   helper), plus DIPS, the WINGDEF / SUBDEF / SALADDEF / DRINKDEF builder
   configs, TAX_BPS, DELIVERY_FEE, MIN_DELIVERY_TOTAL, DEALS, MIXMATCH and
   PROMOS live in menu-data.js as window.LF_MENU_DATA — the site, the program's
   site copy and the future customer app all read them from that ONE file.
   Edit prices THERE, never here. (index.html loads menu-data.js before app.js;
   when the program host is reachable it swaps in the fresh copy automatically.) */
const {BUILDER, TOPPING_PRICE, CATS, SIG_SIZES, SUB_SIZES, MENU, SZ1, DIPS, FREE_DIP_DEFAULT, EXTRA_DIP_PRICE, WINGDEF, SUBDEF, SALADDEF, DRINKDEF, TAX_BPS, DELIVERY_FEE, MIN_DELIVERY_TOTAL, DEALS, MIXMATCH, PROMOS} = window.LF_MENU_DATA;
function builderSizeKey(){const c=BUILDER.crusts[B.crust];if(!c)return BUILDER.sizes[B.size].id;if(c.id==='sic')return 'sicilian';if(c.id==='gf'||c.id==='cauli')return 'gf';return BUILDER.sizes[B.size].id;}
function toppingPrice(tp){const pr=TOPPING_PRICE[builderSizeKey()]||TOPPING_PRICE.s12;const st=B.tops[tp.id];return (st&&st.h!=='whole')?pr.half:pr.whole;}
const tname=o=>o[LANG]||o.en;
/* IRON RULE: the customer orders in EN/RU/ES, but the cashier/kitchen ALWAYS see English.
   Every cart line and order snapshot carries BOTH name_en (canonical) and name_localized (display). */
function withLang(l,fn){const prev=LANG;try{LANG=l;return fn();}finally{LANG=prev;}}
/* DIPS / FREE_DIP_DEFAULT / EXTRA_DIP_PRICE and the generic builder configs
   (WINGDEF / SUBDEF / SALADDEF / DRINKDEF) live in menu-data.js — single
   source, they arrive via window.LF_MENU_DATA above. Edit them THERE. */
/* ================= ART REGISTRY (replaceable visuals) =================
   Every menu-card illustration goes through artFor(item.art):
   - 'pizza' | 'salad' | ... → drawn comic SVG from illSVG() (placeholders);
   - 'url:assets/my-photo.png' → a real photo <img>.
   To swap ALL art for real photos later: change the art values in MENU above.
   Zero layout-code changes. */
/* Photo assets live in photos-N.js (embedded data URIs); ph() resolves them. */
function ph(f){return PHOTO_DATA[f]||("assets/"+f);}
/* PHOTO placeholders (AI-generated stand-ins — the owner's real photos swap in 1:1
   later by replacing the data URI string in PHOTO_DATA above (same key), zero code changes) */
const ART_PHOTO={
 pizza:PHOTO_DATA['photo-pizza-placeholder.jpg'],
 wings:PHOTO_DATA['photo-wings-placeholder.jpg'],
 sub:PHOTO_DATA['photo-sub-placeholder.jpg']
};
function artFor(a){
  if(a&&a.indexOf('url:')===0)return `<img class="ill photo" src="${a.slice(4)}" alt="" loading="lazy">`;
  const ph=a&&ART_PHOTO[a];if(ph)return `<img class="ill photo" src="${ph}" alt="" loading="lazy">`;
  return illSVG(a||'pizza');
}
/* per-item photo override: set item.photo to a PHOTO_DATA key (embedded data URI above) */
function artForItem(it){
  if(it.photo)return `<img class="ill photo" src="${ph(it.photo)}" alt="" loading="lazy">`;
  return artFor(it.art);
}
const findItem=id=>{for(const c of CATS){const it=(MENU[c.id]||[]).find(x=>x.id===id);if(it)return{cat:c.id,it};}return null;};
const basePrice=it=>Math.min(...it.sizes.map(x=>x.price));
/* TAX_BPS / DELIVERY_FEE / MIN_DELIVERY_TOTAL live in menu-data.js (single source). */
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
/* DEALS (weekday specials with bundle prices) live in menu-data.js (single source). */
const dcontents=x=>x.contents[LANG]||x.contents.en;

/* MIXMATCH (combo price + item list) lives in menu-data.js (single source). */
let mmSel=[];
function renderMixMatch(){
  const box=document.getElementById('mmItems');if(!box)return;box.innerHTML='';
  document.getElementById('mmDesc').textContent=t('mixmatch_desc').replace('{p}',fmt(MIXMATCH.price));
  MIXMATCH.items.forEach(id=>{
    const f=findItem(id);if(!f)return;
    const d=document.createElement('div');d.className='mmitem'+(mmSel.includes(id)?' on':'');
    d.innerHTML=`${artForItem(f.it)}<span class="mmname">${mname(f.it)}</span><span class="mmprice">${fmt(MIXMATCH.price)}</span><button class="mmplus" aria-label="${t('add')}">+</button>`;
    d.onclick=()=>{
      const i=mmSel.indexOf(id);
      if(i>=0)mmSel.splice(i,1);
      else{if(mmSel.length>=2)mmSel.shift();mmSel.push(id);}
      renderMixMatch();};
    box.appendChild(d);});
  document.getElementById('mmTotal').textContent=mmSel.length===2?fmt(MIXMATCH.price*2):t('mixmatch_pick');
  const bp=document.getElementById('mmBurstPrice');if(bp)bp.textContent=fmt(MIXMATCH.price);
  const addBtn=document.getElementById('mmAdd');
  addBtn.innerHTML=mmSel.length===2?`${t('mixmatch_add')} <b>| ${fmt(MIXMATCH.price*2)}</b>`:t('mixmatch_add');
  addBtn.disabled=mmSel.length!==2||isPaused();
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
/* PROMOS (promo codes + discount %) live in menu-data.js (single source). */
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
  const hp=document.getElementById('hPhone');if(hp)hp.textContent=STORE.phone;
  applyPausedBanner();
}
document.querySelectorAll('#lang button').forEach(b=>b.onclick=()=>{LANG=b.dataset.l;applyLang();});

function renderDeals(){
  const d=document.getElementById('deals');d.innerHTML='';
  DEALS.forEach(x=>{const e=document.createElement('div');e.className='deal'+(x.alt?' alt':'');
    e.innerHTML=`<div class="dinfo"><span class="tag">${t('deal_tag')}</span><div class="dtitle">${t(x.t)}</div><p>${t(x.d)}</p><div class="dprice">${fmt(x.price)}</div><button class="dadd">${t('add_to_cart')}</button></div>${x.img?`<img class="dimg" src="${x.img}" alt="" loading="lazy">`:''}`;
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
  d.innerHTML=`${artForItem(it)}<div class="info"><div class="name">${mname(it)}${it.isNew?`<span class="newbadge">${t('new_badge')}</span>`:''}</div><div class="desc">${mdesc(it)}${multi?' • '+it.sizes.map(x=>x.label).join(' / '):''}</div><div class="allg">${alg}</div><div class="price">${fmt(from)}+</div><div class="row"></div></div>`;
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
  renderCart();  /* shows the bar now that the cart is non-empty — before we measure it */
  if(fromEl)flyToCart(fromEl);
  const bar=document.getElementById('bar');bar.style.transform='scale(1.04)';
  setTimeout(()=>bar.style.transform='',150);
}
