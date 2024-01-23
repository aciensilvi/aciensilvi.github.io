// Loader for the page
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    var loader = document.createElement('img');
    loader.id = 'loaderForSite'
    loader.classList = 'spinner-border';
    loader.src = 'favicon.ico'
    loader.style = `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: 1.75s linear infinite spinner-border;
    `;
    document.getElementsByTagName('body').item(0).appendChild(loader);
    document.querySelector("#loaderForSite").style.visibility = "visible";
      document.querySelector("body").style.visibility = "hidden";
  } else {
      document.querySelector("body").style.visibility = "visible";
      document.querySelector("#loaderForSite").style.visibility = "hidden";
      document.getElementById("loaderForSite").remove();
      if (homepage.indexOf(page) >= 0) {loadVideo();}
  }
};
// Load scripts from other js files
function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}

// Add a variable for a page you are on
var page = location.pathname.substring(
  location.pathname.lastIndexOf('/') + 1,
);
// Get rid of .html in the formatting if it is displayed
if (page.includes(".html")) {
  page = page.replace(".html","");
}
const projects = ['maison_0_x_lvmh', 'evasion', 'menigilda', 'caballo_andaluz','chelsea_fc_x_nike','soportujar','jaula_invisible','gallina_de_ciudad','overpopulated_world','la_veneno',"franco's_exhumation",'integrated_fight'];
const magazines = ['regenerative_folklore', 'fguk', 'hunter', 'malvie', 'office','sicky'];
const homepage = ['','index'];
const shop = ['','index','shop','tabernas_hat','carnation_hat','shop_item']
if (projects.indexOf(page) >= 0) {
  loadScript('./js/project.js');
} else if (magazines.indexOf(page) >= 0) {
  loadScript('./js/magazine.js');
} else if (homepage.indexOf(page) >= 0) {
  loadScript('./js/home.js');
  loadScript('./js/shop.js');
} else if (shop.indexOf(page) >= 0) {
  loadScript('./js/shop.js');
}

// Menu actions
 /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  /* Open when someone clicks on the openNav2 button */
  function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
  }
  /* Close when someone clicks on the "x" symbol inside the overlay 2 */
  function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
    document.getElementById("myNav").style.width = "0%";
  }
  /* Go back to menu 1*/
  function backToNav() {
    document.getElementById("myNav2").style.width = "0%";
  }

// Change the title of the page
let pageTitle = page.replace(/_/g, ' ');
if (pageTitle.includes("maison")) {
  pageTitle = "maison/0 x lvmh"
} else if (['regenerative_folklore','','index'].indexOf(page) >= 0 || magazines.indexOf(page) >= 0) {
  pageTitle = ""
}

class Navbar extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg py-4 sticky-top white-bg-1">
  <a class="navbar-brand" href="/"><img src="images/logo.png" style="max-height:70px;"></a>
  <p class="d-lg-none mx-auto page-name">`
  + pageTitle +
  `</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <!-- The overlay -->
<div id="myNav" class="overlay">
<!-- Button to close the overlay navigation -->
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<!-- Overlay content -->
<div class="overlay-content">
<a href="/">Home</a>
<a href="shop">Shop</a>
<a onclick="openNav2()" href="#">Collections</a>
<div id="myNav2" class="overlay">
  <a href="javascript:void(0)" class="backbtn" onclick="backToNav()">&crarr;</a>
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav2()">&times;</a>
  <div class="overlay-content">
    <a href="regenerative_folklore">Regenerative Folklore / 2023</a>
    <a href="maison_0_x_lvmh">Maison/0 x LVMH / 2022</a>
    <a href="evasion">Evasion / 2022</a>
    <a href="menigilda">Menigilda / 2022</a>
    <a href="caballo_andaluz">Caballo Andaluz / 2021</a>
    <a href="chelsea_fc_x_nike">Chelsea FC x Nike / 2021</a>
    <a href="soportujar">Soportujar / 2021</a>
    <a href="jaula_invisible">Jaula Invisible / 2020</a>
    <a href="gallina_de_ciudad">Gallina de Ciudad / 2020</a>
    <a href="overpopulated_world">Overpopulated World / 2020</a>
    <a href="la_veneno">La Veneno / 2020</a>
    <a href="franco's_exhumation">Franco's Exhumation / 2019</a>
    <a href="integrated_fight">Integrated Fight / 2018</a>
  </div>
