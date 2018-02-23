import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Checkbox from "./Checkbox";

const Transfers = styled(Filter)`
  padding-bottom: 16px;
`;

const Price = styled.p`
  font-size: 12px;
  color: #a0b0b9;
`;

const Checkline = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
  color: #4a4a4a;
`;

const data = [
  {
    label: "Все",
    price: ""
  },
  {
    label: "Без пересадок",
    price: "7 712 ₽"
  },
  {
    label: "1 пересадка",
    price: "11 712 ₽"
  },
  {
    label: "2 пересадки",
    price: "23 712 ₽"
  },
  {
    label: "3 пересадки",
    price: "47 712 ₽"
  }
];

export default () => (
  <Transfers title="Пересадки" opened={true}>
    {data.map((transfer, i) => (
      <Checkline key={i}>
        <Checkbox checked={true} text={transfer.label} />
        <Price> {transfer.price}</Price>
      </Checkline>
    ))}
  </Transfers>
);