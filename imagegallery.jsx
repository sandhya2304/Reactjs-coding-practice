// ImageGallery.jsx
import React, { useState } from 'react';

function ImageGallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <p>No images to display</p>
      </div>
    );
  }

  const goPrev = () =>
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', textAlign: 'center' }}>
      <h2>Image Gallery</h2>

      {/* Main selected image */}
      <div
        style={{
          height: 420,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #ddd',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#fafafa',
          marginBottom: 12,
        }}
      >
        <button onClick={goPrev} style={{ marginRight: 12 }}>
          ◀
        </button>

        <img
          src={images[selectedIndex]}
          alt={`Selected ${selectedIndex + 1}`}
          style={{
            maxHeight: '100%',
            maxWidth: '80%',
            objectFit: 'contain',
            borderRadius: 6,
          }}
        />

        <button onClick={goNext} style={{ marginLeft: 12 }}>
          ▶
        </button>
      </div>

      {/* Thumbnails */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            style={{
              border:
                selectedIndex === i ? '2px solid #007bff' : '1px solid #ddd',
              padding: 0,
              borderRadius: 6,
              overflow: 'hidden',
              cursor: 'pointer',
              width: 90,
              height: 60,
            }}
          >
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      <p style={{ marginTop: 10, color: '#666' }}>
        {selectedIndex + 1} / {images.length}
      </p>
    </div>
  );
}

export default ImageGallery;



import React from 'react';
import ImageGallery from './ImageGallery'; // import correctly

const urls = [
  'https://picsum.photos/id/1018/1000/600',
  'https://picsum.photos/id/1015/1000/600',
  'https://picsum.photos/id/1016/1000/600',
  'https://picsum.photos/id/1024/1000/600',
];

function App() {
  return <ImageGallery images={urls} />;
}
export default App;
