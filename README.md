# Rick & Morty Characters App

Aplicación web desarrollada con **Next.js (App Router)**, **React**, **Redux Toolkit** y **TypeScript**, que consume la **API pública de Rick and Morty** para mostrar personajes, permitir buscarlos y gestionarlos como favoritos, manteniendo persistencia local.

El diseño está basado fielmente en el layout proporcionado en Figma, con enfoque **mobile first** y adaptación precisa a **desktop**.

---

## 🚀 Tecnologías utilizadas

- Next.js 14 (App Router)
- React + TypeScript
- Redux Toolkit
- CSS Modules
- Jest (pruebas unitarias)
- API pública: https://rickandmortyapi.com

---

## 📦 Instalación y ejecución del proyecto

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

2 npm install
3 npm run dev
4 http://localhost:3000 El proyecto consume directamente la API pública de Rick and Morty, por lo que NO es necesario levantar json-server ni ningún backend adicional.
5 npm test Actualmente se incluyen pruebas unitarias para: Lógica de favoritos (Redux Slice)

Funcionalidades principales

Listado de personajes desde la API oficial

Buscador en tiempo real

Vista tipo grid (mobile y desktop)

Vista de detalle con slider

Sistema de favoritos con Redux

Persistencia de favoritos en localStorage

UI fiel al diseño de Figma

Diseño responsive (mobile → desktop)

¿Qué es lo que más me gustó de mi desarrollo?

Lo que más disfruté fue traducir el diseño de Figma a código de forma precisa, cuidando detalles como colores, estados hover, layout y comportamiento responsive, sin sacrificar la limpieza del código ni la arquitectura.

También fue muy satisfactorio implementar Redux de forma simple pero efectiva, asegurando una experiencia fluida y persistente para el usuario.

¿Qué hubiera mejorado si tuviera más tiempo?

Implementar paginación o infinite scroll

Agregar tests de componentes (React Testing Library)

Mejorar accesibilidad (ARIA labels, navegación con teclado)

Implementar animaciones suaves (Framer Motion)

Optimizar carga de imágenes con next/image

Pain point / bug encontrado y solución
Problema:

Durante el desarrollo surgieron errores de CORS y fallos de hidratación al intentar consumir un backend local (json-server) junto con componentes client-side en Next.js App Router.

Solución:

Se optó por consumir directamente la API oficial de Rick and Morty, eliminando dependencias innecesarias y evitando conflictos de CORS y SSR/CSR.
Además, se reorganizó el uso de "use client" y el Provider de Redux para evitar errores de hidratación.

Conclusión

Este proyecto cumple con los requerimientos funcionales y técnicos solicitados, manteniendo buenas prácticas de desarrollo, código limpio y una UI cuidada y consistente.

Gracias por la oportunidad :)

