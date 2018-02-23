import React from "react";
import media from "../../../common/media";
import styled from "styled-components";
import arrowDown from "./icons/arrow_down.svg";

const Passenger = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Class = styled.span`
  color: #a0b0b9;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PassengerAndClass = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 19px 16px;

  ${media.sm`
    width: calc(25% - 2px);
  `};

  ${media.xl`
    width: calc(18% - 2px);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `};
`;

const ArrowDown = styled.img`
  margin-left: auto;
`;

export default () => (
  <PassengerAndClass>
    <Passenger>1 пассажир,&nbsp;</Passenger>
    <Class>эконом</Class>
    <ArrowDown src={arrowDown} alt="Arrow" />
  </PassengerAndClass>
);