"use strict";

var React = require('react');
var Link = require('react-router').Link;

var PageNotFound = React.createClass({

    render: function(){
        return (
            <div>
                <h1>Page not found, sorry :(</h1>
                <p>There is nothing to see here.</p>
                <p><Link to="app">Go back to home</Link></p>
            </div>
        );
    }
});

module.exports = PageNotFound;