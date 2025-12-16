"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Хранилище пользователей
let users = [];
// Получить всех пользователей
const getAllUsers = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllUsers: ${error.message}`,
        });
    }
};
// Добавить нового пользователя
const addNewUser = (req, res) => {
    try {
        const { name, age, job, country } = req.body;
        if (!name || !age || !job || !country) {
            return res.status(400).json({
                success: false,
                message: "Please provide name, age, job, and country",
            });
        }
        const existingUser = users.find((el) => el.name === name);
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User with this name already exists",
            });
        }
        const newUser = {
            id: Date.now(),
            name,
            age,
            job,
            country,
        };
        users.push(newUser);
        res.status(201).json({
            success: true,
            data: newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in addNewUser: ${error.message}`,
        });
    }
};
// Удалить пользователя по ID
const deleteUser = (req, res) => {
    try {
        const userId = Number(req.params.id);
        const index = users.findIndex((user) => user.id === userId);
        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        users.splice(index, 1);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in deleteUser: ${error.message}`,
        });
    }
};
// Обновить пользователя по ID
const updateUser = (req, res) => {
    try {
        const userId = Number(req.params.id);
        const { name, age, job, country } = req.body;
        const existingUser = users.find((user) => user.id === userId);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const updatedUser = {
            id: existingUser.id,
            name: name ?? existingUser.name,
            age: age ?? existingUser.age,
            job: job ?? existingUser.job,
            country: country ?? existingUser.country,
        };
        const index = users.findIndex((user) => user.id === userId);
        users[index] = updatedUser;
        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in updateUser: ${error.message}`,
        });
    }
};
exports.default = {
    getAllUsers,
    addNewUser,
    deleteUser,
    updateUser,
};
//# sourceMappingURL=crud.controllers.js.map