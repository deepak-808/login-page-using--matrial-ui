import React from 'react'
import {createStyles,withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import user from './user.png'
import {styles} from './style'



class Login extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
  
       }
      }
      render(){
          var classes   = this.props.classes;
        return(
          <div>
              <div>
              <Paper className={classes.main}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.ppr}>
                            <Paper style={{backgroundImage:`url(${user})`}}elevation={3}/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{textAlign:"center"}} variant="h4" gutterBottom>
                            User Login
                        </Typography>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon />
                            </Grid>
                            <Grid item>
                                <TextField style={{width:"300px"}} id="input-with-icon-grid" label="Email Id" />
                            </Grid>
                            </Grid>
                        </div>
                        <div className={classes.margin1}>
                            <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LockIcon />
                            </Grid>
                            <Grid item>
                                <TextField style={{width:"300px"}} id="input-with-icon-grid" label="Password" />
                            </Grid>
                            </Grid>
                        </div>
                        <Button style={{marginLeft:"40px",width:"70px",marginTop:"20px"}}variant="contained" color="primary">
                            Login
                        </Button>
                        <InstagramIcon style={{marginLeft:"40px",marginTop:"20px"}} color="secondary"/>
                    </Grid>
                </Grid>
              </Paper>

              </div>
              </div> 
        )}
    }
    export default withStyles(styles)(Login);
