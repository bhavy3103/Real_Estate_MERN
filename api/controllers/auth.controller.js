import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  // console.log(req.body);
  const { username, email, password } = req.body;
  const hasedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasedPassword });
  try {
    await newUser.save()
    res.status(201).json("User created Successfully");
  } catch (error) {
    // res.status(500).json(error.message);

    //using middleware
    // next(errorHandler(550, 'error from the function'));
    next(error);

  }
};