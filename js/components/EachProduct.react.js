var React = require('react');
//var StoreData = require('./stores/StoreData');

var EachProduct = React.createClass({	
    render: function () {			
        return ( 
			<li id="each-product">{this.props.value}								
			</li> 
		);
    }
});
module.exports = EachProduct;