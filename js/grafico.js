class Grafico {
  constructor() { 
    this.turma = new Alunos();
  }

  montaGrafico() {
    const nomes = this.turma.getAlunos().map(aluno => aluno.nome);
    const notas = this.turma.getAlunos().map(aluno => aluno.nota);

    const canvas = document.getElementById('grafico');

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nomes, // Nomes dos alunos no eixo x
        datasets: [{
          label: 'Notas', // Legenda do conjunto de dados
          data: notas, // Notas no eixo y
          backgroundColor: '#87CEEB', // Cor das barras
          borderColor: '#BEBEBE', // Cor da borda das barras
          borderWidth: 1 // Largura da borda das barras
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Comece o eixo y em 0
            title: {
              display: true,
              text: 'Notas', // Legenda do eixo y
              font: {
                size: 16,
                weight: 'bold',
              },
              color: '#111'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Alunos', // Legenda do eixo x
              font: {
                size: 16,
                weight: 'bold',
              },
              color: '#111'
            }
          }
        }
      }
    });
  }  
}

