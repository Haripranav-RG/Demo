import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('male');
  const [students, setStudents] = useState([]);
  const [change, setChange] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const url = "http://localhost:8080/all";
    axios.get(url)
      .then((res) => {
        const sortedStudents = res.data.sort((a, b) => a.name.localeCompare(b.name)); // Sort students array based on name
        setStudents(sortedStudents);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, 
  [change]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!validateForm()) {
      return;
    }

   
    const data={
      'name':name,
      'dob':dob,
      'cls':selectedClass,
      'division':division,
      'gender':gender.toLocaleLowerCase(),
      
    };


    const url ="http://localhost:8080/create"
    console.log(data);
    axios.post(url,data)
    .then((res) => {
        console.log(res);
        setChange(!change)
      })
    .catch((err) => {
            console.log("Error",err.message);
          });


    // Clear the form fields
    setName('');
    setDob('');
    setSelectedClass('');
    setDivision('');
    setGender('');
    setErrorMessage('');
  };

  

 
  const validateForm = () => {
    if (!name || !dob || !selectedClass || !division || !gender) {
      setErrorMessage('Please fill in all fields');
      return false;
    }

    if (!name.match(/^[A-Za-z\s]+$/)) {
      setErrorMessage('Name should only contain letters and spaces');
      return false;
    }

    setErrorMessage('');
    return true;
  };


 

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <h2>Student From</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text"className="form-control"
                value={name}
                onChange={handleNameChange}
                pattern="[A-Za-z\s]+"
                title="Only letters and space are allowed"
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                value={dob}
                onChange={handleDobChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Class</label>
              <select
                className="form-control"
                value={selectedClass}
                onChange={handleClassChange}
                required
              >
                <option value="">Select</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="V1">VI</option>
                <option value="V11">VII</option>
                <option value="V111">VIII</option>
                <option value="1X">IX</option>
                <option value="X">X</option>
                <option value="X11">XI</option>
                <option value="X12">XII</option>
              </select>
            </div>
            <div className="form-group">
              <label>Division</label>
              <select
                className="form-control"
                value={division}
                onChange={handleDivisionChange}
                required
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleGenderChange}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
          </form>
        </div>
        <div className="col-md-6">
          <h2 className='s1'>Students Data</h2>
         
          <table className="table table-striped-columns mt-3 ">
            <thead>
              <tr>
                <th>Admission Number</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Class</th>
                <th>Division</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.admn}>
                  <th>{student.admn}</th>
                  <td>{student.name}</td>
                  <td>{student.dob}</td>
                  <td>{student.cls}</td>
                  <td>{student.division}</td>
                  <td>{student.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;