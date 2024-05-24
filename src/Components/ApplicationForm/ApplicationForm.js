import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, message } from "antd";
import axios from "axios";
import { Api } from "../../Api";
import "./ApplicationForm.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const defaultTheme = createTheme();

export default function ApplicationForm({ close, title }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [name, setName] = React.useState();
  const [lastName, setLastname] = React.useState();
  const [email, setEmail] = React.useState();
  const [mobile, setMobile] = React.useState();
  const [previoussalary, setPrevioussalary] = React.useState();
  const [ExpectedSalary, setExpectedSalary] = React.useState();
  const [techstack, setTechstack] = React.useState();
  const [totalExperience, setTotalExperience] = React.useState();
  function submitHandler(e) {
    e.preventDefault();
    const applicationData = {
      name: name,
      lastName: lastName,
      email: email,
      mobile: Number(mobile),
      previousSalary: Number(previoussalary),
      expectedSalary: Number(ExpectedSalary),
      techStack: techstack,
      totalExperience: Number(totalExperience),
      appliedFor: title,
    };
    setName("");
    setLastname("");
    setEmail("");
    setMobile("");
    setPrevioussalary("");
    setExpectedSalary("");
    setTechstack("");
    setTotalExperience("");
    if (
      applicationData.name &&
      applicationData.email &&
      applicationData.lastName &&
      applicationData.mobile &&
      applicationData.previousSalary &&
      applicationData.expectedSalary &&
      applicationData.techStack &&
      applicationData.totalExperience
    ) {
      handleOpen();
      axios.post(`${Api}/application`, applicationData).then((res) => {
        handleClose();
        message.success(`${res.data}. Team will soon contact you.`);
      });
    } else {
      message.error("Fill All Details!!");
    }
    close();
  }
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container
          component="main"
          maxWidth="sm"
          sx={{ mb: 4 }}
          style={{ padding: 0 }}
        >
          <Paper variant="" sx={{ my: { xs: 3, md: 1 }, p: { xs: 2, md: 3 } }}>
            <form onSubmit={submitHandler}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={(e) => setName(e.target.value)}
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    variant="standard"
                    value={name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    onChange={(e) => setLastname(e.target.value)}
                    name="lastName"
                    label="Last name"
                    fullWidth
                    variant="standard"
                    value={lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email-id"
                    name="email-id"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email-Id"
                    fullWidth
                    variant="standard"
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    name="mobile"
                    label="Mobile Number"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10);
                    }}
                    fullWidth
                    variant="standard"
                    value={mobile}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="previous salary"
                    onChange={(e) => setPrevioussalary(e.target.value)}
                    name="previous salary"
                    type="number"
                    label="Current Package (LPA)"
                    fullWidth
                    variant="standard"
                    value={previoussalary}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="expected salary"
                    type="number"
                    onChange={(e) => setExpectedSalary(e.target.value)}
                    name="expected salary"
                    label="Expected Package (LPA)"
                    fullWidth
                    variant="standard"
                    value={ExpectedSalary}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="total experience"
                    onChange={(e) => setTotalExperience(e.target.value)}
                    name="total experience"
                    label="Total Exp. (In Years)"
                    fullWidth
                    type="number"
                    variant="standard"
                    value={totalExperience}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="tech stack"
                    value={techstack}
                    onChange={(e) => setTechstack(e.target.value)}
                    name="tech stack"
                    label="Tech Stack You Know"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <label>Upload Resume</label>
                <TextField
                  type="file"
                  id="resume"
                  name="resume"
                  fullWidth
                  variant="standard"
                />
              </Grid> */}
              </Grid>
              <br></br>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}
