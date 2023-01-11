import axios from 'axios';
import { loginStart, loginFailure, loginSuccess } from './authSlice';

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
      console.log(1);
    try {
        const res = await axios.post('http://localhost:5000/auth/login', user);
        console.log(res);
        dispatch(loginSuccess(res.data));
        // console.log(2);
    } catch (e) {
        dispatch(loginFailure());
    }
};
