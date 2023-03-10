import { useEffect, useState } from "react";
import styled from "styled-components";

const RepoSkeleton = () => {
  return (
    <RepoSkeletonStyles>
      <label className="skeleton label"></label>
      <p className="skeleton text" style={{ width: "90%", height: "20px" }}></p>
      <p className="skeleton text" style={{ width: "90%", height: "20px" }}></p>
      <p className="skeleton text" style={{ width: "90%", height: "20px" }}></p>
      <p className="skeleton text" style={{ width: "90%", height: "20px" }}></p>
      <p className="skeleton text" style={{ width: "90%", height: "20px" }}></p>
      <p className="skeleton text" style={{ width: "90%", height: "20px" }}></p>
      <div className="details skeleton">
        <label htmlFor="skeleton" className=""></label>

        <label htmlFor="skeleton" className=""></label>
      </div>
    </RepoSkeletonStyles>
  );
};

const RepoSkeletonStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: flex-start;
  padding: 1rem;
  width: 40rem;
  height: 10rem;
  border-radius: 8px;

  & .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }
  & .label {
    width: 30%;
    height: 30px;
    margin-bottom: 1rem;
  }
  & label {
    font-weight: bold;
    font-size: 1.2rem;
  }
  & p {
    text-align: left;
    margin: 1px;
  }
  & .text {
    width: "90%";
    height: "25px";
  }
  & .details {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    width: 100%;
  }
`;

export default RepoSkeleton;
