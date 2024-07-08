// src/components/Categories.js
import React from 'react';

const Categories = ({ categories, selectCategory }) => {
    return (
        <div style={styles.categories}>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => selectCategory(category)}
                    style={styles.categoryButton}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

const styles = {
    categories: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 0'
    },
    categoryButton: {
        padding: '10px 20px',
        border: '1px solid #ddd',
        cursor: 'pointer'
    }
};

export default Categories;
