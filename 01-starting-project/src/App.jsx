import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreContept"
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data-with-examples";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components")
  function handleSelect(selectedButton) {
    // selectedButton => components, jsx, props, state
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} /> {/*Megjelenítés egyik módja*/}
            <CoreConcept {...CORE_CONCEPTS[1]} /> {/*Megjelenítés másik módja*/}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>PROPS</TabButton>
              <TabButton onSelect={() => handleSelect("state")}>STATE</TabButton>
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>
          </section>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
