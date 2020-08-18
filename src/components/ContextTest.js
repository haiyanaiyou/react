import React, { Component } from 'react'

// 创建上下文
const Context = React.createContext();
// 获取provider和consumer
const Provider = Context.Provider;
const Consumer = Context.Consumer;

function Child(props){
    return (
        <div onClick={()=> props.add()}>
            {props.counter}
        </div>
    )
}
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
                    <Consumer>
                        {value => <Child {...value} />}
                    </Consumer>
                </Provider>
            </div>
        )
    }
}
