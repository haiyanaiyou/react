import React from 'react'

// 复合组件相当于vue的插槽 
// props.children 代表着标签内部内容 children是合法的表达式
function Dialog(props){
    return (
    <div style={{border:'1px solid blue'}}>{props.children}</div>
    )
}

function Radio({children, ...rest}){
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    )
}

function RadioGroup(props){
    return (
        <div>
            {React.Children.map(props.children, radio=>{
                return React.cloneElement(radio, {name: props.name})
            })}
        </div>
    )
}
export default function Composition() {
    return (
        <div>
            <Dialog>
                <h1>复合组件</h1>
            </Dialog>
            <RadioGroup name="框架">
                <Radio value='vue'>vue</Radio>
                <Radio value='react'>react</Radio>
                <Radio value='angular'>angular</Radio>
            </RadioGroup>
        </div>
    )
}
