const Image = ({url, imageKey}) => {
    return(
        <div className="image-item" key={imageKey}>
            <img src={url}/>
        </div>
    )
};

export default Image;
    
