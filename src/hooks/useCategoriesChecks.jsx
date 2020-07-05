import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { CustomCheckbox } from '../components/ui/Fields';


const useCategoriesChecks = (categories) => {
    
    const [ categoriesSelected, setCategoriesSelected ] = useState([]);

    const handleChangeCheck = (e, categoryId) => {

        if(e.target.checked) {
            setCategoriesSelected(
                categories.map(category => {
                    if(category.id === categoryId) {
                        category.check = true;
                        return category;
                    }
                    return category;
                })
            );
            return;
        }

        setCategoriesSelected(
            categories.map(category => {
                if(category.id === categoryId) {
                    category.check = false;
                    return category;
                }
                return category;
            })
        );
    }



    const ListCategories = () => {

        return (
            <div>
                {
                categories.map(category => (
                    <InputGroup key={category.id} className="ml-3">
                        <CustomCheckbox
                            checked={category.check}
                            onChange={(e) => handleChangeCheck(e, category.id)}
                            type="checkbox"
                            className="mr-2 mb-3"
                        />
                        <span>{category.name}</span>
                    </InputGroup>
                ))
                }
            </div>
        );
    }

    return [ ListCategories, categories ];
}
 
export default useCategoriesChecks;