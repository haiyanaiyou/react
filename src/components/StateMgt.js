import React, {Component,useState,useEffect} from 'react';
// class组件
 class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        this.timeId = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timeId)
    }
    render(){
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
 }

//  函数组件状态管理 useState useEffect
// hooks适用于16.8x以上
function ClockFunc() {
    // 创建状态
    const [date, setDate] = useState(new Date())
    // 异步操作 副作用
    useEffect(()=> {
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    )
}

export default function StateMgt() {
    return (
        <div>
            <hr style={{height:3,background: 'green'}}/>
            <Clock />
            <ClockFunc />
        </div>
    )
}
