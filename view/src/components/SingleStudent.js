import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// const Students = require(".../")

const SingleStudent = () => {
  // const { username } = useParams();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  // const loggedInStudent = location.state.student;
  // console.log(location.state.student.username)
  const loggedInStudent = location.state.student;

  const handleEdit = () => {
    console.log('click')
    setToggle(!toggle)
  }
  return (
    <div>
      <h5>Hello {loggedInStudent.username}</h5>
      <div className="start_date_section">
        <h5>Your Co-op start date: {loggedInStudent.start_date}</h5>
        {toggle && <input/>}
        <button onClick={handleEdit}>Edit</button>
      </div>
      <div className="end_date_section">
        <h5>Your Co-op end date: {loggedInStudent.end_date}</h5>
      </div>
    </div>
  );
};

export default SingleStudent;
