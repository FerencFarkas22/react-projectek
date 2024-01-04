import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Header/Section";
import { EXAMPLES } from "../data-with-examples"
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()
  const tabContent = <>
    {!selectedTopic && <p>Please select a topic</p>}
    {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
      </div>
    )}
  </>

  function handleSelect(selectedButton) {
    // selectedButton => components, jsx, props, state
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">

      <Tabs buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>PROPS</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>STATE</TabButton>
        </>}>
        {tabContent}
      </Tabs>

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


    </Section>
  )
}