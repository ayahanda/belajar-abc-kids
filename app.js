// Data Belajar ABC untuk Kanak-kanak (Bahasa Melayu & Bahasa Inggeris)
const abcData = [
    { letter: 'A', ms: { word: 'ayam', emoji: '🐔' }, en: { word: 'apple', emoji: '🍎' } },
    { letter: 'B', ms: { word: 'bola', emoji: '⚽' }, en: { word: 'ball', emoji: '⚽' } },
    { letter: 'C', ms: { word: 'ceri', emoji: '🍒' }, en: { word: 'cherry', emoji: '🍒' } },
    { letter: 'D', ms: { word: 'dinosor', emoji: '🦖' }, en: { word: 'dinosaur', emoji: '🦖' } },
    { letter: 'E', ms: { word: 'enjin', emoji: '🚂' }, en: { word: 'elephant', emoji: '🐘' } },
    { letter: 'F', ms: { word: 'feri', emoji: '🛳️' }, en: { word: 'fish', emoji: '🐟' } },
    { letter: 'G', ms: { word: 'gajah', emoji: '🐘' }, en: { word: 'giraffe', emoji: '🦒' } },
    { letter: 'H', ms: { word: 'harimau', emoji: '🐯' }, en: { word: 'horse', emoji: '🐴' } },
    { letter: 'I', ms: { word: 'itik', emoji: '🦆' }, en: { word: 'ice cream', emoji: '🍦' } },
    { letter: 'J', ms: { word: 'jagung', emoji: '🌽' }, en: { word: 'jelly', emoji: '🍮' } },
    { letter: 'K', ms: { word: 'kucing', emoji: '🐱' }, en: { word: 'kangaroo', emoji: '🦘' } },
    { letter: 'L', ms: { word: 'lori', emoji: '🚚' }, en: { word: 'lion', emoji: '🦁' } },
    { letter: 'M', ms: { word: 'monyet', emoji: '🐒' }, en: { word: 'monkey', emoji: '🐒' } },
    { letter: 'N', ms: { word: 'nanas', emoji: '🍍' }, en: { word: 'nest', emoji: '🪹' } },
    { letter: 'O', ms: { word: 'oren', emoji: '🍊' }, en: { word: 'orange', emoji: '🍊' } },
    { letter: 'P', ms: { word: 'payung', emoji: '☂️' }, en: { word: 'penguin', emoji: '🐧' } },
    { letter: 'Q', ms: { word: 'quran', emoji: '📖' }, en: { word: 'queen', emoji: '👸' } },
    { letter: 'R', ms: { word: 'rusa', emoji: '🦌' }, en: { word: 'rabbit', emoji: '🐰' } },
    { letter: 'S', ms: { word: 'singa', emoji: '🦁' }, en: { word: 'sun', emoji: '☀️' } },
    { letter: 'T', ms: { word: 'topi', emoji: '🧢' }, en: { word: 'tiger', emoji: '🐯' } },
    { letter: 'U', ms: { word: 'ulat', emoji: '🐛' }, en: { word: 'umbrella', emoji: '☂️' } },
    { letter: 'V', ms: { word: 'van', emoji: '🚐' }, en: { word: 'van', emoji: '🚐' } },
    { letter: 'W', ms: { word: 'wisel', emoji: '📢' }, en: { word: 'watermelon', emoji: '🍉' } },
    { letter: 'X', ms: { word: 'xilofon', emoji: '🪘' }, en: { word: 'xylophone', emoji: '🪘' } },
    { letter: 'Y', ms: { word: 'yoyo', emoji: '🪀' }, en: { word: 'yoyo', emoji: '🪀' } },
    { letter: 'Z', ms: { word: 'zirafah', emoji: '🦒' }, en: { word: 'zebra', emoji: '🦓' } }
];

const extraQuizData = [
    { letter: 'B', ms: { word: 'baju', emoji: '👕' }, en: { word: 'shirt', emoji: '👕' } },
    { letter: 'B', ms: { word: 'buku', emoji: '📖' }, en: { word: 'book', emoji: '📖' } },
    { letter: 'B', ms: { word: 'bas', emoji: '🚌' }, en: { word: 'bus', emoji: '🚌' } },
    { letter: 'C', ms: { word: 'cili', emoji: '🌶️' }, en: { word: 'chili', emoji: '🌶️' } },
    { letter: 'D', ms: { word: 'dadu', emoji: '🎲' }, en: { word: 'dice', emoji: '🎲' } },
    { letter: 'D', ms: { word: 'daun', emoji: '🍃' }, en: { word: 'leaf', emoji: '🍃' } },
    { letter: 'G', ms: { word: 'gigi', emoji: '🦷' }, en: { word: 'tooth', emoji: '🦷' } },
    { letter: 'G', ms: { word: 'guli', emoji: '🔮' }, en: { word: 'toy', emoji: '🔮' } },
    { letter: 'K', ms: { word: 'kaki', emoji: '🦶' }, en: { word: 'foot', emoji: '🦶' } },
    { letter: 'K', ms: { word: 'kopi', emoji: '☕' }, en: { word: 'cup', emoji: '☕' } },
    { letter: 'K', ms: { word: 'kasut', emoji: '👟' }, en: { word: 'shoe', emoji: '👟' } },
    { letter: 'L', ms: { word: 'labu', emoji: '🎃' }, en: { word: 'melon', emoji: '🍈' } },
    { letter: 'M', ms: { word: 'mata', emoji: '👁️' }, en: { word: 'eye', emoji: '👁️' } },
    { letter: 'M', ms: { word: 'madu', emoji: '🍯' }, en: { word: 'honey', emoji: '🍯' } },
    { letter: 'N', ms: { word: 'nasi', emoji: '🍚' }, en: { word: 'rice', emoji: '🍚' } },
    { letter: 'P', ms: { word: 'paku', emoji: '📌' }, en: { word: 'nail', emoji: '📌' } },
    { letter: 'P', ms: { word: 'pintu', emoji: '🚪' }, en: { word: 'door', emoji: '🚪' } },
    { letter: 'R', ms: { word: 'roti', emoji: '🍞' }, en: { word: 'bread', emoji: '🍞' } },
    { letter: 'S', ms: { word: 'susu', emoji: '🥛' }, en: { word: 'milk', emoji: '🥛' } },
    { letter: 'S', ms: { word: 'sudu', emoji: '🥄' }, en: { word: 'spoon', emoji: '🥄' } },
    { letter: 'T', ms: { word: 'tali', emoji: '🎗️' }, en: { word: 'rope', emoji: '🎗️' } },
    { letter: 'A', ms: { word: 'awan', emoji: '☁️' }, en: { word: 'cloud', emoji: '☁️' } },
    { letter: 'A', ms: { word: 'api', emoji: '🔥' }, en: { word: 'fire', emoji: '🔥' } },
    { letter: 'I', ms: { word: 'ikan', emoji: '🐟' }, en: { word: 'fish', emoji: '🐟' } }
];

