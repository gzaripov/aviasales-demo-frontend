import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Direction from './Direction';
import CheckGroup from './CheckGroup';
import Checkbox from './Checkbox';

const Transfer = styled.h4`
  margin: 10px 0;
  padding: 0 16px;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-align: left;
`;

const TransferAirport = styled(Filter)`
  padding: 0 0 12px 0;
`;

const tranferLiterals = [
  'Первая пересадка',
  'Вторая пересадка',
  'Третья пересадка',
  'Четвертая пересадка',
  'Пятая пересадка',
];

const DirectionStyled = styled(Direction)`
  padding: 0 16px;
  margin: 10px 0;
`;

export default class extends React.Component {
  static defaultProps = {
    withoutAirportChange: false,
    dirty: false,
    onChange: () => {},
    onClear: () => {},
  };

  static propTypes = {
    withoutAirportChange: PropTypes.bool,
    origin: PropTypes.shape({
      city: PropTypes.string.isRequired,
      transfers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        iata: PropTypes.string.isRequired,
      }))),
    }).isRequired,
    dest: PropTypes.shape({
      city: PropTypes.string.isRequired,
      transfers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        iata: PropTypes.string.isRequired,
      }))),
    }).isRequired,
    dirty: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  };

  onChange = path => (value) => {
    this.props.onChange(path, value);
  };

  render() {
    const {
      withoutAirportChange, origin, dest, dirty, onClear,
    } = this.props;
    return (
      <TransferAirport title="Аэропорт пересадки" dirty={dirty} onClear={onClear}>
        <Checkbox
          label="Несколько авиакомпаний"
          checked={withoutAirportChange}
          onChange={this.onChange('withoutAirportChange')}
        />

        <DirectionStyled from={origin.city} to={dest.city} />
        {origin.transfers.map((transfer, index) => (
          <div>
            <Transfer>{tranferLiterals[index]}</Transfer>
            <CheckGroup
              checklist={transfer}
              onChange={this.onChange(`origin.transfers[${index}]`)}
            />
          </div>
        ))}

        <DirectionStyled from={dest.city} to={origin.city} />
        {dest.transfers.map((transfer, index) => (
          <div>
            <Transfer>{tranferLiterals[index]}</Transfer>
            <CheckGroup
              checklist={transfer}
              onChange={this.onChange(`dest.transfers.[${index}]`)}
            />
          </div>
        ))}
      </TransferAirport>
    );
  }
}
