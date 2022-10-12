import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Adam Youngers",
            image: "https://pbs.twimg.com/profile_images/1275488441/profile-pic_400x400.jpg",
            places: 5
        }
    ];

    return <UsersList items={USERS} />
}

export default Users;