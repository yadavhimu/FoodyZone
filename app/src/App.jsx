import styled from "styled-components";

const App = () => {
  return <MainContainer>
    <TopContainer>
      <div className="logo">
        <img src="/Foody Zone.png" alt="logo"/>
      </div>

      <div className="search">
        <input placeholder="search Food"/>
      </div>
    </TopContainer>
  </MainContainer>
};

export default App;


const MainContainer = styled.div`

background-color: #323334;
`;
const TopContainer = styled.section``;