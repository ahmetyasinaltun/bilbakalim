let countries = [];
let filteredCountries = [];
let maxWrong = 3;
let wrongCount = 0;
let score = 0;
let usedIndexes = [];
let currentCountry = null;
let sfxOn = true;
let musicOn = true;
let musicList = [];
let currentMusicIndex = 0;
let hintStep = 0;
let selectedContinents = [
  'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctic'
];
let musicVolume = 0.2;
let sfxVolume = 0.5;

// Alternatif ülke isimleri (kısa ve yaygın kullanımlar)
const countryAltNames = {
  'United Kingdom': ['ingiltere', 'britanya', 'uk', 'birleşik krallık', 'birlesik krallik', 'england'],
  'Birleşik Krallık': ['ingiltere', 'britanya', 'uk', 'birleşik krallık', 'birlesik krallik', 'england'],
  'United States': ['amerika', 'abd', 'amerika birleşik devletleri', 'amerika birlesik devletleri', 'usa', 'us'],
  'Russia': ['rusya', 'rusya federasyonu'],
  'South Korea': ['güney kore', 'guney kore', 'kore'],
  'North Korea': ['kuzey kore'],
  'Czechia': ['çekya', 'cekya', 'çek cumhuriyeti', 'cek cumhuriyeti'],
  'Turkey': ['türkiye', 'turkiye'],
  'Greece': ['yunanistan'],
  'Egypt': ['mısır', 'misir'],
  'Ivory Coast': ['fildişi sahili', 'fildisi sahili'],
  'China': ['çin', 'cin'],
  'Japan': ['japonya'],
  'Germany': ['almanya'],
  'France': ['fransa'],
  'Spain': ['ispanya'],
  'Italy': ['italya'],
  'Netherlands': ['hollanda', 'nederland'],
  'Norway': ['norveç', 'norvec'],
  'Sweden': ['isveç', 'isvec'],
  'Denmark': ['danimarka'],
  'Finland': ['finlandiya'],
  'Canada': ['kanada'],
  'Brazil': ['brezilya', 'brezilya federatif cumhuriyeti'],
  'Argentina': ['arjantin'],
  'Mexico': ['meksika'],
  'Australia': ['avustralya'],
  'New Zealand': ['yeni zelanda'],
  'India': ['hindistan'],
  'Saudi Arabia': ['suudi arabistan'],
  'United Arab Emirates': ['birleşik arap emirlikleri', 'birlesik arap emirlikleri', 'bae'],
  'South Africa': ['güney afrika', 'guney afrika'],
  'Switzerland': ['isviçre', 'isvicre'],
  'Poland': ['polonya'],
  'Portugal': ['portekiz'],
  'Belgium': ['belçika', 'belcika'],
  'Austria': ['avusturya'],
  'Hungary': ['macaristan'],
  'Romania': ['romanya'],
  'Bulgaria': ['bulgaristan'],
  'Serbia': ['sırbistan', 'sirbistan'],
  'Croatia': ['hrvatska', 'hrvatistan', 'hrvat'],
  'Slovakia': ['slovakya'],
  'Slovenia': ['slovenya'],
  'Ukraine': ['ukrayna'],
  'Georgia': ['gürcistan', 'gurcistan'],
  'Azerbaijan': ['azerbaycan'],
  'Kazakhstan': ['kazakistan'],
  'Uzbekistan': ['özbekistan', 'ozbekistan'],
  'Turkmenistan': ['türkmenistan', 'turkmenistan'],
  'Kyrgyzstan': ['kırgızistan', 'kirgizistan'],
  'Tajikistan': ['tacikistan'],
  'Pakistan': ['pakistan'],
  'Bangladesh': ['bangladeş', 'banglades'],
  'Indonesia': ['endonezya'],
  'Malaysia': ['malezya'],
  'Singapore': ['singapur'],
  'Thailand': ['tayland'],
  'Vietnam': ['vietnam'],
  'Philippines': ['filipinler'],
  'Israel': ['israil'],
  'Palestine': ['filistin'],
  'Syria': ['suriye'],
  'Iraq': ['irak'],
  'Iran': ['iran'],
  'Jordan': ['ürdün', 'urdun'],
  'Lebanon': ['lübnan', 'lubnan'],
  'Qatar': ['katar'],
  'Kuwait': ['kuveyt'],
  'Oman': ['umman'],
  'Yemen': ['yemen'],
  'Morocco': ['fas'],
  'Algeria': ['cezayir'],
  'Tunisia': ['tunus'],
  'Libya': ['libya'],
  'Sudan': ['sudan'],
  'Ethiopia': ['etiyopya'],
  'Kenya': ['kenya'],
  'Nigeria': ['nijerya'],
  'Ghana': ['gana'],
  'Senegal': ['senegal'],
  'Cameroon': ['kamerun'],
  'Angola': ['angola'],
  'Zimbabwe': ['zimbabve'],
  'Uganda': ['uganda'],
  'Tanzania': ['tanzanya'],
  'Mozambique': ['mozambik'],
  'Zambia': ['zambiya'],
  'Botswana': ['botsvana'],
  'Namibia': ['namibya'],
  'Madagascar': ['madagaskar'],
  'Cuba': ['kuba'],
  'Jamaica': ['jamaika'],
  'Dominican Republic': ['dominikan', 'dominikan cumhuriyeti'],
  'Haiti': ['haiti'],
  'Chile': ['şili', 'sili'],
  'Colombia': ['kolombiya'],
  'Peru': ['peru'],
  'Venezuela': ['venezuela'],
  'Ecuador': ['ekvador'],
  'Paraguay': ['paraguay'],
  'Uruguay': ['uruguay'],
  'Bolivia': ['bolivya'],
  'Costa Rica': ['kosta rika'],
  'Panama': ['panama'],
  'Guatemala': ['guatemala'],
  'Honduras': ['honduras'],
  'El Salvador': ['el salvador'],
  'Nicaragua': ['nikaragua'],
  'Puerto Rico': ['porto riko'],
  'Greenland': ['grönland', 'gronland'],
  'Iceland': ['izlanda'],
  'Estonia': ['estonya'],
  'Latvia': ['letonya'],
  'Lithuania': ['litvanya'],
  'Belarus': ['beyaz rusya', 'belarus'],
  'Moldova': ['moldova'],
  'Armenia': ['ermenistan'],
  'Mongolia': ['moğolistan', 'mogolistan'],
  'Nepal': ['nepal'],
  'Sri Lanka': ['sri lanka'],
  'Maldives': ['maldivler'],
  'Afghanistan': ['afganistan'],
  'Cyprus': ['kıbrıs', 'kibris'],
  'Montenegro': ['karadağ', 'karadag'],
  'Bosnia and Herzegovina': ['bosna hersek', 'bosna'],
  'Albania': ['arnavutluk'],
  'Macedonia': ['makedonya'],
  'Kosovo': ['kosova'],
  'Vatican City': ['vatikan'],
  'San Marino': ['san marino'],
  'Monaco': ['monako'],
  'Liechtenstein': ['lihtenştayn', 'lihtenstayn', 'lichtenstein'],
  'Luxembourg': ['lüksemburg', 'luksemburg'],
  'Andorra': ['andorra'],
  'Malta': ['malta'],
  'Seychelles': ['seyşeller', 'seyseller'],
  'Mauritius': ['mauritius'],
  'Fiji': ['fiji'],
  'Samoa': ['samoa'],
  'Tonga': ['tonga'],
  'Papua New Guinea': ['papua yeni gine'],
  'Solomon Islands': ['solomon adaları', 'solomon adalari'],
  'Vanuatu': ['vanuatu'],
  'Micronesia': ['mikronezya'],
  'Palau': ['palau'],
  'Marshall Islands': ['marshall adaları', 'marshall adalari'],
  'Kiribati': ['kiribati'],
  'Tuvalu': ['tuvalu'],
  'Nauru': ['nauru'],
  'Tonga': ['tonga'],
  'Samoa': ['samoa'],
  'Tonga': ['tonga'],
  'Comoros': ['komorlar'],
  'Djibouti': ['cibuti'],
  'Eritrea': ['eritrea'],
  'Gabon': ['gabon'],
  'Gambia': ['gambiya'],
  'Guinea': ['gin'],
  'Guinea-Bissau': ['gin bisav'],
  'Lesotho': ['lesoto'],
  'Liberia': ['liberya'],
  'Malawi': ['malavi'],
  'Mauritania': ['moritanya'],
  'Niger': ['nijer'],
  'Rwanda': ['ruanda'],
  'Sierra Leone': ['sierra leone'],
  'Somalia': ['somali'],
  'South Sudan': ['güney sudan', 'guney sudan'],
  'Togo': ['togo'],
  'Benin': ['benin'],
  'Burkina Faso': ['burkina faso'],
  'Burundi': ['burundi'],
  'Central African Republic': ['orta afrika cumhuriyeti'],
  'Chad': ['çad', 'cad'],
  'Congo': ['kongo'],
  'Democratic Republic of the Congo': ['demokratik kongo', 'kongo demokratik cumhuriyeti'],
  'Equatorial Guinea': ['ekvator ginesi'],
  'Eswatini': ['esvatini', 'svaziland'],
  'Guinea': ['gin'],
  'Guinea-Bissau': ['gin bisav'],
  'Madagascar': ['madagaskar'],
  'Mali': ['mali'],
  'Sao Tome and Principe': ['sao tome', 'sao tome ve principe'],
  'Senegal': ['senegal'],
  'Seychelles': ['seyşeller', 'seyseller'],
  'Tanzania': ['tanzanya'],
  'Uganda': ['uganda'],
  'Zambia': ['zambiya'],
  'Zimbabwe': ['zimbabve']
};

