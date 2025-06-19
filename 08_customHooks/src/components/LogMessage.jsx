import React, { useState, useEffect } from 'react';

function WelcomeMessage() {
  const [name, setName] = useState('Guest');

  useEffect(() => {
    console.log('Component mounted or name changed:', name);
  }, [name]); // Dependency array

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setName('React Developer')}>Change Name</button>
    </div>
  );
}

export default WelcomeMessage;
