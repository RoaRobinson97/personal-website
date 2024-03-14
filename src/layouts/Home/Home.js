import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import avybephone from 'assets/avybephone.png';
import avybephone2 from 'assets/avybephone2.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import fence1 from 'assets/fence1.png';
import fence2 from 'assets/fence2.png';
import sliceTexture from 'assets/slice-app.jpg';
import laptopoly from 'assets/poly186capture.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Full Stack Development', 'Business Analysis', 'DevOps', 'Database Administration'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Computer Science"
        description="Design portfolio of Hamish Williams — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="profile"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Serving as Chief Technology and Product Officer"
        description="My Journey as Chief Technology and Product Officer at Poly186"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Poly186 builder',
          textures: [
            {
              srcSet: [laptopoly, laptopoly],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Avybe: Online Video Sharing Platform"
        description="Designed and developed features for a React Native-based video streaming application"
        buttonText="View App"
        buttonLink="https://play.google.com/store/apps/details?id=com.avybe.avybe&hl=es_PA&gl=US&pli=1"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [avybephone, avybephone],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [avybephone2, avybephone2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-3"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
        title="Fence: Social Distance"
        description="Directed design and development of a Flutter-based mobile solution, emphasizing social distancing."
        buttonText="View App"
        buttonLink="https://play.google.com/store/apps/details?id=com.fence.socialdistance&hl=es_419&gl=US"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [fence2, fence2],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [fence1, fence1],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
 
      <Footer />
    </div>
  );
};
