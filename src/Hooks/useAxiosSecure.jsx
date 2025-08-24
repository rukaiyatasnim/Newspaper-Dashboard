import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: `https://newspaper-server-side-rosy.vercel.app/`
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;