import React, {useEffect} from 'react';
import {fetchDevelopersThunk} from '../../store/developers/actions'
import {useDispatch, useSelector} from 'react-redux';
import {selectDevelopers} from '../../store/developers/selectors';
import Container from "react-bootstrap/Container";
import Developer from '../../components/Developer';

export default function DevelopersList() {
  const dispatch = useDispatch();
  const developers = useSelector(selectDevelopers);

  useEffect(() => {
    dispatch(fetchDevelopersThunk());
  }, 
  [dispatch])
  
  return (
    <Container>
      {developers.map(developer => {
        return <Developer 
                  name={developer.name} 
                  key={developer.id}
                  github={developer.github_username}
                />;
      })}
    </Container>
  );
}
