import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import App from "../src/App";
import React from "react";
import Home from "../src/pages/Home/Home";
import Repo from "../src/components/Repo";
import RepoList from "../src/components/RepoList";

describe("App", () => {
  test("see app rendering", () => {
    const { getByTestId, debug } = render(
      <Repo
        nome={"nome"}
        desc={"desc"}
        stars={0}
        url={"URL"}
        updatedAt={"updatedAt"}
      />
    );
    // debug();
    expect(getByTestId("title")).toHaveTextContent("nome");
  });
});
