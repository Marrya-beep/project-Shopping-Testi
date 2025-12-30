  // const searchBtn = document.getElementById('searchBtn');
  // const searchBox = document.getElementById('searchBox');
  // const searchInput = document.getElementById('searchInput');

  // searchBtn.addEventListener('click', () => {
  //   // نمایش یا مخفی کردن input
  //   if (searchBox.style.display === 'none') {
  //     searchBox.style.display = 'inline-block';
  //     searchInput.focus(); // فوکوس روی input
  //   } else {
  //     searchBox.style.display = 'none';
  //   }
  // });

  // // می‌تونی اینجا جستجو رو هم مدیریت کنی
  // searchInput.addEventListener('keypress', (e) => {
  //   if (e.key === 'Enter') {
  //     alert('جستجو برای: ' + searchInput.value);
  //     // یا اینجا می‌تونی تابع جستجوی واقعی رو صدا بزنی// تابع سرچ کردن را بنویس و اینجا صدا بزن 
  //   }
  // });

  // fetch("http://localhost:5013/ ")
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok " + response.statusText);
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   console.log("داده‌ها از بک‌اند:", data);
  // })
  // .catch(error => {
  //   console.error("خطا در دریافت داده‌ها:", error);
  // });

  /////


  /// add product
let products = [];

document.getElementById("addProductForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // گرفتن مقادیر فرم
  let nameProduct = document.getElementById("nameProduct").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("category").value;
  let description = document.getElementById("discription").value;

  // ساخت شیء محصول
let product = {
  name: nameProduct,     // کلید name، مقدار متغیر nameProduct
  price: price,          // کلید price، مقدار متغیر price
  category: category,    // کلید category، مقدار متغیر category
  description: description
};


  // اضافه کردن به آرایه
  products.push(product);

  // ارسال به سرور
  fetch('http://localhost:5013/api/additem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // فرستادن JSON
    },
    body: JSON.stringify(product) // فقط محصول جدید ارسال می‌شود
  })
  .then(response => response.text()) // یا response.json() اگر JSON برگرده
  .then(data => {
    console.log("پاسخ سرور:", data);
  })
  .catch(error => console.error('خطا در ارسال:', error));

  // پاک کردن فرم
  e.target.reset();
});
// contact us 
let usersinfo = [];

document.getElementById("sub").addEventListener("submit", function(e) {
  e.preventDefault();

 
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let massage = document.getElementById("message").value;


let userinfo = {
  name: name,     
  price: email,          
  category: phoneNumber,    
  description: massage
};


  
  usersinfo.push(userinfo);
  fetch('http://localhost:5013/api/contactus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // فرستادن JSON
    },
    body: JSON.stringify(userinfo) 
  })
  .then(response => response.text()) // یا response.json() اگر JSON برگرده
  .then(data => {
    console.log("پاسخ سرور:", data);
  })
  .catch(error => console.error('خطا در ارسال:', error));

  // پاک کردن فرم
  e.target.reset();
});