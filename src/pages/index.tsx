import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { loremIpsum } from "lorem-ipsum";
import Head from 'next/head'

import { miojoQuotes } from 'lib/quotes'

const Home: NextPage = () => {
  const [lorem, setLorem] = useState("");


  function handleGerateText() {
    const isLorem = loremIpsum({
      count: 1,                // Number of "words", "sentences", or "paragraphs"
      format: "plain",         // "plain" or "html"
      paragraphLowerBound: 1,  // Min. number of sentences per paragraph.
      paragraphUpperBound: 1,  // Max. number of sentences per paragarph.
      random: Math.random,     // A PRNG function
      // sentenceLowerBound: 1,   // Min. number of words per sentence.
      // sentenceUpperBound: paragarph,  // Max. number of words per sentence.
      suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
      units: "paragraph",      // paragraph(s), "sentence(s)", or "word(s)"
      words: miojoQuotes      // Array of words to draw from
    });
    setLorem(isLorem)
  }

  useEffect(() => {
    const isLorem = loremIpsum({
      count: 1,                // Number of "words", "sentences", or "paragraphs"
      format: "plain",         // "plain" or "html"
      paragraphLowerBound: 1,  // Min. number of sentences per paragraph.
      paragraphUpperBound: 1,  // Max. number of sentences per paragarph.
      random: Math.random,     // A PRNG function
      // sentenceLowerBound: 1,   // Min. number of words per sentence.
      // sentenceUpperBound: paragarph,  // Max. number of words per sentence.
      suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
      units: "paragraph",      // paragraph(s), "sentence(s)", or "word(s)"
      words: miojoQuotes      // Array of words to draw from
    });
    setLorem(isLorem)
  }, [])
  return (
    <div className="bg-[#8EC1D4] p-5">
      <Head>
        <title>Miojo Ipsum - O primeiro gerador de Lorem Ipsum aprovado pelo MEC</title>
        <meta name="description" content="O gerador de textos do enem - miojo ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-4 justify-center items-center md:mb-[200px] md:mt-[150px]">
        <img src="/logo.png" />

        <div className="flex flex-col justify-center items-center"><h1 className="text-[#415160] text-center text-2xl font-bold mb-5">Precisa de um texto mais rápido que um miojo?</h1>
          <button onClick={() => handleGerateText()} className="bg-[#e57373] hover:bg-[#e57373]/80 border-0 p-2 pl-4 pr-4 text-2xl rounded-md text-white">Gerar novo texto</button></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="md:w-[500px] w-full md:h-[500px] bg-white p-4">
            <h2 className="text-[#5274B4] text-4xl font-bold">Melhore seus trabalhos com a redaçāo nota 560 do Enem.</h2>
            <span className="text-[#5274B4] text-xl ">Agora você pode incrementar redações, trabalhos escolares e ate mesmo monografias com um texto aprovado pelo Ministério da Educação</span>
          </div>
          <div className="md:w-[500px] w-full mt-5 md:mt-0 h-[500px] text-lg bg-white p-4 text-[#5274B4]">
            {lorem}
          </div>
        </div>

        <div>Outro projeto feito em 5 minutos por <a href="https://www.linkedin.com/in/emersongarrido/">Emerson Garrido</a></div>

      </main>

    </div>
  )
}

export default Home
