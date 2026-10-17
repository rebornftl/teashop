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
red:['rel','Юньнань (Дянь Хун) и горы Уишань (Чжэн Шань Сяо Чжун, один из древнейших красных чаёв).','Фарфоровый или стеклянный чайник',[12,3]],
gaba:['rel foc','Тайвань, Алишань. Метод обработки с ГАМК (GABA) разработали в Японии в 1980-х.','Гайвань или исинский чайник',[15,3]],
green:['bod soft','Ханчжоу, Чжэцзян, окрестности озера Сиху. Один из самых известных зелёных чаёв Китая.','Стеклянный стакан или гайвань',[25,5]],
liubao:['rel dens','Уезд Цанъу, Гуанси. Тёмный чай, который традиционно выдерживают в корзинах.','Глиняный или исинский чайник',[10,3]],
laobai:['rel','Фудин, Фуцзянь. Белый чай, выдержанный несколько лет, поэтому вкус глубже и сладже.','Чайник из глины или стекла, гайвань',[12,3]]};
T.liubao={n:'Тёмный чай Лю Бао',s:'Лю Бао из Гуанси',c:['#241810','#7a2e12'],taste:'Старая древесина, влажный погреб, сушёные травы, земля и глубокая сладость.',eff:'Согревает, мягко расслабляет, успокаивает.',brew:'100°C · 8 г на 100 мл · 10 с · 8–10 проливов'};
T.laobai={n:'Лао Бай Ча',s:'Выдержанный белый чай',c:['#7a6a4a','#c98a2a'],taste:'Мёд, сухофрукты, финики и сушёные травы. Мягкий и глубокий вкус.',eff:'Мягко согревает и расслабляет.',brew:'95–100°C · 6 г на 100 мл · 10–15 с · 8–10 проливов'};
Object.keys(M).forEach(k=>{const m=M[k];Object.assign(T[k],{g:m[0],reg:m[1],dish:m[2],tm:m[3]})});
const EX={'Расслабление':'liubao:2,laobai:2','Уют и согрев':'liubao:3,laobai:1','Отдых после дня':'liubao:2,laobai:2','Вечером':'liubao:2,laobai:1','Холодно, хочется согреться':'liubao:3,laobai:2','Мягкий, без кофеинового скачка':'liubao:2,laobai:2','Плотный':'liubao:3,laobai:1','Гурман':'liubao:2,laobai:2','Древесные и землистые':'liubao:3,laobai:1','Сладкие и медовые':'laobai:3','Влажная древесина, кора':'liubao:3','Торфяные, землистые ноты':'liubao:3','Камфора, финики, изюм':'liubao:2,laobai:2','Лесной мёд':'laobai:2','Густая, маслянистая':'liubao:2','Бархатистая и обволакивающая':'laobai:2,liubao:1','Дымный и пряный':'liubao:2','Выдержанный':'liubao:3,laobai:3','Сытый':'liubao:3','Голодный':'laobai:2','Чайник':'liubao:2,laobai:2'};
const sc=o=>o[1]+(EX[o[0]]?(o[1]?',':'')+EX[o[0]]:'');
const H=['От этого зависит, какой чай по эффекту нам подойдёт.','Для работы нужен ясный ум, для отдыха мягкость.','Вечером лучше чай мягче и без сильного заряда.','Холодом тянет к тёплым чаям, жарой к свежим.','Теин в разных чаях действует по-разному.','Плотный чай раскрывается ярче, нежный деликатнее.','От опыта зависит, сколько терпкости и сложности подойдёт.','Выберите ближайшую группу вкусов, дальше уточним.','Выберите то, что вам кажется самым привлекательным.','Текстура влияет на ощущение чая во рту.','Аромат часто говорит о способе обработки листа.','Кислинка есть у габа улуна и некоторых выдержанных чаёв.','Горчинка бывает у молодых шэнов и зелёных чаёв.','Выдержанные чаи мягче, свежие ярче.','Голодному лучше мягкие чаи, после еды подойдут плотные.','От способа заваривания зависит, какой чай раскроется лучше.'];

