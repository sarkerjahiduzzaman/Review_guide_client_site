import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Reviews = () => {
    const { _id, title, img, description, price } = useLoaderData();
    const { user} = useLoaderData();

    const handelComment = event => {
        event.preventDefault();
        const form = event.target;
        
        const message = form.message.value;
        const email = form.email.value;

        const reviews = {
            service: _id,
            message,
            email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Posted')
                    form.reset();
                }
            })
            .catch(err => console.error(err));

            
    }
 
    
    return (
        <div className=' mt-10 mb-10'>
            <div className='flex justify-center'>
                <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
                    <figure><img className=' h-60 w-full' src={img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-rose-700">{title}</h2>
                        <div>
                            {description.length > 100 ?
                                (
                                    <div>
                                        {`${description.substring(0, 100)}...`}<Link href="#">Read more</Link>
                                    </div>
                                ) :
                                <p>{description}</p>
                            }
                        </div>
                        <div className="card-actions justify-between">
                            <h2 className="card-title text-rose-600">{price}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handelComment} className='mt-5'>
                <h3 className='text-xl font-semibold'>Write your review:</h3>
                <input name="email" type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-secondary mt-2 w-full max-w-xs"/>
                <br />
                <input name="message" type="text" placeholder="Comment" className="input input-bordered input-secondary mt-3 w-full max-w-xs" required />
                <div className="form-control mt-2 flex items-center">
                    <input className="btn btn-primary bg-rose-600 w-1/12" type="submit" value="Post" />
                </div>
            </form>
        </div>
    );
};

export default Reviews;