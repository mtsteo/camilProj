


export function Chart1() {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];;
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  new Chart(
    document.getElementById('chart1'),
    {
      type: 'bar',
      data: data,
    }
  );
}


export function Chart2() {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];;
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  new Chart(
    document.getElementById('chart2'),
    {
      type: 'bar',
      data: data,
    }
  );
}


export function Chart3() {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];;
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  new Chart(
    document.getElementById('chart3'),
    {
      type: 'bar',
      data: data,
    }
  );
}


export function Chart4() {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];;
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  new Chart(
    document.getElementById('chart4'),
    {
      type: 'bar',
      data: data,
    }
  );
}

export function timeline1(){
  const anos = [];
    const dados = [];
    const anoAtual = new Date().getFullYear();
    for (let i = anoAtual - 50; i <= anoAtual; i++) {
      anos.push(i);
      // Gere dados aleatórios apenas para demonstração
      dados.push(Math.floor(Math.random() * 100));
    }

    // Configurações do gráfico
    const ctx = document.getElementById('timeline1');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: anos,
        datasets: [{
          label: 'Dados Aleatórios',
          data: dados,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      
    });
}
export function timeline2(){
  const anos = [];
    const dados = [];
    const anoAtual = new Date().getFullYear();
    for (let i = anoAtual - 50; i <= anoAtual; i++) {
      anos.push(i);
      // Gere dados aleatórios apenas para demonstração
      dados.push(Math.floor(Math.random() * 100));
    }

    // Configurações do gráfico
    const ctx = document.getElementById('timeline2');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: anos,
        datasets: [{
          label: 'Dados Aleatórios',
          data: dados,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      
    });
}