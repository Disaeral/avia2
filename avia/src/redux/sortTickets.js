export const sortByPrice = (tickets) => {
    return tickets.sort((ticket1, ticket2)=>{
        
        let price1 = ticket1.price;
        let price2 = ticket2.price;
        
        let comparison = 0;
        if (price1 > price2) {
          comparison = 1;
        } else if (price1 < price2) {
          comparison = -1;
        }
        
        return comparison;
      })
    }
   

export const sortByTime = (tickets) => {
    return tickets
}