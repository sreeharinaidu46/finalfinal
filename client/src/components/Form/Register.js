// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// import "yup-phone";
// import "./Register.css";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../actions/user_action";

// const signInSchema = Yup.object().shape({
//   name: Yup.string()
//     .required("Name is required")
//     .min(3, "Name is too short - should be 3 chars minimum")
//     .max(15, "Name is too long - should be 15 chars maximum"),
//   email: Yup.string().email().required("Email is required"),
//   branch:Yup.string()
//   .required("Branch is required"),
//   roll_no:Yup.string()
//   .required("USN is required"),
//   year:Yup.string()
//   .required("required"),
//   sem:Yup.string()
//   .required("please select sem")

// });

// const initialValues = {
//   name: "",
//   email: "",

//   branch: "",
//   roll_no: "",
//   year: "",
//   sem:""
// };

// const SignInForm = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className="col-md-12 register-container">
//       <div className="col-md-5 m-auto  ">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={signInSchema}
//           onSubmit={(values, { resetForm }) => {
//             dispatch(registerUser(values));
//             resetForm();
//           }}
//         >
//           {(formik) => {
//             const { errors, touched, isValid, dirty } = formik;
//             return (
//               <div className="container">
//                 <div style={{ marginLeft: "37%" }}>
//                   {/* <div id="circle"></div> */}
//                   {/* <h1  style={{color:"black",marginLeft:"44px",marginTop:"-70px",fontSize:"45px"}}>LMS</h1> */}
//                 </div>
//                 <p
//                   style={{
//                     color: "black",
//                     fontWeight: "800",
//                     textAlign: "center",
//                   }}
//                 >
//                   Add New Student
//                 </p>

//                 <Form>
//                   <div className="form-row">
//                     <label htmlFor="name">Name</label>
//                     <Field
//                       type="text"
//                       name="name"
//                       id="name"
//                       className={
//                         errors.name && touched.name ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="name"
//                       component="span"
//                       className="error"
//                     />
//                   </div>

//                   <div className="form-row">
//                     <label htmlFor="email">Email</label>
//                     <Field
//                       type="email"
//                       name="email"
//                       id="email"
//                       className={
//                         errors.email && touched.email ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="span"
//                       className="error"
//                     />
//                   </div>

//                   {/* <div className="form-row">
//                     <label htmlFor="password">Password</label>
//                     <Field
//                       type="password"
//                       name="password"
//                       id="password"
//                       className={
//                         errors.password && touched.password
//                           ? "input-error"
//                           : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="password"
//                       component="span"
//                       className="error"
//                     />
//                   </div> */}
//                   <div className="form-row">
//                     <label htmlFor="branch">Branch </label>
//                     <Field
//                       type="text"
//                       name="branch"
//                       id="branch"
//                       className={
//                         errors.branch && touched.branch ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="branch"
//                       component="span"
//                       className="error"
//                     />
//                   </div>
//                   <div className="form-row">
//                     <label htmlFor="roll_no">Roll No </label>
//                     <Field
                    
//                       type="text"
//                       name="roll_no"
//                       id="roll_no"
//                       className={
//                         errors.branch && touched.branch ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="roll_no"
//                       component="span"
//                       className="error"
//                     />
//                   </div>

//                   <div className="form-row">
//                     <label htmlFor="year">admmission Year </label>
//                     <Field
//                       type="number"
//                       name="year"
//                       id="year"
//                       className={
//                         errors.branch && touched.branch ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="year"
//                       component="span"
//                       className="error"
//                     />
//                   </div>
//                   <div className="form-row">
//                     <label htmlFor="year">Semester </label>
//                     <Field
//                     style={{height:"35px",border:"2px solid #065b73",borderRadius:"4px"}}
//                       as="select"
//                       name="sem"
//                       className={
//                         errors.branch && touched.branch ? "input-error" : null
//                       }
                      
