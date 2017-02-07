import React from 'react';


const EmployeeList = ({employee}) => {

    const { name, phone, email, avatar } = employee;

    return(
        <div>
            <img src={avatar} />
            <div className="caption">
                <h3>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email} </li>
                    <li className="list-group-item">Phone: {phone} </li>
                </ul>
            </div>
        </div>
    );
};

export default EmployeeList;
