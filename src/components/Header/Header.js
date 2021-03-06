import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faTruckMoving,
  faHome,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart,
  faTruckMoving,
  faHome,
  faUpload);

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: '#FFF',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
  awesome: {
    marginLeft: 3,
  },
};

function Header(props) {
  const { classes } = props;
  // if (window.location.pathname === '/') return null;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'linear-gradient(to right, #1CB5E0, #3f51b5, #1CB5E0)' }}>
        <Toolbar>
          <Tooltip title="homepage" TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <Link to="/" className={classes.link} >
            <FontAwesomeIcon icon="home" className={classes.awesome}/>
            </Link>
          </IconButton>
          </Tooltip>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link className={classes.link} to="trucks">
            Trucks <FontAwesomeIcon icon="truck-moving" className={classes.awesome} />
            </Link>
          </Typography>
          <Tooltip title="favorite trucks" TransitionComponent={Fade} TransitionProps={{ timeout: 2000 }}>
          <Button color="inherit">
              <Link to="favorites" className={classes.link}>
              Favorites <FontAwesomeIcon icon="heart" className={classes.awesome}/></Link></Button></Tooltip>
              <Tooltip title="upload your trucks">
              <Button color="inherit">
              <Link to="#" className={classes.link}>
              Upload Truck <FontAwesomeIcon icon="upload" className={classes.awesome}/></Link></Button></Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
