import React from 'react'

import { Container } from 'react-bootstrap'
import MainTop from './MainPageParts/MainTop'

const MainPage2 = () => {
    return (
        <div responsive="true">
            <MainTop></MainTop>
            <Container>
                <div className="d-flex justify-content-evenly bd-highlight">
                    <div className="">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/qEWwW-OGcHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly bd-highlight'>
                    <div className="boxA">
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainPage2