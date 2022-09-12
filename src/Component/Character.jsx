import { Card, styled, Box, Typography } from "@mui/material";
import { useState } from "react";

const Imagestyle = styled('img')({
    width: "100%",
    height: 200
})


const Container = styled(Card)`
width: 200px;
margin:10px;
position:relative;
`;


const Component = styled(Box)`
position:absolute;
top: 0;
color:white;
height: 300px;
width:100%;
background:#000;
opacity:0.5;
`;







const Character = ({ value }) => {

    const [toggle, setToggle] = useState(false);

    const toggleHover = () => {
        setToggle(!toggle);
    }


    return (
        value.characterImageFull ?
            <Container onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Imagestyle src={value.characterImageFull} alt="GOT Characters" />
                {
                    toggle ?
                        <Component>
                            <Typography>Name:{value.characterName}</Typography>
                            <Typography>RealName:{value.actorName}</Typography>
                            <Typography>House:{value.houseName}</Typography>
                            <Typography>NickName:{value.nickname}</Typography>
                        </Component>
                        : ""
                }
            </Container>
            : ""
    )
}

export default Character