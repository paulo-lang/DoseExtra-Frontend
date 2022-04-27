import React, { useEffect } from 'react';

import image from '../../assets/Home/wallpaper.jpg'
import './styles.css';

function About() {
  useEffect(() => {
    var links = document.getElementsByClassName('link')
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#5ae1e6"
    }
    document.getElementsByClassName('header')[0].style.backgroundColor = "#0b2047"
  }, [])

  return (

    <div className='container'>
      <section id="sec-1">
        <div className='title'>Membros</div>
        <div className='members-container'>
          <div className='member-container'>
            <div className='member-sub-container'>

              <div className='member-name'>Lorem Ipsum</div>

              <img className='member-image' src={image} height={300} width={260} />
              <div className='member-desc'>Guitarrista</div>
            </div>
          </div>

          <div className='member-container'>
            <div className='member-sub-container'>

              <div className='member-name'>Lorem Ipsum</div>

              <img className='member-image' src={image} height={300} width={260} />
              <div className='member-desc'>Guitarrista</div>
            </div>
          </div>
          <div className='member-container'>
            <div className='member-sub-container'>

              <div className='member-name'>Lorem Ipsum</div>

              <img className='member-image' src={image} height={300} width={260} />
              <div className='member-desc'>Guitarrista</div>
            </div>
          </div>
          <div className='member-container'>
            <div className='member-sub-container'>

              <div className='member-name'>Lorem Ipsum</div>

              <img className='member-image' src={image} height={300} width={260} />
              <div className='member-desc'>Guitarrista</div>
            </div>
          </div>
        </div>
        <div className="scroll-down" onClick={()=>{window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})}}></div>
      </section>
      <section id="sec-2">
        <div className='title-2'>Sobre nós</div>
        <div className='band-desc'> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum </div>
      </section>

    </div>


  );
}

export default About;