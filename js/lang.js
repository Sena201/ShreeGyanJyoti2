const translations = {
  en: {
    title: "Shree Gyan Jyoti Secondary School",
    heading: "Shree Gyan Jyoti Secondary School",
    location: "Ajirkot-3, Lapsibot, Gorkha",
    news: "📢 News & Announcements",
    announcement: "Summer Break begins June 22 and ends July 30.",
    contact: "📞 Contact Us",
    phone: "Phone: +977-9856071623",
    email: "Email: shubhudu2010@gmail.com",
  },
  np: {
    title: "श्री ज्ञान ज्योति माध्यमिक विद्यालय",
    heading: "श्री ज्ञान ज्योति माध्यमिक विद्यालय",
    location: "अजिरकोट-३, लप्सिबोट, गोरखा",
    news: "📢 समाचार तथा सूचना",
    announcement: "गर्मी बिदा असार ७ देखि साउन १४ सम्म हुनेछ।",
    contact: "📞 सम्पर्क गर्नुहोस्",
    phone: "फोन: +९७७-९८५६०७१६२३",
    email: "इमेल: shubhudu2010@gmail.com",
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
