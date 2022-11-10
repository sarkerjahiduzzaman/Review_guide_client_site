import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {

    

    const handelNewService = event => {
        event.preventDefault();
        const form = event.target;
        
        const title = form.title.value;
        const price = form.price.value;
        const img = form.url.value;
        const description = form.description.value;

        const services = {
            title,
            price,
            img,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
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
        <div>
            <div className="hero min-h-screen bg-base-200">
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-purple-700">Add Service !!</h1>
                    <form onSubmit={handelNewService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='url' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-rose-600" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    );
};

export default AddService;