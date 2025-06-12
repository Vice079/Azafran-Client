import React, { useEffect } from 'react'
import { Button, Flex, Input, Typography } from "antd";
import { useNavigate } from "react-router";
import { useState } from "react";
const { Title } = Typography;

const Ingredients = () => {
    const navigate = useNavigate();

    const [listIngredients, setListIngredients] = useState([]);
    const getAccessToken = localStorage.getItem("access_token");

    useEffect(() => {
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": getAccessToken
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setListIngredients(data);
            })
    }, [])

    return (
        <Flex gap={"8px"} vertical style={{ width: '400px' }}>
            <Title>Lista de ingredientes</Title>
            <table className="ingredientsTable">
                <tbody>
                    <tr>
                        <th>ID:</th>
                        <th>Nombre de ingrediente:</th>
                        <th>Cantidad:</th>
                    </tr>
                    {listIngredients.map((ingredient, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{ingredient._id}</td>
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.quantity}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <br />

            <Button
                //onClick={handleAddIngredientButtonClick}
                type="primary">Añadir alimento</Button>
            <Button
                //onClick={handleLoggOutButtonClick}
                type="primary">Log out</Button>

        </Flex>
    )
}

export { Ingredients }