// Oyun dışı bırakılacak özel bölgeler ve bağımlılıklar
const EXCLUDED_COUNTRIES = [
  'Svalbard and Jan Mayen',
  'Bouvet Island',
  'Heard Island and McDonald Islands',
  'French Southern Territories',
  'Antarctica',
  'South Georgia and the South Sandwich Islands',
  'Pitcairn Islands',
  'British Indian Ocean Territory',
  'United States Minor Outlying Islands',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Norfolk Island',
  'Falkland Islands',
  'Macau',
  'Hong Kong',
  'Guernsey',
  'Jersey',
  'Isle of Man',
  'Gibraltar',
  'Bermuda',
  'Cayman Islands',
  'Montserrat',
  'Anguilla',
  'Turks and Caicos Islands',
  'British Virgin Islands',
  'U.S. Virgin Islands',
  'Saint Pierre and Miquelon',
  'Greenland',
  'Aruba',
  'Curacao',
  'Sint Maarten',
  'Bonaire',
  'Saint Barthelemy',
  'Saint Martin',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Tokelau',
  'Niue',
  'Cook Islands',
  'French Polynesia',
  'New Caledonia',
  'Wallis and Futuna',
  'Mayotte',
  'Réunion',
  'Martinique',
  'Guadeloupe',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Grenada',
  'Barbados',
  'Saint Kitts and Nevis',
  'Antigua and Barbuda',
  'Dominica',
  'Sint Eustatius',
  'Saba',
  'Saint Martin',
  'Saint Barthelemy',
  'Caribbean Netherlands',
  'Faroe Islands',
  'Åland Islands',
  'Western Sahara',
  'Palestine',
  'Kosovo'
];

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const maxWrongInput = document.getElementById('max-wrong');
const startBtn = document.getElementById('start-btn');
const wrongCountSpan = document.getElementById('wrong-count');
const flagImg = document.getElementById('flag-img');
const countryInput = document.getElementById('country-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackDiv = document.getElementById('feedback');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const music1 = document.getElementById('music1');
const music2 = document.getElementById('music2');
const music3 = document.getElementById('music3');
const toggleSfxBtn = document.getElementById('toggle-sfx');
const toggleMusicBtn = document.getElementById('toggle-music');
const hintBtn = document.getElementById('hint-btn');
const hintArea = document.getElementById('hint-area');
const continentCheckboxes = document.querySelectorAll('.continent-checkbox');
const cityNameDiv = document.getElementById('city-name');

const musicVolumeInput = document.getElementById('music-volume');
const sfxVolumeInput = document.getElementById('sfx-volume');
const musicVolumeLabel = document.getElementById('music-volume-label');
const sfxVolumeLabel = document.getElementById('sfx-volume-label');

musicList = [music1, music2, music3];

continentCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    selectedContinents = Array.from(continentCheckboxes)
      .filter(c => c.checked)
      .map(c => c.value);
  });
});

