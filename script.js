const WORDS_PER_ROUND = 10;
const MIN_SURAH_WORDS = 5;

const SURAH_ORDER = [
  "An-Naba", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin",
  "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr",
  "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duha", "Ash-Sharh", "At-Tin", "Al-Alaq",
  "Al-Qadr", "Al-Bayyinah", "Al-Zalzalah", "Al-Adiyat", "Al-Qariah", "At-Takathur",
  "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh", "Al-Ma'un", "Al-Kawthar",
  "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
];

const STORAGE_KEY = "quranWordQuest.memorized.v1";
const NAME_STORAGE_KEY = "quranWordQuest.childName.v1";

const MILESTONES = [
  { count: 5, emoji: "🌱", label: "First Steps" },
  { count: 10, emoji: "🌿", label: "Growing Green" },
  { count: 20, emoji: "🌳", label: "Half the Juz" },
  { count: 30, emoji: "🌲", label: "Almost There" },
  { count: 37, emoji: "🏆", label: "Juz Champion" }
];

const FRUIT_EMOJIS = ["🍎", "🍊", "🍋", "🍇", "🍓", "🫐"];

const baseWords = [
  { arabic: "شَمْس", transliteration: "shams", meaning: "sun", emoji: "☀️", surah: "At-Takwir" },
  { arabic: "قَمَر", transliteration: "qamar", meaning: "moon", emoji: "🌙", surah: "Al-Inshiqaq" },
  { arabic: "نَجْم", transliteration: "najm", meaning: "star", emoji: "⭐", surah: "At-Tariq" },
  { arabic: "سَمَاء", transliteration: "sama'", meaning: "sky", emoji: "🌌", surah: "An-Naba" },
  { arabic: "أَرْض", transliteration: "ard", meaning: "earth", emoji: "🌍", surah: "An-Naba" },
  { arabic: "بِحَار", transliteration: "bihar", meaning: "seas", emoji: "🌊", surah: "At-Takwir" },
  { arabic: "جِبَال", transliteration: "jibal", meaning: "mountains", emoji: "⛰️", surah: "An-Naba" },
  { arabic: "مَاء", transliteration: "ma'", meaning: "water", emoji: "💧", surah: "An-Naba" },
  { arabic: "لَيْل", transliteration: "layl", meaning: "night", emoji: "🌃", surah: "An-Naba" },
  { arabic: "نَهَار", transliteration: "nahar", meaning: "daytime", emoji: "🌞", surah: "An-Naba" },
  { arabic: "يَوْم", transliteration: "yawm", meaning: "day", emoji: "📅", surah: "An-Naba" },
  { arabic: "نَاس", transliteration: "nas", meaning: "people", emoji: "👥", surah: "Al-Mutaffifin" },
  { arabic: "رَبّ", transliteration: "rabb", meaning: "Lord", emoji: "🤲", surah: "An-Naba" },
  { arabic: "مَلِك", transliteration: "malik", meaning: "king", emoji: "👑", surah: "Al-Buruj" },
  { arabic: "كِتَاب", transliteration: "kitab", meaning: "book", emoji: "📖", surah: "Al-Mutaffifin" },
  { arabic: "قَلَم", transliteration: "qalam", meaning: "pen", emoji: "✒️", surah: "Al-Alaq" },
  { arabic: "عِلْم", transliteration: "'ilm", meaning: "knowledge", emoji: "📚", surah: "Al-Alaq" },
  { arabic: "بَيْت", transliteration: "bayt", meaning: "house", emoji: "🏠", surah: "Quraysh" },
  { arabic: "طَعَام", transliteration: "ta'am", meaning: "food", emoji: "🍞", surah: "Al-Ghashiyah" },
  { arabic: "فِيل", transliteration: "fil", meaning: "elephant", emoji: "🐘", surah: "Al-Fil" },
  { arabic: "طَيْر", transliteration: "tayr", meaning: "bird", emoji: "🐦", surah: "Al-Fil" },
  { arabic: "إِبِل", transliteration: "ibil", meaning: "camels", emoji: "🐫", surah: "Al-Ghashiyah" },
  { arabic: "زَيْتُون", transliteration: "zaytun", meaning: "olives", emoji: "🫒", surah: "At-Tin" },
  { arabic: "إِنْسَان", transliteration: "insan", meaning: "human", emoji: "🧒", surah: "An-Nazi'at" },
  { arabic: "يَد", transliteration: "yad", meaning: "hand", emoji: "✋", surah: "Al-Masad" },
  { arabic: "عَيْن", transliteration: "'ayn", meaning: "eye", emoji: "👁️", surah: "Al-Ghashiyah" },
  { arabic: "لِسَان", transliteration: "lisan", meaning: "tongue", emoji: "👅", surah: "Al-Balad" },
  { arabic: "خَيْر", transliteration: "khayr", meaning: "good", emoji: "👍", surah: "Al-A'la" },
  { arabic: "شَرّ", transliteration: "sharr", meaning: "bad", emoji: "👎", surah: "Al-Bayyinah" },
  { arabic: "سَلَام", transliteration: "salam", meaning: "peace", emoji: "🕊️", surah: "Al-Qadr" },
  { arabic: "دِين", transliteration: "din", meaning: "religion", emoji: "🕌", surah: "Al-Infitar" },
  { arabic: "صَبْر", transliteration: "sabr", meaning: "patience", emoji: "🧘", surah: "Al-Balad" },
  { arabic: "حَقّ", transliteration: "haqq", meaning: "truth", emoji: "✅", surah: "An-Naba" },
  { arabic: "نَصْر", transliteration: "nasr", meaning: "victory", emoji: "🏆", surah: "An-Nasr" },
  { arabic: "شِتَاء", transliteration: "shita'", meaning: "winter", emoji: "❄️", surah: "Quraysh" },
  { arabic: "صَيْف", transliteration: "sayf", meaning: "summer", emoji: "🏖️", surah: "Quraysh" }
];

