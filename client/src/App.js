import React, { useEffect, useState } from 'react';
import { createPost, deletePost, fetchPosts, updatePost } from './api/postsApi';
import CreateOrUpdatePost from './components/CreateOrUpdatePost';
import DisplayPosts from './components/DisplayPosts';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', description: '', author: '' });
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleCreatePost = async () => {
    try {
      await createPost(newPost);
      setNewPost({ title: '', description: '', author: '' });
      setPosts(await fetchPosts());
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setNewPost({
      title: post.title,
      description: post.description,
      author: post.author,
    });
  };

  const handleUpdatePost = async () => {
    try {
      await updatePost(editingPost._id, newPost);
      setEditingPost(null);
      setNewPost({ title: '', description: '', author: '' });
      setPosts(await fetchPosts());
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(await fetchPosts());
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-8'>My Blog App</h1>
      <CreateOrUpdatePost
        newPost={newPost}
        editingPost={editingPost}
        handleInputChange={handleInputChange}
        handleCreatePost={handleCreatePost}
        handleUpdatePost={handleUpdatePost}
      />
      <DisplayPosts
        posts={posts}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
      />
    </div>
  );
};
