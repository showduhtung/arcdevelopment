import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '3em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': { backgroundColor: 'transparent' },
  },
  tabContainer: { marginLeft: 'auto' },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': { backgroundColor: 'transparent' },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const tabOptions = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'The Revolution', link: '/revolution' },
    { label: 'About Us', link: '/about' },
    { label: 'Contact Us', link: '/contact' },
  ];

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) setValue(0);
    else if (window.location.pathname === '/services' && value !== 1)
      setValue(1);
    else if (window.location.pathname === '/revolution' && value !== 2)
      setValue(2);
    else if (window.location.pathname === '/about' && value !== 3) setValue(3);
    else if (window.location.pathname === '/contact' && value !== 4)
      setValue(4);
    else if (window.location.pathname === '/estimate' && value !== 5)
      setValue(5);
  }, [value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {tabOptions.map((item) => (
          <Tab
            label={item.label}
            className={classes.tab}
            component={Link}
            to={item.link}
          />
        ))}
      </Tabs>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        Example Drawer
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
