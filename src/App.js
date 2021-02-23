import React from "react";
import "./styles.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UserForm";

export default function App() {
  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <section className="counter-container">
        <CounterOne />
        <CounterTwo />
      </section>
      <section className="form-container">
        <UserForm />
      </section>
    </div>
  );
}
