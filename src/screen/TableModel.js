import Table from 'react-bootstrap/Table';
import './TableModel.css';
import React from 'react';

function TableModel({data}) {
  
  return (
    <>
      <Table striped bordered hover variant='light' size='sm'>
        <thead>
          <tr>
            <th>{data[0].title}</th>
            <th>{data[0].projects}</th>
            <th>{data[0].workingGroups}</th>
            <th>{data[0].activities}</th>
            <th>{data[0].hours}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data[1].title}</td>
            <td>{data[1].projects}</td>
            <td>{data[1].workingGroups}</td>
            <td>{data[1].activities}</td>
            <td>{data[1].hours}</td>
          </tr>
          <tr>
            <td>{data[2].title}</td>
            <td>{data[2].projects}</td>
            <td>{data[2].workingGroups}</td>
            <td>{data[2].activities}</td>
            <td>{data[2].hours}</td>
          </tr>
          <tr>
            <td>{data[3].title}</td>
            <td>{data[3].projects}</td>
            <td>{data[3].workingGroups}</td>
            <td>{data[3].activities}</td>
            <td>{data[3].hours}</td>
          </tr>
          <tr>
            <td>{data[4].title}</td>
            <td>{data[4].projects}</td>
            <td>{data[4].workingGroups}</td>
            <td>{data[4].activities}</td>
            <td>{data[4].hours}</td>
          </tr>
          <tr>
            <td>{data[5].title}</td>
            <td>{data[5].projects}</td>
            <td>{data[5].workingGroups}</td>
            <td>{data[5].activities}</td>
            <td>{data[5].hours}</td>
          </tr>
          <tr>
            <td>{data[6].title}</td>
            <td>{data[6].projects}</td>
            <td>{data[6].workingGroups}</td>
            <td>{data[6].activities}</td>
            <td>{data[6].hours}</td>
          </tr>
          <tr>
            <td>{data[7].title}</td>
            <td>{data[7].projects}</td>
            <td>{data[7].workingGroups}</td>
            <td>{data[7].activities}</td>
            <td>{data[7].hours}</td>
          </tr>
          <tr>
            <td>{data[8].title}</td>
            <td>{data[8].projects}</td>
            <td>{data[8].workingGroups}</td>
            <td>{data[8].activities}</td>
            <td>{data[8].hours}</td>
          </tr>
        
        </tbody>
      </Table>
    </>
  );
}

export default TableModel;