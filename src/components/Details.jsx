import React from 'react';
import PropTypes from 'prop-types';
import IceCream from './IceCream';

function Details(props) {

    const { iceCream, onClickingDelete, onClickingSell } = props;
    return (
        <React.Fragment>
            <h1>IceCream!</h1>
            <h3>{IceCream.terrain} - Price: ${IceCream.price}</h3>
            <p><em>Quantity: {IceCream.quantity}</em></p>
            <button onClick={ props.onClickingEdit }>Update:</button> <br/>
            <button onClick={()=> onClickingDelete(IceCream.id) }>Delete IceCream</button><br/>
            <button onClick={()=> onClickingSell(IceCream.id)}>Sell</button>
            <hr/>
        </React.Fragment>
)}

Details.propTypes = {
    iceCream: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func ,
    onClickingSell: PropTypes.func 
};

export default Details;