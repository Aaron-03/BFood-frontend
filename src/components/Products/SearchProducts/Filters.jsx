import React, { useContext } from 'react';
import { InputGroup } from 'react-bootstrap';
import LupaIcon from '../../../assets/img/General/search.svg';

import { FilterOfProducts } from '../../ui/Forms';
import {
  SearchProductField,
  SelectPrice,
  CustomCheckbox,
} from '../../ui/Fields';
import { Magnifier } from '../../ui/Images';
import ProductContext from '../../../context/products/ProductContext';

import productos from '../../../datos/productos.json';

const Filters = (props) => {

  const {
    searchByTerm,
    //searchCheckHamburger,
    searchByPrice,
    searchPrice,
  } = useContext(ProductContext);
  const handlerBusqueda = (e) => {
    searchByTerm(e.target.value);
  };
  const handlerCheckHamburger = (e) => {
    //searchByCheckHamburger(e.target.value);
    console.log(e.target.value);

    //const value = target.value;
    //searchByCheckHamburger(value);
  };
  const handlerPrice = (e) => {
    searchByPrice(Number(e.target.value));
  };
  return (
    <FilterOfProducts className="col-2">
      <h5 className="text-center pt-5 mb-3">Busca lo mejor para ti:</h5>

      <form className="mb-2">
        <SearchProductField
          type="Text"
          placeholder="¿Qué deseas ahora?"
          className="ml-4 mb-4 pl-4"
          name="busqueda"
          onChange={handlerBusqueda}
        />
        <Magnifier src={LupaIcon} />
      </form>

      <form className="mb-4">
        <span className="font-weight-bold ml-3">Ordenar por</span>

        <SelectPrice className="ml-4 w-50 p-1" onChange={handlerPrice}>
          <option value="0">Seleccione</option>
          <option value="1">Menor Precio</option>
          <option value="2">Mayor Precio</option>
        </SelectPrice>
      </form>

      <form>
        <span className="font-weight-bold ml-3">Categorías</span>

        <InputGroup className="ml-3 mt-3">
          <CustomCheckbox
            type="checkbox"
            name="isHamburguesas"
            onChange={handlerCheckHamburger}
            className="mr-2 mb-3"
          />
          <span>Hamburguesas</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Dulces y Chocolates</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Pizzas y Pastas</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Bebidas y Jugos</span>
        </InputGroup>

        <span className="font-weight-bold ml-3">
          Principales establecimientos
        </span>

        <InputGroup className="ml-3 mt-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Bembos</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Pizza Hut</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>KFC</span>
        </InputGroup>

        <InputGroup className="ml-3">
          <CustomCheckbox type="checkbox" className="mr-2 mb-3" />
          <span>Mediterraneo</span>
        </InputGroup>
      </form>
    </FilterOfProducts>
  );
};

export default Filters;