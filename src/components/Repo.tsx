import { useEffect, useState } from "react";
import styled from "styled-components";

const Repo = ({ nome, desc, stars, url, updatedAt }: RepoProps) => {
  const [time, setTime] = useState<string>();

  const returnUpdatedAt = () => {
    const now = Date.now();
    const lastUpdate = Date.parse(updatedAt);

    const diffTime = Math.abs(now - lastUpdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Atualizado hoje";
    } else if (diffDays > 30) {
      const meses = Math.ceil(diffDays / 30);
      return `Atualizado há ${meses} meses`;
    }
    if (diffDays > 365) {
      const anos = Math.ceil(diffDays / 365);
      return `Atualizado há ${anos} anos`;
    }
  };

  useEffect(() => {
    setTime(returnUpdatedAt());
  }, []);

  return (
    <RepoStyles>
      <a data-testid="title" href={url}>
        {nome}
      </a>
      <p>{desc}</p>
      <div className="details">
        <i className="fa-regular fa-star"></i>
        <label htmlFor="">{stars}</label>
        <p>•</p>
        <label htmlFor="">{time}</label>
      </div>
    </RepoStyles>
  );
};

const RepoStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  & a {
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
  }
  & p {
    text-align: left;
  }
  & .details {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    width: 21rem;
    left: 50%;
    border-radius: 0;
    position: relative;
    transform: translateX(-50%);
    border-top: 1px solid #c9c9c9;
  }
`;

type RepoProps = {
  nome: string;
  desc: string;
  stars: number;
  url: string;
  updatedAt: string;
};

export default Repo;
