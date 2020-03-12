import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsThunk } from "../../store/posts/actions";
import { selectPosts } from "../../store/posts/selectors";
import Post from "../../components/Post";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(
    function() {
      dispatch(fetchPostsThunk());
    },
    [dispatch]
  );

  const handleClick = () => {
    dispatch(fetchPostsThunk());
  }

  return (
    <Container>
      {posts.map(post => {
        return <Post 
          title={post.title} 
          key={post.id}
          id={post.id}
        />;
      })}
      <Button onClick={handleClick}>I want to read more posts</Button>
    </Container>
  );
}
