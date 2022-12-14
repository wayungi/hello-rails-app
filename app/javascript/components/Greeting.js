import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
    const { message } = useSelector(state => state.greet)
    // const message = useSelector(state => state.greet.message)

    console.log (message);


    return (<div>Greeting 1</div>)

}

export default Greeting;
 