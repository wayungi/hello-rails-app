import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './reducers/greetingsSlice';

const Greeting = () => {
const dispatch = useDispatch();
const greeting = useSelector((state) => state.greetings.greeting);
useEffect(() => {
dispatch(fetchGreeting());
}, [dispatch]);

return <h2 className="hello">{greeting}</h2>
};

export default Greeting; 














// import React, { useEffect } from 'react';
// import {usDispatch, useSelector} from 'react-redux';
// import { getGreeting } from '../redux/greetingSlice';


// const Greeting = () => {

//     const dispatch = useDispatch();
//     const message = useSelector((state) => state.greet);
  
//     useEffect(() => {
//       dispatch(getGreeting());
//     }, []);

//     console.log(message)
//     return (
//     <>
//         <h1>Hello</h1>
//         <div>{message}</div>
        

//     </>
//     )
//     }

// export default Greeting;
 