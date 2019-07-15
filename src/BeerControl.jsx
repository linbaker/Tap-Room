import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewKeg from './EmployeesOnly/NewKeg';
import EmployeeLogin from './EmployeeLogin';


export default class BeerControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canAddKeg: false
        };
        this.handleEmployeeConfirm = this.handleEmployeeConfirm.bind(this);
    }

    handleEmployeeConfirm() {
        this.setState({ canAddKeg: true });
    }

    render() {
        let currentUserView = null;
        if (this.state.canAddKeg) {
            currentUserView = <NewKeg onAddingBeer={this.props.onAddingBeer} />;
        } else {
            currentUserView = <EmployeeLogin onEmployeeLogin={this.handleEmployeeConfirm} />;
        }
        return (
            <div>
                {currentUserView}
            </div>
        );
    }
}

BeerControl.propTypes = {
    onAddingBeer: PropTypes.func
}