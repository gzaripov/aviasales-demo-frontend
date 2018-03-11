import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import CheckGroup from './CheckGroup';

const Baggage = styled(Filter)`
  padding: 0 0 16px 0;
`;

export default class extends React.Component {
  static defaultProps = {
    checks: [],
    onChange: () => {},
  };

  static propTypes = {
    checks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      price: PropTypes.number,
    })),
    onChange: PropTypes.func,
  };

  onChange = (checklist) => {
    this.props.onChange('baggage.checks', checklist);
  };

  render() {
    const { checks } = this.props;
    return (
      <Baggage title="Багаж">
        <CheckGroup checklist={checks} onChange={this.onChange} />
      </Baggage>
    );
  }
}
