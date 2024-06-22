/* eslint-disable no-unused-vars */
import React from "react";
import { Route , Routes } from "react-router-dom";
import Layout from "./Layout";
import AuthForm from "./AuthForm"
import Dashboard from "./Dashboard";
import ChatRoom from "./ChatRoom";

const App = () => (

    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" index={true} element={<AuthForm type="login" />} />
            <Route path="/register" element={<AuthForm type="register" />} />
            <Route  path="/dashboard" element={<Dashboard />}/>
            <Route path="/chat/:userId" element={<ChatRoom />} />
        </Route>
    </Routes>
    
);
export default App;
