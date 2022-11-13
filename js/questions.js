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
    answer: "Belgilangan yo'nalishi va bekatlari bo'lgan, yo'lovchi tashishuchun mo'ljallangan umum foydalanishdagi transport vositalalari",
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
    answer: "Faqat zarur bo`lgan hollarda yo'l-transport hodisasiningoldiniolish uchun",
    question_img: '../images/6.png',
    options: [
      "Faqat zarur bo`lgan hollarda yo'l-transport hodisasiningoldiniolish uchun",
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
    answer: "Ko'k avtomobil",
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