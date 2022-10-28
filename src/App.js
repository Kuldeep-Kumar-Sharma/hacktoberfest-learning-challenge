import { useEffect, useState } from "react";
import "./App.css";

import DataTable from "react-data-table-component";

function App() {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Course ID",
      selector: (row) => row.courseId,
    },
    {
      name: "Course Name",
      selector: (row) => row.courseName,
    },
    {
      name: "Course Description",
      selector: (row) => row.courseDescription,
    },
    {
      name: "Course Link",
      selector: (row) => <a class="button" href={row.courseLink}> Check Out the course</a>,
    },
  ];


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
      <header className="header">Best Online Courses: </header>
      <div className="main">
        {data &&
          <DataTable
            columns={columns}
            data={data}
          />
        }
               </div>
    </div>
  );
}

export default App;
