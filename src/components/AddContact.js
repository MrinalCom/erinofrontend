// AddContact.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const AddContact = ({ initialData = {}, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
    ...initialData
  });

  useEffect(() => {
    if (initialData) setFormData({ ...formData, ...initialData });
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData && initialData._id) {
        // Update existing contact
        await axios.put(`${process.env.REACT_APP_API_URL}contacts/${initialData._id}`, formData);
        onUpdate();
      } else {
        // Create new contact
        await axios.post(`${process.env.REACT_APP_API_URL}contacts`,formData);
    
      }
      setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' });
      onClose();
    } catch (err) {
      console.error("Error submitting contact:", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
      <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
      <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      <TextField label="Company" name="company" value={formData.company} onChange={handleChange} />
      <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
      <Button variant="contained" type="submit">
        {initialData && initialData._id ? 'Update Contact' : 'Add Contact'}
      </Button>
    </Box>
  );
};

export default AddContact;
