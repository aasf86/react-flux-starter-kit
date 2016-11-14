"use strict";

var React = require('react');
var Linput = require('../common/linput');

var AuthorForm = React.createClass({

    render: function(){

        return (
            <div>                
                <form className="well">
                    <div className="row">
                        <Linput 
                            className="col-md-6" 
                            value={this.props.author.firstName} 
                            onChange={this.props.onChange} 
                            inputName="firstName" 
                            labelName="First Name" 
                            placeholder="Input your name"
                            hasError={this.props.error.firstName} />
                        <Linput 
                            className="col-md-6" 
                            value={this.props.author.lastName} 
                            onChange={this.props.onChange} 
                            inputName="lastName" 
                            labelName="Last Name" 
                            placeholder="Input your last name"
                            hasError={this.props.error.lastName} />                                                
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" disabled={!(this.props.author.firstName || this.props.author.lastName)} onClick={this.props.onSave}><i className="glyphicon glyphicon-floppy-disk"></i> {this.props.editMode ? 'Save' : 'Add'}</button>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm; 