</div>
<a href="contact">Contact</a>
<a href="about">About</a>
<a href="services">Services</a>
</div>
</div>
<!-- Use any element to open/show the overlay navigation menu -->
<span onclick="openNav()" style="font-size: 25px;"><i class="fas menuButton fa-bars"></i></span>
  </button>
<div class="collapse navbar-collapse" id="myNavbarToggler7">
  <ul class="navbar-nav mx-auto">
    <li class="nav-item">
        <a class="nav-link" href="shop">Shop</a>
    </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">Collections</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="regenerative_folklore">Regenerative Folklore / 2023</a></li>
            <li><a class="dropdown-item" href="maison_0_x_lvmh">Maison/0 x LVMH / 2022</a></li>
            <li><a class="dropdown-item" href="evasion">Evasion / 2022</a></li>
            <li><a class="dropdown-item" href="menigilda">Menigilda / 2022</a></li>
            <li><a class="dropdown-item" href="caballo_andaluz">Caballo Andaluz / 2021</a></li>
            <li><a class="dropdown-item" href="chelsea_fc_x_nike">Chelsea FC x Nike / 2021</a></li>
            <li><a class="dropdown-item" href="soportujar">Soportujar / 2021</a></li>
            <li><a class="dropdown-item" href="jaula_invisible">Jaula Invisible / 2020</a></li>
            <li><a class="dropdown-item" href="gallina_de_ciudad">Gallina de Ciudad / 2020</a></li>
            <li><a class="dropdown-item" href="overpopulated_world">Overpopulated World / 2020</a></li>
            <li><a class="dropdown-item" href="la_veneno">La Veneno / 2020</a></li>
            <li><a class="dropdown-item" href="franco's_exhumation">Franco's Exhumation / 2019</a></li>
            <li><a class="dropdown-item" href="integrated_fight">Integrated Fight / 2018</a></li>
           </ul>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="about">About</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="services">Services</a>
    </li>
  </ul>
</div>
</nav>
<div id="cookieBanner" class="alert alert-light fade show fixed-bottom py-2 text-center" role="alert">
  This website uses cookies. By continuing to use this site, you accept our use of cookies.
  <button type="button" class="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#cookiesInfo">
  Learn more
  </button>
  <button type="button" class="btn btn-dark btn-sm" id="confirmButton">Confirm</button>
  </div>
  <div class="modal fade" id="cookiesInfo" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="exampleModalCenteredScrollableTitle">Cookies information</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h2>Cookie Notice of ACIEN</h2>
      <p>Welcome to the Cookie Notice of ACIEN. This notice outlines how
      ACIEN utilises cookies and other digital technologies on the
      acien.es website (referred to as the "Site").</p>
      <h2>What are Cookies?</h2>
      <p>Cookies are small, temporary text files that we transfer to your
      device to collect information from it.</p>
      <h2>Why does ACIEN use Cookies?</h2>
      <p>ACIEN uses Cookies on the Site to operate it, measure website
      audience, provide social media functionality, and enable advertising
      and advertising targeting. The following categories of Cookies are
      employed:</p>
      <ul>
      <li>Strictly Necessary: Essential for the website's functionality,
      these cookies cannot be switched off and are used in
      response to your service requests.</li>
      <li>Functional: Enable enhanced website functionality and
      personalisation, provided by us or third-party providers.</li>
      <li>Analytical or Performance: Allow us to measure and improve
      the Site's performance by counting visits and analysing traffic
      sources.</li>
      </ul>
      <h2>What Cookies does ACIEN use?</h2>
      <p>The table below lists common First and Third-party Cookies used
      on the Site:</p>
      <ul>
      <li>HTML5 Local Storage: Similar to cookies, used for
      identification purposes.</li>
      <li>Google Analytics: Utilised with explicit consent for website
      analysis and optimisation. IP anonymisation is employed.</li>
      </ul>
      <h2>Contacting us</h2>
      <p>For questions regarding this policy or the Site's practices, feel free
      to contact ACIEN via email at <a href="mailto:info@acien.es">info@acien.es</a>.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
    // Add a current class to the menu item you are on 
    document.querySelectorAll('a.nav-link').forEach(el => {
      if (page == el.getAttribute('href')) {
        el.classList.add('current');
      }
    });

    // Add a current class to the menu item you are on for projects
    document.querySelectorAll('a.dropdown-item').forEach(el => {
      if (page == el.getAttribute('href')) {
        el.classList.add('current');
      }
    });

    // Add a current class to the menu item for phone menu
    document.querySelectorAll('.overlay-content a').forEach(el => {
      if (page == el.getAttribute('href')) {
        el.classList.add('current');
      }
    });
  }  
}

