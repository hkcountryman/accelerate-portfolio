import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    height: "75vh",
    backgroundColor: "#f0f0f0",
  },
}));

export default function Embed(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{backgroundColor: "#f0f0f0"}}>
      <Content lab={props.lab} />
      <Paper elevation={0} className={classes.paper}>
        <embed src={props.url} width="100%" height="100%" />
      </Paper>
    </Container>
  );
}