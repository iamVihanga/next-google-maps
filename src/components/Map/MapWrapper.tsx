'use client';

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "@/utils/Theme";
import "sanitize.css";

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
}

export default App;
