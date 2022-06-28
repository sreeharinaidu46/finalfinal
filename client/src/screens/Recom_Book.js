import React, { useState, useEffect } from "react";
import {issueABook,getReturns,getAllIssuedBook, BookRenewByAdmin} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Toast} from "react-bootstrap"
import axios from "axios";
import { Container, Divider, Grid, Header, Icon,Input,Label,Button,Sticky,Image,Rail,Checkbox,Segment,Table } from 'semantic-ui-react'
import moment from 'moment'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Recom_Book = () => {
    const dispatch=useDispatch();
    const [renews,setRenew]=useState([]);

    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    useEffect(async() => {
        const ren=await axios.get("/api/issues/getRenews");
        
    setRenew(...renews,ren.data);

    dispatch(getAllIssuedBook());
    dispatch(getReturns());
       
      }, []);

      const { all_IssuedBook } = useSelector((state) => state.allIssuedBookReducer);
  const { all_returns } = useSelector((state) => state.returnedBookReducer);
    

//     const filterReturns =
//     all_returns.length > 0 &&
//     all_returns.filter(
//       (book) =>
//         book.createdAt>=startDate&&book.createdAt<=endDate
//     );
 
const filterBooks =
    all_IssuedBook.length > 0 &&
    all_IssuedBook.filter(
      (book) =>
      moment(endDate).format("MMM Do YY")>=moment(startDate).format("MMM Do YY")&&moment(book.createdAt).format("MMM Do YY") >=
      moment(startDate).format("MMM Do YY")&&moment(book.createdAt).format("MMM Do YY") <=
      moment(endDate).format("MMM Do YY")
    );

    const filterReturns =
    all_returns.length > 0 &&
    all_returns.filter(
      (book) =>
      moment(endDate).format("MMM Do YY")>=moment(startDate).format("MMM Do YY")&&moment(book.createdAt).format("MMM Do YY") >=
      moment(startDate).format("MMM Do YY")&&moment(book.createdAt).format("MMM Do YY") <=
      moment(endDate).format("MMM Do YY")
    );

    const filterRenews =
    renews.length > 0 &&
    renews.filter(
      (book) =>
      moment(endDate).format("MMM Do YY")>=moment(startDate).format("MMM Do YY")&&moment(book.createdAt).format("MMM Do YY") >=
      moment(startDate).format("MMM Do YY")&&moment(book.createdAt).format("MMM Do YY") <=
      moment(endDate).format("MMM Do YY")
    );

  
 
//   const filterBooks =
//     all_IssuedBook.length > 0 &&
//     all_IssuedBook.filter(
//       (book) =>{
        
// book.createdAt>=startDate&&book.createdAt<=endDate
//       }
        
//     );

//   const filterRenews=renews.length>0&&renews.filter((rene)=>{

//     if(startDate>endDate){
//         return [];
//     }
//     else{
//         return rene.createdAt>=startDate&&rene.createdAt<=endDate
//     }

//   })

//   const filterBooks =
//     all_IssuedBook.length > 0 &&
//     all_IssuedBook.filter(
//       (book) =>{
//         if(startDate>endDate){
//             return [];
//         }
//         else{
//             return book.createdAt>=startDate&&book.createdAt<=endDate
//         }
//       }
//     );



//   const filterReturns =
//     all_returns.length > 0 &&
//     all_returns.filter(
//       (book) =>{
//       if(startDate>endDate){
//         return [];
//     }
//     else{
//         return book.createdAt>=startDate&&book.createdAt<=endDate
//     }
// }
        
//     );
//     const[title,setTitle] = useState("")
//     const[author,setAuthor] = useState("")
//     const[publisher,setPublisher] = useState("")
//     const [show, setShow] = useState(false);

//     const {currentUser} = useSelector(state => state.userLoginReducer)
//     const dispatch = useDispatch()

//     const userId = currentUser.user._id ;
//    const  userBranch  =  currentUser.user.branch ;
//    const userName = currentUser.user.name ;

//     const PostData = () => {
//         const book = { title,author,publisher,userId, userBranch,userName,isRecom:true};
       
//         dispatch(issueABook(book));
//         setShow(true);
//         setAuthor("")
//         setTitle("")
//         setPublisher("")
//     };

// console.log(filterRenews)


    return (
        <div className="col-md-8 m-auto" style={{marginTop:"4%"}}>
             {/* <div className=" card col-md-7 m-auto p-5" >
             <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>You successfully Recommadation a Book</Toast.Body>
              </Toast>
                 <h3 style={{textAlign:"center",fontFamily:"Oswald",fontSize:"40px"}}>Recommadation a Book</h3>
             <div className="mb-4 mt-2">
                        <input type="text" placeholder="title"
                         onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" style={{height:"60px"}} />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="author" value={author} style={{height:"60px"}} 
                        onChange={(e) => setAuthor(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="publisher" value={publisher} style={{height:"60px"}} 
                        onChange={(e) => setPublisher(e.target.value)} className="form-control" />
                    </div>
                    <button className="btn btn-primary " onClick={() => PostData()} 
                    style={{height:"50px",fontFamily:"sans-serif",fontSize:"20px"}} >
                        Sent Request
                    </button>
             </div> */}

            <Grid>
            <Grid.Row >
            <Grid.Column width='8'>
            <div style={{display:"flex"}}>
            <h4 style={{width:"100px"}}>Start Date:</h4>
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /></div>

            </Grid.Column>
            <Grid.Column width='8'>
            <div style={{display:"flex"}}>
            <h4 style={{width:"100px"}}>End Date:</h4>
            <DatePicker
            startDate={startDate}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          /></div>

            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Table celled striped>
            <Table.Header style={{ backgroundColor: "#e0dddc" }}>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  <div syyle={{ textAlign: "center" }}>Performance Report List</div>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Books Issued</h5>
                </Table.Cell>

                <Table.Cell>
                  {all_IssuedBook.length>0 ? filterBooks.length:0}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Books Returned</h5>
                </Table.Cell>
                <Table.Cell>
                 {filterReturns.length}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ backgroundColor: "#e0dddc" }}>
                  <h5>Books Renewed</h5>
                </Table.Cell>
                <Table.Cell>
                {filterRenews.length}
                </Table.Cell>
              </Table.Row>
              
               
            </Table.Body>
          </Table>
            </Grid.Row>

            </Grid>

            <div style={{marginBottom:"700px"}}></div>


        </div>
    );
};

export default Recom_Book;