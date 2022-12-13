import Card from '../../shared/Card/Card';
import { Link } from 'react-router-dom';

import './AboutPage.scss';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>

        <p>
          This is a React application that allows website visitors rate
          company's product or service, and leave a short review description.
        </p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
