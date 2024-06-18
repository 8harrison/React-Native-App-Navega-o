import { Films } from './filmdb';
import { Travels } from './traveldb';

export const Accounts = [
  { id: 1, username: 'Harrison', password: '1234' },
  { id: 2, username: 'Jesse', password: '5678' },
  { id: 3, username: 'Kleyton', password: 'abcd' }
  ];

export const Accounts_Films = [
  { userId: 1, filmId: 1 },
  { userId: 1, filmId: 2 },
  { userId: 1, filmId: 3 },
  { userId: 1, filmId: 4 },
  { userId: 2, filmId: 1 },
  { userId: 2, filmId: 2 },
  { userId: 2, filmId: 5 },
  { userId: 2, filmId: 6 },
  { userId: 3, filmId: 5 },
  { userId: 3, filmId: 6 },
  { userId: 3, filmId: 7 },
  { userId: 3, filmId: 8 },
];

export const Accounts_Travels = [
  { userId: 1, travelId: 1 },
  { userId: 1, travelId: 2 },
  { userId: 1, travelId: 3 },
  { userId: 1, travelId: 4 },
  { userId: 2, travelId: 3 },
  { userId: 2, travelId: 4 },
  { userId: 2, travelId: 5 },
  { userId: 2, travelId: 6 },
  { userId: 3, travelId: 5 },
  { userId: 3, travelId: 6 },
  { userId: 3, travelId: 7 },
  { userId: 3, travelId: 8 },
];

export const getAllFilms = (userId) => {
  const acc_film = Accounts_Films.filter((el) => el.userId == userId);
  const films = [];
  acc_film.forEach(({ filmId }) =>
    Films.forEach((film) => filmId == film.id && films.push(film))
  );
  return films;
};

export const getAllTravels = (userId) => {
  const acc_travel = Accounts_Travels.filter((el) => el.userId == userId);
  const travels = [];
  acc_travel.forEach(({ travelId }) =>
    Travels.forEach((travel) => travelId == travel.id && travels.push(travel))
  );
  return travels;
};
