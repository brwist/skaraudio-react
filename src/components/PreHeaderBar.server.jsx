import SearchBar from './Searchbar.client';
import {Link} from "@shopify/hydrogen/client.js";
import CartToggle from "./CartToggle.client.jsx";
import {useState} from "react";

export default function PreHeaderBar() {
	// const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	return (
		<div className="px-5 flex justify-between py-3 z-20 w-full "
				 style={{backgroundColor: 'rgb(27,31,35)'}}
		>
			<div className={'flex-grow'}>&nbsp;t</div>

			{/* Spacer to push search bar to the far right*/}

			<div className={'flex-grow'}>
				<Link
					className={
						'font-black uppercase text-3xl tracking-widest'
					}
					to="/"
				>
					{/*{storeName}*/}
					<img className={"transition-all ease-in-out duration-500"}
							 src={'/image/site-logo.webp'} alt={"Site Logo"}
							 style={{width: 205, height: 63}}
					/>
				</Link>
			</div>

			<div className="d-flex">
				<SearchBar/>
				<a href={"login"} className={"mx-3 px-3 hover:text-white"}>
					<i className={"fa fa-user-circle px-2"}/> Login
				</a>
				<CartToggle
					// handleClick={() => {
						// if (isMobileNavOpen) setIsMobileNavOpen(false);
				/>
			</div>
		</div>
	);
}
