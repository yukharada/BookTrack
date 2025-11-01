import axios from 'axios';

const axiosInstances = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 共通的なGET/POSTラッパー
export const httpClient = {
    get: async<T>(url: string, params?: Record<string, unknown>): Promise<T> => {
        try {
            const response = await axiosInstances.get<T>(url, { params });
            return response.data;
        } catch (error) {
            console.error('GET request error:', error);
            throw error;
        }
    },

    post: async<T>(url: string, data?: unknown): Promise<T> => {
        try {
            const response = await axiosInstances.post<T>(url, data);
            return response.data;
        } catch (error) {
            console.error('POST request error:', error);
            throw error;
        }
    },
};