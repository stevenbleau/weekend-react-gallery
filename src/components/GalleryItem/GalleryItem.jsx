import {useState} from 'react';

function GalleryItem({id, path, description, likes}) {
    const [toggle, setToggle] = useState(false);

    console.log('in GallertyItem');
    console.log('THE DATA IS', id, path, description, likes)

    return(
        <div>
            <img src={path} width="100px" height="100px"/>
            <h1>{description}</h1>
            <h1>likes: {likes}</h1>  
        </div>
    );

}

export default GalleryItem;