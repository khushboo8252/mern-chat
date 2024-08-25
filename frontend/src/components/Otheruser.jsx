import React from 'react'
import User from './User';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import {useSelector} from "react-redux";


const OtherUser = () => {
    // my custom hook
    useGetOtherUsers();
    const {otherUsers} = useSelector(store=>store.user);
    if (!otherUsers) return; // early return in react
     
    return (
        <div className='overflow-auto flex-1'>
            {
                otherUsers?.map((user)=>{
                    return (
                        <User key={user._id} user={user}/>
                    )
                })
            }
            
        </div>
    )
}

export default OtherUser