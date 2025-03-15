
import styles from "/public/assets/css/InfiniteScrollCarousel.module.css"; // We'll define CSS here

const images = [
  "/assets/images/gallery.png",
  // Add as many images as you want
];

export default function InfiniteScrollCarousel() {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        {/* First copy of images */}
        {images.map((src, index) => (
          <div className={styles.imageContainer} key={`img-${index}`}>
            <img
              src={src}
              alt={`Scrolling image ${index}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        {/* Duplicate them so the scroll is seamless */}
        {images.map((src, index) => (
          <div className={styles.imageContainer} key={`img-dup-${index}`}>
            <img
              src={src}
              alt={`Scrolling image duplicate ${index}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
