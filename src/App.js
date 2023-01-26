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
  text-decoration-color: linear-gradient(225deg, #00a0ff 0%, #24d59c 100%);
  transform-origin: 0px 12.9px;
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
      transform: scaleX(1);
      transform-origin: bottom left;

      > a {
        color: #00a0ff;
      }
    }

    > a {
      text-decoration: none;
      color: #ffffff;
      font-family: Unbounded;
      font-weight: 200;
      font-size: 1em;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const logoNavigationStyles = css`
  text-decoration: none;
  margin-left: 200px;
  font-family: Unbounded;
  font-size: 3em;
  font-weight: 600;
  color: white;
`;

const facetLogoNavigationStyles = css`
  font-family: Unbounded;
  font-weight: 200;
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

  h1 {
    font-family: Unbounded;
    font-weight: 600;
  }

  p {
    font-family: Unbounded;
    font-weight: 200;
  }
`;

const rightSideNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  margin-right: 200px;

  :hover {
    transform: scale(1.05);a
  }
`;

const filledButtonStyles = css`
  background-image: linear-gradient(225deg, #00a0ff 0%, #24d59c 100%);
  font-family: Unbounded;
  font-weight: 200;
  color: white;
  margin-right: 24px;
  font-family: Unbounded;
  font-size: 1rem;
  height: 50px;
  padding: 0 40px;
  line-height: 50px;
  border-radius: 25px/25px;
  margin-top: 25px;

  a:hover {
    transform: scale(1.05);
  }
`;

const outlineButtonStyle = css`
  margin-top: 24px;
  border: solid 1.5px white;
  color: white;
  margin-right: 24px;

  height: 50px;
  padding: 0 40px;
  line-height: 50px;
  border-radius: 25px/25px;
  max-width: max-content;

  a:hover {
    transform: scale(1.05);
  }

  > a {
    font-weight: 500;
    font-size: 1rem;
    font-family: Unbounded;
    text-decoration: none;
    color: white;
  }
`;

const topicSectionLayoutStyles = css`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  height: 100vh;
  margin-top: 120px;
  max-width: 30%;

  h3 {
    font-family: Unbounded;
    font-weight: 400;
    display: inline-block;
    text-transform: uppercase;
    color: #6f7f9c;
    font-size: 14px;
    font-weight: 500;
  }

  h1 {
    font-family: Unbounded;
    font-weight: 600;
    display: inline-block;
    font-size: 64px;
    line-height: 60px;
  }

  p {
    font-size: 14.3625px / 21.5438px (1.5);
    margin: 0;
    line-height: 1.5em;
    font-family: Unbounded;
    font-weight: 100;
  }
`;

const topicsWrapperStyles = css`
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: space-between;
  margin-left: 40px;

  > iframe {
    margin-top: 100px;
    object-fit: contain;
    overflow: hidden;
  }
`;

const iFrameWrapperStyles = css`
  overflow: hidden;
  margin-bottom: 200px;
`;

const iFrameStyles = css`
  border-radius: 2%/2.756%;
`;

const cardSectionTitleStyles = css`
  font-weight: 500;
  font-family: Unbounded;
  font-size: 44.6px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0;
  margin-bottom: 100px;
`;

const cardsSectionFlexStyles = css`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  column-gap: 1em;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;

  li {
    max-width: 217px;
    max-height: 456.65px;
  }
`;

const cardSectionDescription = css`
  align-items: center;

  a {
    text-decoration: none;
    list-style-type: none;
    color: #a2a6b4;
    font-family: Unbounded;
    font-size: 15px;
  }
`;

const logoSectionWrapperStyles = css`
  margin-bottom: 100;
`;
const scaleImagesStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const cardSectionWrapperStyles = css`
  margin: 0;
  height: 100vh;
  width: 100vw;
`;

const logoSectionLayoutStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  align-items: center;
  justify-content: space-evenly;
  justify-items: center;
  gap: 1px;
  text-decoration: none;
  margin-bottom: 100px;

  li {
    list-style: none;
    text-decoration: none;
  }

  > li {
    max-width: 200px;
    max-height: 200px;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const centerSectionLayoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  margin-left: 200px;
  margin-right: 200px;

  h2 {
    color: -webkit-linear-gradient(#af2ff5, #fa294c);
    font-size: 50px;
    font-family: Unbounded;
    font-weight: 600;
    line-height: 56px;
  }

  p {
    font-family: Unbounded;
    font-weight: 200;
    align-items: center;
    justify-content: center;
    line-height: 33px;
  }
`;

const pinkFilledButtonStyles = css`
  background-image: linear-gradient(65deg, #af2ff5 0%, #fa294c 100%);
  font-family: Unbounded;
  font-weight: 100;
  color: white;
  margin-right: 24px;
  font-family: Unbounded;
  font-size: 1rem;
  height: 50px;
  padding: 0 40px;
  line-height: 50px;
  border-radius: 25px/25px;
  margin-top: 25px;
  text-decoration: none;

  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.05);
  }
`;

const photoGridLayoutStyles = css`
  margin-top: -120px;
  min-height: 50vh;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  justify-content: space-evenly;

  ul {
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    gap: 0px;
    isolation: isolate;
    overflow: hidden;
  }

  li {
    list-style: none;
    overflow: hidden;
  }

  img {
    position: relative;
    display: flex;
    text-decoration: none;
    max-width: 100%;
    max-height: 100%;
    text-decoration: none;
  }

  h4 {
    font-family: Unbounded;
    font-size: 1.4em;
    position: relative;
    text-align: left;
    bottom: 140px;
    left: 15px;
    width: 50%;
    padding: 0 0 2rem 2rem;
  }
`;

const footerLayoutStyles = css`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
const footerWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 80px;
  font-size: 16px;
`;
const footerTitleStyles = css`
  font-family: Unbounded;
  font-size: 28px;
  font-weight: bold;
`;

const footerBlockStyles = css`
  display: grid;
  grid-template-columns: minmax(0, auto);
  font-family: Unbounded;
  font-size: 16px;
  font-weight: 200;
  color: white;
  line-height: 40px;

  a {
    list-style: none;
    text-decoration: none;
    color: white;
  }
`;

const navWrapperStyles = css`
  flex-wrap: wrap;
  padding: 100px;
`;

const logoNavLayoutStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  gap: 80px;

  li {
    list-style: none;
    text-decoration: none;
    color: white;
  }
  img:hover {
    transform: scale(1.5);
  }
`;

const logoNavStyles = css`
  filter: invert(100%);
  max-width: 26px;
  max-height: 22px;
  padding: 10px 20px;
`;

const fullPhotoSectionStyles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: center;
`;

const fullPhotoLayoutStyles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: center;
  border-radius: 20px;
`;

function App() {
  return (
    <>
      <header css={navigationStyles}>
        <div>
          <div css={logoNavigationStyles}>F</div>
        </div>
        <div css={facetLogoNavigationStyles}> Facet</div>
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
          <a href="/" css={filledButtonStyles}>
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
          <a href="/" css={filledButtonStyles}>
            {' '}
            Sign up for free
          </a>
        </section>
      </main>
      <div css={topicsWrapperStyles}>
        <div css={topicSectionLayoutStyles}>
          <h3>Automasking</h3>
          <h1>Edit smarter, not harder</h1>
          <p>
            Edit intuitively with Facet’s auto-mask tool. Need to make
            adjustments to people, backgrounds, clothing, hair, objects, and
            more? Facet automatically identifies, isolates, and selects content
            for you—whether you have one image or a thousand, no lasso tool
            required. Just like you, our editor thinks in content, not pixels.
          </p>
          <div css={outlineButtonStyle}>
            <a href="/">Try search</a>
          </div>
        </div>
        <br />
        <div css={iFrameWrapperStyles}>
          <iframe
            css={iFrameStyles}
            width="1166.76"
            height="601.6"
            src="https://videos.ctfassets.net/mr3rq4v994tj/2hIcTnd2zLebfQoW0iuTwd/24f4aadde52ea5cfa1afc6db500926a3/Automask__1_.mp4"
            title="YouTube video player"
            allow="autoplay muted loop"
            allowfullscreen
            sandbox=""
          />
        </div>
      </div>
      <section css={cardSectionWrapperStyles}>
        <h2 css={cardSectionTitleStyles}>
          Loved by <span css={underlinedSectionStyles}> creative pros </span>
        </h2>
        <ul css={cardsSectionFlexStyles}>
          <li>
            <div>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5V8Zk2936QLp9OKiM09Hdx%2F3319b7091dded9f61ab29e365faacc22%2FSimoneHutsch_Stargazing_1.jpeg%3Fw%3D600&w=1920&q=75"
                alt="architectur"
              />
            </div>
            <p css={cardSectionDescription}>
              <a href="https://www.heysupersimi.com/?ref=landingfolio">
                Simone Hutsch, Designer and Illustrator, London
              </a>
            </p>
          </li>
          <li>
            <div>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5CIB1XR4iV5JPpAPQH2eQJ%2Faade720ddae6c3c06e0abfebd2959d15%2Fgnomes11.png%3Fw%3D600&w=3840&q=75"
                alt="zwerge"
              />
            </div>
            <p css={cardSectionDescription}>
              <a href="https://www.instagram.com/musfira/?ref=landingfolio">
                Musfira Shaffi, Strategist, Fribourg
              </a>
            </p>
          </li>
          <li>
            <div>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F3f0phORInOLpAdIZR6LKhC%2F9e36a6548aea8275fce5f6403473f393%2F12_V1.webp%3Fw%3D600&w=3840&q=75"
                alt="skyline"
              />
            </div>
            <p css={cardSectionDescription}>
              <a href="https://www.lilykenyi.com/?ref=landingfolio">
                Lily Kenyi, Visual Artist, NYC
              </a>
            </p>
          </li>
          <li>
            <div>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F3We4bpnPAVpz90FTaU3i3F%2F1cded3c0005cff39c883eb3e8a7d3bc5%2FCLARA_BEATRIZ_FACET_UNSPLASH-7_C.webp%3Fw%3D600&w=3840&q=75"
                alt="flowers"
              />
            </div>
            <p css={cardSectionDescription}>
              <a href="https://clarabeatriz.com/?ref=landingfolio">
                Clara Beatriz, Photographer, Gramado
              </a>
            </p>
          </li>
          <li>
            <div>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F67oBzyDNbXXCn2bnbdsFbD%2Fe51a72cda2eb2d7b7015978018c4e6b7%2FBuzludzha_-_1.webp%3Fw%3D600&w=3840&q=75"
                alt="red"
              />
            </div>
            <p css={cardSectionDescription}>
              <a href="https://gabriellaachadinha.com/?ref=landingfolio">
                Gabriella Achadinha, Photographer, Berlin
              </a>
            </p>
          </li>
          <li>
            <div>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F6EQ47k3k0z6oDs4QwdBMfM%2Ff2a170215aa49b479da7a694eedc5364%2FTIGGY-3-_1_.jpeg%3Fw%3D600&w=3840&q=75"
                alt="new photos"
              />
            </div>
            <p css={cardSectionDescription}>
              <a href="https://www.jessiemorganphoto.com/?ref=landingfolio">
                Jessie Morgan, Photographer, London
              </a>
            </p>
          </li>
        </ul>
      </section>
      <section css={logoSectionWrapperStyles}>
        <div>
          <ul css={logoSectionLayoutStyles}>
            <li>
              <a>
                <img
                  css={scaleImagesStyles}
                  src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F3EzKGLkJSKXgtKqgyjB81p%2F2363b6dd3b6115a3a2c54a9f2ba2ef27%2FTechCrunch.svg%3Fw%3D1200&w=3840&q=75"
                  alt="tech crunch"
                />
              </a>
            </li>
            <li>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F2ayH0iz8UKGLf2Rc9QFPBu%2F8af0dcb0d8a29d4a515bbf9a95cb9b36%2FPetaPixel.svg%3Fw%3D1200&w=3840&q=75"
                alt="PetaPixel"
              />
            </li>
            <li>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2FHDmfeSoUrEotZJaeoWbbo%2Fa549aa8c6530491446f44322ec2e3c1f%2FProduct_Hunt.svg%3Fw%3D1200&w=3840&q=75"
                alt="ProductHunt"
              />
            </li>
            <li>
              <img
                css={scaleImagesStyles}
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F4TbCsvSxXI0Lq6RnElciN4%2F4d5b6dba16675771bc9bc1fe5a2f79a6%2FFilterGrade.svg%3Fw%3D1200&w=3840&q=75"
                alt="filterGrade"
              />
            </li>
          </ul>
        </div>
      </section>
      <section css={fullPhotoSectionStyles}>
        <img
          css={fullPhotoLayoutStyles}
          src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F9FZkRU4LOCZZPlXUsxbU1%2F1603c9b64d807535a75100445e57755f%2FBrowsers__4___1__copy.webp%3Fw%3D1433&w=3840&q=90"
          alt="screendesign"
        />
      </section>
      <section css={centerSectionLayoutStyles}>
        <h2> Join the Facet community</h2>
        <p>
          Relive and remix Facet sessions from creative pros around the world.
          <br />
          Explore and refine your process together with the Facet community.{' '}
        </p>
        <a href="/" css={pinkFilledButtonStyles}>
          Check out facet.space
        </a>
      </section>
      <section css={photoGridLayoutStyles}>
        <ul>
          <li>
            <img
              src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5PGPACxvDxnhjJlrpFZxT1%2F583b2aab526908a606f5e986f28f8c4f%2F03_V2_small.jpeg%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
              alt="architecture"
            />
            <h4>Two Tone by Lily Kenyi</h4>
          </li>
          <li>
            <a>
              <img
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F2J5WEV9kRwxv8VsdDVvJlE%2F5252a7f43dab589befd351bef6180021%2FTA__1811_small.png%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
                alt="architecture"
              />
              <h4>Architectural Pop by Simone Hutsch</h4>
            </a>
          </li>
          <li>
            <a>
              <img
                src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5PGPACxvDxnhjJlrpFZxT1%2F583b2aab526908a606f5e986f28f8c4f%2F03_V2_small.jpeg%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
                alt="architecture"
              />
              <h4>Portraits by Ngozi Ejionueme</h4>
            </a>
          </li>
          <li>
            <img
              src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5PGPACxvDxnhjJlrpFZxT1%2F583b2aab526908a606f5e986f28f8c4f%2F03_V2_small.jpeg%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
              alt="architecture"
            />
            <h4>Organic Dreams by Clara Beatriz</h4>
          </li>
          <li>
            <img
              src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5PGPACxvDxnhjJlrpFZxT1%2F583b2aab526908a606f5e986f28f8c4f%2F03_V2_small.jpeg%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
              alt="architecture"
            />
            <h4>Two Tone by Lily Kenyi</h4>
          </li>
          <li>
            <img
              src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F2J5WEV9kRwxv8VsdDVvJlE%2F5252a7f43dab589befd351bef6180021%2FTA__1811_small.png%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
              alt="architecture"
            />
            <h4>Architectural Pop by Simone Hutsch</h4>
          </li>
          <li css>
            <img
              src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5PGPACxvDxnhjJlrpFZxT1%2F583b2aab526908a606f5e986f28f8c4f%2F03_V2_small.jpeg%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
              alt="architecture"
            />
            <h4>Portraits by Ngozi Ejionueme</h4>
          </li>
          <li>
            <img
              src="https://facet.ai/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmr3rq4v994tj%2F5PGPACxvDxnhjJlrpFZxT1%2F583b2aab526908a606f5e986f28f8c4f%2F03_V2_small.jpeg%3Fh%3D740%26fit%3Dfill%26f%3Dface%26w%3D942&w=2048&q=75"
              alt="architecture"
            />
            <h4>Organic Dreams by Clara Beatriz</h4>
          </li>
        </ul>
      </section>
      <footer css={footerWrapperStyles}>
        <div css={footerLayoutStyles}>
          <div css={footerTitleStyles}>Facet</div>
          <div css={footerBlockStyles}>
            <a href="/"> Product</a>
            <a href="/"> Features</a>
            <a href="/"> Pricing</a>
            <a href="/"> Batch</a>
            <a href="/"> Automasking</a>
            <a href="/"> Multiplayer</a>
            <a href="/"> Artboards</a>
          </div>
          <div css={footerBlockStyles}>
            <a href="/"> Product</a>
            <a href="/"> Features</a>
            <a href="/"> Pricing</a>
            <a href="/"> Batch</a>
          </div>
          <div css={footerBlockStyles}>
            <a href="/"> About</a>
            <a href="/"> Features</a>
            <a href="/"> Pricing</a>
            <a href="/"> Batch</a>
            <a href="/"> Batch</a>
          </div>
          <div css={footerBlockStyles}>
            <a href="/"> Get Started</a>
            <a href="/"> Features</a>
            <a href="/"> Pricing</a>
          </div>
        </div>
      </footer>
      <nav css={navWrapperStyles}>
        <ul css={logoNavLayoutStyles}>
          <li>
            <img
              css={logoNavStyles}
              src="https://cdn-icons-png.flaticon.com/128/3046/3046127.png"
              alt="tiktok"
            />
          </li>
          <li>
            <img
              css={logoNavStyles}
              src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png"
              alt="instagram"
            />
          </li>
          <li>
            <img
              css={logoNavStyles}
              src="https://cdn-icons-png.flaticon.com/128/4138/4138191.png"
              alt="linkedin"
            />
          </li>
          <li>
            <img
              css={logoNavStyles}
              src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"
              alt="icon 4"
            />
          </li>
          <li>
            <img
              css={logoNavStyles}
              src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png"
              alt="linkedin"
            />
          </li>
          <li>
            <img
              css={logoNavStyles}
              src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png"
              alt="twitter"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
