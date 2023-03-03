import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // let [a, setA] = useState("Hello");
  // // let a = "Sourav"
  // // let handleClick = ()=>{
  // //   a++
  // //   setA(a)
  // //   console.log(a)

  // // }

  // useEffect(() => {
  //   setA("Sourav Acherjee")
  // },[]);
  let [show, setShow] = useState(false);
  let [name,setName] = useState("Show Data")
  let [userlist, setUserList] = useState([]);

  useEffect(() => {
    async function users(){
      let user = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserList(user.data)
    }
    users()
  }, []);

  let handleClick = ()=>{
    setShow(!show)

    
  }


  return (
    <>
      <div className='container'>
        <h1 className='tittle'>User Information</h1>

        <div className='table'>
          <div className='headerRow'>
              <div className='id id_width'>
                <h3>ID</h3>
              </div>
              <div className='id name_width'>
                <h3>Name</h3>
              </div>
              <div className='id username_width'>
                <h3>Username</h3>
              </div>
              <div className='id email_width'>
                <h3>Email</h3>
              </div>
              <div className='id phone_width'>
                <h3>Phone</h3>
              </div>
              <div className='address_width'>
                {/* <h3>Address</h3> */}
                <div className='address'>
                  <h3>Address</h3>
                </div>
                <div className='Adress_info'>
                  <div className='street street_width'>
                    <h3>Street</h3>
                  </div>
                  <div className='street street_width'>
                    <h3>Suite</h3>
                  </div>
                  <div className='street street_width'>
                    <h3>City</h3>
                  </div>
                  <div className='street street_width'>
                    <h3>Zipcode</h3>
                  </div>
                  <div className='geo geo_width'>
                    <div className='geo_item'>
                      <h3>Geo</h3>
                    </div>
                    <div className='geo_item2'>
                      <div className='lat'>
                        <h3>Lat.</h3>
                      </div>
                      <div className='lng'>
                        <h3>Lng.</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='id company_width'>
                <h3>Company</h3>
              </div>
              <div className='id website_width'>
                <h3>Website</h3>
              </div>
          </div>
        </div>
        {
            show ? userlist.map(item=>(
              <div className='dataRow'>
                <div className='idData'>
                  <h3>{item.id}</h3>
                </div>
                <div className='namedata'>
                  <h3>{item.name}</h3>
                </div>
                <div className='username'>
                  <h3>{item.username}</h3>
                </div>
                <div className='email'>
                  <h3>{item.email}</h3>
                </div>
                <div className='phone'>
                  <h3>{item.phone}</h3>
                </div>
                <div className='street_data'>
                  <h3>{item.address.street}</h3>
                </div>
                <div className='suite_data'>
                  <h3>{item.address.suite}</h3>
                </div>
                <div className='city_data'>
                  <h3>{item.address.city}</h3>
                </div>
                <div className='zipcode_data'>
                  <h3>{item.address.zipcode}</h3>
                </div>
                <div className='lat_data'>
                  <h3>{item.address.geo.lat}</h3>
                </div>
                <div className='lng_data'>
                  <h3>{item.address.geo.lng}</h3>
                </div>
                <div className='company_data'>
                  <h3>{item.company.name}</h3>
                </div>
                <div className='web_data'>
                  <h3>{item.website}</h3>
                </div>
              </div>
            )) : ""
          }
        {/* {
          userlist.map(item=>(
            <div className='dataRow'>
              <div className='idData'>
                <h3>{item.id}</h3>
              </div>
              <div className='namedata'>
                <h3>{item.name}</h3>
              </div>
              <div className='username'>
                <h3>{item.username}</h3>
              </div>
              <div className='email'>
                <h3>{item.email}</h3>
              </div>
              <div className='phone'>
                <h3>{item.phone}</h3>
              </div>
              <div className='street_data'>
                <h3>{item.address.street}</h3>
              </div>
              <div className='suite_data'>
                <h3>{item.address.suite}</h3>
              </div>
              <div className='city_data'>
                <h3>{item.address.city}</h3>
              </div>
              <div className='zipcode_data'>
                <h3>{item.address.zipcode}</h3>
              </div>
              <div className='lat_data'>
                <h3>{item.address.geo.lat}</h3>
              </div>
              <div className='lng_data'>
                <h3>{item.address.geo.lng}</h3>
              </div>
              <div className='company_data'>
                <h3>{item.company.name}</h3>
              </div>
              <div className='web_data'>
                <h3>{item.website}</h3>
              </div>
            </div>
          ))
        } */}
        {
          show 
          ?
          <div className='btn'>
            <button onClick={handleClick} className='showBtn'>Close Data</button>
          </div> :           <div className='btn'>
            <button onClick={handleClick} className='showBtn'>Show Data</button>
          </div>
        }

      </div>
    </>
  );
}

export default App;
