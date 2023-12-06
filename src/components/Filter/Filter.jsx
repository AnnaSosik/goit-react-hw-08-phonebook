import { Div, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'contacts/selectors';
import { changeFilter } from 'filter/filterSlice';

// Contact filter component
const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  // Filter value change handler
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Div>
  );
};

export default Filter;
