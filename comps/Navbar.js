// import Link from 'next/link'
import Link from 'next/link'

const Navbar = () => {
    return (
        
        <nav>
            <div class="logo-content">
                <div class="row align-items-end">
                    <div class="nav-item">
                        <a href="./project/main.html" class="nav-link"><h3>Projects</h3></a>
                    </div>
                    <div class="col button_search">
                        <h3>Search</h3>
                    </div>
				</div>
			</div>

            <div className='navbar_content'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link href="/">
                        <a className='nav-link'>Home</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="/about">
                        <a className='nav-link'>About Us</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="/">
                        <a className='nav-link'>Products</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="/">
                        <a className='nav-link'>Engineering</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="/jobs">
                        <a className='nav-link'>Jobs</a>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link href="/">
                        <a className='nav-link'>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div> 
        </nav>
        
    );
}

export default Navbar;