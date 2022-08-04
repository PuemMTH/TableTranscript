import './App.css';
import "./input.scss";
import React, { useState, useEffect } from "react";
import Notiflix from "notiflix";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// component
import TableModel from "./TableModel";

// or less ideally
function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true)
  const [responsedata, setResponsedata] = useState([])

  async function fetchData(txt) {
    console.log("fetching data");
    setLoading(true);
    const response = await fetch(
      `https://puem-auth.herokuapp.com/api/kutran/transcript/${txt}`
    );
    const data = await response.json();
    await setResponsedata(data);
    console.log(responsedata);
    setText("");
    setLoading(false);
    setHidden(false);
  }

  useEffect(() => {
    if (loading === true) {
      Notiflix.Loading.hourglass("Loading...");
    } else if (loading === false) {
      Notiflix.Loading.remove();
    }
  });

const LoadingHandleScreen = () => {
  return (
    <div className="form__group field">
      <input
        type="text"
        className="form__field"
        placeholder="NisitID"
        name="NisitID"
        id="name"
        value={text}
        onChange={async (e) => {
          if (e.target.value.length !== 10) {
            setText(e.target.value);
          }
          if (e.target.value.length === 10) {
            await fetchData(e.target.value);
          }
        }}
        autoFocus
        required
      />
      
      <label htmlFor="name" className="form__label">
        NisitKU
      </label>
    </div>
  );
};

const LoadingHandleShow = () => {
  return (
      <>
        <div className="m-2">
          <h1>
            {responsedata.length <= 0 ? "Server Timeout or No data\t" : "Data\t"}
            <span className="timestamp">
              {new Date().toLocaleString().split(",")[0]}
            </span>
          </h1>
          <TableModel data={responsedata} />
          <Button variant="primary" onClick={()=>{setHidden(true)}} className="btn btn-primary">
            Back
          </Button>
        </div>
      </>
  );
}

return (
    <div className="App">
      <div className="container">
        {(() => {
          if (hidden === true) {
            return <LoadingHandleScreen></LoadingHandleScreen>;
          }else {
            return <LoadingHandleShow></LoadingHandleShow>
          }
        })()}
      </div>
    </div>
  );
}

export default App;