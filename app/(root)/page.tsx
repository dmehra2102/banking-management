import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
   const loggedIn = {
      firstName: 'Deepanshu',
      lastName: 'Mehra',
      email: 'deepanshumehra2102@gmail.com',
   };
   return (
      <section className="home">
         <div className="home-content">
            <header className="home-header">
               <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || 'Guest'}
                  subtext="Access and manage your account and transactions efficiently."
               />
               <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1254}
               />
            </header>
         </div>
      </section>
   );
};

export default Home;