const surahLessons = [
  {
    name: "An-Naba",
    arabicName: "النَّبَأ",
    emoji: "🌄",
    intro: "Allah tells us about the great news and the lovely gifts He made for us.",
    words: [
      { arabic: "النَّبَأِ", transliteration: "an-naba'", meaning: "the great news", emoji: "📰", surah: "An-Naba", note: "People were asking about the big news Allah was sending." },
      { arabic: "الْأَرْضَ", transliteration: "al-ard", meaning: "the earth", emoji: "🌍", surah: "An-Naba", note: "Allah made the earth a calm, safe place for us to live." },
      { arabic: "الْجِبَالَ", transliteration: "al-jibal", meaning: "the mountains", emoji: "⛰️", surah: "An-Naba", note: "The mountains are like strong pegs that hold the earth steady." },
      { arabic: "اللَّيْلَ", transliteration: "al-layl", meaning: "the night", emoji: "🌃", surah: "An-Naba", note: "Allah made the night like a soft blanket for resting." },
      { arabic: "النَّهَارَ", transliteration: "an-nahar", meaning: "the day", emoji: "🌞", surah: "An-Naba", note: "Daytime is for going out, working, and being active." },
      { arabic: "مَّاءً", transliteration: "ma'an", meaning: "rainwater", emoji: "🌧️", surah: "An-Naba", note: "Allah sends down rain so grains, plants, and gardens can grow." }
    ]
  },
  {
    name: "Al-Alaq",
    arabicName: "العَلَق",
    emoji: "✒️",
    intro: "The first revealed words teach us to read, write, and remember Allah.",
    words: [
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: "your Lord", emoji: "🤲", surah: "Al-Alaq", note: "We begin reading by saying the name of our Lord." },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: "created", emoji: "🌱", surah: "Al-Alaq", note: "Allah is the One who created everything." },
      { arabic: "الْإِنسَانَ", transliteration: "al-insan", meaning: "the human", emoji: "🧒", surah: "Al-Alaq", note: "Allah created the human being with care." },
      { arabic: "عَلَّمَ", transliteration: "allama", meaning: "taught", emoji: "🎓", surah: "Al-Alaq", note: "Allah taught us things we did not know before." },
      { arabic: "الْقَلَمِ", transliteration: "al-qalam", meaning: "the pen", emoji: "✒️", surah: "Al-Alaq", note: "The pen is a gift that helps us write and learn." },
      { arabic: "صَلَّىٰ", transliteration: "salla", meaning: "prayed", emoji: "🕌", surah: "Al-Alaq", note: "Prayer is a special way to remember Allah." }
    ]
  },
  {
    name: "Al-Fil",
    arabicName: "الفِيل",
    emoji: "🐘",
    intro: "A short surah about the elephant and how Allah protected His house.",
    words: [
      { arabic: "الْفِيلِ", transliteration: "al-fil", meaning: "the elephant", emoji: "🐘", surah: "Al-Fil", note: "The story begins with the companions of the elephant." },
      { arabic: "كَيْدَهُمْ", transliteration: "kaydahum", meaning: "their plan", emoji: "🧩", surah: "Al-Fil", note: "Allah turned their tricky plan into a confused one." },
      { arabic: "طَيْرًا", transliteration: "tayran", meaning: "birds", emoji: "🐦", surah: "Al-Fil", note: "Allah sent birds in flocks as part of this story." },
      { arabic: "حِجَارَةٍ", transliteration: "hijaratin", meaning: "stones", emoji: "🪨", surah: "Al-Fil", note: "The surah mentions stones of hard clay." },
      { arabic: "سِجِّيلٍ", transliteration: "sijjilin", meaning: "hard clay", emoji: "🧱", surah: "Al-Fil", note: "Sijjil means baked, hard clay." },
      { arabic: "عَصْفٍ", transliteration: "asfin", meaning: "straw", emoji: "🌾", surah: "Al-Fil", note: "The surah compares what happened to them to eaten straw." }
    ]
  },
  {
    name: "Quraysh",
    arabicName: "قُرَيْش",
    emoji: "🕋",
    intro: "A short surah about the Quraysh tribe, their travels, and Allah's gifts.",
    words: [
      { arabic: "قُرَيْشٍ", transliteration: "quraysh", meaning: "the Quraysh", emoji: "🧭", surah: "Quraysh", note: "The Quraysh were the people living in Makkah." },
      { arabic: "رِحْلَةَ", transliteration: "rihlata", meaning: "journey", emoji: "🐪", surah: "Quraysh", note: "They had safe journeys for trade." },
      { arabic: "الشِّتَاءِ", transliteration: "ash-shita'", meaning: "the winter", emoji: "❄️", surah: "Quraysh", note: "Their travels happened in winter and summer." },
      { arabic: "الصَّيْفِ", transliteration: "as-sayf", meaning: "the summer", emoji: "☀️", surah: "Quraysh", note: "Summer was another time for their journeys." },
      { arabic: "الْبَيْتِ", transliteration: "al-bayt", meaning: "the House", emoji: "🕋", surah: "Quraysh", note: "The House means the Kaaba in Makkah." },
      { arabic: "الْجُوعِ", transliteration: "al-ju'", meaning: "hunger", emoji: "🍞", surah: "Quraysh", note: "Allah fed them and saved them from hunger." },
      { arabic: "الْخَوْفِ", transliteration: "al-khawf", meaning: "fear", emoji: "🕊️", surah: "Quraysh", note: "Allah made them safe instead of afraid." }
    ]
  },
  {
    name: "An-Nazi'at",
    arabicName: "النّازِعَات",
    emoji: "🌀",
    intro: "Allah reminds us of His power and asks us to listen to Him.",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawm", meaning: "day", emoji: "📅", note: "Allah tells us about a special day when everyone will remember their choices." },
      { arabic: "قُلُوبٌ", transliteration: "qulub", meaning: "hearts", emoji: "❤️", note: "Hearts will feel nervous that day, so let us be ready to meet Allah." },
      { arabic: "مُوسَىٰ", transliteration: "Musa", meaning: "Moses", emoji: "📜", note: "Allah tells the story of Prophet Musa to teach us to listen to Him." },
      { arabic: "اذْهَبْ", transliteration: "idhhab", meaning: "go", emoji: "🚶", note: "Allah told Musa to go and invite Pharaoh to turn back to Him." },
      { arabic: "نَادَىٰهُ", transliteration: "nada-hu", meaning: "called him", emoji: "📣", note: "Allah called to Musa in a special, holy valley." },
      { arabic: "الْجَنَّةَ", transliteration: "al-jannah", meaning: "Paradise", emoji: "🌳", note: "Allah promises Paradise as a loving home for people who are mindful of Him." }
    ]
  },
  {
    name: "Abasa",
    arabicName: "عَبَسَ",
    emoji: "🤗",
    intro: "Allah teaches us to welcome everyone and to listen to the reminder.",
    words: [
      { arabic: "عَبَسَ", transliteration: "abasa", meaning: "frowned", emoji: "😕", note: "Allah gently teaches us not to turn away from someone who wants to learn." },
      { arabic: "الْأَعْمَى", transliteration: "al-a'ma", meaning: "the blind man", emoji: "👁️", note: "A visitor who could not see came to the Prophet to learn, and Allah wants us to care about him." },
      { arabic: "الذِّكْرَى", transliteration: "adh-dhikra", meaning: "the reminder", emoji: "📖", note: "These verses are a reminder that can help us remember Allah." },
      { arabic: "الْمَاءَ", transliteration: "al-ma'", meaning: "the water", emoji: "💧", note: "Allah pours down water so plants can grow and we can have food." },
      { arabic: "حَبًّا", transliteration: "habban", meaning: "grain", emoji: "🌾", note: "Allah makes grain grow in the earth as food for us." },
      { arabic: "عِنَبًا", transliteration: "inaban", meaning: "grapes", emoji: "🍇", note: "Grapes are a sweet fruit Allah grows for us." }
    ]
  },
  {
    name: "At-Takwir",
    arabicName: "التَّكْوِير",
    emoji: "☀️",
    intro: "Allah shows us signs in the sun, stars, and sky, and tells us the Quran is a reminder.",
    words: [
      { arabic: "الشَّمْسُ", transliteration: "ash-shams", meaning: "the sun", emoji: "☀️", note: "Allah made the sun, and He has power over it." },
      { arabic: "النُّجُومُ", transliteration: "an-nujum", meaning: "the stars", emoji: "⭐", note: "Allah made countless stars and knows them all." },
      { arabic: "الْجِبَالُ", transliteration: "al-jibal", meaning: "the mountains", emoji: "⛰️", note: "The mountains are strong signs of Allah's power." },
      { arabic: "الْبِحَارُ", transliteration: "al-bihar", meaning: "the seas", emoji: "🌊", note: "The seas are huge, but Allah controls them." },
      { arabic: "الصُّبْحِ", transliteration: "as-subh", meaning: "the dawn", emoji: "🌅", note: "The dawn is a quiet sign that a new day has begun." },
      { arabic: "رَسُولٍ", transliteration: "rasulin", meaning: "a messenger", emoji: "📨", note: "Allah sent a noble messenger to bring the Quran to people." }
    ]
  },
  {
    name: "Al-Infitar",
    arabicName: "الانفطار",
    emoji: "✨",
    intro: "Allah tells us that the sky and stars are in His hands, and that our deeds are written.",
    words: [
      { arabic: "السَّمَاءُ", transliteration: "as-sama'", meaning: "the sky", emoji: "🌌", note: "The sky is in Allah's hands; it obeys Him." },
      { arabic: "الْكَوَاكِبُ", transliteration: "al-kawakib", meaning: "the stars", emoji: "🌠", note: "Allah made the stars and can scatter them by His command." },
      { arabic: "الْبِحَارُ", transliteration: "al-bihar", meaning: "the seas", emoji: "🌊", note: "Allah controls the seas and all their waves." },
      { arabic: "نَفْسٌ", transliteration: "nafs", meaning: "a soul", emoji: "🙂", note: "Allah knows each person's choices." },
      { arabic: "خَلَقَكَ", transliteration: "khalaqaka", meaning: "created you", emoji: "🌱", note: "Allah made you and gave you a beautiful shape." },
      { arabic: "كَاتِبِينَ", transliteration: "katibin", meaning: "recording", emoji: "✍️", note: "Angels write down what we do, and Allah knows it all." }
    ]
  },
  {
    name: "Al-Mutaffifin",
    arabicName: "المُطَفِّفِين",
    emoji: "⚖️",
    intro: "Allah teaches us to be fair and honest, and reminds us of His beautiful reward.",
    words: [
      { arabic: "كِتَابَ", transliteration: "kitab", meaning: "the record", emoji: "📖", note: "Our deeds are carefully written in Allah's record." },
      { arabic: "النَّاسُ", transliteration: "an-nas", meaning: "the people", emoji: "👥", note: "Everyone will stand before Allah, the Lord of the worlds." },
      { arabic: "عَظِيمٍ", transliteration: "'azim", meaning: "great", emoji: "⭐", note: "The day Allah mentioned is very important, so we take His words seriously." },
      { arabic: "وُجُوهِهِمْ", transliteration: "wujuhihim", meaning: "faces", emoji: "😊", note: "Good people will have bright, happy faces." },
      { arabic: "نَعِيمٍ", transliteration: "na'im", meaning: "pleasure", emoji: "😌", note: "Allah promises ease and joy to people who do good." },
      { arabic: "عَيْنًا", transliteration: "'aynan", meaning: "a spring", emoji: "💧", note: "Allah gives a pure, refreshing drink to those close to Him." }
    ]
  },
  {
    name: "Al-Inshiqaq",
    arabicName: "الانشقاق",
    emoji: "🌙",
    intro: "Allah tells us that the sky and earth obey Him, and that good deeds bring a lovely reward.",
    words: [
      { arabic: "السَّمَاءُ", transliteration: "as-sama'", meaning: "the sky", emoji: "🌌", note: "The sky listens to Allah and follows His command." },
      { arabic: "الْأَرْضُ", transliteration: "al-ard", meaning: "the earth", emoji: "🌍", note: "Allah made the earth and it obeys Him." },
      { arabic: "اللَّيْلِ", transliteration: "al-layl", meaning: "the night", emoji: "🌙", note: "Allah points to the night as one of His signs." },
      { arabic: "يَسِيرًا", transliteration: "yasiran", meaning: "easy", emoji: "😌", note: "For the person who did good, Allah makes the account easy." },
      { arabic: "مَسْرُورًا", transliteration: "masruran", meaning: "happy", emoji: "😊", note: "That good person returns to their family with happy news." },
      { arabic: "أَجْرٌ", transliteration: "ajr", meaning: "a reward", emoji: "🎁", note: "Allah gives a wonderful reward to those who believe and do good." }
    ]
  },
  {
    name: "Al-Buruj",
    arabicName: "البُرُوج",
    emoji: "🌠",
    intro: "This surah tells us about the starry sky and about Allah's care for believers.",
    words: [
      { arabic: "الْبُرُوجِ", transliteration: "al-buruj", meaning: "the great stars", emoji: "🌠", note: "Allah made a sky full of great stars." },
      { arabic: "جَنَّتٌ", transliteration: "jannat", meaning: "a garden", emoji: "🌳", note: "Allah prepares beautiful gardens for people who believe and do good." },
      { arabic: "الْأَنْهَارُ", transliteration: "al-anhar", meaning: "rivers", emoji: "🏞️", note: "Rivers flow in those gardens by Allah's kindness." },
      { arabic: "قُرْآنٌ", transliteration: "qur'an", meaning: "Qur'an", emoji: "📖", note: "This is an honored book that Allah sent as guidance." },
      { arabic: "الْغَفُورُ", transliteration: "al-ghafur", meaning: "the Forgiving", emoji: "🤲", note: "Allah loves to forgive people who turn back to Him." },
      { arabic: "الْوَدُودُ", transliteration: "al-wadud", meaning: "the Loving", emoji: "💛", note: "Allah is kind and cares for His friends." }
    ]
  },
  {
    name: "At-Tariq",
    arabicName: "الطَّارِق",
    emoji: "🌟",
    intro: "This surah points to the bright night star and tells us Allah is able to give life again.",
    words: [
      { arabic: "النَّجْمُ", transliteration: "an-najm", meaning: "the star", emoji: "🌟", note: "Allah swears by the bright star that appears at night." },
      { arabic: "نَفْسٍ", transliteration: "nafs", meaning: "a person", emoji: "🙂", note: "Every person has Allah's care and will return to Him." },
      { arabic: "حَافِظٌ", transliteration: "hafiz", meaning: "a protector", emoji: "🛡️", note: "Allah puts a protector over each soul." },
      { arabic: "مَّاءٍ", transliteration: "ma'", meaning: "water", emoji: "💧", note: "Allah created us from a tiny drop of water." },
      { arabic: "قُوَّةٍ", transliteration: "quwwa", meaning: "power", emoji: "💪", note: "Only Allah has true power." },
      { arabic: "نَاصِرٍ", transliteration: "nasir", meaning: "a helper", emoji: "🤝", note: "No one can help except Allah, the Kind." }
    ]
  },
  {
    name: "Al-A'la",
    arabicName: "الْأَعْلَى",
    emoji: "🙌",
    intro: "This surah teaches us to praise Allah, the Most High, and to remember the better life to come.",
    words: [
      { arabic: "سَبِّحِ", transliteration: "sabbih", meaning: "praise", emoji: "🙌", note: "We say how perfect and great Allah is." },
      { arabic: "اسْمَ", transliteration: "ism", meaning: "name", emoji: "🏷️", note: "Allah's beautiful name reminds us of Him." },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: "your Lord", emoji: "🤲", note: "Allah is our Lord who cares for us." },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: "created", emoji: "🌱", note: "Allah made everything, including us." },
      { arabic: "الْمَرْعَى", transliteration: "al-mar'a", meaning: "the pasture", emoji: "🌿", note: "Allah grows plants for animals and people." },
      { arabic: "خَيْرٌ", transliteration: "khayr", meaning: "better", emoji: "✨", note: "Allah says the Hereafter is better and lasts longer." }
    ]
  },
  {
    name: "Al-Ghashiyah",
    arabicName: "الغَاشِيَة",
    emoji: "☁️",
    intro: "Allah tells us to look at His creation and remember that He is kind, powerful, and fair.",
    words: [
      { arabic: "جَنَّةٍ", transliteration: "jannah", meaning: "Garden (Paradise)", emoji: "🌳", note: "Allah describes a lovely Garden for people who do good; it is a reward full of peace." },
      { arabic: "عَيْنٌ", transliteration: "ayn", meaning: "flowing spring", emoji: "💧", note: "In that Garden there is a spring that keeps flowing - a sign of Allah's generosity." },
      { arabic: "سُرُرٌ", transliteration: "surur", meaning: "couches", emoji: "🛋️", note: "The couches are raised high and comfortable; Allah knows how to give perfect rest." },
      { arabic: "أَكْوَابٌ", transliteration: "akwab", meaning: "cups", emoji: "🥤", note: "Cups are placed ready for everyone; everything there is prepared with care." },
      { arabic: "الْإِبِلِ", transliteration: "al-ibil", meaning: "camels", emoji: "🐫", note: "Allah asks us to look at the camel and think how wonderfully He made it." },
      { arabic: "السَّمَاءِ", transliteration: "as-sama", meaning: "sky", emoji: "☁️", note: "Allah raised the sky high above us; looking up can remind us of His greatness." }
    ]
  },
  {
    name: "Al-Fajr",
    arabicName: "الفَجْر",
    emoji: "🌅",
    intro: "Allah begins with the dawn and teaches us to care for orphans, feed the poor, and be fair.",
    words: [
      { arabic: "الْفَجْرِ", transliteration: "al-fajr", meaning: "dawn", emoji: "🌅", note: "Allah swears by the dawn, the gentle beginning of a brand-new day." },
      { arabic: "عَشْرٍ", transliteration: "ashr", meaning: "ten", emoji: "🔟", note: "Allah mentions ten special nights; time is a gift we can use for good." },
      { arabic: "الشَّفْعِ", transliteration: "ash-shaf'", meaning: "even number", emoji: "2️⃣", note: "Allah points to the even and the odd - even numbers can remind us of His order." },
      { arabic: "الْوَتْرِ", transliteration: "al-watr", meaning: "odd number", emoji: "1️⃣", note: "Allah also mentions the odd; everything around us follows His wise plan." },
      { arabic: "الْيَتِيمَ", transliteration: "al-yateem", meaning: "orphan", emoji: "🧒", note: "Allah tells us to honor and care for children whose parents are not with them." },
      { arabic: "طَعَامِ", transliteration: "ta'am", meaning: "food", emoji: "🍞", note: "Allah encourages feeding people who have little; sharing food is a kind deed." }
    ]
  },
  {
    name: "Al-Balad",
    arabicName: "البَلَد",
    emoji: "🏙️",
    intro: "This surah reminds us that Allah gave us eyes, a tongue, and lips, and that helping others matters.",
    words: [
      { arabic: "الْبَلَدِ", transliteration: "al-balad", meaning: "city", emoji: "🏙️", note: "Allah swears by this city, Makkah, a special and safe place." },
      { arabic: "وَالِدٍ", transliteration: "walidin", meaning: "father", emoji: "👨", note: "Allah mentions the father and child to remind us that family is a trust from Him." },
      { arabic: "عَيْنَيْنِ", transliteration: "aynayn", meaning: "two eyes", emoji: "👀", note: "Allah gave us two eyes to see His world; our senses are precious gifts." },
      { arabic: "لِسَانًا", transliteration: "lisanan", meaning: "tongue", emoji: "👅", note: "Allah gave us a tongue so we can speak gently and remember Him." },
      { arabic: "شَفَتَيْنِ", transliteration: "shafatayn", meaning: "two lips", emoji: "👄", note: "Allah made our lips too; every little part of us is created with care." },
      { arabic: "يَتِيمًا", transliteration: "yateeman", meaning: "orphan", emoji: "🧒", note: "Allah asks us to be especially kind to a child who needs extra care." }
    ]
  },
  {
    name: "Ash-Shams",
    arabicName: "الشَّمْس",
    emoji: "☀️",
    intro: "Allah swears by the sun, moon, day, and night, and teaches that a clean heart is the real success.",
    words: [
      { arabic: "الشَّمْسِ", transliteration: "ash-shams", meaning: "sun", emoji: "☀️", note: "Allah swears by the sun and its bright morning light." },
      { arabic: "الْقَمَرِ", transliteration: "al-qamar", meaning: "moon", emoji: "🌙", note: "Allah mentions the moon that follows the sun; both are part of His perfect order." },
      { arabic: "النَّهَارِ", transliteration: "an-nahar", meaning: "day", emoji: "🌞", note: "Allah swears by the day when its light spreads out." },
      { arabic: "اللَّيْلِ", transliteration: "al-layl", meaning: "night", emoji: "🌃", note: "Allah swears by the night when it covers the world; rest is a kindness from Him." },
      { arabic: "السَّمَاءِ", transliteration: "as-sama", meaning: "sky", emoji: "🌌", note: "Allah built the sky high above us - a sign of His strength and care." },
      { arabic: "الْأَرْضِ", transliteration: "al-ard", meaning: "earth", emoji: "🌍", note: "Allah spread the earth out as a home for us to live and learn on." }
    ]
  },
  {
    name: "Al-Lail",
    arabicName: "اللَّيْل",
    emoji: "🌙",
    intro: "Allah shows that night and day pass quickly, so we should give, share, and turn to Him.",
    words: [
      { arabic: "اللَّيْلِ", transliteration: "al-layl", meaning: "night", emoji: "🌙", note: "Allah swears by the night, a quiet time that belongs to Him." },
      { arabic: "النَّهَارِ", transliteration: "an-nahar", meaning: "day", emoji: "🌤️", note: "Allah also swears by the day when it shines clearly." },
      { arabic: "الذَّكَرَ", transliteration: "adh-dhakar", meaning: "male", emoji: "👦", note: "Allah says He created the male - every person is made by Him." },
      { arabic: "الْأُنثَى", transliteration: "al-untha", meaning: "female", emoji: "👧", note: "Allah created the female too; boys and girls are both precious to Him." },
      { arabic: "لَلْهُدَى", transliteration: "la-l-huda", meaning: "guidance", emoji: "🧭", note: "Allah says He shows the way; we can ask Him to guide our choices." },
      { arabic: "مَالُهُ", transliteration: "maluhu", meaning: "his wealth", emoji: "💰", note: "Allah reminds us that money is a trust - what counts is how we use it." }
    ]
  },
  {
    name: "Ad-Duha",
    arabicName: "الضُّحَى",
    emoji: "🌄",
    intro: "Allah comforts the Prophet and teaches us to be kind to orphans and to people who ask for help.",
    words: [
      { arabic: "الضُّحَى", transliteration: "ad-duha", meaning: "morning brightness", emoji: "🌄", note: "Allah swears by the bright morning; each new day is a fresh gift." },
      { arabic: "اللَّيْلِ", transliteration: "al-layl", meaning: "night", emoji: "🌌", note: "Allah mentions the quiet night too - rest is one of His gentle gifts." },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", meaning: "your Lord", emoji: "🤲", note: "Allah tells the Prophet that his Lord has not left him; Allah is always near." },
      { arabic: "يَتِيمًا", transliteration: "yateeman", meaning: "orphan", emoji: "🧒", note: "Allah reminds us to be kind and gentle with children who need extra care." },
      { arabic: "السَّائِلَ", transliteration: "as-sa'il", meaning: "one who asks", emoji: "🙋", note: "Allah says not to push away someone who asks for help; kind words matter." },
      { arabic: "فَحَدِّثْ", transliteration: "fahaddith", meaning: "tell (others)", emoji: "📣", note: "Allah tells us to share the good things He gives us, with thanks." }
    ]
  },
  {
    name: "Ash-Sharh",
    arabicName: "الشَّرْح",
    emoji: "🕊️",
    intro: "Allah reminds us that after every hard moment there is ease, and that we can always turn back to Him.",
    words: [
      { arabic: "صَدْرَكَ", transliteration: "sadraka", meaning: "your breast (heart)", emoji: "❤️", note: "Allah gave the Prophet a wide, calm heart - room for patience and good." },
      { arabic: "وِزْرَكَ", transliteration: "wizraka", meaning: "your burden", emoji: "🎒", note: "Allah lifted a heavy load from the Prophet; He can lighten our worries too." },
      { arabic: "ظَهْرَكَ", transliteration: "zahraka", meaning: "your back", emoji: "🦴", note: "Allah removed what weighed on his back; He knows when things feel heavy." },
      { arabic: "ذِكْرَكَ", transliteration: "dhikraka", meaning: "your good name", emoji: "🌟", note: "Allah raised the Prophet's name with honor; good character is a gift." },
      { arabic: "الْعُسْرِ", transliteration: "al-'usr", meaning: "hardship", emoji: "🌧️", note: "Allah says hard times are real, but they are not the end of the story." },
      { arabic: "يُسْرًا", transliteration: "yusra", meaning: "ease", emoji: "🌈", note: "Allah promises that ease comes with hardship - a gentle hope to hold onto." }
    ]
  },
  {
    name: "At-Tin",
    arabicName: "التِّين",
    emoji: "🫒",
    intro: "Allah swears by the fig and the olive and teaches that people who do good will be rewarded.",
    words: [
      { arabic: "التِّينِ", transliteration: "at-teen", meaning: "fig", emoji: "🍃", note: "Allah swears by the fig, a simple fruit He made." },
      { arabic: "الزَّيْتُونِ", transliteration: "az-zaytun", meaning: "olive", emoji: "🫒", note: "Allah also mentions the olive, another wholesome food He created." },
      { arabic: "الْبَلَدِ", transliteration: "al-balad", meaning: "city", emoji: "🏙️", note: "Allah points to this city, Makkah, and calls it safe and calm." },
      { arabic: "الْأَمِينِ", transliteration: "al-ameen", meaning: "secure (safe)", emoji: "🛡️", note: "Allah describes the city as secure; safety is a blessing from Him." },
      { arabic: "أَحْسَنِ", transliteration: "ahsan", meaning: "best", emoji: "✨", note: "Allah says He made people in the best way - something to be thankful for." },
      { arabic: "أَجْرٌ", transliteration: "ajrun", meaning: "reward", emoji: "🎁", note: "Allah promises a good, uninterrupted reward for those who believe and do kind deeds." }
    ]
  },
  {
    name: "Al-Qadr",
    arabicName: "القَدْر",
    emoji: "🌙",
    intro: "This surah tells us about a blessed night when Allah sent down the Qur'an.",
    words: [
      { arabic: "لَيْلَةِ", transliteration: "laylati", meaning: "night", emoji: "🌃", note: "Allah tells us the Qur'an came down on a very special night." },
      { arabic: "الْقَدْرِ", transliteration: "al-qadr", meaning: "decree", emoji: "✨", note: "This night is called the Night of Decree because Allah's gift is so great." },
      { arabic: "خَيْرٌ", transliteration: "khayr", meaning: "better", emoji: "🏆", note: "Allah says this night is better than many ordinary months." },
      { arabic: "أَلْفِ", transliteration: "alf", meaning: "thousand", emoji: "🔢", note: "Allah uses the number one thousand to show how precious this night is." },
      { arabic: "شَهْرٍ", transliteration: "shahr", meaning: "month", emoji: "📅", note: "The surah compares this one night with a thousand months." },
      { arabic: "سَلَامٌ", transliteration: "salam", meaning: "peace", emoji: "🕊️", note: "The night is described as peaceful until the light of dawn." }
    ]
  },
  {
    name: "Al-Bayyinah",
    arabicName: "البَيِّنَة",
    emoji: "📖",
    intro: "This surah explains that Allah's clear guidance comes with proofs and good news.",
    words: [
      { arabic: "الْكِتَابِ", transliteration: "al-kitab", meaning: "the Scripture", emoji: "📕", note: "Allah mentions the Scripture He gave to people before." },
      { arabic: "كُتُبٌ", transliteration: "kutub", meaning: "writings", emoji: "📜", note: "The scriptures contain writings that teach what is right." },
      { arabic: "قَيِّمَةٌ", transliteration: "qayyima", meaning: "correct", emoji: "✅", note: "Allah calls these writings correct because they guide people truly." },
      { arabic: "الدِّينَ", transliteration: "ad-din", meaning: "religion", emoji: "🕌", note: "Allah says the right religion is to worship Him sincerely." },
      { arabic: "جَنَّتُ", transliteration: "jannat", meaning: "garden", emoji: "🌳", note: "Believers who do good are promised lovely gardens." },
      { arabic: "خَيْرُ", transliteration: "khayr", meaning: "best", emoji: "🌟", note: "Allah calls the best of creatures those who believe and do good." }
    ]
  },
  {
    name: "Al-Zalzalah",
    arabicName: "الزَّلْزَلَة",
    emoji: "🌍",
    intro: "This surah reminds us that even the smallest good deed matters to Allah.",
    words: [
      { arabic: "الْأَرْضُ", transliteration: "al-ard", meaning: "the earth", emoji: "🌎", note: "Allah can shake the earth, and it will tell what happened on it." },
      { arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: "that Day", emoji: "📆", note: "This phrase points to the Day when Allah shows people the results of their deeds." },
      { arabic: "رَبَّكَ", transliteration: "rabbaka", meaning: "your Lord", emoji: "🤲", note: "Allah, your Lord, is the One who commands the earth." },
      { arabic: "يَعْمَلْ", transliteration: "ya'mal", meaning: "does", emoji: "✍️", note: "The surah says every good or bad action a person does matters." },
      { arabic: "ذَرَّةٍ", transliteration: "dharra", meaning: "atom", emoji: "⚛️", note: "Allah says even something as tiny as an atom is not forgotten." },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: "good", emoji: "💚", note: "A tiny good deed is precious to Allah, and He will show it." }
    ]
  },
  {
    name: "Al-Adiyat",
    arabicName: "العَادِيَات",
    emoji: "🐎",
    intro: "This surah asks us to be thankful and remember that Allah knows everything.",
    words: [
      { arabic: "صُبْحًا", transliteration: "subhan", meaning: "dawn", emoji: "🌅", note: "The surah describes riders arriving at dawn." },
      { arabic: "نَقْعًا", transliteration: "naq'an", meaning: "dust", emoji: "🌫️", note: "Their fast movement stirred up dust along the way." },
      { arabic: "جَمْعًا", transliteration: "jam'an", meaning: "together", emoji: "👥", note: "They came together in one place, as described in the surah." },
      { arabic: "الْإِنْسَانَ", transliteration: "al-insan", meaning: "people", emoji: "🧒", note: "Allah reminds people to be thankful to Him." },
      { arabic: "لِرَبِّهِ", transliteration: "li-rabbihi", meaning: "to his Lord", emoji: "🤲", note: "Every person will return to their Lord." },
      { arabic: "يَوْمَئِذٍ", transliteration: "yawma'idhin", meaning: "that Day", emoji: "📆", note: "On that Day, Allah knows everything about each person." }
    ]
  },
  {
    name: "Al-Qariah",
    arabicName: "القَارِعَة",
    emoji: "⚡",
    intro: "This surah describes a special Day when Allah will judge people fairly.",
    words: [
      { arabic: "الْقَارِعَةُ", transliteration: "al-qari'a", meaning: "the Striking Calamity", emoji: "🌩️", note: "This is the name Allah gives to the great Day described here." },
      { arabic: "يَوْمَ", transliteration: "yawm", meaning: "the Day", emoji: "📅", note: "The surah tells us what happens on that Day." },
      { arabic: "النَّاسُ", transliteration: "an-nas", meaning: "the people", emoji: "👥", note: "Allah describes people being spread out like moths on that Day." },
      { arabic: "كَالْفَرَاشِ", transliteration: "kal-farash", meaning: "like moths", emoji: "🦋", note: "The moth picture helps us imagine how people will be scattered." },
      { arabic: "الْجِبَالُ", transliteration: "al-jibal", meaning: "the mountains", emoji: "⛰️", note: "Allah says the mountains will become like soft, fluffy wool." },
      { arabic: "مَوَازِينُهُ", transliteration: "mawazinuhu", meaning: "scales", emoji: "⚖️", note: "The scales remind us that our good deeds matter to Allah." }
    ]
  },
  {
    name: "At-Takathur",
    arabicName: "التَّكَاثُر",
    emoji: "🔢",
    intro: "This surah teaches us not to chase more and more things, but to remember what really matters.",
    words: [
      { arabic: "كَلَّا", transliteration: "kalla", meaning: "No", emoji: "✋", note: "Allah gently warns us not to be distracted by wanting more and more." },
      { arabic: "تَعْلَمُونَ", transliteration: "ta'lamun", meaning: "know", emoji: "🧠", note: "Allah says people will come to know the truth." },
      { arabic: "عِلْمَ", transliteration: "'ilman", meaning: "knowledge", emoji: "📚", note: "Allah reminds us that real knowledge is knowing what truly matters." },
      { arabic: "الْيَقِينِ", transliteration: "al-yaqin", meaning: "certainty", emoji: "✅", note: "This surah calls sure knowledge 'the knowledge of certainty.'" },
      { arabic: "عَيْنَ", transliteration: "'ayn", meaning: "eye", emoji: "👁️", note: "Allah says people will see the result of their choices very clearly." },
      { arabic: "النَّعِيمِ", transliteration: "an-na'im", meaning: "pleasure", emoji: "🎁", note: "Allah will ask us about the good gifts He gave us in life." }
    ]
  },
  {
    name: "Al-Asr",
    arabicName: "العَصْر",
    emoji: "⏳",
    intro: "This short surah teaches us that faith, good deeds, truth, and patience help us succeed.",
    words: [
      { arabic: "وَالْعَصْرِ", transliteration: "wal-'asr", meaning: "time", emoji: "⌛", note: "Allah reminds us that time is precious." },
      { arabic: "خُسْرٍ", transliteration: "khusr", meaning: "loss", emoji: "📉", note: "Without faith and good deeds, people lose something important." },
      { arabic: "آمَنُوا", transliteration: "amanu", meaning: "believed", emoji: "🤲", note: "Believing in Allah is the first step in this surah's recipe for success." },
      { arabic: "وَعَمِلُوا", transliteration: "'amilu", meaning: "did", emoji: "✅", note: "Good actions matter, not just words." },
      { arabic: "بِالْحَقِّ", transliteration: "bil-haqq", meaning: "truth", emoji: "📖", note: "Allah tells us to encourage one another to be honest and truthful." },
      { arabic: "بِالصَّبْرِ", transliteration: "bil-sabr", meaning: "patience", emoji: "🧘", note: "Being patient when things are hard is something Allah loves." }
    ]
  },
  {
    name: "Al-Humazah",
    arabicName: "الهُمَزَة",
    emoji: "🗣️",
    intro: "This surah teaches us not to tease others or think money is everything.",
    words: [
      { arabic: "هُمَزَةٍ", transliteration: "humaza", meaning: "teaser", emoji: "🙄", note: "Allah warns us not to hurt others with teasing words." },
      { arabic: "لُمَزَةٍ", transliteration: "lumaza", meaning: "mocker", emoji: "😜", note: "The surah tells us not to laugh at people or put them down." },
      { arabic: "جَمَعَ", transliteration: "jama'a", meaning: "collects", emoji: "📥", note: "It describes someone who keeps gathering and counting his wealth." },
      { arabic: "مَالًا", transliteration: "malan", meaning: "wealth", emoji: "💰", note: "Money can be a gift, but it is not the most important thing." },
      { arabic: "يَحْسَبُ", transliteration: "yahsab", meaning: "thinks", emoji: "💭", note: "He wrongly thinks his money can make him live forever." },
      { arabic: "كَلَّا", transliteration: "kalla", meaning: "No", emoji: "✋", note: "Allah gently corrects that idea: wealth cannot make anyone live forever." }
    ]
  },
  {
    name: "Al-Ma'un",
    arabicName: "المَاعُون",
    emoji: "🤝",
    intro: "This surah teaches us to be kind, to pray with care, and to help others with little things.",
    words: [
      { arabic: "الْيَتِيمَ", transliteration: "al-yateem", meaning: "the orphan", emoji: "🧒", note: "Allah tells us to be kind to children whose parents have passed away." },
      { arabic: "طَعَامِ", transliteration: "ta'aam", meaning: "food", emoji: "🍚", note: "We should help give food to people who do not have enough." },
      { arabic: "الْمِسْكِينِ", transliteration: "al-miskeen", meaning: "the poor person", emoji: "🤲", note: "A needy person deserves our kindness and a helping hand." },
      { arabic: "صَلَاتِهِمْ", transliteration: "salaatihim", meaning: "their prayer", emoji: "🕌", note: "Allah loves it when we pray on time and with our whole heart." },
      { arabic: "سَاهُونَ", transliteration: "saahoon", meaning: "forgetful / careless", emoji: "😴", note: "This surah gently reminds us not to be careless about our prayers." },
      { arabic: "الْمَاعُونَ", transliteration: "al-maa'oon", meaning: "small acts of kindness", emoji: "🤝", note: "Ma'un means simple helpful things we can share, like lending a pencil or helping a neighbor." }
    ]
  },
  {
    name: "Al-Kawthar",
    arabicName: "الْكَوْثَر",
    emoji: "🌊",
    intro: "This short surah reminds us that Allah gives us many good gifts and that we should thank Him by praying.",
    words: [
      { arabic: "الْكَوْثَرَ", transliteration: "al-kawthar", meaning: "abundant good (a river in Paradise)", emoji: "🌊", note: "Allah gives His Prophet so many good things; Kawthar means plenty and a beautiful river." },
      { arabic: "أَعْطَيْنَاكَ", transliteration: "a'taynaka", meaning: "We gave you", emoji: "🎁", note: "Every good gift we have comes from Allah." },
      { arabic: "فَصَلِّ", transliteration: "fa-salli", meaning: "so pray", emoji: "🕌", note: "When Allah gives us something good, we thank Him by praying." },
      { arabic: "لِرَبِّكَ", transliteration: "li-rabbika", meaning: "to your Lord", emoji: "🙏", note: "Our prayers are for Allah, who cares for us and loves us." },
      { arabic: "وَانْحَرْ", transliteration: "wa-inhar", meaning: "sacrifice (worship for Allah)", emoji: "🤲", note: "This means doing a special act of worship just for Allah." },
      { arabic: "الْأَبْتَرُ", transliteration: "al-abtar", meaning: "cut off (without good)", emoji: "✂️", note: "The surah teaches that the one who hates the Prophet has no good left with Allah." }
    ]
  },
  {
    name: "Al-Kafirun",
    arabicName: "الْكَافِرُونَ",
    emoji: "🗣️",
    intro: "This surah teaches us to be clear and gentle about what we believe, and that everyone answers to Allah.",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: "say", emoji: "🗣️", note: "Allah teaches us to speak clearly and kindly about what we believe." },
      { arabic: "الْكَافِرُونَ", transliteration: "al-kaafiroon", meaning: "the disbelievers (people who do not believe)", emoji: "🙈", note: "This surah speaks gently to people who do not believe, inviting them to think." },
      { arabic: "لَا", transliteration: "laa", meaning: "no / not", emoji: "🚫", note: "This little word says 'no' - we do not worship anything besides Allah." },
      { arabic: "أَعْبُدُ", transliteration: "a'budu", meaning: "I worship", emoji: "🙏", note: "To worship means to love and obey Allah above everything else." },
      { arabic: "مَا", transliteration: "maa", meaning: "what", emoji: "❓", note: "This word asks 'what?' - we only worship what is truly worthy of worship." },
      { arabic: "دِينِ", transliteration: "deeni", meaning: "my religion / my way", emoji: "☪️", note: "The surah ends by saying: to you your way, and to me my way." }
    ]
  },
  {
    name: "An-Nasr",
    arabicName: "النَّصْر",
    emoji: "🏆",
    intro: "This surah tells us that when Allah gives victory and people come to Islam, we should thank and praise Him.",
    words: [
      { arabic: "نَصْرُ", transliteration: "nasru", meaning: "victory / help", emoji: "🏆", note: "Nasr means the help and victory that come from Allah." },
      { arabic: "النَّاسَ", transliteration: "an-naasa", meaning: "the people", emoji: "👥", note: "People came to learn about Islam in large numbers." },
      { arabic: "يَدْخُلُونَ", transliteration: "yadkhuloon", meaning: "they enter", emoji: "🚪", note: "This tells us people were entering Allah's religion, group by group." },
      { arabic: "أَفْوَاجًا", transliteration: "afwaajan", meaning: "in crowds", emoji: "👨‍👩‍👧‍👦", note: "Afwaj means groups or crowds coming together." },
      { arabic: "بِحَمْدِ", transliteration: "bi-hamdi", meaning: "with praise", emoji: "🙌", note: "When good things happen, we thank and praise Allah." },
      { arabic: "تَوَّابًا", transliteration: "tawwaaban", meaning: "ever forgiving", emoji: "💚", note: "Allah loves to forgive us when we turn back to Him." }
    ]
  },
  {
    name: "Al-Masad",
    arabicName: "المَسَد",
    emoji: "🪢",
    intro: "This surah tells the story of a man who was unkind to the Prophet and reminds us to use our money and words for good.",
    words: [
      { arabic: "يَدَا", transliteration: "yadaa", meaning: "two hands", emoji: "✋", note: "Our hands should be used for good deeds and helping others." },
      { arabic: "مَالُهُ", transliteration: "maaluhu", meaning: "his wealth", emoji: "💰", note: "Money cannot help us when we make bad choices; what matters is how we use it." },
      { arabic: "كَسَبَ", transliteration: "kasaba", meaning: "he earned", emoji: "💵", note: "Everything we earn is a gift from Allah, so we should use it well." },
      { arabic: "الْحَطَبِ", transliteration: "al-hatab", meaning: "firewood", emoji: "🪵", note: "The surah mentions carrying wood - a picture of hard work." },
      { arabic: "حَبْلٌ", transliteration: "hablun", meaning: "a rope", emoji: "🪢", note: "It describes a rope made of twisted fibers." },
      { arabic: "لَهَبٍ", transliteration: "lahabin", meaning: "flame", emoji: "🔥", note: "The surah mentions a bright flame to remind us that our choices matter." }
    ]
  },
  {
    name: "Al-Ikhlas",
    arabicName: "الإِخْلَاص",
    emoji: "1️⃣",
    intro: "This beautiful surah tells us that Allah is One, forever, and that nothing is like Him.",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: "say", emoji: "🗣️", note: "Allah tells us to say clearly who He is." },
      { arabic: "أَحَدٌ", transliteration: "ahadun", meaning: "One", emoji: "1️⃣", note: "Allah is One - there is only one God, and He is unique." },
      { arabic: "الصَّمَدُ", transliteration: "as-samadu", meaning: "the Eternal (the One we turn to)", emoji: "🏔️", note: "As-Samad means Allah is forever and we can always turn to Him." },
      { arabic: "يَلِدْ", transliteration: "yalid", meaning: "has children", emoji: "👶", note: "Allah does not have children - He made everything." },
      { arabic: "يُولَدْ", transliteration: "yoolad", meaning: "is born", emoji: "🎂", note: "Allah was never born; He has always been and always will be." },
      { arabic: "كُفُوًا", transliteration: "kufuwan", meaning: "equal / like", emoji: "⚖️", note: "Nothing and no one is equal to Allah." }
    ]
  },
  {
    name: "Al-Falaq",
    arabicName: "الفَلَق",
    emoji: "🌅",
    intro: "This surah is a gentle prayer asking Allah to keep us safe from harm, in the dark and from jealousy.",
    words: [
      { arabic: "أَعُوذُ", transliteration: "a'oodhu", meaning: "I seek refuge (protection)", emoji: "🛡️", note: "This means we ask Allah to keep us safe." },
      { arabic: "الْفَلَقِ", transliteration: "al-falaqi", meaning: "the daybreak", emoji: "🌅", note: "Falaq is the break of dawn - the start of a brand new day." },
      { arabic: "شَرِّ", transliteration: "sharri", meaning: "harm / evil", emoji: "🌑", note: "We ask Allah to keep us safe from anything that could hurt us." },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: "created", emoji: "🌍", note: "Allah made everything in the world, and He cares for it." },
      { arabic: "غَاسِقٍ", transliteration: "ghaasiqin", meaning: "darkness", emoji: "🌙", note: "This surah mentions the dark of night, and Allah protects us in the dark." },
      { arabic: "حَسَدَ", transliteration: "hasada", meaning: "envy / jealousy", emoji: "💚", note: "Envy is wishing for what others have; we ask Allah to keep our hearts clean." }
    ]
  },
  {
    name: "An-Nas",
    arabicName: "النَّاس",
    emoji: "👥",
    intro: "This surah asks Allah to protect our hearts from sneaky bad thoughts and reminds us that He is the King of all people.",
    words: [
      { arabic: "أَعُوذُ", transliteration: "a'oodhu", meaning: "I seek refuge (protection)", emoji: "🛡️", note: "We ask Allah to keep us safe and close to Him." },
      { arabic: "النَّاسِ", transliteration: "an-naasi", meaning: "the people", emoji: "👥", note: "An-Nas means the people - all of us, everywhere." },
      { arabic: "مَلِكِ", transliteration: "maliki", meaning: "the King", emoji: "👑", note: "Allah is the King of all people and everything." },
      { arabic: "إِلَٰهِ", transliteration: "ilaahi", meaning: "the God", emoji: "🙏", note: "Ilah means God - the One we worship and love." },
      { arabic: "الْوَسْوَاسِ", transliteration: "al-waswaasi", meaning: "the whisperer", emoji: "🤫", note: "This surah asks Allah to protect us from sneaky whispers that try to push us to do wrong." },
      { arabic: "صُدُورِ", transliteration: "sudoori", meaning: "hearts / chests", emoji: "❤️", note: "Allah knows what is in our hearts and keeps them pure." }
    ]
  }
];

