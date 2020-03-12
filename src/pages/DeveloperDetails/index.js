import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";
import { selectDeveloperDetails } from "../../store/developerDetails/selectors";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function DeveloperDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDeveloperById(id));
  }, [dispatch, id]);

  const developer = useSelector(selectDeveloperDetails);

  if (!developer.name) return <h1>Loading</h1>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <Card.Text>{developer.intro}</Card.Text>
        <Card.Title>Posts</Card.Title>
        <ListGroup>
          {developer.posts.map(post => {
            return (
              <ListGroup.Item key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}