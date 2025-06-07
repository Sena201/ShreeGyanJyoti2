const translations = {
  en: {
    title: "Shree Gyan Jyoti Secondary School",
    "school-name": "Shree Gyan Jyoti Secondary School",
    location: "Ajirkot-3, Lapsibot, Gorkha",
    "news-title": "📢 News & Announcements",
    "news-body": `
      We are excited to announce that Summer Break will officially begin on <b>June 22</b> and will continue until <b>July 30</b>.<br>
      This is the perfect time to relax, recharge, and enjoy some well-deserved rest!<br><br>
      🎒 Last day of school before break: <b>June 20</b><br>
      📚 Classes will resume on: <b>July 31</b><br><br>
      Wishing everyone a safe, joyful, and refreshing summer holiday! 🌴🍉🌈
    `,
    "announcement-btn": "View All Announcements",
    "academics-title": "📚 Academic Programs",
    "academics-body": "We offer classes from Nursery to Grade 12, including Science, Management, and Humanities streams in +2 levels.",
    "faculty-title": "👩‍🏫 Faculty Members",
    "achievements-title": "🏆 Achievements",
    "achievements-list": `
      <li>Rural Municipality Topper in SEE 2080</li>
      <li>First place in Inter-school Science Exhibition 2079</li>
      <li>Best School Award in Gorkha District - 2078</li>
      <li>Ratrapati Running Shield - 2080</li>
    `,
    "contact-title": "📞 Contact Us",
    address: "Ajirkot-3, Lapsibot, Gorkha",
    phone: "Phone: +977-9856071623",
    email: "Email: shubhudu2010@gmail.com",
    footer: "© 2025 Shree Gyan Jyoti Secondary School. All rights reserved.",
  },
  np: {
    title: "श्री ज्ञान ज्योति माध्यमिक विद्यालय",
    "school-name": "श्री ज्ञान ज्योति माध्यमिक विद्यालय",
    location: "अजिरकोट-३, लप्सिबोट, गोरखा",
    "news-title": "📢 समाचार तथा सूचना",
    "news-body": `
      हामी उत्साहित छौं कि ग्रीष्मकालीन बिदा <b>असार ७</b> देखि सुरु भई <b>साउन १४</b> सम्म हुनेछ।<br>
      यो विश्राम, ऊर्जा संकलन, र आनन्द लिने उत्तम समय हो!<br><br>
      🎒 बिदा अघि अन्तिम कक्षा: <b>असार ५</b><br>
      📚 कक्षा पुनः सुरु हुने मिति: <b>साउन १५</b><br><br>
      सबैलाई सुरक्षित, रमाइलो र ताजगीपूर्ण गर्मी बिदाको शुभकामना! 🌴🍉🌈
    `,
    "announcement-btn": "सबै सूचना हेर्नुहोस्",
    "academics-title": "📚 शैक्षिक कार्यक्रमहरू",
    "academics-body": "हामी नर्सरीदेखि कक्षा १२ सम्मका कक्षा सञ्चालन गर्छौं, जसमा +2 मा विज्ञान, व्यवस्थापन, र मानविकी समावेश छन्।",
    "faculty-title": "👩‍🏫 शिक्षक सदस्यहरू",
    "achievements-title": "🏆 उपलब्धिहरू",
    "achievements-list": `
      <li>एसईई २०८० मा गाउँपालिका टपर</li>
      <li>इन्टर स्कूल विज्ञान प्रदर्शनी २०७९ मा प्रथम स्थान</li>
      <li>गोरखा जिल्लाको उत्कृष्ट विद्यालय पुरस्कार - २०७८</li>
      <li>राष्ट्रपतिको रनिङ शिल्ड - २०८०</li>
    `,
    "contact-title": "📞 सम्पर्क गर्नुहोस्",
    address: "अजिरकोट-३, लप्सिबोट, गोरखा",
    phone: "फोन: +९७७-९८५६०७१६२३",
    email: "इमेल: shubhudu2010@gmail.com",
    footer: "© २०२५ श्री ज्ञान ज्योति माध्यमिक विद्यालय। सबै अधिकार सुरक्षित।",
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});
