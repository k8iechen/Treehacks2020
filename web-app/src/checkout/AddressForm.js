import React , { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AddressForm() {
  const [startDate, setStartDate] = useState(null);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            autoComplete="fname"
          />
        </Grid>

        <Grid item xs={12}sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Male" value="yes" />}
            label="Male"
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Female" value="yes" />}
            label="Female"
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
          selected={startDate}
          onChange={setStartDate}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
