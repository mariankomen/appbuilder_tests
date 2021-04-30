import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";

import '../../assets/styles/scss/burger.css'
import style from '../../assets/styles/scss/header.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${style.main}`}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <div className="hamburger-menu">
                            <input id="menu__toggle" type="checkbox"/>
                            <label className="menu__btn" htmlFor="menu__toggle">
                                <span></span>
                            </label>
                            <ul className="menu__box">
                                <li><NavLink to='/home' activeClassName={style.active}>Home Page</NavLink></li>
                                <li><NavLink to='/first' activeClassName={style.active}>First Set</NavLink></li>
                                <li><NavLink to='/second' activeClassName={style.active}>Second Set</NavLink></li>
                                <li><NavLink to='/third' activeClassName={style.active}>Third Set</NavLink></li>
                                <li><NavLink to='/random' activeClassName={style.active}>Random Questions</NavLink></li>
                            </ul>
                        </div>
                    </IconButton>
                    <Typography variant="h6" className={`${classes.title} ${style.item}`}>
                        <NavLink to='/'>PeekLogic</NavLink>
                    </Typography>
                    <Typography variant="h5" className={`${classes.title} ${style.item}`}>
                        <NavLink to='/first' activeClassName={style.active}>First Set</NavLink>
                    </Typography>
                    <Typography variant="h5" className={`${classes.title} ${style.item}`}>
                        <NavLink to='/second' activeClassName={style.active}>Second Set</NavLink>
                    </Typography>
                    <Typography variant="h5" className={`${classes.title} ${style.item}`}>
                        <NavLink to='/third' activeClassName={style.active}>Third Set</NavLink>
                    </Typography>
                    <Typography variant="h5" className={`${classes.title} ${style.item}`}>
                        <NavLink to='/random' activeClassName={style.active}>Random Question</NavLink>
                    </Typography>

                    <Button color="inherit" className={style.login}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
