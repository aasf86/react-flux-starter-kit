"use strict";

var React = require('react');

var AboutPage = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if(!confirm('Are you sure to want to see this page, take care...')){
                transition.abourt();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            if(!confirm('Are you sure to want to leave this page, not worry, see you later...')){
                transition.abourt();
            }
        }        
    },

    render: function(){

        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following tehcnologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>React</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>                        
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = AboutPage;