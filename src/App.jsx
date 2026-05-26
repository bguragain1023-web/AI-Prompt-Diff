import { useState } from "react";
import { fetchFromClaude, fetchKeyDifferences, callOpenAI } from "./utils/api";
import { getLength, getClarity } from "./utils/metric";
import "./App.css";
import { Compare } from "./components/Compare";
import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Input } from "./components/Input";
import { Navbar } from "./components/Navbar";
import { History } from "./components/History";

function App() {
  const [promptA, setPromptA] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [differences, setDifferences] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const canRun = promptA.trim().length > 0;

  const handleOnRun = async () => {
    setResults(null);
    setLoading(true);
    setDifferences(null);
    setMetrics(null);
    setError(null);
    try {
      const startTimeA = Date.now();
      const resultA = await fetchFromClaude(promptA);
      const speedA = Date.now() - startTimeA;

      const startTimeB = Date.now();
      const resultB = await callOpenAI(promptA);
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
      setHistory((prev) => [...prev, promptA]);
    } catch (error) {
      console.log(error);
      setError("Something Went Wrong. Please try again later");
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
          setPromptA={setPromptA}
          canRun={canRun}
          loading={loading}
          handleOnRun={handleOnRun}
        />
        <Compare results={results} error={error} />

        <Detail metrics={metrics} differences={differences} />
        <History history={history} />
        <Footer />
      </div>
    </>
  );
}

export default App;
