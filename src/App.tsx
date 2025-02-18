import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';
import './index.css';

function App() {
  return (
    <header style={{ textAlign: 'center' }}>
      <SignedOut>
        <div style={{ fontSize: '4em' }}>Team hACkS!</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

export default App;
