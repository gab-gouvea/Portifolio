import React, { useState } from 'react';
import { Footer } from '../components/Footer';

export function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Informações do formulário:", formData);
    
  };

  return (
    <>
    <div className="h-screen max-w-5xl mx-auto  mt-20">
      <h2 className="text-4xl font-bold mb-7">Contato</h2>
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto ">
        <div className="mb-4">
          <label htmlFor="name" className="block text-green-700">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-green-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-green-700">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-black"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-500"
        >
          Enviar
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};


