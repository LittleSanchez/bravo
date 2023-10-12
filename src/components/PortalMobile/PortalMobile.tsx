import { Wrapper } from "./PortalMobile";
import videoBg from "../../assets/video/home_background.mp4";
import * as Styled from "./PortalMobile";
import GoogleIcon from "../../assets/images/PortalMobile/Google.svg";
import AppleIcon from "../../assets/images/PortalMobile/Apple.svg";
import StartButton from "../../assets/images/PortalMobile/Button.svg";

import PortalImageAdv from "../../assets/images/PortalMobile/PortalAdvert.svg";
import { WelcomeTitle, WelcomeText, WelcomeTitleColored } from "./PortalMobile";

interface IPortalMobile {}

const PortalMobile: React.FC<IPortalMobile> = () => {
  return (
    <Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          Portal
          <WelcomeTitleColored>
            {" "}
            as
            <br />
          </WelcomeTitleColored>{" "}
          Easy <WelcomeTitleColored>as 1,2,3</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>
          Submit, Track, Ship, Communicate, Mobile Devices All in One Service
        </WelcomeText>
      </Styled.WelcomeContainer>
      <Styled.AdvertContainer>
        <Styled.ButtonContainer>
          <Styled.GoogleImage src={GoogleIcon} />
          <Styled.AppImage src={AppleIcon} />
        </Styled.ButtonContainer>
        <Styled.AdvertImage src={PortalImageAdv} />
      </Styled.AdvertContainer>
      <Styled.ButtonStart>
        <img src={StartButton} />
        Start Your Journey
      </Styled.ButtonStart>
    </Wrapper>
  );
};

export default PortalMobile;
