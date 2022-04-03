import Head from 'next/head';
import Router from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const members = [
    {
      img: 'https://i.imgur.com/LW5euKW.png',
      name: 'Jin',
      status: 'Online',
    },
    {
      img: 'https://i.imgur.com/hzjtcTn.png',
      name: 'Jimin',
      status: 'Online',
    },
    {
      img: 'https://i.imgur.com/BDh2Vrg.png',
      name: 'RM',
      status: 'Online',
    },
    {
      img: 'https://i.imgur.com/rMsKr4c.png',
      name: 'V',
      status: 'Online',
    },
    {
      img: 'https://i.imgur.com/Qbe8187.png',
      name: 'J Hope',
      status: 'Online',
    },
    {
      img: 'https://i.imgur.com/1bETZvb.png',
      name: 'Jungkook',
      status: 'Online',
    },
  ];

  return (
    <>
      <Head>
        <title>KPOP Live Chat</title>
        <meta
          name="description"
          content="Talk to your favourite bts members for free"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.choose}>
          {members.map((member, index) => {
            return (
              <div
                className={styles.member}
                key={index}
                onClick={() => Router.push(`/member/${member.name}`)}
              >
                <img src={member.img} />
                <div className={styles.details}>
                  <h2>{member.name}</h2>
                  <p>{member.status}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.howTo}>
          <p>Select a BTS Member to start a conversation</p>
        </div>
      </div>
    </>
  );
}
