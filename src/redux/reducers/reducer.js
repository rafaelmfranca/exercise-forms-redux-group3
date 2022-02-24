import { ACTION_PERSONAL, ACTION_PROFESSIONAL } from '../actions/action';

const PERSON_INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const PROF_INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

export const personalFormReducer = (state = PERSON_INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_PERSONAL:
    return { ...action.state };
  default:
    return state;
  }
};

export const professionalFormReducer = (state = PROF_INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_PROFESSIONAL:
    return { ...action.state };
  default:
    return state;
  }
};
