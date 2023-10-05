import './App.css'
// eslint-disable-next-line no-unused-vars
import { Route, Routes, Link, useParams, Outlet} from 'react-router-dom'
import { dataUser } from './assets/dataUser'
// eslint-disable-next-line no-unused-vars

const Header =()=>{
  return (
    <div className='header'>
    <nav>
        <Link to='/'><img src="src/assets/logoVocaTest.png" alt="" /></Link>
        <div className="nav-links" id="navLinks">
          <ul>
            <li><a href="">INICIO</a></li>
            <li><a href="">SERVICIOS</a></li>
            <li><a href="">NOSOTROS</a></li>
          </ul>
        </div>
      </nav>
      <div className="text-box hidden">
        <h1>¿Quieres cambiar tu futuro?</h1>
          <h3>
          &quot;Disfruta la vida conociendo tu vocación&quot;<br />
           Página de orientación Vocacional.
        </h3>
        <a href="" className="hero-btn">Visítenos para saber más</a>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
      )
}

const Courses =()=>{
  return (
    <section className="course">
      <h1>¿Qué es educación vocacional?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="row">
        <div className="course-col hidden">
          <h3>Lorem 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus earum laudantium aut ipsa, hic nostrum quas aliquam
            nihil ex, sunt illum dolore rerum nisi, excepturi impedit unde
            nesciunt repudiandae voluptas?
          </p>
        </div>

        <div className="course-col hidden">
          <h3>Lorem 2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus earum laudantium aut ipsa, hic nostrum quas aliquam
            nihil ex, sunt illum dolore rerum nisi, excepturi impedit unde
            nesciunt repudiandae voluptas?
          </p>
        </div>

        <div className="course-col hidden">
          <h3>Lorem 3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus earum laudantium aut ipsa, hic nostrum quas aliquam
            nihil ex, sunt illum dolore rerum nisi, excepturi impedit unde
            nesciunt repudiandae voluptas?
          </p>
        </div>
      </div>
    </section>

  )
}

const Servicios=()=>{
  return (
    <div className="campus">
      <h1>Servicios</h1>
      Has uso de los siguientes servicios...

      <div className="row">
        <div className="campus-col">
          <img src="src/assets/london.png"/>
          <div className="layer">
            <Link to='/test'>
              <h3>Test</h3>
            </Link>
          </div>
        </div>

        <div className="campus-col">
          <img src="src/assets/newyork.png" alt="" />
          <div className="layer">
            <Link to='/programas-data' ><h3>Directorio</h3></Link>
          </div>
        </div>

        <div className="campus-col">
          <img src="src/assets/washington.png" alt="" />
          <div className="layer">
            <Link to='/respuestas-data'><h3>Datos</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Facilities=()=>{
  return (
    <div className="facilities">
      <h1>Beneficios.</h1>
      <p>Beneficios de conocer tu vocación.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="src/assets/library.png" alt="" />
          <div className="layer-fac">
            <h3>Satisfacción personal.</h3>
            <p>
              te involucrarás en actividades que
               realmente te gustan y te apasionan, lo que te
               brindará una mayor satisfacción en tu vida diaria.
            </p>
          </div>
        </div>

        <div className="facilities-col">
          <img src="src/assets/basketball.png" alt="" />
          <div className="layer-fac">
            <h3>Motivación y compromiso.</h3>
            <p>
              Al trabajar en algo que te apasiona, tendrás una mayor motivación intrínseca
              y estarás más comprometido con tu trabajo, lo
              que puede llevar a un mejor desempeño y resultados.
            </p>
          </div>
        </div>

        <div className="facilities-col">
          <img src="src/assets/cafeteria.png" alt="" />
          <div className="layer-fac">
            <h3>Sentido de propósito.</h3>
            <p>
            Te brinda dirección en la vida. Saber qué es lo que realmente
              quieres hacer te ayuda a establecer metas claras y tomar decisiones alineadas
               con tus valores y pasiones.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonios=()=>{
  return (
    <div className="testimonios">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum.</p>

      <div className="row">
        {
          dataUser.map((item)=>{
            return(
              <div className="testimonios-col" key={item.id}>
                {/* Para cambiar los datos de cada una pueden ir a /src/assets/dataUser.js*/}
                <img src={item.imgUrl} alt="" />
                <h3>{item.nombre}</h3>
                <p>{item.data}</p>
              </div>
            )
          })
        }
      
      </div>
    </div>
  )
}

const Footer=()=>{
  return (
    <div className="footer">
      <h4>Acerca de nosotros</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, adipisci amet voluptatem voluptatibus delectus <br/> recusandae non deserunt animi culpa eos placeat odio at dicta, facere quaerat ipsa, veritatis voluptatum? In!</p>
   
      <p>Made With <i className="fa fa-heart"></i> por UwU</p>

    </div>
  )
}

const ContactUs=()=>{
  return(
    <div className="cta">
       <h1>Lorem ipsum dolor sit amet <br/> consectetur adipisicing.</h1>
      <a href="" className="hero-btn">CONTACT US</a>
    </div>
  )
}

const Home=()=>{
  return (
    <>
      <Header/>
      <Courses/>
      {/* <Slider/> */}
      <Servicios/>
      <Facilities/>
      <Testimonios/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <>
      <Home/>
    </>
  )
}
export default App
