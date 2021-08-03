import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Nav from './Nav'
import Home from './Home';
import Recipe from './Recipe';
import Footer from './Footer'


import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#1e130c',
        },
        warning: {
            main: '#ffdd00',
        },
        type: 'dark'
    },
    typography: {
        fontFamily: 'Garamond',
        h5: {
            color: '#ffdd00',
        }
    },
    spacing: 8,

})


function Main() {
    return (
        <>
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/recipe' component={Recipe} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </ThemeProvider>
            </CssBaseline>
        </>
    )
}

export default Main;
