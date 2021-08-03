import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 273,
        backgroundPosition: 'top'
    },

    card: {
        border: '1px solid #1e130c',
        backgroundColor: '#fff',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    header: {
        marginTop: 10,
        color: theme.palette.secondary.main,
    }
}));

function Recipe({ title, mealType, image, ingredients, }) {
    const classes = useStyles();


    return (
        <>
            <Card elevation={15} className={classes.card}>
                    <Typography variant='h5' gutterBottom className={classes.header}>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='secondary' gutterBottom>
                        Meal Type: {mealType}
                    </Typography>
                    
                {/* <CardMedia className={classes.media} */}
                <img src={image} alt="food" height='300px' width='520px' />
                {/* /> */}
                <CardContent align='center' justify='center'>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li className={classes.header}>{ingredient.text}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}

export default Recipe;
