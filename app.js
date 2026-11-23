const T={
shu:{n:'Шу пуэр',s:'Мэнхай Гун Тин',c:['#2a1a12','#6b2a14'],taste:'Влажная древесина, кора дерева, грецкий орех, чернослив, шоколад, осенний лес и лёгкие торфяные или землистые ноты.',eff:'Мощно, но мягко бодрит, согревает изнутри, запускает метаболизм и приводит организм в рабочее состояние.',brew:'100°C · 8 г на 100 мл · 10 с, дальше +3 с · 8–12 проливов'},
shen:{n:'Шэн пуэр',s:'Лао Бань Чжан',c:['#5a6a3a','#d6c25a'],taste:'Молодой: яркий, дерзкий, с горчинкой и терпкостью, сухофрукты, яблоки, луговые травы. Выдержанный: мягкий, глубокий, камфора, финики, изюм.',eff:'Молодой даёт сильный импульс и разгоняет сонливость. Выдержанный вызывает медитативное состояние «Ча Ци».',brew:'90–100°C · 6 г на 100 мл · 10 с · 8–12 проливов',
 v:{young:{n:'Шэн пуэр · молодой (до 3–5 лет)',c:['#5f7a3a','#dccb5f'],taste:'Яркий, дерзкий, с заметной горчинкой и терпкостью. Аромат сухофруктов, яблок, луговых трав и свежей древесины.',eff:'Сильный, ясный импульс, разгоняет сонливость.',brew:'90–95°C · 6 г на 100 мл · 8–10 с · 8–10 проливов'},
 old:{n:'Шэн пуэр · выдержанный (от 10 лет)',c:['#3a2a1c','#a0541e'],taste:'Мягкий, глубокий. Вкус уходит в камфору, старое дерево, финики, изюм и чернослив. Горечь сменяется глубокой сладостью.',eff:'Старые шэны вызывают медитативное состояние «Ча Ци»: тело полностью расслабляется, а сознание становится сфокусированным.',brew:'95–100°C · 6 г на 100 мл · 10 с · 8–12 проливов'}}},
dahong:{n:'Тёмный улун',s:'Да Хун Пао',c:['#3a2418','#b5601f'],taste:'Плотный, печёный. Ноты древесного угля, пряностей, тёмного шоколада, кислинка сухофруктов, тропические нотки.',eff:'Глубокое физическое расслабление и ментальная собранность. Состояние абсолютного комфорта и уверенности.',brew:'100°C · 7 г на 100 мл · 10–15 с · 8–10 проливов'},
tgy:{n:'Светлый улун',s:'Те Гуань Инь',c:['#5f8a3a','#d9d77a'],taste:'Яркий, свежий, цветочный. В аромате цветущая сирень, свежая зелень и лёгкие ноты растопленного сливочного масла.',eff:'Даёт ощущение лёгкости.',brew:'95°C · 7 г на 100 мл · 15–20 с · 6–8 проливов'},
white:{n:'Белый чай',s:'Бай Му Дань, Шоу Мэй',c:['#a9a78a','#e8d79a'],taste:'Сладковатые ноты берёзового сока, мёда, полевых трав и цветов. Бай Му Дань более насыщенный, с цветочными оттенками.',eff:'Мягко расслабляет тело, снимает накопившийся стресс.',brew:'90–95°C · 5 г на 100 мл · 15–20 с · 5–6 проливов'},
yellow:{n:'Жёлтый чай',s:'Цзюньшань Иньчжэнь',c:['#a58a3a','#e9c85a'],taste:'Мягкий, без намёка на терпкость или травянистую горечь. Ноты кондитерской выпечки, топлёного молока, сухих цветов и семян подсолнечника.',eff:'Освежает восприятие, создаёт ощущение покоя, мягко стимулирует пищеварение и нервную систему без резкого кофеинового скачка.',brew:'80–85°C · 5 г на 100 мл · 20 с · 4–5 проливов'},
red:{n:'Красный чай',s:'Дянь Хун',c:['#4a2316','#b0391a'],taste:'Согревающий, с нотами ржаного хлеба, тёмного шоколада, сухофруктов и лесного мёда. Дянь Хун даёт бархатистый медовый вкус.',eff:'Мягкое «бархатное» тепло, улучшает кровообращение.',brew:'95°C · 5 г на 100 мл · 10–15 с · 6–8 проливов'},
gaba:{n:'Габа улун',s:'Габа Алишань',c:['#5a3a26','#c9742a'],taste:'Уникальный кислинко-сладкий профиль. Напоминает печёные яблоки с лёгкой пряной или карамельной ноткой, ягоды, фрукты.',eff:'Одновременно расслабляет тело и концентрирует мозг без сонливости. Снимает тревогу, стресс и помогает сфокусироваться на сложных задачах.',brew:'95°C · 7 г на 100 мл · 15 с · 7–9 проливов'},
green:{n:'Зелёный чай',s:'Лун Цзин (Колодец Дракона)',c:['#3f7a3a','#cfe07a'],taste:'Травянистый, освежающий, нежный, с нотами луговых цветов, ореха или тыквенных семечек. Маслянистый, сладко-ореховый вкус.',eff:'Мощно тонизирует за счёт высокого содержания теина (чайного кофеина).',brew:'80°C · 4 г на 100 мл · 20–30 с · 3–4 пролива'}
};

const M={shu:['rel dens','Юньнань, уезд Мэнхай. Технологию ускоренной ферментации шу пуэра освоили в 1970-х.','Гайвань или исинский чайник',[10,3]],
shen:['bod foc dens','Юньнань, деревня Лао Бань Чжан в районе Мэнхай. Старые шэны выдерживают десятилетиями.','Гайвань или фарфоровый чайник',[10,3]],
dahong:['rel foc dens','Горы Уишань, Фуцзянь. Да Хун Пао («Большой красный халат») славится древними материнскими кустами.','Гайвань или исинский чайник',[12,3]],
tgy:['soft','Уезд Аньси, Фуцзянь. Классический светлый улун, который часто скручивают в шарики.','Гайвань или фарфоровый чайник',[18,4]],
white:['rel soft','Фудин и Чжэнхэ, Фуцзянь. Листья только вянут и сушатся, без скручивания.','Гайвань, стеклянный или обычный чайник',[18,4]],
yellow:['soft rel','Остров Цзюньшань на озере Дунтин, Хунань. Один из самых редких видов китайского чая.','Стеклянный стакан или гайвань',[20,5]],
red:['','Юньнань (Дянь Хун) и горы Уишань (Чжэн Шань Сяо Чжун, один из древнейших красных чаёв).','Фарфоровый или стеклянный чайник',[12,3]],
gaba:['rel foc','Тайвань, Алишань. Метод обработки с ГАМК (GABA) разработали в Японии в 1980-х.','Гайвань или исинский чайник',[15,3]],
green:['bod soft','Ханчжоу, Чжэцзян, окрестности озера Сиху. Один из самых известных зелёных чаёв Китая.','Стеклянный стакан или гайвань',[25,5]],
liubao:['dens','Уезд Цанъу, Гуанси. Тёмный чай, который традиционно выдерживают в корзинах.','Глиняный или исинский чайник',[10,3]],
laobai:['rel','Фудин, Фуцзянь. Белый чай, выдержанный несколько лет, поэтому вкус глубже и сладже.','Чайник из глины или стекла, гайвань',[12,3]]};
T.liubao={n:'Тёмный чай Лю Бао',s:'Лю Бао из Гуанси',c:['#241810','#7a2e12'],taste:'Старая древесина, влажный погреб, сушёные травы, земля и глубокая сладость.',eff:'Согревает, мягко расслабляет, успокаивает.',brew:'100°C · 8 г на 100 мл · 10 с · 8–10 проливов'};
T.laobai={n:'Лао Бай Ча',s:'Выдержанный белый чай',c:['#7a6a4a','#c98a2a'],taste:'Мёд, сухофрукты, финики и сушёные травы. Мягкий и глубокий вкус.',eff:'Мягко согревает и расслабляет.',brew:'95–100°C · 6 г на 100 мл · 10–15 с · 8–10 проливов'};
Object.keys(M).forEach(k=>{const m=M[k];Object.assign(T[k],{g:m[0],reg:m[1],dish:m[2],tm:m[3]})});
const EX={'Расслабление':'liubao:2,laobai:2','Уют и согрев':'liubao:3,laobai:1','Отдых после дня':'liubao:2,laobai:2','Вечером':'liubao:2,laobai:1','Холодно, хочется согреться':'liubao:3,laobai:2','Мягкий, без кофеинового скачка':'liubao:2,laobai:2','Плотный':'liubao:3,laobai:1','Гурман':'liubao:2,laobai:2','Древесные и землистые':'liubao:3,laobai:1','Сладкие и медовые':'laobai:3','Влажная древесина, кора':'liubao:3','Торфяные, землистые ноты':'liubao:3','Камфора, финики, изюм':'liubao:2,laobai:2','Лесной мёд':'laobai:2','Густая, маслянистая':'liubao:2','Бархатистая и обволакивающая':'laobai:2,liubao:1','Дымный и пряный':'liubao:2','Выдержанный':'liubao:3,laobai:3','Очень плотный':'liubao:3','Совсем не люблю':'liubao:1,laobai:1','Сытый':'liubao:3','Голодный':'laobai:2','Чайник':'liubao:2,laobai:2'};
const sc=o=>o[1]+(EX[o[0]]?(o[1]?',':'')+EX[o[0]]:'');
const H=['От этого зависит, какой чай по эффекту нам подойдёт.','Для работы нужен ясный ум, для отдыха мягкость.','Вечером лучше чай мягче и без сильного заряда.','Холодом тянет к тёплым чаям, жарой к свежим.','Теин в разных чаях действует по-разному.','Плотный чай раскрывается ярче, нежный деликатнее.','От опыта зависит, сколько терпкости и сложности подойдёт.','Выберите ближайшую группу вкусов, дальше уточним.','Выберите то, что вам кажется самым привлекательным.','Текстура влияет на ощущение чая во рту.','Аромат часто говорит о способе обработки листа.','Кислинка есть у габа улуна и некоторых выдержанных чаёв.','Горчинка бывает у молодых шэнов и зелёных чаёв.','Выдержанные чаи мягче, свежие ярче.','Голодному лучше мягкие чаи, после еды подойдут плотные.','От способа заваривания зависит, какой чай раскроется лучше.'];

const B=(t,g,lo,hi,p)=>t+'°C · '+g+' г на 100 мл · '+lo+'–'+hi+' с, дальше +'+p+' с';
const Y=(k,tm,b)=>Object.assign(T[k],{tm:tm,brew:b});
T.shu.v={young:{n:'Шу пуэр · молодой',c:['#2a1a12','#6b2a14'],taste:T.shu.taste,eff:T.shu.eff,brew:B(100,5,5,8,2),tm:[5,8,2]},
 old:{n:'Шу пуэр · выдержанный',c:['#1c120c','#4a1a0c'],taste:'Глубокий и бархатистый, с выраженными нотами старого дерева, прелой осенней листвы, вяленого чернослива, тёмного горького шоколада и сухофруктов. Переходит в мягкое сладковатое послевкусие с тонами грецкого ореха.',eff:'Дарит глубокое состояние собранности и ясности ума («чайное состояние»), мягко, но уверенно тонизирует без суеты, гармонизирует эмоциональный фон, отлично согревает в холодную погоду и мягко запускает пищеварение.',brew:B(100,6,10,15,8),tm:[10,15,8]}};
