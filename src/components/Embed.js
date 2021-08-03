import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: "#f0f0f0",
  },
  embed: {
    padding: theme.spacing(1),
    height: "75vh",
  },
}));

export default function Embed(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={classes.text}>
        {props.text}
      </Paper>
      <br/>
      <Paper elevation={0} className={classes.embed}>
        <embed src={props.url} width="100%" height="100%" />
      </Paper>
    </Container>
  );
}