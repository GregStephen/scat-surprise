import PropTypes from 'prop-types';

const scatShape = PropTypes.shape({
  sampleName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default { scatShape };