const syllableData = {
    a: [
        { syllable: 'ba', ms: { word: 'baju', emoji: '👕' }, en: { word: 'shirt', emoji: '👕' } },
        { syllable: 'ca', ms: { word: 'cawan', emoji: '☕' }, en: { word: 'cup', emoji: '☕' } },
        { syllable: 'da', ms: { word: 'dadu', emoji: '🎲' }, en: { word: 'dice', emoji: '🎲' } },
        { syllable: 'ga', ms: { word: 'gajah', emoji: '🐘' }, en: { word: 'elephant', emoji: '🐘' } },
        { syllable: 'ha', ms: { word: 'hari', emoji: '📅' }, en: { word: 'calendar', emoji: '📅' } },
        { syllable: 'ja', ms: { word: 'jari', emoji: '☝️' }, en: { word: 'finger', emoji: '☝️' } },
        { syllable: 'ka', ms: { word: 'kaki', emoji: '🦶' }, en: { word: 'leg', emoji: '🦶' } },
        { syllable: 'la', ms: { word: 'labu', emoji: '🎃' }, en: { word: 'pumpkin', emoji: '🎃' } },
        { syllable: 'ma', ms: { word: 'mata', emoji: '👁️' }, en: { word: 'eye', emoji: '👁️' } },
        { syllable: 'na', ms: { word: 'nasi', emoji: '🍚' }, en: { word: 'rice', emoji: '🍚' } },
        { syllable: 'pa', ms: { word: 'paku', emoji: '📌' }, en: { word: 'nail', emoji: '📌' } },
        { syllable: 'ra', ms: { word: 'raja', emoji: '👑' }, en: { word: 'king', emoji: '👑' } },
        { syllable: 'sa', ms: { word: 'satu', emoji: '1️⃣' }, en: { word: 'one', emoji: '1️⃣' } },
        { syllable: 'ta', ms: { word: 'tali', emoji: '🎗️' }, en: { word: 'rope', emoji: '🎗️' } }
    ],
    i: [
        { syllable: 'bi', ms: { word: 'biru', emoji: '🔵' }, en: { word: 'blue', emoji: '🔵' } },
        { syllable: 'ci', ms: { word: 'cili', emoji: '🌶️' }, en: { word: 'chili', emoji: '🌶️' } },
        { syllable: 'di', ms: { word: 'dinding', emoji: '🧱' }, en: { word: 'wall', emoji: '🧱' } },
        { syllable: 'gi', ms: { word: 'gigi', emoji: '🦷' }, en: { word: 'tooth', emoji: '🦷' } },
        { syllable: 'hi', ms: { word: 'hidung', emoji: '👃' }, en: { word: 'nose', emoji: '👃' } },
        { syllable: 'ji', ms: { word: 'jiran', emoji: '🏡' }, en: { word: 'neighbor', emoji: '🏡' } },
        { syllable: 'ki', ms: { word: 'kicap', emoji: '🍼' }, en: { word: 'soy sauce', emoji: '🍼' } },
        { syllable: 'li', ms: { word: 'lilin', emoji: '🕯️' }, en: { word: 'candle', emoji: '🕯️' } },
        { syllable: 'mi', ms: { word: 'minum', emoji: '🥤' }, en: { word: 'drink', emoji: '🥤' } },
        { syllable: 'ni', ms: { word: 'nila', emoji: '🎨' }, en: { word: 'indigo', emoji: '🎨' } },
        { syllable: 'pi', ms: { word: 'pipi', emoji: '😊' }, en: { word: 'cheek', emoji: '😊' } },
        { syllable: 'ri', ms: { word: 'ribut', emoji: '🌪️' }, en: { word: 'storm', emoji: '🌪️' } },
        { syllable: 'si', ms: { word: 'sikat', emoji: '🪮' }, en: { word: 'comb', emoji: '🪮' } },
        { syllable: 'ti', ms: { word: 'tiga', emoji: '3️⃣' }, en: { word: 'three', emoji: '3️⃣' } }
    ],
    u: [
        { syllable: 'bu', ms: { word: 'buku', emoji: '📖' }, en: { word: 'book', emoji: '📖' } },
        { syllable: 'cu', ms: { word: 'cucu', emoji: '👶' }, en: { word: 'grandchild', emoji: '👶' } },
        { syllable: 'du', ms: { word: 'duri', emoji: '🌵' }, en: { word: 'rose/thorn', emoji: '🌵' } },
        { syllable: 'gu', ms: { word: 'guli', emoji: '🔮' }, en: { word: 'marble', emoji: '🔮' } },
        { syllable: 'hu', ms: { word: 'hujan', emoji: '🌧️' }, en: { word: 'rain', emoji: '🌧️' } },
        { syllable: 'ju', ms: { word: 'jual', emoji: '💰' }, en: { word: 'sell', emoji: '💰' } },
        { syllable: 'ku', ms: { word: 'kuda', emoji: '🐴' }, en: { word: 'horse', emoji: '🐴' } },
        { syllable: 'lu', ms: { word: 'luka', emoji: '🩹' }, en: { word: 'wound', emoji: '🩹' } },
        { syllable: 'mu', ms: { word: 'muka', emoji: '👦' }, en: { word: 'face', emoji: '👦' } },
        { syllable: 'nu', ms: { word: 'nuri', emoji: '🦜' }, en: { word: 'parrot', emoji: '🦜' } },
        { syllable: 'pu', ms: { word: 'pula', emoji: '🏝️' }, en: { word: 'island', emoji: '🏝️' } },
        { syllable: 'ru', ms: { word: 'rusa', emoji: '🦌' }, en: { word: 'deer', emoji: '🦌' } },
        { syllable: 'su', ms: { word: 'susu', emoji: '🥛' }, en: { word: 'milk', emoji: '🥛' } },
        { syllable: 'tu', ms: { word: 'tupai', emoji: '🐿️' }, en: { word: 'squirrel', emoji: '🐿️' } }
    ],
    e: [
        { syllable: 'be', ms: { word: 'beca', emoji: '🛺' }, en: { word: 'trishaw', emoji: '🛺' } },
        { syllable: 'ce', ms: { word: 'cerek', emoji: '🫖' }, en: { word: 'kettle', emoji: '🫖' } },
        { syllable: 'de', ms: { word: 'dewan', emoji: '🏛️' }, en: { word: 'hall', emoji: '🏛️' } },
        { syllable: 'ge', ms: { word: 'gelas', emoji: '🥛' }, en: { word: 'glass', emoji: '🥛' } },
        { syllable: 'he', ms: { word: 'hebat', emoji: '👍' }, en: { word: 'great', emoji: '👍' } },
        { syllable: 'je', ms: { word: 'jeti', emoji: '⚓' }, en: { word: 'jetty', emoji: '⚓' } },
        { syllable: 'ke', ms: { word: 'keju', emoji: '🧀' }, en: { word: 'cheese', emoji: '🧀' } },
        { syllable: 'le', ms: { word: 'lebah', emoji: '🐝' }, en: { word: 'bee', emoji: '🐝' } },
        { syllable: 'me', ms: { word: 'meja', emoji: '🧱' }, en: { word: 'table', emoji: '🧱' } },
        { syllable: 'ne', ms: { word: 'nenek', emoji: '👵' }, en: { word: 'grandmother', emoji: '👵' } },
        { syllable: 'pe', ms: { word: 'peta', emoji: '🗺️' }, en: { word: 'map', emoji: '🗺️' } },
        { syllable: 're', ms: { word: 'reban', emoji: '🏚️' }, en: { word: 'coop', emoji: '🏚️' } },
        { syllable: 'se', ms: { word: 'seluar', emoji: '👖' }, en: { word: 'pants', emoji: '👖' } },
        { syllable: 'te', ms: { word: 'teko', emoji: '🫖' }, en: { word: 'teapot', emoji: '🫖' } }
    ],
    o: [
        { syllable: 'bo', ms: { word: 'bola', emoji: '⚽' }, en: { word: 'ball', emoji: '⚽' } },
        { syllable: 'co', ms: { word: 'coklat', emoji: '🍫' }, en: { word: 'chocolate', emoji: '🍫' } },
        { syllable: 'do', ms: { word: 'dobi', emoji: '🧺' }, en: { word: 'laundry', emoji: '🧺' } },
        { syllable: 'go', ms: { word: 'gol', emoji: '🥅' }, en: { word: 'goal', emoji: '🥅' } },
        { syllable: 'ho', ms: { word: 'hoki', emoji: '' }, en: { word: 'hockey', emoji: '' } },
        { syllable: 'jo', ms: { word: 'johan', emoji: '🏆' }, en: { word: 'champion', emoji: '🏆' } },
        { syllable: 'ko', ms: { word: 'kopi', emoji: '☕' }, en: { word: 'coffee', emoji: '☕' } },
        { syllable: 'lo', ms: { word: 'lori', emoji: '🚚' }, en: { word: 'lorry', emoji: '🚚' } },
        { syllable: 'mo', ms: { word: 'monyet', emoji: '🐒' }, en: { word: 'monkey', emoji: '🐒' } },
        { syllable: 'no', ms: { word: 'nota', emoji: '📝' }, en: { word: 'note', emoji: '📝' } },
        { syllable: 'po', ms: { word: 'polis', emoji: '👮' }, en: { word: 'police', emoji: '👮' } },
        { syllable: 'ro', ms: { word: 'roti', emoji: '🍞' }, en: { word: 'bread', emoji: '🍞' } },
        { syllable: 'so', ms: { word: 'sofa', emoji: '🛋️' }, en: { word: 'sofa', emoji: '🛋️' } },
        { syllable: 'to', ms: { word: 'topi', emoji: '🧢' }, en: { word: 'hat', emoji: '🧢' } }
    ]
};

// Keadaan Aplikasi (App State)
let currentLanguage = 'ms'; // 'ms' atau 'en'
let currentCategory = 'abc'; // 'abc' atau '123'
let currentSyllableVowel = 'a';
let learnVoiceMode = 'letter'; // 'letter' atau 'word'
let isMuted = false;
let activeTab = 'learn';
let currentLetterIdx = 0;
let quizScore = 0;
let quizCorrectLetter = '';
let quizQuestionVoiceText = '';
let currentQuizMode = 'upper';
let currentScreen = 'main'; // 'main', 'category', 'content'
let voices = [];
let audioCtx = null;

// Anagram quiz state
let anagramWord = '';
let anagramAnswer = [];
let anagramUserAnswer = []; // each slot: { letter, tileEl } or null

// Split syllable quiz state
let currentSplitItem = null; // { syllable, remaining, word, emoji }


const numberData = [
    { number: '1', ms: { word: 'satu epal', emoji: '🍎', hand: '☝️', countEmoji: '🍎' }, en: { word: 'one apple', emoji: '🍎', hand: '☝️', countEmoji: '🍎' } },
    { number: '2', ms: { word: 'dua bola', emoji: '⚽', hand: '✌️', countEmoji: '⚽⚽' }, en: { word: 'two balls', emoji: '⚽', hand: '✌️', countEmoji: '⚽⚽' } },
    { number: '3', ms: { word: 'tiga ceri', emoji: '🍒', hand: '🤟', countEmoji: '🍒🍒🍒' }, en: { word: 'three cherries', emoji: '🍒', hand: '🤟', countEmoji: '🍒🍒🍒' } },
    { number: '4', ms: { word: 'empat dinosor', emoji: '🦖', hand: '🍀', countEmoji: '🦖🦖🦖🦖' }, en: { word: 'four dinosaurs', emoji: '🦖', hand: '🍀', countEmoji: '🦖🦖🦖🦖' } },
    { number: '5', ms: { word: 'lima enjin', emoji: '🚂', hand: '🖐️', countEmoji: '🚂🚂🚂🚂🚂' }, en: { word: 'five engines', emoji: '🚂', hand: '🖐️', countEmoji: '🚂🚂🚂🚂🚂' } },
    { number: '6', ms: { word: 'enam ikan', emoji: '🐟', hand: '🐝', countEmoji: '🐟🐟🐟🐟🐟🐟' }, en: { word: 'six fish', emoji: '🐟', hand: '🐝', countEmoji: '🐟🐟🐟🐟🐟🐟' } },
    { number: '7', ms: { word: 'tujuh zirafah', emoji: '🦒', hand: '🌈', countEmoji: '🦒🦒🦒🦒🦒🦒🦒' }, en: { word: 'seven giraffes', emoji: '🦒', hand: '🌈', countEmoji: '🦒🦒🦒🦒🦒🦒🦒' } },
    { number: '8', ms: { word: 'lapan bintang', emoji: '⭐', hand: '🐙', countEmoji: '⭐⭐⭐⭐⭐⭐⭐⭐' }, en: { word: 'eight stars', emoji: '⭐', hand: '🐙', countEmoji: '⭐⭐⭐⭐⭐⭐⭐⭐' } },
    { number: '9', ms: { word: 'sembilan belon', emoji: '🎈', hand: '🎈', countEmoji: '🎈🎈🎈🎈🎈🎈🎈🎈🎈' }, en: { word: 'nine balloons', emoji: '🎈', hand: '🎈', countEmoji: '🎈🎈🎈🎈🎈🎈🎈🎈🎈' } },
    { number: '10', ms: { word: 'sepuluh bunga', emoji: '🌸', hand: '👐', countEmoji: '🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸' }, en: { word: 'ten flowers', emoji: '🌸', hand: '👐', countEmoji: '🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸' } }
];

const numberWords = {
    ms: ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'lapan', 'sembilan', 'sepuluh'],
    en: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
};

