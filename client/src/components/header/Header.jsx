import './header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className='headerTitleSm'>React & Node</span>
                    <span className='headerTitleLg'>Blog</span>
                </div>
            </div>
            <img className='headerImg' 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxibG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            alt="" />
        </>
    );
}
