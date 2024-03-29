import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputCahnge = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
        setCategories(cats => [inputValue,...cats]);
        setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputCahnge}  />
      </form>
    </>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };

export default AddCategory;
