import React, { useState, useEffect } from "react";
import style from "./style.module.css";

function Home() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setWordCount(text.split(" ").length);
    setCharCount(text.replace(/ /g, "").length);
  }, [text]);

  return (
    <div>
      <h1>Home</h1>
      <div className={style.principal}>
        <textarea
          id="textArea"
          placeholder="Digite seu texto aqui"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={style.result}>
          <p>Palavras: {wordCount}</p>
          <p>Caracteres: {charCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
