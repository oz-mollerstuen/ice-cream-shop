import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import IceForm from "./IceForm";


function NewIceCream(props){

function handleNewIceCreamSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({
        flavors: event.target.flavors.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        id: v4()
    })
}

    return (
        <React.Fragment>
            <IceForm
            formSubmissionHandler={handleNewIceCreamSubmission}
            buttonText="Add IceCream" />
        </React.Fragment>
    );
}

NewIceCream.propTypes = {
    onNewIceCream: PropTypes.func,
    onNewIceCreamCreation: PropTypes.func
};

export default NewIceCream;