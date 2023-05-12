import React, {useState} from 'react';

const Token = () => {
    const [token, setToken] = useState('');
    setToken(localStorage.getItem('token'))

};

export default token;