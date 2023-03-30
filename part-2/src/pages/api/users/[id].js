import { users } from "../../../../data"

export default function handler({query :{id}}, res){
    const user=users.find(usr=>usr.id===Number(id))
    res.status(200).json(user)
}