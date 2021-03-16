import express from 'express';
import mongoose from 'mongoose';

import PeopleList from '../models/peopleList.js';

const router = express.Router();

export const getPeople = async (req, res) => {
  try {
    const peopleList = await PeopleList.find();
    res.status(200).json(peopleList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPerson = async (req, res) => {
  const { id } = req.params;

  try {
    const person = await PeopleList.findById(id);

    res.status(200).json(person);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPerson = async (req, res) => {
  const person = req.body;
  const newPerson = new PeopleList({
    ...person,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePerson = async (req, res) => {
  const { id: _id } = req.params;
  const person = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No person with that id');

  const updatedPerson = await PeopleList.findByIdAndUpdate(
    _id,
    { ...person, _id },
    {
      new: true,
    }
  );

  res.json(updatedPerson);
};

export const deletePerson = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No person with that id');

  await PeopleList.findByIdAndDelete(_id);

  res.json({ message: 'Person removed from the list' });
};

export default router;
