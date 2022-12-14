import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './redux/greeting';

const Greeting = (message) => {
    return (<div>{message}</div>)
}

const greet = () => {
    const dispatch = useDispatch();
    const {message, loading, error } = useSelector((state) => state.greeting);
    useEffect(() => {
        dispatch(getGreeting())
    }, [dispatch])

    let content
    if (loading === 'pending') {
        content = (
            <span>Loading...</span>
        )
    }

    if (loading === 'idle') {
        content = <Greeting message={data}/>
    }

    if (error !== null) {
        content = (
          <div>{error}</div>
        )
      }

    return <div>{content}</div>
}

export default Greeting;
 