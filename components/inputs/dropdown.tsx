import React from 'react';

interface CustomDropdownProps {
  className: string;
  placeholder: string;
}
const CustomDropdown: React.FC<CustomDropdownProps> = ({
  className,
  placeholder,
}) => {
  return (
    <>
      <button
        data-dropdown-toggle='dropdownDivider'
        className={className}
        type='button'
      >
        {placeholder}
      </button>
      <div
        id='dropdownDivider'
        className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDividerButton'
        >
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className='py-2'>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Separated link
          </a>
        </div>
      </div>
    </>
  );
};

export default CustomDropdown;