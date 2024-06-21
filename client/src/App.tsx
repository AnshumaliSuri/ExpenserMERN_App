import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { FinancialRecordsProvider } from './contexts/financial-record-context'
import "./App.css";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
function App() {

  return (
    <Router>
      <div className='app-container'>
        <div className='navbar'>
          
          <SignedIn>
          <Link to="/">Dashboard</Link>
            <UserButton showName/>
          </SignedIn>
          <SignedOut>
            <Link to='/auth'>Register</Link>
          </SignedOut>
        </div>
        <Routes>
          <Route path='/' element={
            <FinancialRecordsProvider>
              <Dashboard/>
            </FinancialRecordsProvider>
          }/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
