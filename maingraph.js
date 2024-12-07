document.getElementById('generateGraph').addEventListener('click', function() {
    // Obtenha os valores dos campos de entrada
    const chartTitle = document.getElementById('chartTitle').value;
    const labels = document.getElementById('labels').value.split(',').map(label => label.trim());
    const values = document.getElementById('values').value.split(',').map(value => parseFloat(value.trim()));

    // Obtenha o tipo de gráfico selecionado
    const chartType = document.getElementById('chartType').value;

    // Verifique se os valores são válidos
    if (labels.length !== values.length) {
        alert("O número de rótulos não coincide com o número de valores.");
        return;
    }

    if (values.some(isNaN)) {
        alert("Por favor, insira apenas números válidos para os valores.");
        return;
    }

    // Obtenha o contexto do canvas
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    // Ajuste o tamanho do canvas para um valor padrão
    canvas.width = 500;  // Largura fixa do gráfico
    canvas.height = 300; // Altura fixa do gráfico

    // Crie o gráfico usando os dados fornecidos
    const myChart = new Chart(ctx, {
        type: chartType, // Tipo de gráfico baseado na seleção
        data: {
            labels: labels, // Rótulos do eixo X
            datasets: [{
                label: chartTitle || 'Gráfico', // Título do gráfico
                data: values, // Dados do gráfico
                backgroundColor: chartType === 'pie' ?
                    ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'] :
                    ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: chartType === 'pie' ?
                    ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'] :
                    ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: chartTitle || 'Gráfico Personalizado'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
