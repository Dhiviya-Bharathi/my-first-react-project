
var React = require('react');
//var StoreData = require('../stores/StoreData');
var StoreActions = require('../actions/StoreActions');

var AddProductForm = React.createClass({
	defaultStateObject : {
			productId: '',
			productName: '',
			category: '',
			quantity: '',
			price: ''
	},
	
	getInitialState: function() {
		return this.defaultStateObject;
	},
	
	getFormData: function() {
		var data = {
			productId: this.refs.productId.getDOMNode().value,
		 	productName: this.refs.productName.getDOMNode().value,
		 	category: this.refs.category.getDOMNode().value,
		 	quantity: this.refs.quantity.getDOMNode().value,
			price: this.refs.price.getDOMNode().value		
		}		
		return data;
	},
	
    render: function () {
		
        return ( 
			<form name = "addProductForm">
				{this.renderTextInput('productId', 'ID', this.state.productId)}
				{this.renderTextInput('productName', 'Name', this.state.productName)}
				{this.renderTextInput('category', 'Category', this.state.category)}
				{this.renderTextInput('quantity', 'Quantity', this.state.quantity)}
				{this.renderTextInput('price', 'Price', this.state.price)}		
				<button type="button" onClick={this.handleSubmit}>Submit</button>
			</form> 
		);
    },
	
	renderTextInput: function (id, label, value) {
		return this.renderField(id, label,
			<input type="text" className="form-control" id={id} value={value} onChange={this.onChange.bind(this, id)}/>
		)
	},
	
	renderField: function (id, label, field) {
		 return <div className="form-group">
					<label htmlFor={id} className="field-label">{label}</label>			
					{field}
				</div>	
	},
	
	onChange: function(id, e) {	
		var object = {};
		object[id] = e.target.value;
		this.setState(object);
	},
	
	handleSubmit: function(event) {		
		StoreActions.create(this.state);		
		this.setState(this.defaultStateObject);
	}
});

module.exports = AddProductForm;

