import React from "react"
import {evaluate} from "mathjs"
import KeyPad from './KeyPad'
import Screen from "./Screen"

class App extends React.Component{
    
    render(){
        return(
            <div style={{width:"25rem",justifyContent:"space-between"}}>
            <Screen/>
            <KeyPad/>
            </div>
        )
    }
}

export default App;