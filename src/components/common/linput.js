"use strict";

var React = require('react');

var Linput = React.createClass({

    render: function(){
        return (
            <div className={this.props.className}>
                <label htmlForm={this.props.inputName}>{this.props.labelName}</label>
                <input type="text" 
                    name={this.props.inputName} 
                    className="form-control" 
                    placeholder={this.props.placeholder} 
                    ref={this.props.inputName} 
                    value={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        );
    }
});

module.exports = Linput;