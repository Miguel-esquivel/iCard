import React from 'react';

export function Error404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Página no encontrada</h2>
      <p style={styles.text}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>

      <a href="/" style={styles.button}>
        Volver al inicio
      </a>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #4d6df8, #a24b5e)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  code: {
    fontSize: '100px',
    margin: '0',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '28px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    maxWidth: '400px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#020003',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};