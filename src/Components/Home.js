import React ,{useState,useEffect} from 'react';

const Home = ({homeData}) => {
 console.log(homeData)
    return (
       <section class="home-area element-cover-bg" id="home-area" style={{ backgroundImage: `url(${homeData.profile_url})` }}>
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center">
            <div class="col-12 col-lg-8 home-content text-center">
              <h1 class="home-name"><span>{homeData.first_name}</span>{homeData.last_name}</h1>
              <h4 class="cd-headline clip home-headline">I’m a <span class="cd-words-wrapper single-headline"><b class="is-visible"></b><b>{homeData.title}</b>&nbsp;<b>{homeData.title}</b></span></h4>
            </div><a href="#about-area" data-scroll>
              <div class="home-mouse">
                <div class="mouse-shape">
                  <div class="mouse-wheel"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Home;
