import React from 'react'

function quoteCard(props) {
    return (
        <div>
            <figure>
                <img src={props.imageUser} alt='image'/>
                <h1>{props.characterUser}</h1>
                <h3>{props.quoteUser}</h3>
            </figure>
        </div> //Toujours renvoyer soit une balise, soit une div vide.
    )
}

export default quoteCard;