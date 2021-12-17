# Node backendTest

## Установка

```
npm install
```

### Запуск

```
node backendTest.js
```

#### Сервер будет запущен по адресу
```
http://localhost:3123/
```

### API
#### GET
Нужен для получения конкретной сущности. При обращении указывается uuid сущности, в URL (вместо uuid в указанной ниже ссылке)
```
http://localhost:3123/uuid
``` 

#### GET
Нужен для получения всех сущностей.
```
http://localhost:3123/
``` 

#### POST
Нужен для сохранения сущности. При обращении ожидает JSON объект с полями firstName, secondName
```json
{
    "firstName": "Ivan",
    "secondName": "Ivanovich"
}
```
При успешном сохранении, в ответ отправляется JSON объект с дополнительным полем UUID
```json
{
    "uuid": "wqe12312-qwaereqr-123qwqe-qweqwe",
    "firstName": "Ivan",
    "secondName": "Ivanovich"
}
```
Адрес для сохранения сущности
```
http://localhost:3123/
```

#### PUT
Нужен для обновления сущности. При обращении ожидает JSON объект с полями firstName, secondName. Также ожидается uuid в URL
```json
{
    "firstName": "Ivan",
    "secondName": "Ivanovich"
}
```
При успешном обновлении, в ответ отправляется JSON объект с дополнительным полем UUID
```json
{
    "uuid": "wqe12312-qwaereqr-123qwqe-qweqwe",
    "firstName": "Ivan",
    "secondName": "Ivanovich"
}
```
Адрес для обновления сущности
```
http://localhost:3123/uuid
```

#### DELETE
Нужен для удаления сущности. При обращении указывается uuid сущности, в URL (вместо uuid в указанной ниже ссылке)
```
http://localhost:3123/uuid
``` 
В ответ приходит строка **"Элемент успешно удалён"**