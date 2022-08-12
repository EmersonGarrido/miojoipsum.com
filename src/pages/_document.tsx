import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400;500&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5309395025758950'
          ></script>
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6176815543309144'
            crossOrigin='anonymous'
          ></script>
          <ins
            className='adsbygoogle'
            style={{
              display: 'block',
            }}
            data-ad-client='ca-pub-6176815543309144'
            data-ad-slot='9927376506'
            data-ad-format='auto'
            data-full-width-responsive='true'
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
