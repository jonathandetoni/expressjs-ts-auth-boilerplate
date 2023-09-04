enum StatusCode {
    SUCCESS_REQUEST_CODE = 200,
    CREATED_REQUEST_CODE = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST_ERROR_CODE = 400,
    UNAUTHORIZED_ERROR_CODE = 401,
    RESOURCE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR_CODE = 500,
  }

  export { StatusCode };