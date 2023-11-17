import React from 'react';

const CreateOrUpdatePost = ({
  newPost,
  editingPost,
  handleInputChange,
  handleCreatePost,
  handleUpdatePost,
}) => {
  return (
    <div className='max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md'>
      <h3 className='text-2xl font-bold mb-4'>{editingPost ? 'Edit Post' : 'Create New Post'}</h3>
      <form className='grid grid-cols-1 gap-6'>
        <label className='block text-sm font-medium text-gray-600'>Title:</label>
        <input
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          type='text'
          name='title'
          value={newPost.title}
          onChange={handleInputChange}
        />

        <label className='block text-sm font-medium text-gray-600'>Description:</label>
        <textarea
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          name='description'
          value={newPost.description}
          onChange={handleInputChange}
        />

        <label className='block text-sm font-medium text-gray-600'>Author:</label>
        <input
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          type='text'
          name='author'
          value={newPost.author}
          onChange={handleInputChange}
        />

        <div className='flex justify-end'>
          {editingPost ? (
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
              onClick={handleUpdatePost}
            >
              Update Post
            </button>
          ) : (
            <button
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green'
              onClick={handleCreatePost}
            >
              Create Post
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateOrUpdatePost;
