import Logo from '~/assets/images/Logo.png';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import Search from '~/layouts/components/Search';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import Image from '~/components/Image';

import Button from '~/components/Button';
// import { CartIcon } from '~/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={Logo} alt="Logo" className={cx('logo')} />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Cart" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <CartIcon /> */}
                                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {currentUser ? (
                        <Image
                            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=CsjjQCjeuucAX_xaS06&_nc_ht=scontent.fhan14-3.fna&oh=00_AfA1wLH9A1N_E8abxS483cYcplzg0urjjR3bKH0JFKJ7xg&oe=6461D778"
                            className={cx('user-avatar')}
                            alt="Nguyen Van a"
                            // fallback="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/333045181_601317735207298_4556693562166128126_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uAgQYuClCc4AX93G3Gj&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAmRysF2RFMUyQpAy0qelJnpqQQKxQeMTfOnndRcxaDkg&oe=64175347"
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
