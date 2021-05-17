import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './homeStyle.css';
import slider1 from './images/slider/slider1.jpg';
import slider2 from './images/slider/slider2.jpg';
import about from './images/about.jpg';
// import '../src/assets/css/bootstrapm.css';
// import '../src/assets/css/fontawsom-all.css';
// import '../src/assets/plugins/grid-gallery/css/grid-gallerym.css';

function Homepage() {
  document.title = 'home';
  const history = useHistory();
  const routeChange = () => {
    let path = '/register';
    history.push(path);
    console.log('donate/request clicked');
  };
  const [isOpen] = useState(true);
  if (!isOpen) {
    return <Redirect to='/test' />;
  }
  return (
    <div className='home-page'>
      <header class='continer-fluid '>
        <div id='menu-jk' class='header-bottom'>
          <div class='container'>
            <div class='row nav-row'>
              <div class='col-md-3 logo'>
                <img src='/src/assets/images/logo.jpg' alt='' />
              </div>
              <div class='col-md-9 nav-col'>
                <nav class='navbar navbar-expand-lg navbar-light'>
                  <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span class='navbar-toggler-icon'></span>
                  </button>
                  <div class='collapse navbar-collapse' id='navbarNav'>
                    <ul class='navbar-nav'>
                      <li class='nav-item active'>
                        <a class='nav-link' href='/'>
                          Home
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#about'>
                          About Us
                        </a>
                      </li>

                      <li class='nav-item'>
                        <a class='nav-link' href='#gallery'>
                          Gallery
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#process'>
                          Process
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#blog'>
                          Blog
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a class='nav-link' href='#contact'>
                          Contact US
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class='slider-detail'>
        <div
          id='carouselExampleIndicators'
          class='carousel slide'
          data-ride='carousel'
        >
          <ol class='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              class='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          </ol>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img class='d-block w-100' src={slider1} alt='First slide' />
              <div class='carousel-caption d-none d-md-block'>
                <h5 class=' bounceInDown'>Donate Blood & Save a Life</h5>
                <div class=' bounceInLeft'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam justo neque, <br />
                  aliquet sit amet elementum vel, vehicula eget eros. Vivamus
                  arcu metus, mattis <br />
                  sed sagittis at, sagittis quis neque. Praesent.
                </div>

                <div class=' vbh'>
                  <button class='btn btn-success bounceInUp' onClick={routeChange}> Donate Now </button>
                  <button class='btn btn-success bounceInUp' onClick={routeChange}> Request Now </button>
                </div>
              </div>
            </div>

            <div class='carousel-item'>
              <img class='d-block w-100' src={slider2} alt='Third slide' />
              <div class='carousel-caption vdg-cur d-none d-md-block'>
                <h5 class=' bounceInDown'>Donate Blood & Save a Life</h5>
                <div class=' bounceInLeft' />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                justo neque, <br />
                <div>
                  aliquet sit amet elementum vel, vehicula eget eros. Vivamus
                  arcu metus, mattis <br />
                  sed sagittis at, sagittis quis neque. Praesent.{' '}
                </div>
              </div>

              <div class=' vbh'>
                <div class='btn btn-danger  bounceInUp'> Donate Now </div>
                <div class='btn btn-danger  bounceInUp'> Contact US </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>

      <section id='about' class='contianer-fluid about-us'>
        <div class='container'>
          <div class='row session-title'>
            <h2>About Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
          </div>
          <div class='row'>
            <div class='col-md-6 text'>
              <h2>About Blood Doners</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                {' '}
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some formhumour, or
                randomised words which don't look even slightly believable. If
                you are going to use a passage. industry's standard dummy has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
            <div class='col-md-6 image'>
              <img src={about} alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
