import React from "react";
import PropTypes from "prop-types";

function IceForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type='text'
                    name='flavors'
                    placeholder='IceCream Flavors' />
                <input
                    type='number'
                    name='price'
                    placeholder='Price' />
                <input
                    type='number'
                    name='quantity'
                    placeholder='# of stock' />
                    <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

IceForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default IceForm;