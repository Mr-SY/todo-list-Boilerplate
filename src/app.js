import Header from "./components/Header";
import Homework from "./components/Homework";

function App() {
  const template = document.createElement("template");

  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${Homework()}
    </div>
  `;

  // Return a new node from template
  return template.content.cloneNode(true);
}
export default App;