T.shu.taste='Молодой: '+T.shu.v.young.taste+' Выдержанный: глубокий, с нотами старого дерева, прелой листвы и вяленого чернослива.';
T.shen.v.young.g='bod foc dens';T.shen.v.old.g='foc dens';T.shu.v.young.g='bod dens';T.shu.v.old.g='rel dens';T.shen.v.young.brew=B(95,5,2,5,2);T.shen.v.young.tm=[2,5,2];T.shen.v.old.brew=B(95,5,4,7,2);T.shen.v.old.tm=[4,7,2];
Y('shu',[5,8,2],T.shu.v.young.brew);Y('shen',[2,5,2],T.shen.v.young.brew);
Y('dahong',[3,6,2],B(90,5,3,6,2));Y('tgy',[4,6,3],B(90,5,4,6,3));Y('white',[2,5,2],B(80,5,2,5,2));Y('yellow',[2,5,2],B(85,5,2,5,2));Y('red',[3,6,2],B(95,5,3,6,2));Y('green',[2,3,1],B(80,5,2,3,1));
Y('liubao',[5,8,2],B(95,5,5,8,2));Y('gaba',[15,15,3],'95°C · 7 г на 100 мл · 15 с, дальше +3 с');Y('laobai',[10,15,3],'95–100°C · 6 г на 100 мл · 10–15 с, дальше +3 с');
Object.assign(T.liubao,{n:'Хэй Ча Лю Бао',s:'Чёрный (тёмный) чай, Гуанси',taste:'Специфический и объёмный, с доминирующими нотами «подвальной» сырости (Бин У), старого дерева, мха, лёгкой ментоловой свежести и орехов. Характерное мягкое и гладкое тело.',eff:'Глубоко заземляет и расслабляет тело, сохраняя разум чистым и сфокусированным, нормализует работу желудка после жирной пищи и дарит ощущение спокойствия.'});
// Фото сухого чая: ключ чая -> ссылка. Если ссылки нет или она не открылась, показывается рисунок.
// Ключи: shu, shen, dahong, tgy, white, yellow, red, gaba, green, liubao, laobai
const ZH={shu:'熟普洱',shen:'生普洱',dahong:'大红袍',tgy:'铁观音',white:'白茶',yellow:'黄茶',red:'红茶',gaba:'佳叶龙',green:'龙井',liubao:'六堡',laobai:'老白茶'};
const WM=f=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(f)+'?width=600';
const DRY={
 shu_young:'img/shu.jpg',shen_young:'img/shen.jpg',tgy:'img/tgy.jpg',red:'img/red.jpg',dahong:'img/dahong.jpg',gaba:'img/gaba.jpg',
 green:WM('Zhu-Ye-Qing-Tea-03.jpg'),
 yellow:WM('Huoshan_Huangya_tea_leaves_close.jpg'),
 white:'https://www.curioustea.com/wp-content/uploads/2018/11/China-Fudign-Fujian-Bai-Mu-Dan-White-Peony-King-White-Tea-1.jpg',
 liubao:'https://www.curioustea.com/wp-content/uploads/2021/02/China-Guangxi-Province-Cangwu-Liu-Bao-Ye-Sheng-Hei-Cha-Wild-Dark-Tea-1.jpg',
 laobai:'https://www.curioustea.com/wp-content/uploads/2025/06/China-Fujian-Fuding-Bai-Mu-Dan-Aged-White-Peony-Tea-Cake-1.jpg'
};
const O=(a,b,c)=>[a,b,c];
const Q=[
{t:'Какое состояние вы хотите от чая?',o:[O('Расслабление','shu:2,gaba:3,white:2,red:1,dahong:1'),O('Медитация и фокус','shen:2,dahong:2,gaba:2,tgy:1'),O('Бодрость и тонус','green:3,shen:3,shu:1,tgy:1'),O('Уют и согрев','red:3,shu:3,dahong:2'),O('Лёгкость и покой','yellow:3,tgy:3,white:2,green:1'),O('Снять тревогу и стресс','gaba:3,white:2,yellow:1')]},
{t:'Чем вы будете заниматься с чаем?',o:[O('Работа или учёба','gaba:2,shen:2,green:2,dahong:1'),O('Творчество','tgy:2,dahong:1,yellow:2,gaba:1'),O('Отдых после дня','shu:2,red:2,white:2,gaba:1'),O('Беседа с друзьями','red:2,tgy:2,dahong:1,white:1'),O('Чайная медитация','shen:3,shu:1,dahong:2')]},
{t:'Когда вы будете пить чай?',o:[O('Утром','green:2,shen:2,red:1,yellow:1'),O('Днём','tgy:2,dahong:1,white:1,yellow:1,shen:1'),O('Вечером','shu:2,gaba:2,red:1,white:1')]},
{t:'Какая погода или сезон?',o:[O('Холодно, хочется согреться','red:3,shu:3,dahong:2'),O('Жарко, хочется освежиться','green:3,white:2,tgy:2,yellow:1'),O('Нейтральная','tgy:1,gaba:1,dahong:1,yellow:1')]},
{t:'Какой заряд бодрости нужен?',o:[O('Сильный, чтобы взбодриться','green:3,shen:3,shu:1'),O('Умеренный','tgy:2,red:2,dahong:2,gaba:1'),O('Мягкий, без кофеинового скачка','yellow:3,white:2,gaba:2,shu:1')]},
{t:'Насколько насыщенным должен быть вкус?',sl:1,o:[O('Очень нежный','white:2,yellow:3,green:1'),O('Нежный','white:2,yellow:2,tgy:2,green:1'),O('Средний','red:2,gaba:2,tgy:1,green:1,white:1'),O('Плотный','shu:2,dahong:2,red:1,shen:1'),O('Очень плотный','shu:3,dahong:3,shen:1')]},
{t:'Какой у вас опыт с чаем?',o:[O('Новичок','white:2,red:2,tgy:2,green:1'),O('Любитель','dahong:1,gaba:1,yellow:1,shu:1'),O('Гурман','shen:2,dahong:2,gaba:1,yellow:1')]},
{t:'Какие вкусы вам ближе?',o:[O('Цветочные и свежие','tgy:3,white:1','fl'),O('Сладкие и медовые','red:2,white:2,yellow:2,gaba:2','sw'),O('Древесные и землистые','shu:3,shen:1','ea'),O('Ореховые и жареные','dahong:3,green:1,yellow:1','nu'),O('Травяные','green:3,shen:2','he')]},
{t:'Уточним вкус',sub:{
 fl:[O('Сирень и цветы','tgy:3'),O('Сливочное масло','tgy:2,yellow:1'),O('Свежая зелень','tgy:1,green:1'),O('Полевые цветы и травы','white:2')],
 sw:[O('Лесной мёд','red:3,white:1'),O('Печёные яблоки и ягоды','gaba:3'),O('Ржаной хлеб, тёмный шоколад','red:2'),O('Топлёное молоко и выпечка','yellow:3'),O('Берёзовый сок, дыня','white:3')],
 ea:[O('Влажная древесина, кора','shu:3'),O('Чернослив и шоколад','shu:2'),O('Грецкий орех, осенний лес','shu:2,dahong:1'),O('Торфяные, землистые ноты','shu:3'),O('Камфора, финики, изюм','shen:3')],
 nu:[O('Древесный уголь и пряности','dahong:3'),O('Тёмный шоколад, сухофрукты','dahong:2,red:1'),O('Семена подсолнечника','yellow:2'),O('Тыквенные семечки','green:3')],
 he:[O('Луговые травы','green:2,shen:1'),O('Яблоки и сухофрукты','shen:3'),O('Свежая древесина','shen:2'),O('Маслянисто-сладкий, ореховый','green:3')]}},
{t:'Какая текстура вам нравится?',o:[O('Густая, маслянистая','shu:2,green:1,yellow:1,dahong:1'),O('Лёгкая и прозрачная','white:2,tgy:2,green:1'),O('Бархатистая и обволакивающая','red:3,gaba:1,shu:1')]},
{t:'Какой аромат и оттенок вам ближе?',o:[O('Свежий и зелёный','green:2,tgy:2,shen:1'),O('Тёплый и печёный','dahong:3,red:1,yellow:1'),O('Сладкий и фруктовый','gaba:3,red:1,white:1'),O('Дымный и пряный','dahong:2,shu:1,red:1')]},
{t:'Нравится ли кислинка во вкусе?',o:[O('Да, люблю','gaba:3,dahong:1,shen:1'),O('Немного','red:1,tgy:1,dahong:1'),O('Нет','yellow:2,shu:2,white:1')]},
{t:'Как вы относитесь к горчинке и терпкости?',sl:1,o:[O('Совсем не люблю','yellow:2,white:2,shu:1,red:1,gaba:1'),O('Чуть-чуть','green:1,tgy:1,red:1,white:1'),O('Умеренно','tgy:1,dahong:1,green:1,gaba:1'),O('Люблю','shen:2,dahong:1,green:1'),O('Чем терпче, тем лучше','shen:3,dahong:1,green:1')]},
{t:'Что вы выберете: свежий чай или выдержанный?',o:[O('Свежий','green:2,tgy:2,white:1,yellow:1'),O('Выдержанный','shen:2,shu:2,dahong:1'),O('Без разницы','red:1,gaba:1')]},
{t:'Вы сейчас голодны или сыты?',o:[O('Голодный','red:2,yellow:2,white:2,gaba:1,shu:1'),O('Сытый','shu:2,shen:2,dahong:2,green:1')]},
{t:'Как вы будете заваривать?',o:[O('Гайвань, много коротких проливов','shen:2,dahong:2,shu:1,tgy:1'),O('Чайник','red:2,white:1,shu:1'),O('Одна кружка, быстро','green:1,red:1,white:1')]}
];
const st=document.getElementById('stage'),bar=document.getElementById('bar'),cnt=document.getElementById('cnt'),back=document.getElementById('back'),clar=document.getElementById('clar');
let iv=null,bgIv=null,CQ='',CF='all',FAV=new Set();try{FAV=new Set(JSON.parse(localStorage.getItem('fav')||'[]'))}catch(e){}
let A=[],fam='',sv=null,mode='home',prev=[0,0,0,0,0],curBg='',bgOn=0;
const parse=s=>s?s.split(',').map(x=>{const p=x.split(':');return [p[0],+p[1]]}):[];
const px=u=>'https://wsrv.nl/?url='+encodeURIComponent(u)+'&w=700&q=80&output=jpg';
const TY={shu:'cake',shen:'cake',laobai:'cake',tgy:'ball',gaba:'ball',dahong:'strip',liubao:'strip',white:'needle',yellow:'needle',red:'needle',green:'flat'};
const PR={shu_young:[2,1,1,4,3],shu_old:[3,1,1,5,3],shen_young:[2,4,3,3,5],shen_old:[4,2,1,4,3],dahong:[3,2,2,4,3],tgy:[2,1,5,2,2],white:[4,1,3,1,1],yellow:[4,1,2,2,2],red:[4,1,1,3,3],gaba:[4,1,2,3,2],green:[2,3,3,2,5],liubao:[2,1,1,4,2],laobai:[5,1,1,3,2]};
const AX=['Сладость','Горчинка','Цветы','Плотность','Бодрость'];
const prof=(k,v)=>PR[v?k+'_'+v:k]||PR[k]||[0,0,0,0,0];
const BGK=['shu','tgy','dahong','red','gaba','shen'];
function swap(fn){clearInterval(iv);fn();window.scrollTo(0,0)}
function photo(k,v){const u=DRY[v?k+'_'+v:k]||DRY[k];return u?(/^http/.test(u)?px(u):u):''}
function setBg(u){if(!u||u===curBg)return;curBg=u;const a=document.getElementById('bga'),b=document.getElementById('bgb'),n=bgOn?a:b,o=bgOn?b:a;n.style.backgroundImage='url("'+u+'")';n.classList.add('on');o.classList.remove('on');bgOn=1-bgOn}
function bgRotate(){clearInterval(bgIv);let i=0;const f=()=>{const k=BGK[i++%BGK.length];setBg(photo(k,T[k].v?'young':''))};f();bgIv=setInterval(f,7000)}
function leaderBg(k){clearInterval(bgIv);setBg(photo(k,T[k].v?'young':''))}
/* ---------- рисунки-заглушки ---------- */
function dry(c,sd,ty){ty=ty||'cake';let s=sd,r=()=>(s=(s*9301+49297)%233280)/233280,h='',i,L=a=>'rgba(255,255,255,'+a+')',D=a=>'rgba(0,0,0,'+a+')',f=n=>n.toFixed(1);
 if(ty==='cake'){for(i=0;i<90;i++){const a=r()*6.283,d=Math.sqrt(r())*76,x=100+Math.cos(a)*d,y=100+Math.sin(a)*d;h+='<ellipse cx="'+f(x)+'" cy="'+f(y)+'" rx="'+f(3+r()*5)+'" ry="1.5" fill="'+(r()>.5?L(.12+r()*.2):D(.15+r()*.25))+'" transform="rotate('+(r()*180|0)+' '+f(x)+' '+f(y)+')"/>'}
  h='<circle cx="100" cy="100" r="78" fill="'+c+'"/><circle cx="100" cy="100" r="78" fill="url(#g'+sd+')"/>'+h+'<circle cx="100" cy="100" r="78" fill="none" stroke="'+L(.25)+'" stroke-width="2"/><circle cx="100" cy="100" r="12" fill="'+D(.4)+'"/><circle cx="100" cy="100" r="12" fill="none" stroke="'+L(.2)+'"/>'}
 else if(ty==='ball'){h='<ellipse cx="100" cy="132" rx="82" ry="34" fill="#f1ede4"/><ellipse cx="100" cy="124" rx="74" ry="26" fill="#d9d4c8"/>';
  for(i=0;i<34;i++){const a=r()*6.283,d=Math.sqrt(r()),x=100+Math.cos(a)*d*64,y=104+Math.sin(a)*d*34-(1-d)*10,q=9+r()*8;h+='<circle cx="'+f(x)+'" cy="'+f(y)+'" r="'+f(q)+'" fill="'+c+'"/><circle cx="'+f(x)+'" cy="'+f(y)+'" r="'+f(q)+'" fill="url(#g'+sd+')"/><path d="M'+f(x-q*.5)+' '+f(y)+'q'+f(q*.4)+' '+f(-q*.5)+' '+f(q)+' 0" stroke="'+D(.3)+'" fill="none" stroke-width="1.2"/>'}}
 else if(ty==='strip'){for(i=0;i<46;i++){const x=34+r()*132,y=44+r()*112,dx=(r()-.5)*70,dy=(r()-.5)*40,w=4+r()*4;h+='<path d="M'+f(x)+' '+f(y)+'q'+f(dx*.6)+' '+f(-18+r()*36)+' '+f(dx)+' '+f(dy)+'" stroke="'+c+'" stroke-width="'+f(w)+'" stroke-linecap="round" fill="none"/><path d="M'+f(x)+' '+f(y)+'q'+f(dx*.6)+' '+f(-18+r()*36)+' '+f(dx)+' '+f(dy)+'" stroke="'+(r()>.5?L(.18):D(.3))+'" stroke-width="'+f(w*.45)+'" stroke-linecap="round" fill="none"/>'}}
 else if(ty==='needle'){for(i=0;i<52;i++){const x=40+r()*120,y=50+r()*100,a=r()*3.14,l=22+r()*26,x2=x+Math.cos(a)*l,y2=y+Math.sin(a)*l;h+='<path d="M'+f(x)+' '+f(y)+'Q'+f((x+x2)/2+(r()-.5)*10)+' '+f((y+y2)/2+(r()-.5)*10)+' '+f(x2)+' '+f(y2)+'" stroke="'+c+'" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="'+f(x2)+'" cy="'+f(y2)+'" r="1.9" fill="'+L(.55)+'"/>'}}
 else{for(i=0;i<34;i++){const x=34+r()*132,y=40+r()*120,a=r()*180|0,rx=13+r()*8;h+='<g transform="rotate('+a+' '+f(x)+' '+f(y)+')"><ellipse cx="'+f(x)+'" cy="'+f(y)+'" rx="'+f(rx)+'" ry="5.5" fill="'+c+'"/><ellipse cx="'+f(x)+'" cy="'+f(y)+'" rx="'+f(rx)+'" ry="5.5" fill="'+(r()>.5?L(.16):D(.25))+'"/><path d="M'+f(x-rx)+' '+f(y)+'H'+f(x+rx)+'" stroke="'+D(.3)+'" stroke-width=".8"/></g>'}}
 return '<svg viewBox="0 0 200 200" role="img" aria-label="Сухой чай"><defs><radialGradient id="g'+sd+'" cx=".38" cy=".32"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient><radialGradient id="b'+sd+'" cx=".5" cy=".4"><stop offset="0" stop-color="'+c+'" stop-opacity=".5"/><stop offset="1" stop-color="#0b1210"/></radialGradient></defs><rect width="200" height="200" fill="url(#b'+sd+')"/><ellipse cx="100" cy="178" rx="62" ry="7" fill="'+D(.4)+'"/>'+h+'</svg>'}
