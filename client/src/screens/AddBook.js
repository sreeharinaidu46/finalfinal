// import React, { useState } from "react";
// import {addOneBook} from "../actions/book_action"
// import { useDispatch } from 'react-redux'
// import {Toast} from "react-bootstrap"

// const AddBook = () => {
//     const[accession_no,setAccession] = useState("")
//     const[call_no,setCallNo] = useState("")
//     const[title,setTitle] = useState("")
//     const[author,setAuthor] = useState("")
//     const[publisher,setPublisher] = useState("")
//     const[year,setYear] = useState("")
//     const[copies,setCopies] = useState(null)
//     const [show, setShow] = useState(false);
//     const [correct,isCorrect]=useState(false);

//     const dispatch = useDispatch()

//       const PostData = () => {

//         if(title==""||author===""||publisher===""||year===""||copies===null||copies==='e'||accession_no===""||call_no===""){
//             isCorrect(true)
//         }
//         else{
//             const book = { accession_no,call_no,title,author,publisher,year,copies };
        
//         dispatch(addOneBook(book));
//         setShow(true)
//         setAccession("")
//         setCallNo("")
//         setTitle("")
//         setAuthor("")
//         setPublisher("")
//         setCopies(null)
//         setYear("")

//         }
        
//     };
//     return (
//         <div  className=" mt-5">
             

//              <div className="card col-md-6 m-auto p-3" >
//              <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
//                  <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>One Book Added</Toast.Body>
//               </Toast>
//               <Toast onClose={() => isCorrect(false)} show={correct} delay={3000} autohide>
//                  <Toast.Body style={{backgroundColor:"red",color:"white",fontSize:"18px"}}>All fields are required</Toast.Body>
//               </Toast>
//                    <h2 style={{textAlign:"center",marginBottom:"20px"}}>Add a New Book</h2>
//                    <div className="mb-3">
//                         <input type="text" placeholder="Accession No" style={{height:"60px"}}
//                          onChange={(e) => setAccession(e.target.value)} value={accession_no} className="form-control" />
//                     </div>
//                     <div className="mb-2">
//                         <input type="text" placeholder="Call No" value={call_no}  style={{height:"60px"}}
//                         onChange={(e) => setCallNo(e.target.value)} className="form-control" />
//                     </div>
//                     <div className="mb-3">
//                         <input type="text" placeholder="Book title" style={{height:"60px"}}
//                          onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
//                     </div>
//                     <div className="mb-2">
//                         <input type="text" placeholder="Author name" value={author}  style={{height:"60px"}}
//                         onChange={(e) => setAuthor(e.target.value)} className="form-control" />
//                     </div>
//                     <div className="mb-2">
//                         <input type="text" placeholder="Publisher" value={publisher}  style={{height:"60px"}}
//                         onChange={(e) => setPublisher(e.target.value)} className="form-control" />
//                     </div>
//                     <div className="mb-2">
//                         <input type="text" placeholder="Year" value={year} style={{height:"60px"}}
//                          onChange={(e) => setYear(e.target.value)} className="form-control" />
//                     </div>
//                     <div className="mb-2">
//                         <input type="number"
//                          placeholder=" Number of Copies"  style={{height:"60px"}}
//                          value={copies} onChange={(e) => setCopies(e.target.value)} className="form-control" min="1"/>
//                     </div>
                   


//                     <button className="btn btn-primary " onClick={() => PostData()}>
//                         Add Book
//                     </button>

//                 </div>
//                 <div style={{marginBottom:"100px"}}> </div>
//         </div>
//     );
// };

// export default AddBook;



