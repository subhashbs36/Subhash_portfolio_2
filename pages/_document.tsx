import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"
            strategy="afterInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;