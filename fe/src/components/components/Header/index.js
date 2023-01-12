import { BiSearch } from 'react-icons/bi';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState } from 'react';
import ModalLogin from '../ModalLogin';
import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '~/redux/authSlice';
import { logoutUser } from '~/redux/apiRequests';
import { createAxios } from '~/utils/createInstance';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const cx = classNames.bind(styles);

function Header() {
    const [openModalLogin, setOpenModalLogin] = useState(false);

    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    // let axiosJwt = axios.create();
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);

    const handleLogout = () => {
        logoutUser(user.accessToken, dispatch, axiosJWT);
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                visible={false}
                render={(attrs) => <div className={cx('search-results')} tabIndex="-1" {...attrs}></div>}
            >
                <div className={cx('search')}>
                    <BiSearch className={cx('search-icon')} />
                    <input
                        type="text"
                        spellCheck={false}
                        className={cx('input')}
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    />
                </div>
            </Tippy>

            <div className={cx('header-right')}>
                <IconButton
                    sx={{marginLeft: '14px', backgroundColor: '#2f2739 !important', color: '#eee !important' }}
                    aria-label="delete"
                    color="secondary"
                >
                    <InvertColorsIcon />
                </IconButton>
                <IconButton
                    sx={{marginLeft: '14px', backgroundColor: '#2f2739 !important', color: '#eee !important' }}
                    color="secondary"
                >
                    <SettingsIcon />
                </IconButton>
                {user ? (
                    <>
                        <IconButton
                            sx={{marginLeft: '14px', backgroundColor: '#2f2739 !important', color: '#eee !important' }}
                            aria-label="delete"
                            color="secondary"
                        >
                            <PersonIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleLogout}
                            sx={{marginLeft: '14px', backgroundColor: '#2f2739 !important', color: '#eee !important' }}
                            aria-label="delete"
                            color="secondary"
                        >
                            <LogoutIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <IconButton
                            onClick={() => setOpenModalLogin(true)}
                            sx={{marginLeft: '14px', backgroundColor: '#2f2739 !important', color: '#eee !important' }}
                            aria-label="delete"
                            color="secondary"
                        >
                            <LoginIcon />
                        </IconButton>
                        <ModalLogin openModalLogin={openModalLogin} setOpenModalLogin={setOpenModalLogin} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
