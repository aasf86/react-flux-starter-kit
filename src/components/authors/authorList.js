"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var AuthorList = React.createClass({
    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><a href={'/#author/' + author.id}>{author.id}</a></td>
                    <td>{author.firstName + ' ' + author.lastName}</td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;