function cup(l){return '<svg viewBox="0 0 200 200" role="img" aria-label="Заваренный чай"><defs><radialGradient id="cb" cx=".5" cy=".5"><stop offset="0" stop-color="'+l+'" stop-opacity=".28"/><stop offset="1" stop-color="#0b1210"/></radialGradient></defs><rect width="200" height="200" fill="url(#cb)"/><ellipse cx="100" cy="170" rx="70" ry="9" fill="rgba(0,0,0,.4)"/><path d="M30 100Q26 122 40 126" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="5"/><path d="M40 84H160C160 138 136 164 100 164C64 164 40 138 40 84Z" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.55)" stroke-width="2"/><path class="liq" d="M46 96H154C152 134 132 156 100 156C68 156 48 134 46 96Z" fill="'+l+'" opacity=".92"/><ellipse class="rim" cx="100" cy="84" rx="60" ry="10" fill="'+l+'" stroke="rgba(255,255,255,.6)" stroke-width="2"/><g class="steam" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M80 66C70 54 90 46 80 32"/><path d="M104 66C94 52 114 44 104 28"/><path d="M128 66C118 54 138 46 128 34"/></g></svg>'}
function fb(el){if(!el.dataset.t&&el.dataset.u){el.dataset.t=1;el.src=el.dataset.u}else el.outerHTML=dry(el.dataset.c,+el.dataset.s,el.dataset.y)}
function imgs(k,c,i,v){const u=DRY[v?k+'_'+v:k]||DRY[k],p=u&&/^http/.test(u);
 return '<div class="imgs"><figure>'+(u?'<img src="'+(p?px(u):u)+'"'+(p?' data-u="'+u+'"':'')+' alt="Сухой чай" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-c="'+c[0]+'" data-s="'+(i*7+3)+'" data-y="'+TY[k]+'" onerror="fb(this)">':dry(c[0],i*7+3,TY[k]))+'<figcaption>Сухой чай</figcaption></figure><figure>'+cup(c[1])+'<figcaption>Заваренный</figcaption></figure></div>'}
