import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel htmlFor="">
      Find contacs by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

export default Filter;
