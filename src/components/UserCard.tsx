import { useEffect, useState } from "react";
import styled from "styled-components";

const UserCardStyles = styled.div`
  --main-text-color: #000000ac;
  position: sticky;
  top: 1rem;
  display: flex;
  min-width: 15rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 3px;
  padding: 0.7rem;
  width: fit-content;
  background-color: white;
  & .avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 90%;
    & img {
      width: 3rem;
      border-radius: 3rem;
    }
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 70%;
      & label {
        font-weight: bold;
        white-space: nowrap;
        font-size: 1.2rem;
      }
      & p {
        font-size: 0.9rem;
        color: #00000089;
      }
    }
  }
  & p {
    margin: 0;
  }
  & .bio {
    text-align: left;
    font-size: 0.9rem;
    color: var(--main-text-color);
  }
  & .follows {
    display: grid;
    grid-template-areas:
      "icon1 num1"
      "icon2 num2";
    justify-items: start;
    align-items: center;
    gap: 0.3rem;
    & label,
    i {
      color: var(--main-text-color);
    }
  }
  & .info {
    display: grid;
    grid-template-columns: 0.77fr 5fr;
    justify-items: start;
    align-items: center;

    & label,
    i {
      color: var(--main-text-color);
    }
    & a {
      & label {
        cursor: pointer;
      }
    }
  }
  & .contato {
    width: 105%;
    background-color: purple;
    color: white;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    width: 22rem;
    background-color: #f7c4cd2e;
    & .contato {
      display: none;
    }
  }
`;

const UserCard = ({
  name,
  login,
  bio,
  followers,
  company,
  location,
  email,
  photo,
  twitter,
  blog,
  following,
  error,
}: UserCardProps) => {
  const [scrollHeight, setScrollHeight] = useState<number>();

  useEffect(() => {
    setScrollHeight(document.body.scrollHeight);
  }, [window.onload]);

  useEffect(() => {
    console.log({ error });
  }, [error]);

  return (
    <UserCardStyles>
      <div className="avatar">
        <img src={photo} alt="" />
        <div className="avatar__info">
          <label htmlFor="">{name}</label>
          <p>@{login}</p>
        </div>
      </div>
      <p className="bio">{bio}</p>
      <div className="follows">
        <i style={{ gridArea: "icon1" }} className="fa-solid fa-users"></i>
        <label style={{ gridArea: "num1" }}>{followers} seguidores</label>

        <i style={{ gridArea: "icon2" }} className="fa-regular fa-heart"></i>
        <label style={{ gridArea: "num2" }}>{following} seguindo</label>
      </div>
      <div className="error">{error}</div>
      <div className="info">
        {!!company && <i className="fa-regular fa-building"></i>}
        {!!company && <label>{company}</label>}
        {!!location && <i className="fa-solid fa-location-dot"></i>}
        {!!location && <label>{location}</label>}
        {!!email && <i className="fa-regular fa-envelope"></i>}
        {!!email && (
          <a href="">
            <label>{email}</label>
          </a>
        )}
        {!!blog && <i className="fa-solid fa-link"></i>}
        {!!blog && (
          <a href={`${blog}`}>
            <label>{blog}</label>
          </a>
        )}
        {!!twitter && <i className="fa-brands fa-twitter"></i>}
        {!!twitter && (
          <a href={`https://twitter.com/${twitter}`}>
            <label>{twitter}</label>
          </a>
        )}
      </div>
      <button className="contato">Contato</button>
    </UserCardStyles>
  );
};

export type UserCardProps = {
  name?: string | null;
  bio?: string | null;
  login?: string;
  followers?: number;
  company?: string | null;
  photo?: string;
  location?: string | null;
  email?: string | null;
  twitter?: string | null;
  blog?: string | null;
  following?: number;
  error?: string;
};

export default UserCard;
