import React from 'react';
import styled from "styled-components";

const CustomCard = styled.div`
  background-color: white;
  width: 394px;
  height: 356px;
  border-radius: 50px;
  position: relative;
`
const IconDiv = styled.div`
  background-color: #32B006;
  width: 112px;
  height: 112px;
  border-radius: 90px;
  color: white;
  position: absolute;
  top: -50px;
  left: 30px;
  
`;
const Header = styled.h2`
  height: 86px;
  width: 348px;
  font-family: Poppins,serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0;
  text-align: left;
  margin: 100px 30px 0 30px;
`;
const Text = styled.p`
  width: 348px;
  height: 102px;
  font-family: Poppins,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 190%;
  text-align: justify;
  color: #686868;
  margin: 0 30px 30px 30px;
`;

const Card = ({icon, heading, text}) => {
    return (
        <CustomCard>
            <IconDiv>
                <img src={"../assets/sushi.svg"} alt={"sushi"}/>
            </IconDiv>
            <Header>{heading}</Header>
            <Text>{text}</Text>
        </CustomCard>
    );
};

export default Card;