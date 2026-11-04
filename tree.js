// ===== ڈھانچہ: ادارے/مضمون اور ان کے اندر عہدے/چیپٹرز =====
// t:"d" = ادارہ (Department)، t:"s" = مضمون (Subject)
// k = عہدوں یا چیپٹرز کی فہرست۔ نیا عہدہ/چیپٹر بنانے کے لیے بس فہرست میں نام لکھ دیں۔
const TREE={
"FIA":{t:"d",k:["General Paper","Constable","ASI","Sub Inspector","Inspector","UDC","LDC","Assistant","Superintendent"]},
"NCCIA":{t:"d",k:["General Paper","Constable","ASI","Sub Inspector","UDC","Steno Typist","Technical Assistant","Constable Driver"]},
"FPSC":{t:"d",k:["General Paper","Assistant","UDC","LDC","Inspector","Stenographer"]},
"PPSC":{t:"d",k:["General Paper","Assistant","Junior Clerk","Inspector","Sub Inspector","Lecturer"]},
"SPSC":{t:"d",k:["General Paper","Assistant","Junior Clerk","Inspector","Lecturer"]},
"Police":{t:"d",k:["General Paper","Constable","ASI","Sub Inspector","Driver Constable","Clerk"]},
"Army":{t:"d",k:["General Paper","Soldier","Clerk","Civilian Posts","Driver"]},
"Bank":{t:"d",k:["General Paper","Teller","Clerk","Banking Officer"]},
"NTS":{t:"d",k:["General Paper","Analytical Reasoning","Subject Test"]},
"Teachers":{t:"d",k:["General Paper","PST","JST","SST","Subject Specialist","Lecturer"]},

"Pak Study":{t:"s",k:["Important MCQs","Geography","Agriculture","Mountains","Rivers","History","Constitution","Economy"]},
"Islamiat":{t:"s",k:["Important MCQs","Quran Majeed","Hadith","Seerat-un-Nabi","Khulafa-e-Rashideen","Arkan-e-Islam","Islamic History"]},
"English":{t:"s",k:["Important MCQs","Grammar","Vocabulary","Synonyms","Antonyms","Tenses","Idioms","Sentence Correction"]},
"General Knowledge":{t:"s",k:["Important MCQs","World Geography","Famous Personalities","Inventions","Countries & Capitals","Awards","Sports"]},
"General Science":{t:"s",k:["Important MCQs","Physics","Chemistry","Biology","Health & Diseases","Space","Everyday Science"]},
"Computer":{t:"s",k:["Basics","MS Office","Internet","Hardware","Software"]},
"Maths":{t:"s",k:["Arithmetic","Algebra","Percentage","Ratio","Geometry"]},
"Urdu":{t:"s",k:["Grammar","Muhawarey","Mutradifat","Adab"]},
"Pedagogy":{t:"s",k:["Teaching Methods","Classroom Management","Educational Psychology","Assessment"]},
"Current Affairs":{t:"s",k:["Pakistan","International","Monthly","Yearly"]},
"Analytical Reasoning":{t:"s",k:["Verbal Reasoning","Non Verbal Reasoning","Number Series","Analogies","Coding Decoding"]}
};

// ہر عہدے/چیپٹر کے MCQs یہاں شامل کریں۔ نام: "ادارہ/عہدہ"
// پہلا عہدہ (General Paper یا Important MCQs) خود بخود data.js اور subjects.js کے پرانے MCQs دکھاتا ہے۔
// MCQ کا فارمیٹ وہی ہے: "سوال|A|B|C|D|صحیح نمبر|اردو سوال|وضاحت"
const LEAF={
"Pak Study/Rivers":[
"Longest river of Pakistan is?|Indus|Jhelum|Ravi|Chenab|0|پاکستان کا سب سے لمبا دریا کون سا ہے؟|دریائے سندھ پاکستان کا سب سے لمبا دریا ہے۔",
"Which river flows through Lahore?|Ravi|Indus|Jhelum|Kabul|0|لاہور کے پاس سے کون سا دریا گزرتا ہے؟|دریائے راوی لاہور کے قریب بہتا ہے۔"
],
"Pak Study/Mountains":[
"Highest peak of Pakistan is?|K2|Nanga Parbat|Tirich Mir|Rakaposhi|0|پاکستان کی سب سے اونچی چوٹی کون سی ہے؟|K2 پاکستان کی بلند ترین چوٹی ہے۔"
],
"English/Tenses":[
"She ___ to school every day.|go|goes|going|gone|1|خالی جگہ پر کریں|Present tense میں she کے ساتھ verb پر s/es لگتا ہے۔"
],
"General Science/Biology":[
"Powerhouse of the cell is?|Nucleus|Mitochondria|Ribosome|Vacuole|1|خلیے کا پاور ہاؤس کسے کہتے ہیں؟|مائٹوکونڈریا توانائی بناتا ہے۔"
]
};

// addQ: نئے MCQs جوڑتا ہے۔ دونوں فارمیٹ سمجھتا ہے:
// 1) "سوال|A|B|C|D|0|اردو|وضاحت"   2) ChatGPT والا الگ الگ ٹکڑوں کا فارمیٹ: "سوال","A","B","C","D",0,"اردو","وضاحت",
window.addQ=function(k,a){
  if(a.length>=8&&String(a[0]).indexOf("|")<0){
    const o=[];for(let i=0;i+5<a.length;i+=8)o.push(a.slice(i,i+8).map(x=>x==null?"":String(x)).join("|"));a=o}
  LEAF[k]=(Array.isArray(LEAF[k])?LEAF[k]:[]).concat(a)};
