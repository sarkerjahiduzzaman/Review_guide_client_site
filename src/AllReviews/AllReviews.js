import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../contexts/Authprovider/Authprovider';
import Myreview from './Myreview';

const AllReviews = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect( () =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>setReview(data))
    }, [user?.email])
 console.log(user)

 console.log('review :',review)
 console.log(typeof(review))
    
    return (
        <div>
            <h2>you have:{review.length}</h2>
            <div>
              <div className="overflow-x-auto"></div>
            <table className="table w-full">
            <thead>
      <tr>
        {/* <th>Serial</th> */}
        <th>Eamil</th>
    
        <th>Comment</th>
      </tr>
    </thead>
          {
            review.map(r=><Myreview
            key={r._id}
            r={r}
            reviewd={review}>
               
            
                
            </Myreview>
              
            )
          }
         
       
  </table>
</div>
        </div>
    );
};

export default AllReviews;