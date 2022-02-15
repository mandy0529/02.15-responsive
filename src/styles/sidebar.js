import styled from "styled-components";

export const SidebarContainer = styled.div`
  text-align: center;
  color: black;
  .sidebar {
    background: lightblue;
    width: 100%;
    min-height: 100vh - 5rem;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .links {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }
  .links a {
    display: flex;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: white;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--main-3);
    color: white;
    font-weight: bold;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
