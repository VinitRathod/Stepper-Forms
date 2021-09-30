import React from 'react';
import { useFormik } from 'formik';

export const Final = () => {
  const formik = useFormik({
    initialValues: {
      Id: '',
      Name: '',
      Location: '',
      Salary:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
    <h2  style={{marginLeft:"13rem"}}>Paved the way</h2>
    <div style={{margin:"0 8rem"}}>
       <div ><h5>1 .james and lily potter</h5></div>
       <div ><h5>2 .moaning myrtle</h5></div>
       <div ><h5>3 .snape</h5></div>
       <div ><h5>4 .Start new elective subjects and visit hogsmeade</h5></div>
       <div ><h5>5 .He looked into the mirror and felt the stone drpoped into his pocket</h5></div>
       <br/>
    </div>
    </div>
  );
}
