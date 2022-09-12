import { Box, Grid } from "@mui/material";
import Character from "./Character";
import { data } from '../Constants/data';


const Characters = () => {
    return (
        <Box style={{margin: '10px 10px'}}>
            <Grid container>
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