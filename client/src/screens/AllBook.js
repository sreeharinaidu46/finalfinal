// import React,{useState,useEffect} from 'react';
// import {getAllBook,filterBook} from "../actions/book_action"
// import {issueABook,getAllIssuedBook} from "../actions/Issue_action"
// import { useDispatch, useSelector } from 'react-redux'
// import {Toast,Spinner} from "react-bootstrap"
// const AllBook = () => {
//     const dispatch = useDispatch() ;
//     const [searchKey,setSearchKey] = useState("")
//     const [show, setShow] = useState(false);
//     const[bootTitle,setBookTitle] = useState(null)
//    const[error,setError] = useState(false)

//     useEffect(()=> {
//         dispatch(getAllBook())
//         dispatch(getAllIssuedBook())
//     },[show])
//    const {books} = useSelector(state => state.getAllBookReducer)
//    //const {userbooks} = useSelector(state => state.userIssuedBookReducer)
//    const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)
//    const {currentUser} = useSelector(state => state.userLoginReducer)

//    const userId = currentUser.user._id ;
//   const  userBranch  =  currentUser.user.branch ;
//   const userName = currentUser.user.name ;

//      let sendReq = true

//     let filterBooks = all_IssuedBook && all_IssuedBook.filter(book=> book.userId == userId);

//     let newBooksId = filterBooks && filterBooks.map(book=> book.bookId)

//     const postData = (book)=>{

//         if(newBooksId && newBooksId.includes(book._id)){
//             console.log("You can not add one more book")
//             setError(true);
//             setTimeout(()=>{
//               setError(false)
//             },3000)
//             return ;
//         }

//         if(book.copies < 1){
//             console.log("No copies available")
//             return;

//         }
//         const {title,author,publisher,year,_id,copies} = book ;

//         const issueUser = {
//             title,author,publisher,year,userId,bookId:_id,userBranch,userName,copies
//         }
//         if(book.copies){
//             dispatch(issueABook(issueUser))
//             setBookTitle(title)
//             setShow(true) ;
//             dispatch(getAllBook())
//         } else {
//             alert("book not available")
//         }
//         setTimeout(()=>{
//             setShow(false)
//         }, 5000)
//         //
//     }

//     return (
//         <div>
//                <div className="col-md-8 m-auto" >
//                   <h3 className='text-center bg-info p-2' style={{fontFamily:"sans-serif",}}>All AVAILABLE BOOKS IN LIBARY</h3>
//                   <br />
//                   <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
//                  <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>You successfully send issue request for {bootTitle}  </Toast.Body>
//                   </Toast>

//             </div>

//             {error && <div className="alert alert-danger"> You have already request for this book </div>}

//            {    !books.length ?
//            <div style={{marginLeft:"40%",marginTop:"5%"}}>
//            <Spinner animation="border" variant="danger" />
//            </div>

//            : (
//                <>
//                   <div className="col-md-7 m-auto" style={{display:"flex"}}>
//                   <input type="text"  className="form-control" placeholder="search book by Name"  style
//                   ={{height:"50px"}}
//                   onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
//                   <button  onClick={() => dispatch(filterBook(searchKey))} className="btn btn-primary">Search  </button>
//                   </div>

//                   <div className="col-md-7 m-auto">

//                   <table  className='table table-bordered table-responsive-sm' style={{marginTop:"20px"}}>

//       <thead className='thead-dark' >
//           <tr>
//               <th>Serial No.</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>Copies</th>
//               <th>Status</th>
//               <th>Actions</th>
//           </tr>
//       </thead>
//       <tbody>
//       {books && books.map((book,index)=>{

//           return <tr key={book._id}>
//                   <td>{index+1}</td>
//               <td>{book.title}</td>
//               <td>
//                   {book.author}
//               </td>
//               <td>{book.copies}</td>
//               <td>{book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</td>
//               <td>

//                   {currentUser.user.isAdmin && (
//                       <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i>
//                   )}
//                   {!currentUser.user.isAdmin && (
//                       <button onClick={() => postData(book)} className={`btn btn-success`}>Request</button>
//                   )}

//               </td>

//           </tr>

//       })}
//       </tbody>

//       </table>
//       </div>
//       </>
//            )}
//         </div>
//     );
// };

// export default AllBook;

