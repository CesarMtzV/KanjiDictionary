import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const AppBarKanji = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6">Kanji Dictionary</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarKanji;
