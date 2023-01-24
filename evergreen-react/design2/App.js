import { Heading, Pane, TrashIcon, StarIcon } from "evergreen-ui";

import "./App.css";

function App() {
  return (
    <Pane className="login">
      <Pane className="heading">
        <Heading>My Wishlist(7)</Heading>
      </Pane>
      <Pane className="bottom-line-one"></Pane>
      <Pane>
        <img className="image-first" src="buds.webp" alt="buds" />
      </Pane>
      <Heading className="text-one">realme Buds Q Bluetooth Headset</Heading>
      <Pane className="ratings-one">
        <Pane className="number-one">4</Pane>
        <Pane className="star-one">
          <StarIcon size={9} color={"white"} />
        </Pane>

        <Heading className="rate-one">(1,45,174)</Heading>
      </Pane>
      <Pane></Pane>
      <Pane className="rate-two">$ 1,999</Pane>
      <Pane className="rate-three">$ 2,499</Pane>
      <Pane className="rate-four">20% off</Pane>
      <Pane className="delete-icon-one">
        <TrashIcon />
      </Pane>
      <Pane className="bottom-line-two"></Pane>
      <Pane>
        <img className="image-first" src="bude one.jpg" alt="buds" />
      </Pane>
      <Pane className="bg-col">
        <Pane className="img-text">
          Currently
          <br /> unavailable
        </Pane>
      </Pane>
      <Heading className="text-one">
        realme Buds Air Neo Bluetooth Headset
      </Heading>
      <Pane className="ratings-two">
        <Pane className="number-one">3.8</Pane>
        <Pane className="star-two">
          <StarIcon size={9} color={"white"} />
        </Pane>

        <Heading className="rate-one">(88,532)</Heading>
      </Pane>
      <Pane></Pane>
      <Pane className="rate-two">$ 2,499</Pane>
      <Pane className="rate-three">$ 3,999</Pane>
      <Pane className="rate-four">37% off</Pane>
      <Pane className="delete-icon-one">
        <TrashIcon />
      </Pane>
      <Pane className="bottom-line-two"></Pane>
      <Pane>
        <img className="image-first" src="realme.webp" alt="buds" />
      </Pane>
      <Pane className="bg-col">
        <Pane className="img-text">
          Currently <br></br>unavailable
        </Pane>
      </Pane>
      <Heading className="text-two">realme Buds Q Bluetooth Headset</Heading>
      <Pane className="ratings-one">
        <Pane className="number-one">4</Pane>
        <Pane className="star-one">
          <StarIcon size={9} color={"white"} />
        </Pane>

        <Heading className="rate-one">(1,45,174)</Heading>
        <Pane>
          <img className="assured-first" src="assured.jpg" alt="assured" />
        </Pane>
      </Pane>

      <Pane className="rate-two">$ 1,999</Pane>
      <Pane className="rate-three">$ 2,499</Pane>
      <Pane className="rate-four">20% off </Pane>
      <Pane className="delete-icon-one">
        <TrashIcon />
      </Pane>
      <Pane className="bottom-line-two"></Pane>
      <Pane>
        <img className="image-first" src="realme.webp" alt="buds" />
      </Pane>

      <Heading className="text-one">
        realme Buds Q2 Neo with Environment Noise Cancellation(ENC) Bluetooth
        Headset
      </Heading>
      <Pane className="ratings-one">
        <Pane className="number-one">4</Pane>
        <Pane className="star-one">
          <StarIcon size={9} color={"white"} />
        </Pane>

        <Heading className="rate-one">(1,41,367)</Heading>
        <Pane>
          <img className="assured-two" src="assured.jpg" alt="assured" />
        </Pane>
      </Pane>
      <Pane></Pane>
      <Pane className="rate-two">$ 1,599</Pane>
      <Pane className="rate-three">$ 2,499</Pane>
      <Pane className="rate-four">36% off</Pane>
      <Pane className="delete-icon-one">
        <TrashIcon />
      </Pane>
    </Pane>
  );
}

export default App;
