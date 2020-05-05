import React from "react"
import {connect} from "react-redux"
import {calculation} from "../actions"
import "./Screen.css"

const Screen = (props) => {
    if(props.exp===""){
        return <div className="screen"></div>
    }
    return(
        <div className="screen">{props.exp}</div>
    )
}
const myStateToProps = (state)=>{
    return {exp :state.exp}
}

export default connect(myStateToProps,{calculation})(Screen) ;
