// Import React's useState hook
import { useState } from 'react';
import {Button } from 'src/components/ui/button.tsx'


// Array of facts
const facts = [
  'My first linux rice is just some random dotfiles I found on the internet',
  'Fact 2',
  'Fact 3',
  // Add more facts here...
];

function Fact() {
  // State to hold the current fact
  const [fact, setFact] = useState('One Random Fact about me here');

  // Function to handle button click
  const handleClick = () => {
    // Select a random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // Update the state with the new fact
    setFact(randomFact);
  };

  return (
    <div className="svgcont px-2 py-2 w-[100%] h-[100%] ">
        <style>
            {`
                .svgcont{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    text-align:center;
                    width:100%;
                    height:100%;
                    background-color:var(--foreground);
                    color:var(--background);
                    border-radius:0.5em;
                    padding:1em;
                    margin-top:2.7em;
                }

                #svgbtn{
                    margin:0.5em 1em;
                    border:1px solid var(--background);
                }
                
            `}
        </style>
      <p id="svgtext">{fact}</p>
      <Button id="svgbtn" variant="outline" onClick={handleClick}>Show me another fact</Button>
    </div>
  );
}
export default Fact;