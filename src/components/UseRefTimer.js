/* import React, { useRef, useState, useEffect } from 'react'

const UseRefTimer = () => {
    const [count, setCount] =useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevState) => prevState + 1 )
        } , 1000)

        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <div>
            <h5>{count}</h5>    
            <button onClick={() => clearInterval("I can't get access to 'interval' variable to clear from here, so let me use useRef")}>Clear Timer</button>        
        </div>
    )
}

export default UseRefTimer;
*/
import React, { useRef, useState, useEffect } from 'react'

const UseRefTimer = () => {
    const [count, setCount] =useState(0);
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevState) => prevState + 1 )
        } , 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);

    return (
        <div>
            <h5>{count}</h5>    
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>        
        </div>
    )
}

export default UseRefTimer;
