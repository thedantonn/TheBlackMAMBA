import React from 'react';
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
}from "@ant-design/icons";
import {Button,Divider,Form,Input,message,Typography} from "antd";
import "./signup.css";

function Signup() {

  const login=()=>{
    message.success("Login Successful!");
  };
   return <div className="appBg">
    <Form className="loginform" onFinish={login}>
      <Typography.Title>Welcome!</Typography.Title>
      <Form.Item 
        rules=
        {
         [
           {
             required: true,
             type: "email",
             message: "please Enter a Valid email",
            },
         ]
        }
      
      
      label="Email" 
      name={'Email'}>
      <Input placeholder="Enter your Email" />
      </Form.Item>
      <Form.Item 
      rules=
      {
       [
         {
           required: true,
           message: "please enter your valid password",
          },
       ]
      }
    
      
      label="Password" 
      name={"myPassword"}>
      <Input.Password placeholder="Enter your Password" />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Signup
      </Button>
      <Divider style={{borderColor: "black"}}>or Login with</Divider>
      <div className="sociallogin">
        <GoogleOutlined className="socialIcon" onClick={login} style={{color:"red"}}/>
        <FacebookFilled className="socialIcon" onClick={login} style={{color:"blue"}} />
        <TwitterOutlined className="socialIcon" onClick={login} style={{color:"cyan"}}/>

      </div>
    </Form>
  </div>;
};

export default Signup;