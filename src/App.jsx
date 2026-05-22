import { useState } from "react";
import { fetchFromClaude, fetchKeyDifferences } from "./utils/api";
import { getLength, getClarity } from "./utils/metric";
import "./App.css";
import { Compare } from "./components/Compare";
import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Input } from "./components/Input";
import { Navbar } from "./components/Navbar";

function App() {
  const [promptA, setPromptA] = useState("");
  const [promptB, setPromptB] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [differences, setDifferences] = useState(null);

  const canRun = promptA.trim().length > 0 && promptB.trim().length > 0;

  const handleOnRun = async () => {
    setLoading(true);
    try {
      const startTimeA = Date.now();
      const resultA = await fetchFromClaude(promptA);
      const speedA = Date.now() - startTimeA;

      const startTimeB = Date.now();
      const resultB = await fetchFromClaude(promptB);
      const speedB = Date.now() - startTimeB;

      const diffs = await fetchKeyDifferences(resultA.text, resultB.text);
      setDifferences(diffs);

      const metric = {
        a: {
          length: getLength(resultA.text),
          clarity: getClarity(resultA.text),
          speed: speedA,
        },
        b: {
          length: getLength(resultB.text),
          clarity: getClarity(resultB.text),
          speed: speedB,
        },
      };

      setResults({ a: resultA, b: resultB });
      setMetrics(metric);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Hero />
        <Input
          promptA={promptA}
          promptB={promptB}
          setPromptA={setPromptA}
          setPromptB={setPromptB}
          canRun={canRun}
          loading={loading}
          handleOnRun={handleOnRun}
        />
        <Compare results={results} />
        <Detail metrics={metrics} differences={differences} />
        <Footer />
      </div>
    </>
  );
}

export default App;
