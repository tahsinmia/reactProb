import axios from 'axios';
import React from 'react';
import './Form.css'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            desc : ""
        }
    }
    

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = (e)=> {
        e.preventDefault()
        console.log(this.state);
        axios.post(`http://localhost:3001/postreq`, this.state).then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        const {desc} = this.state
        return(
            <>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="desc" value={desc} onChange={this.changeHandler} placeholder='Type your name' />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default Form;