import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Review(dataToSend, {setDataToSend}) {
  const [recommendedTests, setrecommendedTests] = useState([]);
  if (recommendedTests.length === 0) {
  fetch('http://localhost:3000/', {
    method: 'OPTIONS',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    },
    body: JSON.stringify(dataToSend)
  })
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(responseData.tests);
    setrecommendedTests(responseData.tests);
  })
}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tests Recommended
      </Typography>
      <List disablePadding>
        {recommendedTests.map(test => (
          <ListItem className={test} key={test}>
            <ListItemText primary={test}  />
            <FormControlLabel control={<Checkbox color="secondary" name={test} value="yes" />} label=""/>
      </ListItem>
        ))}
      </List>

    </React.Fragment>
  );
}
