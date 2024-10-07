const ventasCard = [
  {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
      ubicacion: "Prestige Suburb, CA 45678",
      habitaciones: 4,
      baños: 4,
      costo: 4900000,
      smoke: false,
      pets: false,
  },
  {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
      ubicacion: "Summit Peaks, CA 23456",
      habitaciones: 2,
      baños: 1,
      costo: 5000000,
      smoke: true,
      pets: true,
  },
  {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: 'http://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
      ubicacion: "Skyview City, CA 56789",
      habitaciones: 3,
      baños: 3,
      costo: 4300000,
      smoke: false,
      pets: false,
  },
  {
      nombre: "Apartamento en ubicación inmejorable",
      src: "./assets/img/dptoVenta1.jpg",
      descripcion: "Departamento amplio familiar en barrio residencial, que cuenta con excelente distribución.",
      ubicacion: "Water Spring 351, CA 11234",
      habitaciones: 3,
      baños: 3,
      costo: 7000000,
      smoke: false,
      pets: true,
  },,
  {
      nombre: "Townhouse con derecho a patio",
      src: "./assets/img/dptoVenta2.jpg",
      descripcion: "Townhouse en pleno centro con acceso a autopistas y supermercados.",
      ubicacion: "Chino Town, CA 98780",
      habitaciones: 3,
      baños: 1,
      costo: 4500000,
      smoke: true,
      pets: false,
  },,
  {
      nombre: "Gran casa aislada con piscina",
      src: "./assets/img/dptoVenta3.jpg",
      descripcion: "Gran casa amplia con piscina, walking closet y estancia para mascotas. Alejado de ruidosa ciudad, pero cercano a servicios.",
      ubicacion: "Wintercave 34233, PO 12433",
      habitaciones: 5,
      baños: 4,
      costo: 1250000,
      smoke: true,
      pets: true,
  },
];

const cardVentas = ventasCard.map((card) => {
  const estadoFumar = card.smoke ? {
      text: "text-success",
      icon: "fas fa-smoking",
      mensaje: "Está permitido fumar"
  } : {
      text: "text-danger",
      icon: "fas fa-smoking-ban",
      mensaje: "No está permitido fumar"
  };

  const estadoPets = card.pets ? {
      text: "text-success",
      mensaje: "Se permiten mascotas"
  } : {
      text: "text-danger",
      mensaje: "No se permiten mascotas"
  };

  return `
  <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${card.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${card.nombre}
          </h5>
          <p class="card-text">
            ${card.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> 
            ${card.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> 
            ${card.habitaciones} Habitaciones | 
            <i class="fas fa-bath"></i> ${card.baños} Baños
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i> 
            ${card.costo}
          </p>

          <p class="${estadoFumar.text}">
              <i class="${estadoFumar.icon}"></i> 
              ${estadoFumar.mensaje}
          </p>
          <p class="${estadoPets.text}">
              <i class="${estadoPets.text === 'text-success' ? 'fas fa-paw' : 'fas fa-ban'}"></i> 
              ${estadoPets.mensaje}
          </p>
        </div>
      </div>
    </div>
  `;
});

// Ahora, asegura que esto se ejecute después de que el DOM esté cargado
const ventasContainer = document.querySelector('.ventas_container');
ventasContainer.innerHTML = cardVentas.join('');
