"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var Router = require('react-router');
var toastr = require('toastr');

var AuthorManager = React.createClass({
    mixins:[
        Router.Navigation
    ],
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

    saveAuthor: function(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author added with success!');
        this.transitionTo('authors');
    },

    render: function(){

        return (
            <div>
                <h1>Form Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} />
            </div>
        );
    }
});

module.exports = AuthorManager; 