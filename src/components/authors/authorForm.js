"use strict";

var React = require('react');

var AuthorForm = React.createClass({

    render: function(){

        return (
            <div>                
                <form className="well">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlForm="firstName">First Name</label>
                            <input type="text" 
                                name="firstName" 
                                className="form-control" 
                                placeholder="Input your name" 
                                ref="firstName" 
                                value={this.props.author.firstName}
                                onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlForm="lastName">Last Name</label>
                            <input type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Input your last name"
                                ref="lastName"
                                value={this.props.author.lastName} 
                                onChange={this.props.onChange}/>
                        </div>                        
                    </div>
                    <br />
                    <p>
                        <button className="btn btn-primary"><i className="glyphicon glyphicon-floppy-disk"></i> Add</button>
                    </p>
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm; 