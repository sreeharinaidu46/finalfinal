import React, { useEffect } from "react";
// import {getAllIssuedBook,getEveryDayBook} from "../actions/Issue_action"
// import { useDispatch, useSelector } from 'react-redux'
// import moment from 'moment';
import { useState } from "react";
import { Grid, Segment, Card, Image, Icon, GridColumn } from "semantic-ui-react";

const axios = require("axios");

const Issue_Return = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [avg, setAvg] = useState([]);
  const [givenMonths, setMonths] = useState([]);
  const [frenBook, setFreqBook] = useState([]);

  //     const dispatch = useDispatch();
  useEffect(async () => {
    const ret = await axios.get("/api/issues/getAvgDay");
    console.log(ret.data);
    setAvg(...avg, ret.data);

    const ren = await axios.get("/api/issues/avgMonths");
    setMonths(...givenMonths, ren.data);

    const rens = await axios.get("/api/issues/freqBook");
    setFreqBook(...frenBook, rens.data);
  }, []);
//const filterStudent = students && students.filter((item) => !item.isAdmin);
  const filterAvg=avg&&avg.filter((data)=>data.countss>0)
 

  // console.log(avg);
  // console.log(givenMonths);
  // console.log(frenBook);
  // if(givenMonths.length>0){
  //   console.log(months[givenMonths[0].month]);
  // }

  //     //const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)
  //     const {allCounts} = useSelector(state => state.getEveryDayBookReducer)
  //     //console.log(all_IssuedBook);
  //     //var filterd;
  //     // const filterOut = ()=>{
  //     //     const todayDate = moment(new Date()).format('YYYY-MM-DD');
  //     //     //console.log(todayDate)
  //     //      //filterd = all_IssuedBook && all_IssuedBook.filter(item =>  (item.updatedAt.slice(0,10) == todayDate))
  //     //      console.log(allCounts);
  //     // }

  //     // filterOut()
  //     return (
  //         <div className="col-md-10 m-auto pt-4">
  //         {!allCounts && allCounts.length>0  ? <>
  //         <div className="bg-success p-2 text-center">
  //         <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Yet No booked Issued& Returned</h4>
  //         </div>

  //         </> :
  //         <>
  //           <h4 style={{textAlign:"center",fontFamily:"sans-serif"}}>Total Issued & Returned Books</h4>
  //           <table  className='table table-bordered table-responsive-sm'>

  // <thead className='thead-dark bg-info'>
  //   <tr>
  //       <th style={{textAlign:"center"}}>Date</th>
  //       <th style={{textAlign:"center"}}>Issued Books</th>
  //       <th style={{textAlign:"center"}}>Received Books</th>
  //       {/* <th style={{textAlign:"center"}}>Student Name</th>
  //       <th style={{textAlign:"center"}}>Branch</th> */}
  //   </tr>
  // </thead>
  // <tbody>

  // {allCounts && allCounts.map(book=>{

  //  return <tr key={book._id}>
  //       <td style={{textAlign:"center"}}>{book.date}</td>
  //       <td style={{textAlign:"center"}}>
  //           {book.issued}
  //       </td >
  //       <td style={{textAlign:"center"}}>
  //           {book.returned}
  //       </td>

  //       {/* <td style={{textAlign:"center"}}>
  //          {book.userName}
  //       </td>
  //       <td style={{textAlign:"center"}}>
  //          {book.userBranch}
  //       </td> */}

  //   </tr>

  // })}
  // </tbody>

  // </table>

  //      </> }
  //       </div>

  return (
    <div className="col-md-9 m-auto">
      {/* {avg && <h4>Average Return date:{avg.average}</h4>}
{givenMonths.length>0 && <h4>Most Books Requested Month :{months[givenMonths[0].month]}  Year:{givenMonths[0].year}</h4>}
{frenBook.length>0 && <h4>Most Issued Book:{frenBook[0].title}</h4>} */}

      <Grid stackable columns={3}>
        {/* <Grid.Column width='7'> */}
          {/* <Segment>
      <Card fluid color='red' header='Student Average Book Return Time' />

      <Card>
    <Image src='https://i.pinimg.com/originals/90/79/ea/9079ea8bf74c63d2c7eb97975359ee62.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{avg && <h4 style={{textAlign:"center"}}>{avg.average} days</h4>}</Card.Header>
  
      
    </Card.Content>
    
  </Card>
     
      </Segment> */}
          {/* <table className="table table-bordered table-responsive-sm">
            <thead className="thead-dark bg-info">
              <tr>
                <th style={{ textAlign: "center" }}>Title</th>
                <th style={{ textAlign: "center" }}>Author</th>
                <th style={{ textAlign: "center" }}>Average</th>
              </tr>
            </thead>
            <tbody>
              {avg &&
                avg.map((book) => {
                  return (
                    <tr key={book._id}>
                      <td style={{ textAlign: "center" }}>{book.title}</td>
                      <td style={{ textAlign: "center" }}>{book.author}</td>
                      <td style={{ textAlign: "center" }}>{book.average}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table> */}
        {/* </Grid.Column> */}
        <Grid.Column>
          <Segment>
            <Card  color="green" header="Most Frequently Issued Book" className="border_overcome"/>
            <Card>
              <Image
                src="https://lamarlibrary.colibraries.org/wp-content/uploads/sites/26/2016/10/Books-HD-Wallpaper-pictures-hd-620x349.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                  {frenBook.length > 0 && frenBook[0].title}
                </Card.Header>

                <Card.Description>
                  written By : {frenBook.length > 0 && frenBook[0].author}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {frenBook.length > 0 && frenBook[0].publisher}
                </a>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Card
              fluid
              color="blue"
              header="Most Books Issued Month(Peak Month)"
            />
            <Card style={{height:"100px !important"}}>
              <Image
                src="data:image/jpeg;base64,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"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                {givenMonths.length > 0 && (
              <h4 style={{ textAlign: "center",marginBottom:"1px" }}>
                {months[givenMonths[0].month]} {givenMonths[0].year}
              </h4>
            )}
                </Card.Header>

                {/* <Card.Description>
                  written By : {frenBook.length > 0 && frenBook[0].author}
                </Card.Description> */}
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  @AmcLibrary
                </a>
              </Card.Content>
            </Card>
            
          </Segment>
        </Grid.Column>
        
      </Grid>
      <h3 style={{padding:"5px",borderBottom:"1.5px solid #435c70",textAlign:"center"}}>Students Average Book Return Time</h3>
      <Grid >
        <Grid.Column width='equal'>
        {/* <Card fluid color='red' header='Student Average Book Return Time For each user returned book' /> */}

        
        <table className="table table-bordered table-responsive-sm">
            <thead className="thead-dark bg-info">
              <tr>
              <th style={{ textAlign: "center" }}>S.No</th>
              <th style={{ textAlign: "center" }}>Accession No</th>
                <th style={{ textAlign: "center" }}>Title</th>
                <th style={{ textAlign: "center" }}>Author</th>
                <th style={{ textAlign: "center" }}>Publisher</th>
                <th style={{ textAlign: "center" }}>Average Return Days</th>
                <th style={{ textAlign: "center" }}>No. Of Students Returned</th>
                <th style={{ textAlign: "center" }}>No. Of Students Taken</th>
              </tr>
            </thead>
            <tbody>
              {filterAvg &&
                filterAvg.map((book,index) => {
                  return (
                    
                    <tr key={book._id}>
                    <td style={{ textAlign: "center" }}>{index+1}</td>
                    <td style={{ textAlign: "center" }}>{book.accession_no}</td>
                      <td style={{ textAlign: "center" }}>{book.title}</td>
                      <td style={{ textAlign: "center" }}>{book.author}</td>
                      <td style={{ textAlign: "center" }}>{book.publisher}</td>
                      <td style={{ textAlign: "center" }}>{Math.round(book.average/book.countss)}</td>
                      <td style={{ textAlign: "center" }}>{book.countss}</td>
                      <td style={{ textAlign: "center" }}>{book.takenBooks}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Grid.Column>
      </Grid>

      
      <div style={{ marginBottom: "200px" }}></div>
    </div>
  );
};

export default Issue_Return;
