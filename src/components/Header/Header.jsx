import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({ title }) => (
  <header className='header'>
    <Link to='/react-js/rate-our-service/'>
      <h1 className='header__title'>{title}</h1>
    </Link>
  </header>
);

export default Header;
