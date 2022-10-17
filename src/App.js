import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("./data.json").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setData(data.data);
      });
    });
  }, []);

  return (
    <div className="container">
      <header className="header">Learning Sources</header>
      <div className="main">
        {data &&
          data.map((course) => (
            <div class="col card">
              <div class="row">
                <b>Course Id: </b>
                <i> {course.courseId}</i>
              </div>
              <div class="row">
                <b>Course Name: </b>
                <i> {course.courseName}</i>
              </div>
              <div class="row">
                <b>Course Description: </b>
                <i> {course.courseDescription}</i>
              </div>
              <div class="row">
                <b>Course Link: </b>
                <a href={course.courseLink}> Check Out the course</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
