import logo from './logo.svg';
import './App.css';
import { FullName,Bio, Profession,Image,Email,Foo } from './profile/Profile component';


function App() {
 const  styleObject={textAlign:'center',color:'blue' ,fontFamily:'Courier New, Courier, monospace',fontSize:'50px'}

  return (
        <div style={styleObject}>
      
        <FullName  name="rafik mami"/>
        <Bio bio="Welcome to My react application !"/>
        <Profession profession="fullstack js developer"/>
        <Image><img src={logo} alt="image"/></Image>
        <Email/>
        <Foo/>
        </div>
        
  )
}

export default App;
