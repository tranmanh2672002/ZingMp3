import axios from 'axios';
import { loginStart, loginFailure, loginSuccess, logoutStart, logoutFailure, logoutSuccess } from './authSlice';

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:5000/auth/login', user);
        console.log(res);
        dispatch(loginSuccess(res.data));
        // console.log(2);
    } catch (e) {
        dispatch(loginFailure());
    }
};

export const logoutUser = async (token, dispatch, axiosJwt) => {
    dispatch(logoutStart());
    console.log('logout started');
    console.log(token);
    try {
      const res = await axiosJwt.post(
        "http://localhost:5000/auth/logout",
        {
            withCredentials: true
        },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(res);
      dispatch(logoutSuccess());
    } catch (e) {
      dispatch(logoutFailure());
    }
  };
