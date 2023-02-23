import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Completed.module.scss";

const cx = classNames.bind(styles);
const Completed = () => {
  if (!localStorage.jobs) {
    localStorage.jobs = JSON.stringify([]);
  }

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJob);
    return storageJob;
  });

  const handleJob = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  const [checkFirst, setCheckFirst] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const checkBox = () => {
    setCheckFirst((prev) => !prev);
  };
  const checkBox2 = () => {
    setCheck2((prev) => !prev);
  };
  const checkBox3 = () => {
    setCheck3((prev) => !prev);
  };
  return (
    <div>
      <div className={cx("info")}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleJob}>Add</button>
      </div>
      {jobs.map((job, index) => (
        <div className={cx("content-task")} key={index}>
          {" "}
          <input type="checkbox"></input>
          {job}
        </div>
      ))}
      <div className={cx("content-task")}>
        <div>
          <span>
            <input type="checkbox" onChange={checkBox}></input>
          </span>{" "}
          {checkFirst ? <span>Task done</span> : <del> Task done</del>}
        </div>
        <div>
          <span>
            <input type="checkbox" onChange={checkBox2}></input>
          </span>
          {check2 ? <span>Task done</span> : <del>Task done</del>}
        </div>
        <div>
          <span>
            <input type="checkbox" onChange={checkBox3}></input>
          </span>
          {check3 ? <span>Task done</span> : <del> Task done</del>}
        </div>
      </div>
    </div>
  );
};

export default Completed;
