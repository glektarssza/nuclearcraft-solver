//-- NPM Packages
import React, {type FunctionComponent} from 'react';
import BsContainer from 'react-bootstrap/Container';
import BsNav from 'react-bootstrap/Nav';
import BsNavbar from 'react-bootstrap/Navbar';

/**
 * The properties used to render a {@link Navbar} component.
 */
export type NavbarProps = object;

/**
 * The main navigation bar component.
 */
export const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <BsNavbar className='bg-body-tertiary'>
            <BsContainer fluid>
                <BsNavbar.Brand href='#/home'>
                    Nuclearcraft Solver
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls='main-navbar-nav' />
                <BsNavbar.Collapse id='main-navbar-nav'>
                    <BsNav className='me-auto'>
                        <BsNav.Link href='#/home'>Home</BsNav.Link>
                        <BsNav.Link href='#/solver'>Solver</BsNav.Link>
                    </BsNav>
                    <BsNav>
                        <BsNav.Link href='#/settings'>
                            <span className='bi-gear-fill'> </span>
                            Settings
                        </BsNav.Link>
                    </BsNav>
                </BsNavbar.Collapse>
            </BsContainer>
        </BsNavbar>
    );
};

export default Navbar;
