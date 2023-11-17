import axios from 'axios';

const API_BASE_URL = 'https://wicked-fatigues-bear.cyclic.app/v1';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (newPost) => {
  try {
    await axios.post(`${API_BASE_URL}/posts`, newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const updatePost = async (postId, updatedPost) => {
  try {
    await axios.put(`${API_BASE_URL}/posts/${postId}`, updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_BASE_URL}/posts/${postId}`);
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
