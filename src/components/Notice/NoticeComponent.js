import React from "react";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@mui/material/Typography";


const NoticeComponent = (props) =>{

    return(
        <div>



            <Card sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {props.content}
                    </Typography>

                    <Typography variant="h6" component="div">
                        {props.type}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.examdate}
                    </Typography>

                    <Typography variant="body2">
                        {props.deadline}
                        <br />

                    </Typography>

                </CardContent>

            </Card>


        </div>
    );


}
export default NoticeComponent;
