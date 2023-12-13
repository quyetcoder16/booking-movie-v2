import { BaseServices } from "./baseServices";

export class QuanLyPhimServices extends BaseServices {
    constructor() {
        super();
    }

    getDanhSachBaner = () => {
        return this.get("QuanLyPhim/LayDanhSachBanner");
    }
}

export const quanLyPhimServices = new QuanLyPhimServices();