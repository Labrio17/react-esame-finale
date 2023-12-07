type EmploymentType = {
      "title": string,
      "key_skill": string
    };


type CoordinatesType= {
        "lat": number,
        "lng": number
      }

type AddressType = {
      "city": string,
      "street_name": string,
      "street_address": string,
      "zip_code": string,
      "state": string,
      "country": string,
      "coordinates": CoordinatesType,
    }


type CreditCardType = {
    "cc_number" : string
}


type SubscriptionType = {
      "plan": string,
      "status": string,
      "payment_method": string,
      "term": string
    }

export type UserType = {
    "id": number,
    "uid": string,
    "password": string,
    "first_name": string,
    "last_name": string,
    "username": string,
    "email": string,
    "avatar": string,
    "gender": string,
    "phone_number": string,
    "social_insurance_number": string,
    "date_of_birth": string,
    "employment": EmploymentType,
    "address": AddressType ,
    "credit_card": CreditCardType,
    "subscription": SubscriptionType
  }