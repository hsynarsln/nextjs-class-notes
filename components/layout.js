import Head from 'next/head';
import Navigation from './navigation';

function Layout({ children }) {
  return (
    <div>
      <Head>
        //! sekme üzerinde yazan yazı
        <title>Hsyn'in web sitesi</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by hsyn</footer>
    </div>
  );
}

export default Layout;
