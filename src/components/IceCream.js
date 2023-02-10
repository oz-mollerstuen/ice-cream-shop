import React from "react";
import PropTypes from "prop-types";

function IceCream(props){
    return (
        <React.Fragment>
            <div onClick = {() => props.whenIceCreamClicked(props.id)}>
                <h3>{props.flavors}  - ${props.price}</h3>
                <hr/>
            </div>
        </React.Fragment>
    )
}

IceCream.propTypes = {
    flavors: PropTypes.string.isRequired,
    iceCream: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenIceCreamClicked: PropTypes.func
};

export default IceCream;