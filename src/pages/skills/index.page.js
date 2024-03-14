import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { POSTS_PATH, postFilePaths } from 'utils/mdx';
import { formatTimecode } from 'utils/timecode';

export { Skills as default } from './Skills';

export function getStaticProps() {
  const allPosts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data, content } = matter(source);

    const { time } = readingTime(content);
    const timecode = formatTimecode(time);

    return {
      ...data,
      timecode,
      slug: 'resume'
    };
  });


  const posts = allPosts
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: { posts },
  };
}
