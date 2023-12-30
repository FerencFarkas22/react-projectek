import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreContept"
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data-with-examples";
function App() {
  const [selectedTopic, setSelectedTopic] = useState()

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
            {CORE_CONCEPTS.map((item) =>(
               <CoreConcept key={item.title} {...item} />
               ))}
            {/*
           <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} /> Megjelenítés egyik módja
            <CoreConcept {...CORE_CONCEPTS[1]} /> Megjelenítés másik módja
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          */}
          </ul>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>PROPS</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>STATE</TabButton>
            </menu>


            {/*
         {!selectedTopic ?
              <p>Please select a topic</p>
               :
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
              </div>}
        */}

            {!selectedTopic && <p>Please select a topic</p>}

            {selectedTopic && (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
              </div>
            )}



          </section>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