function setAllMusicVolume(vol) {
  musicList.forEach(m => { m.volume = vol; });
}
function setAllSfxVolume(vol) {
  if (correctSound) correctSound.volume = vol;
  if (wrongSound) wrongSound.volume = vol;
}
// Başlangıçta uygula
setAllMusicVolume(musicVolume);
setAllSfxVolume(sfxVolume);

musicVolumeInput.value = musicVolume * 100;
musicVolumeLabel.textContent = Math.round(musicVolume * 100);
sfxVolumeInput.value = sfxVolume * 100;
sfxVolumeLabel.textContent = Math.round(sfxVolume * 100);

musicVolumeInput.addEventListener('input', e => {
  musicVolume = parseInt(e.target.value) / 100;
  setAllMusicVolume(musicVolume);
  musicVolumeLabel.textContent = e.target.value;
});
sfxVolumeInput.addEventListener('input', e => {
  sfxVolume = parseInt(e.target.value) / 100;
  setAllSfxVolume(sfxVolume);
  sfxVolumeLabel.textContent = e.target.value;
});

function playNextMusic() {
  if (!musicOn) return;
  musicList.forEach((m, i) => { if (i !== currentMusicIndex) m.pause(); });
  const music = musicList[currentMusicIndex];
  if (music) {
    try {
      music.currentTime = 0;
      music.play();
      music.onended = () => {
        currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
        playNextMusic();
      };
    } catch (e) {}
  }
}
function stopAllMusic() {
  musicList.forEach(m => { try { m.pause(); m.currentTime = 0; } catch(e){} });
}

