import styled from "styled-components";

const PerfilStyles = styled.div`
  background-color: #00000005;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 15rem;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  & .search {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 6.5rem;
    & img {
      height: 3rem;
    }
  }
  & .row {
    display: flex;
    gap: 2rem;
  }
`;

export default PerfilStyles;
