//fetch and inject banner
fetch("global-html/global-banner.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("banner-placeholder").innerHTML = data;

// 🔔 Tell the rest of the app the html is ready
document.dispatchEvent(new Event("bannerLoaded"));});

//fetch and inject nav drop down
fetch("global-html/global-navigation-drop-down.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;

// 🔔 Tell the rest of the app the html is ready
document.dispatchEvent(new Event("navLoaded"));});

//fetch and inject add html
fetch("global-html/global-footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

// 🔔 Tell the rest of the app the html is ready
document.dispatchEvent(new Event("footerLoaded"));});