import React,{useState,useEffect} from 'react'
import { Container, Divider, Grid, Header, Icon,Input,Label,Button,Sticky,Image,Rail,Checkbox,Segment } from 'semantic-ui-react'
import { filterBook, getOneBook,addOneBook,modifyAllBooks,modifyOneBokk } from "../actions/book_action";
import { useDispatch, useSelector } from "react-redux";
import { object } from 'yup';
// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const AddBook = () => {
  const dispatch = useDispatch();
  const [access_no, setAcess] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [class_No, setClassNo] = useState("");
  const [call_no, setCallNo] = useState("");
  const [publisher, setPublisher] = useState("");
  const [vendor, setVendor] = useState("");
  const [source, setSource] = useState("");
  const [price, setPrice] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [bill_no, setBillNo] = useState("");
  const [category, setCatogory] = useState("");
  const [pages, setPages] = useState("");
  const [copies,setCopies]=useState(null)
  const [avail_copies,setAailCopies]=useState(null)
  const [bools,setBools]=useState(false);


  

  const { bookItem } = useSelector((state) => state.getOneBookReducer);


   
  

  const readBookDetails = (data) => {

    
    
    if(data===""){
      dispatch(getOneBook(""));
      setAcess("");
      setTitle("");
      setAuthor("");
      setBillNo("");
      setCatogory("");
      setClassNo("");
      setDepartment("");
      setLanguage("");
      setYear("");
      setPages("");
      setPrice("");
      setSubject("");
      setVendor("");
      setSource("");
      setPublisher("");
      setCallNo("");
      setCopies(0);
      setAailCopies("")
      return;

    }


    
   
    
    dispatch(getOneBook(data));
    

    // const { bookItem } = useSelector((state) => state.getOneBookReducer);

    

    

    if(Object.keys(bookItem).length>0){
      setTitle(bookItem.title);
      setAuthor(bookItem.author);
      setBillNo(bookItem.bill_no);
      setCatogory(bookItem.category);
      setClassNo(bookItem.class_no);
      setDepartment(bookItem.department);
      setLanguage(bookItem.language);
      setYear(bookItem.year);
      setPages(bookItem.pages);
      setPrice(bookItem.price);
      setSubject(bookItem.subject);
      setVendor(bookItem.vendor);
      setSource(bookItem.source);
      setPublisher(bookItem.publisher);
      setCallNo(bookItem.call_no);
      setCopies(bookItem.copies)
      setAailCopies(bookItem.avial_copies)
      dispatch(getOneBook(access_no));
    
     
    }
    else{

      setTitle("");
      setAuthor("");
      setBillNo("");
      setCatogory("");
      setClassNo("");
      setDepartment("");
      setLanguage("");
      setYear("");
      setPages("");
      setPrice("");
      setSubject("");
      setVendor("");
      setSource("");
      setPublisher("");
      setCallNo("");
      setCopies(0)
      

    }

    
    
    
  };

  const addBookHandler=()=>{

    const newBook={title:title,author:author,publisher:publisher,call_no:call_no,copies:parseInt(copies),year:year,subject:subject,pages:pages,language:language,vendor:vendor,source:source,department:department,bill_no:bill_no,category:category,price:price}

    dispatch(addOneBook(newBook));
    readBookDetails("")

  }

  const modifyOneBookHandler=()=>{
    const newBook={accession_no:bookItem.accession_no,title:title,author:author,publisher:publisher,call_no:call_no,copies:parseInt(copies),year:year,subject:subject,pages:pages,language:language,vendor:vendor,source:source,department:department,bill_no:bill_no,category:category,price:price}
    dispatch(modifyOneBokk(newBook))
    readBookDetails("")
  }

 const modifyToAllCopies=()=>{
  const newBook={title:title,author:author,publisher:publisher,call_no:call_no,copies:parseInt(copies),year:year,subject:subject,pages:pages,language:language,vendor:vendor,source:source,department:department,bill_no:bill_no,category:category,price:price}
  dispatch(modifyAllBooks(newBook))
  readBookDetails("")
 }
  