function chips(ks){return '<div class="strip">'+ks.map(k=>'<div class="chip">'+dry(T[k].c[0],Object.keys(T).indexOf(k)*7+3,TY[k])+T[k].n+'</div>').join('')+'</div>'}
/* ---------- профиль вкуса ---------- */
const pts=v=>v.map((x,i)=>{const a=(-90+i*72)*Math.PI/180,r=78*x/5;return (120+Math.cos(a)*r).toFixed(1)+','+(120+Math.sin(a)*r).toFixed(1)}).join(' ');
function radar(id,v,col){let g='',i;for(i=1;i<=5;i++)g+='<polygon points="'+pts([i,i,i,i,i])+'" fill="none" stroke="rgba(255,255,255,'+(i==5?.28:.12)+')"/>';
 for(i=0;i<5;i++){const a=(-90+i*72)*Math.PI/180;g+='<line x1="120" y1="120" x2="'+(120+Math.cos(a)*78).toFixed(1)+'" y2="'+(120+Math.sin(a)*78).toFixed(1)+'" stroke="rgba(255,255,255,.12)"/><text x="'+(120+Math.cos(a)*100).toFixed(1)+'" y="'+(124+Math.sin(a)*100).toFixed(1)+'" text-anchor="middle">'+AX[i]+'</text>'}
 return '<svg class="radar" viewBox="0 0 240 240" role="img" aria-label="Профиль вкуса">'+g+'<polygon id="'+id+'" points="'+pts(v.map(()=>0))+'" fill="'+col+'" fill-opacity=".38" stroke="'+col+'" stroke-width="2.2" stroke-linejoin="round"/></svg>'}
