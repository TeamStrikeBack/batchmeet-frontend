import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./profile.css";

const Profile = () => (
  <Container maxWidth="sm" className="container">
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        alt="Doggy"
        src="./Assets/sample/avatar.jfif"
        className="avatar-img"
      />
      <div className="name">Dileepa Lakshan</div>
      <div className="role">Student</div>

      <div className="info">
        <div className="key-text">Index No</div>
        <div className="value-text">184073F</div>
      </div>

      <div className="info">
        <div className="key-text">E-Mail</div>
        <div className="value-text">dileepaabc@gmail.com</div>
      </div>

      <div className="info">
        <div className="key-text">Contact No</div>
        <div className="value-text">0711231231</div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/edit-profile" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              background: "#55BFB9",
              fontWeight: "bold",
              color: "#011238",
            }}
          >
            Edit Profile
          </Button>
        </Link>
      </div>
    </Grid>
  </Container>
);

export default Profile;
