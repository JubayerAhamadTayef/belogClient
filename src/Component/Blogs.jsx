import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import MyImg from "../assets/Images/MyImg.jpg";
import TeamLeaderImg from "../assets/Images/TeamLeaderImg.jpg";
function Blogs() {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="object-cover h-40 w-35 border-redius-50%"
            src={MyImg}
            alt="Movie"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">Blog Title: New movie is released!</h2>
          <p>Blog Description: Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end  items-center flex">
            <a className="text-wite">Continue Reading...</a>
            <button className="btn btn-circle">
              <BsFillArrowRightCircleFill className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="object-cover h-40  w-35  border-redius-50%"
            src={TeamLeaderImg}
            alt="Movie"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">Blog Title: New movie is released!</h2>
          <p>Blog Description: Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end  items-center flex">
            <a className="text-wite">Continue Reading...</a>
            <button className="btn btn-circle">
              <BsFillArrowRightCircleFill className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="object-cover h-40 w-35 border-redius-50%"
            src={MyImg}
            alt="Movie"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">Blog Title: New movie is released!</h2>
          <p>Blog Description: Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end  items-center flex">
            <a className="text-wite">Continue Reading...</a>
            <button className="btn btn-circle">
              <BsFillArrowRightCircleFill className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
