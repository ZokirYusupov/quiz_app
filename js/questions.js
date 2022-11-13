// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Yengil avtomobilning tormoz yo‘li tormoz tizimiga ega bo‘lmagan tirkama bilan harakatlanayotganda qanday o‘zgaradi?",
    question_img: '../images/avtoexam.jpg',
    answer: "Ortadi",
    options: [
      "Kamayadi, chunki tirkama harakatlanishga qo‘shimcha qarshilik ko‘rsatadi",
      "O‘zgarmaydi",
      "To'g'ri javob yo'q",
      "Ortadi"
    ]
  },
    {
    numb: 2,
    question: "Qaysi belgi tartibga solinmagan piyodalar o‘tish joyiga yaqinlashayotganlik haqida ogohlantiradi?",
    question_img: '../images/first.png',
    answer: "A",
    options: [
      "A va B",
      "A",
      "B",
      "Hammasi"
    ]
  },
    {
    numb: 3,
    question: "Old chiroqlar va orqa gabarit chiroqlari ishlamayotgan transport vositasi harakatini davom ettirishi taqiqlanadi?",
    answer: "Barcha javoblarda ko'rsatilgan holatlarda",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Faqat yetarli ko'rinmaslikda",
      "Faqat kunning qorong'i vaqtida",
      "Barcha javoblarda ko'rsatilgan holatlarda",
      "Kunning qorong' vaqtida"
    ]
  },
    {
    numb: 4,
    question: "Qatnov qismi yo'l chiziqlari bilan ajratilgan bo'lsa haydovchilar qanday holatlarda qat'iy bo'laklar bo'yicha harakatlanishlari kerak?",
    answer: "Barcha holatlarda",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Faqat harakatlanish bo'laklari uzliksiz sidirg'a chiziqlarbilanajratilgan bo'lsa",
      "Faqat harakatlanish serqatnov bo'lganda",
      "Barcha holatlarda",
      "To'g'ri javob yo'q"
    ]
  },
    {
    numb: 5,
    question: "Chorrahdan birinchi bo'lib kesib o'tadi?",
    answer: "Yashil avtomobil",
    question_img: '../images/2.png',
    options: [
      "Ko'k avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil",
      "Hammasi bir vaqtda"
    ]
  },
    {
    numb: 6,
    question: "Chorrahadan ikkinchi bo'lib qaysi transport vositasi kesib o'tadi?",
    answer: "Yashil avtomobil tramvay bilan bir vaqtda",
    question_img: '../images/3.png',
    options: [
      "Yashil avtomobil",
      "Yashil avtomobil tramvay bilan bir vaqtda",
      "Qizil avtomobil",
      "Qizil avtomobil Sariq bilan"
    ]
  },
    {
    numb: 7,
    question: "Ko'rsatilgan belgilardan qaysilarining talabi bevosita o`rnatilgan joyidan kuchga kiradi?",
    answer: "А va Б",
    question_img: '../images/4.png',
    options: [
      "Faqat Б",
      "Faqat A",
      "А va Б",
      "Hammasi"
    ]
  },
    {
    numb: 8,
    question: "Tartibga solinmagan chorrahada qaysi belgi albatta to'xtashni   talab qiladi?",
    answer: "Faqat Б",
    question_img: '../images/5.png',
    options: [
      "Faqat А",
      "Faqat Б",
      "Б va В",
      "Hammasi"
    ]
  },
    {
    numb: 9,
    question: "Asosiy yo`l –",
    answer: "Tuproqli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli,tosh va shunga o'xshash qoplamali)",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Toshli yo'lga nisbatan asfalt qoplamali yo'l",
      "Tuproqli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli,tosh va shunga o'xshash qoplamali)",
      "Ikki bo'lakli yo'lga nisbatan uch yoki undan ko'p bo'lakli yo'l",
      "Barcha javoblar to'g'ri"
    ]
  },
    {
    numb: 10,
    question: "Qaysi transport vositalari yo'nalishli transport vositalari hisoblanadi",
    answer: "Belgilangan yo'nalishi va bekatlari bo'lgan, yo'lovchi tashish uchun mo'ljallangan umum foydalanishdagi transport vositalalari",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Yo'lovchilarni tashuvchi istalgan transport vositalari",
      "Avtobuslar",
      "Hammasi",
      "Belgilangan yo'nalishi va bekatlari bo'lgan, yo'lovchi tashish uchun mo'ljallangan umum foydalanishdagi transport vositalalari"
    ]
  },
    {
    numb: 11,
    question: "Qo'l oyoq uchlari (tirsakdan past qismi, boldir) sinishida transport shinalari yoki ularni qo'ldayasash uchun vositalar bo'lmasa birinchi tibbiy yordam qanday ko'rsatiladi?",
    answer: "Qo'llarni tirsakdan bukib, ro`molga osgan holda tanaga bog'lash, oyoqlarni orasigaalbatta yumshoq mato qo'yib bir-biriga bog‘lash",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Qo'llarni tirsakdan bukib, ro`molga osgan holda tanaga bog'lash, oyoqlarni orasigaalbatta yumshoq mato qo'yib bir-biriga bog‘lash",
      "Qo'llarni tirsakdan bukib, ro`molga osgan holda tanaga bog'lash, oyoqlarni bir-birigayaxshilab jipslab tekkazib bog‘lash",
      "Hammasi",
      "Qo'llarni tana bo'ylab cho'zgan holda tanaga bog'lash, oyoqlarni orasigayumshoqmato qo'yib bir-biriga bog‘lash"
    ]
  },
  {
    numb: 12,
    question: "Qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    answer: "A, Б",
    question_img: '../images/6.png',
    options: [
      "A, Б",
      "Б",
      "A",
      "Hammasi"
    ]
  },
  {
    numb: 13,
    question: "Qaysi holatlarda aholi punktlarida tovushli ishoralardan foydalanish mumkin?",
    answer: "Faqat zarur bo`lgan hollarda yo'l-transport hodisasining oldini olish uchun",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Faqat zarur bo`lgan hollarda yo'l-transport hodisasining oldini olish uchun",
      "Faqat boshqa haydovchilarni quvib o'tish haqida ogohlantirishuchun",
      "Barcha javoblarda ko'rsatilgan holatlarda",
      "To'g'ri javob yo'q"
    ]
  },
  {
    numb: 14,
    question: "Chorrahadan uchinchi bo'lib qaysi avtomobil kesib o'tadi?",
    answer: "Qizil avtomobil",
    question_img: '../images/7.png',
    options: [
      "Yashil avtomobil",
      "Qizil va Yashil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ]
  },
  {
    numb: 15,
    question: "Chorrahadan birinchi bo'lib qaysi transport vositasi kesib o'tadi?",
    answer: "Yashil avtomobil",
    question_img: '../images/8.png',
    options: [
      "Yashil avtomobil",
      "Qizil va Yashil",
      "Ko'k avtomobil",
      "Qizil avtomobil"
    ]
  },
  {
    numb: 16,
    question: "Ushbu 50 yozuvli yo'l belgisi nimani bildradi?",
    answer: "Yo'lning ushbu qismida ruxsat berilgan eng yuqori tezlikni",
    question_img: '../images/9.png',
    options: [
      "Barcha javoblar to'g'ri",
      "Yo'l yoki marshrut raqamini",
      "Yo'lning ushbu qismida tavsiya berilgan tezlikni",
      "Yo'lning ushbu qismida ruxsat berilgan eng yuqori tezlikni"
    ]
  },
  {
    numb: 17,
    question: "Ko'rsatilgan belgilardan qaysi biri ruxsat etilgan to'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga harakatlanishga ruxsat beradi?",
    answer: "А va В",
    question_img: '../images/10.png',
    options: [
      "А va В",
      "А va Б",
      "В",
      "A"
    ]
  },
  {
    numb: 18,
    question: "Ko'rsatilgan belgilardan qaysi biri texnik tavsifnomasiga yoki holatiga ko'ra tezligi soatiga 40 kilometrdan kam bo'lgan transport vositalarining harakatlanishini taqiqlaydi?",
    answer: "Faqat A",
    question_img: '../images/11.png',
    options: [
      "Faqat B",
      "А va Б",
      "Faqat A",
      "Hammasi"
    ]
  },
  {
    numb: 19,
    question: "Turar joy dahalarida piyodalar yo'lning qaysi qismida harakatlanishilari kerak?",
    answer: "Trotuardan yoki qatnov qismidan",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Trotuardan yoki qatnov qismidan",
      "Faqat trotuar bo'yicha",
      "Qatnov qismi chetida bir qator bo'lib",
      "To'g'ri javob yo'q"
    ]
  },
  {
    numb: 20,
    question: "Ruxsat etilgan to'la vazni bu - ...",
    answer: "Aslahalangan transport vositasining ishlab chiqargan korxonatomonidanbelgilangan, yuk, haydovchi va yo'lovchilari bilan birgalikdagi engyuqorivazni(o’lchovi)",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Transport vositasining yuki, haydovchi va yo`lovchilari bilanbirgalikdagivazni",
      "Aslahalangan transport vositasining ishlab chiqargan korxonatomonidanbelgilangan, yuk, haydovchi va yo'lovchilari bilan birgalikdagi engyuqorivazni(o’lchovi)",
      "Aslahalangan transport vositasining ishlab chiqargan korxonatomonidanbelgilangan, yuksiz, haydovchisiz va yo’lovchilarsiz eng yuqori vazni (o’lchovi)",
      "Barcha javoblar"
    ]
  },
  {
    numb: 21,
    question: "To'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillarini quyidagilarbilan jihozlanmagan bo'lsa ham foydalanishga ruxsat etiladi:",
    answer: "O'zi yurib ketishidan saqlovchi, g'ildirak diametriga muvofiq(kamida2ta) tirgak",
    question_img: '../images/avtoexam.jpg',
    options: [
      "O'zi yurib ketishidan saqlovchi, g'ildirak diametriga muvofiq(kamida2ta) tirgak",
      "Tibbiyot qutichasi",
      "O't o'chirgich",
      "Majburiy to'xtaganini bildiruvchi belgi (yoki miltillovchi qizil chiroq)"
    ]
  },
  {
    numb: 22,
    question: "Qaysi holatlarda jabrlanuvchiga yurak-o'pka reanimatsiyasini boshlash kerak?",
    answer: "Hushidan ketishda, nafas olish faoliyati va qon aylanishi to'xtaganda",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Yurak sohasida og'riq sezilganda va nafas olish qiyinlashganda",
      "Hushidan ketishda, nafas olish faoliyatidan qat'iy nazar",
      "Hushidan ketishda, nafas olish faoliyati va qon aylanishi to'xtaganda",
      "Nafas olish qiyinlashganda"
    ]
  },
  {
    numb: 23,
    question: "Kunning yorug' vaqtida harakatlanayotgan qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    answer: "Hech kim buzmayapti",
    question_img: '../images/12.png',
    options: [
      "Hech kim buzmayapti",
      "Har ikki rasmda",
      "Faqat А",
      "Faqat B"
    ]
  },
  {
    numb: 24,
    question: "Avtomagistralda to'xtashga ruxsat etiladi:",
    answer: "5.15 yoki 6.11 yo'l belgilari bilan belgilangan maxsus to'xtab turish maydonchalarida",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Faqat qatnov qismini chetini bildiruvchi chiziqdanchetda",
      "5.15 yoki 6.11 yo'l belgilari bilan belgilangan maxsus to'xtab turish maydonchalarida",
      "Qatnov qismini chetda barcha joyda",
      "To'xtash mumkin emas"
    ]
  },
  {
    numb: 25,
    question: "Chorrahani ikkinchi bo'lib kesib o'tadi",
    answer: "Avtomobil",
    question_img: '../images/13.png',
    options: [
      "Tramvay",
      "Mototsikl",
      "Avtomobil",
      "Tramvay va Mototsikl"
    ]
  },
  {
    numb: 26,
    question: "Chorrahadan oxirgi bo'lib qaysi transport vositasi kesib o'tadi",
    answer: "Avtomobil",
    question_img: '../images/14.png',
    options: [
      "Velosiped va Avtomobil",
      "Velosiped",
      "Avtobus",
      "Avtomobil"
    ]
  },
  {
    numb: 27,
    question: "Agar piyodalar o'tish joylaridan keyin tirbandlik paydo bo'lsa haydovchi qayerga to'xtashi kerak?",
    answer: "Bevosita piyodalar o'tish joyi oldida",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Bevosita piyodalar o'tish joyi oldida",
      "Piyodalar o'tish joyida, agar piyodalar bo'lmasa",
      "Piyodalar o'tish joyiga 5 m yetmasdan",
      "Piyodalar o'tish joyiga 10 m yetmasdan"
    ]
  },
  {
    numb: 28,
    question: "Ko'rsatilgan qaysi yo'l belgisi yengil yo'nalishsiz taksilarga yo'lovchilarni tushirish-chiqarish (yuklarni ortish- tushirish) vaqtida ta'sir qilmaydi?",
    answer: "Hammasi",
    question_img: '../images/15.png',
    options: [
      "Faqat 'A'",
      "Faqat 'Б'",
      "Faqat 'Б' 'C' 'Д'",
      "Hammasi"
    ]
  },
  {
    numb: 29,
    question: "Bu qo'shimcha-axborot yo'l belgisi qaysi yo'l belgisi bilan birgalikda qo'llaniladi?",
    answer: "Б",
    question_img: '../images/16.png',
    options: [
      "Б",
      "A",
      "C",
      "Hammasi"
    ]
  },
  {
    numb: 30,
    question: "Trotuar va piyodalar yo'lkasi bo'lmaganda bolalar guruhini yo'lda qanday tartibda olib yurish mumkin?",
    answer: "Yo'l yoqasidan faqat kunduzi va katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi",
    question_img: '../images/avtoexam.jpg',
    options: [
      "Qatnov qismi chetidan katta yoshdagilar kuzatuvidaolib yurishga ruxsat etiladi",
      "Yo'l yoqasidan faqat kunduzi va katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi",
      "Qatnov qismi chetida",
      "Hammasi"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];