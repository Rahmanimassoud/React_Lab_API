import React, { useState } from "react";

const Forms = (props) => {
    const [formData, setFormData] = useState({searchterm: "",})

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.moviesearch(formData.searchterm);
    };





    return (
        <div>  
            <form onSubmit={handleSubmit} action="">
                <input name="searchterm" onChange={handleChange} value={formData.searchterm} type="text"/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
};

export default Forms;
