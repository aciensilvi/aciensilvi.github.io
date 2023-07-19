class Project extends HTMLElement {

    connectedCallback() {
      let video ="";
      let video_link = ""
      switch (page) {
        case 'gallina_de_ciudad': video_link = "https://www.youtube.com/embed/JUnRM_ItzFw"; break;
        case 'jaula_invisible': video_link = "https://www.youtube.com/embed/IPb_FZDa8Ts"; break;
        case 'soportujar': video_link = "https://www.youtube.com/embed/xDFKaaxGdT4"; break;
        case 'caballo_andaluz': video_link = "https://www.youtube.com/embed/5Woob-3Yw50"; break;
        case 'menigilda': video_link = "https://www.youtube.com/embed/iNy-ZrMnpzo"; break;
        case 'evasion': video_link = "https://www.youtube.com/embed/9E8i_6O6_FU"; break;
        default: video_link = "not present"; break;
      }
      if (['evasion', 'menigilda','caballo_andaluz','soportujar','jaula_invisible','gallina_de_ciudad'].indexOf(page) >= 0) {
        video =
        `<div class="container-fluid text-center">
        <br>
        <div class="row">
          <div class="col">
          <iframe class="youtube-video" src="` + video_link + `" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <br>
      </div>
        `
      } else if (page=="maison_0_x_lvmh") {
        video = 
        `<div class="container-fluid text-center">
        <br>
        <div class="row">
          <div class="col">
        <object class="pdf" data="documents/rewilding-textiles-publication.pdf" type="application/pdf">
        </div>
        </div>
        <br>
      </div>
        `
      }
      // Get the number for the loop
      var imageCount = document.querySelector('app-project').getAttribute('count');
      // Loop to put in
      let projectImages = "";
      // Loop itself
      for ( let i = 1; i <= imageCount; i++) {
        projectImages += `<div class="col-6 col-md-4 text-center"><a href="images/`+ page +`/${i}.jpg" data-fslightbox="gallery" data-type="image"><div class="behind"><img class="fit_w projectPic" src="images/`+ page +`/${i}.jpg"></div></a></div>`;
      } 
      this.innerHTML = `
      <br>
      <div class="container-fluid">
        <h3 class="text-center projectName gradient"><span>` + pageTitle +`</span></h3>
        <div class="row justify-content-center">` +
        projectImages
        + `</div>
        <br>
      </div>`
      + video
      function includeFSlightbox(file) {
        var script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        script.crossorigin = "anonymous";
    
        var s = document.body.firstChild;
        s.parentNode.insertBefore(script, s);
        }
        includeFSlightbox("js/fslightbox.js");
        
  }
  }

customElements.define('app-project', Project);