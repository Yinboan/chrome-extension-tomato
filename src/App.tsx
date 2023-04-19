import { useEffect, useState } from 'react'
import {
  onCLS,
onFCP,
onFID,
onINP,
onLCP,
onTTFB,
} from 'web-vitals';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [perfData,setPerfData] = useState<any []>([])
  console.log(111);
  // useEffect(()=>{
  //   alert(1)
    // onCLS(console.log);
    // onFID(console.log);
  //   onLCP((e)=>{alert(e?.value)});
  // },[])

  // FUNCTION
  const handleLog = ()=>{
    onCLS((({name,value})=>{
      setPerfData([{name,value}])
    }));
    onFID(({name,value})=>{
      setPerfData(state => [...state,{name,value}])
    });
    onLCP(({name,value})=>{
      setPerfData(state => [...state,{name,value}])
    });
    onFCP(({name,value})=>{
      setPerfData(state => [...state,{name,value}])
    });
    onINP(({name,value})=>{
      setPerfData(state => [...state,{name,value}])
    });
    onTTFB(({name,value})=>{
      setPerfData(state => [...state,{name,value}])
    });
  }
  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click times：  {count}
        </button>
        <button onClick={handleLog}>
          输出性能数据
        </button>
        <section>
        {perfData.map(item => {
          const {name,value} = item
          console.log(item);
          return <div>
            {name}:{value}
          </div>
        })}
        </section>
      </div>
      <div>
        location：{document.location +""}
        域名：{document.location.origin}
      </div>
    </div>
  )
}

export default App
