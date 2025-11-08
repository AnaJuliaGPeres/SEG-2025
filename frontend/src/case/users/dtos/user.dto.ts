export interface UserDTO {
    id?: string;
    name: string;
    email: string;
    supabaseId: string;
    hasMFA: boolean;


    factorId?: string;
    isMFAValidadet?: boolean;
    isFirstMFAAcess?: boolean;
}