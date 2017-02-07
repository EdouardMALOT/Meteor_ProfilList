import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees} from '../../imports/collections/employee';
import EmployeeDetail from './employee_detail';


const EmployeeList = (props) => {

    return(
        <div>
            <div className="employee-list"> 
                {props.employees.map(employee =>  <EmployeeDetail employee={employee}/> )}
            </div>
        </div>
    );
    
};

export default createContainer( () => { 

    //Set up subscription
        Meteor.subscribe('employees');

    //Return object set as props
        return { 
            employees: Employees.find({}).fetch() 
        };

}, EmployeeList);