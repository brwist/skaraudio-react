import {useState} from 'react';

export function DescriptionTabs() {
  const [tab, setTab] = useState('tab1');

  const isTab1 = tab === 'tab1';
  const isTab2 = tab === 'tab2';
  const isTab3 = tab === 'tab3';
  const isTab4 = tab === 'tab4';

  const clickTab = (e, tabName) => {
    e.preventDefault();
    setTab(tabName);
  };

  return (
    <>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            onClick={(e) => clickTab(e, 'tab1')}
            className={
              `nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent ` + (isTab1 ? 'active' : '')
            }
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            onClick={(e) => clickTab(e, 'tab2')}
            className={
              `
              nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
              ` + (isTab2 ? 'active' : '')
            }
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-messages"
            onClick={(e) => clickTab(e, 'tab3')}
            className={
              `
              nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
              ` + (isTab3 ? 'active' : '')
            }
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-contact"
            onClick={(e) => clickTab(e, 'tab4')}
            className={
              `
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent ` + (isTab4 ? 'active' : '')
            }
            id="tabs-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-contact"
            role="tab"
            aria-controls="tabs-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        <div
          className={'tab-pane fade ' + (isTab1 ? 'show active' : 'hidden')}
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          Tab 1 content
        </div>
        <div
          className={'tab-pane fade ' + (isTab2 ? 'show active' : 'hidden')}
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 2 content
        </div>
        <div
          className={'tab-pane fade ' + (isTab3 ? 'show active' : 'hidden')}
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 3 content
        </div>
        <div
          className={'tab-pane fade ' + (isTab4 ? 'show active' : 'hidden')}
          id="tabs-contact"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab"
        >
          Tab 4 content
        </div>
      </div>
    </>
  );
}
