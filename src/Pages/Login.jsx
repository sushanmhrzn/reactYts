import React from 'react'
import '../css/login.css';
import {FcGoogle} from 'react-icons/fc'
import {Formik,Form,Field} from 'formik';

const login = () => {
  return(
    <div>
    <Formik
      initialValues={{
        email: '',
        password:'',
        toogle: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      console.log(values);  
      }}
    >
      <div>
         <main className="login login-box">
           <div className='login-container'>
             <div className='login-container__logo'>
                <img src ="../logo.png" alt="" className='login-container__logo__image'/>
                Logis
            </div>
           <Form className='login-container__items'>
            <label className='login-container__items__title1'>Welcome Back!</label>
            <label className='login-container__items__title2'>The faster you fill up, the faster ticket you get!!</label>
             <div className='login_container__items__inputField__title'>Email</div>
              <Field  name ="email"  className='login-container__items__inputField' placeholder='Enter your email'/>
             <div className='login_container__items__inputField__title' >Password</div>
              <Field name="password" placeholder='Password' className='login-container__items__inputField'/>
              <div className='login-container__items__checkbox'>
              <Field type="checkbox" name="toogle" className='remeber_checkBox' style={{float:"left"}}/> Remember me <a herf="#" className='forget_password'>Forget Password</a>
          </div>
              <button type="submit" className='btn btn-login'>Login</button>
              <button className='btn btn__logingoogle'><FcGoogle className='icon' /> Sign In With Google</button>
               <div className='login-container__items__signup'>Dont Have Password?
               <a href='#'>&ensp;Sign up</a>
               </div>
           </Form>
         </div>
         <img src='https://images.unsplash.com/photo-1680009024003-07eec9dd260a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60' alt='Cyborg' className='login__image'/>
       </main>
   </div>
      {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form> */}
    </Formik>
  </div>
  )
  
  // return (
  //   
  // )

}

// const LoginFormik= withFormik({
//   mapPropsToValues: (props) => {
//     return {
//       email: props.email || '',
//       password: props.password || ''
//     }
//   },
//   handleSubmit: (values) => {
//     console.log(values)
//   }
// })(login)

export default login