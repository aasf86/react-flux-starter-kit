"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var AuthorManager = React.createClass({
    getInitialState: function(){
        return {
            author: { id: '', firstName: '', lastName: ''}
        };
    },

    setAuthorState: function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        this.setState({author: this.state.author});
    },

    render: function(){

        return (
            <div>
                <h1>Form Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} />
            </div>
        );
    }
});

module.exports = AuthorManager; 