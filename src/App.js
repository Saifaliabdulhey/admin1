import "./App.css";
import { db } from "./firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [vin, setVin] = useState("");
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [odometer, setOdometer] = useState("");
  const [startCode, setStartCode] = useState("");
  const [key, setKey] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");
  const [lot, setLot] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [cylenders, setCylinders] = useState("");
  //images set States variables
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");
  const [img7, setImg7] = useState("");
  const [img8, setImg8] = useState("");
  const [img9, setImg9] = useState("");
  const [img10, setImg10] = useState("");
  const [img11, setImg11] = useState("");
  const [img12, setImg12] = useState("");
  const [img13, setImg13] = useState("");
  const [img14, setImg14] = useState("");
  const [img15, setImg15] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");


  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handlePrimaryChange = (e) => {
    setPrimary(e.target.value);
  };

  const handleSecondaryChange = (e) => {
    setSecondary(e.target.value);
  };
  const handleOdometerChange = (e) => {
    setOdometer(e.target.value);
  };

  const handleStartCodeChange = (e) => {
    setStartCode(e.target.value);
  };
  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };
  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };
  const handleTransmissionChange = (e) => {
    setTransmission(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleLotChange = (e) => {
    setLot(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleEngineChange = (e) => {
    setEngine(e.target.value);
  };
  const handleCylindersChange = (e) => {
    setCylinders(e.target.value);
  };
  const handleVinChange = (e) => {
    setVin(e.target.value);
  };

  //Images handle fuction parts

  const handleImge1Change = (e) => {
    setImg1(e.target.value);
  };

  const handleImge2Change = (e) => {
    setImg2(e.target.value);
  };

  const handleImge3Change = (e) => {
    setImg3(e.target.value);
  };

  const handleImge4Change = (e) => {
    setImg4(e.target.value);
  };

  const handleImge5Change = (e) => {
    setImg5(e.target.value);
  };

  const handleImge6Change = (e) => {
    setImg6(e.target.value);
  };

  const handleImge7Change = (e) => {
    setImg7(e.target.value);
  };

  const handleImge8Change = (e) => {
    setImg8(e.target.value);
  };

  const handleImge9Change = (e) => {
    setImg9(e.target.value);
  };

  const handleImge10Change = (e) => {
    setImg10(e.target.value);
  };

  const handleImge11Change = (e) => {
    setImg11(e.target.value);
  };

  const handleImge12Change = (e) => {
    setImg12(e.target.value);
  };

  const handleImge13Change = (e) => {
    setImg13(e.target.value);
  };

  const handleImge14Change = (e) => {
    setImg14(e.target.value);
  };

  const handleImge15Change = (e) => {
    setImg15(e.target.value);
  };



  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((vin) => {
          setTodos((oldArray) => [...oldArray, vin]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    set(ref(db, vin, todo, primary, secondary, odometer, startCode, key, fuelType
      , transmission, location, engine, color, lot, year, cylenders,
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
      img13, img14, img15,), {
      vin,
      todo,
      primary,
      secondary,
      odometer,
      startCode,
      key,
      fuelType,
      transmission,
      location,
      engine,
      color,
      lot,
      year,
      cylenders,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
    });

    setTodo("");
    setVin("");
    setPrimary("");
    setSecondary("");
    setOdometer("");
    setStartCode("");
    setKey("");
    setFuelType("");
    setTransmission("");
    setLocation("");
    setColor("");
    setLot("");
    setYear("");
    setEngine("");
    setCylinders("");
    setImg1("")
    setImg2("")
    setImg3("")
    setImg4("")
    setImg5("")
    setImg6("")
    setImg7("")
    setImg8("")
    setImg9("")
    setImg10("")
    setImg11("")
    setImg12("")
    setImg13("")
    setImg14("")
    setImg15("")
  };

  //update
  const handleUpdate = (vin) => {
    setIsEdit(true);
    setTempUuid(vin.vin);
    setTodo(todo.todo);
    setVin(todo.vin);
    setPrimary(todo.primary);
    setSecondary(todo.secondary);
    setOdometer(todo.odometer);
    setStartCode(todo.startCode);
    setKey(todo.key);
    setFuelType(todo.fuelType);
    setTransmission(todo.transmission);
    setLocation(todo.location);
    setColor(todo.color);
    setLot(todo.lot);
    setYear(todo.year);
    setEngine(todo.engine);
    setCylinders(todo.cylenders);
    setImg1(todo.img1)
    setImg2(todo.img2)
    setImg3(todo.img3)
    setImg4(todo.img4)
    setImg5(todo.img5)
    setImg6(todo.img6)
    setImg7(todo.img7)
    setImg8(todo.img8)
    setImg9(todo.img9)
    setImg10(todo.img10)
    setImg11(todo.img11)
    setImg12(todo.img12)
    setImg13(todo.img13)
    setImg14(todo.img14)
    setImg15(todo.img15)
  };

  const handleSubmitChange = () => {
    update(ref(db, vin, todo, primary, secondary, odometer, startCode, key, fuelType
      , transmission, location, engine, color, lot, year, cylenders,
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
      img13, img14, img15,), {
      vin,
      todo,
      primary,
      secondary,
      odometer,
      startCode,
      key,
      fuelType,
      transmission,
      location,
      engine,
      color,
      lot,
      year,
      cylenders,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
    });
    setTodo("");
    setVin("");
    setPrimary("");
    setSecondary("");
    setOdometer("");
    setStartCode("");
    setKey("");
    setFuelType("");
    setTransmission("");
    setLocation("");
    setColor("");
    setLot("");
    setYear("");
    setEngine("");
    setCylinders("");
    setImg1("")
    setImg2("")
    setImg3("")
    setImg4("")
    setImg5("")
    setImg6("")
    setImg7("")
    setImg8("")
    setImg9("")
    setImg10("")
    setImg11("")
    setImg12("")
    setImg13("")
    setImg14("")
    setImg15("")
    setIsEdit(false);

  };
  //delete
  const handleDelete = (vin) => {
    remove(ref(db, `/${vin.vin}`));
  };

  return (
    <div className="App">
      <div className='container'>
        <div className="inputs">
          <div className="input_1">
            <input placeholder='Name or model' className="field" type="text" value={todo} onChange={handleTodoChange} />
            <input placeholder='Primary damage' className="field" type="text" value={primary} onChange={handlePrimaryChange} />
            <input placeholder='Secondary damage' className="field" type="text" value={secondary} onChange={handleSecondaryChange} />
            <input placeholder='Vin' className="field" type="text" value={vin} onChange={handleVinChange} />
            <input placeholder='Year' className="field" type="text" value={year} onChange={handleYearChange} />
          </div>

          <div className="input_1">
            <input placeholder='Odometer' className="field" type="text" value={odometer} onChange={handleOdometerChange} />
            <input placeholder='Start Code' className="field" type="text" value={startCode} onChange={handleStartCodeChange} />
            <input placeholder='key' className="field" type="text" value={key} onChange={handleKeyChange} />
            <input placeholder='Fuel Type' className="field" type="text" value={fuelType} onChange={handleFuelTypeChange} />
            <input placeholder='Engine' className="field" type="text" value={engine} onChange={handleEngineChange} />
          </div>

          <div className="input_1">
            <input placeholder='Transmission' className="field" type="text" value={transmission} onChange={handleTransmissionChange} />
            <input placeholder='Location' className="field" type="text" value={location} onChange={handleLocationChange} />
            <input placeholder='Color' className="field" type="text" value={color} onChange={handleColorChange} />
            <input placeholder='Lot' className="field" type="text" value={lot} onChange={handleLotChange} />
            <input placeholder='Cylenders' className="field" type="text" value={cylenders} onChange={handleCylindersChange} />
          </div>
        </div>

        <div className="sub_container">
          <h1 className="sub-header">Add Images URLs for the car!</h1>
          <div className="img_inputs">
            <input placeholder='image 1' className="img_field" type="text" value={img1} onChange={handleImge1Change} />
            <input placeholder='image 2' className="img_field" type="text" value={img2} onChange={handleImge2Change} />
            <input placeholder='image 3' className="img_field" type="text" value={img3} onChange={handleImge3Change} />
            <input placeholder='image 4' className="img_field" type="text" value={img4} onChange={handleImge4Change} />
            <input placeholder='image 5' className="img_field" type="text" value={img5} onChange={handleImge5Change} />
            <input placeholder='image 6' className="img_field" type="text" value={img6} onChange={handleImge6Change} />
            <input placeholder='image 7' className="img_field" type="text" value={img7} onChange={handleImge7Change} />
            <input placeholder='image 8' className="img_field" type="text" value={img8} onChange={handleImge8Change} />
            <input placeholder='image 9' className="img_field" type="text" value={img9} onChange={handleImge9Change} />
            <input placeholder='image 10' className="img_field" type="text" value={img10} onChange={handleImge10Change} />
            <input placeholder='image 11' className="img_field" type="text" value={img11} onChange={handleImge11Change} />
            <input placeholder='image 12' className="img_field" type="text" value={img12} onChange={handleImge12Change} />
            <input placeholder='image 13' className="img_field" type="text" value={img13} onChange={handleImge13Change} />
            <input placeholder='image 14' className="img_field" type="text" value={img14} onChange={handleImge14Change} />
            <input placeholder='image 15' className="img_field" type="text" value={img15} onChange={handleImge15Change} />
          </div>
        </div>
      </div>

      {isEdit ? (
        <div className="edit">
          <button className="edit-btn" onClick={handleSubmitChange}>Submit Change</button>
          <button
            className="close-btn"
            onClick={() => {
              setIsEdit(false);
              setTodo("");
              setVin("");
              setPrimary("");
              setSecondary("");
              setOdometer("");
              setStartCode("");
              setKey("");
              setFuelType("");
              setTransmission("");
              setLocation("");
              setColor("");
              setLot("");
              setYear("");
              setEngine("");
              setCylinders("");
              setImg1("")
              setImg2("")
              setImg3("")
              setImg4("")
              setImg5("")
              setImg6("")
              setImg7("")
              setImg8("")
              setImg9("")
              setImg10("")
              setImg11("")
              setImg12("")
              setImg13("")
              setImg14("")
              setImg15("")
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button className="button" onClick={writeToDatabase}>Save</button>
      )}
      <div className="items_container">
        {todos.map((vin) => (
          <div className="item">
            <h1 className="item-h1">{vin.todo}</h1>
            <h3>{vin.vin}</h3>
            <div className="item_button">
              <button className="item_btn" onClick={() => handleUpdate(vin)}>Edit</button>
              <button className="item_btn" onClick={() => handleDelete(vin)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// npm install firebase
// npm install uid
