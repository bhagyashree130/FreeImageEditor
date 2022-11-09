import React from "react";
import { useState } from "react";
import BannerSecMobileImage from "../Componrnts/HomePage/BannerSecMobile-Image";
import BannerSection from "../Componrnts/HomePage/BannerSection";
import CardSection from "../Componrnts/HomePage/CardSection";
import DesignTemplateSection from "../Componrnts/HomePage/DesignTemplateSection";
import Footer from "../Componrnts/HomePage/Footer";
import FrequentlyAskedQuestions from "../Componrnts/HomePage/FrequentlyAskedQuestions";
import Header from "../Componrnts/HomePage/Header";
import HowitWorks from "../Componrnts/HomePage/HowitWorks";
import Newsletter from "../Componrnts/HomePage/Newsletter";
import OnlineEditingCompany from "../Componrnts/HomePage/OnlineEditingCompany";
import StartDesigning from "../Componrnts/HomePage/StartDesigning";
import UploadVideoSection from "../Componrnts/HomePage/UploadVideoSection";
import Login from "./Login";

const HomePage = () => {
  const [isShowLogin, setShowLogin] = useState(false);
  const [isSelectmethod, setSelectmethod] = useState("Login");
  const handleShowLogin = () => {
    setShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleMethod = (value) => {
    setSelectmethod((isSelectmethod) => (isSelectmethod = value));
  };

  return (
    <>
      <BannerSection style={{ margin: "20px" }} />
      <BannerSecMobileImage />
      <HowitWorks style={{ margin: "20px" }} />
      <UploadVideoSection />
      <StartDesigning />
      <CardSection style={{ margin: "20px" }} />
      <DesignTemplateSection style={{ margin: "20px" }} />
      <OnlineEditingCompany style={{ margin: "20px" }} />
      <Newsletter style={{ margin: "20px" }} />
      <FrequentlyAskedQuestions style={{ margin: "20px" }} />
      <Footer />
    </>
  );
};

export default HomePage;
