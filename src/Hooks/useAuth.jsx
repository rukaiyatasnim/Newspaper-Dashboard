// src/Hooks/useAuth.jsx

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
