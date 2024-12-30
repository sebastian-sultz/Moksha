import { NavLink } from 'react-router-dom';

const HeaderBottom = () => {
    return (
        <div className='flex justify-between bg-sec h-16 text-gray-700'>
            <div className="w-4/12 mx-6 my-auto text-sm text-center md:text-base md:text-left lg:text-lg lg:text-left">
                <p>Your Own Mental Health Assistant</p>
            </div>
            <div className='mx-10 my-auto w-8/12'>
                <ul className="flex justify-between text-center text-sm md:text-base">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'text-bgcolor' : ''}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/mission"
                            className={({ isActive }) => isActive ? 'text-bgcolor': ''}
                        >
                            Our Mission
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/help"
                            className={({ isActive }) => isActive ? 'text-bgcolor' : ''}
                        >
                            Finding Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/feelGood"
                            className={({ isActive }) => isActive ? 'text-bgcolor' : ''}
                        >
                            Feel Good
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderBottom;
