import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { BsMusicNoteList, BsRecordCircle, BsPieChart, BsCardList } from 'react-icons/bs';
import { IoRadioOutline } from 'react-icons/io5';

const cx = classNames.bind(styles);

const navBar = [
    {
        id: '1',
        to: '/my-music',
        title: 'Cá Nhân',
        icon: <BsMusicNoteList />,
    },
    {
        id: '2',
        to: '/',
        title: 'Khám Phá',
        icon: <BsRecordCircle />,
    },
    {
        id: '3',
        to: '/zing-chart',
        title: '#zingchart',
        icon: <BsPieChart />,
    },
    {
        id: '4',
        to: '/radio',
        title: 'Radio',
        icon: <IoRadioOutline />,
    },
    {
        id: '5',
        to: '/follow',
        title: 'Theo Dõi',
        icon: <BsCardList />,
    },
];

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to="/" className={cx('logo-link')}>
                    <img
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                        alt="logo"
                        className={cx('logo-img')}
                    />
                </Link>
            </div>
            <div className="navbar">
                <ul className={cx('nav-list')}>
                    {navBar.map((item) => {
                        return (
                            <li key={item.id}>
                                <NavLink to={item.to} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                                    {item.icon}
                                    {item.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
