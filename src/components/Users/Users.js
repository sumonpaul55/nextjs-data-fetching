"use client"
import React, { useEffect, useState } from 'react';
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Total Users {users.length}</h2>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    users?.map((items, idx) => {
                        return <div key={idx} className='border p-10 bg-slate-600 rounded-xl text-white'>
                            <h2 className='font-bold text-2xl my-2'>Name: {items?.name}</h2>
                            <h2>Email: {items?.email}</h2>
                            <h2>Phone: {items?.phone}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Users;