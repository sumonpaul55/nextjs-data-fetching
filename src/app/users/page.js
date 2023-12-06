import Users from '@/components/Users/Users';
import React from 'react';
import styles from "./Users.module.css"
const UsersPage = () => {
    return (
        <div>
            <h1 className={styles.pagetitle}>All Users</h1>
            <Users></Users>
        </div>
    );
};

export default UsersPage;