import React from 'react';

const DisplayPosts = ({ posts, handleEditPost, handleDeletePost }) => {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <h3 className='text-2xl font-bold mb-4'>All Posts</h3>
      {posts.map((post) => (
        <div key={post._id} className='bg-white p-6 rounded-lg shadow-md border border-gray-300'>
          <strong className='text-lg mb-2 block font-semibold'>{post.title}</strong>
          <p className='mb-2 text-gray-600'>{post.description}</p>
          <p className='text-gray-700'>Author: {post.author}</p>
          <div className='flex justify-end space-x-2 mt-4'>
            <button
              className='px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
              onClick={() => handleEditPost(post)}
            >
              Edit
            </button>
            <button
              className='px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red'
              onClick={() => handleDeletePost(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayPosts;
