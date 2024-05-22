import React, { useState } from 'react';
import Form1 from '../Components/Formp1'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form2 from '../Components/Formp2';
import Form3 from '../Components/Formp3';
import Form4 from '../Components/Formp4';
import Form5 from '../Components/Formp5';
import Form6 from '../Components/Formp6';
import Form7 from '../Components/Formp7';
import Form8 from '../Components/Formp8';

function Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      page1: '',
      propertyType: '',
      offPlanDate: null,
      sellDate: null,
      buyDate: null,
      property: '',
      bedrooms: '',
      maidRoom: '',
      swimmingPool: '',
      area: '',
      minPrice: '',
      maxPrice: '',
      flexiblePrice: ''
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => {
    setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

const handleSubmit = () => {
    console.log('Final form data:', formData);
    // Perform final form submission or processing here
  };

  return (
    <div>
      {step === 1 && <Form1 formData={formData} handleChange={handleChange} next={next} />}
      {step === 2 && <Form2 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {step === 3 && <Form3 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {step === 4 && <Form4 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {step === 5 && <Form5 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {step === 6 && <Form6 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {step === 7 && <Form7 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {step === 8 && <Form8 formData={formData} handleChange={handleChange} next={handleSubmit} prev={prev} />}
      <ToastContainer />
    </div>
  );
}

export default Form;
