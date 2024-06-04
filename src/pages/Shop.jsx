import React from 'react';
import { Navbar, Footer } from '@components';
import { useLocation } from 'react-router-dom';
import { Poster } from '@container';
import { useFirebase } from "@hooks";
import { Tabs } from "@libs"
import useFilter from '@hooks';

const Shop = () => {
  const location = useLocation();
  const [data, loading, error] = useFirebase({ db: "list_menu" })
  useFilter()

  return (
    <>
      <Navbar location={location} />
      <main>
        <Poster />
        <Tabs data={data} />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
