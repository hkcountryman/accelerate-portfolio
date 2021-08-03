import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: "#525252",
    backgroundColor: "#f0f0f0",
  },
}));

export default function Content(props) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      {props.lab === 0 &&
        <p style={{fontSize:"1.15rem"}}>Because this to-do list was our first project, my teammates and I were tasked only with creating a front end in order to get comfortable using <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://material-ui.com/" target="_blank">Material UI</a>. As such, added tasks do not persist on page reload.</p>
      }
      {props.lab === 1 &&
        <p style={{fontSize:"1.15rem"}}>For our second project, my teammates and I learned how to use <a href="https://axios-http.com/" target="_blank">Axios</a> to make asynchronous calls to <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>, a web API that provides test data.</p>
      }
      {props.lab === 2 &&
        <>
          <p style={{fontSize:"1.15rem"}}>Our third and final group project was to create the back end for this quiz using <a href="https://expressjs.com/" target="_blank">Express.js</a>. Although this was relatively straightforward to implement and run on a development server, it proved more challenging when I attempted to deploy the project.</p>
          <p style={{fontSize:"1.15rem"}}>Initially, I opted to use <a href="https://heroku.com/" target="_blank">Heroku</a>. Once I had resolved issues with <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">cross-origin resource sharing (CORS)</a> that prevented me from accessing my own back end, I finally had both front and back ends up and running–or so I thought! Heroku works by running containerized Linux environments called dynos, and it runs as few as it can get away with. When using Heroku's free tier, if nobody has attempted to access your Heroku app in the last 30 minutes, the dyno will sleep and subsequently take some time to wake up. Normally, the amount of time it takes to wake up the dyno isn't a problem, but when I attempted to load the quiz front end after leaving my dynos asleep, it would take some time to load and also try to contact my back-end dyno, which itself had to wake up, so the request would time out.</p>
          <p style={{fontSize:"1.15rem"}}>My solution was to switch to <a href="https://www.netlify.com/" target="_blank">Netlify</a> and use their <a href="https://docs.netlify.com/functions/overview/" target="_blank">serverless Lambda functions</a> to deploy the back end.</p>
        </>
      }
    </Paper>
  );
}