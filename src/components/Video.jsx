import React from 'react';
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #F3F3F3;
  z-index: -2;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const VideoSetup = styled.video`
  margin: 87px 30%;
  border-radius: 16px;
`;
const Text = styled.h2`
  font-family: Poppins,serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0;
  text-align: center;
  margin: auto;
  color: #32B006;
`;
const BackgroundSVG = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 60%;
  z-index: -1;
`;

const Video = () => {
    return (
        <>
        <VideoContainer>
            <BackgroundSVG>
                <svg width="1920" height="382" viewBox="0 0 1920 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1302.9 15.418C1397.69 -6.20399 1651.68 -21.3543 1920 87.1158V382H-3V37.4181C83.6332 9.75141 333.461 -28.9819 639.707 37.4181C945.953 103.818 1209.44 50.4181 1302.9 15.418Z" fill="#E0EEDB"/>
                </svg>
            </BackgroundSVG>
            <VideoSetup width="40%" height="auto" controls>
                <source src="https://www.youtube.com/watch?v=m2IV0BajqAk" type="video/mp4"/>
                <source src="https://www.youtube.com/watch?v=m2IV0BajqAk" type="video/ogg"/>
                    Your browser does not support the video tag.
            </VideoSetup>
            <Text>Pirate Lucky will show you how it works!</Text>
        </VideoContainer>
        </>
    );
};

export default Video;