const B=(t,g,lo,hi,p)=>t+'°C · '+g+' г на 100 мл · '+lo+'–'+hi+' с, дальше +'+p+' с';
const Y=(k,tm,b)=>Object.assign(T[k],{tm:tm,brew:b});
T.shu.v={young:{n:'Шу пуэр · молодой',c:['#2a1a12','#6b2a14'],taste:T.shu.taste,eff:T.shu.eff,brew:B(100,5,5,8,2),tm:[5,8,2]},
 old:{n:'Шу пуэр · выдержанный',c:['#1c120c','#4a1a0c'],taste:'Глубокий и бархатистый, с выраженными нотами старого дерева, прелой осенней листвы, вяленого чернослива, тёмного горького шоколада и сухофруктов. Переходит в мягкое сладковатое послевкусие с тонами грецкого ореха.',eff:'Дарит глубокое состояние собранности и ясности ума («чайное состояние»), мягко, но уверенно тонизирует без суеты, гармонизирует эмоциональный фон, отлично согревает в холодную погоду и мягко запускает пищеварение.',brew:B(100,6,10,15,8),tm:[10,15,8]}};
T.shu.taste='Молодой: '+T.shu.v.young.taste+' Выдержанный: глубокий, с нотами старого дерева, прелой листвы и вяленого чернослива.';
T.shen.v.young.brew=B(95,5,2,5,2);T.shen.v.young.tm=[2,5,2];T.shen.v.old.brew=B(95,5,4,7,2);T.shen.v.old.tm=[4,7,2];
Y('shu',[5,8,2],T.shu.v.young.brew);Y('shen',[2,5,2],T.shen.v.young.brew);
Y('dahong',[3,6,2],B(90,5,3,6,2));Y('tgy',[4,6,3],B(90,5,4,6,3));Y('white',[2,5,2],B(80,5,2,5,2));Y('yellow',[2,5,2],B(85,5,2,5,2));Y('red',[3,6,2],B(95,5,3,6,2));Y('green',[2,3,1],B(80,5,2,3,1));
Y('liubao',[5,8,2],B(95,5,5,8,2));Y('gaba',[15,15,3],'95°C · 7 г на 100 мл · 15 с, дальше +3 с');Y('laobai',[10,15,3],'95–100°C · 6 г на 100 мл · 10–15 с, дальше +3 с');
Object.assign(T.liubao,{n:'Хэй Ча Лю Бао',s:'Чёрный (тёмный) чай, Гуанси',taste:'Специфический и объёмный, с доминирующими нотами «подвальной» сырости (Бин У), старого дерева, мха, лёгкой ментоловой свежести и орехов. Характерное мягкое и гладкое тело.',eff:'Глубоко заземляет и расслабляет тело, сохраняя разум чистым и сфокусированным, нормализует работу желудка после жирной пищи и дарит ощущение спокойствия.'});
// Фото сухого чая: ключ чая -> ссылка. Если ссылки нет или она не открылась, показывается рисунок.
// Ключи: shu, shen, dahong, tgy, white, yellow, red, gaba, green, liubao, laobai
const WM=f=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(f)+'?width=600';
const DRY={
 shu:'https://taooftea.com/wp-content/uploads/2013/08/Shou-Puer-2017-800x800.jpg',
 shen:'https://taooftea.com/wp-content/uploads/2013/08/banzhangbingcha1-800x531.jpg',
 tgy:'https://twinings.co.uk/cdn/shop/products/4-Tie-Guan-Yin-Oolong-pile.jpg?v=1619795520&width=800',
 green:WM('Zhu-Ye-Qing-Tea-03.jpg'),
 yellow:WM('Huoshan_Huangya_tea_leaves_close.jpg'),
 dahong:'https://taooftea.com/wp-content/uploads/2013/08/dahongpao-800x600.jpg',
 white:'https://www.curioustea.com/wp-content/uploads/2018/11/China-Fudign-Fujian-Bai-Mu-Dan-White-Peony-King-White-Tea-1.jpg',
 red:'https://taooftea.com/wp-content/uploads/2013/08/China-Old-Growth-Tea-Leaf-800x511.jpg',
 gaba:'https://www.curioustea.com/wp-content/uploads/2017/04/Taiwan-GABA-Oolong-Tea-1.jpg',
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
{t:'Насколько насыщенным должен быть вкус?',o:[O('Нежный','white:2,yellow:3,green:1,tgy:1'),O('Средний','red:2,gaba:2,tgy:1,green:1,white:1'),O('Плотный','shu:3,dahong:3,shen:1,red:1')]},
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
{t:'Как вы относитесь к горчинке и терпкости?',o:[O('Люблю','shen:3,dahong:1,green:1'),O('Чуть-чуть','green:1,tgy:1,red:1'),O('Не люблю','yellow:2,white:2,shu:1,red:1,gaba:1')]},
{t:'Что вы выберете: свежий чай или выдержанный?',o:[O('Свежий','green:2,tgy:2,white:1,yellow:1'),O('Выдержанный','shen:2,shu:2,dahong:1'),O('Без разницы','red:1,gaba:1')]},
{t:'Вы сейчас голодны или сыты?',o:[O('Голодный','red:2,yellow:2,white:2,gaba:1,shu:1'),O('Сытый','shu:2,shen:2,dahong:2,green:1')]},
{t:'Как вы будете заваривать?',o:[O('Гайвань, много коротких проливов','shen:2,dahong:2,shu:1,tgy:1'),O('Чайник','red:2,white:1,shu:1'),O('Одна кружка, быстро','green:1,red:1,white:1')]}
];
const st=document.getElementById('stage'),bar=document.getElementById('bar'),cnt=document.getElementById('cnt'),back=document.getElementById('back');
let iv=null,CF='all',FAV=new Set();try{FAV=new Set(JSON.parse(localStorage.getItem('fav')||'[]'))}catch(e){}
let A=[],fam='',sv=null,mode='home';
const parse=s=>s?s.split(',').map(x=>{const p=x.split(':');return [p[0],+p[1]]}):[];
function swap(fn){clearInterval(iv);fn();window.scrollTo(0,0)}
function dry(c,sd){let s=sd,r=()=>(s=(s*9301+49297)%233280)/233280,h='';
 for(let i=0;i<60;i++){const a=r()*6.283,d=Math.sqrt(r())*80,x=100+Math.cos(a)*d,y=100+Math.sin(a)*d,l=r()>.5?'255,255,255':'0,0,0';
 h+='<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+(5+r()*9).toFixed(1)+'" height="2.4" rx="1.2" fill="rgba('+l+','+(.1+r()*.22).toFixed(2)+')" transform="rotate('+(r()*180|0)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>'}
 return '<svg viewBox="0 0 200 200"><defs><radialGradient id="d'+sd+'" cx=".4" cy=".35"><stop offset="0" stop-color="'+c+'"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient></defs><ellipse cx="100" cy="176" rx="70" ry="9" fill="rgba(0,0,0,.4)"/><circle cx="100" cy="98" r="86" fill="'+c+'"/><circle cx="100" cy="98" r="86" fill="url(#d'+sd+')"/>'+h+'<circle cx="100" cy="98" r="9" fill="rgba(0,0,0,.35)"/></svg>'}
function cup(l){return '<svg viewBox="0 0 200 200"><ellipse cx="100" cy="172" rx="76" ry="9" fill="rgba(0,0,0,.4)"/><path d="M30 100 Q28 120 40 124" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="5"/><path d="M40 84H160C160 138 136 164 100 164C64 164 40 138 40 84Z" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.55)" stroke-width="2"/><path d="M46 96H154C152 134 132 156 100 156C68 156 48 134 46 96Z" fill="'+l+'" opacity=".92"/><ellipse cx="100" cy="84" rx="60" ry="10" fill="'+l+'" stroke="rgba(255,255,255,.6)" stroke-width="2"/><g class="steam" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M80 66C70 54 90 46 80 32"/><path d="M104 66C94 52 114 44 104 28"/><path d="M128 66C118 54 138 46 128 34"/></g></svg>'}
function fb(el){if(!el.dataset.t&&el.dataset.u){el.dataset.t=1;el.src=el.dataset.u}else el.outerHTML=dry(el.dataset.c,+el.dataset.s)}
const px=u=>'https://wsrv.nl/?url='+encodeURIComponent(u)+'&w=700&q=80&output=jpg'
function imgs(k,c,i){const u=DRY[k];
 return '<div class="imgs"><figure>'+(u?'<img src="'+px(u)+'" data-u="'+u+'" alt="Сухой чай" loading="lazy" decoding="async" referrerpolicy="no-referrer" data-c="'+c[0]+'" data-s="'+(i*7+3)+'" onerror="fb(this)">':dry(c[0],i*7+3))+'<figcaption>Сухой чай</figcaption></figure><figure>'+cup(c[1])+'<figcaption>Заваренный</figcaption></figure></div>'}
function fav(k){return '<button class="fav" data-k="'+k+'" aria-label="В избранное">'+(FAV.has(k)?'♥':'♡')+'</button>'}
function body(d,k){const t=T[k],r=(a,b)=>'<div class="row"><span class="k">'+a+'</span><br>'+b+'</div>';return r('Вкус',d.taste)+r('Эффект',d.eff)+r('Заваривание',d.brew)+r('Посуда',t.dish)+r('Откуда',t.reg)}
function initTimer(tm){const tt=document.getElementById('tt'),tp=document.getElementById('tp'),tb=document.getElementById('tb');if(!tt)return;let n=1,left=0;
 const f=x=>Math.floor(x/60)+':'+String(x%60).padStart(2,'0'),len=()=>tm[1]+(n-1)*tm[2];
 tt.textContent=f(len());tp.textContent='Пролив 1';
 tb.onclick=()=>{clearInterval(iv);if(tb.dataset.s==='done'){n++}tp.textContent='Пролив '+n;left=len();tt.textContent=f(left);tb.textContent='Идёт отсчёт, нажмите для перезапуска';tb.dataset.s='run';
  iv=setInterval(()=>{left--;tt.textContent=f(Math.max(left,0));if(left<=0){clearInterval(iv);tb.textContent='Слили. Следующий пролив';tb.dataset.s='done';tp.textContent='Пролив '+n+' готов, сливайте';try{navigator.vibrate&&navigator.vibrate(300)}catch(e){}}},1000)}}
st.addEventListener('click',e=>{const f=e.target.closest('[data-f]');if(f){CF=f.dataset.f;catalog();return}
 const b=e.target.closest('.fav');if(!b)return;const k=b.dataset.k;FAV.has(k)?FAV.delete(k):FAV.add(k);try{localStorage.setItem('fav',JSON.stringify([...FAV]))}catch(x){}
 st.querySelectorAll('.fav[data-k="'+k+'"]').forEach(x=>x.textContent=FAV.has(k)?'♥':'♡')});
function chips(ks){return '<div class="strip">'+ks.map((k,i)=>'<div class="chip">'+dry(T[k].c[0],Object.keys(T).indexOf(k)*7+3)+T[k].n+'</div>').join('')+'</div>'}
function setTop(b,c,p){st.className=mode==='cat'?'cat':'';back.hidden=!b;cnt.textContent=c;bar.style.width=p+'%'}
function start(){mode='home';A=[];fam='';sv=null;setTop(0,'',0);
 st.innerHTML='<section class="hero"><div class="glyph" aria-hidden="true">茶</div><h1>Подбор китайского чая</h1><p>Ответьте на '+Q.length+' вопросов о состоянии, вкусе и привычках. Мы назовём один чай из всего каталога, покажем, как он выглядит сухим и в чашке, и расскажем, как его заваривать.</p><p class="mute">В каталоге можно сразу посмотреть все чаи: шу и шэн пуэр, улуны, белый, жёлтый, красный, зелёный, Лю Бао и Лао Бай Ча.</p><div class="mute" style="font-size:14px;margin-top:20px">В подборе участвуют:</div>'+chips(Object.keys(T))+'<div class="steps"><div><b>1</b>Отвечаете на вопросы о состоянии и вкусе</div><div><b>2</b>Мы сравниваем ответы со всеми чаями каталога</div><div><b>3</b>Получаете чай, способ заваривания и два запасных варианта</div></div><button class="go" id="s">Пройти тест</button><button class="go sec" id="c">Посмотреть все чаи</button></section>';
 document.getElementById('s').onclick=()=>swap(show);document.getElementById('c').onclick=()=>swap(catalog)}
function catalog(){mode='cat';setTop(1,'Каталог',0);
 const FL=[['all','Все'],['fav','Избранное'],['bod','Бодрят'],['rel','Расслабляют'],['foc','Для фокуса'],['soft','Нежные'],['dens','Плотные']];
 let h='<h2>Все чаи</h2><div class="strip fl">'+FL.map(f=>'<button class="pill'+(CF===f[0]?' on':'')+'" data-f="'+f[0]+'">'+f[1]+'</button>').join('')+'</div>';
 const list=[];Object.keys(T).forEach(k=>{const t=T[k];if(CF==='fav'?!FAV.has(k):(CF!=='all'&&!t.g.includes(CF)))return;if(t.v)list.push([k,t.v.young],[k,t.v.old]);else list.push([k,t])});
 if(!list.length)h+='<p class="mute">Здесь пока пусто. Отметьте ♡ у чаёв, которые хотите попробовать.</p>';
 list.forEach((x,i)=>{const d=x[1],k=x[0];h+='<section class="card"><div class="hd"><h3>'+d.n+'</h3>'+fav(k)+'</div><div class="sub">'+T[k].s+'</div>'+imgs(k,d.c||T[k].c,i)+body(d,k)+'</section>'});
 h+='<button class="go" id="t">Пройти тест</button>';st.innerHTML=h;document.getElementById('t').onclick=()=>swap(show)}
function show(){mode='q';if(A.length>=Q.length)return result();
 const q=Q[A.length],opts=q.sub?q.sub[fam]:q.o;setTop(1,(A.length+1)+' из '+Q.length,A.length/Q.length*100);
 st.innerHTML='<h2></h2>';st.firstChild.textContent=q.t;if(H[A.length])st.firstChild.insertAdjacentHTML('afterend','<p class="mute hint">'+H[A.length]+'</p>');
 opts.forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o[0];b.onclick=()=>{A.push(o);if(o[2])fam=o[2];swap(show)};st.appendChild(b)});if(A.length>=2){const t=calc().slice(0,3).map(x=>x[0]);st.insertAdjacentHTML('beforeend','<div class="lead"><div class="mute" style="font-size:13px">Пока лидируют</div>'+chips(t)+'</div>')}}
