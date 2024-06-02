import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Paper } from '@mui/material';

const ReportControl: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Dados fictícios de exemplo
    const reportDetails = {
        id,
        name: 'Relatório 1850',
        lastUpdatedBy: 'John Doe',
        lastUpdatedAt: '2024-06-01 12:34:56'
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Controle do Relatório</Typography>
            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', backgroundColor: '#f7f7f7' }}>
                <Typography variant="h6">{reportDetails.name}</Typography>
                <Typography>Última atualização por: {reportDetails.lastUpdatedBy}</Typography>
<Typography>Horário da última atualização: {reportDetails.lastUpdatedAt}</Typography>
</Paper>
<Button variant="contained" color="primary" style={{ marginRight: '8px' }}>Atualizar</Button>
<Button variant="outlined" color="secondary">Ver Histórico</Button>
</Container>
);
};

export default ReportControl;
