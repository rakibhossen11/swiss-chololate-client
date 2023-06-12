import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
