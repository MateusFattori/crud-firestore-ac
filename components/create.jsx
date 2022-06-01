import { app, database } from '../services/firebase'
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react' 
import Read from './read'

const contato = collection(database,'contato')

export default function Create(){
    const [nome, SetNome] = useState('')
    const [email, SetEmail] = useState('')
    const [telefone, SetTelefone] = useState('')
    const [mensagem, SetMensagem] = useState('')

    const create = ()=>{
        addDoc(contato,{
            nome:nome,
            email: email,
            telefone: telefone,
            mensagem: mensagem
          }).then(()=>{
            SetNome('')
            SetEmail('')
            SetTelefone('')
            SetMensagem('')
            read()
          })
    }
    
    return(
        <>
        <div className="col-md"><h3 className="text-center">Cadastrar</h3>
            <input type="text" placeholder="Nome" className="form-control" required onChange={event=>SetNome(event.target.value)} value={nome} />
            <input type="email" placeholder="Email" className="form-control" required onChange={event=>SetEmail(event.target.value)} value={email} />
            <input type="tel" placeholder="Telefone" className="form-control" required onChange={event=>SetTelefone(event.target.value)} value={telefone} />
            <textarea placeholder="Mensagem" className="form-control" required onChange={event=>SetMensagem(event.target.value)} value={mensagem} ></textarea>
            <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={create} />
            </div>
            <div className="col-md"><h3 className="text-center">Exibir</h3>
        </div>
        </>
    )
}