const jawiData = [
    { letter: 'ا', name: 'Alif', ms: { word: 'arnab', emoji: '🐇' }, en: { word: 'rabbit', emoji: '🐇' }, arabicName: 'ألف' },
    { letter: 'ب', name: 'Ba', ms: { word: 'bola', emoji: '⚽' }, en: { word: 'ball', emoji: '⚽' }, arabicName: 'باء' },
    { letter: 'ت', name: 'Ta', ms: { word: 'tembikai', emoji: '🍉' }, en: { word: 'watermelon', emoji: '🍉' }, arabicName: 'تاء' },
    { letter: 'ث', name: 'Tsa', ms: { word: 'salji', emoji: '❄️' }, en: { word: 'snow', emoji: '❄️' }, arabicName: 'ثاء' },
    { letter: 'ج', name: 'Jim', ms: { word: 'jagung', emoji: '🌽' }, en: { word: 'corn', emoji: '🌽' }, arabicName: 'جيم' },
    { letter: 'ح', name: 'Ha', ms: { word: 'hakim', emoji: '👨‍⚖️' }, en: { word: 'judge', emoji: '👨‍⚖️' }, arabicName: 'حاء' },
    { letter: 'خ', name: 'Kha', ms: { word: 'khemah', emoji: '⛺' }, en: { word: 'tent', emoji: '⛺' }, arabicName: 'خاء' },
    { letter: 'د', name: 'Dal', ms: { word: 'duri', emoji: '🌵' }, en: { word: 'thorn', emoji: '🌵' }, arabicName: 'dal' },
    { letter: 'ذ', name: 'Dzal', ms: { word: 'dzikir', emoji: '🧎' }, en: { word: 'remembrance', emoji: '🧎' }, arabicName: 'ذال' },
    { letter: 'ر', name: 'Ra', ms: { word: 'roti', emoji: '🍞' }, en: { word: 'bread', emoji: '🍞' }, arabicName: 'راء' },
    { letter: 'ز', name: 'Zai', ms: { word: 'zirafah', emoji: '🦒' }, en: { word: 'giraffe', emoji: '🦒' }, arabicName: 'زاي' },
    { letter: 'س', name: 'Sin', ms: { word: 'susu', emoji: '🥛' }, en: { word: 'milk', emoji: '🥛' }, arabicName: 'سين' },
    { letter: 'ش', name: 'Syin', ms: { word: 'syampu', emoji: '🧴' }, en: { word: 'shampoo', emoji: '🧴' }, arabicName: 'شين' },
    { letter: 'ص', name: 'Sad', ms: { word: 'sabun', emoji: '🧼' }, en: { word: 'soap', emoji: '🧼' }, arabicName: 'صad' },
    { letter: 'ض', name: 'Dhad', ms: { word: 'dhab', emoji: '🦎' }, en: { word: 'lizard', emoji: '🦎' }, arabicName: 'ضاد' },
    { letter: 'ط', name: 'Tho', ms: { word: 'tabib', emoji: '🧑‍⚕️' }, en: { word: 'doctor', emoji: '🧑‍⚕️' }, arabicName: 'طاء' },
    { letter: 'ظ', name: 'Zho', ms: { word: 'zharf', emoji: '✉️' }, en: { word: 'envelope', emoji: '✉️' }, arabicName: 'ظاء' },
    { letter: 'ع', name: 'Ain', ms: { word: 'askar', emoji: '🪖' }, en: { word: 'soldier', emoji: '🪖' }, arabicName: 'عين' },
    { letter: 'غ', name: 'Ghain', ms: { word: 'gazal', emoji: '🦌' }, en: { word: 'gazelle', emoji: '🦌' }, arabicName: 'غين' },
    { letter: 'ف', name: 'Fa', ms: { word: 'feri', emoji: '🛳️' }, en: { word: 'ferry', emoji: '🛳️' }, arabicName: 'فاء' },
    { letter: 'ق', name: 'Qaf', ms: { word: 'quran', emoji: '📖' }, en: { word: 'Quran', emoji: '📖' }, arabicName: 'قاف' },
    { letter: 'ك', name: 'Kaf', ms: { word: 'kereta', emoji: '🚗' }, en: { word: 'car', emoji: '🚗' }, arabicName: 'كاف' },
    { letter: 'ل', name: 'Lam', ms: { word: 'lori', emoji: '🚚' }, en: { word: 'lorry', emoji: '🚚' }, arabicName: 'لام' },
    { letter: 'م', name: 'Mim', ms: { word: 'meja', emoji: '🧱' }, en: { word: 'table', emoji: '🧱' }, arabicName: 'ميم' },
    { letter: 'ن', name: 'Nun', ms: { word: 'nanas', emoji: '🍍' }, en: { word: 'pineapple', emoji: '🍍' }, arabicName: 'نون' },
    { letter: 'و', name: 'Wau', ms: { word: 'wau', emoji: '🪁' }, en: { word: 'kite', emoji: '🪁' }, arabicName: 'واو' },
    { letter: 'ه', name: 'Ha', ms: { word: 'hadiah', emoji: '🎁' }, en: { word: 'gift', emoji: '🎁' }, arabicName: 'هاء' },
    { letter: 'ي', name: 'Ya', ms: { word: 'yoyo', emoji: '🪀' }, en: { word: 'yoyo', emoji: '🪀' }, arabicName: 'ياء' }
];

// Keadaan Melakar (Canvas Tracing State)
const canvas = document.getElementById('traceCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let strokeColor = '#FF5A5F';
let brushSize = 20;
let isEraser = false;

// Kitaran Warna Kad ABC
const cardColors = ['c-pink', 'c-blue', 'c-green', 'c-yellow', 'c-orange', 'c-purple'];

// Inisialisasi Apabila Laman Dimuatkan
window.addEventListener('DOMContentLoaded', () => {
    // Muat turun suara untuk TTS
    loadVoices();
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Bina gelembung terapung di latar belakang
    initBubbles();

    // Bina grid belajar ABC
    initAbcGrid();

    // Sediakan Canvas
    initCanvas();

    // Isi pilihan huruf untuk melakar
    initTraceSelector();

    // Terjemahkan elemen statik berdasarkan bahasa lalai
    updateStaticTranslations();
    updateModeSelectorLabels();
});

// ================= INI: GELEMBUNG BELON LATAR BELAKANG =================
function initBubbles() {
    const bubbleBg = document.getElementById('bubbleBg');
    const bubbleCount = 12;
    
    for (let i = 0; i < bubbleCount; i++) {
        createBubble(bubbleBg);
    }
}

function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Saiz rawak
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Lokasi mendatar rawak
    bubble.style.left = `${Math.random() * 100}%`;
    
    // Kelajuan rawak
    const duration = Math.random() * 10 + 8;
    bubble.style.animationDuration = `${duration}s`;
    
    // Kelewatan rawak
    bubble.style.animationDelay = `${Math.random() * 8}s`;
    
    container.appendChild(bubble);

    // Kitar semula gelembung
    bubble.addEventListener('animationiteration', () => {
        bubble.style.left = `${Math.random() * 100}%`;
    });
}

// ================= SUARA & KESAN BUNYI (SPEECH & AUDIO API) =================

// Muat turun pilihan suara TTS yang disokong peranti
function loadVoices() {
    if (!window.speechSynthesis) return;
    voices = window.speechSynthesis.getVoices();
}

// Inisialisasi Audio Context secara lazy untuk mengelakkan sekatan pelayar
function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Sebut Teks Menggunakan Web Speech API (Dinyahaktifkan mengikut permintaan pengguna)
function speakText(text, lang) {
    if (currentCategory === 'syllable') {
        speakSyllableWord(text, lang);
    } else {
        // TTS dinyahaktifkan untuk memastikan hanya fail audio tempatan (assets) digunakan.
        console.log("TTS System Disabled. Requested text:", text);
    }
}

// Kesan Bunyi Sintetik Menggunakan Web Audio API (Tiada fail audio luaran diperlukan!)
function playSynthSound(type) {
    if (isMuted) return;
    try {
        initAudioContext();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'click') {
            // Bunyi Pop Kecil
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(1000, now + 0.08);
            
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        } 
        else if (type === 'success') {
            // Bunyi Melodi Gembira (Chime)
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
            osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
            
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
        } 
        else if (type === 'error') {
            // Bunyi Oops (Buzz)
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.linearRampToValueAtTime(100, now + 0.25);
            
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        }
    } catch (e) {
        console.error("Audio error:", e);
    }
}

// Tukar status mute suara
function toggleMute() {
    isMuted = !isMuted;
    const muteIcon = document.getElementById('muteIcon');
    const btnMute = document.getElementById('btnMute');
    
    if (isMuted) {
        muteIcon.textContent = '🔇';
        btnMute.title = "Aktifkan Suara";
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    } else {
        muteIcon.textContent = '🔊';
        btnMute.title = "Senyapkan Suara";
        playSynthSound('click');
    }
}

// ================= TAB 1: MOD BELAJAR ABC =================

// Bina kad huruf A-Z, nombor 1-10, atau Hijaiyah secara dinamik
function initAbcGrid() {
    const grid = document.getElementById('abcGrid');
    grid.innerHTML = '';
    const isAbc = currentCategory === 'abc';
    const is123 = currentCategory === '123';
    const isJawi = currentCategory === 'jawi';
    const isSyllable = currentCategory === 'syllable';
    
    if (isSyllable) {
        // Render vowel buttons
        const vowelContainer = document.createElement('div');
        vowelContainer.className = 'vowel-selector-container';
        
        ['a', 'i', 'u', 'e', 'o'].forEach(v => {
            const btn = document.createElement('button');
            btn.className = `vowel-btn ${v === currentSyllableVowel ? 'active' : ''}`;
            btn.textContent = v;
            btn.onclick = () => {
                currentSyllableVowel = v;
                playSyllableSound(v);
                initAbcGrid();
            };
            vowelContainer.appendChild(btn);
        });
        grid.appendChild(vowelContainer);

        // Render card container
        const cardsGrid = document.createElement('div');
        cardsGrid.className = 'syllables-cards-grid';

        const data = syllableData[currentSyllableVowel];
        data.forEach((item, index) => {
            const langData = item[currentLanguage];
            const card = document.createElement('div');
            const colorClass = cardColors[index % cardColors.length];
            card.className = `abc-card ${colorClass} syllable-card`;
            
            card.innerHTML = `
                <span class="abc-card-letter" style="font-size: 38px;">${item.syllable}</span>
                <span class="abc-card-emoji">${langData.emoji}</span>
                <span class="abc-card-word">${langData.word}</span>
            `;
            
            card.onclick = () => {
                if (learnVoiceMode === 'letter') {
                    playSyllableSound(item.syllable);
                    card.classList.add('card-bounce-active');
                    setTimeout(() => card.classList.remove('card-bounce-active'), 300);
                } else {
                    openDetail(index);
                }
            };
            cardsGrid.appendChild(card);
        });
        grid.appendChild(cardsGrid);
        return;
    }

    let data;
    if (isAbc) data = abcData;
    else if (is123) data = numberData;
    else data = jawiData;

    data.forEach((item, index) => {
        const langData = item[currentLanguage];
        const card = document.createElement('div');
        
        // Pilih warna kad secara bergilir
        const colorClass = cardColors[index % cardColors.length];
        card.className = `abc-card ${colorClass}`;
        
        if (isAbc) {
            card.innerHTML = `
                <span class="abc-card-letter">${item.letter}${item.letter.toLowerCase()}</span>
                <span class="abc-card-emoji">${langData.emoji}</span>
                <span class="abc-card-word">${langData.word}</span>
            `;
        } else if (is123) {
            card.innerHTML = `
                <span class="abc-card-letter">${item.number}</span>
                <span class="abc-card-emoji">${langData.hand}</span>
                <span class="abc-card-word">${langData.countEmoji}</span>
            `;
        } else if (isJawi) {
            card.innerHTML = `
                <span class="abc-card-letter" style="font-size: 44px; line-height: 1;">${item.letter}</span>
                <span class="abc-card-emoji">${langData.emoji}</span>
                <span class="abc-card-word">${item.name} (${langData.word})</span>
            `;
        }
        
        // Klik untuk sebutan / buka panel kad besar
        card.onclick = () => {
            if (learnVoiceMode === 'letter') {
                if (isAbc) {
                    playLetterSound(item.letter, currentLanguage);
                } else if (is123) {
                    playNumberSound(item.number, currentLanguage);
                } else if (isJawi) {
                    playJawiLetterSound(index + 1);
                }
                // Tambah animasi melantun
                card.classList.add('card-bounce-active');
                setTimeout(() => {
                    card.classList.remove('card-bounce-active');
                }, 300);
            } else {
                openDetail(index);
            }
        };
        
        grid.appendChild(card);
    });
}

// Tukar Mod Sebutan Belajar ABC (Sebut Huruf vs Huruf & Perkataan)
function setLearnVoiceMode(mode) {
    learnVoiceMode = mode;
    playSynthSound('click');
    
    // Kemas kini gaya aktif butang
    document.getElementById('btnVoiceLetter').classList.toggle('active', mode === 'letter');
    document.getElementById('btnVoiceWord').classList.toggle('active', mode === 'word');
}

