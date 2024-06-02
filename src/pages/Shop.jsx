import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import Poster from '../containers/Poster';

import { database } from '../libs/firebase';
import Tabs from '../libs/Tabs';

const Shop = () => {
  const location = useLocation();
  const [value, loading, error] = useCollection(
    collection(database, "menu"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <>
      <Navbar location={location} />
      <main>
        <Poster />
        <Tabs data={value} />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
