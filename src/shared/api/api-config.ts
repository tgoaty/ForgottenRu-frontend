export const BASE_URL: string = 'http://localhost:8000/api';

interface EndpointsInterface {
    marks: string;
}

export const endpoints: EndpointsInterface = {
    marks: `${BASE_URL}/marks`
}