// Buka kad besar terperinci
function openDetail(index) {
    currentLetterIdx = index;
    const isAbc = currentCategory === 'abc';
    const is123 = currentCategory === '123';
    const isJawi = currentCategory === 'jawi';
    const isSyllable = currentCategory === 'syllable';
    
    let data;
    if (isAbc) data = abcData;
    else if (is123) data = numberData;
    else if (isJawi) data = jawiData;
    else if (isSyllable) data = syllableData[currentSyllableVowel];

    const item = data[index];
    const langData = item[currentLanguage];
    
    if (isAbc) {
        document.getElementById('detailLetter').textContent = `${item.letter}${item.letter.toLowerCase()}`;
        const detailEmoji = document.getElementById('detailEmoji');
        detailEmoji.className = 'detail-emoji';
        detailEmoji.innerHTML = langData.emoji;
        document.getElementById('detailWord').textContent = langData.word;
    } else if (is123) {
        document.getElementById('detailLetter').textContent = item.number;
        const detailEmoji = document.getElementById('detailEmoji');
        detailEmoji.className = 'detail-emoji num-mode';
        
        // Asingkan isyarat tangan dan ikon kiraan nombor dalam bentuk grid
        const countItemsHtml = Array.from(langData.countEmoji).map(char => `<span class="count-item">${char}</span>`).join('');
        detailEmoji.innerHTML = `
            <div class="num-hand">${langData.hand}</div>
            <div class="num-count-grid">${countItemsHtml}</div>
        `;
        
        document.getElementById('detailWord').textContent = langData.word;
    } else if (isJawi) {
        document.getElementById('detailLetter').textContent = item.letter;
        const detailEmoji = document.getElementById('detailEmoji');
        detailEmoji.className = 'detail-emoji';
        detailEmoji.innerHTML = langData.emoji;
        document.getElementById('detailWord').textContent = `${item.name} (${langData.word})`;
    } else if (isSyllable) {
        document.getElementById('detailLetter').textContent = item.syllable;
        const detailEmoji = document.getElementById('detailEmoji');
        detailEmoji.className = 'detail-emoji';
        detailEmoji.innerHTML = langData.emoji;
        document.getElementById('detailWord').textContent = langData.word;
    }
    
    const overlay = document.getElementById('detailOverlay');
    overlay.classList.add('active');
    
    // Mainkan suara secara automatik semasa membuka kad
    playFullSpeech();
}

// Tutup kad besar terperinci
function closeDetail(event) {
    const overlay = document.getElementById('detailOverlay');
    overlay.classList.remove('active');
    playSynthSound('click');
}

// Navigasi ke kad huruf/nombor seterusnya / sebelumnya
function navigateLetter(direction) {
    playSynthSound('click');
    let nextIdx = currentLetterIdx + direction;
    
    let data;
    if (currentCategory === 'abc') data = abcData;
    else if (currentCategory === '123') data = numberData;
    else if (currentCategory === 'jawi') data = jawiData;
    else if (currentCategory === 'syllable') data = syllableData[currentSyllableVowel];

    if (nextIdx >= data.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = data.length - 1;
    
    openDetail(nextIdx);
}

// Memainkan fail audio sebutan huruf (.mp3) dengan fallback kepada TTS jika tiada fail
function getBestVoice(langCode) {
    if (!voices || voices.length === 0) {
        if (window.speechSynthesis) {
            voices = window.speechSynthesis.getVoices();
        }
    }
    
    // If langCode is Malay ('ms'), search for Malay first, then Indonesian fallback
    if (langCode === 'ms') {
        const msVoice = voices.find(v => {
            const l = v.lang.toLowerCase();
            return l.includes('ms-') || l.includes('my') || l === 'ms' || l.includes('zlm');
        });
        if (msVoice) return msVoice;
        
        const idVoice = voices.find(v => {
            const l = v.lang.toLowerCase();
            return l.includes('id-') || l === 'id';
        });
        if (idVoice) return idVoice;
    }
    
    // For English
    if (langCode === 'en') {
        const enVoice = voices.find(v => {
            const l = v.lang.toLowerCase();
            return l.includes('en-us') || l.includes('en-gb') || l.startsWith('en');
        });
        if (enVoice) return enVoice;
    }
    
    // Fallback to any voice matching the language code prefix
    const generalVoice = voices.find(v => v.lang.toLowerCase().startsWith(langCode));
    if (generalVoice) return generalVoice;
    
    return null;
}

function playAudioSegments(paths) {
    if (isMuted || !paths || paths.length === 0) return;
    
    // Stop TTS if it's currently speaking to prevent double speech
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    
    let currentIndex = 0;
    
    function playNext() {
        if (currentIndex >= paths.length) return;
        const currentPath = paths[currentIndex];
        const audio = new Audio(currentPath);
        
        audio.onended = () => {
            currentIndex++;
            playNext();
        };
        audio.onerror = () => {
            console.warn("Failed to play audio segment: " + currentPath);
            currentIndex++;
            playNext();
        };
        
        audio.play().catch(err => {
            console.error("Playback failed for segment " + currentPath + ":", err);
            currentIndex++;
            playNext();
        });
    }
    
    playNext();
}

function playSyllableSound(syllable) {
    if (isMuted) return;
    
    const audioPath = `assets/audio/ms/syllables/${syllable.toLowerCase()}.mp3`;
    const audio = new Audio(audioPath);
    
    audio.play().catch(err => {
        // Fallback to TTS if the local MP3 is not found
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(syllable);
            const voice = getBestVoice('ms');
            if (voice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
            } else {
                utterance.lang = 'ms-MY';
            }
            utterance.rate = 0.65;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    });
}

function speakSyllableWord(word, lang) {
    if (isMuted) return;
    
    const subDir = lang === 'ms' ? 'ms' : 'en';
    const audioPath = `assets/audio/${subDir}/syllable_words/${word.toLowerCase().trim()}.mp3`;
    const audio = new Audio(audioPath);
    
    audio.play().catch(err => {
        // Fallback to TTS if local MP3 is missing
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            const voice = getBestVoice(lang);
            if (voice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
            } else {
                utterance.lang = lang === 'ms' ? 'ms-MY' : 'en-US';
            }
            utterance.rate = 0.75;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    });
}

function playLetterSound(letter, lang) {
    if (isMuted) return;
    
    const letterUpper = letter.toUpperCase();
    const audioPath = `assets/audio/${lang}/${letterUpper}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Berjaya dimainkan, tiada apa perlu dilakukan
            })
            .catch(err => {
                // Fail gagal dimuat atau tiada, gunakan TTS
                speakText(letter, lang);
            });
    } else {
        // Sandaran untuk pelayar lama
        speakText(letter, lang);
    }
}

// Memainkan fail audio sebutan perkataan (.mp3) dengan fallback kepada TTS jika tiada fail
function playWordSound(word, lang) {
    if (isMuted) return;
    
    const wordLower = word.toLowerCase().trim();
    const audioPath = `assets/audio/${lang}/words/${wordLower}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            speakText(word, lang);
        });
    } else {
        speakText(word, lang);
    }
}

// Memainkan fail audio sebutan ayat penuh (.mp3) dengan fallback kepada TTS jika tiada fail
function playSentenceSound(letter, lang, fallbackText) {
    if (isMuted) return;
    
    const letterUpper = letter.toUpperCase();
    const audioPath = `assets/audio/${lang}/sentences/${letterUpper}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            speakText(fallbackText, lang);
        });
    } else {
        speakText(fallbackText, lang);
    }
}

// Memainkan fail audio soalan kuiz (.mp3) dengan fallback kepada TTS jika tiada fail
function playQuizQuestionSound(letter, lang, fallbackText) {
    if (isMuted) return;
    
    const letterUpper = letter.toUpperCase();
    const audioPath = `assets/audio/${lang}/quiz/${letterUpper}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            speakText(fallbackText, lang);
        });
    } else {
        speakText(fallbackText, lang);
    }
}

// Suara: Huruf, Nombor, atau Jawi sahaja
function playCurrentLetterSpeech() {
    if (currentCategory === 'abc') {
        const item = abcData[currentLetterIdx];
        playLetterSound(item.letter, currentLanguage);
    } else if (currentCategory === '123') {
        const item = numberData[currentLetterIdx];
        playNumberSound(item.number, currentLanguage);
    } else if (currentCategory === 'jawi') {
        playJawiLetterSound(currentLetterIdx + 1);
    } else if (currentCategory === 'syllable') {
        const item = syllableData[currentSyllableVowel][currentLetterIdx];
        playSyllableSound(item.syllable);
    }
}

// Suara: Perkataan, Kiraan, atau Perkataan Jawi sahaja
function playCurrentWordSpeech() {
    if (currentCategory === 'abc') {
        const item = abcData[currentLetterIdx];
        const word = item[currentLanguage].word;
        playWordSound(word, currentLanguage);
    } else if (currentCategory === '123') {
        const item = numberData[currentLetterIdx];
        playNumberSentenceSound(item.number, currentLanguage);
    } else if (currentCategory === 'jawi') {
        playJawiWordSound(currentLetterIdx + 1, currentLanguage);
    } else if (currentCategory === 'syllable') {
        const item = syllableData[currentSyllableVowel][currentLetterIdx];
        const word = item[currentLanguage].word;
        speakSyllableWord(word, currentLanguage);
    }
}

// Suara: Ayat penuh (cth: "A is for Apple" / "A untuk Epal" atau "Alif untuk arnab")
function playFullSpeech() {
    if (currentCategory === 'abc') {
        const item = abcData[currentLetterIdx];
        const word = item[currentLanguage].word;
        
        let textToSpeak = '';
        if (currentLanguage === 'ms') {
            textToSpeak = `${item.letter} untuk ${word}`;
        } else {
            textToSpeak = `${item.letter} is for ${word}`;
        }
        
        playSentenceSound(item.letter, currentLanguage, textToSpeak);
    } else if (currentCategory === '123') {
        const item = numberData[currentLetterIdx];
        playNumberSentenceSound(item.number, currentLanguage);
    } else if (currentCategory === 'jawi') {
        playJawiSentenceSound(currentLetterIdx + 1, currentLanguage);
    } else if (currentCategory === 'syllable') {
        const item = syllableData[currentSyllableVowel][currentLetterIdx];
        const word = item[currentLanguage].word;
        if (currentLanguage === 'ms') {
            const segments = [
                `assets/audio/ms/syllables/${item.syllable.toLowerCase()}.mp3`,
                `assets/audio/ms/syllables/untuk.mp3`,
                `assets/audio/ms/syllable_words/${word.toLowerCase()}.mp3`
            ];
            playAudioSegments(segments);
        } else {
            const segments = [
                `assets/audio/ms/syllables/${item.syllable.toLowerCase()}.mp3`,
                `assets/audio/en/syllables/is_for.mp3`,
                `assets/audio/en/syllable_words/${word.toLowerCase()}.mp3`
            ];
            playAudioSegments(segments);
        }
    }
}

// Pembantu sebutan huruf Jawi (Cuba main audio offline, jika gagal guna TTS)
function playJawiLetterSound(num) {
    if (isMuted) return;
    const audioPath = `assets/audio/ms/letters/${num}.mp3`;
    const audio = new Audio(audioPath);
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            const item = jawiData[num - 1];
            speakText(item.name, 'ms');
        });
    } else {
        const item = jawiData[num - 1];
        speakText(item.name, 'ms');
    }
}

// Pembantu sebutan perkataan Jawi
function playJawiWordSound(num, lang) {
    if (isMuted) return;
    const audioPath = `assets/audio/${lang}/jawi_words/${num}.mp3`;
    const audio = new Audio(audioPath);
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            const item = jawiData[num - 1];
            speakText(item[lang].word, lang);
        });
    } else {
        const item = jawiData[num - 1];
        speakText(item[lang].word, lang);
    }
}

