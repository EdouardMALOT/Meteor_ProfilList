import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees} from '../../imports/collections/employee';
import EmployeeDetail from './employee_detail';


const PER_PAGE = 9;

class EmployeeList extends React.Component {

    componentWillMount() {
        this.nbTimeCliked = 1;
    }

    OnButtonClicked() {
        this.nbTimeCliked++;
        Meteor.subscribe('employees', PER_PAGE*this.nbTimeCliked, this.refs.input.value);
    }

    submitHandler(event) {
        event.preventDefault();
        Meteor.subscribe('employees', PER_PAGE*this.nbTimeCliked, this.refs.input.value);
    }

    render() {
        return(
            <div>
                <div style={{height:30}}></div>
                <form onSubmit={this.submitHandler.bind(this)} className="form">
                   <input ref="input" className="form-control" />
                   <button className="btn btn-primary">Search</button>
                </form>
                <div style={{height:30}}></div>

                <div className="employee-list"> 
                    {this.props.employees.map(employee =>  
                        <EmployeeDetail key={employee._id} employee={employee}/> 
                    )}
                </div>

                <button 
                    onClick={this.OnButtonClicked.bind(this)}
                    className="btn btn-danger btn_load_more">
                        Load More...
                </button>

            </div>

        );
    } 

};

export default createContainer( () => { 

    //Set up subscription
        Meteor.subscribe('employees', PER_PAGE);

    //Return object set as props
        return { 
            employees: Employees.find({}, { limit: 100}).fetch()
        };

}, EmployeeList);