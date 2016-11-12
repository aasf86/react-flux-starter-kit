"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var AuthorManager = React.createClass({

    render: function(){

        return (
            <div>
                <h1>Form Author</h1>
                <AuthorForm />
            </div>
        );
    }
});

module.exports = AuthorManager; 