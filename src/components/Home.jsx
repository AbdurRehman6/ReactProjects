import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day.We are leading tech company whose aim is to increase the
            problem solving ability in childrem.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>WHO WE ARE?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            nulla harum facilis quis fuga, suscipit cum unde corporis eligendi
            tenetur aliquam cupiditate repudiandae, animi molestiae quasi odit
            et, eum blanditiis ullam dolor amet ab doloribus eos! Modi maiores
            non dicta veritatis voluptatem explicabo debitis at eius unde aut
            suscipit magni minima assumenda, obcaecati ea quae odit alias velit
            quidem deleniti asperiores laudantium facere. Fugit quos adipisci
            optio, hic numquam accusamus minima beatae illum asperiores corporis
            quaerat praesentium provident aliquid molestias doloribus voluptatum
            soluta earum neque exercitationem! Doloribus voluptates ratione
            reprehenderit quasi laudantium cumque vel consequuntur labore
            accusantium? Id, temporibus odit.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
