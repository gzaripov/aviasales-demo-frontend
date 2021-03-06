import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import media from '../../../common/media';
import Button from '../../../common/ui/Button';
import Logos from '../Logos';
import arrowDown from './img/arrowDown.svg';
import share from './img/share.svg';
import handbagIcon from './img/handbag.svg';
import unknownHandbag from './img/unknown-handbag.svg';
import suitcaseIcon from './img/suitcase.svg';
import noSuitcaseIcon from './img/no-suitcase.svg';
import unknownSuitcaseIcon from './img/unknown-suitcase.svg';
import Flight from './Flight';

const Agency = styled.p`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const SuggestionText = styled.span`
  line-height: 18px;
  font-size: 12px;
  color: #59bce5;
`;

const SuggestionAgency = styled(SuggestionText)``;

const SuggestionPrice = styled(SuggestionText)`
  font-weight: 500;
`;

const OtherSuggestions = styled(SuggestionText)`
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
`;

const Suggestions = styled.div`
  margin-top: 24px;
  padding: 0 24px;
`;

const TicketOpener = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #edf5f7;
  padding: 5px;
`;

const Suggestion = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Purchase = styled.div`
  border-right: 1px solid #dddddd;
`;

const BuyButton = styled(Button)`
  background: #ff6d00;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  margin: 8px 24px 8px 24px;
  padding: 8px 42px;
`;

const BuyButtonText = styled.p`
  font-weight: 500;
  line-height: 18px;
`;

const BuyButtonPrice = styled.p`
  line-height: 18px;
  margin-top: 2px;
`;

const JetInfo = styled.div`
  display: flex;
  align-items: center;
`;

const JetLogos = styled(Logos)`
  margin: 0 auto 0 6px;
`;

const Charter = styled.p`
  border: 1px solid #2196f3;
  border-radius: 15px;
  padding: 4px 11px;
  line-height: 18px;
  font-size: 10px;
  color: #23a9f6;
  margin-left: auto;
  margin-right: 14px;
  text-transform: uppercase;
`;

const Share = styled.img`
  margin-right: 10px;
`;

const TicketInfo = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 12px;
  flex: 1;
  flex-direction: column;
`;

const FlightInfoDivider = styled.div`
  flex: 1;
  margin: 0 16px;
  border-bottom: 1px dashed #dddddd;
`;

const Content = styled.div`
  display: none;

  ${media.sm`
    display: flex;
  `};
`;

const Bag = styled.span`
  position: relative;
  margin: 0 2px;
`;

const BagText = styled.span`
  position: absolute;
  top: 7px;
  left: 48%;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #9ab0b9;
`;

const UnknownBagText = styled(BagText)`
  opacity: 0.4;
`;

const Baggages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Baggage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BaggageIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaggageTab = styled(Button)`
  flex: 1;
  padding-top: 12px;
  background-color: ${props => (props.active ? '#fff' : '#F8FBFB')};
  border: ${props => (props.active ? 'none' : '1px solid #dddddd')};
  border-top: none;
`;

const PrimaryBaggageTab = styled(BaggageTab)`
  border-left: none;
`;

const AlternativeBaggageTab = styled(BaggageTab)`
  border-right: none;
`;

const Verdict = styled.p`
  color: #9ab0b9;
  line-height: 15px;
  font-size: 10px;
  text-align: center;
  padding: 6px 0;
