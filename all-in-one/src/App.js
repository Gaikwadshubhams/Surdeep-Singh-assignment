import "./App.css";
import { Route, Routes } from "react-router-dom";
import EventForm from "./page/EventForm";
import JobForm from "./page/JobForm";
import SurveyForm from "./page/SurveyForm";
import Heder from "./page/Heder";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Heder />} /> */}
        <Route path="/" element={<EventForm />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/surveyform" element={<SurveyForm />} />
      </Routes>
    </div>
  );
}

export default App;
