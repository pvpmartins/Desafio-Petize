import { TextField } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getRepos, getUser } from "../../client/http";
import RepoList from "../../components/RepoList";
import UserCard from "../../components/UserCard";
import { IRepo, IUser } from "../../types";
import PerfilStyles from "./style";

const Perfil = (props: any) => {
  const [user, setUser] = useState<IUser>();
  const [repos, setRepos] = useState<IRepo[]>();
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);
  const [searchUser, setSearchUser] = useState<string>("");

  const location = useLocation();

  const loadUser = async (user: string) => {
    try {
      setIsLoadingUser(true);
      const userFound = await getUser(user);
      console.log(userFound);

      setUser(userFound);
      setIsLoadingUser(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadRepos = async (user: string) => {
    try {
      setIsLoadingRepos(true);
      const repoArr = (await getRepos(user)) as IRepo[];
      setIsLoadingRepos(false);
      repoArr.sort((a, b): any => {
        if (a.stargazers_count > b.stargazers_count) {
          return -1;
        }
        if (a.stargazers_count < b.stargazers_count) {
          return 1;
        }
        return 0;
      });
      console.log(repoArr);

      setRepos(repoArr);
    } catch (error) {
      const err = error as string;
    }
  };

  useEffect(() => {
    loadUser(searchUser);
    loadRepos(searchUser);
  }, [searchUser]);
  useEffect(() => {
    const searchedUser = location.state;
    loadUser(searchedUser);
    loadRepos(searchedUser);
  }, []);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <PerfilStyles>
      <div className="search">
        <Link to={"/"}>
          <img src="Screenshot from 2023-02-08 19-48-09.png" alt="" />
        </Link>
        <TextField
          className="input"
          label="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const target = e.target as HTMLInputElement;
              setSearchUser(target.value);
            }
          }}
        />
      </div>
      <div className="row">
        {!!user && !isLoadingUser && (
          <div className="wrapper">
            <UserCard
              bio={user?.bio}
              company={user?.company}
              blog={user?.blog}
              email={user?.email}
              followers={user?.followers}
              location={user?.location}
              login={user?.login}
              name={user?.name}
              photo={user?.avatar_url}
              twitter={user?.twitter_username}
              following={user?.following}
            />
          </div>
        )}
        <RepoList repoList={repos} isLoading={isLoadingRepos} />
      </div>
    </PerfilStyles>
  );
};

export default Perfil;
