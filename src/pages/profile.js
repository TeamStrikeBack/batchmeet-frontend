import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./profile.css";
import axios from "axios";

const Profile = () => {

  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState({});


  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/users/getuser`,{
      headers:{
        'x-auth-token':localStorage.getItem('token')
      }
    })
        .then((res)=>{
          console.log(res.data)
          setUser(res.data);
          setLoading(false);
        })
        .catch((err)=>{
          console.log(err);
        })
  },[]);






  return(
      <div>
        {loading ? <h2>Loading</h2>:

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
                  <div className="name">{user.name}</div>
                  <div className="role">{user.role}</div>

                  <div className="info">
                    <div className="key-text">Index No</div>
                    <div className="value-text">{user.indexno}</div>
                  </div>

                  <div className="info">
                    <div className="key-text">E-Mail</div>
                    <div className="value-text">{user.email}</div>
                  </div>

                  <div className="info">
                    <div className="key-text">Contact No</div>
                    <div className="value-text">{user.contactno}</div>
                  </div>

                  <div style={{marginTop: "20px"}}>
                    <Link to="/edit-profile" style={{textDecoration: "none"}}>
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
        }
      </div>
  )};

export default Profile;
