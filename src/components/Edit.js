import React from "react";
import IceForm from "./IceForm";
import PropTypes from "prop-types";

function EditIceCream (props) {
    const { iceCream } = props;

function handleEditIceSubmission(event) {
    event.preventDefault();
    props.onEditIceCream({
        flavors: event.target.flavors.value, 
        price: event.target.price.value, 
        quantity: event.target.quantity.value, 
        id: iceCream.id
})}

return (
    <React.Fragment>
        <IceForm 
            formSubmissionHandler =  {handleEditIceSubmission}
            buttonText="Update IceCream" />
        </React.Fragment>
    );
}

EditIceCream.propTypes = {
    iceCream: PropTypes.object,
    onEditIce: PropTypes.func
};

export default EditIceCream;