// Pembantu sebutan ayat Jawi
function playJawiSentenceSound(num, lang) {
    if (isMuted) return;
    const audioPath = `assets/audio/${lang}/jawi_sentences/${num}.mp3`;
    const audio = new Audio(audioPath);
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            const item = jawiData[num - 1];
            const text = lang === 'ms' ? `${item.name} untuk ${item[lang].word}` : `${item.name} is for ${item[lang].word}`;
            speakText(text, lang);
        });
    } else {
        const item = jawiData[num - 1];
        const text = lang === 'ms' ? `${item.name} untuk ${item[lang].word}` : `${item.name} is for ${item[lang].word}`;
        speakText(text, lang);
    }
}

// Pembantu sebutan kuiz Jawi
function playJawiQuizSound(num, lang, fallbackText) {
    if (isMuted) return;
    const audioPath = `assets/audio/${lang}/jawi_quiz/${num}.mp3`;
    const audio = new Audio(audioPath);
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            speakText(fallbackText, lang);
        });
    } else {
        speakText(fallbackText, lang);
    }
}

// Pembantu sebutan nombor
function playNumberSound(number, lang) {
    if (isMuted) return;
    
    const audioPath = `assets/audio/${lang}/numbers/${number}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            const text = numberWords[lang][parseInt(number) - 1];
            speakText(text, lang);
        });
    } else {
        const text = numberWords[lang][parseInt(number) - 1];
        speakText(text, lang);
    }
}

// Pembantu sebutan kiraan nombor (sentence)
function playNumberSentenceSound(number, lang) {
    if (isMuted) return;
    
    const audioPath = `assets/audio/${lang}/numbers_sentences/${number}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            const item = numberData[parseInt(number) - 1];
            speakText(item[lang].word, lang);
        });
    } else {
        const item = numberData[parseInt(number) - 1];
        speakText(item[lang].word, lang);
    }
}

// Pembantu sebutan kuiz nombor
function playNumberQuizSound(number, lang, fallbackText) {
    if (isMuted) return;
    
    const audioPath = `assets/audio/${lang}/numbers_quiz/${number}.mp3`;
    const audio = new Audio(audioPath);
    
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            speakText(fallbackText, lang);
        });
    } else {
        speakText(fallbackText, lang);
    }
}

// ================= TAB 2: PERMAINAN KUIZ ABC =================

// Mulakan atau tetapkan semula Kuiz
function resetQuiz() {
    quizScore = 0;
    document.getElementById('quizScore').textContent = '0';
    playSynthSound('click');
    generateQuizQuestion();
}

// Jana soalan kuiz baru
function generateQuizQuestion() {
    const isAbc = currentCategory === 'abc';
    const is123 = currentCategory === '123';
    const isJawi = currentCategory === 'jawi';
    const isSyllable = currentCategory === 'syllable';

    // Urus keterlihatan quiz mode selector
    updateQuizModeButtons();

    // --- Route ke kuiz jenis baru ---
    if (isAbc && currentQuizMode === 'missing') {
        generateMissingLetterQuestion();
        return;
    }
    if (isAbc && currentQuizMode === 'anagram') {
        generateAnagramQuestion();
        return;
    }
    if (isSyllable && currentQuizMode === 'split') {
        generateSplitSyllableQuestion();
        return;
    }

    // Pastikan anagram area tersembunyi & quizOptions kelihatan
    const anagramArea = document.getElementById('anagramArea');
    if (anagramArea) anagramArea.style.display = 'none';
    const quizOptionsEl = document.getElementById('quizOptions');
    if (quizOptionsEl) quizOptionsEl.style.display = 'grid';

    // Buang kelas split-quiz-active jika ada
    const quizCard = document.getElementById('quizCard');
    if (quizCard) quizCard.classList.remove('split-quiz-active');

    let data;
    if (isAbc) data = abcData;
    else if (is123) data = numberData;
    else if (isJawi) data = jawiData;
    else if (isSyllable) {
        data = [];
        Object.keys(syllableData).forEach(v => {
            data = data.concat(syllableData[v]);
        });
    }

    // Pilih satu rawak sebagai jawapan betul
    const correctIdx = Math.floor(Math.random() * data.length);
    const correctItem = data[correctIdx];
    
    const isLowercaseQuestion = isAbc && currentQuizMode === 'lower';
    const quizQuestionArea = document.getElementById('quizQuestionArea');
    const quizFooterInfo = document.getElementById('quizFooterInfo');

    if (isLowercaseQuestion) {
        if (quizCard) quizCard.classList.add('lowercase-quiz');
        if (quizFooterInfo) quizFooterInfo.style.display = 'block';
        
        quizCorrectLetter = correctItem.letter.toLowerCase();
        
        const instructionText = currentLanguage === 'ms' ? 'Klik huruf kecil untuk:' : 'Click lowercase letter for:';
        if (quizQuestionArea) {
            quizQuestionArea.innerHTML = `
                <div class="quiz-match-wrapper">
                    <button class="quiz-sound-btn-round" onclick="playQuestionSpeech()" title="Dengar sebutan soalan">🔊</button>
                    <div class="quiz-match-card">
                        <div class="quiz-match-instruction">${instructionText}</div>
                        <div class="quiz-match-letter">${correctItem.letter}</div>
                    </div>
                </div>
            `;
        }
        
        if (currentLanguage === 'ms') {
            quizQuestionVoiceText = `Mana huruf kecil ${quizCorrectLetter}?`;
        } else {
            quizQuestionVoiceText = `Where is the lowercase letter ${quizCorrectLetter}?`;
        }
    } else {
        if (quizCard) quizCard.classList.remove('lowercase-quiz');
        if (quizFooterInfo) quizFooterInfo.style.display = 'none';
        
        if (quizQuestionArea) {
            quizQuestionArea.innerHTML = `
                <div class="quiz-question-sound" onclick="playQuestionSpeech()" title="Dengar sebutan soalan">
                    <span class="sound-wave">🔊</span>
                    <h2 id="quizQuestionText"></h2>
                </div>
            `;
        }
        
        const txtQuestion = document.getElementById('quizQuestionText');
        
        if (isAbc) {
            quizCorrectLetter = correctItem.letter;
            if (currentLanguage === 'ms') {
                if (txtQuestion) txtQuestion.textContent = `Di mana huruf ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Di mana huruf ${quizCorrectLetter}?`;
            } else {
                if (txtQuestion) txtQuestion.textContent = `Where is the letter ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Where is the letter ${quizCorrectLetter}?`;
            }
        } else if (is123) {
            quizCorrectLetter = correctItem.number;
            if (currentLanguage === 'ms') {
                const numberWord = numberWords.ms[parseInt(quizCorrectLetter) - 1];
                if (txtQuestion) txtQuestion.textContent = `Di mana nombor ${numberWord}?`;
                quizQuestionVoiceText = `Di mana nombor ${numberWord}?`;
            } else {
                if (txtQuestion) txtQuestion.textContent = `Where is the number ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Where is the number ${quizCorrectLetter}?`;
            }
        } else if (isJawi) {
            quizCorrectLetter = correctItem.letter;
            const letterName = correctItem.name;
            if (currentLanguage === 'ms') {
                if (txtQuestion) txtQuestion.textContent = `Di mana huruf ${letterName}?`;
                quizQuestionVoiceText = `Di mana huruf ${letterName}?`;
            } else {
                if (txtQuestion) txtQuestion.textContent = `Where is the letter ${letterName}?`;
                quizQuestionVoiceText = `Where is the letter ${letterName}?`;
            }
        } else if (isSyllable) {
            quizCorrectLetter = correctItem.syllable;
            if (currentLanguage === 'ms') {
                if (txtQuestion) txtQuestion.textContent = `Di mana suku kata ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Di mana suku kata ${quizCorrectLetter}?`;
            } else {
                if (txtQuestion) txtQuestion.textContent = `Where is the syllable ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Where is the syllable ${quizCorrectLetter}?`;
            }
        }
    }

    // Bina senarai pilihan jawapan (1 betul, 3 salah rawak)
    const options = [quizCorrectLetter];
    const isLowercase = isAbc && (quizCorrectLetter === quizCorrectLetter.toLowerCase());
    while (options.length < 4) {
        const randomIdx = Math.floor(Math.random() * data.length);
        let randomVal;
        if (isAbc) {
            randomVal = isLowercase ? data[randomIdx].letter.toLowerCase() : data[randomIdx].letter;
        } else if (is123) {
            randomVal = data[randomIdx].number;
        } else if (isJawi) {
            randomVal = data[randomIdx].letter;
        } else if (isSyllable) {
            randomVal = data[randomIdx].syllable;
        }
        
        if (!options.includes(randomVal)) {
            options.push(randomVal);
        }
    }

    // Rawakkan susunan pilihan jawapan
    options.sort(() => Math.random() - 0.5);

    // Paparkan pilihan jawapan dalam bentuk butang
    const optionsGrid = document.getElementById('quizOptions');
    optionsGrid.innerHTML = '';

    options.forEach(val => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = val;
        if (isJawi) {
            btn.style.fontSize = '52px';
        }
        btn.onclick = () => checkQuizAnswer(val, btn);
        optionsGrid.appendChild(btn);
    });

    // Sebut soalan secara automatik
    setTimeout(() => {
        if (isAbc) {
            playQuizQuestionSound(quizCorrectLetter, currentLanguage, quizQuestionVoiceText);
        } else if (is123) {
            playNumberQuizSound(quizCorrectLetter, currentLanguage, quizQuestionVoiceText);
        } else if (isJawi) {
            playJawiQuizSound(correctIdx + 1, currentLanguage, quizQuestionVoiceText);
        } else if (isSyllable) {
            if (currentLanguage === 'ms') {
                const segments = [
                    'assets/audio/ms/syllables/di_mana_suku_kata.mp3',
                    `assets/audio/ms/syllables/${quizCorrectLetter.toLowerCase()}.mp3`
                ];
                playAudioSegments(segments);
            } else {
                const segments = [
                    'assets/audio/en/syllables/where_is_the_syllable.mp3',
                    `assets/audio/ms/syllables/${quizCorrectLetter.toLowerCase()}.mp3`
                ];
                playAudioSegments(segments);
            }
        }
    }, 300);
}

