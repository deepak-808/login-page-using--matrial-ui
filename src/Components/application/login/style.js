import {createStyles,withStyles} from '@material-ui/core/styles';
import user from './user.png'

export const styles = function(theme){

    return createStyles({
        main: {
            height:"400px",
            margin:"150px"
        },
        user:{
            backgroundImage: `url(${user})`,
        },
        ppr: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
              marginLeft:"80px",
              marginTop:"80px",
              margin: theme.spacing(2),
              width: theme.spacing(25),
              height: theme.spacing(25),
              backgroundColor:"lightgrey",
            },
          },
          margin: {
            margin: theme.spacing(1),
            marginTop:"40px",
            marginLeft:"40px",
          },
          margin1:{
              margin:theme.spacing(1),
              marginLeft:"40px",
          },
          textField: {
            width: "300px",
          },
        
    })
}