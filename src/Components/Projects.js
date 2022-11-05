import React from 'react';

const Projects = ({projects}) => {
  console.log(projects)
  const projectCard = Object.keys(projects).map((projectItem) => (
   

<div class="single-item col-6 col-lg-4 design"><a class="portfolio-item" href="#item-1">
<div class="portfolio-wrapper">
    <img class="img-fluid" alt="Item" src={projects[projectItem].image_url} />
<div class="item-content">
<h6 class="content-title">{projects[projectItem].project_title}</h6><a class="content-more" href={projects[projectItem].project_link}>More Info</a>
</div>
</div>
</a></div>
  ))
    return (
        <div>
        <section class="single-section portfolio-area" id="portfolio-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading">
                  <h2 class="section-title">Projects</h2>
                  <p class="section-description">Showcasing some of my best work</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <ul class="list-inline filter-control" role="group" aria-label="Filter Control">
                  <li class="list-inline-item tab-active" data-filter="*">All projects</li>
                  {/* <li class="list-inline-item" data-filter=".brand">Brand</li>
                  <li class="list-inline-item" data-filter=".design">Design</li>
                  <li class="list-inline-item" data-filter=".photos">Photos</li> */}
                </ul>
              </div>
            </div>
            
            <div class="portfolio-grid row">
      {projectCard}
            </div>
          </div>
          {/* <!-- Single lightbox--> */}
          {/* <div class="lightbox-wrapper" id="item-1">
            <div class="f-basis-100">
              <div class="lightbox-close" data-modal-close><span class="close-btn"><span class="btn-line"></span></span></div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-5">
                  <div class="lightbox-gallery owl-carousel owl-theme"><img class="img-fluid item-img" alt="Item" src="img/item-1.jpg" /><img class="img-fluid item-img" alt="Item" src="img/item-2.jpg" /><img class="img-fluid item-img" alt="Item" src="img/item-3.jpg" /><img class="img-fluid item-img" alt="Item" src="img/item-4.jpg" /><img class="img-fluid item-img" alt="Item" src="img/item-5.jpg" /><img class="img-fluid item-img" alt="Item" src="img/item-6.jpg" /></div>
                </div>
                <div class="col-12 col-lg-7">
                  <div class="lightbox-content">
                    <h3 class="content-title">Label Tag Mockup</h3>
                    <div class="content-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut sapiente quo explicabo, quasi incidunt aperiam laudantium, nemo cum eaque inventore ut voluptas voluptatibus nihil! Amet soluta, ea illo sint?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dignissimos culpa deserunt aspernatur ipsa veritatis alias labore tempore laboriosam commodi! Ab neque sunt, odio voluptatibus, dignissimos nisi consequuntur atque qui explicabo eligendi, harum in? Amet aspernatur atque quam. Illo natus tempora explicabo deleniti molestias numquam debitis repudiandae, repellendus voluptatum soluta?</p>
                    </div>
                    <ul class="list-inline content-info">
                      <li class="list-inline-item single-info"><span>Client:</span>
                        <p>Envato</p>
                      </li>
                      <li class="list-inline-item single-info"><span>Categories:</span>
                        <p><a href="#0">Branding</a>, <a href="#0">Web Design</a></p>
                      </li>
                      <li class="list-inline-item single-info"><span>Date:</span>
                        <p>12 May, 2019</p>
                      </li>
                      <li class="list-inline-item single-info"><span>Technologies:</span>
                        <p>HTML5, SCSS, JS</p>
                      </li>
                    </ul><a class="btn content-btn button-main button-scheme" href="#0" role="button">Visit Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        
        </section>
        </div>
    );
}

export default Projects;
