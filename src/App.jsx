
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{fontFamily:'sans-serif', padding:'40px', background:'#F3F1E9'}}>
      <h1 style={{color:'#2A4869'}}>New Neelanchala Hospital</h1>
      <p>Healing with Heritage</p>

      <button 
        style={{padding:'10px 20px', background:'#2A4869', color:'white', border:'none', borderRadius:'10px'}}
        onClick={()=>setSubmitted(true)}
      >
        <Calendar size={16}/> Book Appointment
      </button>

      {submitted && <p style={{marginTop:'20px', color:'green'}}>Appointment Confirmed ✅</p>}
    </div>
  );
}
