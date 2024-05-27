import React, { useState } from 'react';
import './Userhome.css';

function Userhome() {
    const userimage='';
    const username=localStorage.getItem('fullName');
    const email=localStorage.getItem('email');
    const [File,setFile]=useState(null);
    const [preview,setPreview]=useState(userimage? `http://localhost:4000/${userimage}`:`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`)

    const onFileChange=(e)=>{
      setFile(e.target.files[0]);
    }

    const onFileUpload=async(e)=>{
         e.preventDefault();
         const formData= new FormData();
         formData.append('photo',File);
         const response= await axios.post('http://localhost:4000/upload',{
          method:'POST',
          body:formData
         });
         if(response.ok){
          const data=await response.json();
          localStorage.setItem('photo',data.file);
         }
    }

  return (
    <div className="card">
      <img className="profile-pic" src={preview} alt="Profile" />
       <form className="upload-form" onSubmit={onFileUpload}>
          <input type="file" onChange={onFileChange} className="file-input" />
          <button type="submit" className="upload-button">Upload New Photo</button>
      </form>
      <h2>{username}</h2>
      <p>{email}</p>

    </div>
  );
}

export default Userhome