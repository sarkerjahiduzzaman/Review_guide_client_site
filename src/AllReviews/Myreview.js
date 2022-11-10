import React, { useState } from 'react';

const Myreview = ({r,reviewd}) => {

    console.log('This is reviewd :',reviewd)
    const [review, setReview] = useState([]);
    console.log(r)

const x=[reviewd]
    const handleDelete =r=>{
        const agree= window.confirm(`Are you confirm to delete ${r.email}`)
 console.log(agree)
 if(agree)
 {
   // console.log(`deleting user id :  `,r._id)
  
   fetch(`http://localhost:5000/allreviews/${r._id}`,{
    method:'DELETE'
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.deletedCount>0){
        alert('User deleted successfully')
        const reamingingUsers=x.filter(rr=>rr._id!==r._id)
        setReview(reamingingUsers)
    }
    console.log(data)})

 }

    }
    return (
        
 


    <tbody>
     
      <tr>
     {/* <th>{}</th> */}
     <td>{r.email}</td>
    <td>{r.message}</td>
    <td><button className='text-red-600' onClick={()=>handleDelete(r)}>
                        Delete
                    </button></td>
      
      </tr>
  

     
      </tbody>
  
    );
};

export default Myreview;