import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    /*await fetch("https://formspree.io/f/mjkyrkkk", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });*/
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10">
        <h2 className="text-4xl mb-4">¡Gracias por contactarnos!</h2>
        <p className="text-lg">Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">¡Cada día que no tomas acción, tu dinero pierde valor!</h1>
        <p className="text-4xl font-bold max-w-xl">Recibe tu primera consulta gratuita HOY</p>
      </header>

      {/* Form Section */}
      <main className="flex-grow flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg space-y-6 animate-fade-in">
          <h2 className="text-2xl font-semibold text-center mb-4">Formulario de Contacto</h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-left">Nombre *</label>
              <input name="name" placeholder="Tu nombre" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-1 font-medium text-left">Apellidos</label>
              <input name="surname" placeholder="Tus apellidos" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-1 font-medium text-left">Correo electrónico *</label>
              <input type="email" name="email" placeholder="tucorreo@email.com" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-1 font-medium text-left">Teléfono contacto *</label>
              <input type="tel" name="phone" placeholder="+34 600 123 456" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-1 font-medium text-left">Dinero ahorrado</label>
              <input type="text" name="savings" placeholder="Ej: 10.000 €" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label className="block mb-1 font-medium text-left">Tu mensaje</label>
              <textarea name="message" rows="4" placeholder="Cuéntanos más..." className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
            Enviar
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 text-gray-500">
        © 2025 Mi Landing Page. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App
