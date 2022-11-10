import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Authprovider/Authprovider';

const TotalReviews = () => {

    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect( () =>{
        fetch(`http://localhost:5000/alllreviews`)
        .then(res => res.json())
        .then(data =>setReview(data))
    }, [])

    return (
        <div>
           {
                    review.map(service => <Service
                        key={service.service_id}
                        service={service}
                    ></Service>)
                }
        </div>
    );
};

export default TotalReviews;