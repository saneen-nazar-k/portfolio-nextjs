import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function NavBarComponent() {
    return (
        <div className='navbar-position'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link nav-item-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-item-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-item-link" href="#">Gallery</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBarComponent;