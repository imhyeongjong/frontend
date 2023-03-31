/*eslint-disable*/
import './App.css'
import {useState} from 'react';
function App() {
  
  let [글제목, 글제목변경] = useState(['해린', '다니엘', '하니','혜인','민지']);
  let [하트,하트증가] = useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [문자제목, 문자제목변경] = useState(['뉴진스', '영원히', '포레버']);
  let[title,setTitle]=useState(0);

  return (
    <div  className="App">
      <div className="black-nav">
        <h4>React 뉴진스블로그</h4>
        <img className='new' src="assets/img/7.jpeg" alt="logo"/>
      </div>

      <div className='newjinse1'>
      {
        글제목.map(function(a,i){
        return(
          <div  className='aist' key={i}>
          <img   className='jinse' src={"assets/img/"+ (i + 2) +".jpeg"} alt="logo"/>
          <h3 onClick={()=>{setModal(true); setTitle(i)}} >{글제목[i]}<span onClick={() => {
            let as=[...하트];
            as[i]=as[i]+1;
            하트증가(as)}}>❤️</span>{하트[i]}
          </h3>
          </div>
        );
        })}
        </div>

      {
        modal == true ? <Modal  글제목={글제목} 글제목변경={글제목변경} title={title} /> : null
      }

      <button className='s1'  onClick={() => {
        let sor=[...글제목];
        sor=sor.sort();
        글제목변경(sor);
      }}>정렬</button>

      <button className='s2' onClick={() => {
        let copy=[...글제목];
        copy.splice([0],1);
        글제목변경(copy);
      }}>삭제</button>
      
      <button className='s3' onClick={() => {
        let copy1=[...문자제목];
        copy1[0]='하이보이';
        문자제목변경(copy1);
      }}>글자1</button>

      <button className='s4' onClick={() => {
        let copy1=[...문자제목];
        copy1=copy1.sort();
        문자제목변경(copy1);
      }}>글자2</button>

      <div className='newzinse'>
        <h4>{문자제목[0]}</h4>
        <p>22년 7월 22일</p>
        
        <h4>{문자제목[1]}</h4>
        <p>22년 7월 22일</p>
        
        <h4>{문자제목[2]}</h4>
        <p>22년 7월 22일</p>
      </div>    
    </div>
  );
}

function Modal(props) {
  return(
    <>
    <div className='Modal'>
      <h2>{props.글제목[props.title]}</h2>
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
