import { useEffect, useState } from "react";
import "./App.css";

const data = [
  "https://cdn.mos.cms.futurecdn.net/kLrVvdXcJtrADurP9abxRZ-1200-80.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/colalge-style-image-featuring-pikachu-skitty-and-mew-from-pokemon.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/3/2023/03/Ash-Ketchum-84942f4-e1692110010777.jpg?quality=90&resize=537,358",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUR_lojnQyNcYeCxu2x7c9odPz1_38gow5a4xtRtauCtx1Nipg0ufHznBBK2n_v03KxM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriHs7JzGmj4wndP51hdG15M_4g9t5WwlYH9D8LTFV1hlO5_fCUBHTmr1B-XbforK-YR0&usqp=CAU",
  "https://actu.m6.fr/wp-content/uploads/2024/05/pokemon-M6-1024x536.jpg",
  "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/147C0/production/_132740938_indeximage.jpg",
  "https://cdn.mos.cms.futurecdn.net/kLrVvdXcJtrADurP9abxRZ-1200-80.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/3/2024/05/How-many-Pokemon-are-there-6434211.jpg",
];
function App() {
  const [currIndex, setCurrIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          handleNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const handleLeft = () => {
    setCurrIndex((val) => (val === 0 ? data.length - 1 : val - 1));
  };
  const handleNext = () => {
    setCurrIndex((val) => (val === data.length - 1 ? 0 : currIndex + 1));
  };

  return (
    <div className="main">
      <div className="container">
        <button onClick={handleLeft}>&#10094;</button>
        <div className="image-container">
          <img src={data[currIndex]} alt={`data ${currIndex + 1}`} />
        </div>
        <button onClick={handleNext}>&#10095;</button>
      </div>
      <div className="progress-indicator">
        {data.map((_, index) => (
          <span
            key={index}
            className={index === currIndex ? "active" : ""}
          ></span>
        ))}
      </div>
      <div className="info">
        <h1>ReactJS Slider</h1>
        <h2>Features</h2>
        <ul>
          <li>
            <p>Autoplay</p>
          </li>
          <li>
            <p>Next and Previous Buttons</p>
          </li>
          <li>
            <p>Select a desired slide</p>
          </li>
        </ul>
        <h3>Made by rem029</h3>
      </div>
    </div>
  );
}

export default App;
