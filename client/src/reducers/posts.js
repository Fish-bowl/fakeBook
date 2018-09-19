import axios from 'axios'
const POSTS = 'POSTS'
const APP_POST = 'APP_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'

export const getPosts = () => {
  return (dispatch) => {
    axios.get('/api/apps')
      .then( res => dispatch({ type: POSTS, posts: res.data }))
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', {post} )
      .then( res => dispatch({ type: ADD_POST, post: res.data}))
  }
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put('/api/posts', { post })
      .then(res => dispatch({ type: UPDATE_POST, post: res.data }))
  }
}

export const deletePost = (post) => {
  return (dispatch) => {
    axios.delete('/api/posts', { post })
      .then(res => dispatch({ type: DELETE_POST, post: res.data }))
  }
}

export default (state = [], action ) => {
  switch(action.type) {
    case POSTS:
      return action.posts
    case ADD_POST:
      return [action.post, ...state]
    case UPDATE_APP:
      return state.map( p => {
        if (p.id === action.post.id)
          return action.post 
        return p 
      })
    case DELETE_APP:
      return state.filter( p => p.id !== action.id )
    default: 
      return state;
  }
}