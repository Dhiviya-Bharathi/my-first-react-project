var React = require('react');
var EachProduct = require('./EachProduct.react');
//var StoreData = require('./stores/StoreData');

var AllProducts = React.createClass({	
	propTypes: {
		allProducts: React.PropTypes.array.isRequired
	},
    render: function () {
		var products = [];
	
		for (var key in this.props.allProducts){
			products.push(<EachProduct key={key} value={this.props.allProducts[key].productName}/>)
		}
		
        return ( 
			<ul id="store-list">{products}								
			</ul> 
		);
    }
});
module.exports = AllProducts;