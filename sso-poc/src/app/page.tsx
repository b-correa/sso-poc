'use client'
import { NextPageWithLayout } from './types/page';
import { Role } from './enums/roles';
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);


  if(status === 'loading') {
    return <>Loading...</>
  }

  if(status === 'unauthenticated') {
    router.replace('/signin');
  }

  return (
    <div>
      <p>Home</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
