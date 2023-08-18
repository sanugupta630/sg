import React, { useState, useEffect } from "react";
import Layout from "./../src/components/Layout/Layout";
import "./Upload.css";
import axios from "axios";
import UploadForm from "./course/UploadForm";
import UploadsList from "./course/UploadsList";
import { BACKEND_URI } from "./config/constants";

const Upload = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
    <Layout>
      <div className="row">
        <div className="col-md-5">
          <div
            className="card"
            style={{
              height: "auto",
              width: "500px",
              margin: "30px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div
            className="card"
            style={{
              height: "auto",
              width: "700px",
              margin: "20px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList medias={medias} />
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Upload;
