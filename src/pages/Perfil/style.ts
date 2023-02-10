import styled from "styled-components";

const PerfilStyles = styled.div`
  background-color: #00000005;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 20rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  & .input {
    min-width: 30rem;
    height: 30px;
    margin-bottom: 2rem;
  }

  & .wrapper {
    flex: 1;
  }

  & .search {
    display: flex;
    align-items: center;
    /* width: 100%; */
    gap: 6.5rem;
    & img {
      height: 3rem;
    }
  }
  & .row {
    display: flex;
    gap: 2rem;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    padding: 0rem;
    background-color: white;
    & .search {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      align-items: center;
      width: 100%;
      gap: 1rem;
      & img {
        height: 3rem;
      }
    }
    & .wrapper {
      height: fit-content;
      display: flex;
      justify-content: center;
      position: relative;

      & > {
        width: 100%;
      }
    }
    & .input {
      min-width: 15rem;
      height: 30px;
      margin-bottom: 1rem;
    }
    & .row {
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    & .search {
      gap: 2rem;
    }
    & .input {
    }
  }
`;

export default PerfilStyles;
