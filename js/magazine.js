class Magazine extends HTMLElement {

    connectedCallback() {
      
      // Get the number for the loop
      var imageCount = document.querySelector('app-magazine').getAttribute('count');
      // Loop to put in
      let carousel_inner = "";
      // Loop itself
      for ( let i = 1; i <= imageCount; i++) {
        carousel_inner += `<div class="carousel-item">
        <img src="images/magazines/` + page +`/${i}.jpg" class="d-block pic_w50 mx-auto" alt="Acien x FGUK">
      </div>`;
      } 
      let carousel_indicators = "";
      for (let i = 1; i <= imageCount; i++) {
        carousel_indicators += `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i-1}" aria-label="Slide ${i}"></button>
        `
      }
      this.innerHTML = `
      <div class="container-fluid" >
              <div class="row justify-content-md-center">
                <div class="col-md-6 text-center "><br>
                          <img class="magazine_logo" src="images/magazines/`+ page +`.png">
                </div>
              </div><br>
              <div class="row justify-content-md-center">
                <div class="col-md-8 text-center ">
                <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-indicators ">`
                + carousel_indicators +
                    `</div>
                  <div class="carousel-inner ">`
                  + carousel_inner
                  +
                    `
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              </div>
                  </div>
  <br>
      `
      // Add active class to the first item in the list
      document.querySelectorAll('.carousel-item').forEach(el => {
        if (el.querySelector('img').getAttribute('src').includes('1')) {
          el.classList.add('active');
        }
      });
      // Add active class to the first item in the list
      document.querySelectorAll('[data-bs-target="#carouselExampleIndicators"]').forEach(el => {
        if (el.getAttribute('data-bs-slide-to').includes('0')) {
          el.classList.add('active');
          el.setAttribute('aria-current','true');
        }
      });
    }
    
  }

  customElements.define('app-magazine', Magazine);  