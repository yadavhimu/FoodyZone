import {useState} from "react"
import {useEffect} from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

const [data, setData] = useState(null);
const [loading, setLoading]=useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchFoodData = async () => {
    setLoading(true);
    try {
    const responce = await fetch(BASE_URL);
    const json = await responce.json();
   setData(json);
   setLoading(false);
   } catch (error) {
     setError("Unable to fetch data");
   }
   };
  fetchFoodData();
},[]);

console.log(data);

if(error) return <div>{error}</div>;
if (loading) return <div>loading.....</div>;

  return <Container>
    <TopContainer>
      <div className="logo">
        <img src="/Foody Zone.png" alt="logo"/>
      </div>

      <div className="search">
        <input placeholder="search Food"></input>
      </div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>

    <SearchResult data={data}/>



  </Container>
};

export default App;


const Container = styled.div`
max-width: 1200px;
margin: 0 auto;

`;
const TopContainer = styled.section`
min-height: 100px;
display:flex;
justify-content: space-between;
align-items: center;

.search{
  input{
    background-color: transparent;
    border:1px solid red;
    color:white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
}

`;

const FilterContainer = styled.section`
display:flex;
justify-content: center;
gap:12px;
padding-bottom: 20px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius:5px;
  padding:6px 12px;
  border:none;
  color:white;
`;