marqueeContent = `<li><p class="text-center gradient"><span>Featured in:</span></p></li>
<li><a href="https://www.vanityfair.it/article/its-contest-2023-finalisti" target="_blank"><img  height="35" src="images/magazines/vanity_fair.ico"></a></li>
<li><a href="https://design-milk.com/ddw23-new-order-of-fashion-is-empowering-regenerative-design/#:~:text=Regenerative%20Folklore" target="_blank"><img  height="35" src="images/magazines/design-milk-logo-website.svg"></a></li>
<li><a href="https://www.neworderoffashion.com/talents/talent-talks-silvia-acien-parrilla" target="_blank"><img  height="35" src="images/magazines/New+order+of+Fashion+Icon.png"></a></li>
<li><a href="https://www.wsj.com/style/fashion/young-fashion-designers-5e84f3fb" target="_blank"><img  height="35" src="images/magazines/wsj-logo-alt.svg"></a></li>
<li><a href="https://talkingtextilesmag.com/silvia-acien" target="_blank"><img  height="35" src="images/magazines/talking_textiles.png"></a></li>
 <li><a href="office"><img class="featured-logo" src="images/magazines/office.png"></a></li>
   <li><a href="fguk"><img class="featured-logo" src="images/magazines/fguk.png"></a></li>
   <li><a href="sicky"><img class="featured-logo" src="images/magazines/sicky.png"></a></li>
   <li><a href="malvie"><img class="featured-logo" src="images/magazines/malvie.png"></a></li>
   <li><a href="hunter"><img class="featured-logo" src="images/magazines/hunter.png"></a></li>
   <li><a href="https://www.notjustalabel.com/acien" target="_blank"><img class="featured-logo" src="images/magazines/not_just_a_label.png"></a></li>
   <li><a href="https://www.sleek-mag.com/article/everything-you-need-to-know-about-the-csm-ba-graduate-show/#343139333535" target="_blank"><img class="featured-logo" src="images/magazines/sleek.png"></a></li>
   <li><a href="https://1granary.com/designers-3/graduate-shows/csm-ba-fashion-2023-sensibility-spirituality-and-wholesomeness-2/" target="_blank"><img class="featured-logo" src="images/magazines/1granary.png"></a></li>
   <li><a href="https://www.murphysmagazine.com/designer/silvia-acien" target="_blank"><img class="featured-logo" src="images/magazines/muprhys.png"></a></li>
   <li><p class="text-center gradient"><span>Awards:</span></p></li>
   <li><img height="20" src="images/awards/lvmh.png"></li>
   <li><img height="36" src="images/awards/framework_knitters.png" title="Framework Knitters"></li>`

class Footer extends HTMLElement{
  connectedCallback(){ 
    this.innerHTML = `
    <div class="marquee marquee--hover-pause">
    <ul class="marquee__content">` + marqueeContent + `
    </ul>
    <ul aria-hidden="true" class="marquee__content">` + marqueeContent +`
    </ul>
   </div>
    <footer class="text-center white-bg-1" id="footer">
  <!-- Grid container -->
  <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmSPNTq6XYHxonYqrtrrat1bUbHeeXIf_QGIxkYqNY2T1vdg/formResponse" method="POST" target="_blank">
  <div class="container">
  <div class="row justify-content-center gap-2 g-2">
  <div class="col-12">
  <label><h2>SIGN UP TO ACIEN NEWSLETTER:</h2></label></div>
  <div class="col-md-2">
    <input
      class="form-control"
      placeholder="First Name"
      aria-label="Search"
      type="text"
      id="name"
      name="entry.1621704042"
    /></div>
    <div class="col-md-2">
    <input
      class="form-control"
      placeholder="Last Name"
      aria-label="Search"
      type="text"
      id="surname"
      name="entry.77329585"
    /></div>
    <div class="col-md-4">
    <input
    type="email"
      class="form-control"
      placeholder="Email Address"
      aria-label="Search"
      id="email"
      name="entry.795430899"
      required
    /></div>
    <div class="col-md-2 d-grid text-start">
    <button class="btn btn-dark btn-sm" type="submit" name="submit" value="Submit">
      Sign Up
    </button>
    </div>
    </div>
    </div>
    </form>
    <!-- Section: Social media -->
      <!-- Mail -->
      <a href="mailto:info@acien.es"><i class="btn fa-solid fa-envelope fa-lg footerIcon"></i></a>
      <!-- Instagram -->
      <a href="https://instagram.com/aciensilvi" target="blank"><i class="btn fa-brands fa-instagram fa-lg footerIcon"></i></a>
      <!-- TikTok -->
      <a href="https://tiktok.com/@aciensilvi" target="blank"><i class="btn fa-brands fa-tiktok fa-lg footerIcon"></i></a>
      <!-- Linkedin -->
      <a href="https://www.linkedin.com/in/silvia-acien-parrilla-3a0296216" target="blank"><i class="btn fa-brands fa-linkedin fa-lg footerIcon"></i></a>
    <!-- Section: Social media -->
  </div>
  <a class="d-none d-md-block position-absolute start-0 lad8s" href="https://lad8s.com" target="_blank">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img height="24" src="images/lad8s_logo.png"> developed</a>
</footer>
    `
  }
}

