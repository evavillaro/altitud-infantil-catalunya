import type { Excursion } from "@/components/ExcursionCard";

export const excursionsData: Excursion[] = [
  {
    id: 1,
    name: "Lago de la Bullosa",
    location: "Puigcerdà, Girona",
    duration: "2-3 horas",
    difficulty: "Fácil",
    ageRange: "A partir de 4 años",
    description: "Hermoso paseo por el lago artificial más grande de Cataluña. Sendero llano y bien señalizado, perfecto para familias. Los niños pueden disfrutar de las áreas de picnic y observar la fauna local.",
    rating: 4.5,
    totalVotes: 127,
    image: "lago-bullosa.jpg",
    comments: [
      {
        id: 1,
        author: "María González",
        text: "Perfecto para ir con niños pequeños. El sendero es muy fácil y las vistas preciosas. Llevamos la comida y comimos junto al lago.",
        date: "15 Nov 2024",
        rating: 5
      },
      {
        id: 2, 
        author: "Jordi Camps",
        text: "Muy recomendable. Fuimos con niños de 5 y 8 años y lo pasaron genial. Hay zonas de sombra para descansar.",
        date: "8 Nov 2024",
        rating: 4
      }
    ]
  },
  {
    id: 2,
    name: "Sendero del Río Segre", 
    location: "Llívia, Girona",
    duration: "1.5-2 horas",
    difficulty: "Fácil",
    ageRange: "A partir de 3 años",
    description: "Ruta fluvial que sigue el curso del río Segre. Ideal para los más pequeños con múltiples paradas junto al agua. Posibilidad de ver truchas y martines pescadores.",
    rating: 4.2,
    totalVotes: 89,
    image: "rio-segre.jpg",
    comments: [
      {
        id: 3,
        author: "Anna Ribas",
        text: "A mis hijos les encantó ver los peces en el río. El camino es muy seguro y hay bancos para descansar cada poco.",
        date: "12 Nov 2024", 
        rating: 4
      }
    ]
  },
  {
    id: 3,
    name: "Ruta de los Estanys de Carlit",
    location: "Font-Romeu, Francia", 
    duration: "4-5 horas",
    difficulty: "Moderado",
    ageRange: "A partir de 8 años",
    description: "Excursión a los lagos glaciares del macizo del Carlit. Ruta con algo más de desnivel pero con recompensas paisajísticas increíbles. Recomendable llevar bastones de trekking.",
    rating: 4.8,
    totalVotes: 156,
    image: "estanys-carlit.jpg",
    comments: [
      {
        id: 4,
        author: "David Martin",
        text: "Espectacular! Los lagos son impresionantes. Eso sí, hay que estar en forma. Nosotros tardamos 5 horas con paradas.",
        date: "20 Oct 2024",
        rating: 5
      },
      {
        id: 5,
        author: "Sophie Dubois", 
        text: "Magnifique randonnée! Les enfants ont adoré malgré la difficulté. Les lacs valent vraiment le détour.",
        date: "18 Oct 2024",
        rating: 5
      }
    ]
  },
  {
    id: 4,
    name: "Camino de Llo a Eyne",
    location: "Llo-Eyne, Francia",
    duration: "3-4 horas", 
    difficulty: "Fácil",
    ageRange: "A partir de 6 años",
    description: "Preciosa ruta que conecta dos pueblos pirenaicos a través de prados alpinos. En primavera, los campos se llenan de flores silvestres. Hay refugios donde parar a descansar.",
    rating: 4.4,
    totalVotes: 98,
    image: "llo-eyne.jpg",
    comments: [
      {
        id: 6,
        author: "Carles Puig",
        text: "Ruta muy bonita y no muy exigente. Los niños disfrutaron muchísimo corriendo por los prados. Hay vacas y caballos pastando.",
        date: "25 Sep 2024",
        rating: 4
      }
    ]
  },
  {
    id: 5,
    name: "Ascensión al Puig Peric",
    location: "Meranges, Girona", 
    duration: "5-6 horas",
    difficulty: "Difícil", 
    ageRange: "A partir de 12 años",
    description: "Ruta de montaña para familias con experiencia. Ascensión a 2,810m con vistas panorámicas de toda la Cerdaña. Requiere buen estado físico y equipo de montaña adecuado.",
    rating: 4.7,
    totalVotes: 73,
    image: "puig-peric.jpg",
    comments: [
      {
        id: 7,
        author: "Montse Serra",
        text: "Ruta exigente pero muy gratificante. Las vistas desde la cima son espectaculares. Solo para familias con experiencia en montaña.",
        date: "2 Oct 2024", 
        rating: 5
      }
    ]
  },
  {
    id: 6,
    name: "Bosque de Bolvir",
    location: "Bolvir, Girona",
    duration: "2 horas",
    difficulty: "Fácil",
    ageRange: "A partir de 2 años", 
    description: "Paseo por el denso bosque de pinos de Bolvir. Sendero circular muy bien acondicionado con paneles informativos sobre la flora y fauna local. Ideal para introducir a los niños en la naturaleza.",
    rating: 4.1,
    totalVotes: 112,
    image: "bosque-bolvir.jpg",
    comments: [
      {
        id: 8,
        author: "Laura Vidal",
        text: "Perfecto para los más pequeños. Mi hija de 3 años pudo hacer toda la ruta sin problemas. Vimos ardillas y muchos pájaros.",
        date: "5 Nov 2024",
        rating: 4
      }
    ]
  }
];