import * as migration_20240830_102210_initial from './20240830_102210_initial';
import * as migration_20240902_095318_movies from './20240902_095318_movies';

export const migrations = [
  {
    up: migration_20240830_102210_initial.up,
    down: migration_20240830_102210_initial.down,
    name: '20240830_102210_initial',
  },
  {
    up: migration_20240902_095318_movies.up,
    down: migration_20240902_095318_movies.down,
    name: '20240902_095318_movies'
  },
];
