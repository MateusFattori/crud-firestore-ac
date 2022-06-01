import Head from 'next/head'
import Image from 'next/image'
import Create from '../components/create'
import Read from '../components/read'

export default function Home() {

  /*
  //hooks
  const [nome, SetNome]=useState('')
  const [email, SetEmail]=useState('')
  const [telefone, SetTelefone]=useState('')
  const [mensagem, SetMensagem]=useState('')

  //Create
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
  }*/

  /*
  //Read
  const [lista, setLista] = useState([])
  const read = ()=>{
    getDocs(query(contato, orderBy('nome')))
    .then((data)=>{
      setLista(data.docs.map((item)=>{
        return{...item.data(),id:item.id}
      }))
    })
  }
  //Mostar os documentos ao altualizr a página
  useEffect(()=>{
    read()
  },[])
*/

  return (
    <>
    <Head>
      <title>Crud Simples com firestore</title>
    </Head>
    <main className="container">
      <div className="row">
        <div className="col-lg">
          <Create/>
        </div>
      </div>
      <div className="col-lg">
        <Read/>
      </div>
    </main>
    </>
  )
}
