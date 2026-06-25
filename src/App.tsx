import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ExclamationCircleMIcon } from '@alfalab/icons-glyph/ExclamationCircleMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import firstPlaceImg from './assets/place1.svg';

import hbImg from './assets/hb.png';
import { listItems, phoneSlides } from './data';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const LINK =
  'alfabank://sdui_screen?endpoint=v1%2Fgrowthhack-widget-experiment%2Fwidgets%2F0c1eaaaa-f56e-4e81-8f3a-1043f0025e0f&presentationTypeWeb=PRESENT&title=%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B&screenName=loyalty_1_final';

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.boxHero}>
          <div>
            <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" weight="bold">
              Альфа-Шахматы
            </Typography.TitleResponsive>
            <Typography.Text view="primary-small" color="secondary">
              с призовым фондом
            </Typography.Text>
          </div>
          <img src={hbImg} alt="HB" width="100%" height={260} style={{ objectFit: 'contain' }} />
          <Typography.Text view="primary-small" color="secondary" style={{ maxWidth: '335px' }}>
            Участвуйте в онлайн турнире с оффлайн финалом в Москве
          </Typography.Text>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <Swiper slidesPerView="auto" spaceBetween={8} slidesOffsetAfter={20}>
            {phoneSlides.map((slide, index) => (
              <SwiperSlide style={{ width: 'fit-content' }} key={index}>
                <div className={appSt.slidePhone}>
                  <img src={slide.img} alt={`Phone Slide ${index + 1}`} width={200} />
                  <div>
                    <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <Typography.Text view="primary-small" color="secondary">
                      {slide.text}
                    </Typography.Text>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={appSt.boxAccess}>
          <div className={appSt.row}>
            <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
              Турнирный допуск
            </Typography.TitleResponsive>

            <div className={appSt.tag}>
              <Typography.Text view="primary-small" color="secondary">
                16+
              </Typography.Text>
            </div>
          </div>

          <PureCell className={appSt.bannerCell}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="secondary">
                  Примите участи в турнире с призовым фондом в 10 000 000 ₽
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Graphics verticalAlign="center">
              <ExclamationCircleMIcon color="#898991" />
            </PureCell.Graphics>
          </PureCell>

          <div className={appSt.list}>
            <PureCell className={appSt.listCell}>
              <PureCell.Graphics verticalAlign="center">
                <img src={firstPlaceImg} alt="First Place" width={44} height={44} style={{ transform: 'scale(1.5)' }} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <div className={appSt.row}>
                    <Typography.Text view="primary-medium" weight="medium">
                      Атомный огурец
                    </Typography.Text>
                    <Typography.Text view="primary-small" color="secondary">
                      104 победы
                    </Typography.Text>
                  </div>
                  <Typography.Text view="primary-small" color="secondary">
                    Оффлайн-полуфиналист
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
            </PureCell>
            {listItems.map((item, index) => (
              <PureCell className={appSt.listCellSecondary} key={index}>
                <PureCell.Graphics verticalAlign="center">
                  <img src={item.img} alt={item.title} width={44} height={44} />
                </PureCell.Graphics>
                <PureCell.Content>
                  <PureCell.Main>
                    <div className={appSt.row}>
                      <Typography.Text view="primary-medium" weight="medium">
                        {item.title}
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        {item.wins}
                      </Typography.Text>
                    </div>
                    <Typography.Text view="primary-small" color="secondary">
                      {item.subtitle}
                    </Typography.Text>
                  </PureCell.Main>
                </PureCell.Content>
              </PureCell>
            ))}
          </div>
          <Gap size={96} />
        </div>
      </div>

      <div className={appSt.bottomBtn}>
        <Button
          block
          view="primary"
          loading={loading}
          onClick={submit}
          style={{ borderRadius: '2rem' }}
          hint="Шахматы + Турнирный допуск"
          size={72}
        >
          Играть за 399 ₽
        </Button>
      </div>
    </>
  );
};
