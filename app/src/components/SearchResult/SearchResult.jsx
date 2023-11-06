import { BASE_URL } from "../../App";
import styled from "styled-components";

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
      <FoodCards>

        { data?.map((food)=> (
            <FoodCard key={food.name}>
                <div className="food_image">
                    <img src={BASE_URL + food.image}/>
                 </div>
                 <div className="food_info">
                    <div className="info">
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                 </div>
            </FoodCard>
          ) ) }
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult


const FoodCardContainer = styled.section`
height:calc(100vh - 150px);
 background-image: url("/bg.png");
 background-size: cover;
 width:100%;
`;
const FoodCards = styled.div``;

const FoodCard = styled.div``;