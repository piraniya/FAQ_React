import Question from "./Question";
import "./App.css";

export default function App() {
  return (
    <>
      <h1> FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}


const questions = [
  {
    id: 1,
    title: "How does the internet work?",
    info:
      "The internet is a global network of computers that communicate with each other using standardized protocols. When you access a website or send an email, your device sends data through various network infrastructure to reach its destination."
  },
  {
    id: 2,
    title: "What is artificial intelligence?",
    info:
      "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction."
  },
  {
    id: 3,
    title: "How does cryptocurrency work?",
    info:
      "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security and operates independently of a central bank. Transactions are recorded on a decentralized ledger called a blockchain, which ensures transparency and prevents double-spending."
  }
];

