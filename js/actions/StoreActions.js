
var AppDispatcher = require('../dispatchers/AppDispatcher');
var StoreConstants = require('../constants/StoreConstants');

var StoreActions = {

  create: function(object) {
    AppDispatcher.dispatch({
      actionType: StoreConstants.STORE_CREATE,
      object: object
    });
  }

};

module.exports = StoreActions;
