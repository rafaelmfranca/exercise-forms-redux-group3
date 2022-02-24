import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const {
      personalForm: { nome, email, cpf, endereco, cidade, estado },
      professionalForm: { curriculo, cargo, descricao },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          {email}
        </div>
        <div>
          CPF:
          {cpf}
        </div>
        <div>
          Endereço:
          {endereco}
        </div>
        <div>
          Cidade:
          {cidade}
        </div>
        <div>
          Estado:
          {estado}
        </div>
        <div>
          Currículo:
          {curriculo}
        </div>
        <div>
          Cargo:
          {cargo}
        </div>
        <div>
          Descrição do cargo:
          {descricao}
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalForm: PropTypes.objectOf(PropTypes.string),
  professionalForm: PropTypes.objectOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  personalForm: state.personalFormReducer,
  professionalForm: state.professionalFormReducer,
});

export default connect(mapStateToProps, null)(FormDataDisplay);
