import React from 'react';
import Table from 'react-bootstrap/Table';
import Detail from './Detail'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default function CaseTable(props) {

    const TABLE_HEADINGS = ['ACCOUNT_TYPE', 'DISPLAY_NAME', 'ROLE'];

    function rowStyleFormat(row, rowIdx) {
        return { backgroundColor: rowIdx % 2 === 0 ? 'gray' : 'blue' };
      }
   
    return (
        <div>
            {props ? (
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        {TABLE_HEADINGS.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((node, id) => (
                            <tr>
                            <Link to={`/detail/:${node.id}`}><td>{node.accountId}</td></Link>
                            <td>{node.displayName}</td>
                            <td>{node.accountType}</td>
                            <td>{node.role}</td>
                            </tr>))}
                    </tbody>
                </Table>
            ) : 'Loading'}
            
        </div>
    )
}
