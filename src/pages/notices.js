import React, {useEffect, useState} from "react";
import axios from "axios";
import NoticeComponent from "../components/Notice/NoticeComponent";

const Notices = () => {

    const [notices,setNotices] = useState([]);


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