async function fetchCountries() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations,region');
    const data = await res.json();
    countries = data.map(c => ({
      name: c.name.common,
      flag: c.flags && c.flags.png ? c.flags.png : '',
      turkish: c.translations && c.translations.tur && c.translations.tur.common ? c.translations.tur.common : null,
      english: c.name.common,
      region: c.region || null
    }))
    // Özel bölgeleri çıkar
    .filter(c => c.flag && c.name && !EXCLUDED_COUNTRIES.includes(c.english));
  } catch (e) {
    alert('Ülke verileri yüklenemedi!');
  }
}

function normalize(str) {
  return str.trim().toLocaleLowerCase('tr-TR').replace(/ı/g, 'i');
}

function getRandomCountry() {
  if (usedIndexes.length === filteredCountries.length) usedIndexes = [];
  let idx;
  do {
    idx = Math.floor(Math.random() * filteredCountries.length);
  } while (usedIndexes.includes(idx));
  usedIndexes.push(idx);
  return filteredCountries[idx];
}

function showNextFlag() {
  currentCountry = getRandomCountry();
  flagImg.src = currentCountry.flag;
  flagImg.style.display = 'block';
  cityNameDiv.style.display = 'none';
  countryInput.value = '';
  feedbackDiv.textContent = '';
  countryInput.focus();
  hintStep = 0;
  hintArea.textContent = '';
}

function updateWrongCount() {
  wrongCountSpan.textContent = `Yanlış hak: ${wrongCount} / ${maxWrong}`;
}

// --- Şehirden Ülke Bilmece için değişkenler ---
let citiesData = [];
let cityMode = false;
let currentCityObj = null;
let currentCityName = '';
let usedCityNames = [];

const gameModeSelect = document.getElementById('game-mode');

// Şehir verisini yükle
async function fetchCities() {
  try {
    const res = await fetch('cities.json');
    citiesData = await res.json();
  } catch (e) {
    alert('Şehir verileri yüklenemedi!');
  }
}

function getRandomCityObj() {
  // Kullanılmayan şehirleri bul
  let available = [];
  citiesData.forEach(obj => {
    obj.cities.forEach(city => {
      if (!usedCityNames.includes(city)) {
        available.push({ obj, city });
      }
    });
  });
  if (available.length === 0) {
    // Tüm şehirler bitti, oyunu bitir
    endGame();
    return null;
  }
  const idx = Math.floor(Math.random() * available.length);
  return available[idx];
}

