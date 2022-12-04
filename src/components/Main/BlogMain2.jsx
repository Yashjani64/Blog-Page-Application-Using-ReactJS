import React from "react";
import { Link } from "react-router-dom";
import "./HomeMain.css";
import "./Blogmain.css";

const BlogMain2 = () => {
  return (
    <div style={{ width: 2700, height: 1000 }} className="MainFlex">
      {/* <div className="demobox1">
        <img src="https://media.istockphoto.com/id/523513953/photo/times-square-in-new-york-city.jpg?s=612x612&w=0&k=20&c=ibPzzIPHrsIdPElVpZYHyWyvqIN4VXTzNP5UXiQcpu8="></img>
        <Link to="/Blog">
          <h2>Name</h2>{" "}
        </Link>
        <p>Date</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, libero
          minima. Inventore numquam, quae ex quas consequuntur maiores
          perspiciatis qui perferendis aperiam cupiditate modi temporibus
          blanditiis sed ipsum vitae vel!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, libero
          minima. Inventore numquam, quae ex quas consequuntur maiores
          perspiciatis qui perferendis aperiam cupiditate modi temporibus
          blanditiis sed ipsum vitae vel!
        </p>
      </div> */}
      <div className="demobox">
        <img
          style={{ width: 1000, height: 500 }}
          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/08/person-using-video-editing-software-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        ></img>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/Blog"
        >
          <h2 className="subtitle">How to Edit Videos Like a Pro: 10 Tips</h2>
        </Link>

        <p className="datetitle">Date : October 9, 2021</p>

        <p className="authertitle">Auther : NOLEN JONKER</p>

        <p className="summarytitle">
          Summary: If you're just getting into video editing, there are some
          things you need to know about the process. Trimming is by far the most
          important editing tool you'll use. Organizing a project this way will
          keep things easily accessible and result in a speedy workflow.
        </p>

        <p className="othertitle">
          Editing is typically the final process that happens before a video
          gets to you for final viewing. If you've had to make a video yourself,
          you'll also know it can be a time-consuming process. If you're just
          getting into the editing game, you may be confused as to what to do
          with the many millions of clips you have—well, we're here to help.
          Here are several things worth remembering to help enhance your editing
          chops.
          <br></br>
          1. Maintain a Project Directory
          <br></br>
          When editing a big project for the first time ever, it's easy to just
          throw everything onto your desktop and hope for the best. Well, to say
          it simply, don't do that. Every single time you start an editing
          project, you need to make a project directory. Create a project
          folder, and within that folder, have a few more folders with labels
          like Raw Footage, Sound, Music, Photos, Graphics, and so on. Place all
          of the materials in these folders according to their type. It's also a
          good idea to label each individual file with a brief description of
          its contents. The project file itself (whether that be one for iMovie
          or Premiere) can be placed in the directory as-is—no special folders
          needed. Organizing the project this way will keep things easily
          accessible and result in a speedy workflow.
          <br></br>
          2. Two Is the Magic Number <br></br> So...
        </p>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/Blog"
        >
          <h2 className="subtitle">Read More</h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogMain2;