class CommonHead extends HTMLElement{
  
  connectedCallback(){
    var pageTitleHead;
    // If page is one of these, then do a different formatting
      if (['fguk', 'hunter', 'malvie', 'office','sicky'].indexOf(page) >= 0) {
      pageTitleHead = "Acien x " + page.toUpperCase() ;
    } else if (['index',''].indexOf(page) >= 0) {
      pageTitleHead = "Acien"
    } else if (['maison_0_x_lvmh'].indexOf(page) >= 0) {
      pageTitleHead = "Maison/0 x LVMH - Acien"
    } else {
      //Capitalise first letter and add '- Acien'
      pageTitleHead = (page.charAt(0).toUpperCase() + page.slice(1) + " - Acien").replace(/_/g, ' ');
    } 
    document.head.innerHTML = document.head.innerHTML + `<title>` + pageTitleHead + `</title>`;
    document.head.innerHTML = document.head.innerHTML + `
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<meta name="viewport" content="width=device-width, initial-scale=1">
    `;

    // Change this into one function with if/esle if etc
    function includeFA(file) {
      var script = document.createElement('script');
      script.src = file;
      script.type = 'text/javascript';
      script.crossorigin = "anonymous";
  
      document.getElementsByTagName('head').item(0).appendChild(script);
      }

    function includeBootstrapJS(file) {
      var script = document.createElement('script');
      script.src = file;
      script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
      script.setAttribute("crossorigin","anonymous");
  
      document.getElementsByTagName('head').item(0).appendChild(script);
      }

      
    function includeGoogleTag(file) {
      var script = document.createElement('script');
      script.async = true;
      script.src = file;
      
  
      document.getElementsByTagName('head').item(0).appendChild(script);
      }

    function includeMain(filename) {
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", filename)

      document.getElementsByTagName("head").item(0).appendChild(fileref)
    }
    
    function includeBootsrapCSS(filename) {
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", filename)
      fileref.setAttribute("crossorigin", "anonymous")
      fileref.setAttribute("integrity","sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3")

      document.getElementsByTagName("head").item(0).appendChild(fileref)
    }
    includeFA('https://kit.fontawesome.com/581d00b336.js');
    includeBootstrapJS("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js");
    includeBootsrapCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
    includeMain("css/main.css");
    includeGoogleTag("https://www.googletagmanager.com/gtag/js?id=G-0M4GEK1QY7");
  }
}

customElements.define('app-head', CommonHead);
customElements.define('app-footer', Footer);
customElements.define('app-navbar', Navbar);

// Google tag
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0M4GEK1QY7');

document.addEventListener('DOMContentLoaded', function() {
  // Check if the user has already confirmed
  if (localStorage.getItem('cookieBannerConfirmed')) {
      // Hide the banner if the user has confirmed
      document.getElementById('cookieBanner').style.display = 'none';
  }

  // Add event listener to the Confirm button
  document.getElementById('confirmButton').addEventListener('click', function() {
      // Set a flag in local storage to indicate that the user has confirmed
      localStorage.setItem('cookieBannerConfirmed', 'true');
      // Hide the banner
      document.getElementById('cookieBanner').style.display = 'none';
  });
});