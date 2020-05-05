import React from "react" ;
import './KeyPad.css';
import {connect } from 'react-redux'
import {calculate,calculation,clear,clearAll} from '../actions'


class KeyPad extends React.Component{
    render(){
        return(
            <div>
            <div className="button-row">
            <button onClick={()=>this.props.clearAll()}>C</button>
            <button onClick={()=>this.props.clear()}>DEL</button>
            <button onClick={isNaN(this.props.exp.slice(-1))||this.props.exp===""?null:()=>this.props.calculate("%")}>%</button>
            <button onClick={isNaN(this.props.exp.slice(-1))||this.props.exp===""?null:()=>this.props.calculate("/")}>/</button>
            </div>
            <div className="button-row">
            <button onClick={()=>this.props.calculate("7")}>7</button>
            <button onClick={()=>this.props.calculate("8")}>8</button >
            <button onClick={()=>this.props.calculate("9")}>9</button>
            <button onClick={isNaN(this.props.exp.slice(-1))||this.props.exp===""?null:()=>this.props.calculate("*")}>x</button>
            </div> 
            <div className="button-row">
            <button onClick={()=>this.props.calculate("4")}>4</button>
            <button onClick={()=>this.props.calculate("5")}>5</button >
            <button onClick={()=>this.props.calculate("6")}>6</button>
            <button onClick={isNaN(this.props.exp.slice(-1))||this.props.exp===""?null:()=>this.props.calculate("-")}>-</button>
            </div>
            <div className="button-row">
            <button onClick={()=>this.props.calculate("1")}>1</button>
            <button onClick={()=>this.props.calculate("2")}>2</button >
            <button onClick={()=>this.props.calculate("3")}>3</button>
            <button onClick={isNaN(this.props.exp.slice(-1))||this.props.exp===""?null:()=>this.props.calculate("+")}>+</button>
           
            </div>
            <div className="button-row">
            <button onClick={()=>this.props.calculate("0")} style={{width:"11rem"}}>0</button>
            <button onClick={()=>this.props.calculate(".")}>.</button >
            <button onClick={this.props.exp===""?null:()=>this.props.calculation()}>=</button>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return {exp : state.exp}
}

export default 
connect(mapStateToProps,{calculate,calculation,clear,clearAll
})
(KeyPad);