import { useState } from "react";

import axios from 'axios';

function Calculator()
{
    let [num1 , setNum1]=useState(0);
    let[num2, setNum2]=useState(0);
    let[result, setResult]=useState(0);
    let[operator,setOperator]=useState('');

function calculte(input)
{
if(num1==0)
   { setNum1(input);
   }
   else
   {
    setNum2(input);
   }
}
function clear()
{
    setNum1(0);
    setResult(0);
    setNum2(0);
    setOperator('');
}
function caloperator(operend)
{setOperator(operend);
}

async function handleResult()  {
    const response = await axios.post('http://localhost:2000/calculate', {num1,num2, opporator});
    setResult(response.data)
}


return(
<div style={{justifyContent:'center',marginTop:'100px'}}>
    <h1 style={{display:'flex',justifyContent:'center'}}>Calculator</h1>
    <div style={{backgroundColor:'grey',borderRadius:'10px', paddingTop:'20px'}}>
    <input type="number" placeholder='enter numbers' />
<div style={{display:'flex',justifyContent:'center',gap:'10px',paddingBottom:'10px',paddingTop:'10px'}}>
    <button onClick={() => calculte(7)}>7</button>
    <button onClick={() => calculte(8)}>8</button>
    <button onClick={() => calculte(9)}>9</button>
    <button style={{backgroundColor:'white'}} onClick={() => caloperator('+')}>+</button>
</div>
<div style={{display:'flex',justifyContent:'center',gap:'10px',paddingBottom:'10px'}}>
    <button onClick={() => calculte(4)}>4</button>
    <button onClick={() => calculte(5)}>5</button>
    <button onClick={() => calculte(6)}>6</button>
    <button style={{backgroundColor:'white'}} onClick={() => caloperator('-')}>-</button>
</div>
<div style={{display:'flex',justifyContent:'center',gap:'10px',paddingBottom:'10px'}}>
    <button onClick={() => calculte(1)}>1</button>
    <button onClick={() => calculte(2)}>2</button>
    <button onClick={() => calculte(3)}>3</button>
    <button style={{backgroundColor:'white'}} onClick={() => caloperator('x')}>x</button>
</div>
<div style={{display:'flex',justifyContent:'center',gap:'10px',paddingBottom:'10px'}}>
    <button style={{backgroundColor:'red'}} onClick={clear}>c</button>
    <button onClick={() => calculte(0)}>0</button>
    <button style={{backgroundColor:'white'}}onClick={handleResult}>=</button>
    <button style={{backgroundColor:'white'}} onClick={() => caloperator('/')}>/</button>
   
</div>
 {result}
</div>

</div>


)}
export default Calculator;