import React from 'react';

const Book = ({book}) => {
    const {bookName,image,author,tags} = book


    return (
        <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className='bg-gray-300 py-8 rounded-xl'>
          <img
            src={image}
            className='h-[166px]'
            alt={author}/>
        </figure>
        <div className="card-body">
          <div className='flex justify-center gap-4'>
            {
              tags.map(tag=> <button className="btn btn-sm bg-green-300 rounded-xl">{tag}</button>)
            }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default Book;