interface IUserGeo {
    lat: string;
    lng: string;
}

export interface IUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserGeo;
}

export interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUserState {
    users: IUsers[];
    loading: boolean;
    error: string | null;
}
