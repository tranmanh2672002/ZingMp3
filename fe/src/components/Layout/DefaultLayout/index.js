import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import SideBar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <SideBar />
            </div>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <Header />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
