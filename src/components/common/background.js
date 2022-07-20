import image from '../../assets/react.jpg'

export default function Background() {
  return (
    <div style={{
      height: '80vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundImage: `url(${image})`
    }}>
    </div>
  );
}