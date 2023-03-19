import request from "request-promise";
import urls from "../data/urls";
 class ApiUsersController {

    async getAllUsers() {
    let options = {
        method: "GET",
        uri:urls.apiUrl + "/users",
        strictSSL: false,
        resolveWithFullResponse: true,
        simple: false,
        json: true
    };

    let response = await request(options);
    console.log(response.statusCode);
    console.log(response.body);

    return response;
}

async getUserById(userId) {
    let options = {
        method: "GET",
        uri:urls.apiUrl + "/users/" +userId,
        strictSSL: false,
        resolveWithFullResponse: true,
        simple: false,
        json: true
    };

    let response = await request(options);
    console.log(response.statusCode);
    console.log(response.body);

    return response;
}

async addUser(comment: object) {
    let options = {
        method: "POST",
        uri: urls.apiUrl + "/users",
        body: comment,
        headers: {
            "content-type": "application/json"
        },
        strictSSL: false,
        resolveWithFullResponse: true,
        simple: false,
        json: true
    };

    let response = await request(options);
    console.log(response.statusCode);
    console.log(response.body);

    return response;
}

async editUserById(userId: number, user: object) {
    let options = {
        method: "PUT",
        uri: urls.apiUrl + "/users/" + userId,
        body: user,
        headers: {
            "content-type": "application/json"
        },
        strictSSL: false,
        resolveWithFullResponse: true,
        simple: false,
        json: true
    };

    let response = await request(options);
    console.log(response.statusCode);
    console.log(response.body);

    return response;
}

async deleteUserById(userId: number) {
    let options = {
        method: "DELETE",
        uri: urls.apiUrl + "/users/" + userId,
        strictSSL: false,
        resolveWithFullResponse: true,
        simple: false
    };

    let response = await request(options);
    console.log(response.statusCode);
    console.log(response.body);

    return response;
}
async getUsersByName(filters: any) {
    const options = {
        method: "GET",
        uri: urls.apiUrl + "/users",
        qs: filters,
        strictSSL: false,
        resolveWithFullResponse: true,
        simple: false,
        json: true
    };

    const response = await request(options);
    console.log(response.statusCode);
    console.log(response.body);

    return response;
}

}
export default new ApiUsersController();
    