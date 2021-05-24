import React from 'react'
import { Button } from './components/Button'


function App() {
  
  return (
    <div>
      <p>Hello</p>
       <Button label='Primary' primary={true} />
       <Button label='Secondary' />
       <Button label='Large' size='large' />
       <Button data-testid="small" label='Small' size='small' /> 
    </div>
  );
}

export default App;