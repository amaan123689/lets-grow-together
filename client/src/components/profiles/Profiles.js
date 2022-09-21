import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  function handleChange(e) {
    function searchF(e) {
      console.log(e.target.value);
      setSearchTerm(e.target.value);
    }
    searchF(e);
  }

  useEffect(() => {
    searchData();
  }, [searchTerm]);

  const searchData = () => {
    console.log(searchTerm);
    if (searchTerm !== '') {
      const filteredData = profiles.filter((item) => {
        return (
          Object.values(item)
            .join('')
            .toLowerCase()
            .includes(searchTerm.toLowerCase()?.trim()) ||
          Object.values(item?.user)
            .join('')
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(profiles);
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            developers
          </p>
          {/* <div>
          <input placeholder="Search by keywords..." onChange={handleChange}/>
          </div> */}

          <div class="search">
            <input
              type="text"
              placeholder="Search by any keyword.."
              onChange={handleChange}
            />
          </div>

          <div className="profiles">
            {searchTerm?.length > 0
              ? filteredResults?.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              : profiles?.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))}
          </div>

          {/* <div className='profiles'>
            {
              (filteredResults?.length > 0 ? null : <h4>No profiles found...</h4>)
            }
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
