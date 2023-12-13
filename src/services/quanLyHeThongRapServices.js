import { BaseServices } from "./baseServices";

export class QuanLyHeThongRapService extends BaseServices {
    constructor() {
        super();
    }

    getThongTinHeThongRap = (maHeThongRap = '') => {
        return this.get(`QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`);
    }

}

export const quanLyHeThongRapService = new QuanLyHeThongRapService();