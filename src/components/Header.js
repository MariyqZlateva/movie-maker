import React, {Component} from 'react';

const Header= ()=> {

        return (
            <div className="topnav">
                <a className="logo" href="/">Movie Maker</a>
                <div className="fa-search">
                    <form>
                        <a href="/">Add Movies</a>
                        <input type="text" placeholder="Search..." name="search"/>
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>


                </div>
            </div>
        );

}

export default Header;