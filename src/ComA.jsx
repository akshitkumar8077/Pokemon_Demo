import React, { useState, useEffect } from "react";
import axios from "axios";

const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      console.log(response.data);
      setName(response.data.name);
      setMoves(response.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
      <h1>
        You have chosen option : <span style={{ color: "green" }}> {num} </span>
      </h1>
      <h1>
        You have chosen pokemon :{" "}
        <span style={{ color: "green" }}> {name} </span>
      </h1>
      <h1>
        Moves of chosen pokemon :{" "}
        <span style={{ color: "green" }}> {moves} </span>
      </h1>
    </>
  );
};

export default ComA;
