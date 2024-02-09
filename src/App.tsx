import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";
import Image from "./components/Image";

export default function App() {
  return (
    <>
      <Card>
        <div className="card">
          <Image
            srcImg="https://img.freepik.com/free-photo/bright-petals-gift-love-in-a-bouquet-generated-by-ai_188544-13370.jpg"
            width={"auto"}
            height={"auto"}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button href="#">Go somewhere</Button>
          </div>
        </div>
      </Card>
    </>
  );
}
