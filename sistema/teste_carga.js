import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // número de usuários virtuais
  duration: '30s', // duração do teste
};

// Teste de carga para POST
export default function () {
  // POST
  let payload = JSON.stringify({
    nome: 'Autor Teste',
    pais: 'Brasil',
    data_nascimento: '1990-01-01',
    foto: 'url_da_foto',
  });

  let headers = {
    'Content-Type': 'application/json',
  };

  let postRes = http.post('http://localhost:3000/autor', payload, { headers: headers });

  check(postRes, {
    'status is 201 for POST': (r) => r.status === 201,
  });

  sleep(1); // espera por 1 segundo entre as solicitações

  // GET
  let getRes = http.get('http://localhost:3000/autores');

  check(getRes, {
    'status is 200 for GET': (r) => r.status === 200,
    'response has data': (r) => JSON.parse(r.body).length > 0,
  });

  sleep(1); // espera por 1 segundo entre as solicitações
}
