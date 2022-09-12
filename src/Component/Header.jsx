import React from "react";
import { AppBar, Toolbar, styled } from '@mui/material';
import logo from "../img/logo.jpg";

const StyleHeader = styled(AppBar)`
background: #000;
`;


function Header() {
    return (
        <div>
            <StyleHeader position="static">
                <Toolbar>
                    <img src={logo} alt="logo" style={{ width: 250 }} />
                </Toolbar>
            </StyleHeader>
        </div>)
}

export default Header;