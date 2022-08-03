/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import Shopify from 'assets/feature/shopify.png';
const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Shopify Partner',
    title: 'Shopify Partner',
    text:
      'We are Shopify Partners that can build a fully custom website with tools to capture your audience attention.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Wix Partners',
    title: 'Wix Partners',
    text:
      'Through our Wix Partnership we offer our service to create advanced design and layout capabilities that allow us to create complex website designs for any device. If you need to make constant edits and updates to your site without a hassle this is our option.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'React',
    title: 'React',
    text:
      'We build our applications in ReactJS for speed. If you want your visitors to avoid long load times to view your services or products then lets use the same technology that Netflix, Airbnb, and DropBox use for their advanced customer experience. ',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];

export default function Feature() {
  return (
  <section sx={{variant:'section.feature'}}>
    <Container>
      <SectionHeader
      slogan="Quality Service"
      title="Amazing Customer Service"
      />
      <Grid>
        {data.map((item) =>(
          <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
