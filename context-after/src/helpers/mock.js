import imgBlame from '../img/img_ecommerce/novedades/blame.jpg'
import devilMan from '../img/img_ecommerce/novedades/devilmanCry.jpg'
import castelVania from '../img/img_ecommerce/novedades/castelvania.jpg'
import demonSlayer from '../img/img_ecommerce/novedades/demon-slayer.jpg'
import myHeroAcademy from '../img/img_ecommerce/novedades/myHeroAcademia.jpg'
import niNoKuni from '../img/img_ecommerce/novedades/ni-no-kuni.jpg'

const productos = [
    {
        id: "1",
        name: 'Blame',
        img: [imgBlame],
        year: '2017',
        price: 600,
        description: 'En un futuro tecnológico lejano, la civilización ha alcanzado su forma definitiva basada en la red. Una infección en el pasado hizo que los sistemas automatizados se descompusieran en espiral, lo que resultó en una estructura de ciudad de múltiples niveles que se replica infinitamente en todas las direcciones. Ahora la humanidad ha perdido el acceso a los controles de la ciudad y es perseguida y purgada por el sistema de defensa conocido como Safeguard. En un pequeño rincón de la ciudad, un pequeño enclave conocido como los Electro-Pescadores se enfrenta a una eventual extinción, atrapado entre la amenaza de Safeguard y la disminución de los suministros de alimentos. Una niña llamada Zuru emprende un viaje para encontrar comida para su aldea, solo para causar la perdición inadvertidamente cuando una torre de observación la detecta y convoca un paquete de Salvaguardas para eliminar la amenaza. Con sus compañeros muertos y todas las rutas de escape bloqueadas.',
        genre: 'sci-fi',
        categoria: 'anime',

    },

    {
        id: "2",
        name: 'Devilman Cry-Baby',
        img: [devilMan],
        year: '2018',
        price: 500,
        description: 'El protagonista Akira Fudou se entera de su mejor amigo, Ryou Asuka, que una antigua raza de demonios ha regresado para recuperar el mundo de los humanos. Ryou le dice a Akira que la única forma de derrotar a los demonios es incorporar sus poderes sobrenaturales, y sugiere que él mismo se una con un demonio. Akira logra transformarse en Devilman, quien posee los poderes de un demonio y el alma de un humano. Comienza la batalla de Devilman y Akira Fudou.',
        genre: 'Supernatural',
        categoria: 'anime'
    },

    {
        id: "3",
        name: 'Castelvania',
        img: [castelVania],
        year: 2021,
        price: 600,
        description: 'Un cazavampiros lucha por salvar una ciudad asediada por un ejército de bestias controladas por Drácula. Serie inspirada en el clásico videojuego',
        genre: 'Terror',
        categoria: 'clasicos'
    },

    {
        id: "4",
        name: 'Demon Slayer',
        img: [demonSlayer],
        year: 2019,
        price: 450,
        description: 'Es el período Taisho en Japón. Tanjiro, un niño de buen corazón que se gana la vida vendiendo carbón vegetal, encuentra a su familia asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente, se ha transformado ella misma en un demonio. Aunque devastado por esta triste realidad, Tanjiro decide convertirse en un "asesino de demonios" para poder convertir a su hermana en un humano y matar al demonio que masacró a su familia.',
        categoria: 'clasicos',
        genre: 'Terror',
    },

    {
        id: "5",
        name: 'My Hero Academy',
        img: [myHeroAcademy],
        year: 2019,
        price: 420,
        description: '¿Cómo sería el mundo si el 80 por ciento de la población manifestara superpoderes extraordinarios llamados "Quirks" a los cuatro años? ¡Héroes y villanos estarían luchando por todas partes! Convertirse en un héroe significaría aprender a usar su poder, pero ¿adónde iría a estudiar? ¡El Programa Hero de UA High, por supuesto! Pero, ¿qué harías si fueras uno del 20 por ciento que nació sin Quirkless?.El estudiante de secundaria Izuku Midoriya quiere ser un héroe más que nada, pero no tiene ni una pizca de poder en él. Sin posibilidad alguna de entrar en la prestigiosa escuela secundaria UA para héroes en ciernes, su vida se parece cada vez más a un callejón sin salida. Luego, un encuentro con All Might, el héroe más grande de todos, le da la oportunidad de cambiar su destino ...',
        categoria: 'novedades',
        genre: 'Terror',
    },

    {
        id: "6",
        name: 'Ni No Kuni',
        img: [niNoKuni],
        year: 2018,
        price: 318,
        description: 'Basado en la franquicia de videojuegos Ni no Kuni de Level-5. En la historia, Yuu es un estudiante de secundaria, su mejor amigo es Haru y su amiga de la infancia es Kotona. A través de cierto incidente, viajan de un lado a otro entre la realidad y Ni no Kuni. Cuando la vida de Kotona corre peligro, los tres deben tomar "la decisión final".',
        categoria: 'novedades',
        genre: 'Terror',
    },
    {
        id: "7",
        name: 'Ni No Kuni 2',
        img: [niNoKuni],
        year: 2018,
        price: 318,
        description: 'Basado en la franquicia de videojuegos Ni no Kuni de Level-5. En la historia, Yuu es un estudiante de secundaria, su mejor amigo es Haru y su amiga de la infancia es Kotona. A través de cierto incidente, viajan de un lado a otro entre la realidad y Ni no Kuni. Cuando la vida de Kotona corre peligro, los tres deben tomar "la decisión final".',
        categoria: 'novedades',
        genre: 'Terror',
    },
    {
        id: "8",
        name: 'My Hero Academy 2',
        img: [myHeroAcademy],
        year: 2019,
        price: 420,
        description: '¿Cómo sería el mundo si el 80 por ciento de la población manifestara superpoderes extraordinarios llamados "Quirks" a los cuatro años? ¡Héroes y villanos estarían luchando por todas partes! Convertirse en un héroe significaría aprender a usar su poder, pero ¿adónde iría a estudiar? ¡El Programa Hero de UA High, por supuesto! Pero, ¿qué harías si fueras uno del 20 por ciento que nació sin Quirkless?.El estudiante de secundaria Izuku Midoriya quiere ser un héroe más que nada, pero no tiene ni una pizca de poder en él. Sin posibilidad alguna de entrar en la prestigiosa escuela secundaria UA para héroes en ciernes, su vida se parece cada vez más a un callejón sin salida. Luego, un encuentro con All Might, el héroe más grande de todos, le da la oportunidad de cambiar su destino ...',
        categoria: 'clasicos',
        genre: 'Terror',
    },
    {
        id: "9",
        name: 'Blame 2',
        img: [imgBlame],
        year: '2017',
        price: 600,
        description: 'En un futuro tecnológico lejano, la civilización ha alcanzado su forma definitiva basada en la red. Una infección en el pasado hizo que los sistemas automatizados se descompusieran en espiral, lo que resultó en una estructura de ciudad de múltiples niveles que se replica infinitamente en todas las direcciones. Ahora la humanidad ha perdido el acceso a los controles de la ciudad y es perseguida y purgada por el sistema de defensa conocido como Safeguard. En un pequeño rincón de la ciudad, un pequeño enclave conocido como los Electro-Pescadores se enfrenta a una eventual extinción, atrapado entre la amenaza de Safeguard y la disminución de los suministros de alimentos. Una niña llamada Zuru emprende un viaje para encontrar comida para su aldea, solo para causar la perdición inadvertidamente cuando una torre de observación la detecta y convoca un paquete de Salvaguardas para eliminar la amenaza. Con sus compañeros muertos y todas las rutas de escape bloqueadas.',
        genre: 'sci-fi',
        categoria: 'anime',

    },
]



export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 3000)
})
