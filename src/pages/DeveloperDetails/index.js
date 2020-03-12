import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";
import { selectDeveloperDetails } from "../../store/developerDetails/selectors";

export default function DeveloperDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDeveloperById(id));
  }, [dispatch, id]);

  const developer = useSelector(selectDeveloperDetails);
  console.log('developer: ', developer)

  return (
    <div>
      Hello
    </div>
  )
}