import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Actives.module.scss";
const cx = classNames.bind(styles);
const Active = () => {
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

  const checkBox = () => {
    setCheckFirst((prev) => !prev);
  };
  const checkBox2 = () => {
    setCheck2((prev) => !prev);
  };

  return (
    <div >
      <div className={cx("info")}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleJob}>Add</button>
      </div>
      {jobs.map((job, index) => (
        <div key={index} className={cx("content-task")}>
          {" "}
          <input type="checkbox"></input>
          {job}
        </div>
      ))}

      <div className={cx("content-task")}>
        <div >
          <span>
            <input type="checkbox" onChange={checkBox}></input>
          </span>{" "}
          {checkFirst ? (
            <span>Do coding challenges</span>
          ) : (
            <del> Do coding challenges</del>
          )}
        </div>
        <div >
          <span>
            <input type="checkbox" onChange={checkBox2}></input>
          </span>
          {check2 ? (
            <span>Do coding challenges</span>
          ) : (
            <del> Do coding challenges</del>
          )}
        </div>
      </div>
    </div>
  );
};

export default Active;
