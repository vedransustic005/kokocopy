import React from 'react';
import styled from "styled-components";
import {dummy_card_data} from "../const"
import Card from "./Card";

const CardsContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const BackgroundSVG = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  z-index: -1;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 30%;
  width: 100vw;
`

const Cards = () => {
    return (
        <CardsContainer>
            <BackgroundSVG>
                <svg width="1920" height="156" viewBox="0 0 1920 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1206.32 35.3244C1542.03 -50.2657 1920 46.5882 1920 46.5882C1920 46.5882 1920 93.6993 1920 156H-2.99988L-3 104.06C-3 104.06 452.209 227.584 1206.32 35.3244Z" fill="#F3F3F3"/>
                </svg>
                <svg width="1920" height="289" viewBox="0 0 1920 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-3" width="1923" height="289" fill="#F3F3F3"/>
                </svg>
            </BackgroundSVG>
            <CardList>
                {
                    dummy_card_data && dummy_card_data.map(item => {
                        return <Card
                            key={item.id}
                            heading={item.heading}
                            icon={item.icon}
                            text={item.text}
                        />
                    })
                }
            </CardList>
        </CardsContainer>
    );
};

export default Cards;