`;

function renderBaggage({
  handbag, suitcase, verdict, noBaggage,
}) {
  return (
    <Baggage>
      <BaggageIcons>
        {handbag >= 0 ? (
          <Bag>
            <img src={handbagIcon} alt="Handbag icon" />
            <BagText>{handbag}</BagText>
          </Bag>
        ) : (
          <Bag>
            <img src={unknownHandbag} alt="Unknown handbag icon" />
            <UnknownBagText>?</UnknownBagText>
          </Bag>
        )}
        {suitcase >= 0 && (
          <Bag>
            <img src={suitcaseIcon} alt="Suitcase icon" />
            <BagText>{suitcase}</BagText>
          </Bag>
        )}
        {noBaggage ? (
          <Bag>
            <img src={noSuitcaseIcon} alt="Suitcase icon" />
          </Bag>
        ) : (
          !suitcase && (
            <Bag>
              <img src={unknownSuitcaseIcon} alt="Suitcase icon" />
              <UnknownBagText>?</UnknownBagText>
            </Bag>
          )
        )}
      </BaggageIcons>
      {verdict && <Verdict>{verdict}</Verdict>}
    </Baggage>
  );
}

renderBaggage.defaultProps = {
  handbag: 0,
  suitcase: 0,
  verdict: '',
  noBaggage: false,
};

renderBaggage.propTypes = {
  handbag: PropTypes.number,
  suitcase: PropTypes.number,
  verdict: PropTypes.string,
  noBaggage: PropTypes.bool,
};

const TicketsLeft = styled.p`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;
`;

const TabletTicket = props => (
  <Content>
    <Purchase>
      <Baggages>
        {props.data.baggage.primary && (
          <PrimaryBaggageTab active>{renderBaggage(props.data.baggage.primary)}</PrimaryBaggageTab>
        )}
        {props.data.baggage.alternative && (
          <AlternativeBaggageTab>
            {renderBaggage(props.data.baggage.alternative)}
          </AlternativeBaggageTab>
        )}
      </Baggages>
      {props.data.ticketsLeft >= 1 && (
        <TicketsLeft>Осталось {props.data.ticketsLeft} билета</TicketsLeft>
      )}
      <BuyButton>
        <BuyButtonText>Купить</BuyButtonText>
        <BuyButtonPrice>
          за{' '}
          <FormattedNumber
            value={props.data.price}
            style={['currency']}
            currency="RUB"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />{' '}
          ₽
        </BuyButtonPrice>
      </BuyButton>
      <Agency>{props.data.agency}</Agency>
      {props.data.suggestions &&
        props.data.suggestions.length > 0 && (
          <Suggestions>
            {props.data.suggestions.slice(0, 2).map(suggestion => (
              <Suggestion key={suggestion.id}>
                <SuggestionAgency>{suggestion.agency}</SuggestionAgency>
                <SuggestionPrice>{suggestion.price}</SuggestionPrice>
              </Suggestion>
            ))}
            {props.data.suggestions.length > 2 && (
              <OtherSuggestions>
                + Еще {props.data.suggestions.length - 2} предложения
              </OtherSuggestions>
            )}
          </Suggestions>
        )}
    </Purchase>
    <TicketInfo>
      <JetInfo>
        <JetLogos logos={props.data.logos} />
        {props.data.isCharter && <Charter>чартер</Charter>}
        <Share src={share} alt="Share icon" />
      </JetInfo>
      <Flight data={props.data.flight.depart} />
      <FlightInfoDivider />
      <Flight data={props.data.flight.return} />
    </TicketInfo>
    <TicketOpener>
      <img src={arrowDown} alt="Arrow" />
    </TicketOpener>
  </Content>
);

TabletTicket.propTypes = {
  data: PropTypes.shape({
    logos: PropTypes.arrayOf(PropTypes.shape({})),
    isCharter: PropTypes.bool,
    price: PropTypes.number,
    agency: PropTypes.string,
    ticketsLeft: PropTypes.number,
    suggestions: PropTypes.arrayOf(PropTypes.shape({})),
    baggage: PropTypes.shape({
      primary: PropTypes.shape({}),
      alternative: PropTypes.shape({}),
    }),
    flight: PropTypes.shape({
      depart: PropTypes.shape({
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
        type: PropTypes.string,
      }),
      return: PropTypes.shape({
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
        type: PropTypes.string,
      }),
    }).isRequired,
    duration: PropTypes.number,
  }).isRequired,
};

export default TabletTicket;
