const SelectRating = ({ rating, setRating }) => {
  const handleChange = (e) => {
    setRating(Number(e.currentTarget.value));
  };

  return (
    <ul className='feedback-form__rating-select-list'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={rating === i + 1}
          />

          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default SelectRating;
