import React from 'react';
import { TextField, Button } from '@material-ui/core';

const FilterBar = ({ onFilter }) => {
  const [filter, setFilter] = React.useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = () => {
    onFilter(filter);
  };

  return (
    <div>
      <TextField
        label="Filter"
        value={filter}
        onChange={handleFilterChange}
      />
      <Button onClick={handleFilterSubmit}>Filter</Button>
    </div>
  );
};

export default FilterBar;
