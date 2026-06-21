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

// Keadaan Aplikasi (App State)
let currentLanguage = 'ms'; // 'ms' atau 'en'
let currentCategory = 'abc'; // 'abc' atau '123'
let learnVoiceMode = 'letter'; // 'letter' atau 'word'
let isMuted = false;
let activeTab = 'learn';
let currentLetterIdx = 0;
let quizScore = 0;
let quizCorrectLetter = '';
let quizQuestionVoiceText = '';
let voices = [];
let audioCtx = null;

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
    // TTS dinyahaktifkan untuk memastikan hanya fail audio tempatan (assets) digunakan.
    console.log("TTS System Disabled. Requested text:", text);
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
    
    let data;
    if (isAbc) data = abcData;
    else if (is123) data = numberData;
    else data = jawiData;

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
    else data = jawiData;

    if (nextIdx >= data.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = data.length - 1;
    
    openDetail(nextIdx);
}

// Memainkan fail audio sebutan huruf (.mp3) dengan fallback kepada TTS jika tiada fail
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
    
    let data;
    if (isAbc) data = abcData;
    else if (is123) data = numberData;
    else data = jawiData;

    // Pilih satu rawak sebagai jawapan betul
    const correctIdx = Math.floor(Math.random() * data.length);
    const correctItem = data[correctIdx];
    
    const txtQuestion = document.getElementById('quizQuestionText');

    if (isAbc) {
        // Rawak 50% untuk soalan huruf kecil
        const isLowercaseQuestion = Math.random() < 0.5;
        
        if (isLowercaseQuestion) {
            quizCorrectLetter = correctItem.letter.toLowerCase();
            
            // Sediakan teks soalan huruf kecil
            if (currentLanguage === 'ms') {
                txtQuestion.textContent = `Mana huruf kecil ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Mana huruf kecil ${quizCorrectLetter}?`;
            } else {
                txtQuestion.textContent = `Where is the lowercase letter ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Where is the lowercase letter ${quizCorrectLetter}?`;
            }
        } else {
            quizCorrectLetter = correctItem.letter;
            
            // Sediakan teks soalan huruf besar
            if (currentLanguage === 'ms') {
                txtQuestion.textContent = `Di mana huruf ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Di mana huruf ${quizCorrectLetter}?`;
            } else {
                txtQuestion.textContent = `Where is the letter ${quizCorrectLetter}?`;
                quizQuestionVoiceText = `Where is the letter ${quizCorrectLetter}?`;
            }
        }
    } else if (is123) {
        quizCorrectLetter = correctItem.number;
        
        // Sediakan teks soalan
        if (currentLanguage === 'ms') {
            const numberWord = numberWords.ms[parseInt(quizCorrectLetter) - 1];
            txtQuestion.textContent = `Di mana nombor ${numberWord}?`;
            quizQuestionVoiceText = `Di mana nombor ${numberWord}?`;
        } else {
            txtQuestion.textContent = `Where is the number ${quizCorrectLetter}?`;
            quizQuestionVoiceText = `Where is the number ${quizCorrectLetter}?`;
        }
    } else if (isJawi) {
        quizCorrectLetter = correctItem.letter;
        const letterName = correctItem.name;
        
        // Sediakan teks soalan
        if (currentLanguage === 'ms') {
            txtQuestion.textContent = `Di mana huruf ${letterName}?`;
            quizQuestionVoiceText = `Di mana huruf ${letterName}?`;
        } else {
            txtQuestion.textContent = `Where is the letter ${letterName}?`;
            quizQuestionVoiceText = `Where is the letter ${letterName}?`;
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
        } else {
            randomVal = data[randomIdx].letter;
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
        }
    }, 300);
}

// Dengar suara soalan semula bila diketuk
function playQuestionSpeech() {
    if (currentCategory === 'abc') {
        playQuizQuestionSound(quizCorrectLetter, currentLanguage, quizQuestionVoiceText);
    } else if (currentCategory === '123') {
        playNumberQuizSound(quizCorrectLetter, currentLanguage, quizQuestionVoiceText);
    } else if (currentCategory === 'jawi') {
        const idx = jawiData.findIndex(item => item.letter === quizCorrectLetter);
        playJawiQuizSound(idx + 1, currentLanguage, quizQuestionVoiceText);
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
        if (currentLanguage === 'ms') {
            feedbackText.textContent = 'Hebat! Betul!';
            speakText('Hebat! Betul!', 'ms');
        } else {
            feedbackText.textContent = 'Great job! Correct!';
            speakText('Great job! Correct!', 'en');
        }

        // Tunjukkan bintang kemenangan (confetti simulasi)
        triggerConfettiEffect();

    } else {
        // JAWAPAN SALAH
        buttonElement.classList.add('btn-wrong');
        playSynthSound('error');
        
        // Tunjukkan maklum balas cubaan semula
        feedbackEmoji.textContent = '💡';
        feedback.className = 'quiz-feedback wrong';
        if (currentLanguage === 'ms') {
            feedbackText.textContent = 'Cuba lagi ya!';
            speakText('Cuba lagi', 'ms');
        } else {
            feedbackText.textContent = 'Try again!';
            speakText('Try again', 'en');
        }

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

// Pertukaran Tab Menu Utama
function switchTab(tabId) {
    activeTab = tabId;
    playSynthSound('click');

    // Kemas kini status tab aktif pada butang navigasi
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`nav${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`).classList.add('active');

    // Paparkan kandungan tab yang sepadan
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`tabContent${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`).classList.add('active');

    // Inisialisasi semula aktiviti khas setiap tab jika perlu
    if (tabId === 'quiz') {
        resetQuiz();
    } else if (tabId === 'trace') {
        setTimeout(resizeCanvas, 100); // Pastikan kanvas dilukis semula dengan betul
    }
}

// Tetapkan Kategori Utama (ABC / 123 / Jawi)
function setCategory(category) {
    if (currentCategory === category) return;
    currentCategory = category;
    playSynthSound('click');

    // Kemas kini status butang kategori aktif
    document.getElementById('btnCatAbc').classList.toggle('active', category === 'abc');
    document.getElementById('btnCat123').classList.toggle('active', category === '123');
    document.getElementById('btnCatJawi').classList.toggle('active', category === 'jawi');

    // Bina semula grid belajar, kuiz, atau pemilih lakaran
    if (activeTab === 'learn') {
        initAbcGrid();
    } else if (activeTab === 'quiz') {
        resetQuiz();
    } else if (activeTab === 'trace') {
        initTraceSelector();
    }

    updateModeSelectorLabels();
}

// Kemas kini label pemilih mod belajar
function updateModeSelectorLabels() {
    const btnVoiceLetter = document.getElementById('btnVoiceLetter').querySelector('span');
    const btnVoiceWord = document.getElementById('btnVoiceWord').querySelector('span');

    if (currentCategory === 'abc') {
        if (currentLanguage === 'ms') {
            btnVoiceLetter.textContent = '🔠 Sebut Huruf (A)';
            btnVoiceWord.textContent = '🐔 Huruf & Perkataan';
        } else {
            btnVoiceLetter.textContent = '🔠 Say Letter (A)';
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
