import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormerPage() {
  const [values, setValues] = useState({
    username: '',
    dateofbirth: '',
    gender: '',
    phone: '',
    email: '',
    qualification: '',
    skills: [],
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;
    if (type === 'checkbox') {
      newValue = checked
        ? [...values.skills, value]
        : values.skills.filter((skill) => skill !== value);
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!values.username.trim()) newErrors.username = 'Name is required.';
    if (!values.dateofbirth) newErrors.dateofbirth = 'Date of Birth is required.';
    if (!values.gender) newErrors.gender = 'Gender is required.';
    if (!/^\d{10}$/.test(values.phone)) newErrors.phone = 'Phone number must be 10 digits.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) newErrors.email = 'Invalid email address.';
    if (!values.qualification) newErrors.qualification = 'Qualification is required.';
    if (values.skills.length === 0) newErrors.skills = 'At least one skill must be selected.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success');
    }
  };

  const resetHandler = () => {
    setValues({
      username: '',
      dateofbirth: '',
      gender: '',
      phone: '',
      email: '',
      qualification: '',
      skills: [],
    });
    setErrors({});
  };

  return (
    <div className="position-absolute w-100 bg-success bg-gradient">
      <div className="container text-center mt-3 border border-3 rounded w-50 p-5 bg-light mb-3">
        <h1 className="text-success text-decoration-underline">Registration Form</h1>

        {/* Name */}
        <div>
          <h6 className="d-inline fw-bold">Name: </h6>
          <label htmlFor="" className="w-25 mt-5">
            <input
              name="username"
              value={values.username}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </label>
          {errors.username && <p className="text-danger">{errors.username}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <h6 className="d-inline fw-bold">Date of Birth: </h6>
          <label htmlFor="" className="mt-4">
            <input
              name="dateofbirth"
              value={values.dateofbirth}
              onChange={handleChange}
              type="date"
              className="form-control"
            />
          </label>
          {errors.dateofbirth && <p className="text-danger">{errors.dateofbirth}</p>}
        </div>

        {/* Gender */}
        <div>
          <h6 className="d-inline fw-bold">Gender: </h6>
          <div className="d-inline">
            <label htmlFor="" className="me-3 mt-4 fw-bold">
              <input
                name="gender"
                value="Male"
                onChange={handleChange}
                type="radio"
                className="form-check-input"
                checked={values.gender === 'Male'}
              />{' '}
              Male
            </label>
            <label htmlFor="" className="fw-bold">
              <input
                name="gender"
                value="Female"
                onChange={handleChange}
                type="radio"
                className="form-check-input"
                checked={values.gender === 'Female'}
              />{' '}
              Female
            </label>
          </div>
          {errors.gender && <p className="text-danger">{errors.gender}</p>}
        </div>

        {/* Phone */}
        <div>
          <h6 className="d-inline fw-bold">Phone No: </h6>
          <label htmlFor="" className="w-25 mt-4">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </label>
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <h6 className="d-inline fw-bold">Email: </h6>
          <label htmlFor="" className="w-25 mt-4">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </label>
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        {/* Qualification */}
        <div>
          <h6 className="d-inline fw-bold">Qualification: </h6>
          <select
            name="qualification"
            value={values.qualification}
            onChange={handleChange}
            className="mt-4 form-select w-25 d-inline"
          >
            <option value="">Select</option>
            <option value="BCA">BCA</option>
            <option value="BSc Computer Science">BSc Computer Science</option>
            <option value="BCom">BCom</option>
            <option value="Other">Other</option>
          </select>
          {errors.qualification && <p className="text-danger">{errors.qualification}</p>}
        </div>

        {/* Skills */}
        <div>
          <h6 className="d-inline fw-bold fs-4">Skills: </h6>
          <label htmlFor="skills" className="mt-5 fw-bold ms-2 me-3">
            HTML:
            <input
              name="skills"
              value="HTML"
              onChange={handleChange}
              type="checkbox"
              className="form-check-input"
            />
          </label>
          <label htmlFor="skills1" className="me-3 fw-bold">
            CSS:
            <input
              name="skills"
              value="CSS"
              onChange={handleChange}
              type="checkbox"
              className="form-check-input"
            />
          </label>
          <label htmlFor="skills2" className="me-3 fw-bold">
            Bootstrap:
            <input
              name="skills"
              value="Bootstrap"
              onChange={handleChange}
              type="checkbox"
              className="form-check-input"
            />
          </label>
          <label htmlFor="skills3" className="me-3 fw-bold">
            JavaScript:
            <input
              name="skills"
              value="JavaScript"
              onChange={handleChange}
              type="checkbox"
              className="form-check-input"
            />
          </label>
          <label htmlFor="skills4" className="me-3 fw-bold">
            React:
            <input
              name="skills"
              value="React"
              onChange={handleChange}
              type="checkbox"
              className="form-check-input"
            />
          </label>
          {errors.skills && <p className="text-danger">{errors.skills}</p>}
        </div>

        {/* Submit and Reset Buttons */}
        <button type="submit" onClick={handleSubmit} className="btn mt-5 me-3 btn-success">
          Submit
        </button>
        <button type="button" onClick={resetHandler} className="btn mt-5 btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FormerPage;
