import {useState} from 'react';

function GalleryItem({id, path, description, likes}) {
    
    const [toggle, setToggle] = useState(true);
    let [likesCount, setLikesCount] = useState(0);

    const toggleImage = () => {
        console.log('in toggleImage');

        if (toggle === true){
            console.log('TRUE')
            return <img src={path} onClick={() => setToggle(!toggle)} width="100px" height="100px"/>

        } else{
            return <h5 onClick={() => setToggle(!toggle)}>{description}</h5>

        }
    }

    const displayLikes = () => {
        console.log('in displayLikes')
        return <div>
            <h3>Likes: {likesCount}</h3>
            <button onClick={addLike}>Like</button> 
        </div>

    }
    const addLike = () => {

        
        console.log('ADDING LIKE');
        setLikesCount(likesCount + 1);
        console.log('LIKES = ',likesCount);

        displayLikes();
    }




    return <div>
            {toggleImage()}
            {displayLikes()}
            {/* {displayLikes()} */}
            {/* <h3>Likes: {likes}</h3>  */}
            {/* <button onClick={addLike}>Like</button>  */}
    </div>


}

export default GalleryItem;