back.onclick=()=>{if(mode==='cat'||(mode==='q'&&!A.length)){swap(start);return}
 swap(()=>{if(sv)sv=null;else A.pop();const f=A.find(a=>a[2]);fam=f?f[2]:'';show()})};
function calc(){const s={},m={},ks=Object.keys(T);ks.forEach(k=>{s[k]=0;m[k]=0});
 A.forEach(a=>parse(sc(a)).forEach(([k,v])=>s[k]+=v));
 Q.forEach(q=>{const opts=q.sub?q.sub[fam]:q.o;ks.forEach(k=>{let b=0;opts.forEach(o=>parse(sc(o)).forEach(([kk,v])=>{if(kk===k&&v>b)b=v}));m[k]+=b})});
 return ks.map(k=>[k,s[k],Math.min(99,Math.round(s[k]/Math.max(m[k],1)*100))]).sort((a,b)=>b[1]-a[1])}
function result(){mode='r';const r=calc();
 if(T[r[0][0]].v&&!sv){setTop(1,'Ещё один вопрос',96);
  st.innerHTML='<h2>'+T[r[0][0]].n+': молодой или выдержанный?</h2><p class="mute">Молодой ярче и острее, выдержанный мягче и глубже.</p>';
  [['Молодой: яркий, бодрый','young'],['Выдержанный: мягкий, глубокий','old']].forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o[0];b.onclick=()=>{sv=o[1];swap(result)};st.appendChild(b)});return}
 setTop(1,'Готово',100);const w=r[0][0];let d=T[w];if(d.v)d=Object.assign({},d,d.v[sv]);
 const ws=A.filter(a=>parse(sc(a)).some(([k,v])=>k===w&&v>=2)).map(a=>a[0]).slice(0,6),why=ws.length?'<div class="row"><span class="k">Почему именно этот чай</span><br>Вы выбрали: '+ws.join(', ').toLowerCase()+'.</div>':'',tmh='<div class="lead" style="margin:0 0 16px"><div class="mute" style="font-size:13px">Таймер заваривания</div><div id="tt" style="font-size:44px;font-weight:600;line-height:1.1;margin:4px 0"></div><div class="mute" id="tp" style="font-size:14px"></div><button class="go" id="tb" style="margin:10px 0 8px">Запустить</button></div>';
 let h='<p class="mute" style="margin:0 4px 8px">Ваш чай</p><section class="card"><div class="hd"><h3 style="font-size:30px"></h3>'+fav(w)+'</div><div class="sub">'+T[w].s+' · совпадение '+r[0][2]+'%</div>'+imgs(w,d.c||T[w].c,1)+body(d,w)+why+'</section>'+tmh+'<h3 style="font-size:20px;margin:24px 4px 10px">Запасные варианты</h3>';
 r.slice(1,3).forEach(x=>{const a=T[x[0]];h+='<div class="alt"><b>'+a.n+'</b><div class="mute" style="font-size:14px">'+a.s+' · совпадение '+x[2]+'%</div><p style="margin:6px 0 0;font-size:15px">'+a.taste+'</p></div>'});
 h+='<button class="go" id="a">Пройти заново</button><button class="go sec" id="c">Посмотреть все чаи</button>';
 st.innerHTML=h;st.querySelector('h3').textContent=d.n;initTimer(d.tm||T[w].tm);document.getElementById('a').onclick=()=>swap(()=>{A=[];fam='';sv=null;show()});document.getElementById('c').onclick=()=>swap(catalog)}
if(/firefox/i.test(navigator.userAgent))document.documentElement.classList.add('ff');
start();
