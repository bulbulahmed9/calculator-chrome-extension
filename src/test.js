import React, {useState} from 'react'
import * as math from 'mathjs'

const App = () => {

  const [data, setData] = useState({
    result: 0,
    numbers: [0,1,2,3,4,5,6,7,8,9],
    operators: ["+", "-", "*", "/", "=", "C"],
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
        equation: '',
        result: math.evaluate(data.equation)
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
    <div style={{ textAlign: "center", width: "400px", height: "600px" }}>
      <h3>My extension</h3>
      <div>
        {
          data.numbers.map((number, index) => {
            return (
            <button onClick={() => numberClick(number)} key={index}>{number}</button>
            )
          })
        }
      </div>
      <div>
        {
          data.operators.map((operator, index) => {
            return (
            <button onClick={() => operatorClick(operator)} key={index}>{operator}</button>
            )
          })
        }
      </div>
      <div>
        <p>result: {data.result}</p>
        <p>equation: {data.equation}</p>
      </div>
    </div>
  )
}

export default App