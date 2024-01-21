# HTTP Status Code

**Successful Responses (2xx)**
 - 200 OK (GET, PATCH)
 - 201 Created(POST, PUT)

**Client Error Responses(4xx)**
 - 400 Bad Request//kesalahan user misal input kurang / tidak sesuai
 - 401 Unauthorized//akses api belum login
 - 403 Forbidden//akses api sudah login akses tidak diizinkan
 - 404 Not Found//api tidak ada
 - 405 Method Not Allowed//method tidak diizinkan

**Server Error Responses (5xx)**
 - 500 Internal Server Error