
let isExpanded = false; // برای دنبال‌کردن وضعیت متن

function clickHaeder() {
  let additionalText = document.getElementById("additionalText");
  let toggleButton = document.getElementById("toggleButton");

  if (!isExpanded) {
    // نمایش متن دوم
    additionalText.style.display = "inline";
    // تغییر متن دکمه
    toggleButton.textContent = "بستن اطلاعات";
    isExpanded = true;
  } else {
    // مخفی کردن متن دوم
    additionalText.style.display = "none";
    // بازگرداندن متن دکمه به حالت اولیه
    toggleButton.textContent = "اطلاعات بیشتر...";
    isExpanded = false;
  }
}