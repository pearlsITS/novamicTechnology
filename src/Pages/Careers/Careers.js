import React, { useEffect, useState } from "react";
import "./Careers.css";
import ScrollButton from "../../Components/ScrollToTop/ScrollButton";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
import { Api } from "../../Api";
import { Button, Modal } from "antd";
import ApplicationForm from "../../Components/ApplicationForm/ApplicationForm";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Careers = () => {
  const [opene, setOpene] = React.useState(false);
  const handleClose = () => {
    setOpene(false);
  };
  const handleOpen = () => {
    setOpene(true);
  };
  const [title, setTitle] = useState();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [requirementData, setRequirementData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    handleOpen();
    axios.get(`${Api}/fetchRequirements`).then((res) => {
      setRequirementData(res.data);
      handleClose();
    });
  }, []);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={opene}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        open={open}
        title={`${title} Application`}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
        ]}
      >
        <ApplicationForm close={handleCancel} title={title}></ApplicationForm>
      </Modal>
      <div className="careers-section">
        <div className="careers">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className="title">
              <p>Careers</p>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="container">
          <div className="careers-content">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="careers-title">
                <p>We're Hiring</p>
              </div>
            </AnimationOnScroll>
            <div className="careers-desc">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <p className="desc-1">
                  We are looking for talented and skillfull professionals, whom
                  we call partners rather than employees. Each and every member
                  of our team is our partner in path of growth.
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <p className="desc-2">
                  If you have zeal and fire in belly to be become partner rather
                  than employee, than apply for the below vacant posts.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="careers-services">
            <div className="row">
              {requirementData.map((c) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="service-bg">
                    <div className="services-title">
                      <p>{c.title}</p>
                    </div>
                    <div className="services-desc serv">
                      <p>{c.description}</p>
                    </div>
                    <div className="services-btn">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setTitle(c.title);
                          showModal();
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollButton />
      </div>
    </div>
  );
};

export default Careers;
