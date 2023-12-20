import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                {/* Add your Header component here */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    {/* Add more routes based on your requirements */}
                </Switch>
                {/* Add your Footer component here */}
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {/* Add content and other components as needed */}
        </div>
    );
}


const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            {/* Add content and other components as needed */}
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
