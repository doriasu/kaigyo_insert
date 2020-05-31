import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
interface IKaigyoProps{

}
interface IKaigyoState {
    message:string;
    num:number;
    ch_message:string;

}


class Kaigyo extends React.Component<IKaigyoProps,IKaigyoState>{
    constructor(props:IKaigyoProps) {
        super(props);

        this.state = {
            message: '',
            num:20,
            ch_message:''
        };

    }

    public render(){
        const insert_n=()=>{
            let message=this.state.message;
            let num=this.state.num;
            let ch_message="";
            let count=0;
            for(let i=0;i<message.length;i++){
                if(message[i]=='\n'){
                    count=0;
                    ch_message=ch_message+'\n';
                    continue;
                }
                if(count!=0&&count%num==0){
                    ch_message=ch_message+'\n';
                }
                count++;
                ch_message=ch_message+message[i];

            }
            this.setState({ch_message:ch_message});

        }
        const ch_insert_n=()=>{
            let message=this.state.message;
            message=message.replace(/\s+/g,"");
            let num=this.state.num;
            let ch_message="";
            let count=0;
            for(let i=0;i<message.length;i++){
                if(message[i]=='\n'){
                    continue;
                }
                if(count!=0&&count%num==0){
                    ch_message=ch_message+'\n';
                }
                count++;
                ch_message=ch_message+message[i];

            }
            this.setState({ch_message:ch_message});

        }
        const ch_insert_n_han2zen=()=>{
            let message=this.state.message;
            message=message.replace(/\s+/g,"");
            message=message.replace(/[A-Za-z0-9]/g, function(s:string) {
                return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
            });
            let num=this.state.num;
            let ch_message="";
            let count=0;
            for(let i=0;i<message.length;i++){
                if(message[i]=='\n'){
                    continue;
                }
                if(count!=0&&count%num==0){
                    ch_message=ch_message+'\n';
                }
                count++;
                ch_message=ch_message+message[i];

            }
            this.setState({ch_message:ch_message});

        }
        const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            this.setState({
                message:e.target.value,
            })
        }
        const handlenum=(e:React.ChangeEvent<HTMLInputElement>)=>{
            let x=parseInt(e.target.value);
            //console.log(x);
            if(Number.isNaN(x)){
                x=0;
            }
            this.setState({
                num:x,
            })
        }
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <TextField
                            id="outlined-textarea"
                            label="文章を入力してください"
                            multiline
                            rows="20"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={this.state.message}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2} >
                        <TextField
                            id="standard-basic"
                            label="N文字ごと"
                            placeholder="Placeholder"
                            margin="normal"
                            onChange={handlenum}
                            value={this.state.num}
                        />
                        <Button variant="contained" color="primary" style={{justifyContent:"center"}} onClick={insert_n}>
                            無視しない
                        </Button>
                        <Button variant="contained" color="primary" style={{justifyContent:"center",marginTop:"10px"}} onClick={ch_insert_n}>
                            改行,空白無視
                        </Button>

                        <Button variant="contained" color="primary" style={{justifyContent:"center",marginTop:"10px"}} onClick={ch_insert_n_han2zen}>
                            行末をそろえる
                        </Button>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id="outlined-textarea"
                            label="改行コードを挿入済"
                            multiline
                            rows="20"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={this.state.ch_message}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Kaigyo;