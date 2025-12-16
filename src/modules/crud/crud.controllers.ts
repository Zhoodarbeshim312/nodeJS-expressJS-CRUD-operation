import { Request, Response } from "express";

// Тип пользователя
interface IUser {
  id: number;
  name: string;
  age: number;
  job: string;
  country: string;
}

// Хранилище пользователей
let users: IUser[] = [];

// Получить всех пользователей
const getAllUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      error: `Error in getAllUsers: ${(error as Error).message}`,
    });
  }
};

// Добавить нового пользователя
const addNewUser = (req: Request, res: Response) => {
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
    const newUser: IUser = {
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
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      error: `Error in addNewUser: ${(error as Error).message}`,
    });
  }
};

// Удалить пользователя по ID
const deleteUser = (req: Request, res: Response) => {
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
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      error: `Error in deleteUser: ${(error as Error).message}`,
    });
  }
};

// Обновить пользователя по ID
const updateUser = (req: Request, res: Response) => {
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
    const updatedUser: IUser = {
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
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      error: `Error in updateUser: ${(error as Error).message}`,
    });
  }
};

export default {
  getAllUsers,
  addNewUser,
  deleteUser,
  updateUser,
};
