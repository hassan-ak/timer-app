// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styles for AppBAr
const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        color: 'white'
    },
}));

// Footer Function
export default function Footer() {
    // const for using styles
    const classes = useStyles();
    return (
        <div>
            <React.Fragment>
                <AppBar position="fixed" color="transparent" className={classes.appBar}>
                    <Toolbar>
                        <div className={classes.grow} />
                        <Typography variant="h6" className={classes.title}>
                            by: Hassan Ali Khan
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
}