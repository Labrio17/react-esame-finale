type DescriptionType = {
      "short": string
    };


type DrinksType= [
      string,
      string,
      string
    ]


type TagsType = [
      string,
      string,
      string
    ]




export type EventsType = {
    "id": number,
    "name": string,
    "coverImage": string,
    "date":string,
    "description": DescriptionType,
    "dresscode": string,
    "price": number,
    "includedDrinks": DrinksType,
    "tags": TagsType
    "isAperitivoIncluded": boolean
  }