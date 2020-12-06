import React, { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';

import axios from 'axios';
const Portfolios = ({ posts }) => {
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('/api/v1/posts');
      const data = await res.json();
      debugger;
    };

    getPosts();
  }, []);

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li style={{ fontSize: 20 }} key={post.id}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1>Portfolios Page</h1>
        <ul>{renderPosts(posts)}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    posts = response.data;
    return { posts: posts.slice(0, 10) };
  } catch (error) {
    console.log(error);
  }
};

export default Portfolios;
