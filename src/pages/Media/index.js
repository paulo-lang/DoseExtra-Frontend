import React, { useState, useEffect } from "react"
import './styles.css'
import api from "../../services/api"
import { RiCloseLine } from 'react-icons/ri'

const Media = () => {
    const [active, setActive] = useState('photo')
    const [content, setContent] = useState([])
    const [scrollDir, setScrollDir] = useState(0);
    const [toogleViewer, setToggleViewer] = useState(0);

    useEffect(() => {
        var links = document.getElementsByClassName('link')
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#5ae1e6"
        }
        document.getElementsByClassName('header')[0].style.backgroundColor = "#0b2047"

        api.get('medias/type/photo').then(response => {
            setContent(response.data)
        })
    }, [])

    useEffect(() => {
        api.get('medias/type/' + active).then(response => {
            setContent(response.data)
        })
    }, [active])

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? 0 : 1);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        scrollDir == 0 ? document.getElementById("feed").style.height = "80vh" : document.getElementById("feed").style.height = "60vh"

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);


    function changeColor(e, name) {
        e.target.style.color = "#5ae1e6"
        e.target.style.backgroundColor = "#fff"
        let deactivated = document.getElementById(name)
        deactivated.style.color = "#c5c5c5"
        deactivated.style.backgroundColor = "transparent"

        setActive(e.target.id)
    }

    return (
        <div className="container" >
            <div className="media-container-header" >
                <div id="photo" onClick={(e) => { changeColor(e, "video") }} className="media-container-title">Fotos</div>
                <div id="video" onClick={(e) => { changeColor(e, "photo") }} className="media-container-title">Vídeos</div>
            </div>

            <div className="feed-container" >
                <ul id="feed" className="feed" >
                    {active == 'photo' ? content.map(content => (
                        <li className="item-container" key={content.id}>
                            <img onClick={() => { setToggleViewer(content.link) }} height={240} width={400} src={'https://drive.google.com/uc?export=view&id=' + content.link} />
                        </li>
                    )) :
                        content.map(content => (
                            <li className="item-container" key={content.id}>
                                <video controls width="250">
                                    <source onClick={() => { setToggleViewer(content.link) }} height={240} width={400} src={'https://drive.google.com/uc?export=view&id=' + content.link} type="video/mp4" />
                                </video>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {toogleViewer &&
                <div id="viewer">
                    <RiCloseLine style={{ position: "absolute", marginTop: "7px", marginLeft: "7px" }} onClick={() => { setToggleViewer(0) }} color="#0b2047" size="50px" />
                    <img style={{ marginLeft: "50px", marginTop: "50px", borderRadius: "10px" }} height={680} width={1520} src={'https://drive.google.com/uc?export=view&id=' + toogleViewer} />
                </div>
            }

        </div>
    )
}



export default Media