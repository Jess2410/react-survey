import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import artist from "../public/assets/tony.jpg";
import { data } from "../data";
import { Stars } from "../public/components/Stars";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";
// import Image

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { projects } = data;
  // const [allRatings, setallRatings] = useState();
  const allRatings: number[] = new Array(projects.length).fill(0);

  const handleRating = (index: number, rate: number) => {
    console.log("index " + index);
    console.log("rate " + rate);

    allRatings[index] = rate;
  };

  const onSubmit = () => {
    console.log(allRatings);
  };

  return (
    <>
      <Head>
        <title>Music Survey</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="presentation">
          <h1>
            Participez à la conception de ma <span>Mixtape </span>!{" "}
          </h1>
          <div className="flex">
            <Image
              src="/assets/artist.jpg"
              width={250}
              height={250}
              alt="artist tony mafé"
              style={{
                borderRadius: "50%",
                height: "250px",
              }}
            />

            <div className="flexCol">
              <h2>Tony Mafé</h2>
              <p>
                Bonjour à Toutes et à Tous :<br></br> Merci pour votre{" "}
                <span>participation</span> à ce sondage anonyme. Cela me
                permettra de sélectionner les meilleures maquettes que{" "}
                <span>VOUS </span>
                aurez choisi pour les travailler et les{" "}
                <span>enregistrer </span>
                professionnellement. La Mixtape sortira début <span>2023 </span>
                et vous serez prioritaire dans l&rsquo;écoute de ce{" "}
                <span>nouveau projet</span>. Bienvenue à vous dans cette
                nouvelle aventure de Tony Mafé.
                <br></br>
                <br></br>
                <span>Merci !</span>
              </p>
            </div>
          </div>
        </div>
        <ul>
          {projects.map((projet, key) => {
            return (
              <li key={key}>
                <div
                  style={{
                    border: "violet 1px solid",
                    borderRadius: "50px",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                >
                  <ReactPlayer url={projet.href} width={450} light={true} />
                  <div className="title">
                    {projet.name}{" "}
                    <Stars
                      handleRating={handleRating}
                      rating={allRatings[key]}
                      index={key}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="btnWrapper">
          <button onClick={onSubmit}>VOTER</button>
        </div>
      </main>
    </>
  );
}
