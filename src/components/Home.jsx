import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            {user && <span className='mt-12   text-2xl font-semibold text-neutral-600'>{user.displayName}</span>}
        </div>
    );
};

export default Home;