import React, { useState, useEffect } from "react";
import { getAllBook, filterBook } from "../actions/book_action";
import { issueABook, getAllIssuedBook } from "../actions/Issue_action";
import { useDispatch, useSelector } from "react-redux";
import { Toast, Spinner } from "react-bootstrap";
import Select from "react-select";
import {
  Grid,
  Input,
  Segment,
  Card,
  Image,
  Icon,
  GridColumn,
  Table,
  Label,
  Dropdown,
} from "semantic-ui-react";
const AllBook = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [show, setShow] = useState(false);
  const [bootTitle, setBookTitle] = useState(null);
  const [error, setError] = useState(false);

  const [alpha, setAlpha] = useState("");

  const [filterBook, setBook] = useState([]);

  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    dispatch(getAllBook());
    // dispatch(getAllIssuedBook());
  }, [show]);
  const { books } = useSelector((state) => state.getAllBookReducer);

  //const { all_IssuedBook } = useSelector((state) => state.allIssuedBookReducer);
  // const { currentUser } = useSelector((state) => state.userLoginReducer);

  // const userId = currentUser.user._id;
  // const userBranch = currentUser.user.branch;
  // const userName = currentUser.user.name;

  const countryOptions = [
    { key: "A", value: "A", text: "A" },
    { key: "B", value: "B", text: "B" },
    { key: "C", value: "C", text: "C" },
    { key: "D", value: "D", text: "D" },
    { key: "E", value: "E", text: "E" },
    { key: "F", value: "F", text: "F" },
    { key: "G", value: "G", text: "G" },
    { key: "H", value: "H", text: "H" },
    { key: "I", value: "I", text: "I" },
    { key: "J", value: "J", text: "J" },
    { key: "K", value: "K", text: "K" },
    { key: "L", value: "L", text: "L" },
    { key: "M", value: "M", text: "M" },
    { key: "N", value: "N", text: "N" },
    { key: "O", value: "O", text: "O" },
    { key: "P", value: "P", text: "P" },
    { key: "Q", value: "Q", text: "Q" },
    { key: "R", value: "S", text: "S" },
    { key: "S", value: "S", text: "S" },
    { key: "T", value: "T", text: "T" },
    { key: "U", value: "U", text: "U" },
    { key: "V", value: "V", text: "V" },
    { key: "W", value: "W", text: "W" },
    { key: "X", value: "X", text: "X" },
    { key: "Y", value: "Y", text: "Y" },
    { key: "Z", value: "Z", text: "Z" },
  ];

  const handleData = (e, data) => {
    
    let filterBooks =
      books && books.filter((book) => book.title.startsWith(data.value));
    
    setBook(filterBooks);
    setBookDetails({});
  };

  if (Object.keys(bookDetails).length > 0) {
  }
  // const individualBookHandler=(data)=>{
  //   setBookDetails(data);
  // }

  // let sendReq = true;

  // let newBooksId = filterBooks && filterBooks.map((book) => book.bookId);

  // const postData = (book)=>{

  //     if(newBooksId && newBooksId.includes(book._id)){
  //         console.log("You can not add one more book")
  //         setError(true);
  //         setTimeout(()=>{
  //           setError(false)
  //         },3000)
  //         return ;
  //     }

  //     if(book.copies < 1){
  //         console.log("No copies available")
  //         return;

  //     }
  //     const {title,author,publisher,year,_id,copies} = book ;

  //     const issueUser = {
  //         title,author,publisher,year,userId,bookId:_id,userBranch,userName,copies
  //     }
  //     if(book.copies){
  //         dispatch(issueABook(issueUser))
  //         setBookTitle(title)
  //         setShow(true) ;
  //         dispatch(getAllBook())
  //     } else {
  //         alert("book not available")
  //     }
  //     setTimeout(()=>{
  //         setShow(false)
  //     }, 5000)
  //     //
  // }

  return (
    <div>
      <div className="col-md-8 m-auto">
        <h3
          className="text-center bg-info p-2"
          style={{ fontFamily: "sans-serif" }}
        >
          All AVAILABLE BOOKS IN LIBARY
        </h3>
        <br />
      </div>

      <Grid columns="equal" stackable>
        <Grid.Column width={11}>
          {books.length > 0 && (
            <>
              {/* <div className="col-md-8 m-auto" style={{display:"flex"}}>
                  <input type="text"  className="form-control" placeholder="search book by Name"  style
                  ={{height:"50px"}}
                  onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
                  <button  onClick={() => dispatch(filterBook(searchKey))} className="btn btn-primary">Search  </button>
                  </div> */}

              <div style={{ marginLeft: "180px" }}>
                <div style={{ display: "flex" }}>
                  <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "9px",
                      borderRadius: "4px",
                    }}
                  >
                    Alphabet
                  </label>

                  <Dropdown
                    placeholder="Select..."
                    fluid
                    search
                    selection
                    options={countryOptions}
                    onChange={handleData}
                  />
                </div>
                <table
                  className="table table-bordered table-responsive-sm"
                  style={{ marginTop: "20px" }}
                >
                  <thead className="thead-dark">
                    <tr>
                      <th>Serial No.</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Copies</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterBook.length > 0 &&
                      filterBook.map((book, index) => {
                        return (
                          <tr
                            key={book._id}
                            onClick={() => setBookDetails(book)}
                            style={{ cursor: "pointer" }}
                          >
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.copies}</td>
                            <td>
                              {book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </Grid.Column>
        <Grid.Column>
          <Table celled striped>
            <Table.Header style={{ backgroundColor: "#e0dddc" }}>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  <div syyle={{ textAlign: "center" }}>Book Deatils</div>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Authors</h5>
                </Table.Cell>

                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.author}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Subject</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.subject}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Call No</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.call_no}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Language</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.language}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Publisher</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.publisher}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Published Year</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.year}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>No of copies</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && bookDetails.copies}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Item type</h5>
                </Table.Cell>
                <Table.Cell>
                  {Object.keys(bookDetails).length > 0 && "Book"}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
      <div style={{marginBottom:"400px"}}></div>
    </div>
  );
};

export default AllBook;
