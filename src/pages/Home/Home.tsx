import { Stack, TextField, Box, Button } from "@mui/material";

import { blue } from "@mui/material/colors";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeStyles } from "./styles";

const Home = () => {
  const [searchUser, setSearchUser] = useState<string>("");

  useEffect(() => {
    console.log(searchUser);
  }, [searchUser]);

  return (
    <HomeStyles>
      <img
        src="../public/assets/Screenshot from 2023-02-08 19-48-09.png"
        alt=""
      />
      <div className="search">
        <TextField
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Search"
        ></TextField>

        <Link
          to={{ pathname: "/perfil" }}
          state={!!searchUser ? searchUser : null}
        >
          Search
        </Link>
      </div>
    </HomeStyles>
  );
};

export default Home;
