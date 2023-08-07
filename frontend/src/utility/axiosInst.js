import axios from "axios";

const axiosInst = axios.create({
    baseURL: 'http://localhost:7777',
    timeout: 2500})
    // 백에 데이터를 요구했을때 2500(약2초)안에 응답을 못받으면 에러로 판단한다.

export default axiosInst