import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

export const AdviceApp = (props) => {
    const [advice, setAdvice] = useState("Please click the button")
    const [count, setCount] = useState(0)
   
    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice)
        setCount((c) => c + 1)
    }

    function County() {
        return (
            <p>
                You have read <b>{count}</b> a piece of advice
            </p>
        )
    }
    // useEffect(function () {
    //     getAdvice();
    // }, [])
    
    return (
        <>
            <div>
                <h3>{advice}</h3>
                <button onClick={getAdvice}>Get Advice</button>
                <County count={props.count} />
            </div>
        </>
    );
};
