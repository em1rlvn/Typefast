import { useEffect } from "react";

function Timer({ time, setTime, isRunning, setFinished }) {
    useEffect(() => {

    if(isRunning && time > 0) {
        const timerId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }
    if(time === 0) {
        setFinished(true);
    }
    }, [isRunning, time, setFinished]);

    return (
        <div>
            <h2>Time: {time}</h2>
        </div>
    )
}
export default Timer