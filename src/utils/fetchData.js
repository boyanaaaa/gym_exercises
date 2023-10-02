
  export const exerciseOptions  = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '5f146b671emshf9ac89ad9aa20f7p13cb99jsncdf2e56ceff9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData = async (url, options) => {
    const reposnse = await fetch( url, options);
    const data = await reposnse.json();

    return data;
}