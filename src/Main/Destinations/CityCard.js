import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../common/media';

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 75, 93, 0.12);
  margin-top: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  :hover {
    box-shadow: 0 10px 20px 0 rgba(91, 137, 163, 0.2);
    cursor: pointer;
  }

  ${media.lg`
    margin-top: 32px;
  `};
`;

const Image = styled.img`
  width: 100%;
  height: 126px;
  object-fit: cover;
  transition: transform 6s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }

  ${media.sm`
    height: 170px;
  `};

  ${media.md`
    height: 212px;
  `};
`;

const City = styled.span`
  color: #5b5b5c;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  text-align: left;
  max-width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media.md`
    font-size: 22px;
    line-height: 32px;
  `};
`;

const SearchPrice = styled.a`
  margin-left: auto;
  text-decoration: none;
  font-size: 14px;
  color: #00bae8;
  margin-bottom: 4px;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #ff8c00;
  }

  ${media.md`
    font-size: 22px;
  `};
`;

const Country = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #a0b0b9;
  line-height: 20px;
`;

const FlightDate = styled.span`
  margin-left: auto;
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
`;

const Flag = styled.div`
  display: none;
  justify-content: center;
  margin-left: 23px;
  align-items: flex-start;
  margin-top: 14px;

  ${media.md`
    display: flex;
  `};
`;

const Info = styled.div`
  padding: 16px;
  flex-grow: 1;

  ${media.md`
    padding-left: 8px;
  `};
`;

const FlagAndInfo = styled.div`
  display: flex;
`;

const PrimaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SecondaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CityCard = props => (
  <Card>
    <Image src={props.data.imageUrl} alt="City picture" />
    <FlagAndInfo>
      <Flag>
        <img src={props.data.flag} alt="Flag" />
      </Flag>
      <Info>
        <PrimaryInfo>
          <City>{props.data.city}</City>
          <SearchPrice>Найти от {props.data.price} ₽</SearchPrice>
        </PrimaryInfo>
        <SecondaryInfo>
          <Country>{props.data.country}</Country>
          <FlightDate>{props.data.date}</FlightDate>
        </SecondaryInfo>
      </Info>
    </FlagAndInfo>
  </Card>
);

CityCard.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    flag: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default CityCard;
