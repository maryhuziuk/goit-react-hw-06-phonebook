import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from '../../redux/redusers/filter.js';
import { getContactsFilter } from '../../redux/selector.js';
import { Section} from '../ContactsList/ContactsList.styled.js';


import { Wrapper, LabelFilter,InputFilter} from '../Filter/Filter.styled.js';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Section>
    <Wrapper>
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
        </LabelFilter>
      </Wrapper>
      </Section>
  );
};