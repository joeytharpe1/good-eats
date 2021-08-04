import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { makeStyles } from '@material-ui/core/styles';
import {APP_ID, APP_KEY} from './config';

import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    container: {
        marginTop: 50,
        marginBottom: 20,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.warning.main,
        }
    }
}));

function Home() {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chocolate')

    useEffect(() => {
        getRecipes();

        // eslint-disable-next-line
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <Container>
            <Grid container spacing={2} align="center" justify="center" className={classes.container} onSubmit={getSearch}>
                <Grid item xs={12}>
                    <Paper component="form" elevation={15} className={classes.root}>
                        <InputBase
                            onChange={updateSearch}
                            className={classes.input}
                            placeholder="Search Recipes"
                            value={search}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container align='center' justify='center' spacing={2} className={classes.container}>
                {recipes.map((recipe, index) => (
                    <Grid key={index} item xs={12} md={4}>
                        <Recipe title={recipe.recipe.label} mealType={recipe.recipe.mealType} image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                        />
                    </Grid>
                ))};
            </Grid>
        </Container>

    )
}

export default Home
