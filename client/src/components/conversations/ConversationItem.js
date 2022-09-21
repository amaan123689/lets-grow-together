import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ConversationItem = ({
  conversation: {
    user: { _id, username, avatar }
  },
  auth
}) => {
  return (
    <div className="conversation">
      <img className="conversationImg" src={avatar} alt="" />
      <span className="conversationName">{username}</span>
    </div>
  );
};

ConversationItem.propTypes = {
  conversation: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ConversationItem);
