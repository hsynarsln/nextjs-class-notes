import unfetch from 'isomorphic-unfetch';
import Head from 'next/head';
import slug from 'slug';
import Layout from '../../components/layout';

function CharacterDetails({ character }) {
  // console.log(character);
  return (
    <Layout>
      <Head>
        <title>{character.name}</title>
      </Head>
      <h1>{character.name}</h1>

      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/');
  const characters = await data.json();
  const paths = characters.results.map(character => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } };
  });

  return {
    paths,
    fallback: false //! oluşturmadığın bir route geldiğinde nasıl davranıyım?
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0];
  //! bu şekilde yptığımızda --> fetch, browser tarafında çalıştığı için algılamaz. so hem browser tarafında hem de node tarafındaki fetch'leri değiştiren bir paket yüklememiz gerekiyor. npm i isomorphic-unfetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id);
  const character = await data.json();
  // console.log(characters);
  return {
    props: {
      character
    } // will be passed to the page component as props
  };
}

export default CharacterDetails;
