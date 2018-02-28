import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import Header from "./Header";
import Advice from "./Advice";
import CityCard from "./CityCard/index";

import flagRu from "./flags/ru.png";
import flagAm from "./flags/am.png";
import flagMd from "./flags/md.png";

const citiesData = [
  {
    city: "Симферополь (Крым)",
    country: "Крым",
    flag: flagRu,
    prices: [
      {
        from: "Из Москвы",
        price: "4 813"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "7 857"
      },
      {
        from: "Из Новосибирска",
        price: "15 127"
      },
      {
        from: "Из Екатеринбурга",
        price: "9 275"
      },
      {
        from: "Из Челябинска",
        price: "9 148"
      }
    ]
  },
  {
    city: "Ереван",
    country: "Армения",
    flag: flagAm,
    prices: [
      {
        from: "Из Москвы",
        price: "4 758"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "9 932"
      },
      {
        from: "Из Сочи",
        price: "11 951"
      },
      {
        from: "Из Краснодара",
        price: "11 741"
      },
      {
        from: "Из Ростова-на-дону",
        price: "11 956"
      }
    ]
  },
  {
    city: "Кишинёв",
    country: "Молдавия",
    flag: flagMd,
    prices: [
      {
        from: "Из Москвы",
        price: "8 319"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "10 800"
      },
      {
        from: "Из Краснодара",
        price: "12 098"
      },
      {
        from: "Из Сургута",
        price: "16 277"
      },
      {
        from: "Из Нового Уренгоя",
        price: "15 987"
      }
    ]
  }
];

const Prices = styled.section`
  padding: 72px 0 0;
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);

  ${media.md`
    padding-top: 80px;
  `};
`;

const getCardTypes = (id, length) => {
  return {
    lastInRow: id === 0 || id % 2 !== 0,
    threeMultiple: id % 3 === 0,
    last: id === length - 1
  };
};

export default () => (
  <Prices id="prices">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Header />
        </div>
      </div>
      <div className="row">
        {citiesData.map((cityData, index, arr) => (
          <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-4 col-lg-offset-0">
            <CityCard
              data={cityData}
              key={index}
              types={getCardTypes(index, arr.length)}
            />
          </div>
        ))}
      </div>
      <div className="row center-md">
        <div className="col-xs-12 col-md-11 col-lg-8 col-xl-7">
          <Advice />
        </div>
      </div>
    </div>
  </Prices>
);
