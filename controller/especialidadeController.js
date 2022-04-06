const express = require('express');

const especialidade = require('../model/especialidade');

/** CONFIGURAÇÃO DAS ROTAS **/
const router = express.Router();

/** DEFINIÇÃO DAS ROTAS: **/
/* ROTA DE INSERT (INSERÇÃO) DE ESPECIALIDADES*/
router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
        
        let { nome_especialidade,cod_especialidade } = req.body;
       
        especialidade.create(
            {nome_especialidade,cod_especialidade}

        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE INSERIDOS COM SUCESSO!');
            }
        );
    }
);

/* ROTA GET (LISTAGEM) GERAL DE ESPECIALIDADES*/
router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{
        
        especialidade.findAll()
                 .then(
                     (especialidade)=>{
                        res.send(especialidade);
                    }
                );
            }
        );

/* ROTA GET (LISTAGEM) POR ID DE ESPECIALIDADE */
router.get( 
    '/especialidade/listarEspecialidade/:id', 
    (req, res)=>{

        let {id} = req.params;
    

        especialidade.findByPk(id)
            .then(
                (especialidade)=>{
                    res.send(especialidade);
                 }
             );
        }
    );

 /* ROTA PUT (ALTERAÇÃO) DAS ESPECIALIDADE */
router.put(
    '/especialidade/alterarEspecialidade',
    (req, res)=>{

        let {id, nome_especialidade} = req.body;

        especialidade.update(
                {nome_especialidade},
                {where: {id}}
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE ALTERADOS COM SUCESSO!');
            }
        );
    }
);   

/* ROTA DELETE (EXCLUSÃO) DE ESPECIALIDADES*/
router.delete(
    '/especialidade/excluirEspecialidade/:id',
    (req, res)=>{

        let {id} = req.params;

        especialidade.destroy(
            {where: {id}}
        ).then(

            ()=>{
                res.send('ESPECIALIDADE EXCLUÍDA COM SUCESSO!');
            }

        );

    }
);

module.exports = router;