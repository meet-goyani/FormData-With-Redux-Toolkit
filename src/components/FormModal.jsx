import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import useForm from "../hooks/useForm";

function FormModal({ open, setOpen }) {
  const { formData, handleChange, handleSubmit, error } = useForm();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">User Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid rowSpacing={3}>
            <Grid item sx={{ my: 2 }} md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item sx={{ my: 2 }} md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item sx={{ my: 2 }} md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Date"
                variant="outlined"
                type="date"
                name="date"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={12}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <FormGroup>
                <Grid item md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="hobbies"
                        value="listening"
                        onChange={handleChange}
                        checked={formData.hobbies.includes("listening")}
                      />
                    }
                    label="Listening"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="hobbies"
                        value="reading"
                        onChange={handleChange}
                        checked={formData.hobbies.includes("reading")}
                      />
                    }
                    label="Reading"
                  />
                </Grid>
                <Grid item md={6}>
                  <FormControlLabel
                    label="Writing"
                    control={
                      <Checkbox
                        name="hobbies"
                        value="writing"
                        onChange={handleChange}
                        checked={formData.hobbies.includes("writing")}
                      />
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="hobbies"
                        value="speaking"
                        onChange={handleChange}
                        checked={formData.hobbies.includes("speaking")}
                      />
                    }
                    label="Speaking"
                  />
                </Grid>
              </FormGroup>
            </Grid>
          </Grid>
          <p>{error}</p>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default FormModal;
