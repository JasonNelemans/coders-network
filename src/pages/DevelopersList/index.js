import React, {useEffect} from 'react';
import {fetchDevelopersThunk} from '../../store/developers/actions'
import {useDispatch, useSelector} from 'react-redux';
import {selectDevelopers} from '../../store/developers/selectors';
import Container from "react-bootstrap/Container";
import Developer from '../../components/Developer';
import Button from 'react-bootstrap/Button'

export default function DevelopersList() {
  const dispatch = useDispatch();
  const developers = useSelector(selectDevelopers);

  useEffect(() => {
    dispatch(fetchDevelopersThunk());
  }, 
  [dispatch])
  
  const handleClick = () => {
    dispatch(fetchDevelopersThunk());
  } 

  return (
    <Container>
      {developers.map(developer => {
        return <Developer 
                  name={developer.name} 
                  key={developer.id}
                  github={developer.github_username}
                  id={developer.id}
                />;
      })}
      <Button onClick={handleClick}>Load more developers</Button>
    </Container>
  );
}