surahLessons.forEach((lesson) => {
  lesson.words.forEach((word) => {
    if (!word.surah) {
      word.surah = lesson.name;
    }
  });
});

const words = [...baseWords, ...surahLessons.flatMap((lesson) => lesson.words)];

const correctPraise = [
  "Wonderful reading! 🌟",
  "You got it! 🎉",
  "MashAllah! ⭐",
  "Super star! 💫",
  "Great job! 👏"
];

const wrongComfort = [
  "Good try! 💛",
  "No worries, keep going! 🌈",
  "Nice effort! 🤗",
  "That's okay! ✨"
];

const results = [
  { min: 0, title: "You did it! 🎉", message: "Every word you read makes you stronger. Let's play again soon!" },
  { min: 5, title: "Great job! 🌟", message: "You are reading Arabic words so well. Keep practicing!" },
  { min: 8, title: "Amazing! 🏆", message: "MashAllah! Your Arabic reading is growing every day." },
  { min: 10, title: "Perfect star! ⭐", message: "Wow! You read every word perfectly. You are a superstar!" }
];

const el = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  surahScreen: document.getElementById("surah-screen"),
  surahResultScreen: document.getElementById("surah-result-screen"),
  trackerScreen: document.getElementById("tracker-screen"),
  startBtn: document.getElementById("start-btn"),
  surahModeBtn: document.getElementById("surah-mode-btn"),
  trackerModeBtn: document.getElementById("tracker-mode-btn"),
  homeBtn: document.getElementById("home-btn"),
  nextBtn: document.getElementById("next-btn"),
  againBtn: document.getElementById("again-btn"),
  resultHomeBtn: document.getElementById("result-home-btn"),
  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),
  score: document.getElementById("score"),
  questionArea: document.getElementById("question-area"),
  questionLabel: document.getElementById("question-label"),
  promptEmoji: document.getElementById("prompt-emoji"),
  promptText: document.getElementById("prompt-text"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  feedbackEmoji: document.getElementById("feedback-emoji"),
  feedbackTitle: document.getElementById("feedback-title"),
  answerReveal: document.getElementById("answer-reveal"),
  answerExtra: document.getElementById("answer-extra"),
  answerSurah: document.getElementById("answer-surah"),
  listenBtn: document.getElementById("listen-btn"),
  resultTitle: document.getElementById("result-title"),
  resultStars: document.getElementById("result-stars"),
  finalScore: document.getElementById("final-score"),
  resultMessage: document.getElementById("result-message"),
  learnedList: document.getElementById("learned-list"),
  surahHomeBtn: document.getElementById("surah-home-btn"),
  surahBackBtn: document.getElementById("surah-back-btn"),
  surahPicker: document.getElementById("surah-picker"),
  surahActivity: document.getElementById("surah-activity"),
  surahList: document.getElementById("surah-list"),
  surahTitle: document.getElementById("surah-title"),
  surahArabic: document.getElementById("surah-arabic"),
  surahIntro: document.getElementById("surah-intro"),
  surahProgressText: document.getElementById("surah-progress-text"),
  surahProgressFill: document.getElementById("surah-progress-fill"),
  wordBank: document.getElementById("word-bank"),
  matchZones: document.getElementById("match-zones"),
  surahFeedback: document.getElementById("surah-feedback"),
  surahFeedbackEmoji: document.getElementById("surah-feedback-emoji"),
  surahFeedbackTitle: document.getElementById("surah-feedback-title"),
  surahAnswerReveal: document.getElementById("surah-answer-reveal"),
  surahAnswerExtra: document.getElementById("surah-answer-extra"),
  surahAnswerNote: document.getElementById("surah-answer-note"),
  surahListenBtn: document.getElementById("surah-listen-btn"),
  surahResultTitle: document.getElementById("surah-result-title"),
  surahResultMessage: document.getElementById("surah-result-message"),
  surahResultScore: document.getElementById("surah-result-score"),
  surahResultName: document.getElementById("surah-result-name"),
  surahLearnedList: document.getElementById("surah-learned-list"),
  surahAnotherBtn: document.getElementById("surah-another-btn"),
  surahResultHomeBtn: document.getElementById("surah-result-home-btn"),
  trackerHomeBtn: document.getElementById("tracker-home-btn"),
  trackerCount: document.getElementById("tracker-count"),
  trackerProgressText: document.getElementById("tracker-progress-text"),
  trackerProgressFill: document.getElementById("tracker-progress-fill"),
  trackerScene: document.getElementById("tracker-scene"),
  fruitLayer: document.getElementById("fruit-layer"),
  milestoneList: document.getElementById("milestone-list"),
  trackerGrid: document.getElementById("tracker-grid"),
  trackerMessage: document.getElementById("tracker-message"),
  trackerResetBtn: document.getElementById("tracker-reset-btn"),
  childNameInput: document.getElementById("child-name"),
  rememberName: document.getElementById("remember-name"),
  treeGreeting: document.getElementById("tree-greeting"),
  treeBanner: document.getElementById("tree-banner"),
  confetti: document.getElementById("confetti"),
  bubbles: document.getElementById("bubbles")
};

