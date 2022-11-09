import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import DesignedImages from "../Pages/DesignedImages";
import { EditPage } from "../Pages/EditPage";
import EditWorkspace from "../Pages/EditWorkspace";
import EditWorkspaceVideo from "../Pages/EditWorkspaceVideo";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import MediaLibrary from "../Pages/MediaLibrary";
import NoPage from "../Pages/NoPage";
import SignUp from "../Pages/SignUp";

const RouteHandler = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="signup" element={<SignUp />} />
      <Route exact path="edit" element={<EditPage />} />
      <Route exact path="editworkspace" element={<EditWorkspace />} />
      <Route exact path="editworkspacevideo" element={<EditWorkspaceVideo />} />
      <Route exact path="medialibrary" element={<MediaLibrary />} />
      <Route exact path="designedimages" element={<DesignedImages />} />
      <Route exact path="aboutus" element={<AboutUs />} />
      <Route exact path="contactus" element={<ContactUs />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default RouteHandler;
