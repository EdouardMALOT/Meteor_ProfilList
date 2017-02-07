import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return(
    <div>Hello Aix</div>
  );
}

Meteor.startup(() => {
  // code to run
    ReactDOM.render(<App />, document.querySelector('.container'));
});