// ===== KUIZ BARU 1: HURUF HILANG =====
function generateMissingLetterQuestion() {
    // Pastikan anagram area tersembunyi
    const anagramArea = document.getElementById('anagramArea');
    if (anagramArea) anagramArea.style.display = 'none';
    const quizOptionsEl = document.getElementById('quizOptions');
    if (quizOptionsEl) quizOptionsEl.style.display = 'grid';

    const quizCard = document.getElementById('quizCard');
    if (quizCard) {
        quizCard.classList.remove('lowercase-quiz');
        quizCard.classList.remove('split-quiz-active');
    }
    const quizFooterInfo = document.getElementById('quizFooterInfo');
    if (quizFooterInfo) quizFooterInfo.style.display = 'none';

    // Tapis perkataan 3-6 huruf sahaja (mudah untuk kanak-kanak)
    const combinedData = abcData.concat(extraQuizData);
    const filtered = combinedData.filter(item => {
        const w = item.ms.word.replace(/\s/g, '');
        return w.length >= 3 && w.length <= 6 && /^[a-zA-Z]+$/.test(w);
    });

    const correctIdx = Math.floor(Math.random() * filtered.length);
    const item = filtered[correctIdx];
    const wordRaw = currentLanguage === 'ms' ? item.ms.word : item.en.word;
    const word = wordRaw.replace(/\s/g, '').toLowerCase();
    const emoji = item[currentLanguage].emoji;

    // Pilih posisi rawak untuk disorokkan (bukan huruf pertama)
    const hidePos = Math.floor(Math.random() * (word.length - 1)) + 1;
    const correctLetter = word[hidePos].toUpperCase();
    quizCorrectLetter = correctLetter;
    quizQuestionVoiceText = wordRaw;

    // Bina paparan perkataan dengan ruang kosong
    const wordDisplay = word.toUpperCase().split('').map((ch, i) => {
        if (i === hidePos) {
            return `<span class="missing-letter-blank">_</span>`;
        }
        return `<span class="missing-letter-char">${ch}</span>`;
    }).join('');

    const instruction = currentLanguage === 'ms'
        ? 'Isi huruf yang hilang!'
        : 'Fill in the missing letter!';

    const quizQuestionArea = document.getElementById('quizQuestionArea');
    quizQuestionArea.innerHTML = `
        <div class="missing-letter-display">
            <button class="missing-sound-btn" onclick="playQuestionSpeech()" title="Dengar">🔊</button>
            <div class="missing-letter-emoji">${emoji}</div>
            <div class="missing-letter-word">${wordDisplay}</div>
            <div class="missing-letter-instruction">${instruction}</div>
        </div>
    `;

    // Jana pilihan: 1 betul + 3 salah rawak dari A-Z
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const wrongPool = allLetters.filter(l => l !== correctLetter);
    const options = [correctLetter];
    while (options.length < 4) {
        const rand = wrongPool[Math.floor(Math.random() * wrongPool.length)];
        if (!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);

    const optionsGrid = document.getElementById('quizOptions');
    optionsGrid.innerHTML = '';
    options.forEach(val => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = val;
        btn.onclick = () => checkQuizAnswer(val, btn);
        optionsGrid.appendChild(btn);
    });

    // Main suara perkataan supaya kanak-kanak tahu apa perkataan
    setTimeout(() => playWordSound(wordRaw, currentLanguage), 300);
}

// ===== KUIZ BARU 2: SUSUN HURUF (ANAGRAM) =====
function generateAnagramQuestion() {
    // Tunjuk kawasan anagram, sembunyikan butang pilihan biasa
    const anagramArea = document.getElementById('anagramArea');
    if (anagramArea) anagramArea.style.display = 'flex';
    const quizOptionsEl = document.getElementById('quizOptions');
    if (quizOptionsEl) quizOptionsEl.style.display = 'none';

    const quizCard = document.getElementById('quizCard');
    if (quizCard) {
        quizCard.classList.remove('lowercase-quiz');
        quizCard.classList.remove('split-quiz-active');
    }
    const quizFooterInfo = document.getElementById('quizFooterInfo');
    if (quizFooterInfo) quizFooterInfo.style.display = 'none';

    // Tapis perkataan 3-5 huruf
    const combinedData = abcData.concat(extraQuizData);
    const filtered = combinedData.filter(item => {
        const w = currentLanguage === 'ms'
            ? item.ms.word.replace(/\s/g, '')
            : item.en.word.replace(/\s/g, '');
        return w.length >= 3 && w.length <= 5 && /^[a-zA-Z]+$/.test(w);
    });

    const correctIdx = Math.floor(Math.random() * filtered.length);
    const item = filtered[correctIdx];
    const wordRaw = item[currentLanguage].word;
    const word = wordRaw.replace(/\s/g, '').toLowerCase();
    const emoji = item[currentLanguage].emoji;

    anagramWord = word;
    anagramAnswer = word.toUpperCase().split('');
    anagramUserAnswer = new Array(word.length).fill(null);
    quizCorrectLetter = word.toUpperCase();
    quizQuestionVoiceText = wordRaw;

    const instruction = currentLanguage === 'ms'
        ? 'Susun huruf untuk buat perkataan!'
        : 'Arrange the letters!';

    const quizQuestionArea = document.getElementById('quizQuestionArea');
    quizQuestionArea.innerHTML = `
        <div class="anagram-question-display">
            <button class="anagram-sound-btn" onclick="playQuestionSpeech()" title="Dengar">🔊</button>
            <div class="anagram-emoji">${emoji}</div>
            <div class="anagram-instruction">${instruction}</div>
        </div>
    `;

    // Bina slot jawapan
    const slotsEl = document.getElementById('anagramSlots');
    slotsEl.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'anagram-slot empty';
        slot.dataset.index = i;
        slot.onclick = () => removeFromAnagramSlot(i);
        slotsEl.appendChild(slot);
    }

    // Rawakkan huruf - pastikan berbeza dari susunan asal
    let shuffled = [...anagramAnswer];
    let attempts = 0;
    do {
        shuffled.sort(() => Math.random() - 0.5);
        attempts++;
    } while (shuffled.join('') === anagramAnswer.join('') && attempts < 20);

    const poolEl = document.getElementById('anagramPool');
    poolEl.innerHTML = '';
    shuffled.forEach((letter, idx) => {
        const tile = document.createElement('button');
        tile.className = 'anagram-tile';
        tile.textContent = letter;
        tile.dataset.poolIndex = idx;
        tile.dataset.letter = letter;
        tile.onclick = () => addToAnagramSlot(tile);
        poolEl.appendChild(tile);
    });

    // Main suara
    setTimeout(() => playWordSound(wordRaw, currentLanguage), 300);
}

function addToAnagramSlot(tileEl) {
    if (tileEl.classList.contains('used')) return;
    playSynthSound('click');

    // Cari slot kosong pertama
    const emptyIdx = anagramUserAnswer.indexOf(null);
    if (emptyIdx === -1) return;

    anagramUserAnswer[emptyIdx] = { letter: tileEl.dataset.letter, tileEl };
    tileEl.classList.add('used');

    // Kemaskini paparan slot
    const slots = document.querySelectorAll('.anagram-slot');
    slots[emptyIdx].textContent = tileEl.dataset.letter;
    slots[emptyIdx].classList.remove('empty');
    slots[emptyIdx].classList.add('filled');

    // Semak jika semua slot sudah diisi
    if (!anagramUserAnswer.includes(null)) {
        setTimeout(() => checkAnagramAnswer(), 200);
    }
}

function removeFromAnagramSlot(slotIdx) {
    if (anagramUserAnswer[slotIdx] === null) return;
    playSynthSound('click');

    const { tileEl } = anagramUserAnswer[slotIdx];
    anagramUserAnswer[slotIdx] = null;
    tileEl.classList.remove('used');

    const slots = document.querySelectorAll('.anagram-slot');
    slots[slotIdx].textContent = '';
    slots[slotIdx].classList.remove('filled');
    slots[slotIdx].classList.add('empty');
}

function checkAnagramAnswer() {
    const userWord = anagramUserAnswer.map(u => u ? u.letter : '').join('');
    const feedback = document.getElementById('quizFeedback');
    const feedbackEmoji = document.getElementById('feedbackEmoji');
    const feedbackText = document.getElementById('feedbackText');

    // Kunci semua interaksi
    document.querySelectorAll('.anagram-tile').forEach(t => t.style.pointerEvents = 'none');
    document.querySelectorAll('.anagram-slot').forEach(s => s.style.pointerEvents = 'none');

    if (userWord === anagramAnswer.join('')) {
        quizScore++;
        document.getElementById('quizScore').textContent = quizScore;
        playSynthSound('success');
        feedbackEmoji.textContent = '🌟';
        feedback.className = 'quiz-feedback correct';
        feedbackText.textContent = currentLanguage === 'ms' ? 'Hebat! Betul!' : 'Great job! Correct!';
        speakFeedback(true);
        triggerConfettiEffect();
    } else {
        playSynthSound('error');
        feedbackEmoji.textContent = '💡';
        feedback.className = 'quiz-feedback wrong';
        feedbackText.textContent = currentLanguage === 'ms' ? 'Cuba lagi ya!' : 'Try again!';
        speakFeedback(false);
        // Tunjukkan slot yang salah
        setTimeout(() => {
            const slots = document.querySelectorAll('.anagram-slot');
            slots.forEach((slot, i) => {
                if (anagramUserAnswer[i] && anagramUserAnswer[i].letter !== anagramAnswer[i]) {
                    slot.style.background = 'linear-gradient(135deg, #e53e3e, #c53030)';
                }
            });
        }, 400);
    }

    setTimeout(() => {
        feedback.className = 'quiz-feedback';
        generateQuizQuestion();
    }, 1900);
}

// ===== KUIZ BARU 3: SUKU KATA PECAH =====
function generateSplitSyllableQuestion() {
    // Pastikan quizOptions kelihatan, anagram area tersembunyi
    const anagramArea = document.getElementById('anagramArea');
    if (anagramArea) anagramArea.style.display = 'none';
    const quizOptionsEl = document.getElementById('quizOptions');
    if (quizOptionsEl) quizOptionsEl.style.display = 'grid';

    const quizCard = document.getElementById('quizCard');
    if (quizCard) {
        quizCard.classList.remove('lowercase-quiz');
        quizCard.classList.add('split-quiz-active');
    }
    const quizFooterInfo = document.getElementById('quizFooterInfo');
    if (quizFooterInfo) quizFooterInfo.style.display = 'none';

    // Kumpul semua data suku kata dengan remaining yang valid
    const allSyllables = [];
    Object.values(syllableData).forEach(arr => {
        arr.forEach(item => {
            const wordMs = item.ms.word.replace(/\s/g, '').toLowerCase();
            const syl = item.syllable.toLowerCase();
            if (wordMs.startsWith(syl) && wordMs.length > syl.length) {
                allSyllables.push({
                    syllable: syl,
                    remaining: wordMs.slice(syl.length),
                    wordMs: wordMs,
                    wordEn: item.en.word,
                    emoji: item[currentLanguage].emoji,
                    emojiMs: item.ms.emoji,
                    emojiEn: item.en.emoji
                });
            }
        });
    });

    const correctIdx = Math.floor(Math.random() * allSyllables.length);
    const item = allSyllables[correctIdx];
    currentSplitItem = item;

    const displayWord = currentLanguage === 'ms' ? item.wordMs : item.wordEn;
    const emoji = currentLanguage === 'ms' ? item.emojiMs : item.emojiEn;
    const remaining = item.remaining.toUpperCase();
    quizCorrectLetter = remaining;
    quizQuestionVoiceText = item.syllable;

    const hint = currentLanguage === 'ms' ? 'Lengkapkan perkataan:' : 'Complete the word:';

    const quizQuestionArea = document.getElementById('quizQuestionArea');
    quizQuestionArea.innerHTML = `
        <div class="split-syllable-display">
            <button class="split-sound-btn" onclick="playQuestionSpeech()" title="Dengar">🔊</button>
            <div class="split-emoji">${emoji}</div>
            <div class="split-word-hint">${hint} <strong>${displayWord.toUpperCase()}</strong></div>
            <div class="split-syllable-row">
                <div class="split-syllable-known">${item.syllable.toUpperCase()}</div>
                <div class="split-syllable-plus">+</div>
                <div class="split-syllable-blank">?</div>
            </div>
        </div>
    `;

    // Jana pilihan: 1 betul + 3 salah rawak
    const wrongPool = allSyllables.filter((_, i) => i !== correctIdx && allSyllables[i].remaining !== item.remaining);
    const options = [remaining];
    const shuffledWrong = [...wrongPool].sort(() => Math.random() - 0.5);
    for (const w of shuffledWrong) {
        const val = w.remaining.toUpperCase();
        if (!options.includes(val) && options.length < 4) {
            options.push(val);
        }
        if (options.length >= 4) break;
    }
    // Jika kurang dari 4, isi dengan teks rawak
    while (options.length < 4) {
        const fake = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
        if (!options.includes(fake)) options.push(fake);
    }
    options.sort(() => Math.random() - 0.5);

    const optionsGrid = document.getElementById('quizOptions');
    optionsGrid.innerHTML = '';
    options.forEach(val => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = val;
        btn.style.fontSize = '26px';
        btn.style.letterSpacing = '1px';
        btn.onclick = () => checkQuizAnswer(val, btn);
        optionsGrid.appendChild(btn);
    });

    // Main suara suku kata
    setTimeout(() => playSyllableSound(item.syllable), 300);
}


