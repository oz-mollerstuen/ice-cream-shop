import React from "react";
import PropTypes from 'prop-types';
import IceCream from "./IceCream";

function IceCreamList(props) {
    return (
        <React.Fragment>
            {props.iceCreamList.map((board) => 
            <Board
            whenIceCreamClicked={props.onIceCreamSelection}
            flavors = {IceCream.flavors}
            price = {IceCream.price}
            id = {IceCream.id}
            key = {IceCream.id}/>
            )}
        </React.Fragment>
    );
}

IceCreamList.propTypes = {
    iceCreamList: PropTypes.array,
    onIceCreamSelection: PropTypes.func
};

export default IceCreamList;