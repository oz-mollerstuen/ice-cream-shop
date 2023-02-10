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
    const selectedIceCream = this.state.mainIceCreamList.filter(IceCream => IceCream.id === id)[0];
    this.setState({selectedIceCream: selectedIceCream});
}

handleDeletingIceCream = (id) => {
    const newMainIceCreamList = this.state.mainIceCreamList.filter(IceCream => IceCream.id !== id);
    this.setState({
    mainIceCreamList: newMainIceCreamList,
    selectedIceCream: null
    });
}

handleSellingIceCream = (id) => {
    let IceCreamToEdit = this.state.mainIceCreamList.filter(IceCream => IceCream.id === id)[0];
    if(IceCreamToEdit.quantity === 0){
        IceCreamToEdit.quantity = 0;
    } else {
        IceCreamToEdit.quantity--;
        const editedMainIceCreamList = this.state.mainIceCreamList
            .filter(IceCream => IceCream.id !== id)
            .concat(IceCreamToEdit);
        this.setState({
            mainIceCreamList: editedMainIceCreamList.sort((a, b) => a.flavors.localeCompare(b.name))
        });        
    }
}

handleEditingIceCreamInList = (IceCreamToEdit) => {
    const editedMainIceCreamList = this.state.mainIceCreamList
    .filter(IceCream => IceCream.id !== this.state.selectedIceCream.id)
    .concat(IceCreamToEdit);
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
        IceCream = {this.state.selectedIceCream} 
        onEditIceCream = {this.handleEditingIceCreamInList}/>
        buttonText = "Return to IceCream List";
    } else if (this.state.selectedIceCream != null) {
        currentlyVisibleState = 
    <Details 
        IceCream = {this.state.selectedIceCream} 
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
        IceCreamList = {this.state.mainIceCreamList} 
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