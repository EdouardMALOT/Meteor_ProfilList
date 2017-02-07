import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees} from '../../imports/collections/employee';
import EmployeeDetail from './employee_detail';


const PER_PAGE = 20;

class EmployeeList extends React.Component {

    componentWillMount() {
        this.nbTimeCliked = 1;
        console.log('nb clicked = ', this.nbTimeCliked);
    }

    OnButtonClicked() {
        this.nbTimeCliked++;
        Meteor.subscribe('employees', PER_PAGE*this.nbTimeCliked);
        console.log('nb clicked = ', this.nbTimeCliked);
    }

    render() {
        return(
            <div>

                <div className="employee-list"> 
                    {this.props.employees.map(employee =>  
                        <EmployeeDetail key={employee._id} employee={employee}/> 
                    )}
                </div>

                <button 
                    onClick={this.OnButtonClicked.bind(this)}
                    className="btn btn-primary">
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
            employees: Employees.find({}).fetch()
        };

}, EmployeeList);