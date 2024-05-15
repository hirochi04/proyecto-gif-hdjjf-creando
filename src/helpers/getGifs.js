//Definimos uan función asíncrona getGifs que toma una categora como argumento
export const getGifs = async (category) => {
    //Contruimos la URL para la API de Giphy con la categoria y un limite de 10 imagenes
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HhyTxP09g6k5BOulTMImZ9Pl1neE72Q7&q=${category}&limit=10`;
    //Hacemos una peticón a la API de Giphy
    const resp = await fetch(url);
    //Extraemos los datos de la respuesta en formato JSON
    const { data } = await resp.json();
  
    //Mapeamos los datos a un nuevo arreglo de obejestos con id, titulo y URL de cada imagen
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    //Devolvemos el arreglo de objetos
    return gifs;
  };

   