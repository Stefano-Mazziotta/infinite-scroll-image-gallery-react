import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

import Image from "./Image";

const Collage = () => {

    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "unsplashAccessKey";
    
        axios
         .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
         .then(res => {
            setImages([...images, ...res.data]);
            setIsLoaded(true);
         }
        )
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return(
        <div className="hero is-fullheight is-bold is-info">
            <div className="hero-body">
                <div className="container">
                    <div className="header content">
                        <h1 className="title is-1">
                            Infinite Scroll image gallery
                        </h1>
                    </div>
                    
                    <InfiniteScroll
                        dataLength={images}
                        next={() => fetchImages(5)}
                        hasMore={true}
                        loader={
                            <div className="loader-wrap">
                                <div className="loader-5"><span></span></div>
                            </div>
                        }                    
                    >
                        <div className="image-grid" style={{marginTop: "30px"}}>
                            {isLoaded ?
                                images.map((image, index) => (
                                    <Image url={image.urls.regular} imageKey={index} key={index} />
                                )): ""}
                        </div>


                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default Collage;