class shopItem {
  constructor(title,amount,short_description,link1,link2,linkCustom,price1,price2) {
    this.title = title;
    this.amount = amount;
    this.short_description = short_description;
    this.link1 = link1;
    this.link2 = link2;
    this.linkCustom = linkCustom;
    this.price1 = price1;
    this.price2 = price2;
    this.linkToItem = title.toLowerCase().replace(" ","_");
  }
}
tabernas = new shopItem("TABERNAS HAT",4,"Regenerative materials",
"https://buy.stripe.com/28o15M0OnabT1ag28f",
"https://buy.stripe.com/6oE7ua0Onfwd6uAfZ4",
"https://docs.google.com/forms/d/e/1FAIpQLSfwUTVYOcDEiWB0dPzPrBpUZsiKROyBnfFhusImUwh3b8a5lg/viewform",
"\u00A3900",
"\u00A3850");
carnation = new shopItem("CARNATION HAT",3,"Regenerative materials",
"https://buy.stripe.com/fZeg0GeFdgAhaKQ4gp",
"https://buy.stripe.com/14keWCdB9ck13io8wE",
"https://docs.google.com/forms/d/e/1FAIpQLScnJelnosuK6A9Ne4EBDuaI-nxqRQHXSXjw_uta9oCxXcT0zg/viewform",
"\u00A3950",
"\u00A3900");
const shopItemList = [tabernas,carnation];


let columnForShopItem = "";
for (let item of shopItemList) {
  // TODO : change the id otherwise it does not work...
  columnForShopItem += `
  <div class="col-md-6 text-center ">
  <h1>` + item + `</h1>
<div id="carouselExampleIndicators` + item + `" class="carousel slide" data-bs-touch="true"  data-bs-ride="carousel">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>

<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>

<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>

<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>

<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>

<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="5" aria-label="Slide 6" class=""></button>

<button type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
</div>
  <div class="carousel-inner"><div class="carousel-item active">
<img src="images/magazines/fguk/1.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div><div class="carousel-item">
<img src="images/magazines/fguk/2.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div><div class="carousel-item">
<img src="images/magazines/fguk/3.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div><div class="carousel-item">
<img src="images/magazines/fguk/4.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div><div class="carousel-item">
<img src="images/magazines/fguk/5.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div><div class="carousel-item">
<img src="images/magazines/fguk/6.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div><div class="carousel-item">
<img src="images/magazines/fguk/7.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
</div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators` + item + `" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br>
<div class="d-grid gap-2 col-6 mx-auto">
<a class="button btn btn-dark" href="https://docs.google.com/forms/d/e/1FAIpQLSetxYHsEcbEOhDrCb9IFHJFHMfxW3l8WFBmWAfnbQ0ki7kifw/viewform?usp=sf_link" target="_blank">Buy</a>
</div>
</div>
  `
}

class Shop extends HTMLElement {

