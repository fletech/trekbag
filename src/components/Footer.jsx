const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <small>&copy; {year} Copyright by Facundo.</small>
      <p>
        <a href="https://facundo.ar" target="blank">
          facundo.ar
        </a>
      </p>
    </footer>
  );
}
