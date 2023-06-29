import "./FirstComponentStle.css";
export default function MyFirstComponent() {
  const person = {
    name: "Maroua",
    email: "pingucoder@gmail.com",
  };

  const elemStyle = {};

  return (
    <div>
      <div>
        <h1
          style={{
            backgroundColor: "cyan",
            fontSize: "20px",
            boxShadow: "0px 20px 10px",
          }}
        >
          {person.name}{" "}
        </h1>
        <h3 className={"active blBg"}>{person.email}</h3>
        <h2 className={"active"} style={elemStyle}>
          {" "}
          Hey
        </h2>
        <button onClick={saySalem}>Click me</button>
      </div>
      <h1 className={person.name == "Samar" ? "blred" : "greenBg"}>
        Check Name
      </h1>
      <div></div>
    </div>
  );
}

function saySalem() {
  return "Salam";
}
