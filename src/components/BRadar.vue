<script setup>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

const props = defineProps({
  trends: {
    type: Object,
    required: true,
  },
})
onMounted(() => {
  const ctx = document.getElementById('radar').getContext('2d')
  const labels = Object.keys(props.trends)
  const data = Object.values(props.trends)

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [
        {
          label: 'Hard Skils',
          data,
          backgroundColor: 'rgba(252, 79, 97, 0.7)',
          borderColor: '#fc4f61',
          pointBackgroundColor: '#fc4f61',
          fill: true,
          color: 'white',
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          grid: {
            color: '#989898',
          },
          angleLines: {
            color: '#989898',
          },
          pointLabels: {
            color: 'white',
            font: {
              size: 14,
            },
          },
          ticks: {
            display: false, // Oculta os números do dataset
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            font: {
              size: 16,
            },
          },
        },
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  })
})
</script>
<template>
  <canvas id="radar"></canvas>
</template>
<style lang="scss" scoped></style>
