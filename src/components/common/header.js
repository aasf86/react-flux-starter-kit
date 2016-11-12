"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = React.createClass({

    render: function(){

        return (
            <nav className="navbar navbar-default">
                <Link to="app" className="navbar-brand">
                    <img src="https://facebook.github.io/react/img/logo.svg" height="27" width="27" />
                </Link>
                <ul className="nav navbar-nav">
                    <li><Link to="app">Home</Link></li>
                    <li><Link to="authors">Authors</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </nav>
        );
    }
});

module.exports = Header; 