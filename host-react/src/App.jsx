import { useEffect, useState } from "react";
import "./App.css";
import register from "remoteVue/wc/register";

register();

function App() {
  const [count, setCount] = useState(0);

  const increment = (e) => setCount(e.detail.count);

  useEffect(() => {
    document.addEventListener("INCREMENT", increment);

    return () => document.removeEventListener("INCREMENT", increment);
  }, []);

  return (
    <>
      <h1>React Container {count}</h1>
      <remote-vue-counter text="Hello from React"></remote-vue-counter>
    </>
  );
}

export default App;
