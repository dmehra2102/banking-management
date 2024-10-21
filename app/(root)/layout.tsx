import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';

const HomeLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   const loggedIn = { firstName: 'Deepanshu', lastName: 'Mehra' };
   return (
      <main className="flex h-screen w-full font-inter">
         <Sidebar user={loggedIn} />
         <div className="flex size-full flex-col">
            <div className="root-layout">
               <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
               <div>
                  <MobileNav user={loggedIn} />
               </div>
            </div>
            {children}
         </div>
      </main>
   );
};

export default HomeLayout;
