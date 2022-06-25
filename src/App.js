import React from "react";
import { Itau, Nubank, Santander } from "./theme";

import { Button, Theme } from "hubchain-storybook-design-pattern";

const App = () => {
  return (
    <Theme theme={Nubank}>
      <Button label="teste" />
    </Theme>
  );
};

export default App;
