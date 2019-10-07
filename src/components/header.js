import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar fixed="top" light expand="sm">
        <Container>
          <Link to="/" className="nav-brand">{this.props.siteTitle}</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/team">Team</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/tags">Tags</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
