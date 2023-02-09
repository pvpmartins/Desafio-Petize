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
  gap: 1rem;
`;
type RepoListProps = {
  repoList?: IRepo[];
  isLoading: boolean;
  repoErrorMessage?: string;
};

export default RepoList;
