"use strict";

var React = require('react');

var Header = React.createClass({

    render: function(){

        return (
            <nav className="navbar navbar-default">
                <a href="/" className="navbar-brand">
                    <img src="https://facebook.github.io/react/img/logo.svg" height="27" width="27" />
                </a>
                <ul className="nav navbar-nav">
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#authors">Authors</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </nav>
        );
    }
});

module.exports = Header; 