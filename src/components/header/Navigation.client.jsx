import {Link} from '@shopify/hydrogen/client';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {RenderDropDownMenus} from './render-menu.jsx';

export default function Navigation({collections, menu}) {
	// console.dir(collections, {depth: null});
	// const mid = Math.round(collections.length / 2);
	// const menu1 = collections.slice(0, mid);
	// const menu2 = collections.slice(mid);
	console.log(menu);
	const menu1 = menu.left.categories;
	const menu2 = menu.right.categories;

	return (
		<div className="flex flex-row">
			<div className={'hidden lg:flex flex-row justify-center flex-wrap'}>
				<RenderDropDownMenus categories={menu1}/>
			</div>
			<Link
				className={
					'font-black block uppercase text-3xl tracking-widest mx-auto' +
					'mx-auto '
				}
				to="/"
			>
				{/*{storeName}*/}//s
				<img
					className={'block transition-all ease-in-out duration-500'}
					src={'/image/site-logo.webp'}
					alt={'Site Logo'}
					style={{width: 205, height: 63}}
				/>
			</Link>

			<div className={'hidden lg:flex flex-row justify-center flex-wrap'}>
				<RenderDropDownMenus categories={menu2} alignRight={true}/>
			</div>
		</div>
	);
}

/**
 * A client component that defines the navigation for a web storefront
 */
export function _Navigation({collections}) {
	return (
		<nav className="hidden lg:block text-center">
			<ul className="md:flex items-center justify-center">
				{collections.map((collection) => (
					<li key={collection.id}>
						<Link
							to={`/collections/${collection.handle}`}
							className="block p-4 hover:opacity-80"
						>
							{collection.title}
						</Link>
						<ChevronDownIcon/>
					</li>
				))}
			</ul>
		</nav>
	);
}
