import futurborder from 'assets/futur-border.png';
import profileImgLarge from 'assets/profile_2.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile_2.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import { useTheme } from 'components/ThemeProvider';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hey folks!" start={visible} delay={500} />
    </Heading>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Robinson, currently I live in Caracas working as Software Engineer
      <Link href="https://www.qwilr.com">Qwilr</Link>. My projects include UX design, UI
      animations, and icon illustration. Being comfortable with code allows me to rapidly
      prototype and validate experiences. If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text> */}
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Robinson, currently I live in Caracas working as Software Engineer.
      My expertise spans system design, business modeling, and full-stack development. I have a strong knack for problem-solving and a deep understanding of software architecture. 
      Additionally, I&apos;ve led development teams and successfully delivered projects to advanced stages.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    In my downtime, I like to keep active with calisthenics, strum a few chords on my guitar, dive into video games, and enjoy a game of chess. Always up for new projects or just shooting the breeze, so feel free to drop me a line.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const theme = useTheme();


  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
         
                <div style={{position:'absolute', bottom:'-100px', right: '-150px'}}>
                  <Image
                    reveal
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[futurborder, futurborder]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 300px`}
                    style={(theme.themeId == 'dark')?{filter: 'invert(100%) sepia(100%)', opacity:'0.5' }:{  filter: 'invert(50%) sepia(0%) hue-rotate(20deg)', opacity:'1' }}
                    alt="What ya looking for?"
                  />
                </div>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
