
import Cards from "./components/Cards"
import Header from "./components/header"
import './styleSheets/card.css'
import './styleSheets/header.css'
import './App.css'

function App() {
  return (
   <div className="container">
      <Header/>
      <main className='main-content'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <section className='clients-opinion'>
          <div className="container-cards">            
            <Cards 
              name={"María"} imagen={"imagen1.jpg"} location={"Buenos Aires Argentina"} ocupation={"Desarrolladora de software en mercado libre"} 
              description={
                "El curso de React y desarrollo web superó todas mis expectativas! Desde cero, me sumergí en el fascinante mundo del desarrollo frontend. Los profesores fueron increíbles, explicando conceptos complejos de manera clara y concisa. Ahora puedo construir aplicaciones interactivas con confianza. ¡Gracias por una experiencia educativa excepcional."
              }
            />

            <Cards 
              name={"Andrés"} imagen={"imagen3.jpg"} location={"Medellín Colombia"} ocupation={"Desarrolladora de software en Airnnb"} 
              description={
                "Este curso de React y desarrollo web fue una experiencia transformadora para mí. Los instructores expertos hicieron que conceptos aparentemente complicados fueran fáciles de entender. Además, la cantidad de práctica que obtuve fue invaluable. Ahora me siento seguro para enfrentar proyectos reales con React. ¡Gracias por esta oportunidad de crecimiento profesional!"
              }
            />

            <Cards 
              name={"Luisa"} imagen={"imagen2.jpg"} location={"Medellín Colombia"} ocupation={"Desarrolladora de software en Airnnb"} 
              description={
                "Como alguien relativamente nueva en el desarrollo web, este curso de React fue exactamente lo que necesitaba. Aprendí desde los fundamentos hasta técnicas avanzadas en un ambiente amigable y colaborativo. La combinación de teoría y práctica fue perfecta para solidificar mi comprensión. ¡Estoy emocionado de aplicar lo que aprendí en proyectos futuros!"
              }
            />
          </div>
        </section>
      </main>
   </div>
  )
}

export default App