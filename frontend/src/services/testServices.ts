import { httpClient } from "../utils/axiosClient"

export const testServices = {
    async ping() {
        try {
            return await httpClient.get<string>('/ping');
        } catch (error) {
            console.error('Ping API failed', error);
            throw error;
        }
    }
}