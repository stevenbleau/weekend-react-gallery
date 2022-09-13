import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({gallery}) {
    console.log('in GalleryList');

    console.log('the data is', gallery);
    return (

            <div>
                {
                    gallery.map(item => {
                        //pass item into GalleryItem.jsx
                        console.log('passing item ', item);
                        return <GalleryItem 
                                id={item.id}
                                path={item.path}
                                description={item.description}
                                likes={item.likes}
                            />
                    })
                }
            </div>
    )
}

export default GalleryList;


