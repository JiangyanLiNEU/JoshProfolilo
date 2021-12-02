import { Home } from "./Components/Home";
import { Teaching } from './Components/Teaching';
import {Math} from './Components/Math';
import {CS} from './Components/CS';

import {Hobby} from './Components/Hobby'
import {Switch, Link, Route, HashRouter as Router} from 'react-router-dom';

export const App = () => {
  return (
      <div>
      {console.log('inside App component')}
      <Router>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Teaching' component={Teaching}/>
          <Route path='/CS'  component={CS}/>
          <Route path='/Math' component={Math}/>
          <Route path='/Hobbies' component={Hobby}/>
    </Switch>
     </Router>
      </div>
  );
};
//       {/* <React.StrictMode>
//         <HashRouter>
//         {/* <Route path='/' component={<Home/>}></Route>
//           <Route path='/Teaching' element={<Teaching/>}></Route>
//           <Route path='/CS' element={<CS/>}></Route>
//           <Route path='/Math' element={<Math/>}></Route>
//           <Route path='/Hobbies' element={<Hobby/>}></Route> */}
//         {/* </HashRouter>
//       </React.StrictMode> */}
// {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}></Route>
//           <Route path='/Teaching' element={<Teaching/>}></Route>
//           <Route path='/CS' element={<CS/>}></Route>
//           <Route path='/Math' element={<Math/>}></Route>
//           <Route path='/Hobbies' element={<Hobby/>}></Route>
//         </Routes>
//       </BrowserRouter>  */}
      
    

