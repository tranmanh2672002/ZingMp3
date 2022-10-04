import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { BiSearch } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { FiUpload, FiUser } from 'react-icons/fi';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                visible={false}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        sadsads
                    </div>
                )}
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
                <button className={cx('header-btn')}>
                    <FiUpload className={cx('btn-icon')} />
                </button>
                <button className={cx('header-btn')}>
                    <IoMdSettings className={cx('btn-icon')} />
                </button>
                <button className={cx('header-btn')}>
                    <FiUser className={cx('btn-icon')} />
                </button>
            </div>
        </div>
    );
}

export default Header;
