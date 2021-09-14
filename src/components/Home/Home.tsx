import React from 'react';

// Imports for styling
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import car_image from '../../assets/images/ryan-stone-mQhJZKRWV-Y-unsplash.jpg';
import brand_image from '../../assets/images/83150_by_car_icon.png';

import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

//...interface above

// New Make Styles Code
const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_img:{
        width: '25%',
        height: '25%'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },
    photo_credit:{
        fontSize: '6px',
        textAlign: 'right'
    }
    
})

export const Home = ( props:Props ) => {
    
    // New Classes Variable using useStyles hook
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* Nav Bar */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo}` }>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` } >
                            <img className={`${classes.logo_img}`} src={`${brand_image}`} />
                                Killer Cars
                        </a>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/profile'  className={classes.nav_a}>Profile</Link>
                        </li>
                        <li>
                            <Link to='/signin'  className={classes.nav_a}>Sign In</Link>
                        </li>
                        <li>
                            <Link to='/signup'  className={classes.nav_a}>Sign Up</Link>
                        </li>
                    </ul>

                    
                </div>
            </nav>

            {/* Main Home Area */}
            <main className={classes.main}>               
                <p className={classes.photo_credit}>
                    <a href={"https://unsplash.com/@rstone_design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Ryan Stone</a> 
                    on 
                    <a href={"https://unsplash.com/s/photos/mountain-road?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Unsplash</a>
                </p>
                <div className={classes.main_text}>
                    <h1> { props.title } </h1>
                    <p>Get on the road!</p>
                    <Button color='primary' variant='contained'>Click Here</Button>
                </div> 
            </main>
            Hello World 😉!
        </div>
    )
}