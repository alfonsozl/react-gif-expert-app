
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        inputValue.trim().length > 2 && setCategories( cat => [ inputValue, ...cat ] );
        setinputValue('');
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input
                type = 'text'
                placeholder = "Search something!"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
