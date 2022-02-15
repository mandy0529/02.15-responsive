import React from "react";
import { HomeWrapper } from "../styles/home";
import { HomeImg } from "../utils/helper";

function Home() {
  return (
    <HomeWrapper>
      <img src={HomeImg} alt="home-img" />
      <div>
        <h1>home page</h1>
        <p>
          Ad excepteur magna sint nisi non occaecat et ullamco aliqua
          consectetur pariatur sunt ipsum pariatur. Velit voluptate Lorem labore
          proident tempor pariatur pariatur esse deserunt
        </p>
      </div>
    </HomeWrapper>
  );
}

export default Home;
