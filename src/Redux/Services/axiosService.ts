import { Api } from "./axios";

export interface ContratoBase {
  titulo: string,
  contract_number: number,
  init: Date,
  end: Date,
  review: Date,
  renew: Date,
  signature: boolean,
  comments: string,
  client_cnpj: string,
  client_name: string,
  client_address: string,
  client_email: string,
  client_contact: string,
  company_cnpj: string,
  company_name: string,
  company_address: string,
  company_email: string,
  company_contact: string,
  client_responsable_cpf: string,
  client_responsable_name: string,
  company_responsable_cpf: string,
  company_responsable_name: string
}

export interface Contrato extends ContratoBase {
  id: number,
}

type TContratosComTotalCount = {
  data: {
    contracts: Contrato[];
    total_count: number;
  };
  totalCount: number;
}

const getAll = async (): Promise<TContratosComTotalCount | Error> => {
  try {
    const urlRelativa = `/contract`;

    const { data } = await Api().get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(data.total_count === null ? 5 : data.total_count),
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<Contrato | Error> => {
  try {
    const { data } = await Api().get(`/contract/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
  }
};

const create = async (dados: Omit<Contrato, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api().post<Contrato>('/contract', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dados: Contrato): Promise<void | Error> => {
  try {
    await Api().put(`/contract/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api().delete(`/contract/${id}`);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
  }
};


export const AxiosService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};