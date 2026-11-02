// مضمون کے لحاظ سے MCQs
// فارمیٹ: "سوال|A|B|C|D|صحیح نمبر (0=A,1=B,2=C,3=D)|اردو سوال|مختصر وضاحت"
// آخری دو حصے (اردو اور وضاحت) خالی چھوڑ سکتے ہیں۔ ہر لائن کے آخر میں کاما لازمی ہے۔
const SUBJECTS={
"Pak Study":[
"Who presented the idea of a separate Muslim state in the 1930 Allahabad address?|Allama Iqbal|M. A. Jinnah|Sir Syed|Liaquat Ali Khan|0|1930 کے خطبہ الہ آباد میں الگ مسلم ریاست کا تصور کس نے پیش کیا؟|علامہ اقبال نے 1930 میں مسلم لیگ کے اجلاس میں یہ تصور پیش کیا۔",
"Pakistan came into being on?|14 August 1947|15 August 1947|23 March 1940|25 December 1947|0|پاکستان کب وجود میں آیا؟|پاکستان 14 اگست 1947 کو قائم ہوا۔",
"First Governor General of Pakistan was?|M. A. Jinnah|Liaquat Ali Khan|Khawaja Nazimuddin|Iskander Mirza|0|پاکستان کے پہلے گورنر جنرل کون تھے؟|قائداعظم محمد علی جناح پاکستان کے پہلے گورنر جنرل تھے۔",
"First Prime Minister of Pakistan was?|Liaquat Ali Khan|Chaudhry Muhammad Ali|H. S. Suhrawardy|Z. A. Bhutto|0|پاکستان کے پہلے وزیراعظم کون تھے؟|لیاقت علی خان پاکستان کے پہلے وزیراعظم تھے۔",
"First capital of Pakistan was?|Karachi|Lahore|Rawalpindi|Islamabad|0|پاکستان کا پہلا دارالحکومت کون سا تھا؟|آزادی کے بعد کراچی دارالحکومت بنا۔",
"East Pakistan became Bangladesh in?|1965|1971|1973|1977|1|مشرقی پاکستان کب بنگلہ دیش بنا؟|یہ واقعہ 1971 میں ہوا۔"
],
"Islamiat":[
"How many Surahs are in the Holy Quran?|110|114|120|124|1|قرآن پاک میں کتنی سورتیں ہیں؟|قرآن پاک میں 114 سورتیں ہیں۔",
"The longest Surah of the Quran is?|Al-Baqarah|Al-Imran|An-Nisa|Al-Kahf|0|قرآن کی سب سے لمبی سورت کون سی ہے؟|سورۃ البقرہ سب سے لمبی سورت ہے۔",
"How many pillars of Islam are there?|3|4|5|6|2|اسلام کے کتنے ارکان ہیں؟|اسلام کے پانچ ارکان ہیں۔",
"The first caliph of Islam was?|Hazrat Abu Bakr (RA)|Hazrat Umar (RA)|Hazrat Usman (RA)|Hazrat Ali (RA)|0|اسلام کے پہلے خلیفہ کون تھے؟|حضرت ابوبکر صدیق رضی اللہ عنہ پہلے خلیفہ تھے۔",
"Which Surah was revealed first (first verses)?|Al-Alaq|Al-Fatiha|Al-Baqarah|Al-Ikhlas|0|سب سے پہلے کس سورت کی آیات نازل ہوئیں؟|غار حرا میں سورۃ العلق کی ابتدائی آیات نازل ہوئیں۔",
"Hijra to Madinah took place in?|610 AD|622 AD|632 AD|570 AD|1|ہجرت مدینہ کس سال ہوئی؟|ہجرت 622 عیسوی میں ہوئی۔"
],
"English":[
"Synonym of 'Rapid' is?|Slow|Quick|Weak|Late|1|Rapid کا ہم معنی لفظ؟|Rapid کا مطلب تیز ہے، جیسے Quick۔",
"Antonym of 'Ancient' is?|Old|Modern|Past|Historic|1|Ancient کا الٹ کیا ہے؟|Ancient یعنی قدیم، اس کا الٹ Modern ہے۔",
"Plural of 'Child' is?|Childs|Children|Childes|Childrens|1|Child کی جمع کیا ہے؟|Child کی جمع Children آتی ہے۔",
"She ___ to school every day.|go|goes|going|gone|1|خالی جگہ پر کریں|Present tense میں she کے ساتھ verb پر s/es لگتا ہے۔",
"Past tense of 'go' is?|goed|went|gone|going|1|go کا past tense کیا ہے؟|go کا past went اور past participle gone ہے۔",
"___ apple a day keeps the doctor away.|A|An|The|No article|1|خالی جگہ پر article لگائیں|Vowel آواز سے پہلے an آتا ہے۔"
],
"General Knowledge":[
"Largest planet of the solar system is?|Earth|Mars|Jupiter|Saturn|2|نظام شمسی کا سب سے بڑا سیارہ کون سا ہے؟|مشتری (Jupiter) سب سے بڑا سیارہ ہے۔",
"Largest ocean of the world is?|Atlantic|Indian|Arctic|Pacific|3|دنیا کا سب سے بڑا سمندر کون سا ہے؟|بحرالکاہل (Pacific) سب سے بڑا ہے۔",
"Capital of Japan is?|Tokyo|Beijing|Seoul|Bangkok|0|جاپان کا دارالحکومت کون سا ہے؟|جاپان کا دارالحکومت ٹوکیو ہے۔",
"Currency of the United Kingdom is?|Dollar|Euro|Pound Sterling|Yen|2|برطانیہ کی کرنسی کیا ہے؟|برطانیہ کی کرنسی پاؤنڈ سٹرلنگ ہے۔",
"How many continents are there in the world?|5|6|7|8|2|دنیا میں کتنے براعظم ہیں؟|دنیا میں سات براعظم مانے جاتے ہیں۔",
"Which is the largest country by area?|Canada|China|USA|Russia|3|رقبے کے لحاظ سے سب سے بڑا ملک کون سا ہے؟|روس رقبے میں دنیا کا سب سے بڑا ملک ہے۔"
],
"General Science":[
"Chemical formula of water is?|CO2|H2O|O2|NaCl|1|پانی کا کیمیائی فارمولا کیا ہے؟|پانی ہائیڈروجن کے دو اور آکسیجن کے ایک ایٹم سے بنتا ہے۔",
"Deficiency of Vitamin C causes?|Scurvy|Rickets|Night blindness|Anemia|0|وٹامن C کی کمی سے کون سی بیماری ہوتی ہے؟|وٹامن C کی کمی سے اسکروی ہوتی ہے۔",
"Powerhouse of the cell is?|Nucleus|Mitochondria|Ribosome|Vacuole|1|خلیے کا پاور ہاؤس کسے کہتے ہیں؟|مائٹوکونڈریا توانائی بناتا ہے۔",
"SI unit of force is?|Joule|Watt|Newton|Pascal|2|قوت کی SI اکائی کیا ہے؟|قوت کو نیوٹن میں ناپا جاتا ہے۔",
"Planet closest to the Sun is?|Venus|Mercury|Earth|Mars|1|سورج کے سب سے قریب سیارہ کون سا ہے؟|عطارد (Mercury) سورج کے سب سے قریب ہے۔",
"Gas we need for breathing is?|Oxygen|Nitrogen|Hydrogen|Helium|0|سانس لینے کے لیے کون سی گیس ضروری ہے؟|انسان سانس میں آکسیجن لیتا ہے۔"
]
};
