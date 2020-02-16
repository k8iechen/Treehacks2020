import React , { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AddressForm({setDataToSend}) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [notes, setNotes] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataToSend({
      name: name,
      startDate: startDate,
      gender: gender,
      notes: notes,
    });
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Patient Details
      </Typography>
      <form onSubmit = {handleSubmit}>
      <label> Name: </label>
      <input type = "text" value={name} required onChange = {(e) => setName(e.target.value)} />
      <label> Date of Birth: </label>
      <DatePicker selected={startDate} onChange={setStartDate}/>
      <label> Gender: </label>
      <FormControlLabel control={<Checkbox color="secondary" name="Male" value="yes" onChange = {(f) => setGender(true)}/>} label="Male"/>
      <FormControlLabel control={<Checkbox color="secondary" name="Female" value="yes" onChange = {(f) => setGender(false)} />} label="Female"/>
      <label> Notes: </label>
      <input type = "text" value={notes} required onChange = {(e) => setNotes(e.target.value)} />
      <input type = "submit" value = "Submit" />
      </form>
    </React.Fragment>
  );
}
