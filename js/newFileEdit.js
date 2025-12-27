  const searchBtn = document.getElementById('searchBtn');
  const searchBox = document.getElementById('searchBox');
  const searchInput = document.getElementById('searchInput');

  searchBtn.addEventListener('click', () => {
    // نمایش یا مخفی کردن input
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'inline-block';
      searchInput.focus(); // فوکوس روی input
    } else {
      searchBox.style.display = 'none';
    }
  });

  // می‌تونی اینجا جستجو رو هم مدیریت کنی
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      alert('جستجو برای: ' + searchInput.value);
      // یا اینجا می‌تونی تابع جستجوی واقعی رو صدا بزنی
    }
  });