import React from 'react';

const Context = React.createContext();
export const Consumer = Context.Consumer;

export default class Provider extends React.Component
{
	constructor(props){
		super(props);
		this.state = {
			"fname":undefined,
			"lname":undefined,
			"email":undefined,
			"phone":undefined,
			"houseno":undefined,
			"street":undefined,
			"suburb":undefined,
			"state":undefined,
			"postcode":undefined,
			"country":undefined
		};

	}
	inputHandler= (e) =>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		let value = {
						state:{...this.state},
						props:{...this.props},
						inputHandler:this.inputHandler
					}
		return <Context.Provider value={value}>
			{this.props.children}
		</Context.Provider>
	}
}