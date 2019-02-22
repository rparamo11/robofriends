import React from 'react';

const Card = ({ name, email, id }) => {
    // this is another way to add props
    //const { name, email , id } = props; 
    return (
        <div className='tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>  {/*remember to us (back ticks ``) when using string template literals*/}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;