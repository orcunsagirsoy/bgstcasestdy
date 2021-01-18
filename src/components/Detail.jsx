import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default function Detail(props) {

    console.log(props.data)
    return (
        props ? (
            <div>
            <ul>
                <li>Display Name: {props.data.displayName}</li>
                <li>Accepted Trade Quantity: {props.data.acceptedTradeQuantity}</li>
                <li>Trade Date: {props.data.tradeDate}</li>
                <li>Price: {props.data.price}</li>
                <li>Volume: {props.data.volume}</li>
                <li>Role: {props.data.role}</li>
                <li>Account Type: {props.data.accountType}</li>
                <li>Quantity: {props.data.quantity}</li>
                <li>Id: {props.data.id}</li>
                <li>Account Id: {props.data.accountId}</li>
            </ul>
        </div>
        ) : ('Loading')
        
    )
}
