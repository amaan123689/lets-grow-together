import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  useEffect(() => {}, [getPosts]);

  const [searchField, setSearchField] = useState('');

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
  };

  const filteredData = posts.filter(filterFunction);

  function filterFunction(item) {
    if (searchField?.trim().length === 0) return item;
    return item?.text.toLowerCase().includes(searchField.toLowerCase()?.trim())
      ? item
      : null;
  }

  console.log(filteredData);

  return (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>

      <div class="search">
        <input
          type="text"
          placeholder="Search by any keyword.."
          onChange={handleChange}
        />
      </div>

      <PostForm />
      <div className="posts">
        {posts?.filter(filterFunction)?.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
