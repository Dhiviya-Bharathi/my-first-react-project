
var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var StoreApp = require('./components/StoreApp.react');
var AddProductForm = require('./components/AddProduct.react');

React.render( <Router>
    <Route path="/more-stores" component={StoreApp}>
      <Route path="/add-product" component={AddProductForm} />      
    </Route>
  </Router>,
    document.getElementById('store-home')
);
