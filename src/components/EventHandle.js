import React, { Component } from 'react'

export default class EventHandle extends Component {

        state= {
            name: ''
        }

        handleChange= (e)=> {
            this.setState({
                name: e.target.value
            })
        }
        render(){
            return (
                <div>
                    <input type='text' value={this.state.name} onChange={ this.handleChange } />
                </div>
            )

        }
       
    
}
