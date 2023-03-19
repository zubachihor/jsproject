import {describe, expect} from "@jest/globals"
import apiUsersController from "../../api/apiUsersController";


describe("Users API tests", () => {

    it("should return all users", async () => {
        const response = await apiUsersController.getAllUsers();
        console.log(response);
        expect(response.statusCode).toEqual(200);
    });
    
    it("should add a new user", async () => {
        const user = {
            name: "Test User",
            username: "testuser",
            email: "testuser@test.com"
        };
        const response = await apiUsersController.addUser(user);
        console.log(response);
        expect(response.statusCode).toEqual(201);
        expect(response.body.name).toEqual(user.name);
        expect(response.body.username).toEqual(user.username);
        expect(response.body.email).toEqual(user.email);
    });

    it("should edit an existing user", async () => {
        const userId = 1;
        const user = {
            name: "John Doe",
            email: "johndoe@gmail.com"
        };
        const response = await apiUsersController.editUserById(userId, user);
        expect(response.statusCode).toEqual(200); // OK
        expect(response.body.name).toEqual(user.name);
        expect(response.body.email).toEqual(user.email);
    });

    it("should delete an existing user", async () => {
        const userId = 1;
        const response = await apiUsersController.deleteUserById(userId);
        expect(response.statusCode).toEqual(200); // OK
    });

    it("should retrieve a single user by ID", async () => {
        const userId = 1;
        const response = await apiUsersController.getUserById(userId);
        expect(response.statusCode).toEqual(200); // OK
        expect(response.body.id).toEqual(userId);
    });

    it("should retrieve a filtered list of users", async () => {
        const response = await apiUsersController.getUsersByName({name: "Clementine Bauch"});
        expect(response.statusCode).toEqual(200); // OK
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].name).toEqual("Clementine Bauch");
    });

    it("should return a specific user by ID", async () => {
        const userId = 1;
        const response = await apiUsersController.getUserById(userId);
        console.log(response);
        expect(response.statusCode).toEqual(200);
        expect(response.body.id).toEqual(userId);
    });

    it("should edit an existing user", async () => {
        const userId = 1;
        const updatedUser = {
            name: "Updated User",
            username: "updateduser",
            email: "updateduser@test.com"
        };
        const response = await apiUsersController.editUserById(userId, updatedUser);
        console.log(response);
        expect(response.statusCode).toEqual(200);
        expect(response.body.name).toEqual(updatedUser.name);
        expect(response.body.username).toEqual(updatedUser.username);
        expect(response.body.email).toEqual(updatedUser.email);
    });

    it("should delete an existing user", async () => {
        const userId = 1;
        const response = await apiUsersController.deleteUserById(userId);
        console.log(response);
        expect(response.statusCode).toEqual(200);
    });
})