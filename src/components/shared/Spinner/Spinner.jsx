import spinner from '../../../assets/spinner.gif';
import './Spinner.scss';

const Spinner = () => {
  return <img className='spinner' src={spinner} alt='Loading...' />;
};

export default Spinner;
