import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {

    const passwordHash = await bcrypt.hash(password, 10) //da un hash = string

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save()
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie('token', token)
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });

  } catch (error) {
    res.status(500).json({ mensaje: error.mensaje })
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const userFound = await User.findOne({ email })

    if (!userFound) return res.status(400).json({ mensaje: "Usuario no encontrado" });
    const isMatch = await bcrypt.compare(password, userFound.password); //da un hash = string

    if (!isMatch) return res.status(400).json({ mensaje: "contraseña incorrecta" })

    const token = await createAccesToken({ id: userFound._id });
    res.cookie('token', token)
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });

  } catch (error) {
    res.status(500).json({ mensaje: error.mensaje })
  }
};

export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if (!userFound) return res.status(400).json({ mensaje: "Usuario no encontrado" })
  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  })

  // console.log(req.user);
  res.json('profile')
}