"use strict";

var React = require('react');

var Linput = React.createClass({

    render: function(){
        return (
            <div className={this.props.className + ' ' + (this.props.hasError ? 'has-error' : '')}>
                <label htmlForm={this.props.inputName} className="control-label">{this.props.labelName}</label>
                <input type="text" 
                    name={this.props.inputName} 
                    className="form-control" 
                    placeholder={this.props.placeholder} 
                    ref={this.props.inputName} 
                    value={this.props.value}
                    onChange={this.props.onChange} />
                    {this.props.hasError ? <span className="text-danger">{this.props.hasError}</span> : null}                     
            </div>
        );
    }
});

module.exports = Linput;