function showNextCity() {
  const result = getRandomCityObj();
  if (!result) return;
  currentCityObj = result.obj;
  currentCityName = result.city;
  flagImg.style.display = 'none';
  cityNameDiv.style.display = 'block';
  cityNameDiv.textContent = currentCityName;
  cityNameDiv.style.fontSize = '2.2em';
  cityNameDiv.style.fontWeight = '600';
  cityNameDiv.style.color = '#273c75';
  cityNameDiv.style.margin = '32px 0 24px 0';
  countryInput.value = '';
  feedbackDiv.textContent = '';
  countryInput.focus();
  hintStep = 0;
  hintArea.textContent = '';
}

// Oyun başlatma fonksiyonunu güncelle
async function startGame() {
  maxWrong = parseInt(maxWrongInput.value) || 3;
  wrongCount = 0;
  score = 0;
  usedIndexes = [];
  usedCityNames = [];
  cityMode = (gameModeSelect && gameModeSelect.value === 'city');
  if (cityMode) {
    if (citiesData.length === 0) await fetchCities();
    if (citiesData.length === 0) {
      alert('Şehir verisi yok!');
      return;
    }
    startScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    updateWrongCount();
    showNextCity();
    if (musicOn) {
      stopAllMusic();
      currentMusicIndex = Math.floor(Math.random() * musicList.length);
      playNextMusic();
    }
    return;
  }
  // Bayrak modu (mevcut akış)
  filteredCountries = countries.filter(c => selectedContinents.includes(c.region));
  if (filteredCountries.length === 0) {
    alert('Seçilen kıtalarda ülke yok!');
    return;
  }
  startScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  updateWrongCount();
  showNextFlag();
  if (musicOn) {
    stopAllMusic();
    currentMusicIndex = Math.floor(Math.random() * musicList.length);
    playNextMusic();
  }
}

function endGame() {
  gameScreen.style.display = 'none';
  resultScreen.style.display = 'block';
  finalScore.textContent = `Doğru sayısı: ${score}`;
  stopAllMusic();
  currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
}

// Levenshtein mesafesi hesaplama fonksiyonu
function levenshtein(a, b) {
  const an = a.length;
  const bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;
  const matrix = [];
  for (let i = 0; i <= bn; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= an; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[bn][an];
}

function playSound(sound) {
  if (!sound || !sfxOn) return;
  try {
    sound.currentTime = 0;
    sound.play();
  } catch (e) {}
}

function checkAnswer() {
  const userAnswer = normalize(countryInput.value);
  if (cityMode) {
    // Şehirden ülke modunda kontrol
    let correctAnswers = [normalize(currentCityObj.country)];
    let engName = null;
    for (const [eng, alts] of Object.entries(countryAltNames)) {
      if (alts.includes(normalize(currentCityObj.country)) || eng.toLowerCase() === currentCityObj.country.toLowerCase()) {
        engName = eng;
        break;
      }
    }
    if (engName) {
      correctAnswers.push(normalize(engName));
      if (countryAltNames[engName]) {
        correctAnswers = correctAnswers.concat(countryAltNames[engName].map(normalize));
      }
    }
    correctAnswers = correctAnswers.filter(Boolean);
    const isCorrect = correctAnswers.some(ans => userAnswer === ans || levenshtein(userAnswer, ans) <= 2);
    if (isCorrect) {
      score++;
      usedCityNames.push(currentCityName); // Doğru bilinen şehir tekrar çıkmasın
      feedbackDiv.textContent = 'Doğru!';
      feedbackDiv.style.color = '#44bd32';
      playSound(correctSound);
      setTimeout(() => {
        if (wrongCount < maxWrong) showNextCity();
      }, 800);
    } else {
      wrongCount++;
      let dogruCevap = currentCityObj.country;
      if (engName) dogruCevap += ' / ' + engName;
      feedbackDiv.textContent = `Yanlış! Doğru cevap: ${dogruCevap}`;
      feedbackDiv.style.color = '#e84118';
      playSound(wrongSound);
      updateWrongCount();
      setTimeout(() => {
        if (wrongCount < maxWrong) showNextCity();
        else endGame();
      }, 1200);
    }
    return;
  }
  // Bayrak modunda mevcut kontrol
  // Alternatif isimleri de dahil et
  let correctAnswers = [
    normalize(currentCountry.english),
    currentCountry.turkish ? normalize(currentCountry.turkish) : null
  ];
  // Alternatif isimler
  if (countryAltNames[currentCountry.english]) {
    correctAnswers = correctAnswers.concat(countryAltNames[currentCountry.english].map(normalize));
  }
  correctAnswers = correctAnswers.filter(Boolean);
  // Sadece ülke adı ve alternatifleriyle sınırla (ör: norveççe gibi varyasyonlar hariç)
  const isCorrect = correctAnswers.some(ans => userAnswer === ans || levenshtein(userAnswer, ans) <= 2);
  if (isCorrect) {
    score++;
    feedbackDiv.textContent = 'Doğru!';
    feedbackDiv.style.color = '#44bd32';
    playSound(correctSound);
    setTimeout(() => {
      if (wrongCount < maxWrong) showNextFlag();
    }, 800);
  } else {
    wrongCount++;
    feedbackDiv.textContent = `Yanlış! Doğru cevap: ${currentCountry.turkish ? currentCountry.turkish + ' / ' : ''}${currentCountry.english}`;
    feedbackDiv.style.color = '#e84118';
    playSound(wrongSound);
    updateWrongCount();
    setTimeout(() => {
      if (wrongCount < maxWrong) showNextFlag();
      else endGame();
    }, 1200);
  }
}

startBtn.addEventListener('click', async () => {
  if (gameModeSelect && gameModeSelect.value === 'city') {
    await startGame();
    return;
  }
  if (countries.length === 0) {
    await fetchCountries();
  }
  // Seçili kıtaları güncelle
  selectedContinents = Array.from(continentCheckboxes)
    .filter(c => c.checked)
    .map(c => c.value);
  // Müzik bir sonraki şarkıdan başlasın
  currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
  startGame();
});
submitBtn.addEventListener('click', checkAnswer);
countryInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkAnswer();
});
restartBtn.addEventListener('click', () => {
  startScreen.style.display = 'block';
  resultScreen.style.display = 'none';
  gameScreen.style.display = 'none';
  stopAllMusic();
});

