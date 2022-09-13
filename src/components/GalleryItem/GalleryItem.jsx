import {useState} from 'react';

function GalleryItem({id, path, description, likes}) {
    
    const [toggle, setToggle] = useState(true);

    const toggleImage = () => {
        console.log('in toggleImage');

        if (toggle === true){
            console.log('TRUE')
            return <img src={path} onClick={() => setToggle(!toggle)} width="100px" height="100px"/>

        } else{
            return <h5 onClick={() => setToggle(!toggle)}>{description}</h5>

        }
    }



    return <div>
            {toggleImage()}
            <h3>likes: {likes}</h3>  
    </div>


}

export default GalleryItem;