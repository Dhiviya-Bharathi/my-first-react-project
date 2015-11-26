var React = require('react');
var $ = require('jquery');
var StoreData = require('../stores/StoreData');
var AddProductForm = require('./AddProduct.react');
var AllProducts = require('./AllProducts.react');

var StoreApp = React.createClass({
	getInitialState: function() {
		return {
			allProducts: []
		};
	},
	
	componentDidMount: function() {
		var self = this;
		$.ajax({
			url: "data/data.json",		 
			success: function(result) {		 
				if (self.isMounted()) {
					self.setState({
						allProducts: result
					});
					StoreData.setAll(self.state.allProducts)
				}		  
				console.log(self.state.allProducts);
			},
		  dataType: "json"
		});
		
		StoreData.addChangeListener(this._onChange);
	},
  
	componentWillUnmount: function() {
		StoreData.removeChangeListener(this._onChange);
	},
    render: function () {
        return ( <div> 
					<div className = "form-container">
						<AddProductForm/>
					</div>
					<div className = "list-container">
						<AllProducts allProducts={this.state.allProducts}/>
					</div> 
				</div> );
    },
	
	_onChange: function() {
		this.setState(StoreData.getAll());
	}
});

module.exports = StoreApp;
