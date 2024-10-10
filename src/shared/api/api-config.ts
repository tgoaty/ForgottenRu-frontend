export const BASE_URL: string = 'http://localhost:8000/api';

interface EndpointsInterface {
    getTable: string;
}

export const endpoints: EndpointsInterface = {
    getTable: `${BASE_URL}/get-table`
}