import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://robinsonroa.dev">Primary link</Link>
    <Link secondary href="https://robinsonroa.dev">
      Secondary link
    </Link>
  </StoryContainer>
);
