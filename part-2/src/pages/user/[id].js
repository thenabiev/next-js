import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserComp = () => {
  const router=useRouter();
  const [user, setUser] = useState();
  const {id}=router.query;
  useEffect(()=>{
    const getData=async()=>{
         try{
            const res=await fetch('https://jsonplaceholder.typicode.com/users');
            const data=await res.json();
            setUser(data && data.find(u=>u.id===Number(id)));
            console.log(user);

         }catch(err){
            console.log(err);
         }
    };
    getData()
  },[id])
  return (
    <div>
        <p>Single User</p>
        {
            user && <>
                <p>Full name : {user.name}</p>
                <p>Username : {user.username}</p>
                <p>Phone : {user.phone}</p>
                <p>Email : {user.email}</p>

            </>
        }
        <p onClick={()=>router.back()}>Back</p>
    </div>
  )
}

export default UserComp