# Car-Management-Dashboard
Repository ini berisi tentang sebuah Dashboard dari Aplikasi Manajemen Mobil yang ditujukan sebagai tugas challenge chapter 5 pada course Fullstack Web Development - Binar Academy.

## ERD (Entity Relationship Diagram)

Untuk ERD-nya dapat diakses melalui link berikut: 

## Hyperlink

- Homepage: http://localhost:3000/
- Tambah Mobil: http://localhost:3000/addCars
- Edit Mobil: http://localhost:3000/editCars/:id

## API Endpoint

- Tambah Data Mobil = POST http://localhost:3001/cars
- Ambil Semua Data Mobil = GET http://localhost:3001/cars
- Ambil Data Mobil Berdasarkan ID = GET http://localhost:3001/cars/:id
- Edit Data Mobil Berdasarkan ID = PUT http://localhost:3001/cars/:id
- Hapus Data Mobil Berdasarkan ID = DELETE http://localhost:3001/cars/:id

## Contoh Request Body dan Response

- Request Body GET Semua Data Mobil

```
    "url": "http://localhost:3001/cars",
    "method": "GET",
    "body": {},
```

- Response Body GET Semua Data Mobil

```
{
    "data": [
        {
            "id": 13,
            "name": "Pajero Sport",
            "price": 450000,
            "size": "large",
            "image": "http://res.cloudinary.com/dqufcw81k/image/upload/v1665351616/Cars/wv7bugljkxrzysar7uvt.png",
            "createdAt": "2022-10-09T21:40:16.577Z",
            "updatedAt": "2022-10-09T21:40:16.577Z"
        },
        {
            "id": 14,
            "name": "Toyota Agya",
            "price": 200000,
            "size": "small",
            "image": "http://res.cloudinary.com/dqufcw81k/image/upload/v1665352219/Cars/zjegq6emfmo5hri4xhgv.png",
            "createdAt": "2022-10-09T21:50:18.958Z",
            "updatedAt": "2022-10-09T21:50:18.958Z"
        },
        {
            "id": 15,
            "name": "Suzuki Ertiga",
            "price": 250000,
            "size": "medium",
            "image": "http://res.cloudinary.com/dqufcw81k/image/upload/v1665352375/Cars/ir9yjso2ajmgegninn2b.png",
            "createdAt": "2022-10-09T21:52:55.796Z",
            "updatedAt": "2022-10-09T21:52:55.796Z"
        }
    ]
}
```

- Request Body GET Satu Data Mobil

```
    "url": "http://localhost:8000/api/updatecar/15",
    "method": "GET",
    "body": {},
    "params": { id: '15' },
```

- Response GET Satu Data Mobil

```
{
    "data": {
        "id": 15,
        "name": "Suzuki Ertiga",
        "price": 250000,
        "size": "medium",
        "image": "http://res.cloudinary.com/dqufcw81k/image/upload/v1665352375/Cars/ir9yjso2ajmgegninn2b.png",
        "createdAt": "2022-10-09T21:52:55.796Z",
        "updatedAt": "2022-10-09T21:52:55.796Z"
    }
}
```
## Cara Menjalankan Project Ini

- Run Frontend : npm run front
- Run Backend : npm run back
- Enjoy!
