import express from 'express';

import {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from '../controllers/people.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPeople);
router.get('/:id', getPerson);
router.post('/', auth, createPerson);
router.patch('/:id', auth, updatePerson);
router.delete('/:id', auth, deletePerson);

export default router;
