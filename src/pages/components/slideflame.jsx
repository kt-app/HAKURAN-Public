import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import { generateSlides } from '../utils';

import '@splidejs/react-splide/css';

import { Link } from 'react-router-dom';

export const Slide = () => {




  return (


    <div className="wrapper">
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          type: 'loop',
          gap: '1rem',
          autoplay: true,
          pauseOnHover: true,
          resetProgress: false,
          // height: '14rem',
        }} hasTrack={false}>
        <SplideTrack className="bg-teal-100">
          <SplideSlide>
            <Link to="/class306">
              <p className='text-center'>306の劇</p>
              <img className="slide-img" src="/images/C306.png" alt="306" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to="/link">
              <p className='text-center'>学校のホームページ</p>
              <img className="slide-img" src="/images/school.png" alt="学校" />
            </Link>
          </SplideSlide>
          <SplideSlide>
            <Link to="/about">
              <p className='text-center'>このサイトについて</p>
              <div className='flex justify-center items-center pb-16'>
                <img className="slide-img mt-3" src="/images/info-square.svg" alt="サイト情報" />
              </div>
            </Link>
          </SplideSlide>
        </SplideTrack>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}

    </div>
  );
};