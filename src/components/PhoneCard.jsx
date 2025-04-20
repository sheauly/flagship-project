import { Link} from "react-router";


const PhoneCard = ({phone}) => {
    const {name, image, description} = phone || {};
    return (
        <div className="card bg-base-100shadow-sm">
  <figure>
  <img src={image} alt="" />
  </figure>
  <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description }</p>
    <div className="card-actions justify-end">
                    <Link to='/phone-details'>
                        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 cursor-pointer">View More</button>
                    </Link>
    </div>
  </div>
</div>
    );
};

export default PhoneCard;