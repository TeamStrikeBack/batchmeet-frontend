import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import axios from "axios";

const style = {
  inputarea: {
    marginBottom: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "15px",
  },

  text: {
    marginBottom: "5px",
    fontWeight: "bold",
    width: "25%",
  },

  inputbox: {
    width: "70%",
  },
};

const EditProfile = () => {

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
         // setLoading(false);
        })
        .catch((err)=>{
          console.log(err);
        })
  },[]);


  const [values, setValues] = React.useState({
    amount: "",
    passwordCur: "",
    passwordNew: "",
    passwordNewConf: "",
    weight: "",
    weightRange: "",
    showPasswordCur: false,
    showPasswordNew: false,
    showPasswordNewConf: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPasswordNew = () => {
    setValues({ ...values, showPasswordNew: !values.showPasswordNew });
  };

  const handleClickShowPasswordCur = () => {
    setValues({ ...values, showPasswordCur: !values.showPasswordCur });
  };

  const handleClickShowPasswordNewConf = () => {
    setValues({ ...values, showPasswordNewConf: !values.showPasswordNewConf });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm" className="container">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <form noValidate autoComplete="off">
          {/* ----- name input ----- */}
          <div style={style.inputarea}>
            <div style={style.text}>Name</div>
            <TextField
              id="name"
              //   defaultValue="name"
              variant="outlined"
              size="small"
              style={style.inputbox}
            />
          </div>

          {/* ----- E-mail input ----- */}
          <div style={style.inputarea}>
            <div style={style.text}>E-mail</div>
            <TextField
              id="email"
              variant="outlined"
              size="small"
              style={style.inputbox}
            />
          </div>

          {/* ----- Contact No input ----- */}
          <div style={style.inputarea}>
            <div style={style.text}>Contact No</div>
            <TextField
              id="contact-no"
              variant="outlined"
              size="small"
              style={style.inputbox}
            />
          </div>

          {/* ----- Current Password input ----- */}
          <div style={style.inputarea}>
            <div style={style.text}>Current Password</div>
            <TextField
              id="current-pw"
              type={values.showPasswordCur ? "text" : "password"}
              value={values.passwordCur}
              onChange={handleChange("passwordCur")}
              autoComplete="current-password"
              variant="outlined"
              size="small"
              style={style.inputbox}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPasswordCur}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {values.showPasswordCur ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* ----- new password input ----- */}
          <div style={style.inputarea}>
            <div style={style.text}>New Password</div>
            <TextField
              id="new-pw"
              type={values.showPasswordNew ? "text" : "password"}
              value={values.passwordNew}
              onChange={handleChange("passwordNew")}
              variant="outlined"
              size="small"
              style={style.inputbox}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPasswordNew}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {values.showPasswordNew ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* ----- confirm new password input ----- */}
          <div style={style.inputarea}>
            <div style={style.text}>Confirm New Password</div>
            <TextField
              id="conf-new-pw"
              type={values.showPasswordNewConf ? "text" : "password"}
              value={values.passwordNewConf}
              onChange={handleChange("passwordNewConf")}
              variant="outlined"
              size="small"
              style={style.inputbox}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPasswordNewConf}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {values.showPasswordNewConf ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              style={{
                background: "#55BFB9",
                fontWeight: "bold",
                color: "#011238",
              }}
              // onClick={}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Grid>
    </Container>
  );
};

export default EditProfile;
