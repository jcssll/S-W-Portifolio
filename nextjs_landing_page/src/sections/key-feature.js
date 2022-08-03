/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Interactive UI/UX Design',
    title: 'Interactive UI/UX Design',
    text:
      'Give your visitors an ease of use on your website or application.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Website Mockup Designs',
    title: 'Website Mockup Designs',
    text:
      'We provide clients with a wide range of web development services that help bring their vision to life.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Subscription',
    title: 'Maintenance Subscription',
    text:
      ' Our work is done with the utmost attention to detail, and is focused on a beautiful, fully functional, and user friendly final result... We even help to maintain it.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'We solve problems and develop opportunities that help place our clients ahead of their competition.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader
        slogan="What we do!"
        title="Here are some features we give to your site"
       />

       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
