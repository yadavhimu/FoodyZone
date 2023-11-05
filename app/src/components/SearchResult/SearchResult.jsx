import styled from "styled-components";

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
      <FoodCards>

        { data?.map((food)=> (
            <FoodCard key={food.name}>{food.text}</FoodCard>
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