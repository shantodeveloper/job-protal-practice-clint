import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('api response errorstatus', error.status);
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              navigate('/login');
            })
            .catch(err => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
