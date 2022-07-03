# Dulee NestJS Core
  
### feature list
  
* launch option notice
  
  - port, mode, envFileName, url
  
* config
  
  - file path: app-options/env-file-paht.st
  - mode: dev, stage, prod
  - validation: Joi.object()
  
* typeorm

  - core entity normal and with soft delete(for extends)

* http

  - custom catch exception
    - status code 6 or 3 digit
    - responseJsonException ({result, messgae, statusCode})
      message and statusCode are for debugging
  - catchHandler
  - try catch in controller

* crud example

* author, authen guard

* add vs create ?

  - ~~ controller -> create (front-wise)
  - service -> add (db-wise)