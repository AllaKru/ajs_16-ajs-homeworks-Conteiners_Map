
import ErrorRepository from '../app';

const repo = new ErrorRepository();

test('работа ErrorRepository', () => {
  repo.err.set(404, 'Ресурс не найден');
  repo.err.set(500, 'Внутренняя ошибка сервера');
  repo.err.set(502, 'Ошибка при маршрутизации запроса');
  expect(repo.translate(404)).toBe('Ресурс не найден');
});
test('работа ErrorRepository', () => {
  repo.err.set(404, 'Ресурс не найден');
  repo.err.set(500, 'Внутренняя ошибка сервера');
  repo.err.set(502, 'Ошибка при маршрутизации запроса');
  expect(repo.translate(503)).toBe('Unknown error');
});
// test('работа ErrorRepository', () => {
//   expect(([...repo.err.keys()])).toEqual([404,500,502]);
// });
