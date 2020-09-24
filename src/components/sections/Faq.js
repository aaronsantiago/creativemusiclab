import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Cool! How can I support you?',
    content: () => (
      <>
        Creative Music Lab is in its first year and can use as much support from the community as possible!
        You can become a valued patron by donating <a href="https://gf.me/u/y2fdn3" target="_blank">here.</a>

      </>
    ),
  },
  {
    title: 'How can I get involved?',
    content: () => (
      <>
        We love to collaborate and hear from our community! You can submit an inquiry to hello@creativemusiclab.space. 
      </>
    ),
  },
  {
    title: 'How can I stay updated with Creative Music Lab?',
    content: () => (
      <>
        You can get the latest updates and news by subscribing to our
         <a href="http://eepurl.com/hegfnn" target="_blank"> mailing list.</a>
      </>
    ),
  },
  
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
