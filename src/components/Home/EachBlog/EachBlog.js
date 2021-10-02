import React from 'react';
import './EachBlog.css';

const EachBlog = ({blogData}) => {
    return (
        <section className="blog-container">
            <div className="">
                <div className="d-flex">
                <div className="mx-3">
                    <img src={blogData.image} alt="blog"/>
                </div>
                <div className="mx-4">
                    <h4>{blogData.name}</h4>
                    <p>{blogData.data}</p>
                </div>
                </div>
                <div>
                    <div className="mt-5 mx-2">
                        <h4>{blogData.headline}</h4>
                        <p className="mt-3">{blogData.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EachBlog;