import styled from "styled-components";

export const HomeStyles = styled.div`
  /* background-color: blue; */
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  & img {
    width: 40rem;
    /* height: 10rem; */
  }

  & .search {
    gap: 0.8rem;
    display: flex;
    align-items: center;
    & input {
      width: 40rem;
    }
  }
  & a {
    border-radius: 0.25rem;
    background-color: #970197;
    color: white;
    width: 10rem;
    padding: 1rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    & img {
      width: 15rem;
    }
    & .search {
      flex-direction: column;
      width: 8em;
      & > div {
      }
      & input {
        width: 15rem;
      }
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    & img {
      width: 35rem;
    }
    & .search {
      flex-direction: column;
      width: 8em;
      & > div {
      }
      & input {
        width: 25rem;
      }
    }
  }
`;
