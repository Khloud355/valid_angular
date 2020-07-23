export interface Doctor {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    phone: number,
    api_token:number,
    phone_verified_at: null,
    type: string,
    chanel: string,
    deleted_at: null,
    created_at: null,
    updated_at: null,
    details: null
}
export interface DoctorDetails{

        id: number,
        doctor_id: number,
        image_id: number,
        category_id: number,
        commercial_name: string,
        home_visit : number,
        degree: string,
        short_description: string,
        description: string,
        city: number,
        governorate: number,
        country: number,
        total_reviews: number,
        total_rates: number,
        status: string,
        created_at: null,
        updated_at: null,
        deleted_at: null,
        image_url: any
    }

