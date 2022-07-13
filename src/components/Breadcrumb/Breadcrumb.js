import { Link } from 'react-router-dom';

const Breadcrumb = ({ title = '' }) => {
    return (
        <div className="bread-crumbs">
            <Link to="/">Users Management</Link>
        </div>
    );
};

export default Breadcrumb;