toggleSfxBtn.addEventListener('click', () => {
  sfxOn = !sfxOn;
  toggleSfxBtn.textContent = 'Ses Efektleri: ' + (sfxOn ? 'Açık' : 'Kapalı');
  toggleSfxBtn.classList.toggle('active', sfxOn);
});
toggleMusicBtn.addEventListener('click', () => {
  musicOn = !musicOn;
  toggleMusicBtn.textContent = 'Müzik: ' + (musicOn ? 'Açık' : 'Kapalı');
  toggleMusicBtn.classList.toggle('active', musicOn);
  if (musicOn) {
    playNextMusic();
  } else {
    stopAllMusic();
  }
});

// İpucu fonksiyonunu güncelle
hintBtn.addEventListener('click', () => {
  if (cityMode) {
    if (!currentCityObj) return;
    // Şu anki şehir dışındaki diğer iki şehirden birini rastgele seç
    const otherCities = currentCityObj.cities.filter(c => c !== currentCityName);
    if (otherCities.length === 0) return;
    const randomIdx = Math.floor(Math.random() * otherCities.length);
    const otherCity = otherCities[randomIdx];
    hintArea.textContent = `${otherCity} şehri bu şehirle aynı ülkede.`;
    return;
  }
  if (!currentCountry) return;
  hintStep++;
  if (hintStep === 1) {
    // 1. ipucu: Kıta
    hintArea.textContent = currentCountry.region ? `Kıta: ${currentCountry.region}` : 'Kıta bilgisi yok.';
  } else if (hintStep === 2) {
    // 2. ipucu: İlk ve son harf (Türkçe ve İngilizce)
    let t = currentCountry.turkish || '';
    let e = currentCountry.english || '';
    let tHint = t ? `Türkçe: ${t[0]}...${t[t.length-1]}` : '';
    let eHint = e ? `İngilizce: ${e[0]}...${e[e.length-1]}` : '';
    hintArea.textContent = `${tHint}${tHint && eHint ? ' | ' : ''}${eHint}`;
  } else {
    hintArea.textContent = 'Daha fazla ipucu yok.';
  }
}); 