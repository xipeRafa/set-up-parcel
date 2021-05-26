import React from 'react'
import { Buttonn } from './components/Buttonn'


function App() {
  
  return (
    <div>
      <p>Hello</p>
       <Buttonn label='Primary' primary={true} />
       <Buttonn label='Secondary' />
       <Buttonn label='Large' size='large' />
       <Buttonn data-testid="small" label='Small' size='small' /> 
    </div>
  );
}

export default App;