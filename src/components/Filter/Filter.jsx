import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { Wrapper, Input, Label } from './Filter.styled';

// Contact filter component
export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  // Filter value change handler
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
};
