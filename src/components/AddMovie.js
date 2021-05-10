import React from 'react';

const AddMovie = () => {

    return (
        <div className="addMovie">
            <form onSubmit={() =>alert('Movie Added!')}>
                <label>Name</label>
                <input type="text" required/>
                <label>Genre</label>
                <input type="text" required/>
                <label>Year</label>
                <input type="text" placeholder="(optional)"/>
                <button type="submit">Add movie</button>
            </form>
        </div>
    );

}

export default AddMovie;