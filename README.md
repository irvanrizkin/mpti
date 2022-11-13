# TI Pay API
TI Pay backend API for MPTI project

## Library
- .env loader : dotenv
- Unique ID : nanoid
- HTTP Client : axios
- Backend : express
- CORS : cors
- SQL : mysql2
- ORM : sequelizer
- Migration : sequelize-cli

## Installation
Requires Node.JS v14+ to run
```sh
git clone https://github.com/rifqihz/mpti.git
cd mpti
npm install
cp env.example .env
# Edit the .env first before running
npx sequelize-cli db:migrate
node index.js
```

## API Documentation
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16044801-faec1751-a91a-4382-8e1b-a08e510023de?action=collection%2Ffork&collection-url=entityId%3D16044801-faec1751-a91a-4382-8e1b-a08e510023de%26entityType%3Dcollection%26workspaceId%3De9bbc99f-50ac-4e59-b353-446e2ea50a63#?env%5Blocalhost%5D=W3sia2V5IjoiaG9zdCIsInZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJzZXNzaW9uSW5kZXgiOjB9XQ==)

Attributes list :
| Json Attribute | Description                                                | Type    |
|----------------|------------------------------------------------------------|---------|
| transactionId  | The ID for the transaction process                         | string  |
| vendorName     | vendor name                                                | string  |
| customerName   | customer name                                              | string  |
| total          | total bill                                                 | int     |
| status         | transaction status. `false` for unpaid and `true` for paid | boolean |
| createdAt      | Time when the transaction created                          | Date    |
| updatedAt      | Time when the transaction updated                          | Date    |
| virtualAccount | Bank virtual account or merchant code for payment          | string  | 

Endpoint list : 
- `POST /transaction/create` (Create a transaction)
  - Request body : 
    | Json Attribute | Description   | Type   | Required |
    |----------------|---------------|--------|----------|
    | vendorName     | vendor name   | string | required |
    | customerName   | customer name | string | required |
    | total          | total bill    | int    | required |
  - Request : 
    ```json
    # POST /transaction/create
    {
    "vendorName":"tipay",
    "customerName":"titi",
    "total":100000
    }
    ```
  - Response :
    ```json
    # (200 OK)
    {
    "success": true,
    "message": "new transaction created",
    "results": {
        "transactionId": "TRC-S4sKVqTh4G31V98Q",
        "vendorName": "tipay",
        "customerName": "titi",
        "total": 100000,
        "status": false,
        "createdAt": "2022-11-13T06:01:04.785Z",
        "updatedAt": "2022-11-13T06:01:04.786Z"
        }
    }
    ```
- `GET /transaction/<transactionId>` (Get a transaction data)      
  - Request :
    ```
    # GET /transaction/TRC-S4sKVqTh4G31V98Q
    ```
  - Response :
    ```json
    # (200 OK)
    {
    "success": true,
    "message": "Success get transaction",
    "results": {
        "transactionId": "TRC-S4sKVqTh4G31V98Q",
        "vendorName": "tipay",
        "customerName": "titi",
        "total": 100000,
        "status": false,
        "createdAt": "2022-11-13T06:01:04.000Z",
        "updatedAt": "2022-11-13T06:01:04.000Z"
        }
    }
    ```
- `GET /transaction/<transactionId>/<paymentMethod>` (Get a transaction pay code)
  <details>
  <summary>Click to see all supported payment method : </summary>
    
    1. mandiri
    2. bca
    3. bri
    4. bni
    5. alfamart 
    6. indomart
    7. brilink
  </details>

  - Request :
    ```
    # GET /transaction/TRC-LeWKfq8BBOjPwyna/bni
    ```
  - Response :
    ```json
    # (200 OK)
    {
    "success": true,
    "message": "Success get va number",
    "results": {
        "transactionId": "TRC-LeWKfq8BBOjPwyna",
        "vendorName": "tipay",
        "customerName": "titi",
        "total": 100000,
        "status": true,
        "createdAt": "2022-11-12T19:15:07.000Z",
        "updatedAt": "2022-11-13T05:08:56.000Z",
        "virtualAccount": "9883336539252201"
        }
    }
    ```
- `POST /transaction/<transactionId>/pay` (Pay a transaction)   
  - Request : 
    ```    
    # POST /transaction/TRC-S4sKVqTh4G31V98Q/pay
    ```
  - Response :
    ```json
    # (200 OK)
    {
    "success": true,
    "message": "Success pay transaction",
    "results": {
        "transactionId": "TRC-zU7QEVfVzQF9tSj5",
        "vendorName": "tipay",
        "customerName": "titi",
        "total": 100000,
        "status": true,
        "createdAt": "2022-11-12T19:17:30.000Z",
        "updatedAt": "2022-11-12T19:17:38.000Z"
        }
    }
    ```