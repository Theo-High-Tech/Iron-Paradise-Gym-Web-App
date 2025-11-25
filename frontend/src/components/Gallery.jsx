const Gallery = () => {
  const gallery = [
    "/image21.jpg",
    "/image12.jpg",
    "/image14.jpg",
    "/image22.avif",
    "/image15.jpg",
    "/image17.jpg",
    "/image18.jpg",
    "/image20.jpg",
    "/image23.avif",
  ];
  return (
    <section className="gallery">
      <h1>Unleash Your Potential, Achieve Your Best</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;