function tween(id,from,to){const el=document.getElementById(id);if(!el)return;if(typeof requestAnimationFrame==='undefined'){el.setAttribute('points',pts(to));return}const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/600),e=1-Math.pow(1-p,3);el.setAttribute('points',pts(from.map((a,i)=>a+(to[i]-a)*e)));if(p<1)requestAnimationFrame(f)})(t0)}
/* ---------- общие блоки ---------- */
function fav(k){return '<button class="fav" data-k="'+k+'" aria-label="В избранное">'+(FAV.has(k)?'♥':'♡')+'</button>'}
function body(d,k){const t=T[k],r=(a,b)=>'<div class="row"><span class="k">'+a+'</span><br>'+b+'</div>';return r('Вкус',d.taste)+r('Эффект',d.eff)+r('Заваривание',d.brew)+r('Посуда',t.dish)+r('Откуда',t.reg)}
function initTimer(tm){const tt=document.getElementById('tt'),tp=document.getElementById('tp'),tb=document.getElementById('tb');if(!tt)return;let n=1,left=0;
 const f=x=>Math.floor(x/60)+':'+String(x%60).padStart(2,'0'),len=()=>tm[1]+(n-1)*tm[2];
 tt.textContent=f(len());tp.textContent='Пролив 1';
 tb.onclick=()=>{clearInterval(iv);if(tb.dataset.s==='done'){n++}tp.textContent='Пролив '+n;left=len();tt.textContent=f(left);tb.textContent='Идёт отсчёт, нажмите для перезапуска';tb.dataset.s='run';
  iv=setInterval(()=>{left--;tt.textContent=f(Math.max(left,0));if(left<=0){clearInterval(iv);tb.textContent='Слили. Следующий пролив';tb.dataset.s='done';tp.textContent='Пролив '+n+' готов, сливайте';try{navigator.vibrate&&navigator.vibrate(300)}catch(e){}}},1000)}}
function setTop(b,c,p){back.hidden=!b;cnt.textContent=c;bar.style.width=p+'%';st.className=mode==='cat'?'cat':''}
/* ---------- старт ---------- */
function start(){mode='home';A=[];fam='';sv=null;prev=[0,0,0,0,0];setTop(0,'',0);bgRotate();
 const O6=[[2,4,44],[46,0,38],[72,26,30],[8,52,36],[44,54,42],[76,62,24]];
 st.innerHTML='<section class="hero2"><div class="hl"><div class="eyebrow">Чайная подборка</div><h1>Какой чай<br>ваш?</h1><p class="lead-p">Ответьте на '+Q.length+' вопросов о состоянии, вкусе и привычках. Мы назовём один чай из каталога, покажем его сухим и в чашке и расскажем, как заваривать.</p><div class="cta"><button class="go" id="s">Пройти тест</button><button class="go sec g" id="c">Посмотреть все чаи</button></div><div class="facts"><span><b>'+Object.keys(T).length+'</b> видов чая</span><span><b>'+Q.length+'</b> вопросов</span><span><b>1</b> точный ответ</span></div></div><div class="orbs">'+BGK.map((k,i)=>'<button class="orb" data-k="'+k+'" aria-label="'+T[k].n+'" style="left:'+O6[i][0]+'%;top:'+O6[i][1]+'%;width:'+O6[i][2]+'%;--d:'+(-i*1.3)+'s;background-image:url(\''+photo(k,T[k].v?'young':'')+'\')"><span>'+T[k].n+'</span></button>').join('')+'</div></section><div class="how"><div class="g"><b>1</b>Отвечаете на вопросы и двигаете ползунки вкуса</div><div class="g"><b>2</b>Мы сверяем ответы со всеми чаями каталога</div><div class="g"><b>3</b>Получаете чай, профиль вкуса и заваривание по таймеру</div></div>';
 document.getElementById('s').onclick=()=>swap(show);document.getElementById('c').onclick=()=>swap(catalog)}
