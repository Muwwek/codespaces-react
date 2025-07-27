import React, { useState } from 'react';
import './Counter.css'; 
export default function Counter() {
    const [usd, setUsd] = useState(0);
    const [bath, setBath] = useState(0);
    const [count, setCount] = useState(0);
    const rate = 31; 
    const [value, setValue] = useState('');

    function onTextChange(e) {
        let v = e.target.value;
        setValue(e.target.value);
        console.log(`${v} is equal to ${v.length} characters`);
    }

    function onUsdChange(e) {
        const value = e.target.value;"กรอกจำนวนเงิน USD" 
        setUsd(value);
        setBath((value * rate).toFixed(2));
    }

    return (
        <div className="cage-c">
            <h1>Change USD to Bath</h1>
            <input 
                type="number" 
                value={usd} 
                onChange={onUsdChange} 
                placeholder="กรอกจำนวนเงิน USD" 
            />
            <p>USD: {usd} = Bath: {bath} บาท</p>
            <input 
                type="text" 
                value={value} 
                onChange={onTextChange} 
                placeholder="กรอกข้อความ" 
            />
            <p>Lenght: {value.length}</p>
            <button className='btn1' onClick={() => setCount(count + 1)}>Click Me!</button>
            <button className='btn2' onClick={() => setCount(count - 1)}>minus count</button>
            <p>You Click Me {count} times</p>
            <button className='btn1' onClick={() => setCount(0)}>reset count</button>

            <h1>Fahrenheit to Celsius</h1>
           
            
            
        </div>
    );
}