let roundWords = [];
let usedWordIndexes = [];
let currentIndex = 0;
let score = 0;
let answeredWords = [];
let locked = false;

let activeLesson = null;
let lessonWords = [];
let selectedWordIndex = null;
let draggedWordIndex = null;
let matchedCount = 0;
let matchedWords = [];
let surahComplete = false;
let memorizedSurahs = loadMemorized();
let childName = loadChildName();
el.childNameInput.value = childName;

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(screen) {
  [el.startScreen, el.quizScreen, el.resultScreen, el.surahScreen, el.surahResultScreen, el.trackerScreen].forEach((s) => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function speakArabic(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ar-SA";
  utterance.rate = 0.65;
  utterance.pitch = 1.05;
  const arabicVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => /^ar/i.test(voice.lang) || /arabic/i.test(voice.name));
  if (arabicVoice) {
    utterance.voice = arabicVoice;
  }
  window.speechSynthesis.speak(utterance);
}

function pickRoundWords() {
  if (usedWordIndexes.length + WORDS_PER_ROUND > words.length) {
    usedWordIndexes = [];
  }
  const pool = words.map((_, i) => i).filter((i) => !usedWordIndexes.includes(i));
  const picked = shuffle(pool).slice(0, WORDS_PER_ROUND);
  picked.forEach((i) => usedWordIndexes.push(i));
  return picked.map((i) => words[i]);
}

function makeOptions(correctWord, mode) {
  const distractors = shuffle(
    words.filter((w) => w.meaning !== correctWord.meaning && w.arabic !== correctWord.arabic)
  ).slice(0, 3);
  const all = shuffle([correctWord, ...distractors]);
  return all.map((word) => ({
    word,
    isCorrect: word.meaning === correctWord.meaning,
    label: mode === "find" ? word.arabic : `${word.emoji} ${word.meaning}`,
    isArabic: mode === "find"
  }));
}

function showQuestion() {
  locked = false;
  el.feedback.classList.add("hidden");
  el.questionArea.classList.remove("hidden");

  const word = roundWords[currentIndex];
  const mode = currentIndex % 2 === 0 ? "find" : "read";

  el.progressText.textContent = `Word ${currentIndex + 1} of ${roundWords.length}`;
  el.progressFill.style.width = `${((currentIndex + 1) / roundWords.length) * 100}%`;
  el.score.textContent = `⭐ ${score}`;

  if (mode === "find") {
    el.questionLabel.textContent = "👆 Tap the Arabic word for:";
    el.promptEmoji.textContent = word.emoji;
    el.promptText.textContent = word.meaning;
    el.promptText.classList.remove("arabic");
    el.promptText.removeAttribute("dir");
    el.promptText.removeAttribute("lang");
  } else {
    el.questionLabel.textContent = "📖 What does this word mean?";
    el.promptEmoji.textContent = "";
    el.promptText.textContent = word.arabic;
    el.promptText.classList.add("arabic");
    el.promptText.setAttribute("dir", "rtl");
    el.promptText.setAttribute("lang", "ar");
  }

  const options = makeOptions(word, mode);
  el.options.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${option.isArabic ? " arabic" : ""}`;
    button.textContent = option.label;
    if (option.isArabic) {
      button.setAttribute("dir", "rtl");
      button.setAttribute("lang", "ar");
    }
    button.addEventListener("click", () => handleAnswer(option, button));
    el.options.appendChild(button);
  });
}

function handleAnswer(option, button) {
  if (locked) return;
  locked = true;

  const word = roundWords[currentIndex];
  const correct = option.isCorrect;

  Array.from(el.options.children).forEach((child) => {
    child.disabled = true;
    if (child === button) {
      child.classList.add(correct ? "correct" : "wrong");
    }
    if (!correct && child.getAttribute("lang") === "ar" && child.textContent === word.arabic) {
      child.classList.add("correct");
    }
  });

  if (correct) {
    score += 1;
    el.score.textContent = `⭐ ${score}`;
    launchConfetti();
  }

  answeredWords.push(word);
  el.questionArea.classList.add("hidden");
  el.feedback.classList.remove("hidden");
  el.feedbackEmoji.textContent = correct ? "🎉" : "💛";
  el.feedbackTitle.textContent = correct
    ? correctPraise[Math.floor(Math.random() * correctPraise.length)]
    : wrongComfort[Math.floor(Math.random() * wrongComfort.length)];
  el.answerReveal.textContent = word.arabic;
  el.answerExtra.textContent = `${word.transliteration} = "${word.meaning}" ${word.emoji}`;
  el.answerSurah.textContent = `📍 Surah ${word.surah}`;
  speakArabic(word.arabic);
  el.nextBtn.textContent = currentIndex === roundWords.length - 1 ? "See Results 🏆" : "Next Word ➜";
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex >= roundWords.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function appendWordItem(list, word, detail) {
  const li = document.createElement("li");
  const arabic = document.createElement("span");
  arabic.className = "word";
  arabic.textContent = word.arabic;
  arabic.setAttribute("dir", "rtl");
  arabic.setAttribute("lang", "ar");
  const meaning = document.createElement("span");
  meaning.className = "meaning";
  meaning.textContent = `${word.emoji} ${word.meaning}`;
  const source = document.createElement("small");
  source.textContent = detail;
  meaning.appendChild(source);
  const speakButton = document.createElement("button");
  speakButton.type = "button";
  speakButton.className = "speak-btn";
  speakButton.textContent = "🔊";
  speakButton.setAttribute("aria-label", `Listen to ${word.arabic}`);
  speakButton.addEventListener("click", () => speakArabic(word.arabic));
  li.append(arabic, meaning, speakButton);
  list.appendChild(li);
}

function showResults() {
  const tier = results.slice().reverse().find((r) => score >= r.min) || results[0];
  el.resultTitle.textContent = tier.title;
  el.resultMessage.textContent = tier.message;
  el.finalScore.textContent = `You got ${score} out of ${roundWords.length}!`;
  const stars = Math.max(1, Math.round((score / roundWords.length) * 5));
  el.resultStars.textContent = "⭐".repeat(stars);

  el.learnedList.innerHTML = "";
  answeredWords.forEach((word) => appendWordItem(el.learnedList, word, `Surah ${word.surah}`));

  launchConfetti();
  showScreen(el.resultScreen);
}

function startGame() {
  score = 0;
  currentIndex = 0;
  answeredWords = [];
  roundWords = pickRoundWords();
  showScreen(el.quizScreen);
  showQuestion();
}

function renderSurahList() {
  el.surahList.innerHTML = "";
  surahLessons
    .filter((lesson) => lesson.words.length >= MIN_SURAH_WORDS)
    .slice()
    .sort((a, b) => SURAH_ORDER.indexOf(a.name) - SURAH_ORDER.indexOf(b.name))
    .forEach((lesson) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "surah-card-btn";
      const icon = document.createElement("span");
      icon.className = "surah-card-icon";
      icon.textContent = lesson.emoji;
      const name = document.createElement("strong");
      name.textContent = lesson.name;
      const arabicName = document.createElement("span");
      arabicName.className = "surah-card-arabic";
      arabicName.textContent = lesson.arabicName;
      arabicName.setAttribute("dir", "rtl");
      arabicName.setAttribute("lang", "ar");
      const count = document.createElement("small");
      count.textContent = `${lesson.words.length} words to match`;
      card.append(icon, name, arabicName, count);
      card.addEventListener("click", () => startSurahLesson(lesson));
      el.surahList.appendChild(card);
    });
}

function showSurahPicker() {
  activeLesson = null;
  lessonWords = [];
  selectedWordIndex = null;
  draggedWordIndex = null;
  matchedCount = 0;
  matchedWords = [];
  surahComplete = false;
  el.surahPicker.classList.remove("hidden");
  el.surahActivity.classList.add("hidden");
  renderSurahList();
  showScreen(el.surahScreen);
}

function updateSurahProgress() {
  el.surahProgressText.textContent = `Matched ${matchedCount} of ${lessonWords.length} words`;
  el.surahProgressFill.style.width = `${(matchedCount / lessonWords.length) * 100}%`;
}

function clearSelectedWord() {
  selectedWordIndex = null;
  Array.from(el.wordBank.children).forEach((child) => child.classList.remove("selected"));
}

function selectWord(index) {
  if (matchedCount >= lessonWords.length) return;
  const tile = el.wordBank.children[index];
  if (!tile || tile.classList.contains("matched")) return;
  clearSelectedWord();
  selectedWordIndex = index;
  tile.classList.add("selected");
  speakArabic(lessonWords[index].arabic);
}

function showSurahFeedback(word, correct) {
  el.surahFeedback.classList.remove("hidden");
  el.surahFeedbackEmoji.textContent = correct ? "🎉" : "💛";
  el.surahFeedbackTitle.textContent = correct ? "Great match!" : "Good try!";
  el.surahAnswerReveal.textContent = word.arabic;
  el.surahAnswerExtra.textContent = correct
    ? `${word.transliteration} = "${word.meaning}" ${word.emoji}`
    : `This word means "${word.meaning}". Try that card!`;
  el.surahAnswerNote.textContent = `📝 ${word.note}`;
}

function attemptMatch(wordIndex, zoneIndex) {
  if (wordIndex === null || zoneIndex === null) return;
  const word = lessonWords[wordIndex];
  const tile = el.wordBank.children[wordIndex];
  const zone = el.matchZones.children[zoneIndex];
  if (!word || !tile || !zone || tile.classList.contains("matched") || zone.classList.contains("matched")) return;

  clearSelectedWord();

  if (wordIndex === zoneIndex) {
    tile.classList.add("matched");
    tile.disabled = true;
    zone.classList.add("matched");
    zone.disabled = true;
    zone.textContent = `✅ ${zone.textContent}`;
    matchedCount += 1;
    matchedWords.push(word);
    updateSurahProgress();
    showSurahFeedback(word, true);
    speakArabic(word.arabic);
    launchConfetti();
    if (matchedCount === lessonWords.length && !surahComplete) {
      surahComplete = true;
      setTimeout(() => {
        if (surahComplete && activeLesson) {
          showSurahResults();
        }
      }, 1400);
    }
  } else {
    zone.classList.add("wrong");
    setTimeout(() => zone.classList.remove("wrong"), 600);
    showSurahFeedback(word, false);
    speakArabic(word.arabic);
  }
}

function renderWordBank() {
  el.wordBank.innerHTML = "";
  lessonWords.forEach((word, index) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "word-tile";
    tile.textContent = word.arabic;
    tile.setAttribute("dir", "rtl");
    tile.setAttribute("lang", "ar");
    tile.draggable = true;
    tile.addEventListener("dragstart", (event) => {
      if (tile.classList.contains("matched")) {
        event.preventDefault();
        return;
      }
      draggedWordIndex = index;
      event.dataTransfer.setData("text/plain", String(index));
      selectWord(index);
    });
    tile.addEventListener("click", () => selectWord(index));
    el.wordBank.appendChild(tile);
  });
}

function renderMatchZones() {
  el.matchZones.innerHTML = "";
  lessonWords.forEach((word, index) => {
    const zone = document.createElement("button");
    zone.type = "button";
    zone.className = "match-zone";
    zone.textContent = `${word.emoji} ${word.meaning}`;
    zone.addEventListener("dragover", (event) => {
      if (zone.classList.contains("matched")) return;
      event.preventDefault();
      zone.classList.add("drag-over");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      const raw = event.dataTransfer.getData("text/plain");
      const sourceIndex = raw !== "" ? Number(raw) : draggedWordIndex;
      attemptMatch(sourceIndex, index);
      draggedWordIndex = null;
    });
    zone.addEventListener("click", () => {
      if (selectedWordIndex !== null) {
        attemptMatch(selectedWordIndex, index);
      }
    });
    el.matchZones.appendChild(zone);
  });
}

function startSurahLesson(lesson) {
  activeLesson = lesson;
  lessonWords = shuffle(lesson.words.slice());
  selectedWordIndex = null;
  draggedWordIndex = null;
  matchedCount = 0;
  matchedWords = [];
  surahComplete = false;

  el.surahTitle.textContent = `Surah ${lesson.name}`;
  el.surahArabic.textContent = lesson.arabicName;
  el.surahIntro.textContent = lesson.intro;
  el.surahFeedback.classList.add("hidden");
  el.surahPicker.classList.add("hidden");
  el.surahActivity.classList.remove("hidden");

  renderWordBank();
  renderMatchZones();
  updateSurahProgress();
  showScreen(el.surahScreen);
}

function showSurahResults() {
  el.surahResultTitle.textContent = "Surah star! 🏆";
  el.surahResultMessage.textContent = `MashAllah! You matched every word from Surah ${activeLesson.name}.`;
  el.surahResultScore.textContent = `You matched ${matchedCount} out of ${lessonWords.length} words!`;
  el.surahResultName.textContent = `Surah ${activeLesson.name}`;
  el.surahLearnedList.innerHTML = "";
  matchedWords.forEach((word) => appendWordItem(el.surahLearnedList, word, word.note));
  launchConfetti();
  showScreen(el.surahResultScreen);
}

function loadMemorized() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((name, index) => SURAH_ORDER.includes(name) && parsed.indexOf(name) === index);
  } catch (error) {
    return [];
  }
}

function saveMemorized() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memorizedSurahs));
  } catch (error) {}
}

function loadChildName() {
  try {
    return (localStorage.getItem(NAME_STORAGE_KEY) || "").slice(0, 24);
  } catch (error) {
    return "";
  }
}

function saveChildName() {
  try {
    if (el.rememberName.checked && childName) {
      localStorage.setItem(NAME_STORAGE_KEY, childName);
    } else {
      localStorage.removeItem(NAME_STORAGE_KEY);
    }
  } catch (error) {}
}

function shortSurahName(name) {
  const parts = name.split("-");
  return parts.length > 1 ? parts[1] : name;
}

function updateTreeGreeting() {
  el.treeGreeting.textContent = `Assalamu alaikum, ${childName || "friend"}! 👋`;
}

function updateTreeBanner(count) {
  const prefix = childName ? `${childName}, ` : "";
  if (count === 0) {
    el.treeBanner.textContent = `${prefix}your tree is waiting for its first fruit! 🌱`;
  } else if (count === SURAH_ORDER.length) {
    el.treeBanner.textContent = `${prefix}MashAllah! Your whole Juz is growing! 🏆`;
  } else {
    const latest = memorizedSurahs[memorizedSurahs.length - 1];
    const number = SURAH_ORDER.indexOf(latest) + 1;
    el.treeBanner.textContent = `${prefix}latest fruit: ${number}. ${latest} 🌟`;
  }
}

function handleNameChange() {
  childName = el.childNameInput.value.replace(/\s+/g, " ").trim().slice(0, 24);
  saveChildName();
  updateTreeGreeting();
  updateTreeBanner(memorizedSurahs.length);
}

function growthStage(count) {
  if (count >= 37) return 5;
  if (count >= 20) return 4;
  if (count >= 10) return 3;
  if (count >= 5) return 2;
  return 1;
}

function fruitPosition(index, total) {
  const angle = index * 2.399963 + 0.6;
  const radius = 9 + Math.sqrt((index + 1) / total) * 33;
  return {
    left: 50 + Math.cos(angle) * radius,
    top: 43 + Math.sin(angle) * radius * 0.72
  };
}

function renderFruits() {
  el.fruitLayer.innerHTML = "";
  SURAH_ORDER.forEach((name, index) => {
    const done = memorizedSurahs.includes(name);
    const fruit = document.createElement("button");
    fruit.type = "button";
    fruit.className = `fruit${done ? " memorised" : ""}`;
    fruit.textContent = done ? FRUIT_EMOJIS[index % FRUIT_EMOJIS.length] : "";
    const position = fruitPosition(index, SURAH_ORDER.length);
    fruit.style.left = `${position.left}%`;
    fruit.style.top = `${position.top}%`;
    fruit.title = `${index + 1}. Surah ${name} - ${done ? "memorised!" : "not memorised yet"}`;
    fruit.setAttribute("aria-label", fruit.title);
    if (done) {
      const label = document.createElement("span");
      label.className = "fruit-label";
      label.textContent = `${index + 1}. ${shortSurahName(name)}`;
      fruit.appendChild(label);
    }
    fruit.addEventListener("click", () => toggleMemorized(name));
    el.fruitLayer.appendChild(fruit);
  });
}

function renderMilestones(count) {
  el.milestoneList.innerHTML = "";
  MILESTONES.forEach((milestone) => {
    const unlocked = count >= milestone.count;
    const badge = document.createElement("div");
    badge.className = `milestone${unlocked ? " unlocked" : ""}`;
    const emoji = document.createElement("span");
    emoji.className = "milestone-emoji";
    emoji.textContent = unlocked ? milestone.emoji : "🔒";
    const label = document.createElement("span");
    label.className = "milestone-label";
    label.textContent = milestone.label;
    const goal = document.createElement("small");
    goal.textContent = `${milestone.count} surahs`;
    badge.append(emoji, label, goal);
    el.milestoneList.appendChild(badge);
  });
}

function renderTrackerGrid() {
  el.trackerGrid.innerHTML = "";
  SURAH_ORDER.forEach((name, index) => {
    const lesson = surahLessons.find((item) => item.name === name);
    const done = memorizedSurahs.includes(name);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `tracker-chip${done ? " done" : ""}`;
    chip.setAttribute("aria-pressed", String(done));
    chip.title = `${lesson.emoji} Surah ${name} - ${done ? "memorised" : "not memorised yet"}`;
    const number = document.createElement("span");
    number.className = "tracker-chip-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const label = document.createElement("span");
    label.textContent = name;
    const state = document.createElement("span");
    state.className = "tracker-chip-state";
    state.textContent = done ? "✅" : "◻️";
    chip.append(number, label, state);
    chip.addEventListener("click", () => toggleMemorized(name));
    el.trackerGrid.appendChild(chip);
  });
}

function renderTracker(message) {
  const count = memorizedSurahs.length;
  const total = SURAH_ORDER.length;
  el.trackerCount.textContent = `🍎 ${count}/${total}`;
  el.trackerProgressText.textContent = `${count} of ${total} surahs memorised`;
  el.trackerProgressFill.style.width = `${(count / total) * 100}%`;
  el.trackerScene.dataset.stage = String(growthStage(count));
  el.trackerScene.classList.toggle("complete", count === total);
  updateTreeGreeting();
  updateTreeBanner(count);
  if (message) {
    el.trackerMessage.textContent = message;
  } else if (count === 0) {
    el.trackerMessage.textContent = "Tap a surah below to grow your first fruit! 🌱";
  } else if (count === total) {
    el.trackerMessage.textContent = "MashAllah! You memorised the whole Juz! 🏆🌳";
  } else {
    el.trackerMessage.textContent = `Your tree is growing! ${total - count} more surahs to go. 🌿`;
  }
  renderFruits();
  renderMilestones(count);
  renderTrackerGrid();
}

function showTracker() {
  renderTracker();
  showScreen(el.trackerScreen);
}

function toggleMemorized(name) {
  const before = memorizedSurahs.length;
  const wasDone = memorizedSurahs.includes(name);
  if (wasDone) {
    memorizedSurahs = memorizedSurahs.filter((item) => item !== name);
  } else {
    memorizedSurahs = [...memorizedSurahs, name];
  }
  saveMemorized();

  const after = memorizedSurahs.length;
  const total = SURAH_ORDER.length;
  const reached = MILESTONES.find((milestone) => before < milestone.count && after >= milestone.count);
  let message;
  let celebrations = 0;

  if (!wasDone && reached) {
    message = `Milestone unlocked: ${reached.emoji} ${reached.label}! MashAllah! 🎉`;
    celebrations = 2;
  } else if (!wasDone) {
    message = `Surah ${name} is now in your garden! 🍎`;
    celebrations = 1;
  } else {
    message = `Surah ${name} is ready to grow again. 🌱`;
  }

  if (after === total && before !== after) {
    message = "MashAllah! You memorised the whole Juz! 🏆🌳";
    celebrations = 3;
  }

  for (let i = 0; i < celebrations; i++) {
    launchConfetti();
  }
  renderTracker(message);
}

function resetTracker() {
  if (!window.confirm("Start your Juz garden again?")) return;
  memorizedSurahs = [];
  saveMemorized();
  renderTracker("A fresh garden! Tap a surah to plant your first fruit. 🌱");
}

function launchConfetti() {
  const colors = ["#ff6b9d", "#ffd23f", "#2fbf8f", "#6c5ce7", "#4fc3f7"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    el.confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 3400);
  }
}

function createBubbles() {
  for (let i = 0; i < 14; i++) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = 20 + Math.random() * 70;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${10 + Math.random() * 14}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    el.bubbles.appendChild(bubble);
  }
}

el.startBtn.addEventListener("click", startGame);
el.surahModeBtn.addEventListener("click", showSurahPicker);
el.trackerModeBtn.addEventListener("click", showTracker);
el.listenBtn.addEventListener("click", () => speakArabic(el.answerReveal.textContent));
el.homeBtn.addEventListener("click", () => showScreen(el.startScreen));
el.nextBtn.addEventListener("click", nextQuestion);
el.againBtn.addEventListener("click", startGame);
el.resultHomeBtn.addEventListener("click", () => showScreen(el.startScreen));
el.surahHomeBtn.addEventListener("click", () => showScreen(el.startScreen));
el.surahBackBtn.addEventListener("click", showSurahPicker);
el.surahListenBtn.addEventListener("click", () => speakArabic(el.surahAnswerReveal.textContent));
el.surahAnotherBtn.addEventListener("click", showSurahPicker);
el.surahResultHomeBtn.addEventListener("click", () => showScreen(el.startScreen));
el.trackerHomeBtn.addEventListener("click", () => showScreen(el.startScreen));
el.trackerResetBtn.addEventListener("click", resetTracker);
el.childNameInput.addEventListener("input", handleNameChange);
el.rememberName.addEventListener("change", handleNameChange);

createBubbles();
showScreen(el.startScreen);
