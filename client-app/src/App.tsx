import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Header, List, ListItem } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(respose => {
        setActivities(respose.data);
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='reactivitis'/>
      <List>        
          {activities.map((activity: any) => (
            <ListItem key={activity.id}> {activity.title} </ListItem>
          ))}
        </List>      
    </div>
  );
}

export default App;
