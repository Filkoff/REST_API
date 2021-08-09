# Get all users

### /api/users

- Method: GET

# Get all posts of user

### /api/users/:user_id/posts

- Method: GET

### URL Params

- Required: id=[integer]

# Create post

### /api/post/create

- Method: POST

### Data Params

- {
  title: string,
  user_id: number,
  }

# Delete post

### /api/posts/:id

- Method: DELETE

### URL Params

- Required: id=[integer]

# Add like to a post

### /api/posts/:post_id/like

- Method: POST

### URL Params

- Required: id=[integer]

# Authentication

### /login

- Method: POST

# Get all posts (only when authenticated)

### /api/posts

- Method: GET

# Deauthentication

### /logout

- Method: POST
