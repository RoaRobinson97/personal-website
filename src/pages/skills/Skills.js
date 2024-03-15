import Barcode from 'assets/barcode.svg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { classes, cssProps } from 'utils/style';
import styles from './Articles.module.css';
const pdfUrl = `/documents/resume.pdf`;

const ArticlesPost = ({
  title,
  abstract,
  date,
  featured,
  banner,
  timecode,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDownload = () => {
    // Genera la URL del archivo PDF

    // Crea un enlace temporal
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Establece el atributo de descarga para el enlace
    link.setAttribute('download', 'robinson_resume.pdf');

    // Simula el clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Limpia el enlace temporal
    document.body.removeChild(link);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={{ src: banner }}
            placeholder={{ src: `${banner.split('.')[0]}-placeholder.jpg` }}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink  href={''} scroll={false} passHref={false}>
        <a
          className={styles.postLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'default' }}
        >
          <div className={styles.postDetails}>
            <div aria-hidden className={styles.postDate}>
              <Divider notchWidth="64px" notchHeight="8px" />
              {dateTime}
            </div>
            <Heading as="h2" level={featured ? 2 : 4}>
              {title}
            </Heading>
            <Text size={featured ? 'l' : 's'} as="p">
              {abstract}
            </Text>
            <div className={styles.postFooter}>
              <Button  style={{ cursor:'pointer' }} secondary iconHoverShift icon="chevronRight" as="div">
              <div style={{ cursor:'pointer' }}>
                <button  style={{ cursor:'pointer' }} onClick={handleDownload}>Download PDF</button>
              </div>              
              </Button>
              <Text className={styles.timecode} size="s">
                {timecode}
              </Text>
            </div>
          </div>
        </a>
      </RouterLink>
      {featured && (
        <Text aria-hidden className={styles.postTag} size="s">
          477
        </Text>
      )}
    </article>
  );
};

export const Skills = ({  featured }) => {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="My Skills" />
      </Heading>
      <Barcode />
    </header>
  );


  const featuredPost = <ArticlesPost   
  title='Latest Resume'
  abstract ='Review my resume for a detailed overview of my skills'
  date ={'2024-03-11'}
  featured ={true}
  banner = '/static/resumesc.png'
  timecode={12313}
  index={0}/>;

  return (
    <article className={styles.articles}>
      <Meta
        title="Skills"
        description="A collection of technical design and development skills"
      />
      <Section className={styles.content}>
        {true && (
          <div className={styles.grid}>
            
            <div className={styles.postDetails}>
              <div aria-hidden className={styles.postDate}>
                <Divider notchWidth="64px" notchHeight="8px" />
                {''}
              </div>
              <Heading as="h2" level={featured ? 2 : 4}>
                {'Mobile Development'}
              </Heading>
              <Text size={featured ? 'l' : 's'} as="p">
              From developing Flutter-based mobile apps to optimizing React Native applications, I possess a deep understanding of mobile technologies and best practices. Whether it&apos;s creating user-friendly interfaces or implementing complex functionalities, Im committed to delivering exceptional mobile experiences that meet the needs of users and exceed project objectives.
              </Text>
              <div className={styles.postFooter}>
          
                <Text className={styles.timecode} size="s">
                  <span style={{color: "rgb(250, 202, 40, 0.7"}}>
                  React Native, Flutter, Mobile UI/UX design, App Testing and Debugging, App Deployment, Backend Integration
                  </span>                   
                </Text>
              </div>
            </div>

            <div className={styles.postDetails}>
              <div aria-hidden className={styles.postDate}>
                <Divider notchWidth="64px" notchHeight="8px" />
                {''}
              </div>
              <Heading as="h2" level={featured ? 2 : 4}>
                {'Frontend Development'}
              </Heading>
              <Text size={featured ? 'l' : 's'} as="p">
              As a seasoned software engineer, I specialize in frontend web development, leveraging technologies such as React, Next.js, HTML, CSS, and JavaScript. My expertise lies in crafting intuitive and high-performance user interfaces that elevate the digital experience. With a keen eye for detail and a passion for innovation, I thrive in delivering exceptional web solutions that captivate users and drive business success.              </Text>
              <div className={styles.postFooter}>
          
                <Text className={styles.timecode} size="s">
                <span style={{color: "rgb(250, 202, 40, 0.7"}}>
                React, Next.js, HTML, SCSS, Material UI, Tailwind, Bootstrap
                </span>                
                </Text>
              </div>
            </div>

            <div className={styles.postDetails}>
              <div aria-hidden className={styles.postDate}>
                <Divider notchWidth="64px" notchHeight="8px" />
                {''}
              </div>
              <Heading as="h2" level={featured ? 2 : 4}>
                {'Backend Development'}
              </Heading>
              <Text size={featured ? 'l' : 's'} as="p">
              As a backend developer, I specialize in Node.js and Django for server-side development, along with databases like PostgreSQL, MySQL, and MongoDB. I&apos;m skilled in deploying to AWS and Azure, implementing CI/CD with GitHub Actions, and building RESTful APIs and GraphQL services for efficient communication between frontend and backend systems.              
              </Text>
              <div className={styles.postFooter}>
          
                <Text className={styles.timecode} size="s">
                <span style={{color: "rgb(250, 202, 40, 0.7"}}>

                Node.js, Django, Python, Java, Golang, PostgreSQL, MySQL, Microsoft SQL Server, Oracle Database, Firebase, MongoDB, AWS, Azure, GitHub Actions, Docker, Rest API, GraphQL                
                </span>
                </Text>
                
              </div>
            </div>
            {featuredPost}

            <div className={styles.postDetails}>
              <div aria-hidden className={styles.postDate}>
                <Divider notchWidth="64px" notchHeight="8px" />
                {''}
              </div>
              <Heading as="h2" level={featured ? 2 : 4}>
                {'Tech and Product Leadership'}
              </Heading>
              <Text size={featured ? 'l' : 's'} as="p">
              As an experienced Chief Technology and Product Officer, I excel in leading teams and projects to advanced stages. With a deep understanding of software architecture and business modeling, I implement streamlined workflows and modernize source code to drive efficiency. My strong communication skills and proactive approach to project management ensure successful execution and goal achievement              </Text>
              <div className={styles.postFooter}>
          
                <Text className={styles.timecode} size="s">
                  <span style={{color: "rgb(250, 202, 40, 0.7"}}>
                  Communication, Teamwork, Problem-solving, Attention to detail, Critical Thinking, Proactive, Project Management                
                  </span>

                  </Text>

              </div>
            </div>

          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {featuredPost}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};
