import {SignedIn,SignedOut,SignInButton,SignOutButton,SignUp,SignUpButton} from '@clerk/clerk-react';
import {Navigate} from 'react-router-dom'
import '../dashboard/financial-record.css'
export const Auth=()=> {
    return (
      <div className='sign-in-container'>
        <SignedOut>
          <div className="sign-in-subcontainer">
            <h1>Welcome to Expenser!</h1>
            <div className="text-container">
              <p>Your very own Finance Manager.</p>
              <p>To start, Register first.</p>
            </div>
          </div>
          <SignUpButton mode='modal'/>
          <SignInButton mode='modal'/>
        </SignedOut>

        <SignedIn>
          <Navigate to="/"/>
        </SignedIn>
      </div>
    )
  }
  