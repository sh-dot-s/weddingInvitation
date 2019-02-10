import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MapIcon from '@material-ui/icons/MapTwoTone';
import DetailsIcon from '@material-ui/icons/DetailsTwoTone';
import Landing from './Landing';
import Details from './Details';
import Maps from './Maps';
import { Fab, Button } from '@material-ui/core';
import DownArrow from '@material-ui/icons/ArrowDownwardRounded'
import Countdown from './Countdown';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    width: "100vw",
    height: "100vh",
    margin: "auto",
    position: "absolute",
  },
  background: {
    width: "100vw",
    height: "100vh",
    margin: "auto",
    position: "absolute",
    background: "url(wed1.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingBottom: "0px"
  },
  section: {
    position: "relative",
    height: "100%",
    minHeight: "100%",
    width: "100%",
    zIndex: 1,
    overflowY: "scroll",
  },
  first: {
    top: 0,
    left: 0,
    zIndex: 99,
  },
  rest: {
    paddingTop: "35vh"
  },
  fab: {
    marginLeft: `calc(50% - ${theme.spacing.unit * 7 + 1}px)`,
    marginTop: theme.spacing.unit * 5
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    selected: 'home',
    icons: {
      home: <HomeIcon />,
      details: <DetailsIcon />,
      map: <MapIcon />
    },
    blur: 1
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSelection = (key) => {
    console.log(this.refs, key)
    if (key != this.state.selected)
      this.setState({ selected: key })
  };

  blurOnScroll= (e) => {
    var s = e.target.scrollTop;
    var pixs = (s / 100);
    this.setState({blur:pixs});
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root} onScroll={this.blurOnScroll}>
        <div id="background" style={{WebkitFilter: "blur("+this.state.blur+"px)","filter": "blur("+this.state.blur+"px)" }} className={classes.background}></div>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          color="inherit"
          aria-label="Open drawer"
          onMouseEnter={this.handleDrawerOpen}
          onMouseLeave={this.handleDrawerClose}
          open={this.state.open}
        >
          <List>
            {
              ["Home", "Details", "Map"].map((k, i) => (
                <div key={i} onClick={() => {
                  const k_l = k.toLocaleLowerCase();
                  this.handleSelection(k_l);
                  this.refs[k_l].scrollIntoView({ behavior: 'smooth' });
                }}>
                  <ListItem button key={k}>
                    <ListItemIcon>{this.state.icons[k.toLocaleLowerCase()]}</ListItemIcon>
                    <ListItemText primary={k} />
                  </ListItem>
                </div>
              ))
            }
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classNames(classes.section)}>
            <div ref='home' className={classes.first}>
              <Landing />
              <Countdown/>
              <Button className={classes.fab} size="large" color="primary" variant="outlined" href={"https://www.google.com/maps/dir/?api=1&destination=B+D+Reddy+Gardens+Hyderabad+Telangana&dir_action=navigate"} target="_blank">Navigate to Venue</Button>
            </div>
            <div ref='details' className={classes.rest}>
              <Details />
            </div>
            <div ref='map' className={classes.rest}>
              <Maps />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);