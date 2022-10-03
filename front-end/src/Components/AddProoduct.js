import React from 'react';

const AddProoduct = () => {
    // var useState = React.useState('');
    const [name, setname] =  React.useState('');
    const [price, setprice] =  React.useState('');
    const [category, setcategory] =  React.useState('');
    const [company, setcompany] =  React.useState('');

    const AddProoduct = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
        method:'post',
        body:JSON.stringify({name, price, category, company, userId}),
        headers:{
            'Content-Type': 'application/json'
        }
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <>
        <h1>Add New Prooduct</h1>
        <div className='singup'>
            <input className='w-100' type="text" value={name} onChange={(e) =>{setname(e.target.value)}}  placeholder="Enter Product Name" />
            
            <input className='w-100' type="text" value={price} onChange={(e) =>{setprice(e.target.value)}} placeholder="Enter Product Price" />
            
            <input className='w-100' type="text" value={category} onChange={(e) =>{setcategory(e.target.value)}} placeholder="Enter Product Category" />

            <input className='w-100' type="text" value={company} onChange={(e) =>{setcompany(e.target.value)}} placeholder="Enter Product Company" />
            
            <button className='w-100' type="submit" onClick={AddProoduct}>Submit</button>
        </div>
        </>
    );
}

export default AddProoduct;