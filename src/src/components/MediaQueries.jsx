import React from 'react'
import companyLogo from './images/company_logo.jpg'
import determinationImage from './images/determination_picture.jpg'
import officeSpace1 from './images/realestate-1.jpg'
import officeSpace2 from './images/realestate-2.jpg'
import officeSpace3 from './images/realestate-3.jpg'
import officeSpace4 from './images/realestate-4.jpg'

const MediaQueries = () => {
    return (
        <div className="main-page_background-image">
            <header className="main-page_header">
                <nav className="main-page_nav-bar_links">
                    <div className="main-page_nav-bar_about">
                        <a href="#">Who we Are</a>
                    </div>
                    <div className="main-page_nav-bar_logo">
                        <img className="main-page_nav-bar_company_logo" src={companyLogo} alt="Organization Logo"
                            srcset="" />
                    </div>
                    <div className="main-page_nav-bar_give">
                        <a href="#">Support our Goal</a>
                    </div>
                </nav>
            </header>
            <section className="main-page_section">
                <div className="main-page_section-content">
                    <div className="main-page_section_about">
                        <h1>We are..</h1>
                        <h4>Our goal is to raise $500.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat hic praesentium ullam at, porro voluptatibus molestiae in eveniet nihil facere minus voluptatem deserunt libero cupiditate earum perferendis nam nisi.</h4>
                    </div>
                    <div className="main-page_section-about_image-content">
                        <img className="main-page_section-about_image" src={determinationImage} s alt="Image of the theme on the goal" srcset="" />
                    </div>
                </div>
            </section>
            <section className="main-page_mid-section">
                <div className="main-page_image-container">
                    <div className="main-page_group-image">
                        <img src={officeSpace1} alt="of office space 1" />
                        <p>A quiet and minimal ambience</p>
                    </div>
                    <div className="main-page_group-image">
                        <img id="shorten-image" src={officeSpace2} alt="of office space 2" />
                        <p>A quiet and minimal ambience</p>
                    </div>
                    <div className="main-page_group-image">
                        <img src={officeSpace3} alt="of office space 3" />
                        <p>A quiet and minimal ambience</p>
                    </div>
                    <div className="main-page_group-image">
                        <img src={officeSpace4} alt="of office space 4" />
                        <p>A quiet and minimal ambience</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MediaQueries