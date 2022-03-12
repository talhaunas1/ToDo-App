import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {
    const [flag, setflag] = useState(false)
    return (
        <div className={flag ? 'sidebar' : 'remove'} >
            <button onClick={()=>setflag(false)}>Close</button>
        </div>
    );
};

export default Sidebar; 