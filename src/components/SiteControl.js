import React from 'react';
import IceCreamList from "./IceCreamList";
import Details from "./Details";
import EditIceCream from "./Edit";
import NewIceCream from "./NewIceCream";


class SiteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainIceCreamList: [],
            formVisibleOnPage: false,
            editing: false,
            selectedIceCream: null
    };
}

handleAddingNewIceCreamToList = (newIceCream) => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIceCream);
    this.setState({mainIceCreamList: newMainIceCreamList,
        formVisibleOnPage: false });
}

handleClick = () => {
    if(this.state.selectedIceCream != null){
        this.setState({
            formVisibleOnPage: false,
            selectedIceCream: null,
            editing: false
        });
        } else{
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

handleEditClick = () => {
    this.setState({editing: true});
}

handleChangingSelectedIceCream = (id) => {
    const selectedIceCream = this.state.mainIceCreamList.filter(iceCream => iceCream.id === id)[0];
    this.setState({selectedIceCream: selectedIceCream});
}

handleDeletingIceCream = (id) => {
    const newMainIceCreamList = this.state.mainIceCreamList.filter(iceCream => iceCream.id !== id);
    this.setState({
    mainIceCreamList: newMainIceCreamList,
    selectedIceCream: null
    });
}

handleSellingIceCream = (id) => {
    let iceCreamToEdit = this.state.mainIceCreamList.filter(iceCream => iceCream.id === id)[0];
    if(iceCreamToEdit.quantity === 0){
        iceCreamToEdit.quantity = 0;
    } else {
        iceCreamToEdit.quantity--;
        const editedMainIceCreamList = this.state.mainIceCreamList
            .filter(iceCream => iceCream.id !== id)
            .concat(iceCreamToEdit);
        this.setState({
            mainIceCreamList: editedMainIceCreamList.sort((a, b) => a.flavors.localeCompare(b.name))
        });        
    }
}

handleEditingIceCreamInList = (iceCreamToEdit) => {
    const editedMainIceCreamList = this.state.mainIceCreamList
    .filter(iceCream => iceCream.id !== this.state.selectedIceCream.id)
    .concat(iceCreamToEdit);
    this.setState({
        mainIceCreamList: editedMainIceCreamList,
        editing: false,
        selectedIceCream: null
    });
}


render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
        currentlyVisibleState = 
    <EditIceCream
        iceCream = {this.state.selectedIceCream} 
        onEditIceCream = {this.handleEditingIceCreamInList}/>
        buttonText = "Return to IceCream List";
    } else if (this.state.selectedIceCream != null) {
        currentlyVisibleState = 
    <Details 
        iceCream = {this.state.selectedIceCream} 
        onClickingDelete = {this.handleDeletingIceCream} 
        onClickingEdit = {this.handleEditClick} 
        onClickingSell = {this.handleSellingIceCream}/>
        buttonText="Return to IceCream List"
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = 
    <NewIceCream
        onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />
        buttonText= "Return to IceCream List";
    } else {
        currentlyVisibleState = 
    <IceCreamList
        iceCreamList = {this.state.mainIceCreamList} 
        onIceCreamSelection = {this.handleChangingSelectedIceCream} />
        buttonText= 'Add IceCream';
    }
    return(
    <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
}}

export default SiteControl;