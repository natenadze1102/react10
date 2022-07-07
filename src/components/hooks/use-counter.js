import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            if (forwards === true) {
                setCounter((prev) => {
                    return prev + 1
                })
            } else {
                setCounter((prev) => {
                    return prev - 1
                })
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);
    return counter
}

export default useCounter;