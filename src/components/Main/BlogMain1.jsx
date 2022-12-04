import React from "react";
import { Link } from "react-router-dom";
import "./HomeMain.css";
import "./Blogmain.css";

const BlogMain1 = () => {
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
      <div className="demobox demobox2">
        <img
          style={{ width: 900, height: 350 }}
          src="https://i.guim.co.uk/img/media/7e7b161c1296ff31e1a580de4ae7bc012082a861/157_120_5033_3020/master/5033.jpg?width=620&quality=45&dpr=2&s=none"
        ></img>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/Blog1"
        >
          <h2 className="subtitle">
            Apple iPhone 14 Pro review: new ideas in a familiar package
          </h2>
        </Link>

        <p className="datetitle">Date : September 26, 2022</p>

        <p className="authertitle">Auther : SAMUEL GIBBS</p>

        <p className="summarytitle">
          Summary: The iPhone 14 Pro is Apple's latest top-end flagship
          smartphone. New always-on display has been designed around a new
          smaller, floating notch design. Price rise due to weak US dollar means
          the phone is £150 (A$400) more expensive than its predecessor.
        </p>

        <p className="othertitle">
          Apple’s latest top smartphone model, the iPhone 14 Pro, features
          upgraded cameras, a new always-on display and some funky animations
          around a new smaller, floating notch design. It also features a
          substantial price rise as a result of currency shifts. Weak currency
          rates against the dollar mean the new phone is £150 (A$400) more
          expensive than its predecessor, coming in at £1,099 (A$1,749) despite
          costing the same $999 in the US. The 14 Pro has the same 6.1in OLED
          display and premium stainless steel and glass design as previous
          models, but the large notch at top of the screen containing the
          cameras for Face ID has been replaced by a 31% smaller pill-shaped
          design Apple calls the “dynamic island”. The pill is animated,
          expanding and contracting to accommodate system alerts and ongoing
          notifications, such as charging status, album art and a little
          waveform when playing music or a countdown timer. Tapping and holding
          the notch reveals more of the notification, such as music playback
          controls, and just a tap opens the app...
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Blog"
          >
            <h2 className="subtitle">Read More</h2>
          </Link>
        </p>
      </div>{" "}
    </div>
  );
};

export default BlogMain1;
