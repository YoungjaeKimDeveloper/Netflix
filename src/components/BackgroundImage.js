import React from "react";
import styled from "styled-components";
function BackgroundImage() {
  return (
    <BackgroundContainer>
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="No Internet connection"
      />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vh;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default BackgroundImage;
