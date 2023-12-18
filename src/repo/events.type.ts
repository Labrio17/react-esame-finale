type DescriptionType = {
    long: [];
    short: string;
};

type DishesType = [
    {
        allergenes: [];
        name: string;
        description: string;
    }
];

type DrinksType = string[];

type TagsType = string[];

export type EventsType = {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    description: DescriptionType;
    dresscode: string;
    price: number;
    includedDrinks: DrinksType;
    tags: TagsType;
    isAperitivoIncluded: boolean;
};

export type EventDetailType = {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    description: DescriptionType;
    dresscode: string;
    price: number;
    includedDrinks: DrinksType;
    tags: TagsType;
    isAperitivoIncluded: boolean;
    includedDishes: DishesType;
};
