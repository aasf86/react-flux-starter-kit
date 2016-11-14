"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var AuthorTypes = require('../actionsTypes/author');

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: AuthorTypes.CREATE_AUTHOR,
            author: author
        });
    }
};

module.exports = AuthorActions;