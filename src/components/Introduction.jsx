import React from 'react';
import styled from "styled-components";
import MainImage from "../assets/Rectangle 39610.png";
import HappyKids from "../assets/Rectangle 39606.png";
import LaughingKids from "../assets/Rectangle 39608.png";

const IntroductionContainer = styled.section`
    display: flex;
`;
const Left = styled.div`
    position: relative;
    flex: 1;
    margin: auto;
    display: flex;
`;
const Right = styled.div`
    flex: 1;
`;

const Image1 = styled.img`
  border-radius: 800px;
  box-shadow: -10px -20px 0 #32B006;
  width: 50%;
  height: auto;
  margin: auto;
`;
const Image2 = styled.img`
  position: absolute;
  border-radius: 800px;
  box-shadow: -10px -10px 0 white, 5px 10px 0 #65C5E8;
  width: 30%;
  height: auto;
  left:60%;
  top: 60%;
`;
const Image3 = styled.img`
  position: absolute;
  border-radius: 800px;
  box-shadow: -10px -10px 0 white, 5px 10px 0 #FEA711;
  width: 20%;
  height: auto;
  left:72%;
  top: -20%;
`;

const IHeading = styled.h2`
  font-family: Poppins,serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
  letter-spacing: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 596px;
`;
const ISpan = styled.p`
  color: #32B006;
  font-weight: 700;
`;
const IText = styled.p`
  font-family: Poppins,serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  text-align: justify;
  width: 596px;
  color: #686868;
  line-height: 198%;
`;

const Introduction = () => {
    return (
        <IntroductionContainer>
            <Left>
                <Image1 src={MainImage} alt="kidsOnLaptop"/>
                <Image2 src={HappyKids} alt="happyKids"/>
                <Image3 src={LaughingKids} alt="laughingKids"/>
            </Left>
            <Right>
                <IHeading>
                    <span>Kokolingo was carefully developed by a team of certified</span>
                    <ISpan>speech-language pathologists</ISpan>
                </IHeading>
                <IText>It’s not easy to motivate kids to practice speech sounds at home. Kokolingo is a game-changer for articulation practice because it is actually fun! Kokolingo was carefully developed by a team of certified speech-language pathologists who wanted to give parents the tools they need to help their children speak clearly. Come join Pirate Lucky and his Parrot Koko on a journey around the world.</IText>
            </Right>
        </IntroductionContainer>
    );
};

export default Introduction;