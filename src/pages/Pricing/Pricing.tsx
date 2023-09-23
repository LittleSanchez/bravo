import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PricingContent from "./PricingContent";
import * as Styled from "./Pricing.styles";

export interface PricingPageProps {}

const Pricing: React.FunctionComponent<PricingPageProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />
          <PricingContent />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Pricing;