// Dengar suara soalan semula bila diketuk
function playQuestionSpeech() {
    if (currentCategory === 'abc') {
        if (currentQuizMode === 'missing' || currentQuizMode === 'anagram') {
            // Main suara perkataan
            playWordSound(quizQuestionVoiceText, currentLanguage);
        } else {
            playQuizQuestionSound(quizCorrectLetter, currentLanguage, quizQuestionVoiceText);
        }
    } else if (currentCategory === '123') {
        playNumberQuizSound(quizCorrectLetter, currentLanguage, quizQuestionVoiceText);
    } else if (currentCategory === 'jawi') {
        const idx = jawiData.findIndex(item => item.letter === quizCorrectLetter);
        playJawiQuizSound(idx + 1, currentLanguage, quizQuestionVoiceText);
    } else if (currentCategory === 'syllable') {
        if (currentQuizMode === 'split' && currentSplitItem) {
            // Main suku kata
            playSyllableSound(currentSplitItem.syllable);
        } else {
            if (currentLanguage === 'ms') {
                const segments = [
                    'assets/audio/ms/syllables/di_mana_suku_kata.mp3',
                    `assets/audio/ms/syllables/${quizCorrectLetter.toLowerCase()}.mp3`
                ];
                playAudioSegments(segments);
            } else {
                const segments = [
                    'assets/audio/en/syllables/where_is_the_syllable.mp3',
                    `assets/audio/ms/syllables/${quizCorrectLetter.toLowerCase()}.mp3`
                ];
                playAudioSegments(segments);
            }
        }
    }
}


// Semak jawapan yang ditekan kanak-kanak
function checkQuizAnswer(selectedLetter, buttonElement) {
    // Nyahaktifkan semua butang pilihan untuk mengelakkan dwi-klik
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.style.pointerEvents = 'none');

    const feedback = document.getElementById('quizFeedback');
    const feedbackEmoji = document.getElementById('feedbackEmoji');
    const feedbackText = document.getElementById('feedbackText');

    if (selectedLetter === quizCorrectLetter) {
        // JAWAPAN BETUL!
        quizScore++;
        document.getElementById('quizScore').textContent = quizScore;
        buttonElement.classList.add('btn-correct');
        playSynthSound('success');
        
        // Puji dalam bahasa yang dipilih
        feedbackEmoji.textContent = '🌟';
        feedback.className = 'quiz-feedback correct';
        feedbackText.textContent = currentLanguage === 'ms' ? 'Hebat! Betul!' : 'Great job! Correct!';
        speakFeedback(true);

        // Tunjukkan bintang kemenangan (confetti simulasi)
        triggerConfettiEffect();

    } else {
        // JAWAPAN SALAH
        buttonElement.classList.add('btn-wrong');
        playSynthSound('error');
        
        // Tunjukkan maklum balas cubaan semula
        feedbackEmoji.textContent = '💡';
        feedback.className = 'quiz-feedback wrong';
        feedbackText.textContent = currentLanguage === 'ms' ? 'Cuba lagi ya!' : 'Try again!';
        speakFeedback(false);

        // Cari butang betul dan beri highlight lembut
        setTimeout(() => {
            allButtons.forEach(btn => {
                if (btn.textContent === quizCorrectLetter) {
                    btn.style.borderColor = 'var(--color-success)';
                    btn.style.borderWidth = '6px';
                }
            });
        }, 600);
    }

    // Tutup maklum balas dan jana soalan baru selepas 1.5 saat
    setTimeout(() => {
        feedback.className = 'quiz-feedback'; // sembunyi maklum balas
        generateQuizQuestion();
    }, 1800);
}

// Pembantu: sebut maklum balas mengikut kategori dan bahasa
function speakFeedback(correct) {
    if (isMuted) return;
    if (correct) {
        if (currentCategory === 'syllable') {
            playAudioSegments(['assets/audio/ms/syllables/hebat_betul.mp3']);
        } else {
            speakText(currentLanguage === 'ms' ? 'Hebat! Betul!' : 'Great job! Correct!', currentLanguage);
        }
    } else {
        if (currentCategory === 'syllable') {
            playAudioSegments(['assets/audio/ms/syllables/cuba_lagi.mp3']);
        } else {
            speakText(currentLanguage === 'ms' ? 'Cuba lagi' : 'Try again', currentLanguage);
        }
    }
}


