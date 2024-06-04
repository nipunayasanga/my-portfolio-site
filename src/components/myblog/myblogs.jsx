import React from 'react'
import './myblog.css'
import IMG1 from '../../assets/blog_img_01.jpeg'
import IMG2 from '../../assets/blog_img_02.jpeg'
import IMG4 from '../../assets/blog_img_03.jpeg'


const Myblog = () => {
  return (
    <section id='myblog'>

      <h5>My Recent Articals</h5>
      <h2>My Blog</h2>

      <div className="container portfolio__container_blog">

        <article className='portfolio__item_blog'>
            <div className="portfolio__item-image_blog">
                <img src={IMG1} alt="" />
            </div>
            <h3>A Beginner’s Guide to HTML Tags</h3>
            <small className='text-light'>HTML | Tags | Basics</small>
            <div className="portfolio__item-cta_blog">
              <a href="https://medium.com/@nipunayes/a-beginners-guide-to-html-tags-c1d3e7a72457" target="_blank" rel='noreferrer' className='btn'>Read More</a>
            </div>
              
        </article>
        <article className='portfolio__item_blog'>
            <div className="portfolio__item-image_blog">
                <img src={IMG2} alt="" />
            </div>
            <h3>An Introduction to JavaScript: The Language of the Web</h3>
            <small className='text-light'>JavaScript | Basics </small>
            <div className="portfolio__item-cta_blog">
              <a href="https://medium.com/@nipunayes/an-introduction-to-javascript-the-language-of-the-web-545f545dc47f" target="_blank" rel='noreferrer' className='btn'>Read More</a>  
            </div>
            
        </article>
        <article className='portfolio__item_blog'>
            <div className="portfolio__item-image_blog">
                <img src={IMG4} alt="" />
            </div>
            <h3>Introduction to React.js: Building Interactive Web Applications</h3>
            <small className='text-light'>React.js | Part I | Basics </small>
            <div className="portfolio__item-cta_blog">
              <a href="https://medium.com/@nipunayes/introduction-to-react-js-building-interactive-web-applications-6cd134b1303a" target="_blank" rel='noreferrer' className='btn'>Read More</a>  
            </div>
            
        </article>

       


      </div>
    </section>
  )
}

export default Myblog