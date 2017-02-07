import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employee.js';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup

  //Check is there is already datas in the DB
    const numberRecord = Employees.find({}).count();
    console.log("Nb records", numberRecord);

    if(!numberRecord) {
      _.times(5000, () => {

        //Generate Card
          const { name, email, phone } = helpers.createCard();

        //Add it to the DB
          Employees.insert({   name, email, phone, avatar: image.avatar() });
          
      });
    }

});
