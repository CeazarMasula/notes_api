# Notes API

## Getting Started

#### Prerequisites

- Node.js and npm should be installed on your machine. You can download them [here](https://nodejs.org/).

### How to run notes API

1. Clone repository

   ```bash
   git clone git@github.com:CeazarMasula/notes_api.git
   ```

2. Install Dependencies

   ```bash
    cd notes-api
    npm install
   ```

3. Start the API server

   ```bash
   npm start
   ```

4. Once the server is started succesfully, you will see this notification on the terminal
   ```arduino
   Server running: http://localhost:3000
   ```

- Now the API is running, you can use the routes for performing operations in notes

### Routes

- `POST /notes` : Create a new note. The fields `title` and `body` are required but can be an empty string.

  **Example URL:** http://localhost:3000/notes/

  **Example Request Body:**

  ```json
  {
    "title": "Note title",
    "body": "the body of the note"
  }
  ```

  **Success Response**

  ```json
  {
    "message": "Note has been added",
    "note": {
      "id": "796e338e-ddf6-4544-98eb-f8f16da6dc1a",
      "title": "Note title",
      "body": "the body of the note"
    }
  }
  ```

  **Error Responses**

  - Given `title` is not on request body

    - **Status code**: 400 Bad Request
    - **Response body**:
      ```json
      {
        "message": "Please input the note <title>"
      }
      ```

  - Given `body` is not on request body

    - **Status code**: 400 Bad Request
    - **Response body**:
      ```json
      {
        "message": "Please input the note <body>"
      }
      ```

- `GET /notes` : Retrieve all notes.

  **Example URL:** http://localhost:3000/notes/

  **Success Response**

  ```json
  {
    "notes": [
      {
        "id": "796e338e-ddf6-4544-98eb-f8f16da6dc1a",
        "title": "Note title",
        "body": "the body of the note"
      }
    ]
  }
  ```

- `GET /notes/:id` : Retrieve a specific note by ID.

  **Example URL:** http://localhost:3000/notes/796e338e-ddf6-4544-98eb-f8f16da6dc1a

  **Success Response**

  ```json
  {
    "id": "796e338e-ddf6-4544-98eb-f8f16da6dc1a",
    "title": "Note title",
    "body": "the body of the note"
  }
  ```

  **Error Responses**

  - Given note doesn't exist
    - **Status code**: 404 Not Found
    - **Response body**:
      ```json
      {
        "message": "Note doesn't exist."
      }
      ```

- `PUT /notes/:id` : Update a specific note. The fields `title` and `body` are required but can be an empty string.

  **Example URL:** http://localhost:3000/notes/796e338e-ddf6-4544-98eb-f8f16da6dc1a

  **Example Request Body:**

  ```json
  {
    "title": "Updated Note title",
    "body": "the body of the updated note"
  }
  ```

  **Success Response**

  ```json
  {
    "message": "Note has been updated.",
    "note": {
      "id": "796e338e-ddf6-4544-98eb-f8f16da6dc1a",
      "title": "Updated Note title",
      "body": "the body of the updated note"
    }
  }
  ```

  **Error Responses**

  - Given note doesn't exist

    - **Status code**: 404 Not Found
    - **Response body**:

      ```json
      {
        "message": "Note doesn't exist."
      }
      ```

      **Error Responses**

  - Given `title` is not on request body

    - **Status code**: 400 Bad Request
    - **Response body**:
      ```json
      {
        "message": "Please input the note <title>"
      }
      ```

  - Given `body` is not on request body

    - **Status code**: 400 Bad Request
    - **Response body**:
      ```json
      {
        "message": "Please input the note <body>"
      }
      ```

- `DELETE /notes/:id` : Delete a specific note.

  **Example URL:** http://localhost:3000/notes/796e338e-ddf6-4544-98eb-f8f16da6dc1a

  **Success Response**

  ```json
  {
    "message": "Note has been deleted."
  }
  ```

  **Error Responses**

  - Given note doesn't exist
    - **Status code**: 404 Not Found
    - **Response body**:
      ```json
      {
        "message": "Note doesn't exist."
      }
      ```
