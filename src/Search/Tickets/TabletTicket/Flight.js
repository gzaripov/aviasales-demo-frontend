import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import media from '../../../common/media';
import Duration from '../../../common/ui/Duration';
import planeTakeoff from './img/plane-takeoff.svg';
import planeLanfing from './img/plane-landing.svg';
import pin from './img/pin.svg';

const Origin = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  text-align: left;
`;

const Destination = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  margin-left: auto;
`;

const Time = styled.time`
  display: flex;
  line-height: 40px;
  font-size: 28px;
  color: #323333;
`;

const TimeIcon = styled.img`
  margin-right: 8px;
`;

const City = styled.p`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const FlightDate = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const Route = styled.div`
  display: none;
  flex: 1;
  padding: 0 12px;
  flex-direction: column;

  ${media.md`
    display: flex;
  `};
`;

const RouteRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RouteDuration = styled(RouteRow)`
  margin-bottom: 12px;
`;

const RoutePath = styled(RouteRow)`
  margin-bottom: 12px;
`;

const RouteIatas = styled(RouteRow)`
  margin-top: auto;
`;

const FlightDuration = styled(Duration)`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const RoutePoint = styled.div`
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px;
`;

const Path = styled.div`
  height: 1px;
  flex: 1;
  background-color: #a0b0b9;
  margin: 0 2px;
`;

const Iata = styled.span`
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const FlightStyled = styled.div`
  display: flex;
  padding: 12px 0;
`;

function formatTime(timestamp) {
  return format(timestamp * 1000, 'HH:mm', {
    locale: ru,
  });
}

function formatDate(timestamp) {
  return format(timestamp * 1000, 'D MMM YYYY, dd', {
    locale: ru,
  });
}

const Flight = props => (
  <FlightStyled>
    <Origin>
      <Time>
        <TimeIcon src={pin} alt="Pin icon" />
        <span>{formatTime(props.data.origin.timestamp)}</span>
      </Time>
      <City>{props.data.origin.city}</City>
      <FlightDate>{formatDate(props.data.origin.timestamp)}</FlightDate>
    </Origin>
    <Route>
      <RouteDuration>
        <img src={planeTakeoff} alt="Plane icon" />
        <FlightDuration duration={props.data.duration} />
        <img src={planeLanfing} alt="Plane icon" />
      </RouteDuration>
      <RoutePath>
        <RoutePoint />
        <Path />
        <RoutePoint />
      </RoutePath>
      <RouteIatas>
        <Iata>{props.data.origin.iata}</Iata>
        <Iata>{props.data.dest.iata}</Iata>
      </RouteIatas>
    </Route>
    <Destination>
      <Time>
        <span>{formatTime(props.data.dest.timestamp)}</span>
      </Time>
      <City>{props.data.dest.city}</City>
      <FlightDate>{formatDate(props.data.dest.timestamp)}</FlightDate>
    </Destination>
  </FlightStyled>
);

Flight.propTypes = {
  data: PropTypes.shape({
    origin: PropTypes.shape({
      timestamp: PropTypes.number,
      city: PropTypes.string,
      iata: PropTypes.string,
    }),
    dest: PropTypes.shape({
      timestamp: PropTypes.number,
      city: PropTypes.string,
      iata: PropTypes.string,
    }),
    duration: PropTypes.number,
  }).isRequired,
};

export default Flight;
