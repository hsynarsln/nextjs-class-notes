import Head from 'next/head';
import Layout from '../components/layout';

function HomePage() {
  return (
    <Layout>
      <Head>
        //! sekme üzerinde yazan yazı
        <title>Ana Sayfa</title>
      </Head>
      <h1>Welcome to Next.js!</h1>
      <style jsx>{`
        h1 {
          color: blue;
          background: red;
        }
        @media (max-width: 600px) {
          h1 {
            background: blue;
            color: white;
          }
        }
      `}</style>
      //! tüm sayfayı etkileyecek şekilde global olarak style veeriyoruz.
      <style global jsx>{`
        body {
          background-color: grey;
        }
        html {
          color: deepskyblue;
        }
      `}</style>
    </Layout>
  );
}

export default HomePage;
