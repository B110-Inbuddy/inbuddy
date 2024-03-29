import { serverAxios } from '@/apis/common';
import { getCookie } from '@/apis/cookies';

const server = serverAxios();

// const url = '/B551177/StatusOfPassengerWorldWeatherInfo';

const fetchUserProfile = async () => {
    return await server.get('/api/user/profile', {
        headers: {
            Authorization: `Bearer ${getCookie('access_token')}`,
        },
    });
};

const reissueToken = async () => {
    return await server.get('/api/user/token/refresh', {
        headers: {
            Authorization: `Bearer ${getCookie('refresh_token')}`,
        },
    });
};

const logout = async () => {
    return await server
        .get('/api/logout', {
            headers: {
                Authorization: `Bearer ${getCookie('access_token')}`,
            },
        })
        .then((response) => response);
};

export { fetchUserProfile, reissueToken, logout };