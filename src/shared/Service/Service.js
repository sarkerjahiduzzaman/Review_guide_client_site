import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, price, description, title, _id } = service;
    return (
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
                        <button className="btn btn-primary"><Link to={`/review/${_id}`}>Review</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;