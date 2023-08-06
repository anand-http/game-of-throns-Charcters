import { Box, Grid } from "@mui/material";
import Character from "./Character";
import { data } from '../Constants/data';


const Characters = () => {
    return (
        <Box >
            <Grid container style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {
                    data.characters.map(value => (
                        <Grid item>
                        <Character value={value} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Characters;