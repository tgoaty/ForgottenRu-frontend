export const BASE_URL: string = 'http://localhost:5000';

interface EndpointsInterface {
    marks: string;
}

export const endpoints: EndpointsInterface = {
    marks: `${BASE_URL}/marks`
}