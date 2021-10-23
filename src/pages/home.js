import React, {useEffect} from "react";
import {useState} from 'react';
import ReactDOM from "react-dom";
import {withStyles} from "@material-ui/core/styles";
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
import axios from "axios";

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


export default function Home(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [posts, setPosts] = useState([]);
    var postCount = 1;


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/posts`, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            })
    }, []);


    const likeHandler = (id) => {

        axios.put(`${process.env.REACT_APP_BASE_URL}/posts/like/` + id, {}, {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
                alert(err);
            })
window.location.reload();
    };


    const LikedUser = (post) => {
      return post.user == localStorage.getItem('id');
    }


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

            <div style={{maxWidth: "900px"}}>

                <Box>

                    <AppBar position="static" style={{backgroundColor: "#55BFB9"}}>
                        <Toolbar>

                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
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
            </div>
            <br/>


            {posts.map((post, index) => {
                return (
                    <div style={{maxWidth: "900px"}}>
                        <Card>
                            <CardContent>
                                <Typography
                                    className={"MuiTypography--heading"}
                                    variant={"h6"}
                                    gutterBottom
                                >
                                    {postCount++}
                                </Typography>
                                <Divider sx={{mb: 5}}/>
                                <Typography
                                    className={"MuiTypography--subheading"}
                                    style={{fontSize: "14px", marginTop: "15px", marginBottom: "5px"}}
                                >
                                    {post.posttext}
                                </Typography>
                                <br/>
                                <br/>

                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    maxWidth: "900",
                                    backgroundColor: "",
                                }}
                            >

                                {post.likes.find(LikedUser) ? (
                                    <ButtonGroup variant="contained" fullWidth="true" color="inherit">
                                        <Button
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                backgroundColor: "#55BFB9",
                                                fontWeight: "bold",
                                                fontSize: "14px",
                                                color: "white"
                                            }}
                                            // onClick={() => likeHandler(post._id)}
                                        >
                                            <ThumbUpIcon sx={{mr: 2, mt: 0}}/>
                                            <span>Unliked          {post.likes.length} </span>

                                        </Button>
                                        <Button
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                backgroundColor: "#55BFB9",
                                                fontWeight: "bold",
                                                fontSize: "14px",
                                                color: "white"
                                            }}>
                                            <CommentIcon sx={{mr: 2, mt: 0}}/>
                                            <span>Comment</span>

                                        </Button>
                                    </ButtonGroup>
                                ) : (
                                    <ButtonGroup variant="contained" fullWidth="true" color="inherit">
                                        <Button
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                backgroundColor: "#55BFB9",
                                                fontWeight: "bold",
                                                fontSize: "14px",
                                                color: "white"
                                            }}
                                            onClick={() => likeHandler(post._id)}
                                        >
                                            <ThumbUpIcon sx={{mr: 2, mt: 0}}/>
                                            <span>Like</span>

                                        </Button>
                                        <Button
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexWrap: 'wrap',
                                                backgroundColor: "#55BFB9",
                                                fontWeight: "bold",
                                                fontSize: "14px",
                                                color: "white"
                                            }}>
                                            <CommentIcon sx={{mr: 2, mt: 0}}/>
                                            <span>Comment</span>

                                        </Button>
                                    </ButtonGroup>
                                )}


                            </Box>
                        </Card>
                    </div>
                );
            })}


            <br/>

        </div>
    );
}


