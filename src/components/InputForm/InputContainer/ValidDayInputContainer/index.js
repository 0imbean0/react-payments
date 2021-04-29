import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const ValidDayInputContainer = ({ validDay, isValid, handleChange, handleBlur }) => {
  const { month, year } = validDay;
  return (
    <Styled.Container onBlur={handleBlur} isValid={isValid}>
      <Styled.Input name={'month'} value={month} onChange={handleChange} placeholder={'MM'} />
      <span>/</span>
      <Styled.Input name={'year'} value={year} onChange={handleChange} placeholder={'YY'} />
    </Styled.Container>
  );
};

ValidDayInputContainer.propTypes = {
  validDay: PropTypes.object,
};

ValidDayInputContainer.defaultProps = {
  validDay: { month: '04', year: '21' },
};
