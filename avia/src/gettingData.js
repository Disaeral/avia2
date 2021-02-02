
/*
async function getId () {
    const response = await fetch("https://front-test.beta.aviasales.ru/search")
    const searchId = await response.json()
    console.log(searchId, 'searchId')
    return await searchId.searchId
}
getData
  .then(r=>r.json())
  .then(data=>{
  console.log(data, 'data')
  if(!data.stop) {
    return data.tickets
  }
  })
  .catch(e => console.error(e))
async function getData () {
    const token = await getId()
    console.log('loading')
    const request = await fetch("https://front-test.beta.aviasales.ru/tickets?_"+ new URLSearchParams({searchId: token.toString(), limit: "5"}),
    )
    return await request
}






   
//getData()
export default getData
*/
    
/*[{
        price: "13455",
        carrier: "Yorha Airlanes",
        segments: [
          {
            origin: "Ebenya",
            destination: "DC",
            date: "December 17, 2020 03:24:00",
            stops: ["JOP", "HUI", "Sosi", "sam sosi", "kek"],
            duration: 100,
          },
          {
            origin: "Ebenya2",
            destination: "DC3",
            date: "December 31, 1995 03:24:00",
            stops: ["JOP", "da", "pizda"],
            duration: 228,
          },
        ],
      },
      {
        price: "12400",
        carrier: "Yoba Airlanes",
        segments: [
          {
            origin: "Ebenya",
            destination: "DC",
            date: "December 17, 1995 03:28:00",
            stops: ["JOP", "HUI"],
            duration: 311,
          },
          {
            origin: "Ebenya2",
            destination: "DC3",
            date: "December 31, 1995 03:12:00",
            stops: [],
            duration: 211,
          },
        ],
      },
      {
        price: "13425",
        carrier: "Nahui Airlanes",
        segments: [
          {
            origin: "Ebenya",
            destination: "DC",
            date: "December 17, 1995 03:24:00",
            stops: ["JOP", "HUI"],
            duration: 405,
          },
          {
            origin: "Ebenya2",
            destination: "DC3",
            date: "December 31, 1995 03:24:00",
            stops: ["JOP"],
            duration: 99,
          },
        ],
      },
      {
        price: "14228",
        carrier: "Yorha Airlanes",
        segments: [
          {
            origin: "KURSK",
            destination: "DC",
            date: "December 17, 2020 03:24:00",
            stops: [],
            duration: 100,
          },
          {
            origin: "DC",
            destination: "KURSK",
            date: "December 31, 1995 03:24:00",
            stops: [],
            duration: 228,
          },
        ],
      }] */