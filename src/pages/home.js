import React from "react";
import {useState} from 'react';  
import ReactDOM from "react-dom";
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

const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
  ];
  
  const styles = muiBaseTheme => ({
    card: {
      maxWidth: "100px",
      margin: "auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    media: {
      paddingTop: "56.25%"
    },
    content: {
      textAlign: "left",
      padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
      margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -muiBaseTheme.spacing.unit
      }
    }
  });
 

  export default function Home () {


    const [anchorEl, setAnchorEl] = React.useState(null);
  
   
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
    <div>
    
    <div style={{maxWidth:"900px"}}>
      
      <Box >
      
      <AppBar position="static" style={{backgroundColor:"#55BFB9"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Feed
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
              
                <AddIcon fontSize="large" color="white"/>
                
              </IconButton>
              
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
      
    
    <br/>
      <Card >
      
        <CardContent >
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Post 1
          </Typography>
          <Divider sx={{mb:5}}/>
          <Typography
            className={"MuiTypography--subheading"}
            
            style={{fontSize:"14px",marginTop:"15px",marginBottom:"5px"}}
          >
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure 
            there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat predefined 
            hunks as necessary, making this the first true generator on the Internet. 
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, 
            injected humour, or non-characteristic words etc.
          </Typography>
          <br/>
          <br/>
          
       
          
         
        </CardContent>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth:"900",
        backgroundColor:"",
        
        
      }}
     
    >
      <ButtonGroup variant="contained" fullWidth="true" color="inherit">
        <Button 
            style={{display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    backgroundColor:"#55BFB9",
                    fontWeight:"bold",
                    fontSize:"14px",
                    color:"white"}}>
            <ThumbUpIcon sx={{mr:2,mt:0}}/>
            <span>Like</span>
           
        </Button>
        <Button 
            style={{display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    backgroundColor:"#55BFB9",
                    fontWeight:"bold",
                    fontSize:"14px",
                    color:"white"}}>
            <CommentIcon sx={{mr:2,mt:0}}/>
            <span>Comment</span>
           
        </Button>
       
      </ButtonGroup>
      
    </Box>
    
      </Card>
      <br/>
    
      </div>
      
      
    
    </div>
  
    );

    
    
          }


