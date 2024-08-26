import "./Jobs.css";
import job_1 from "../../assets/job-1.png";
import job_2 from "../../assets/job-2.png";
import job_3 from "../../assets/job-3.png";
import job_4 from "../../assets/job-4.png";

const Jobs = () => {
  return (
    <div className="Myjobs">
      <div className="jobs">
        <img src={job_1} alt="" />
        <img src={job_2} alt="" />
        <img src={job_3} alt="" />
        <img src={job_4} alt="" />
      </div>
    </div>
  );
};

export default Jobs;
