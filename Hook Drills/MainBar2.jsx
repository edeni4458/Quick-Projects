import React from 'react'

const MainBar2 = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Under The Cardboard Box</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse show" id="navbarDark">
                        <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria="true">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria="true">Episodes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria="true">C-B News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria="true">Connect</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default MainBar2