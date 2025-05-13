import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Range from "../components/Range";
import ContactForm from "../components/ContactForm";
import Supplies from "../components/Supplies";
import Delivery from "../components/Delivery";
import Managers from "../components/Managers";
import Main from "../components/Main";
import Request from "../components/Request";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeaderBanner />
      <Range />
      <ContactForm />
      <Supplies />
      <Delivery />
      <Managers />
      <Advantages />
      <Main />
      <Request />
      <Footer />
    </div>
  );
}
