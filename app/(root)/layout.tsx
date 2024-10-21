import React from 'react';
import Sidebar from '@/components/Sidebar';

const HomeLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   const loggedIn = { firstName: 'Deepanshu', lastName: 'Mehra' };
   return (
      <main className="flex h-screen w-full font-inter">
         <Sidebar user={loggedIn} />
         {children}
      </main>
   );
};

export default HomeLayout;