//                     >
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                       <option value="6">6</option>
//                       <option value="7">7</option>
//                       <option value="8">8</option>
//                     </Field>
//                     <ErrorMessage
//                       name="sem"
//                       component="span"
//                       className="error"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className={!(dirty && isValid) ? "disabled-btn" : ""}
//                     disabled={!(dirty && isValid)}
//                   >
//                     ADD
//                   </button>
//                 </Form>
//                 {/* <div style={{marginTop:"10px",marginLeft:"28%"}}>
//             <Link to="/login" 
//              style={{
//                fontFamily:"sans-serif",color:"black",textDecoration:"none",fontSize:"20px"}}>
//                  If You have account then plz login</Link>
//             </div> */}
//               </div>
//             );
//           }}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;
import { registerUser,updateUser } from "../../actions/user_action";
import React,{useState,useEffect} from 'react';
 import { getStudentDetails,getOneStudentDetails, userProfile } from "../../actions/user_action";
import { Container, TextArea,Dropdown, Grid, Header, Icon,Input,Label,Button,Sticky,Image,Rail,Checkbox,Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
const SignInForm=()=>{
  const dispatch = useDispatch();
    const [user,setUser]=useState("")
    const [gender,setGender]=useState("")
    const [course,setCourse]=useState("");
    const [branch,setBranch]=useState("");
    const[boold,setBlood]=useState("");
    const [memberid,setMemberId]=useState("");
    const [phone_no,setPhoneNo]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [dob,setDOB]=useState("");
    const [fatherName,setFatherName]=useState("");
    const [pinCode,setPinCode]=useState("");
    const [city,setCity]=useState("");
    const [password,setPassword]=useState("");
    const [sem,setSemester]=useState("");
    
  

    
    const { userDetails } = useSelector(
      (state) => state.getStudentDetailsReducer
    );

    const getStdentdetailsHandler = (data) => {
      if(data===""){

        dispatch(getOneStudentDetails(""));
        setMemberId("");
        setUser("");
        setGender("");
        setCourse("");
        setBranch("");
        setBlood("");
        setPhoneNo("");
        setName("");
        setEmail("");
        setAddress("");
        setDOB("");
        setFatherName("");
        setPinCode("");
        setPassword("");
        setCity("");
        setSemester("");
        return;
      }
      dispatch(getOneStudentDetails(memberid));
      console.log(userDetails.isAdmin)
      if(userDetails){
        if(userDetails.user){
          setUser(userDetails.user);

        }
        else if(userDetails.isAdmin){
          
          setUser("Admin");
          

        }
        else{

          

          setUser("Student");
          

        }

        if(userDetails.course){
          setCourse(userDetails.course)

        }
        else if(!userDetails.isAdmin){
          
          setCourse("BTech")

        }
        else{
          setCourse("MBA")

        }

        
        
        setGender(userDetails.gender);
        
        setBranch(userDetails.branch);
        setBlood(userDetails.boold);
        setPhoneNo(userDetails.phone_no);
        setName(userDetails.name);
        setEmail(userDetails.email);
        setAddress(userDetails.address);
        setDOB(userDetails.dob);
        setFatherName(userDetails.fatherName);
        setPinCode(userDetails.pinCode);
        setPassword(userDetails.password);
        setCity(userDetails.city);
        setSemester(userDetails.sem);
      }
      else{
        setUser("");
        setGender("");
        setCourse("");
        setBranch("");
        setBlood("");
        setPhoneNo("");
        setName("");
        setEmail("");
        setAddress("");
        setDOB("");
        setFatherName("");
        setPinCode("");
        setPassword("");
        setCity("");
        setSemester("");
      }
      

    }

   
   

    

    

    const countryOptions=[
        { key: "Student", value: "Student", text: "Student" },
    { key: "Admin", value: "Admin", text: "Admin" },
    ]
    const genderOptions=[
        { key: "Male", value: "Male", text: "Male" },
        { key: "Female", value: "Female", text: "Female" },

    ]

    const courseOptions=[
        { key: "BTech", value: "BTech", text: "BTech" },
        { key: "MBA", value: "MBA", text: "MBA" },

    ]

    let branchOptions=[]

    if(course==="BTech"){
      branchOptions=[
        { key: "CSE", value: "Computer Science Engineering", text: "Computer Science Engineering" },
        { key: "ECE", value: "Electronics and Communication Engineering", text: "Electronics and Communication Engineering" },
        { key: "MECH", value: "Mechanical Engineering", text: "Mechanical Engineering" },
        { key: "EEE", value: "Electrical and Electronics Engineering", text: "Electrical and Electronics Engineering" },
        { key: "CIVIL", value: "Civil Engineering", text: "Civil Engineering" },
    ]

    }
    if(course==="MBA"){
      branchOptions=[
        { key: "CSE", value: "Business Analytics", text: "Business Analytics" },
        { key: "ECE", value: "Business Management", text: "Business Management" },
        { key: "MECH", value: "Finace", text: "Finace" },
        { key: "EEE", value: "Marketing Management", text: "Marketing Management" },
        { key: "CIVIL", value: "Human Resorce", text: "Human Resorce" },
    ]

    }


    

    const bloodOptions=[
      { key: "O+", value: "O+", text: "O+" },
        { key: "O-", value: "O-", text: "O-" },
        { key: "A+", value: "A+", text: "A+" },
        { key: "B+", value: "B+", text: "B+" },
        { key: "A-", value: "A-", text: "A-" },
        { key: "B-", value: "B-", text: "B-" },
        { key: "AB+", value: "AB+", text: "AB+" },
        { key: "AB-", value: "AB-", text: "AB-" },

    ]

    const addUserHandler=()=>{

      const usersdata={roll_no:memberid,name:name,course:course,email:email,branch:branch,user:user,gender:gender,sem:sem,fatherName:fatherName,pinCode:pinCode,city:city,password:password,boold:boold,phone_no:phone_no,dob:dob,address:address}
      dispatch(registerUser(usersdata));
      getStdentdetailsHandler("")
    }

    const modifyUserHandler=()=>{
      const usersdata={roll_no:userDetails.roll_no,name:name,course:course,email:email,branch:branch,user:user,gender:gender,sem:sem,fatherName:fatherName,pinCode:pinCode,city:city,password:password,boold:boold,phone_no:phone_no,dob:dob,address:address}
      dispatch(updateUser(usersdata))
      getStdentdetailsHandler("")
    }

    return(
        <div className="col-md-16 m-auto" style={{marginLeft:"500px"}}>
            <Grid columns='equal' style={{marginLeft:"150px"}}>
                <Grid.Row>
                <Grid.Column>
                <div style={{ display: "flex",marginBottom:"10px"}}>
                  <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "9px",
                      borderRadius: "4px",
                    }}
                  >
                    Profile
                  </label>

                  <Dropdown
                    placeholder="Select..."
                    fluid
                    search
                    selection
                    value={user}
                    disabled={Object.keys(userDetails).length>0}
                    // defaultOpen={user}
                    options={countryOptions}
                    onChange={(e,data)=>setUser(data.value)}
                  />
                </div>
                <Input disabled={Object.keys(userDetails).length>0} fluid label='Name*' placeholder='Please enter Name...' style={{marginBottom:"10px"}} value={name} onChange={(e)=>setName(e.target.value)}/>
                <div style={{ display: "flex",marginBottom:"10px"}}>
                  <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "9px",
                      borderRadius: "4px",
                    }}
                  >
                    Gender
                  </label>

                  <Dropdown
                    placeholder="Select..."
                    fluid
                    search
                    selection
                   
                    value={gender}
                    options={genderOptions}
                    onChange={(e,data)=>setGender(data.value)}
                  />
                </div>
                <div style={{ display: "flex",marginBottom:"10px"}}>
                  <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "9px",
                      borderRadius: "4px",
                    }}
                  >
                    Course
                  </label>

                  <Dropdown
                    placeholder="Select..."
                    fluid
                    search
                    selection
                    
                    disabled={Object.keys(userDetails).length>0||user==="Admin"}
                   
                    value={course}
                    options={courseOptions}
                    onChange={(e,data)=>setCourse(data.value)}
                  />
                </div>
                
                <Input disabled={Object.keys(userDetails).length>0} type="email" fluid label='Email Id' placeholder='Please enter Email...' style={{marginBottom:"20px"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div style={{ display: "flex",marginBottom:"9px"}}>
                <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "25px",
                      borderRadius: "4px",
                    }}
                  >
                    Address
                  </label>
                <TextArea value={address} rows={5} col fluid  placeholder='Your Address...' onChange={(e)=>setAddress(e.target.value)} style={{ minWidth: 235 }}/>
                </div>
                </Grid.Column>
                <Grid.Column>
                <Input disabled={Object.keys(userDetails).length>0||user==="Admin"} type='number' min={1} max={8} value={sem} fluid label='Semester' placeholder='Please enter sem...' style={{marginBottom:"10px"}} onChange={(e)=>setSemester(e.target.value)}/>
                <div style={{ display: "flex",marginBottom:"10px"}}>
                  <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "9px",
                      borderRadius: "4px",
                      width:"100px"
                    }}
                  >
                    Branch
                  </label>

                  <Dropdown
                    placeholder="Select..."
                    fluid
                    search
                    selection
                    disabled={Object.keys(userDetails).length>0||user==="Admin"}
                    value={branch}
                    options={branchOptions}
                    onChange={(e,data)=>setBranch(data.value)}
                  />
                </div>
                <Input  fluid label='Father Name' placeholder='Please enter Father Name...' style={{marginBottom:"10px"}} value={fatherName} onChange={(e)=>setFatherName(e.target.value)} />
                <Input type='number'min={100000} max={900000} fluid label='City-Pin' placeholder='Please enter pincode...' style={{marginBottom:"10px"}} value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
                {/* <div style={{ display: "flex",marginBottom:"9px"}}>
                <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "25px",
                      borderRadius: "4px",
                    }}
                  >
                    Address
                  </label>
                <TextArea rows={5} col fluid label='City-Pin' placeholder='Your Address...' onChange={(e)=>console.log(e.target.value)} style={{ minWidth: 235 }}/>
                </div> */}
                <Input  fluid label='City' placeholder='Please enter city...' style={{marginBottom:"10px"}} value={city} onChange={(e)=>setCity(e.target.value)}/>
                </Grid.Column>
                <Grid.Column>
                <div style={{ display: "flex",marginBottom:"10px"}}>
                <Input fluid label='Member Id' placeholder='Please enter Member Id...' style={{width:"400px"}} onChange={(e)=>setMemberId(e.target.value)}/>
                <Button icon='search'  style={{height:"38px",backgroundColor:"#2b8c01"}} onClick={()=>getStdentdetailsHandler(memberid)}></Button>
                </div>
                <Input type='password' fluid label='Password' placeholder='Please enter password...' style={{marginBottom:"10px"}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {/* <Input fluid label='BloodGroup' placeholder='Please enter Father Name...' style={{marginBottom:"10px"}} /> */}
                <div style={{ display: "flex",marginBottom:"10px"}}>
                  <label
                    style={{
                      backgroundColor: "#e0dddc",
                      padding: "9px",
                      borderRadius: "4px",
                      width:"150px"
                    }}
                  >
                    Blood Group
                  </label>

                  <Dropdown
                    placeholder="Select Bloodgroup..."
                    fluid
                    search
                    selection
                   value={boold}
                    
                    options={bloodOptions}
                    onChange={(e,data)=>setBlood(data.value)}
                  />
                </div>
                <Input min={6000000000} max={9999999999} type='number' fluid label='Phone No' placeholder='Please enter Phone No...' value={phone_no} style={{marginBottom:"10px"}}  onChange={(e)=>setPhoneNo(e.target.value)}/>
                <Input value={dob} fluid label='DOB' placeholder='ex:27 Mar 1999' style={{marginBottom:"10px"}} onChange={(e)=>setDOB(e.target.value)}/>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <div className="col-md-12 m-auto">
  
  <Sticky >
    
    <Button style={{backgroundColor:"#2e9957"}}   disabled={Object.keys(userDetails).length>0} onClick={addUserHandler}>

Add
</Button>
<Button icon style={{backgroundColor:"#9c0897"}}   disabled={!Object.keys(userDetails).length>0} onClick={modifyUserHandler}>
Modify

</Button>
<Button  style={{backgroundColor:"#ebf0e9"}}  onClick={()=>getStdentdetailsHandler("")}>
clear

</Button>
<Button style={{backgroundColor:"#028ab8"}}  >

Home
</Button>


 
  </Sticky>

</div>
                </Grid.Row>
            </Grid>
            <div style={{marginBottom:"500px"}}></div>
        </div>
        
    )

}

export default SignInForm;
