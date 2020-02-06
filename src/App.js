import React, {useState} from 'react'
import * as math from 'mathjs'
import './App.css'
const App = () => {

  const [data, setData] = useState({
    result: null,
    equation: ''
  })


  const numberClick = (number) => {
    console.log(number)
    setData({
      ...data,
      equation: data.equation + number
    })
  }

  const operatorClick = (operator) => {
    if(operator === "="){
      setData({
        ...data,
        
        equation: math.evaluate(data.equation)
      })
      
    }
    else if(operator === "C"){
      setData({
        ...data,
        equation: '',
        result: 0
      })
    }
    else{
      setData({
        ...data,
        equation: data.equation + operator
      })
    }
  }

  return (
    <div className="box">
      <div className="box-content">
        <h3>Calculator extension</h3>
        <h4>Made with React JS</h4>
        <div className="result">
          {/* <p> {" "} {data.result}</p> */}
          <p> {" "} {data.equation}</p>
        </div>
        <div className="first-row">
          <button name="1" onClick={e => numberClick(e.target.name)}>1</button>
          <button name="2" onClick={e => numberClick(e.target.name)}>2</button>
          <button name="3" onClick={e => numberClick(e.target.name)}>3</button>
          <button name="+" onClick={e => operatorClick(e.target.name)}>+</button>
        </div>

        <div>
          <button name="4" onClick={e => numberClick(e.target.name)}>4</button>
          <button name="5" onClick={e => numberClick(e.target.name)}>5</button>
          <button name="6" onClick={e => numberClick(e.target.name)}>6</button>
          <button name="-" onClick={e => operatorClick(e.target.name)}>-</button>
        </div>

        <div>
          <button name="7" onClick={e => numberClick(e.target.name)}>7</button>
          <button name="8" onClick={e => numberClick(e.target.name)}>8</button>
          <button name="9" onClick={e => numberClick(e.target.name)}>9</button>
          <button name="*" onClick={e => operatorClick(e.target.name)}>*</button>
        </div>

        <div>
          <button name="0" onClick={e => numberClick(e.target.name)}>0</button>
          <button name="C" onClick={e => operatorClick(e.target.name)}>C</button>
          <button name="=" onClick={e => operatorClick(e.target.name)}>=</button>
          <button name="/" onClick={e => operatorClick(e.target.name)}>/</button>
        </div>
      </div>
    </div>
  )
}

export default App

