/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const navigationStyles = css`
  position: fixed;
  gap: 2rem;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--padded-header-height);
  margin-right: 0px;
`;

const underlinedSectionStyles = css`
  text-decoration: underline;
`;

const navAlignmentStyles = css`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 2rem;
  align-items: center;
  justify-content: end;
`;

const navigationMenuStyles = css`
  list-style-type: none;
  justify-content: end;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 24px;

  li {
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid #00a0ff;

      > a {
        color: #00a0ff;
      }
    }

    > a {
      text-decoration: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 1.1rem;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const logoNavigationStyles = css`
  background-color: #f7fafc;
  background-image: url(/.FacetLogo.png);
  background-position: 60% 0px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 72px 0;
`;

const heroSectionParagraphStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 96px;
  font-style: bold;
  margin: 0;
  line-height: 1.2em;
`;

const heroSectionLayoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  line-height: 30.2px;
`;

const rightSideNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-right: 300px;

  :hover {
    transform: scale(1.05);a
  }
`;

const buttonStyles = css`
  background-image: linear-gradient(225deg, #00a0ff 0%, #24d59c 100%);
  text-decoration: none;
  color: white;
  margin-right: 24px;
  font-weight: 500;
  font-size: 1rem;
  height: 50px;
  padding: 0 40px;
  line-height: 50px;
  border-radius: 25px/25px;

  a:hover {
    transform: scale(1.05);a
  }
`;

function App() {
  return (
    <>
      <header css={navigationStyles}>
        <div>
          <a href="/#"> Facet</a>
        </div>
        <nav css={navAlignmentStyles}>
          <ul css={navigationMenuStyles}>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </nav>
        <div css={rightSideNavigationStyles}>
          <a href="/" css={buttonStyles}>
            Get started
          </a>
        </div>
      </header>
      <main>
        <section css={heroSectionLayoutStyles}>
          <h1 css={heroSectionParagraphStyles}>
            Image creation,
            <span css={underlinedSectionStyles}>reimagined</span>
          </h1>
          <p>
            Facet is the first AI-powered image editor, empowering artists to do
            what they do best: create.
          </p>
          <a href="/" css={buttonStyles}>
            {' '}
            Sign up for free
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
