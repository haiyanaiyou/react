import React from 'react'
import JsxText from './components/JsxText'
import StateMgt from './components/StateMgt'
import EventHandle from './components/EventHandle'
import ContextTest from './components/ContextTest'


function App(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <JsxText />
            <StateMgt />
            <EventHandle />
            <ContextTest />
        </div>
    )
}

export default App;

