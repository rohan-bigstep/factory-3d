import './Loader.css';
function Loader() {
  return (
    <div className='loader-container'>
    <div className='simple-spinner'>
      <span></span>
    </div>
    <h2 style={{color:'#686868'}}>Loading...</h2>
    </div>

  );
}

export default Loader;
