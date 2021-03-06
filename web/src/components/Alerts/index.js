import React from "react";

import { Alert } from "./styles";

function Alerts(props) {
  const { mensagem } = props;

  return (
    <Alert typo="sucesso">
      <h1>{mensagem}</h1>
    </Alert>
  );
}

export default Alerts;
