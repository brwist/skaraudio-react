import {useEffect, useState} from 'react';
import cheerio from 'cheerio';
import {Spinner} from './spinner.jsx';

export function DescriptionTabs({descriptionHtml}) {
  const [tabNames, setTabNames] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const $ = cheerio.load(descriptionHtml);
    const ul = $('ul');
    // console.log(ul);
    const tabs = $('li', ul[0]);
    // console.log(tabs);
    const tabNames = Array.from(tabs).map(
      (x) => x?.children?.[0]?.children?.[0]?.data,
    );
    // console.log(tabNames);
    setTabNames(tabNames);

    const content = $('> li', ul[1]);
    const sections = Array.from(content).map((x) => {
      console.log(x);
      return '<div>' + $.html(x.children) + '</div>';
    });
    setSections(sections);
  }, [descriptionHtml]);

  if (!tabNames.length) {
    return <Spinner />;
  }

  return <FourTabs tabNames={tabNames} sections={sections} />;
}

export function FourTabs({tabNames, sections}) {
  const [tab, setTab] = useState(tabNames?.[0]);

  const clickTab = (e, tabName) => {
    e.preventDefault();
    setTab(tabName);
  };

  return (
    <>
      <ul
        className="nav nav-tabs flex flex-col justify-left md:flex-row flex-wrap list-none pl-1 pb-0"
        id="tabs-tab"
        role="tablist"
      >
        {tabNames.map((tabName) => (
          <li className="nav-item" role="presentation" key={tabName}>
            <a
              href={'#' + tabName}
              onClick={(e) => clickTab(e, tabName)}
              className={
                `nav-link
              block
              font-medium
              text-xs
              leading-tight
              uppercase
              md:px-1
              md:py-1
              lg:px-3
              lg:px-3
              my-2
              hover:bg-gray-100
              focus:border-transparent ` + (tab === tabName ? 'active' : '')
              }
              id="tabs-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              {tabName}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        {tabNames.map((tabName, index) => (
          <div
            key={tabName}
            className={
              'prose tab-pane fade ' +
              (tab === tabName ? 'show active' : 'hidden')
            }
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            dangerouslySetInnerHTML={{__html: sections[index]}}
          ></div>
        ))}
      </div>
    </>
  );
}