    connectedCallback() {
let shopPage = '';
      for (let eachShopItem of shopItemList) {

           // Get the number for the loop
           var imageCount = eachShopItem.amount;
           // Loop to put in
           let carousel_inner = "";
           // Loop itself
           for ( let i = 1; i <= imageCount; i++) {
             carousel_inner += `<div class="carousel-item">
             <img src="images/shop/`+ eachShopItem.linkToItem +`/${i}.jpg" class="d-block pic_w50 mx-auto" alt="`+ eachShopItem.title +`">
           </div>`;
           } 
           let carousel_indicators = "";
           for (let i = 1; i <= imageCount; i++) {
             carousel_indicators += `
             <button type="button" data-bs-target="#carousel_`+ eachShopItem.linkToItem +`" data-bs-slide-to="${i-1}" aria-label="Slide ${i}" class></button>
             `
           }

        shopPage += `
        <div class="col-md-6 text-center ">
        <div id="carousel_`+ eachShopItem.linkToItem +`" class="carousel slide" data-bs-touch="true"  data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators">`
        + carousel_indicators +
        `
    </div>
          <a href='`+ eachShopItem.linkToItem +`' class="shop-title"><div class="carousel-inner">`
          + carousel_inner +
          `</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel_`+ eachShopItem.linkToItem +`" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel_`+ eachShopItem.linkToItem +`" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <h2 class="shop-title">`+ eachShopItem.title +`</h2>
          <h5 id="price">` + eachShopItem.price2 + `<h5>
      
          <div class="d-grid gap-2 col-6 mx-auto"><p>`+ eachShopItem.short_description +`</p></a>
            </div>
            </div>
        `
      }
    
      this.innerHTML = `<div class="container-fluid">
      <div class="row text-center  ">
      <div class="col">
      <h3 class="gradient"><span>DISCOVER OUR CAPSULE COLLECTION</span
      </h3>
      <p>Hand crafted accessories with regeneration in mind at every stage
      </p>
      <br>
      </div>
      </div>
      <div class="row justify-content-md-center">`
      + shopPage +
      `</div>
      </div>

      <div class="container-fluid">
<div class="row justify-content-md-center">
    <div class="col-md-6 text-center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdl7ZdqLxmv6705tFo69L8AK_GY3TV3BOQDTR9dB6t7al2VMg/viewform" target="_blank" class="shop-title">
    <img class="pic_w50" src="images/shop/made_to_order.jpeg">
    <h2 class="shop-title">MADE TO ORDER HAT</h2>
    <p>Regenerative materials</p>
        </a>
</div>
</div>
</div>
      `
            // Add active class to the first item in the list
            document.querySelectorAll('.carousel-item').forEach(el => {
              if (el.querySelector('img').getAttribute('src').includes('1')) {
                el.classList.add('active');
              }
            });
            // Add active class to the first item in the list
            document.querySelectorAll('[aria-label^=Slide]').forEach(el => {
              if (el.getAttribute('data-bs-slide-to').includes('0')) {
                el.classList.add('active');
                el.setAttribute('aria-current','true');
              }
            });
    }
    
  }

  class ShopItem extends HTMLElement {
    
    connectedCallback() {
      const itemNameFromWeb = document.querySelector('app-shop-item').getAttribute('item');
      const description = document.querySelector('description');


      let ourItem;
      //if this item is on the list then our item is that one
      for (let numberInList of shopItemList ) {
        if (numberInList.title==itemNameFromWeb) {
          ourItem = numberInList
        }
      }

           // Get the number for the loop
           var imageCount = ourItem.amount;
           // Loop to put in
           let carousel_inner = "";
           // Loop itself
           for ( let i = 1; i <= imageCount; i++) {
             carousel_inner += `<div class="carousel-item">
             <img src="images/shop/`+ page +`/${i}.jpg" class="d-block pic_w75 mx-auto" alt="`+ ourItem.title +`">
           </div>`;
           } 
           let carousel_indicators = "";
           for (let i = 1; i <= imageCount; i++) {
             carousel_indicators += `
             <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="${i-1}" aria-label="Slide ${i}" class></button>
             `
           }

      this.innerHTML = `<br>
      <div class="container-fluid">
      <div class="row justify-content-md-center">
          <div class="col-md-6 text-center ">
          <div id="carouselExampleIndicators1" class="carousel slide" data-bs-touch="true"  data-bs-ride="carousel"data-bs-interval="false">
          <div class="carousel-indicators">`
          + carousel_indicators +
          `
      </div>
            <div class="carousel-inner">`
            + carousel_inner +
            `</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-6 text-center">
      
          <h2 class="shop-title d-none d-lg-block">`+ ourItem.title +`</h2>
          <description>`+ description.innerHTML +`<description>
          <div class="row">
          <div class="d-grid gap-2 col-6 mx-auto">
            <select class="form-select" id="selectOption" aria-label="Select option">
              <option value="1" selected>With straps</option>
              <option value="2">Without straps</option>
              <option value="3">Made to order</option>
            </select>
            <a id="buyButton" class="button btn btn-dark" href="`+ ourItem.link1 +`" target="_blank">Buy</a>
          </div>
          <div class="col text-center text-justfy my-auto" id="priceContainer">
            <h2 id="price">`+ ourItem.price1 +`</h2>
            <p class="text-center">* No returns. No exchanges.</p>
          </div>
        </div>
          <br>
        </div>
        </div></div><br>`

      // Add active class to the first item in the list
      document.querySelectorAll('.carousel-item').forEach(el => {
        if (el.querySelector('img').getAttribute('src').includes('1')) {
          el.classList.add('active');
        }
      });
      // Add active class to the first item in the list
      document.querySelectorAll('[aria-label^=Slide]').forEach(el => {
        if (el.getAttribute('data-bs-slide-to').includes('0')) {
          el.classList.add('active');
          el.setAttribute('aria-current','true');
        }
      });

      description.remove();

      function includeFSlightbox(file) {
        var script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        script.crossorigin = "anonymous";
    
        var s = document.body.firstChild;
        s.parentNode.insertBefore(script, s);
        }
        includeFSlightbox("js/fslightbox.js");

    // Get references to the select element, price elements, and the buy button
    const selectOption = document.getElementById("selectOption");
    const priceElement = document.getElementById("price");
    const priceContainer = document.getElementById("priceContainer");
    const buyButton = document.getElementById("buyButton");

    // Define the price values and links for each option
    const options = {
      1: { price: ourItem.price1, link: ourItem.link1 },
      2: { price: ourItem.price2, link: ourItem.link2 },
      3: { price: "Custom Price", link: ourItem.linkCustom },
    };

    // Function to update the price, link, and show/hide the container when an option is selected
    selectOption.addEventListener("change", function() {
      const selectedOption = selectOption.value;
      if (selectedOption === "3") {
        // If "Custom" is selected, hide the price container and update the link
        priceContainer.style.display = "none";
        buyButton.href = options[selectedOption].link;
      } else {
        // Otherwise, show the price container, update the price, and link
        priceElement.textContent = options[selectedOption].price;
        priceContainer.style.display = "block";
        buyButton.href = options[selectedOption].link;
      }
    });

    // Initialize the price and link when the page loads
    window.addEventListener("load", function() {
      const selectedOption = selectOption.value;
      priceElement.textContent = options[selectedOption].price;
      buyButton.href = options[selectedOption].link;
    });

    }
  }

  

  customElements.define('app-shop', Shop);  
  customElements.define('app-shop-item', ShopItem);  