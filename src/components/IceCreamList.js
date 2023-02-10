import React from "react";
import PropTypes from 'prop-types';
import IceCream from "./IceCream";


function IceCreamList(props) {
    return (
        <React.Fragment>
            {props.IceCreamList.map((iceCream) => 
            <IceCream
            whenIceCreamClicked={props.onIceCreamSelection}
            flavors = {iceCream.flavors}
            price = {iceCream.price}
            id = {iceCream.id}
            key = {iceCream.id}/>
            )}
        </React.Fragment>
    );
}

IceCreamList.propTypes = {
    IceCreamList: PropTypes.array,
    onIceCreamSelection: PropTypes.func
};

export default IceCreamList;