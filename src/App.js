import ImgSlider1 from './assets/productos/01.png'
import ImgSlider2 from './assets/productos/02.png'
import ImgSlider3 from './assets/productos/03.png'
import Narbar from './includes/navbar.js'
import Footer from './includes/footer'
import './App.css';

function App() {
	return (
		<div className="App">

			<Narbar />

			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<div className='App-home'>
					<h1>Comercializadora <br /> ARZAT</h1>
					<hr />
					<p>
						El mejor estilo para su hogar!!!
					</p>
					<a className="App-link" href="#" target="_blank" rel="noopener noreferrer">
						Llamar Ahora.
					</a>
				</div>
			</header>

			<section>
				<div className='container'>
					<div className='home-body'>
						<div className='home-file'>
							<h2>Calidad y servicio, a un excelente precio</h2>

							<p>Descubre lo que tenemos para ti.</p>

							<hr />

							<a className='file' href='#' target='_blank'>Ver Catalogo</a>
						</div>

						<div className='home-info'>
							<ul>
								<li>
									<h3><span>01. </span> CALIDAD</h3>
									<p>Productos y marcas de excelente confiabilidad para satisfacer sus necesidades y la de su familia.</p>
								</li>
								<li>
									<h3><span>02. </span> SERVICIO</h3>
									<p>Ofrecemos servicio de garantía durante un año totalmente gratis.</p>
								</li>
								<li>
									<h3><span>03. </span> AL MEJOR PRECIO</h3>
									<p>Los mejores precios y promociones en nuestra región lo tenemos nosotros… <br /> ¡venga y compruébelo…!</p>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</section>

			<section>
				<div className='container'>
					<div className='home-body'>
						<div className='home-offers'>
							<h2>Productos en promoción</h2>

							<p>Presentamos nuevos productos a los mejores precios.
								<br />
								¡Écheles un vistazo!</p>

							<hr />

						</div>

						<div className='offers'>

							<div className='offers-slider'>
								<img src={ ImgSlider1 } alt='img-slider' />
								
								<div className='offers-description'>
									<span> Caduca: 30 de septiembre </span>

									<h3>ESTUFA AF5333B 30” NEGRO</h3>

									<p><a href='#'>Ir al producto</a></p>
								</div>
							</div>

							<div className='offers-slider'>
								<img src={ ImgSlider2 } alt='img-slider' />
								
								<div className='offers-description'>
									<span> Caduca: 30 de septiembre </span>

									<h3>ESTUFA AF5333B 30” NEGRO</h3>

									<p><a href='#'>Ir al producto</a></p>
								</div>
							</div>

							<div className='offers-slider'>
								<img src={ ImgSlider3 } alt='img-slider' />
								
								<div className='offers-description'>
									<span> Caduca: 30 de septiembre </span>

									<h3>ESTUFA AF5333B 30” NEGRO</h3>

									<p><a href='#'>Ir al producto</a></p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>


			<Footer />


		</div>
	);
}

export default App;
