import { UserType } from "./users.type";

const URL = "https://random-data-api.com/api/users/random_user?size=10"

export const getUsers = async (): Promise<UserType[]> => {
    const res: Response = await fetch(URL);
    if(res.status === 200){
        const data = (await res.json()) as  UserType[];
        return data;
    }
    return [];
}