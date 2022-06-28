import React, { useState, useEffect } from "react";
import {
  getAllIssuedBook,
  getReturns,
} from "../actions/Issue_action";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  
} from "semantic-ui-react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";
const IssueRequest = () => {
  const [startDate, setStartDate] = useState(new Date());
  

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getAllIssuedBook());
    dispatch(getReturns());
  }, []);

  

  const { all_IssuedBook } = useSelector((state) => state.allIssuedBookReducer);
  const { all_returns } = useSelector((state) => state.returnedBookReducer);

  const filterReturns =
    all_returns.length > 0 &&
    all_returns.filter(
      (book) =>
        moment(book.createdAt).format("MMM Do YY") ===
        moment(startDate).format("MMM Do YY")
    );

 
  var filterBooks =
    all_IssuedBook.length > 0 &&
    all_IssuedBook.filter(
      (book) =>
        moment(book.createdAt).format("MMM Do YY") ===
        moment(startDate).format("MMM Do YY")
    );
  


  return (
    <div className="col-md-9 m-auto">
      <Grid columns={"equal"}>
        <Grid.Column width="2">
          <h4>select date:</h4>
        </Grid.Column>
        <Grid.Column>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Grid.Column>
      </Grid>
      <h3
        style={{
          padding: "5px",
          borderBottom: "1.5px solid #7eb3de",
          textAlign: "center",
        }}
      >
        Issued Books
      </h3>

      <table
        className="table table-bordered table-responsive-sm"
        style={{ marginTop: "5px" }}
      >
        <thead className="thead-dark bg-success">
          <tr>
            <th>S.No</th>
            <th>Accession No</th>
            <th>Title</th>
            <th>Author</th>
            <th>USN No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filterBooks &&
            filterBooks.map((book, index) => {
              return (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.accession_no}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.usn}</td>
                  <td>{book.Name}</td>
                  <td>{book.Branch}</td>
                  <td>{book.semester}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h3
        style={{
          padding: "5px",
          borderBottom: "1.5px solid #968887",
          textAlign: "center",
        }}
      >
        Return Books
      </h3>
      <table
        className="table table-bordered table-responsive-sm"
        style={{ marginTop: "20px" }}
      >
        <thead className="thead-dark bg-info">
          <tr>
            <th>S.No</th>
            <th>Accession No</th>
            <th>Title</th>
            <th>Author</th>
            <th>USN No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Semester</th>

          </tr>
        </thead>
        <tbody>
          {filterReturns &&
            filterReturns.map((book, index) => {
              return (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.accession_no}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.usn}</td>
                  <td>{book.Name}</td>
                  <td>{book.Branch}</td>
                  <td>{book.semester}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div style={{ marginBottom: "600px" }}></div>
    </div>
  );
};

export default IssueRequest;
