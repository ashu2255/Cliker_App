//import Counter from "./Counter";
import React, { useState } from 'react';
import Button from "./Button";
const Header = () => {
    const [count, setCount] = useState(0);
    
    return (
        <header>
            {/* <Counter/> */}
            <div className='count'>{count}</div>
            <Button color="green" text="+" onClick={() => setCount(count + 1)}/>
            <Button color="orange" text="refresh" onClick={() => setCount(0)} />
            <Button color="red" text="-" onClick={() => setCount(count - 1)}/>
            
        </header>
    );
};


export default Header;
