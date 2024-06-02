import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItemButton, ListItemText, Typography, Paper } from '@mui/material';


const reports = [
    { id: 1, name: 'Relatório de Vendas' },
    { id: 2, name: 'Relatório de Estoque' },
    { id: 3, name: 'Relatório Financeiro' }
];

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#f7f7f7' }}>
                <List>
                    {reports.map(report => (
                        <ListItemButton component={Link} to={`/report/${report.id}`} key={report.id}>
                            <ListItemText primary={report.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default Dashboard;
