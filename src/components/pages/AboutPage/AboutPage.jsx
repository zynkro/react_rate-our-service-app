import Card from '../../shared/Card/Card';
import { Link } from 'react-router-dom';

import './AboutPage.scss';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>

        <p>
          This is a simple React application that could be used to leave a
          feedback (review) for a service (or product).
        </p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
