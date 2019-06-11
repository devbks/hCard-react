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
			"country":undefined,
			"avatar":undefined
		};
	}
	//Handle the form inputs along with file upload to set the global context states
	inputHandler= (e) =>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		// values to be provided to the consumer components
		let value = {
						state:{...this.state},
						props:{...this.props},
						inputHandler:this.inputHandler
					}
		// render the component by wraping around context provider so the <Consumer> can be used in their components
		return <Context.Provider value={value}>
			{this.props.children}
		</Context.Provider>
	}
}