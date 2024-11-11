const request = require('supertest');
const app = require('../app'); // Проверьте, что путь верный
let server;

describe('GET /', () => {
    before((done) => {
        // Запускаем сервер
        server = app.listen(3000, (err) => {
            if (err) {
                console.error('Error starting server:', err); // Логируем ошибку
                return done(err); // Завершаем с ошибкой
            }
            console.log('Server started on port 3000'); // Логируем успешный старт
            done(); // Сервер успешно запущен
        });
    });

    after((done) => {
        if (server) {
            server.close((err) => {
                if (err) {
                    console.error('Error closing server:', err); // Логируем ошибку при закрытии
                } else {
                    console.log('Server closed successfully');
                }
                done(); // Завершаем
            });
        } else {
            done(); // Завершаем, если сервер не был запущен
        }
    });

    it('should return Hello World', (done) => {
        request(server)
            .get('/')
            .expect(200)
            .expect('Hello World', done);
    });
});

