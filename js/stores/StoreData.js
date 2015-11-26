
var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var StoreConstants = require('../constants/StoreConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _products = [];


function create(object) { 
  _products.push(object);
  console.log(_products, "products")
}

var StoreData = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _products;
  },
  
  setAll: function(array) {
	_products = array;
  },
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
 
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  var object;

  switch(action.actionType) {
    case StoreConstants.STORE_CREATE:
      object = action.object;   
        create(object);
        StoreData.emitChange();    
      break;
	  
    default:
      // no op
  }
});

module.exports = StoreData;
