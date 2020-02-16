import React , { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function AddressForm({setDataToSend}) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [notes, setNotes] = useState('');
  const [glucose, setGlucose] = useState('');
  const [urea, setUrea] = useState('');
  const [cholestrol, setCholestrol] = useState('');
  const [sodium, setSodium] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataToSend({
      name: name,
      startDate: startDate,
      gender: gender,
      notes: notes,
      glucose:glucose,
      urea: urea,
      sodium: sodium,
      cholestrol: cholestrol
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
      <br />
      <label> Date of Birth: </label>
      <DatePicker selected={startDate} onChange={setStartDate}/>
      <br />
      <label> Gender: </label>
      <FormControlLabel control={<Checkbox color="secondary" name="Male" value="yes" onChange = {(f) => setGender(true)}/>} label="Male"/>
      <FormControlLabel control={<Checkbox color="secondary" name="Female" value="yes" onChange = {(f) => setGender(false)} />} label="Female"/>
      <br />
      <label> Notes: </label>
      <input type = "text" value={notes} required onChange = {(e) => setNotes(e.target.value)} />
      <br />
      <label> Glucose: </label>
      <input type = "number" step="any"  value={glucose} required onChange = {(e) => setGlucose(e.target.value)} />
      <br />
      <label> Urea: </label>
      <input type = "number" step="any" value={urea} required onChange = {(e) => setUrea(e.target.value)} />
      <br />
      <label> Sodium: </label>
      <input type = "number" step="any" value={sodium} required onChange = {(e) => setSodium(e.target.value)} />
      <br />
      <label> Cholestrol: </label>
      <input type = "number" step="any" value={cholestrol} required onChange = {(e) => setCholestrol(e.target.value)} />
      <br />
      <input type = "submit" value = "Submit" />
      </form>
    </React.Fragment>
  );
}
