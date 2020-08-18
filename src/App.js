import React from 'react'
import Content from './components/Content'
import { makeStyles  } from '@material-ui/core/styles';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import EditLoc from '@material-ui/icons/EditLocation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon'
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
  icon_list: {
    marginLeft: 'calc(50% - 30px)',
    marginTop: '70px',
  },
  icon_title: {
    color: grey[100],
    fontSize: '50px',
    marginLeft: 'calc(50% - 25px)',
    marginTop: '10px',
  }
}));

const App = () => {
  const classes = useStyles();
  const iconList = (
    <div>
    <List className={classes.icon_list}>
    {['perm_identity', 'group', 'shopping_cart', 'shop'].map((text, index) => (
      <ListItem button key={index}>
        <ListItemIcon>{<Icon className='material-icons' style={{color: grey[100], marginBottom: '12px'}}>{text}</Icon>}</ListItemIcon>
      </ListItem>
    ))}
    </List>
    </div>
  )
  const iconList2 = (
    <div>
    <List className={classes.icon_list}>
    {['help', 'input'].map((text, index) => (
      <ListItem button key={index}>
        <ListItemIcon>{<Icon className='material-icons' style={{color: grey[100], marginTop: '30px'}}>{text}</Icon>}</ListItemIcon>
      </ListItem>
    ))}
    </List>
    </div>
  )
  return(
    <div id="container">
    <CssBaseline/>
    <div id="content" style={{backgroundColor: 'white'}}>
      <Content/>
    </div>
    <div id="navbar" >
      <EditLoc className={classes.icon_title} />
      {iconList}
      {iconList2}
    </div>
  </div>
  )
}
  

export default App 


