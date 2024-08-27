const { Router } = require("express");
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const matriculaRoutes = require("./matricula.route");
const RbacRouter = require("./rbac.route");

const routes = Router()
const userRouter = require("./user.route")

routes.use('/user', userRouter)
routes.use('/matriculas', matriculaRoutes)
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)
routes.use('/rbac', RbacRouter)



module.exports = routes

// postman
// {
//     "description": "criar_usuario"
// }
// {
//     "description": "admin"
// }
// http://localhost:3000/rbac/createOneRole
// http://localhost:3000/rbac/createOnePermission
// http://localhost:3000/rbac/listPermissions
// http://localhost:3000/rbac/listRoles