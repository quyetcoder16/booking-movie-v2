import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/setting/config";


export class BaseServices {
    put = (url, model) => {
        return axios({
            method: "PUT",
            data: model,
            url: `${DOMAIN}/${url}`,
            headers: { 'Authorization': 'Bearer' + localStorage.getItem(TOKEN) }
        })
    }
    post = (url, model) => {
        return axios({
            method: "POST",
            data: model,
            url: `${DOMAIN}/${url}`,
            headers: { 'Authorization': 'Bearer' + localStorage.getItem(TOKEN) }
        })
    }
    get = (url) => {
        return axios({
            method: "GET",
            url: `${DOMAIN}/${url}`,
            headers: { 'Authorization': 'Bearer' + localStorage.getItem(TOKEN) }
        })
    }
    delete = (url, model) => {
        return axios({
            method: "DELETE",
            data: model,
            url: `${DOMAIN}/${url}`,
            headers: { 'Authorization': 'Bearer' + localStorage.getItem(TOKEN) }
        })
    }

}