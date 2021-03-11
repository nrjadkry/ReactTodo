import React, {Component} from 'react';
import './App.css';
import Plan from './Plan';

class App extends Component {
	state={
		items:[],
		text:""
	}
	handleChange = e => {
		this.setState({text:e.target.value})
	}
	handleAdd = e => {
		if (this.state.text !== '') {
			const items = [...this.state.items, this.state.text]
			this.setState({items:items, text:""})
		}
	}
	handleDelete = id => {
		const oldItems = [...this.state.items]
		const newItems = oldItems.filter((element, i) => {
			return i !== id
		})
		this.setState({items:newItems})
	}

	render(){
		return (
		    <div className="container-fluid my-5">
		    <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
		      <h2 className="text-center">Today's Plan</h2>
		      	<div className="row">
			      	<div className="col-9">
			      		<input type="text" className="form-control" placeholder="Write your plan here" value={this.state.text} onChange={this.handleChange}/>
			      	</div>
			      	<div className="col-2">
			      		<button onClick={this.handleAdd} className="btn btn-warning px-5 font-weight-bold">Add</button>
			      	</div>
			      	<div className="container-fluid">
			      		<ul className="list-unstyled row m-5">
			      			{ 
			      				this.state.items.map((value, i) => {
			      					return <Plan key={i} id={i} task={value} sendData={this.handleDelete}/>
			      				})
			      			
			      			}
			      		</ul>
			      	</div>
		      	</div>
		    </div>
		    </div>
		  );
	}
  
}

export default App;
