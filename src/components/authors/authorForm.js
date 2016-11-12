"use strict";

var React = require('react');
var Linput = require('../common/linput');

var AuthorForm = React.createClass({

    render: function(){

    var renderLinput = function(value, onChange, inputName, labelName, placeholder){        
        return (
            <div>
                <label htmlForm={inputName}>{labelName}</label>
                <input type="text" 
                    name={inputName} 
                    className="form-control" 
                    placeholder={placeholder} 
                    ref={inputName} 
                    value={value}
                    onChange={onChange} />
            </div>
        );
    };        
    /*
<label htmlForm="firstName">First Name</label>
                            <input type="text" 
                                name="firstName" 
                                className="form-control" 
                                placeholder="Input your name" 
                                ref="firstName" 
                                value={this.props.author.firstName}
                                onChange={this.props.onChange} />    
    */
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