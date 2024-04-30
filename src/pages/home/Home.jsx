import React, { useContext } from 'react';
import Layout from '../../Component/Layout/Layout';
import MyContext from '../../Context/MyContext';

function Home() {
  const context = useContext(MyContext);
  console.log(context);

  const { name } = context || {};
  console.log("Name", name);

  return (
    <Layout>
      <h1> Name : {name}</h1>
    </Layout>
  );
}

export default Home;
