import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import KitchenIcon from '@material-ui/icons/Kitchen';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    button: {
        transition: "transform 0.5s ease-in-out",
        '&:hover': {
            transform: "scale3d(1.05, 1.05, 1)",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
        cursor: "none"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h2" className={classes.title} align="center">
                        <Button className={classes.button}
                            size='large'
                            color="inherit"
                            startIcon={<EmojiFoodBeverageIcon />}
                        >
                        </Button>
                    </Typography>
                    <Typography variant="h2" className={classes.title} align="center">
                        <Button className={classes.button}
                            size='large'
                            color="inherit"
                            startIcon={<KitchenIcon />}
                        >
                        </Button>
                    </Typography>
                    <Typography variant="h2" className={classes.title} align="center">
                        <Button className={classes.button}
                            size='large'
                            color="inherit"
                            startIcon={<FastfoodIcon />}
                        >
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer
