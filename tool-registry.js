/* Daily Magic Tool Registry
 * Add a category or tool here; keep each tool's standalone page at tools/<id>.html.
 * The application shell reads this registry without mixing catalogue data into UI logic.
 */
(() => {
  "use strict";
  const categories = [
    {id:"calculator",icon:"∑",color:"#9b8cff",en:"Calculators & Math",bn:"ক্যালকুলেটর ও গণিত",descEn:"Fast everyday calculations",descBn:"দৈনন্দিন হিসাব সহজে"},
    {id:"converter",icon:"⇄",color:"#62d7e8",en:"Converters",bn:"কনভার্টার",descEn:"Convert units and currencies",descBn:"একক ও মুদ্রা রূপান্তর"},
    {id:"text",icon:"Aa",color:"#ff9d75",en:"Text & Writing",bn:"টেক্সট ও লেখালেখি",descEn:"Format, count and clean text",descBn:"টেক্সট গুছান ও গণনা করুন"},
    {id:"image",icon:"▧",color:"#ed8ac2",en:"Image & Design",bn:"ছবি ও ডিজাইন",descEn:"Image tools are on the roadmap",descBn:"ছবির টুলস আসছে"},
    {id:"pdf",icon:"▤",color:"#ff777e",en:"PDF & Documents",bn:"PDF ও ডকুমেন্ট",descEn:"Document utilities are coming",descBn:"ডকুমেন্ট টুলস আসছে"},
    {id:"developer",icon:"⌘",color:"#79b8ff",en:"Developer Tools",bn:"ডেভেলপার টুলস",descEn:"Handy web-development helpers",descBn:"ওয়েব ডেভেলপমেন্ট সহায়ক টুলস"},
    {id:"datetime",icon:"◷",color:"#77d6a5",en:"Date & Time",bn:"তারিখ ও সময়",descEn:"Dates, timers and time zones",descBn:"তারিখ, টাইমার ও টাইম জোন"},
    {id:"money",icon:"৳",color:"#f6c85f",en:"Money & Finance",bn:"টাকা ও ফাইন্যান্স",descEn:"Plan and calculate money",descBn:"অর্থের হিসাব ও পরিকল্পনা"},
    {id:"education",icon:"⌑",color:"#9bb7ff",en:"Education & Study",bn:"শিক্ষা ও পড়াশোনা",descEn:"Useful student helpers",descBn:"শিক্ষার্থীদের প্রয়োজনীয় টুলস"},
    {id:"fun",icon:"✧",color:"#d9a0ff",en:"Fun & Random",bn:"মজার ও র‍্যান্ডম",descEn:"Pick, generate and explore",descBn:"বেছে নিন, তৈরি করুন, মজা করুন"},
    {id:"security",icon:"♢",color:"#79d7f2",en:"Privacy & Security",bn:"প্রাইভেসি ও নিরাপত্তা",descEn:"Create and check passwords locally",descBn:"ব্রাউজারেই পাসওয়ার্ড তৈরি ও যাচাই করুন"},
    {id:"lifestyle",icon:"♡",color:"#ff9eb5",en:"Health & Lifestyle",bn:"স্বাস্থ্য ও জীবনযাপন",descEn:"Everyday wellness calculations",descBn:"দৈনন্দিন সুস্থতা ও জীবনযাপনের হিসাব"}
  ];
  const tools = [
    {id:"age",icon:"🎂",cat:"calculator",en:"Age Calculator",bn:"বয়স ক্যালকুলেটর",descEn:"Find your age in years, months and days.",descBn:"বছর, মাস ও দিনে সঠিক বয়স জানুন.",keys:"birth date birthday"},
    {id:"percentage",icon:"％",cat:"calculator",en:"Percentage Calculator",bn:"শতকরা ক্যালকুলেটর",descEn:"Calculate percentages quickly.",descBn:"সহজে শতকরা হিসাব করুন.",keys:"percent math"},
    {id:"discount",icon:"🏷️",cat:"money",en:"Discount Calculator",bn:"ছাড়ের হিসাব",descEn:"Calculate sale price and savings.",descBn:"ছাড়ের পর দাম ও সাশ্রয় হিসাব করুন.",keys:"sale price"},
    {id:"profit",icon:"📈",cat:"money",en:"Profit & Loss",bn:"লাভ-ক্ষতি",descEn:"Calculate profit, loss and percentage.",descBn:"লাভ, ক্ষতি ও শতকরা হিসাব করুন.",keys:"business"},
    {id:"bmi",icon:"⚖️",cat:"lifestyle",en:"BMI Calculator",bn:"BMI ক্যালকুলেটর",descEn:"Calculate body mass index.",descBn:"বডি মাস ইনডেক্স হিসাব করুন.",keys:"health weight height"},
    {id:"cgpa",icon:"🎓",cat:"education",en:"GPA / CGPA Calculator",bn:"GPA / CGPA ক্যালকুলেটর",descEn:"Calculate grade point averages.",descBn:"গ্রেড পয়েন্টের গড় হিসাব করুন.",keys:"student marks result"},
    {id:"date",icon:"📅",cat:"datetime",en:"Date Calculator",bn:"তারিখ ক্যালকুলেটর",descEn:"Find date differences and add days.",descBn:"তারিখের ব্যবধান ও দিন যোগ করুন.",keys:"calendar"},
    {id:"emi",icon:"💳",cat:"money",en:"EMI Calculator",bn:"EMI ক্যালকুলেটর",descEn:"Estimate monthly loan payments.",descBn:"মাসিক ঋণের কিস্তি অনুমান করুন.",keys:"loan installment"},
    {id:"loan",icon:"🏦",cat:"money",en:"Loan Calculator",bn:"ঋণ ক্যালকুলেটর",descEn:"Estimate loan repayment and interest.",descBn:"ঋণ পরিশোধ ও সুদ হিসাব করুন.",keys:"interest"},
    {id:"salary",icon:"💰",cat:"money",en:"Salary Calculator",bn:"বেতন ক্যালকুলেটর",descEn:"Calculate monthly and annual salary.",descBn:"মাসিক ও বার্ষিক বেতন হিসাব করুন.",keys:"income"},
    {id:"tax",icon:"🧾",cat:"money",en:"Tax Calculator",bn:"কর ক্যালকুলেটর",descEn:"Estimate tax from a rate.",descBn:"হার অনুযায়ী করের হিসাব করুন.",keys:"income tax"},
    {id:"area",icon:"📐",cat:"calculator",en:"Area Calculator",bn:"ক্ষেত্রফল ক্যালকুলেটর",descEn:"Calculate common shapes and areas.",descBn:"বিভিন্ন আকৃতির ক্ষেত্রফল হিসাব করুন.",keys:"geometry"},
    {id:"average",icon:"📊",cat:"calculator",en:"Average Calculator",bn:"গড় ক্যালকুলেটর",descEn:"Find average, sum and count.",descBn:"গড়, যোগফল ও সংখ্যা বের করুন.",keys:"mean math"},
    {id:"unit",icon:"⇄",cat:"converter",en:"Unit Converter",bn:"একক রূপান্তর",descEn:"Convert length, weight and temperature.",descBn:"দৈর্ঘ্য, ওজন ও তাপমাত্রা রূপান্তর করুন.",keys:"cm feet kg lb"},
    {id:"currency",icon:"💱",cat:"converter",en:"Currency Converter",bn:"মুদ্রা রূপান্তর",descEn:"Convert currencies using available rates.",descBn:"উপলভ্য বিনিময় হার দিয়ে মুদ্রা বদলান.",keys:"money exchange taka dollar"},
    {id:"timezone",icon:"🌍",cat:"datetime",en:"Time Zone Converter",bn:"টাইম জোন কনভার্টার",descEn:"Compare times across time zones.",descBn:"বিভিন্ন টাইম জোনের সময় মিলিয়ে নিন.",keys:"world clock"},
    {id:"days-until",icon:"⏳",cat:"datetime",en:"Days Until",bn:"আর কত দিন বাকি",descEn:"Count down to an important date.",descBn:"গুরুত্বপূর্ণ তারিখ পর্যন্ত দিন গুনুন.",keys:"countdown event"},
    {id:"number-to-words",icon:"🔢",cat:"text",en:"Number to Words",bn:"সংখ্যা থেকে কথায়",descEn:"Turn numbers into English words.",descBn:"সংখ্যাকে ইংরেজি কথায় রূপান্তর করুন.",keys:"writing"},
    {id:"random",icon:"🎲",cat:"fun",en:"Random Number",bn:"র‍্যান্ডম সংখ্যা",descEn:"Generate a number within any range.",descBn:"নির্দিষ্ট সীমার মধ্যে সংখ্যা তৈরি করুন.",keys:"generator"},
    {id:"random-picker",icon:"🎯",cat:"fun",en:"Random Name Picker",bn:"র‍্যান্ডম নাম বাছাই",descEn:"Pick a name or item at random.",descBn:"এলোমেলোভাবে নাম বা আইটেম বেছে নিন.",keys:"lucky draw"},
    {id:"timer",icon:"⏱️",cat:"datetime",en:"Countdown Timer",bn:"কাউন্টডাউন টাইমার",descEn:"Set a simple task timer.",descBn:"কাজের জন্য টাইমার সেট করুন.",keys:"stopwatch"},
    {id:"password",icon:"🔐",cat:"security",en:"Password Generator",bn:"পাসওয়ার্ড জেনারেটর",descEn:"Generate strong passwords locally.",descBn:"ব্রাউজারেই শক্তিশালী পাসওয়ার্ড তৈরি করুন.",keys:"security"},
    {id:"password-strength",icon:"🛡️",cat:"security",en:"Password Strength",bn:"পাসওয়ার্ডের শক্তি",descEn:"Check password strength in your browser.",descBn:"ব্রাউজারে পাসওয়ার্ডের শক্তি যাচাই করুন.",keys:"security"},
    {id:"qr",icon:"▦",cat:"fun",en:"QR Code Generator",bn:"QR কোড জেনারেটর",descEn:"Create a QR code from text or a link.",descBn:"টেক্সট বা লিংক থেকে QR কোড তৈরি করুন.",keys:"scan"},
    {id:"word",icon:"📝",cat:"text",en:"Word Counter",bn:"শব্দ গণনা",descEn:"Count words, characters and reading time.",descBn:"শব্দ, অক্ষর ও পড়ার সময় গণনা করুন.",keys:"character count"},
    {id:"case",icon:"Aa",cat:"text",en:"Case Converter",bn:"লেখার ধরন বদলান",descEn:"Convert text case in one click.",descBn:"এক ক্লিকে বড়-ছোট হাতের লেখা বদলান.",keys:"uppercase lowercase"},
    {id:"json-formatter",icon:"{ }",cat:"developer",en:"JSON Formatter",bn:"JSON ফরম্যাটার",descEn:"Format and minify JSON data.",descBn:"JSON ডেটা গুছিয়ে নিন বা ছোট করুন.",keys:"code developer"},
    {id:"url-encoder",icon:"🔗",cat:"developer",en:"URL Encoder / Decoder",bn:"URL এনকোডার / ডিকোডার",descEn:"Encode or decode URL text.",descBn:"URL টেক্সট এনকোড বা ডিকোড করুন.",keys:"web developer"},
    {id:"duplicate-lines",icon:"🧹",cat:"text",en:"Duplicate Line Remover",bn:"ডুপ্লিকেট লাইন সরান",descEn:"Remove repeated lines and sort text.",descBn:"একই লাইন বাদ দিন ও টেক্সট সাজান.",keys:"clean text"}
  ];
  window.DAILY_MAGIC_REGISTRY = Object.freeze({
    categories: Object.freeze(categories),
    tools: Object.freeze(tools)
  });
})();
