import React, { useState, useEffect } from "react";
import { getAllStudent, removeAStudent,filterDetails } from "../actions/user_action";
import { useDispatch, useSelector } from "react-redux";
import {Spinner} from "react-bootstrap"

const AllStudent = () => {
  const [searchKey,setSearchKey] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudent());
  }, []);
  const { students } = useSelector((state) => state.getAllStudentReducer);
  
  const filterStudent = students && students.filter((item) =>{
    
    if(item.user){
      
      if(item.user!=="Admin"){
        return true
      }
    }
    else{
      return !item.isAdmin
    }
    
    
  });
  
  return (
    <div className="col-md-9 m-auto">

      <h3 style={{ textAlign: "center" }}>Manage Student</h3>
      {    !filterStudent.length ?
           <div style={{marginLeft:"40%",marginTop:"5%"}}>
           <Spinner animation="border" variant="danger" />
           </div>:
           <>
           <div className="col-md-8 m-auto" style={{display:"flex",marginBottom:"10px"}}>
                  <input type="text"  className="form-control" placeholder="search student by USN"  style
                  ={{height:"50px"}}
                  onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
                  <button  onClick={() => dispatch(filterDetails(searchKey))} className="btn btn-primary">Search  </button>
                  </div>
            <div style={{marginBottom:"20px"}}>

            </div>
            
            <div className="col-md-12 m-auto" >
            <table
        className="table table-bordered table-responsive-sm"
        style={{ marginBottom: "400px" }}
      >
        <thead className="thead-dark bg-success">
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Enrollment No(USN)</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Join year</th>
            <th>Books Taken</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterStudent &&
            filterStudent.map((student, index) => {
              return (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.roll_no}</td>
                  <td>{student.branch}</td>
                  <td>{student.sem}</td>
                  <td>{student.addmission_year}</td>
                  <td>{student.taken}</td>
                  <td>
                    {/* <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i> */}
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeAStudent(student._id))}
                      disabled={student.taken > 0}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
           </>

      /* <table
        className="table table-bordered table-responsive-sm"
        style={{ marginBottom: "400px" }}
      >
        <thead className="thead-dark bg-success">
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Enrollment No(USN)</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Join year</th>
            <th>Books Taken</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterStudent &&
            filterStudent.map((student, index) => {
              return (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.roll_no}</td>
                  <td>{student.branch}</td>
                  <td>{student.sem}</td>
                  <td>{student.addmission_year}</td>
                  <td>{student.taken}</td>
                  <td>
                    {/* <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i> */}
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeAStudent(student._id))}
                      disabled={student.taken > 0}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })} */}
        {/* </tbody>
      </table>  */}
    </div>
  );
};

export default AllStudent;
