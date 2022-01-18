import unfetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import slug from 'slug';
import Layout from '../components/layout';

function HomePage({ characters }) {
  // console.log(characters);
  return (
    <Layout>
      <Head>
        //! sekme üzerinde yazan yazı
        <title>Ana Sayfa</title>
      </Head>
      <h1>Welcome to Next.js!</h1>
      <ul>
        {characters.results.map(character => (
          <li key={character.id}>
            {/* //! slug route yapısında boşluk vs varsa handle ediyor. */}
            <Link href='/character/[slug]' as={`/character/${slug(character.name)}-${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
      {/* //! tüm sayfayı etkileyecek şekilde global olarak style veriyoruz. */}
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

export async function getStaticProps() {
  //! bu şekilde yptığımızda --> fetch, browser tarafında çalıştığı için algılamaz. so hem browser tarafında hem de node tarafındaki fetch'leri değiştiren bir paket yüklememiz gerekiyor. npm i isomorphic-unfetch
  const data = await unfetch('https://rickandmortyapi.com/api/character');
  const characters = await data.json();
  // console.log(characters);
  return {
    props: {
      characters
    } // will be passed to the page component as props
  };
}

export default HomePage;
