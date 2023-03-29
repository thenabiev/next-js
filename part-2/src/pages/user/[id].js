import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UserComp = ({data}) => {
  const router=useRouter();
  const [user, setUser] = useState();
  console.log(router);
  
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

// Server side props
// export const getServerSideProps=async (context)=>{
//   const res=await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//   const data=await res.json();
//   console.log(context);
//   return {
//     props :{
//       data
//     }
//   }
// }



// Static paths

export const getStaticPaths= async ()=>{ 
  const res=await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const datas=await res.json();
  const ids = datas.map((user)=>user.id);
  const paths=ids.map((id)=>({params:{id: id.toString()}}));
  console.log(paths);
  return{
    
      paths,
      fallback: false
    
  }
}


// Static props
export const getStaticProps= async (context)=>{ 
  const res=await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const data=await res.json();
  return{
    props :{
      data
    }
  }
}
