// تحديد البيانات الشخصية
const profileData = {
  name: "SERFATI",
  imageUrl: "myphoto.jpg",
  username: "serfati", // اسم المستخدم الموحد
  socialLinks: [
    { name: "فيسبوك", url: "https://www.facebook.com/", icon: "https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" },
    { name: "إنستغرام", url: "https://www.instagram.com/", icon: "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" },
    { name: "تويتر", url: "https://twitter.com/", icon: "https://img.icons8.com/ios-filled/50/ffffff/twitter.png" },
    { name: "تيك توك", url: "https://www.tiktok.com/@", icon: "https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" },
    { name: "سناب شات", url: "https://www.snapchat.com/add/", icon: "https://img.icons8.com/ios-filled/50/ffffff/snapchat.png" },
    { name: "لينكد إن", url: "https://www.linkedin.com/in/", icon: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" },
    ]
};

// تعديل محتوى الصفحة بناءً على البيانات
document.getElementById('profileName').innerText = profileData.name;
document.getElementById('profileImage').src = profileData.imageUrl;

const socialLinksContainer = document.getElementById('socialLinks');
profileData.socialLinks.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = link.url + profileData.username;
  a.target = "_blank"; // لفتح الرابط في نافذة جديدة
  const img = document.createElement('img');
  img.src = link.icon;
  img.alt = link.name;
  a.appendChild(img);
  a.appendChild(document.createTextNode('@' + profileData.username));
  li.appendChild(a);
  socialLinksContainer.appendChild(li);
});