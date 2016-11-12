"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorListr = require('./authorList');
var Link = require('react-router').Link;

var Authors = React.createClass({
    getInitialState: function() {
        return { 
            authors: []
        };
    },
    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },
    render: function(){
        return (
            <div>
                <h1>Authors</h1>
                <Link to="author" className="btn btn-primary"><i className="glyphicon glyphicon-plus"></i>  Add author</Link>
                <AuthorListr authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;