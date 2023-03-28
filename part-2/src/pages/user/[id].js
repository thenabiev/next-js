import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserComp = ({data}) => {
  const router=useRouter();
  const [user, setUser] = useState();
  // const {id}=router.query;
  // useEffect(()=>{
  //   const getData=async()=>{
  //        try{
  //           const res=await fetch('https://jsonplaceholder.typicode.com/users');
  //           const data=await res.json();
  //           setUser(data && data.find(u=>u.id===Number(id)));
  //           console.log(user);

  //        }catch(err){
  //           console.log(err);
  //        }
  //   };
  //   getData()
  // },[id])
  return (
    <div>
        <p>Single User</p>
        {
            data && <>
                <p>Full name : {data.name}</p>
                <p>Username : {data.username}</p>
                <p>Phone : {data.phone}</p>
                <p>Email : {data.email}</p>

            </>
        }
        <p onClick={()=>router.back()}>Back</p>
    </div>
  )
}

export default UserComp;

export const getServerSideProps=async (context)=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const data=await res.json();
  console.log(context);
  return {
    props :{
      data
    }
  }
}