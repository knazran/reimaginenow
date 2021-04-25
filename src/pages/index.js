/* eslint-disable react/prop-types */
import React from "react";

import Hero from "../components/hero";
import MainPitch from "../components/main-pitch";
import Services from "../components/services";
import PastWork from "../components/past-work";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`undi 18`, `voter education`, `youth`, `pemuda negara`, `digital campaign`, `youth empowerment`, `electoral reform`, `CSO`, `political education`]}
        title="Home"
      />
      <section id="hero" className="">
        <Hero />
      </section>

      <section id="main pitch" className="">
        <MainPitch />
      </section>

      <section id="services" className="pt-6 lg:pt-12 container mx-auto px-4 py-0 lg:px-8">
        <Services/>
      </section>
      <section id="past-work" className="pt-6 container mx-auto px-4 py-0 lg:px-8">
        <PastWork/>
      </section>
      {/* <div
        className="relative w-full mt-0 lg:mt-12 py-6 bg-black flex flex-col justify-center mx-auto px-4 py-0 lg:px-8"
      >
        <div className="w-32 lg:w-56 self-center mr-3">
          <img src={logo} alt="Undi18" />
        </div>
        <div>

          <h3 className="text-xl lg:text-3xl text-center text-white font-semibold tracking-wider">
            Campaigns for Change
          </h3>
        </div>
      </div> */}

    </Layout>
  );
}

