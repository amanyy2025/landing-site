// js/script.js
document.querySelectorAll('.video-list a').forEach(link => {
    link.addEventListener('click', () => {
        const player = document.getElementById('player');
        player.scrollIntoView({ behavior: 'smooth' });
    });
});
// زر الرجوع لأعلى
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
document.querySelectorAll('.video-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const videoId = this.getAttribute('data-video');
        const iframe = document.querySelector('iframe[name="youtube-frame"]');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        document.getElementById('player').scrollIntoView({ behavior: 'smooth' });
    });
});
// تشغيل الفيديو
document.querySelectorAll('.video-list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const videoId = this.getAttribute('data-video');
        const iframe = document.querySelector('iframe[name="youtube-frame"]');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        document.getElementById('player').scrollIntoView({ behavior: 'smooth' });
    });
});

// إظهار/إخفاء قائمة الشروحات
const toggleHeader = document.querySelector('.toggle-header');
const collapsibleList = document.querySelector('.collapsible');
const arrow = toggleHeader.querySelector('.arrow');

toggleHeader.addEventListener('click', () => {
    collapsibleList.classList.toggle('active');
    arrow.classList.toggle('rotate');
});
