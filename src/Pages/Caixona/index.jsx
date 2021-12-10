import { useState, useEffect } from "react";
import Card from '../../Components/card'
import img1 from '../../images/call.png'

const listaDePessoas = [
    {
        id: 1,
        nome: 'Giulia',
        idade: 19,
        linguagem: 'C',
        comida: 'Comida Baiana'
    },
    {
        id: 2,
        nome: 'Enzoca',
        idade: 18,
        linguagem: 'Java Script',
        comida: 'Whey com ovo'
    },
    {
        id: 3,
        nome: 'Say',
        idade: 19,
        linguagem: 'CSS',
        comida: 'Qualquer Coisa'
    },
    {
        id: 4,
        nome: 'Tonho',
        idade: 20,
        linguagem: 'Java Script',
        comida: 'Pizza Dominos'
    }
]


export function Caixona () {

    //use+nomedaparada é porque é um hook
    const [num, setNum] = useState(0);
    const [ValorSoma, setValorSoma] = useState(0);
    const [CampoTexto, setCampoTexto] = useState("");
    const [Cor, setCor] = useState("#ffff");


    //FAZER UM STATE QUE GUARDE UM CAMPO DE TEXTO E COLOCAR DENTRO DE UM INPUT, depois usem um botão a função alert(string) printando o state.

    const handlerCor = (e) =>{
        setCor(e.target.value)
        mudaCorDeFundo()
    }

    const mudaCorDeFundo = () => {
        document.body.style.background = Cor
    }

    const handlerAlert = () => {
        alert(CampoTexto);
    }

    const state = (e) => {
        console.log(e)
        setCampoTexto(e.target.value)
    }

    const somador = () => {
        setNum((p) => {
            return p + ValorSoma
        })
    }

    const handlerValorSoma = (e) => {
        console.log(e)
        setValorSoma(+e.target.value)
    }

    useEffect(() => {
        console.log("Você mudou o valor de num! FOFOCA!!!")
    }, [ValorSoma])

    return(
        <>
            <h1>minha caixona de areia!</h1>
            <p>1+1 // {1+1}</p>
            <p>Meu estado num: {num}</p>
            <br></br>

            <label>Insira o valor para ser somado: </label>
            <input type="number" value={ValorSoma} onChange={handlerValorSoma}></input>
            <br></br>
            <button onClick={somador}>somar</button>
            <br></br>
            <br></br>
            
            <input type="text" value={CampoTexto} onChange={state}></input>
            <br></br>
            <button onClick={handlerAlert}>Insira um texto!!</button>

            <br></br>
            <br></br>
            <label>Insira a cor para o fundo da página: </label>
            <input type="color" value={Cor} onChange={handlerCor}></input>
            <br></br>
            <button onClick={mudaCorDeFundo}>MUDAR COR</button>
            <br></br>
            <p>Cor escolhida: {Cor}</p>

            <br></br>


            <table style={{border:'1px solid black'}}> 
                <thead>
                    <tr style={{border:'1px solid black'}}>
                        <td>Nome</td>
                        <td>Idade</td>
                        <td>Linguagem</td>
                        <td>Comida Preferida</td>
                    </tr>
                </thead>
                <tbody>
                    {listaDePessoas.map((value, index) => {
                        return(
                            <tr>
                                <td>{value.nome}</td>
                                <td>{value.idade}</td>
                                <td>{value.linguagem}</td>
                                <td>{value.comida}</td>
                            </tr>
                        )
                    })}
                    {/* lista manual (não vale a pena) 
                    
                    <tr>
                        <td>Giulia</td>
                        <td>19</td>
                        <td>C</td>
                        <td>Comida</td>
                    </tr>
                    <tr>
                        <td>Enzoca</td>
                        <td>19</td>
                        <td>Java Script</td>
                        <td>Whey com ovo</td>
                    </tr>
                    <tr>
                        <td>Say</td>
                        <td>19</td>
                        <td>CSS</td>
                        <td>Comida</td>
                    </tr>
                    <tr>
                        <td>Tonho</td>
                        <td>20</td>
                        <td>Java Script</td>
                        <td>Pizza Dominos</td>
                    </tr> */}
                </tbody>
            </table>

        <hr></hr>
        <Card img={img1}/>
        </>
    )
}

// const Caixona = ( ) => {
//     return (
//         <>
//          <h1>minha caixona de areia!</h1>
//          <p>1+1 // {1+1}</p>
//         </>


//     )
// }

// export default Caixona;