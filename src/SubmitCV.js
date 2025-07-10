import React, { useState } from 'react';
import './App.css';

function SubmitCV() {
  const [form, setForm] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    profile: '',
    file: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.jobTitle.trim()) newErrors.jobTitle = 'Job Title is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!form.address.trim()) newErrors.address = 'Address is required.';
    if (!form.profile.trim()) newErrors.profile = 'Brief Profile is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Optionally: send data to backend or email API here
  };

  if (submitted) {
    return <div className="cv-success">Thank you! Your application has been received.</div>;
  }

  return (
    <div className="submit-cv-page">
      <h2 className="submit-cv-title">Submit Your CV</h2>
      <form className="submit-cv-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name<span>*</span></label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title<span>*</span></label>
          <input type="text" id="jobTitle" name="jobTitle" value={form.jobTitle} onChange={handleChange} required />
          {errors.jobTitle && <div className="form-error">{errors.jobTitle}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span>*</span></label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone<span>*</span></label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address<span>*</span></label>
          <textarea id="address" name="address" value={form.address} onChange={handleChange} required rows={2} />
          {errors.address && <div className="form-error">{errors.address}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="profile">Brief Profile<span>*</span></label>
          <textarea id="profile" name="profile" value={form.profile} onChange={handleChange} required rows={3} />
          {errors.profile && <div className="form-error">{errors.profile}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload CV (optional)</label>
          <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} />
        </div>
        <button className="submit-cv-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitCV;
