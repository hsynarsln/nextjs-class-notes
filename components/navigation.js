import Link from 'next/Link';
import styles from './nav.module.css';

function Navigation() {
  return (
    <nav>
      <Link href='/'>
        <a className={styles.link}>Ana sayfa</a>
      </Link>
      <Link href='/about'>
        <a style={{ color: 'pink' }}>hakkımda</a>
      </Link>
    </nav>
  );
}

export default Navigation;
