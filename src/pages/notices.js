import React, {useEffect, useState} from "react";
import axios from "axios";
import NoticeComponent from "../components/Notice/NoticeComponent";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';






import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const Notices = () => {
    const Input = styled('input')({
        display: 'none',
      });
    const [notices,setNotices] = useState([]);
    //Post crete Popup
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickClose = () => {
      setOpen(false);
    };
   

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_BASE_URL}/notices`,{
            headers:{
                'x-auth-token' : localStorage.getItem('token')
            }
        })
            .then((res)=>{
                console.log(res.data[0]);
                setNotices(res.data);
            })
            .catch((err)=>{
                console.error(err);
            })

    },[])

return(
    <div>
          <div style={{maxWidth:"900px"}}>
      
      <Box >
      
      <AppBar position="static" style={{backgroundColor:"#55BFB9"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notices
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
              >
              
                <AddIcon fontSize="large" color="white"/>
                
              </IconButton>
              
            </div>
            <Dialog
              open={open}
              onClose={handleClickClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">

              <DialogTitle id="alert-dialog-title" style={{backgroundColor:"#55BFB9"}}>
                <Typography 
                  variant="h6" 
                  align="center" 
                  color="white"
                  component="div" 
                  sx={{ flexGrow: 1 }} >
                  Create Notice
                </Typography>
              </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            
          <Box component="form"  noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
              fullWidth
              id="standard-multiline-static"
              label="Caption"
              variant="standard"
              
              inputProps={{color:'#55BFB9'}}
              style={{color:"#55BFB9"}}

            />
            <TextField
              margin="normal"
              fullWidth
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="standard"
              style={{color:"#55BFB9"}}
            />
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton  aria-label="upload picture" component="span" style={{color:"#55BFB9"}}>
                  <ImageIcon fontSize="large"/>
                </IconButton>
              </label>
            </Stack>
            
            </Box>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            
           
              
            
            <Button onClick={handleClickClose} color="inherit" style={{backgroundColor:"",fontWeight:"bold",color:"#55BFB9" ,marginRight:"5px",}}>
                  Cancel</Button>
            <Button  onClick={handleClickClose}  color="inherit" style={{backgroundColor:"#55BFB9",fontWeight:"bold",color:"white" ,marginRight:"5px",}}>
                  Post</Button>
              
        </DialogActions>
      </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
      
    
    
     
      <br/>
    
      </div>
    {notices.map((notice)=> (

            <NoticeComponent
                content={notice.content}
                type={notice.type}
                examdate={notice.examdate}
                deadline={notice.deadline}
            />




    ))}
    </div>
);


};

export default Notices;
