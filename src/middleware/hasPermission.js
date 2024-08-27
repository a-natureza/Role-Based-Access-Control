function hasPermission(permission) {
    return async (request, response, next) => {
        if (!request.headers.authorization) {
            return response.status(401).send("Token não fornecido")
        }
    }
}