/* ---------- каталог ---------- */
function catalog(){mode='cat';setTop(1,'Каталог',0);bgRotate();
 const FL=[['all','Все'],['fav','Избранное'],['bod','Бодрят'],['rel','Расслабляют'],['foc','Для фокуса'],['soft','Нежные'],['dens','Плотные']];
 st.innerHTML='<h2>Все чаи</h2><input class="search g" id="q" type="search" placeholder="Найти чай: название, вкус, регион" autocomplete="off" aria-label="Поиск чая"><div class="strip fl">'+FL.map(f=>'<button class="pill g'+(CF===f[0]?' on':'')+'" data-f="'+f[0]+'">'+f[1]+'</button>').join('')+'</div><div class="cgrid" id="list"></div><button class="go" id="t">Пройти тест</button>';
 document.getElementById('q').value=CQ;document.getElementById('t').onclick=()=>swap(show);renderList()}
function renderList(){const ws=CQ.toLowerCase().split(/\s+/).filter(Boolean),list=[];
 Object.keys(T).forEach(k=>{const t=T[k];(t.v?[['young',t.v.young],['old',t.v.old]]:[['',t]]).forEach(([vk,d])=>{const g=d.g!==undefined?d.g:t.g;if(CF==='fav'?!FAV.has(k):(CF!=='all'&&!g.includes(CF)))return;
  const hay=(d.n+' '+t.s+' '+d.taste+' '+d.eff+' '+t.reg+' '+t.dish+' '+ZH[k]).toLowerCase();if(ws.every(w=>hay.includes(w)))list.push([k,d,vk])})});
 let h=list.length?'':'<p class="mute">Ничего не найдено. Измените запрос или фильтр.</p>';
 list.forEach((x,i)=>{const d=x[1],k=x[0],c=d.c||T[k].c;h+='<section class="card g"><div class="zh" aria-hidden="true">'+ZH[k]+'</div><div class="hd"><h3>'+d.n+'</h3>'+fav(k)+'</div><div class="sub">'+T[k].s+'</div>'+imgs(k,c,i,x[2])+'<div class="rdw"><div class="k">Профиль вкуса</div>'+radar('r'+i,prof(k,x[2]),c[1])+'</div>'+body(d,k)+'</section>'});
 const L=document.getElementById('list');L.innerHTML=h;list.forEach((x,i)=>tween('r'+i,[0,0,0,0,0],prof(x[0],x[2])))}
/* ---------- вопросы ---------- */
function calc(){const s={},m={},ks=Object.keys(T);ks.forEach(k=>{s[k]=0;m[k]=0});
 A.forEach(a=>parse(sc(a)).forEach(([k,v])=>s[k]+=v));
 Q.forEach(q=>{const opts=q.sub?(q.sub[fam]||[].concat(...Object.values(q.sub))):q.o;ks.forEach(k=>{let b=0;opts.forEach(o=>parse(sc(o)).forEach(([kk,v])=>{if(kk===k&&v>b)b=v}));m[k]+=b})});
 return ks.map(k=>[k,s[k],Math.min(99,Math.round(s[k]/Math.max(m[k],1)*100))]).sort((a,b)=>b[1]-a[1])}
function dot(o){let b=null,m=0;parse(sc(o)).forEach(([k,v])=>{if(v>m){m=v;b=k}});return b?T[b].c[1]:'#86d4ae'}
function side(n){if(!n)return '<aside class="side g"><div class="mute small">Ваш профиль</div><p class="ld-hint">Отвечайте на вопросы: здесь появится чай, который подходит вам больше всего, и его профиль вкуса.</p>'+radar('rd',[0,0,0,0,0],'#86d4ae')+'</aside>';
 const r=calc(),k=r[0][0],v=T[k].v?'young':'',top=r[0][1]||1,c=T[k].c[1];
 return '<aside class="side g"><div class="mute small">Сейчас лидирует</div><div class="ld-name">'+T[k].n+'<span class="zh2">'+ZH[k]+'</span></div>'+radar('rd',prof(k,v),c)+'<div class="mbs">'+r.slice(0,3).map(x=>'<div class="mb"><span>'+T[x[0]].n+'</span><i style="--w:'+Math.round(x[1]/top*100)+'%;--c:'+T[x[0]].c[1]+'"></i></div>').join('')+'</div></aside>'}
