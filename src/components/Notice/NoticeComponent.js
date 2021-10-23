import React from "react";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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



const NoticeComponent = (props) =>{

    return(
        <div>
        <div style={{maxWidth:"900px"}}>
        <Card >
        <CardContent >
            <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom>
                {props.content}
                </Typography>
            <Divider sx={{mb:5}}/>
            <Typography
                className={"MuiTypography--subheading"}
                style={{fontSize:"14px",marginTop:"15px",marginBottom:"5px"}}>
            
                {props.type}
            </Typography>

           <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.examdate}
            </Typography>

            <Typography variant="body2">
                {props.deadline}
            </Typography>
          <br/>
          <br/>
          
       
          
         
        </CardContent>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth:"900"}}>

      <ButtonGroup variant="contained" fullWidth="true" color="inherit">
        <Button 
            style={{display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    backgroundColor:"#55BFB9"
                    }}>
        </Button>       
      </ButtonGroup>
      
    </Box>
    
      </Card>

      </div>

    <br/>
    </div>
    );


}
export default NoticeComponent;
