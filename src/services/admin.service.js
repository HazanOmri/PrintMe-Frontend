import { httpService } from "./http.service";

const ADMIN_URL = 'admin/'

export const adminService = {
    getOrderList,
}

async function getOrderList() {
    return httpService.get(ADMIN_URL + 'order')
}