// Efek Confetti Bintang Mudah
function triggerConfettiEffect() {
    const stars = ['⭐️', '✨', '🎉', '🎨', '🚀'];
    const container = document.querySelector('.quiz-container');
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 80 + 10}%`;
        star.style.top = `${Math.random() * 40 + 30}%`;
        star.style.fontSize = `${Math.random() * 20 + 20}px`;
        star.style.zIndex = '99';
        star.style.pointerEvents = 'none';
        star.style.transform = `scale(0)`;
        star.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        container.appendChild(star);
        
        // Animasi keluar
        setTimeout(() => {
            star.style.transform = `scale(1.5) translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.8) * 150}px)`;
            star.style.opacity = '0';
        }, 50);
        
        // Padam unsur bintang selepas selesai
        setTimeout(() => {
            star.remove();
        }, 1100);
    }
}

// ================= TAB 3: MELAKAR HURUF (TRACING) =================

// Persediaan kanvas responsif
function initCanvas() {
    // Tetapkan saiz resolusi sebenar kanvas mengikut saiz paparannya
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pengendali Tetikus (Mouse Events)
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Pengendali Skrin Sentuh (Touch Events)
    canvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        // Skala koordinat sebenar kanvas berbanding saiz visual CSS-nya
        const x = ((touch.clientX - rect.left) / rect.width) * canvas.width;
        const y = ((touch.clientY - rect.top) / rect.height) * canvas.height;
        
        isDrawing = true;
        [lastX, lastY] = [x, y];
        e.preventDefault();
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDrawing) return;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * canvas.width;
        const y = ((touch.clientY - rect.top) / rect.height) * canvas.height;
        
        drawStroke(lastX, lastY, x, y);
        [lastX, lastY] = [x, y];
        e.preventDefault();
    });

    canvas.addEventListener('touchend', stopDrawing);
}

function resizeCanvas() {
    // Canvas disetkan kepada resolusi standard 500x500px, CSS yang mengecilkannya secara responsif.
    // Oleh itu kita kekalkan canvas.width = 500 dan canvas.height = 500 untuk kualiti lukisan yang tajam.
    canvas.width = 500;
    canvas.height = 500;
    clearCanvas();
}

// Isi senarai pilihan huruf, nombor, atau Hijaiyah untuk melakar
function initTraceSelector() {
    const selector = document.getElementById('traceLetterSelect');
    selector.innerHTML = '';
    
    const isAbc = currentCategory === 'abc';
    const is123 = currentCategory === '123';
    const isJawi = currentCategory === 'jawi';
    
    let data;
    if (isAbc) data = abcData;
    else if (is123) data = numberData;
    else data = jawiData;
    
    data.forEach(item => {
        const option = document.createElement('option');
        if (isAbc) {
            option.value = item.letter;
            option.textContent = `${item.letter} ${item.letter.toLowerCase()}`;
        } else if (is123) {
            option.value = item.number;
            option.textContent = item.number;
        } else if (isJawi) {
            option.value = item.letter;
            option.textContent = `${item.letter} (${item.name})`;
        }
        selector.appendChild(option);
    });
    
    // Set lalai ke huruf/nombor/Hijaiyah pertama
    changeTraceLetter();
}

// Apabila huruf/nombor tracing diubah
function changeTraceLetter() {
    const val = document.getElementById('traceLetterSelect').value;
    
    // Customize font style for canvas background Jawi letters
    const canvasBgLetter = document.getElementById('canvasBgLetter');
    canvasBgLetter.textContent = val;
    if (currentCategory === 'jawi') {
        canvasBgLetter.style.fontSize = '220px';
    } else {
        canvasBgLetter.style.fontSize = '260px';
    }
    
    clearCanvas();
    
    // Sebut huruf/nombor yang dipilih
    if (currentCategory === 'abc') {
        playLetterSound(val, currentLanguage);
    } else if (currentCategory === '123') {
        playNumberSound(val, currentLanguage);
    } else if (currentCategory === 'jawi') {
        const idx = jawiData.findIndex(item => item.letter === val);
        playJawiLetterSound(idx + 1);
    }
}

// Mulakan Lukisan
function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    [lastX, lastY] = [x, y];
    playSynthSound('click');
}

// Logik Melukis
function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    
    drawStroke(lastX, lastY, x, y);
    [lastX, lastY] = [x, y];
}

function stopDrawing() {
    isDrawing = false;
}

// Lukis Garisan pada Kanvas
function drawStroke(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    
    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = brushSize * 1.5; // Pemadam lebih besar sedikit
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = brushSize;
    }
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
}

// Setkan warna berus lakaran
function setStrokeColor(color, btnElement, eraserMode = false) {
    playSynthSound('click');
    strokeColor = color;
    isEraser = eraserMode;

    // Kemas kini gaya aktif butang warna
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}

// Tukar saiz berus
function updateBrushSize(size) {
    brushSize = parseInt(size);
}

// Padam seluruh kanvas lakaran
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playSynthSound('click');
}


// ================= FUNGSI AM & TERJEMAHAN =================

// Urus Penukaran Halaman (Screen Switching)
function showScreen(screenId) {
    currentScreen = screenId;
    
    // Tunjukkan skrin aktif, sembunyikan yang lain
    document.getElementById('screenMainMenu').style.display = (screenId === 'main') ? 'flex' : 'none';
    document.getElementById('screenCategoryMenu').style.display = (screenId === 'category') ? 'flex' : 'none';
    document.getElementById('screenGameplay').style.display = (screenId === 'content') ? 'flex' : 'none';

    // Jika masuk ke skrin gameplay, setkan tab kandungan yang aktif
    if (screenId === 'content') {
        // Tunjukkan tab content yang aktif, sembunyikan yang lain
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(`tabContent${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`).classList.add('active');
        
        // Kemas kini tajuk subheader gameplay
        const gameplayTitle = document.getElementById('gameplayTitle');
        if (gameplayTitle) {
            let activityName = '';
            let categoryName = '';
            
            // Nama aktiviti
            if (activeTab === 'learn') {
                activityName = currentLanguage === 'ms' ? 'Belajar' : 'Learn';
            } else if (activeTab === 'quiz') {
                activityName = currentLanguage === 'ms' ? 'Kuiz' : 'Quiz';
            } else if (activeTab === 'trace') {
                activityName = currentLanguage === 'ms' ? 'Melukis' : 'Drawing';
            }

            // Nama kategori
            if (currentCategory === 'abc') {
                categoryName = 'ABC';
            } else if (currentCategory === '123') {
                categoryName = '123';
            } else if (currentCategory === 'jawi') {
                categoryName = currentLanguage === 'ms' ? 'Alif Ba Ta' : 'Alif Ba Ta';
            } else if (currentCategory === 'syllable') {
                categoryName = currentLanguage === 'ms' ? 'Suku Kata' : 'Syllables';
            }

            gameplayTitle.textContent = `${activityName} ${categoryName}`;
        }
    }
}

// Memilih Aktiviti Utama (Belajar, Kuiz, Melukis)
function selectActivity(activity) {
    activeTab = activity;
    playSynthSound('click');

    // Kemas kini tajuk kategori mengikut aktiviti terpilih
    const categoryMenuTitle = document.getElementById('categoryMenuTitle');
    if (categoryMenuTitle) {
        if (activity === 'learn') {
            categoryMenuTitle.textContent = currentLanguage === 'ms' ? 'Pilih Kategori Belajar' : 'Choose Learn Category';
        } else if (activity === 'quiz') {
            categoryMenuTitle.textContent = currentLanguage === 'ms' ? 'Pilih Kategori Kuiz' : 'Choose Quiz Category';
        } else if (activity === 'trace') {
            categoryMenuTitle.textContent = currentLanguage === 'ms' ? 'Pilih Kategori Melukis' : 'Choose Drawing Category';
        }
    }

    // Tapis butang Suku Kata supaya disembunyikan untuk Melukis
    const btnSyllable = document.getElementById('cardCatSyllable');
    if (btnSyllable) {
        if (activity === 'trace') {
            btnSyllable.style.display = 'none';
        } else {
            btnSyllable.style.display = 'flex';
        }
    }

    // Ubah suai nama kad kategori berdasarkan aktiviti (buang 'Belajar' untuk kuiz)
    const isQuiz = activity === 'quiz';
    const cardAbcTitle = document.querySelector('.card-abc .category-card-title');
    const card123Title = document.querySelector('.card-123 .category-card-title');
    const cardSyllableTitle = document.querySelector('.card-syllable .category-card-title');

    if (isQuiz) {
        if (cardAbcTitle) {
            cardAbcTitle.textContent = 'ABC';
            cardAbcTitle.setAttribute('data-ms', 'ABC');
            cardAbcTitle.setAttribute('data-en', 'ABC');
        }
        if (card123Title) {
            card123Title.textContent = '123';
            card123Title.setAttribute('data-ms', '123');
            card123Title.setAttribute('data-en', '123');
        }
        if (cardSyllableTitle) {
            cardSyllableTitle.textContent = currentLanguage === 'ms' ? 'Suku Kata' : 'Syllables';
            cardSyllableTitle.setAttribute('data-ms', 'Suku Kata');
            cardSyllableTitle.setAttribute('data-en', 'Syllables');
        }
    } else {
        if (cardAbcTitle) {
            cardAbcTitle.textContent = currentLanguage === 'ms' ? 'Belajar ABC' : 'Learn ABC';
            cardAbcTitle.setAttribute('data-ms', 'Belajar ABC');
            cardAbcTitle.setAttribute('data-en', 'Learn ABC');
        }
        if (card123Title) {
            card123Title.textContent = currentLanguage === 'ms' ? 'Belajar 123' : 'Learn 123';
            card123Title.setAttribute('data-ms', 'Belajar 123');
            card123Title.setAttribute('data-en', 'Learn 123');
        }
        if (cardSyllableTitle) {
            cardSyllableTitle.textContent = currentLanguage === 'ms' ? 'Belajar Suku Kata' : 'Learn Syllables';
            cardSyllableTitle.setAttribute('data-ms', 'Belajar Suku Kata');
            cardSyllableTitle.setAttribute('data-en', 'Learn Syllables');
        }
    }

    showScreen('category');
}

// Memilih Kategori (ABC, 123, Jawi)
function selectCategory(category) {
    currentCategory = category;
    playSynthSound('click');

    // Reset mod kuiz jika tidak serasi dengan kategori baru
    if (activeTab === 'quiz') {
        if (category === 'syllable') {
            // Jika mod kuiz ABC-specific, tukar ke standard
            if (['missing', 'anagram'].includes(currentQuizMode)) {
                currentQuizMode = 'upper';
            }
        } else {
            // Jika mod kuiz syllable-specific, tukar ke standard
            if (currentQuizMode === 'split') {
                currentQuizMode = 'upper';
            }
        }
    }

    // Tunjukkan / sembunyikan pemilih mod sebutan belajar mengikut keadaan
    const learnModeSelectorContainer = document.getElementById('learnModeSelectorContainer');
    if (learnModeSelectorContainer) {
        learnModeSelectorContainer.style.display = (activeTab === 'learn') ? 'flex' : 'none';
    }

    // Jalankan inisialisasi modul permainan yang dipilih
    if (activeTab === 'learn') {
        initAbcGrid();
    } else if (activeTab === 'quiz') {
        resetQuiz();
    } else if (activeTab === 'trace') {
        initTraceSelector();
        setTimeout(resizeCanvas, 100); // Pastikan saiz kanvas betul
    }

    updateModeSelectorLabels();
    showScreen('content');
}


// Navigasi Kembali ke Kategori
function goBackToCategory() {
    playSynthSound('click');
    showScreen('category');
}

// Navigasi Kembali ke Menu Utama
function goHome() {
    playSynthSound('click');
    showScreen('main');
}

// Fungsi Wrapper untuk Keserasian Kod Lama
function switchTab(tabId) {
    selectActivity(tabId);
}

function setCategory(category) {
    selectCategory(category);
}

// Kemas kini label pemilih mod belajar
function updateModeSelectorLabels() {
    const btnVoiceLetter = document.getElementById('btnVoiceLetter').querySelector('span');
    const btnVoiceWord = document.getElementById('btnVoiceWord').querySelector('span');

    if (currentCategory === 'abc') {
        if (currentLanguage === 'ms') {
            btnVoiceLetter.textContent = 'Aa Sebut Huruf (A)';
            btnVoiceWord.textContent = '🐔 Huruf & Perkataan';
        } else {
            btnVoiceLetter.textContent = 'Aa Say Letter (A)';
            btnVoiceWord.textContent = '🐔 Letter & Word';
        }
    } else if (currentCategory === '123') {
        if (currentLanguage === 'ms') {
            btnVoiceLetter.textContent = '🔢 Sebut Nombor (1)';
            btnVoiceWord.textContent = '🔢 Nombor & Kiraan';
        } else {
            btnVoiceLetter.textContent = '🔢 Say Number (1)';
            btnVoiceWord.textContent = '🔢 Number & Counting';
        }
    } else if (currentCategory === 'jawi') {
        if (currentLanguage === 'ms') {
            btnVoiceLetter.textContent = '🕌 Sebut Huruf (ا)';
            btnVoiceWord.textContent = '🕌 Huruf & Perkataan';
        } else {
            btnVoiceLetter.textContent = '🕌 Say Letter (ا)';
            btnVoiceWord.textContent = '🕌 Letter & Word';
        }
    } else if (currentCategory === 'syllable') {
        if (currentLanguage === 'ms') {
            btnVoiceLetter.textContent = '🗣️ Sebut Suku Kata (ba)';
            btnVoiceWord.textContent = '🗣️ Suku Kata & Perkataan';
        } else {
            btnVoiceLetter.textContent = '🗣️ Say Syllable (ba)';
            btnVoiceWord.textContent = '🗣️ Syllable & Word';
        }
    }
}

// Tetapkan Bahasa Aplikasi (BM / EN)
function setLanguage(lang) {
    if (currentLanguage === lang) return;
    currentLanguage = lang;
    playSynthSound('click');

    // Tukar status butang bahasa aktif
    document.getElementById('btnLangMs').classList.toggle('active', lang === 'ms');
    document.getElementById('btnLangEn').classList.toggle('active', lang === 'en');

    // Kemas kini sebutan perkataan & kad mengikut bahasa baru
    initAbcGrid();
    updateStaticTranslations();
    updateModeSelectorLabels();
    
    // Reset kuiz jika sedang berada di dalam mod kuiz
    if (activeTab === 'quiz') {
        resetQuiz();
    }
}

// Terjemah elemen statik HTML berasaskan atribut data-ms/data-en
function updateStaticTranslations() {
    const elements = document.querySelectorAll('[data-ms]');
    elements.forEach(el => {
        const text = currentLanguage === 'ms' ? el.getAttribute('data-ms') : el.getAttribute('data-en');
        
        // Uruskan jenis input select secara berbeza
        if (el.tagName === 'LABEL' && el.htmlFor === 'traceLetterSelect') {
            el.textContent = text;
        } else if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H2' || el.tagName === 'H3') {
            el.textContent = text;
        } else {
            // Butang & Teks Biasa
            el.innerHTML = el.innerHTML.replace(el.textContent.trim(), text);
        }
    });
}

// Tukar mod kuiz (Huruf Besar / Huruf Kecil / Huruf Hilang / Susun Huruf / Suku Kata Pecah)
function setQuizMode(mode) {
    if (currentQuizMode === mode) return;
    currentQuizMode = mode;
    playSynthSound('click');

    // Kemas kini butang aktif
    updateQuizModeButtons();

    // Sembunyikan kawasan anagram jika tukar dari mod anagram
    const anagramArea = document.getElementById('anagramArea');
    if (anagramArea && mode !== 'anagram') anagramArea.style.display = 'none';
    const quizOptionsEl = document.getElementById('quizOptions');
    if (quizOptionsEl && mode !== 'anagram') quizOptionsEl.style.display = 'grid';

    // Reset kuiz dengan skor 0
    resetQuiz();
}

// Kemaskini paparan butang mod kuiz (aktif/tidak aktif, tunjuk/sembunyi)
function updateQuizModeButtons() {
    const isAbc = currentCategory === 'abc';
    const isSyllable = currentCategory === 'syllable';

    // Set active state untuk semua butang
    const modeMap = {
        'upper': 'btnQuizUpper',
        'lower': 'btnQuizLower',
        'missing': 'btnQuizMissing',
        'anagram': 'btnQuizAnagram',
        'split': 'btnQuizSplit'
    };

    Object.entries(modeMap).forEach(([mode, btnId]) => {
        const btn = document.getElementById(btnId);
        if (btn) btn.classList.toggle('active', mode === currentQuizMode);
    });

    // Handle btnQuizSylStd (maps to 'upper' for syllable)
    const btnSylStd = document.getElementById('btnQuizSylStd');
    if (btnSylStd) btnSylStd.classList.toggle('active', currentQuizMode === 'upper' && isSyllable);

    // Tunjuk/sembunyi butang mengikut kategori
    // ABC: upper, lower, missing, anagram
    const abcBtns = ['btnQuizUpper', 'btnQuizLower', 'btnQuizMissing', 'btnQuizAnagram'];
    // Syllable: sylstd, split
    const syllableBtns = ['btnQuizSylStd', 'btnQuizSplit'];

    abcBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = isAbc ? 'flex' : 'none';
    });
    syllableBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = isSyllable ? 'flex' : 'none';
    });

    // Tunjuk selector hanya untuk ABC dan Syllable
    const selector = document.getElementById('quizModeSelector');
    if (selector) {
        selector.style.display = (isAbc || isSyllable) ? 'grid' : 'none';
    }
}

