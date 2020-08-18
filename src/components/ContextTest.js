import React, { Component } from 'react'

// 创建上下文
const Context = React.createContext();
// 获取provider和consumer
const Provider = Context.Provider;
const Consumer = Context.Consumer;

function withConsumer(consumer){
    return Comp => props => {
        return   <Consumer>
                    {value => <Comp {...value} {...props} />}
                </Consumer>
    }
}

const Child = withConsumer(Consumer)(function(props){
    return (
        <div onClick={()=> props.add()} title={props.name}>
            {props.counter } {props.name}
        </div>
    )
})

export default class ContextTest extends Component {
    state={
        counter: 0
    }
    add = ()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        return (
            <div>
                <Provider value={{counter: this.state.counter, add: this.add}}>
                    <Child name="foo" />
                    <Child name="bar" />
                </Provider>
            </div>
        )
    }
}