function show(){mode='q';if(A.length>=Q.length)return result();
 const n=A.length,q=Q[n],opts=q.sub?q.sub[fam]:q.o;setTop(1,String(n+1).padStart(2,'0')+' / '+Q.length,n/Q.length*100);
 let top=null;if(n){top=calc()[0][0];leaderBg(top)}else{bgRotate()}
 let h='<div class="qgrid"><div class="qmain"><h2>'+q.t+'</h2>'+(H[n]?'<p class="hint">'+H[n]+'</p>':'');
 if(q.sl)h+='<div class="sl g"><div class="sv" id="sv">'+q.o[2][0]+'</div><div class="rail"><input type="range" id="rg" min="0" max="4" step="1" value="2" style="--f:.5" aria-label="'+q.t+'"><div class="ticks"><i></i><i></i><i></i><i></i><i></i></div></div><div class="ends"><span>'+q.o[0][0]+'</span><span>'+q.o[4][0]+'</span></div><button class="go" id="nx">Далее</button></div>';
 else h+='<div class="tiles">'+opts.map((o,i)=>'<button class="tile g" data-i="'+i+'" style="--tc:'+dot(o)+';animation-delay:'+(i*.04)+'s">'+o[0]+'</button>').join('')+'</div>';
 h+='</div>'+side(n)+'</div>';st.innerHTML=h;
 if(n){const k=top,v=T[k].v?'young':'';tween('rd',prev,prof(k,v));prev=prof(k,v)}
 if(q.sl){const rg=document.getElementById('rg'),sv=document.getElementById('sv');let pv=2;
  rg.oninput=()=>{const x=+rg.value;sv.textContent=q.o[x][0];rg.style.setProperty('--f',x/4);const d=Math.abs(x-pv);pv=x;rg.style.setProperty('--sx',1+d*.22);rg.style.setProperty('--sy',1-d*.1);setTimeout(()=>{rg.style.setProperty('--sx',1);rg.style.setProperty('--sy',1)},160)};
  document.getElementById('nx').onclick=()=>{A.push(q.o[rg.value]);swap(show)}}
 else st.querySelectorAll('.tile').forEach(b=>{b.onclick=()=>{const o=opts[+b.dataset.i];A.push(o);if(o[2])fam=o[2];swap(show)}})}
back.onclick=()=>{if(mode==='cat'||(mode==='q'&&!A.length)){swap(start);return}
 swap(()=>{if(sv)sv=null;else A.pop();const f=A.find(a=>a[2]);fam=f?f[2]:'';show()})};
/* ---------- результат ---------- */
function result(){mode='r';const r=calc(),w=r[0][0];
 if(T[w].v&&!sv){setTop(1,'Ещё один вопрос',96);leaderBg(w);
  st.innerHTML='<h2>'+T[w].n+': молодой или выдержанный?</h2><p class="hint">Молодой ярче и острее, выдержанный мягче и глубже.</p><div class="tiles one" id="vt"></div>';
  [['Молодой: яркий, бодрый','young'],['Выдержанный: мягкий, глубокий','old']].forEach(o=>{const b=document.createElement('button');b.className='tile g';b.style.cssText='--tc:'+T[w].c[1];b.textContent=o[0];b.onclick=()=>{sv=o[1];swap(result)};document.getElementById('vt').appendChild(b)});return}
 setTop(1,'Готово',100);let d=T[w];if(d.v)d=Object.assign({},d,d.v[sv]);const v=T[w].v?sv:'',c=d.c||T[w].c;leaderBg(w);
 const ws=A.filter(a=>parse(sc(a)).some(([k,x])=>k===w&&x>=2)).map(a=>a[0]).slice(0,6),
 why=ws.length?'<div class="row"><span class="k">Почему именно этот чай</span><br>Вы выбрали: '+ws.join(', ').toLowerCase()+'.</div>':'',
 tmh='<div class="lead g"><div class="mute small">Таймер заваривания</div><div class="tt" id="tt"></div><div class="mute small" id="tp"></div><button class="go" id="tb">Запустить</button></div>';
 let h='<div class="rgrid"><div class="card g"><div class="zh" aria-hidden="true">'+ZH[w]+'</div><div class="hd"><h3 class="big"></h3>'+fav(w)+'</div><div class="sub">'+T[w].s+'</div><div class="match"><span class="seal">'+r[0][2]+'%</span>совпадение с вашими ответами</div>'+imgs(w,c,1,v)+'<div class="rdw"><div class="k">Профиль вкуса</div>'+radar('rdr',prof(w,v),c[1])+'</div></div><div class="col"><div class="card g">'+body(d,w)+why+'</div>'+tmh+'</div></div><h3 class="sech">Запасные варианты</h3><div class="alts">';
 r.slice(1,3).forEach((x,i)=>{const a=T[x[0]];h+='<div class="alt g"><div class="am">'+dry(a.c[0],i*7+11,TY[x[0]])+'</div><div><b>'+a.n+'</b><div class="mute small">'+a.s+' · совпадение '+x[2]+'%</div><p>'+a.taste+'</p></div></div>'});
 h+='</div><div class="cta"><button class="go" id="a">Пройти заново</button><button class="go sec g" id="c">Посмотреть все чаи</button></div>';
 st.innerHTML=h;st.querySelector('h3.big').textContent=d.n;initTimer(d.tm||T[w].tm);tween('rdr',[0,0,0,0,0],prof(w,v));
 document.getElementById('a').onclick=()=>swap(()=>{A=[];fam='';sv=null;prev=[0,0,0,0,0];show()});document.getElementById('c').onclick=()=>swap(catalog)}
/* ---------- события ---------- */
st.addEventListener('click',e=>{const f=e.target.closest('[data-f]');if(f){CF=f.dataset.f;st.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('on',x===f));renderList();return}
 const o=e.target.closest('.orb');if(o){CQ=T[o.dataset.k].n;CF='all';swap(catalog);return}
 const b=e.target.closest('.fav');if(!b)return;const k=b.dataset.k;FAV.has(k)?FAV.delete(k):FAV.add(k);try{localStorage.setItem('fav',JSON.stringify([...FAV]))}catch(x){}
 st.querySelectorAll('.fav[data-k="'+k+'"]').forEach(x=>x.textContent=FAV.has(k)?'♥':'♡')});
st.addEventListener('input',e=>{if(e.target.id==='q'){CQ=e.target.value;renderList()}});
st.addEventListener('pointermove',e=>{const g=e.target.closest&&e.target.closest('.g');if(g){const r=g.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px')}});
clar.oninput=()=>{const v=+clar.value/100,s=document.documentElement.style;s.setProperty('--gb',(4+v*34)+'px');s.setProperty('--ga',(.03+v*.14).toFixed(3))};clar.oninput();
start();
