import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook, filterBook } from "../actions/book_action";
import { issueABook, getAllIssuedBook } from "../actions/Issue_action";
import { Icon } from "semantic-ui-react";



import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import axios from "axios";

const Messages = () => {
  const dispatch = useDispatch();

  const [returns,setReturn]=useState([]);
  const [renews,setRenew]=useState([]);

  useEffect(async() => {
    dispatch(getAllBook());
    dispatch(getAllIssuedBook());

    const ret=await axios.get("/api/issues/getReturns");
    setReturn(...returns,ret.data);

    const ren=await axios.get("/api/issues/getRenews");
    setRenew(...renews,ren.data);

    


    

  }, []);
  


  
  const { books } = useSelector((state) => state.getAllBookReducer);
  
  const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)

const handleClick=()=>{
    const fileType="xlsx";

   
    
    const issues1=XLSX.utils.json_to_sheet(all_IssuedBook);
    const return1=XLSX.utils.json_to_sheet(returns);
    const renew1=XLSX.utils.json_to_sheet(renews);
    const wb={Sheets:{issues:issues1,returns:return1,renews:renew1},SheetNames:["issues","returns","renews"]};
    const excelBuffer=XLSX.write(wb,{bookType:"xlsx",type:"array"});
    const data=new Blob([excelBuffer],{type:fileType});
    FileSaver.saveAs(data,"booksReport"+".xlsx");



}
  return (
    <div style={{height:"700px"}}>
    
      <div className="col-md-9 m-auto">
      <br />
      <br />
      <h3 className="text-center bg-success p-2">Total Books :{books.length} </h3>
      <button  type="button" style={{border:"1px solid #19a4cf", backgroundColor:"#19a4cf",margin:"1% 40%",padding:"15px",borderRadius:"5px",color:"white"}} onClick={handleClick}>Download Report <Icon name='download' /></button>
    </div>
    <div style={{marginBottom:"800px"}}></div>
    </div>
  );
};

export default Messages;

