import React, { useState } from 'react'
import { json, useNavigate } from 'react-router';

/*const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Australia',
  // Add more countries here...
];

const CountryDropdown = () => {
  const [userInfo,SetUserInfo] = useState({country : '',})
 // const [selectedCountry, setSelectedCountry] = useState('');
}

  const handleCountryChange = (e) => 
    setSelectedCountry(e.target.value);*/
  


export default function Registration(props) {
    const [userInfo,SetUserInfo] = useState({name : '',
    mobileNumber : 0,
    email : '',
    dob : new Date(),
    age : 0,
    address : '',
    gender : '',
    pincode : ''
    })
    const navigate = useNavigate();
    const {arr,setArr} = props;
    const submit =(eve)=> {
        eve.preventDefault();
        let dobYr = userInfo.dob.toString();
        dobYr = dobYr.substring(0,4);
        let currYr = new Date().getFullYear();
        let tempAge = Number(currYr) - Number( dobYr);
        SetUserInfo({...userInfo, age : tempAge});

     
        let temp = [...arr,userInfo];
        setArr(temp);

        alert("details added sucessfully");
      
    }

    const handleChange = (eve) => {
       
        SetUserInfo({...userInfo, [eve.target.name] : eve.target.value})
        eve.preventDefault();
     
       
    }
    const toList = ()=> {
        navigate('components/listview');
    }

    const saveGender = (eve)=> {
        SetUserInfo({...userInfo, gender : eve.target.value})
    }
  return (
    <div className='row'>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'>
         <form onSubmit={submit}>
       <h1>Registration form</h1>
     
       <div className="mb-3">
  <label for="name" className="form-label"> Enter Your Name :</label>
  <input type="text" className="form-control" id="name" value={userInfo.name} name='name' onChange={handleChange} placeholder="Enter your name here"/>
</div>
<div className="mb-3">
  <label for="mobilenumber" className="form-label">  Mobile Number:  </label>
  <input type="number" className="form-control" value={userInfo.mobileNumber} name='mobileNumber' onChange={handleChange} id="mobilenumber" />
</div>
<div className="mb-3">
  <label for="email" className="form-label">    Email Id: </label>
  <input type="email" className="form-control" value={userInfo.email}  name='email' onChange={handleChange} id="email" />
</div>
<div className="mb-3">
  <label for="date" className="form-label"> Date of Birth: </label>
  <input type="date" className="form-control" value={userInfo.dob} name='dob' onChange={handleChange} id="date" />
</div>
<div className="mb-3">
  <label for="age" className="form-label">     Age : </label>
  <input type="number" className="form-control" value={userInfo.age} disabled name='age' onChange={handleChange} id="age" />
</div>


<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio"  onChange={saveGender} name="inlineRadioOptions" id="Male" value="Male"/>
  <label className="form-check-label" for="Male">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio"  onChange={saveGender}  name="inlineRadioOptions" id="Female" value="Female"/>
  <label className="form-check-label" for="Female">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio"  onChange={saveGender}  name="inlineRadioOptions" id="Other" value="Other" />
  <label className="form-check-label" for="Other">Other</label>
</div>
<div className="mb-3">
  <label for="address" className="form-label">  Address :</label>
  <textarea className="form-control" id="address" value={userInfo.address} name='address' onChange={handleChange} rows="3"></textarea>
</div>
      {/*<label>
        Country :
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </label>
      <br/>

      <label>
        State :
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </label>
      <br/>

      <label>
        City :
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </label>
  <br/> */}
  <select class="form-select" aria-label="Default select example">
    <option selected>Country</option>
    <option value="1">India</option>
    <option value="2">USA</option>
    <option value="3">Srilanka</option>
    <option value="4">Other</option>
  </select>
  <select class="form-select" aria-label="Default select example">
    <option selected>State</option>
    <option value="1">Kerala</option>
    <option value="2">MP</option>
    <option value="3">Up</option>
    <option value="4">Other</option>
  </select>
  <select class="form-select" aria-label="Default select example">
    <option selected>City</option>
    <option value="1">Satara</option>
    <option value="2">Mumbai</option>
    <option value="3">Pune</option>
    <option value="4">Other</option>
  </select>

      <div className="mb-3">
  <label for="pincode" className="form-label"> Pin Code : </label>
  <input type="number" className="form-control" value={userInfo.pincode} name='pincode' onChange={handleChange} id="pincode" />
</div>

   { /*<div>
      <label htmlFor="country">Select a country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select a country --</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
        <p>Selected country: {selectedCountry}</p>
        </div>*/}

    <input className='m-5 btn btn-success' type='submit'></input>
    <input  className='m-5 btn btn-primary' type='button'  onClick={toList} value='view list'/>
    </form>

    </div>
    <div className='col-lg-4'></div>
    </div>
  )
}
