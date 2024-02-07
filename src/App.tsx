import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";
import Image from "./components/Image";

export default function App() {
  {
    /* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
*/
  }

  return (
    <>
      <Card>
        <div className="card">
          <Image srcImg="https://ibb.co/j6n80pR" />
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
