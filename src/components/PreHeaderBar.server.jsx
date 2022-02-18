import SearchBar from './Searchbar.client';

export default function PreHeaderBar() {
    return (
        <div className="px-5 flex py-3 z-20 w-full bg-neutral-900">
            <div className="social_icons flex-row">
                <a
                    href="https://twitter.com/skaraudio_?lang=en"
                    title="Skar Audio on Twitter"
                    rel="me noreferrer"
                    target="_blank"
                    className="fa fa-twitter px-4 hover:text-white"
                >
                    &nbsp;
                </a>
                <a
                    href="https://www.facebook.com/SkarAudio"
                    title="Skar Audio on Facebook"
                    rel="me"
                    target="_blank"
                    className="fa fa-facebook px-4 hover:text-white"
                >
                    &nbsp;
                </a>
                <a
                    href="https://www.youtube.com/user/skaraudio"
                    title="Skar Audio on YouTube"
                    rel="me"
                    target="_blank"
                    className="fa fa-youtube px-4 hover:text-white"
                >
                    &nbsp;
                </a>
                <a
                    href="https://www.instagram.com/skaraudioofficial"
                    title="Skar Audio on Instagram"
                    rel="me"
                    target="_blank"
                    className="fa fa-instagram px-4 hover:text-white"
                >
                    &nbsp;
                </a>
                <a
                    href="mailto:support@skaraudio.com"
                    title="Email Skar Audio"
                    className="fa fa-envelope-o px-4 hover:text-white"
                >
                    &nbsp;
                </a>
            </div>

            {/* Spacer to push search bar to the far right*/}
            <div className={'flex-grow'}>&nbsp;</div>

            <div>
                <a href={"login"} className={"mx-3 px-3 hover:text-white"}><i className={"fa fa-user-circle px-2"} /> Login</a>
                <SearchBar />
            </div>
        </div>
    );
}
