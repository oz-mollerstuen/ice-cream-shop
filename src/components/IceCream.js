import React from "react";
import PropTypes from "prop-types";

function IceCream(props){
    return (
        <React.Fragment>
            <center>
            <div onClick = {() => props.whenIceCreamClicked(props.id)}>
                <h3>{props.flavors}  - ${props.price}</h3>
                <hr/>
            </div>
            </center>
        </React.Fragment>
    )
}

IceCream.propTypes = {
    flavors: PropTypes.string.isRequired,
    IceCream: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenIceCreamClicked: PropTypes.func
};

export default IceCream;