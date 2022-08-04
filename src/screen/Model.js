import React from 'react';
import TableModel from './TableModel';

function ModelBootstrap({title}) {
    return (
        <TableModel data={title} />
    );
}

export default ModelBootstrap