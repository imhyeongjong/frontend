/*eslint-disable*/
import './App.css'
import {useState} from 'react';
function App() {
  
  let [글제목, 글제목변경] = useState(['해린', '다니엘', '하니','혜인','민지']);
  let [하트,하트증가] = useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React 뉴진스블로그</h4>
        <img className='new' src="assets/img/7.jpeg" alt="logo"/>
      </div>
      
      {
        글제목.map(function(a,i){
        return(
          <div  className='aist' key={i}>
          <img   className='jinse' src={"assets/img/"+ (i + 2) +".jpeg"} alt="logo"/>
          <h4>{글제목[i]}<span onClick={() => {
            let as=[...하트];
            as[i]=as[i]+1;
            하트증가(as)}}>❤️</span>{하트[i]}
          </h4>
          </div>
        )
        }
      )
    }
      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
      <button className='s1'  onClick={() => {setModal(true)}}>노래</button>
      <button className='s2'  onClick={() => {
        let sor=[...글제목];
        sor=sor.sort();
        글제목변경(sor);
      }}>정렬</button>
      <button className='s3' onClick={() => {
            let copy=[...글제목];
            copy.splice([0],1);
            글제목변경(copy);
          }}>삭제</button>

    </div>
    
  );
}

function Modal(props) {
  return(
    <>
    <div className='Modal'>
      <h3>{props.글제목[0]}</h3>
      <h3>OMG</h3>
      <h3>Ditto</h3>
      <h3>Attention</h3>
      <h3>HypeBoy</h3>
      <button onClick={() => {props.글제목변경(['노래좋다❤️','해린', '다니엘','민지','혜인'])}}>수정</button>
    </div>
    </>
  )
}







export default App;