return(
  <div className="col-md-11 m-auto" >
<p style={{textAlign:"center",fontWeight:"bold"}}>No of copies-{Object.keys(bookItem).length>0&&bookItem.avial_copies}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Available-{Object.keys(bookItem).length>0&&bookItem.copies}</p>
<Grid>
  <Grid.Column width='8'><div className="col-md-7 m-auto" style={{display:"flex"}}>
  <button style={{width:"150px",backgroundColor:"#e0dddc"}} type='button' className="btn">Accn No</button>
                  <input type="text"  className="form-control" placeholder="Accession No...."  style
                  ={{height:"50px"}}
                  value={access_no}
                  onChange={(e) => setAcess(e.target.value)}  />
                  <button  onClick={()=>readBookDetails(access_no)} className="btn btn-primary">Search  </button>
                  </div></Grid.Column>

</Grid>
   <div className="col-md-10 m-auto" style={{fontSize:"1.3rem",padding:"15px",textDecoration:"underline",textDecorationColor:"#267ba6",color:"#267ba6"}}>
   Catalogue Details
   </div>
   <Grid style={{marginLeft:"100px"}}>
    <Grid.Row>
    <Grid.Column width={8}>
    <Input fluid label='Title*' placeholder='Please enter title...' style={{marginBottom:"10px"}} value={title} onChange={(e)=>setTitle(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
    
      <Input fluid label='Author(s)*' placeholder='Please Enter Author..' style={{marginBottom:"10px"}} value={author} onChange={(e)=>setAuthor(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
      
      <Grid columns='equal'>
        <Grid.Column>
        <Input fluid label='Copies*' type='number' style={{marginBottom:"10px"}} value={copies} onChange={(e)=>setCopies(parseInt(e.target.value))} disabled={Object.keys(bookItem).length>0}/>
        </Grid.Column>
        <Grid.Column>
        <Input fluid label='Call No' type='number'  style={{marginBottom:"10px"}} value={call_no} onChange={(e)=>setCallNo(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
        </Grid.Column>
      </Grid>
      <Input fluid label='Publisher' style={{marginBottom:"10px"}} value={publisher} onChange={(e)=>setPublisher(e.target.value)}/>
      </Grid.Column>
      <Grid.Column width={8}>
      <Input fluid label='Subject'  style={{marginBottom:"10px"}} value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      <Input fluid label='Year' type='number' placeholder='ex:2020' style={{marginBottom:"10px"}} value={year} onChange={(e)=>setYear(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
      <Input fluid label='Language'  style={{marginBottom:"10px"}} value={language} onChange={(e)=>setLanguage(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
      </Grid.Column>
    </Grid.Row>

    <div  style={{fontSize:"1.3rem",textDecoration:"underline",textDecorationColor:"#267ba6",color:"#267ba6"}}>
   Copy Details
   </div>

    <Grid.Row>
      <Grid.Column width={8}>
      <Input fluid label='Vendor'  style={{marginBottom:"10px"}} value={vendor} onChange={(e)=>setVendor(e.target.value)} />
      <Input fluid label='Source'  style={{marginBottom:"10px"}} value={source} onChange={(e)=>setSource(e.target.value)}/>
      
      
      <Input fluid label='Department*'  style={{marginBottom:"10px"}} value={department} onChange={(e)=>setDepartment(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
      </Grid.Column>
      <Grid.Column width={8}>
      
<Input fluid label='Bill_No'  style={{marginBottom:"10px"}} value={bill_no} onChange={(e)=>setBillNo(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
<Input fluid label='Category'  style={{marginBottom:"10px"}} value={category} onChange={(e)=>setCatogory(e.target.value)}/>
<Grid columns='equal'>
        <Grid.Column>
        <Input  fluid label='Pages' placeholder='ex:100..' style={{marginBottom:"10px"}} value={pages} onChange={(e)=>setPages(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
        </Grid.Column>
        <Grid.Column>
        <Input type='number' fluid label='Price'  style={{marginBottom:"10px"}} value={price} onChange={(e)=>setPrice(e.target.value)} disabled={Object.keys(bookItem).length>0}/>
        </Grid.Column>
      </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <div className="col-md-10 m-auto">
  
                <Sticky >
                  
                  <Button style={{backgroundColor:"#2e9957"}}  icon labelPosition='left' disabled={Object.keys(bookItem).length>0} onClick={addBookHandler}>
      <Icon name='add'  />
      Add
    </Button>
    <Button icon style={{backgroundColor:"#21acc4"}}  labelPosition='left' disabled={!Object.keys(bookItem).length>0} onClick={modifyOneBookHandler}>
      Modify
      <Icon name='edit' />
    </Button>
    <Button style={{backgroundColor:"#e84905"}} icon labelPosition='left' disabled={!Object.keys(bookItem).length>0} onClick={modifyToAllCopies}>
      <Icon name='edit' />
      Modify to all copies
    </Button>
    <Button  style={{backgroundColor:"#cfd647"}} icon labelPosition='left' onClick={()=>readBookDetails("")}>
      clear
      <Icon name='redo' />
    </Button>
        
               
                </Sticky>
          
  </div>

  <div style={{marginBottom:"400px"}}></div>

  
  
  </div>
)

}

export default AddBook