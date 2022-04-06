const express = require('express');
const app = express();
const router = express.Router();
const medico = require('../model/medico');


/** DEFINIÇÃO DAS ROTAS: **/
/* ROTA POSR (INSERÇÃO) DE MEDICO*/
router.post(
    '/medico/cadastrarMedico',
    (req, res)=>{
        
        const med = { 
            cod_medico,
            nome_medico,
            cod_especialidade,
            email_medico,
            telefone_medico,
            celular_medico
            } = req.body;

        medico.create(
           med
        ).then(
            ()=>{
                res.send('DADOS DO MÉDICO INSERIDOS COM SUCESSO!');
            }
        );
    }
);

/* ROTA DE GET (LISTAGEM) GERAL DOS MÉDICOS*/
router.get(
    '/medico/listarMedico',
    (req, res)=>{
        
        medico.findAll()
                .then(
                    (medico)=>{
                       res.send(medico);
            }
        );
    }
);

/* ROTA DE GET (LISTAGEM) POR ID DE MEDICO*/
router.get( 
    '/medico/listarMedico/:id', 
      (req, res)=>{
        let {id} = req.params;
    
        medico.findByPk(id)
               .then(
                 (medico)=>{
                    res.send(medico);
            }
        );
    }
);

/*ROTA DE UPDATE (ATUALIZAR) OS MÉDICOs */
router.put(
        '/medico/alterarMedico/:id',
        (req, res)=>{
            
            let {
                cod_medico,
                nome_medico,
                cod_especialidade,
                email_medico,
                telefone_medico,
                celular_medico
                } = req.body;
                
            const { id } = req.params;

            medico.update(
                {
                cod_medico,
                nome_medico,
                cod_especialidade,
                email_medico,
                telefone_medico,
                celular_medico
                },
                {where:{id}}
              
    
            ).then(
                ()=>{
                    res.send('DADOS DO MÉDICO ALTERADOS COM SUCESSO!');
            }
        );
    }
);

/*ROTA DE DELETE (EXCLUSÃO) DE MÉDICO */
router.delete(
        '/medico/excluirMedico/:id',
        (req, res)=>{
            let {id} = req.params;
    
            medico.destroy(
        
                {where:{id}}
            
            ).then(
                ()=>{
                    res.send('DADOS DO MÉDICO EXCLUIDOS COM SUCESSO!');
            }
        );
    }
);


   module.exports = router;