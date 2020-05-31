import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class Kaigyo extends React.Component{
    public render(){
        const classes = makeStyles((theme: Theme) =>
            createStyles({
                button:{
                    justifyContent:"center",
                }

            }),
        );

        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <TextField
                            id="outlined-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                            rows="20"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            id="standard-basic"
                            label="N文字ごと"
                            placeholder="Placeholder"
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" style={{justifyContent:"center"}}>
                            Go
                        </Button>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="outlined-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                            rows="20"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Kaigyo;