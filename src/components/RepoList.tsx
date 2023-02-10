import { useEffect } from "react";
import styled from "styled-components";
import { IRepo } from "../types";
import Repo from "./Repo";
import RepoSkeleton from "./RepoSkeleton";

const RepoList = ({ repoList, isLoading, repoErrorMessage }: RepoListProps) => {
  useEffect(() => {
    console.log(repoErrorMessage);
  }, [repoErrorMessage]);

  return (
    <RepoListStyles>
      {!repoErrorMessage && isLoading && (
        <>
          <RepoSkeleton />
          <RepoSkeleton />
          <RepoSkeleton />
        </>
      )}

      {!isLoading &&
        repoList?.map((repo) => (
          <Repo
            desc={repo.description}
            nome={repo.name}
            stars={repo.stargazers_count}
            url={repo.clone_url}
            updatedAt={repo.updated_at}
            key={repo.id}
          />
        ))}
    </RepoListStyles>
  );
};

const RepoListStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 1rem;
  width: 42rem;

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    gap: 0;
    width: 100%;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 26rem;
  }
`;
type RepoListProps = {
  repoList?: IRepo[];
  isLoading: boolean;
  repoErrorMessage?: string;
};

export default RepoList;
