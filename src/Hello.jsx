import './Hello.css';
const Hello = ({name,surname}) => {
  return (
    <div className = "h11">
      <h1>Hello {name} {surname}🥷</h1>
      <div id = "email">adisask.sue@ku.th</div>
      <div className='box'>tel: 0991831659</div>
      
    </div>
  );
}

export default Hello;
