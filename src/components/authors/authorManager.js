"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var AuthorStore = require('../../stores/authorStores');
var AuthorActions = require('../../actions/authorActions');

var Router = require('react-router');
var toastr = require('toastr');

console.log(AuthorStore);

var AuthorManager = React.createClass({ 
    mixins: [
        Router.Navigation
    ],
    getInitialState: function(){
        return {
            author: { id: null, firstName: '', lastName: ''},
            error: { }
        };
    },

    componentWillMount: function(){
        var authorId = this.props.params.id;        
        if(authorId){
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },

    setAuthorState: function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        this.validForm();
        this.setState({author: this.state.author, error: this.state.error});
    },

    validForm: function(){

        var valid = true;
        this.state.error = {};
        if(this.state.author.firstName.length <= 3) {
            this.state.error.firstName = 'please, to inform your first name.';
            valid = false;
        }  

        if(this.state.author.lastName.length <= 3) {
            this.state.error.lastName = 'please, to inform your last name.';
            valid = false;
        }

        if(!valid) {
            this.setState({ error: this.state.error });
        }        
        
        return valid;
    },

    saveAuthor: function(event){
        event.preventDefault();
        if(this.validForm()){            
            
            if(!this.state.author.id) {                
                AuthorActions.createAuthor(this.state.author);
                //AuthorApi.saveAuthor(this.state.author);
                toastr.success('Author added with success!');
                this.transitionTo('authors');
            } else {
                AuthorActions.createAuthor(this.state.author);
                //AuthorApi.saveAuthor(this.state.author);
                toastr.success('Author edited with success!');
            }
        } else {
            toastr.warning('please, verify fields the screen');
        }
    },

    render: function(){

        return (
            <div>
                <h1>Form Author</h1>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} error={this.state.error} editMode={this.state.author.id} />
            </div>
        );
    }
});

module.exports = AuthorManager; 