import { deleteTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href='#!'
          className='secondary-content'
          onClick={() => {
            deleteTech(tech.id);
            M.toast({
              html: `Tech ${tech.firstName} ${tech.lastName} was deleted from technicians.`,
            });
          }}
        >
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
