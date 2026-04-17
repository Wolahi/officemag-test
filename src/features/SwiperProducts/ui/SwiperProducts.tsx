import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import styles from './SwiperProducts.module.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';
import TestBeStarImage from '@/shared/assets/images/BeStar.webp';
import { Typography } from '@/shared/ui';

const products = [
  {
    id: 1,
    title: 'Набор настольный BESTAR «Amenhotep»',
    description: '8 предметов, двойной лоток, светлая вишня',
    image: TestBeStarImage,
  },
  {
    id: 2,
    title: 'Набор настольный BESTAR «Charon»',
    description: '7 предметов, двойной лоток, красное дерево',
    image: TestBeStarImage,
  },
  {
    id: 3,
    title: 'Набор настольный BESTAR «Charon»',
    description: '7 предметов, двойной лоток, орех',
    image: TestBeStarImage,
  },
  {
    id: 4,
    title: 'Набор настольный BESTAR «Hercules»',
    description: '5 предметов, двойной лоток, красное дерево',
    image: TestBeStarImage,
  },
  {
    id: 5,
    title: 'Набор настольный BESTAR «Hercules»',
    description: '5 предметов, двойной лоток, светлый',
    image: TestBeStarImage,
  },
];

const SwiperProducts = () => {
  return (
    <div className={styles.root}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={16}
        className={styles.swiper}
        slidesPerView={4}
        scrollbar={{
          draggable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <div className={styles.titleWrapper}>
                <Typography type='h2'>{product.title}</Typography>
                <Typography>{product.description}</Typography>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProducts;
