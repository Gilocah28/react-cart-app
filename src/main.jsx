import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import DataItemProvider from "./Context/DataItemProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataItemProvider>
      <App />
    </DataItemProvider>
  </StrictMode>
);
