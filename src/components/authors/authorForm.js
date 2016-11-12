"use strict";

var React = require('react');
var Linput = require('../common/linput');

var AuthorForm = React.createClass({

    render: function(){

        return (
            <div>                
                <form className="well">
                    <div className="row">
                        <Linput className="col-md-6" value={this.props.author.firstName} onChange={this.props.onChange} inputName="firstName" labelName="First Name" placeholder="Input your name" />
                        <Linput className="col-md-6" value={this.props.author.lastName} onChange={this.props.onChange} inputName="lastName" labelName="Last Name" placeholder="Input your last name" />                                                
                    </div>
                    <br />
                    <button className="btn btn-primary"><i className="glyphicon glyphicon-floppy-disk"></i> Add</button>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm; 