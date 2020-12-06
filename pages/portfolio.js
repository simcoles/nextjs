import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import axios from 'axios';

const Portfolio = ({ portfolio }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <BasePage>
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body} </p>
        <p>ID: {portfolio.id} </p>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async (props) => {
  console.log('props', props.query);
  let portfolio = {};

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${props.query.id}`
    );
    portfolio = response.data;
  } catch (error) {
    console.log(error);
  }

  return { portfolio };
};

export default Portfolio;
