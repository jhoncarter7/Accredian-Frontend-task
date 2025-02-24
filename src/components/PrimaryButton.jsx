
import PropTypes from 'prop-types'

const PrimaryButton = ({text,icon, className, onClick}) => {
  return (
    <button onClick={onClick} className={`flex items-center cursor-pointer hover:bg-blue-600 transition-colors duration-300 text-white bg-blue-500 px-4 py-2 rounded-md ${className}`}>
    {text}
    {icon && <span className="ml-1 size-4">{icon}</span>}
  </button>
  )
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default PrimaryButton