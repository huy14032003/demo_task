function initChart() {
  Highcharts.chart("box2", {
    chart: {
      backgroundColor: "transparent", // ✅ Xoá nền chính của chart
      plotBackgroundColor: "transparent", // ✅ Xoá nền vùng vẽ biểu đồ (plot)
      plotBorderWidth: 0, // ✅ Không viền khung plot
      plotShadow: false,
      //   marginBottom: 60,
    },
    title: {
      text: "Biểu đồ tiến độ xử lý", // hoặc bất kỳ nội dung nào
      align: "left",
      style: {
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "bold",
      },
      margin: 20, // khoảng cách với chart bên dưới
    },
    xAxis: {
      categories: [
        "2025-07-08",
        "2025-07-09",
        "2025-07-10",
        "2025-07-11",
        "2025-07-12",
        "2025-07-13",
        "2025-07-14",
      ],
      lineColor: "#ffffff",
      labels: { style: { color: "white" } },
      //   crosshair: true,
    },
    yAxis: [
      {
        // Cột trái
        gridLineWidth: 0,
        min: 0,
        title: { text: null },
        labels: { style: { color: "white" } },
      },
      {
        // Cột phải
        gridLineWidth: 0,
        title: { text: null },
        labels: {
          format: "{value} %",
          style: { color: "white" },
        },
        opposite: true,
      },
    ],
    legend: {
      itemStyle: { color: "white" },
      symbolRadius: 3, // ✅ Đổi biểu tượng từ tròn → vuông
      symbolHeight: 10, // ✅ Kích thước biểu tượng
      symbolWidth: 10, // ✅ Kích thước biểu tượng
      symbolPadding: 5, // ✅ Giảm khoảng cách giữa biểu tượng và chữ
      itemMarginBottom: 0,
    },
    tooltip: {
      shared: true,
      backgroundColor: "#2c3e50",
      style: { color: "#ffffff" },
    },
    credits: { enabled: false },
    plotOptions: {
      column: {
        borderWidth: 0,
        states: {
          hover: {
            enabled: true,
            borderWidth: 1, // ✅ Làm sáng cột khi hover
          },
        },
      },
    },
    series: [
      {
        name: "Process",
        type: "column",
        data: [5, 8, 4, 7, 6, 3, 1],
        color: "#2196F3", // xanh dương
      },
      {
        name: "Finish",
        type: "column",
        data: [60, 68, 59, 65, 63, 55, 20],
        color: "#66ff66", // xanh lá
      },
      {
        name: "Finish Percentage",
        type: "spline",
        yAxis: 1,
        data: [90, 85, 80, 95, 90, 88, 70],
        color: "#FFD700", // vàng
      },
      {
        name: "Total Process",
        type: "spline",
        yAxis: 1,
        data: [65, 76, 63, 72, 69, 58, 21],
        color: "#FF4C4C", // đỏ
      },
    ],
  });
  //   box 1
  Highcharts.chart("box1", {
    chart: {
      type: "column",
      backgroundColor: "transparent", // ✅ Xoá nền chính của chart
      plotBackgroundColor: "transparent", // ✅ Xoá nền vùng vẽ biểu đồ (plot)
      plotBorderWidth: 0, // ✅ Không viền khung plot
      plotShadow: false,
      //   marginBottom: 60,
    },
    title: {
      text: "Biểu đồ 1",
      align: "left",
      style: {
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "bold",
      },
      margin: 20,
    },

    xAxis: {
      categories: ["USA", "China", "Brazil"],
      //   crosshair: true,
      accessibility: {
        description: "Countries",
      },
      lineColor: "#ffffff",
      labels: { style: { color: "white" } },
    },
    yAxis: {
      gridLineWidth: 0,
      min: 0,
      tickPositions: [0, 10, 20, 30, 40],
      labels: { style: { color: "white" } },
      title: {
        text: null, // ✅ Xoá chữ "Values"
      },
    },
    tooltip: {
      shared: true, // ✅ Hiển thị nhiều series cùng lúc
      backgroundColor: "#333",
      borderColor: "#fff",
      style: {
        color: "#fff",
      },
      valueSuffix: " kg",
    },
    credits: { enabled: false },
    plotOptions: {
      column: {
        pointWidth: 35, // ✅ Chiều rộng mỗi cột (px)

        pointPadding: 0.2,
        borderWidth: 0,
        states: {
          hover: {
            enabled: true,
            borderWidth: 1.3, // ✅ Làm sáng cột khi hover
          },
        },
      },
    },
    legend: {
      enabled: false, // ✅ Tắt hẳn phần chú thích
    },
    series: [
      {
        name: "Corn",
        data: [5, 15, 35],
      },
      {
        name: "Wheat",
        data: [10, 10, 25],
        color: "#66ff66",
      },
    ],
  });
  Highcharts.chart("box3", {
    chart: {
      type: "column",
      backgroundColor: "transparent", // ✅ Xoá nền chính của chart
      plotBackgroundColor: "transparent", // ✅ Xoá nền vùng vẽ biểu đồ (plot)
      plotBorderWidth: 0, // ✅ Không viền khung plot
      plotShadow: false,
      //   marginBottom: 60,
    },
    title: {
      text: "Biểu đồ 3 ",
      align: "left",
      style: {
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "bold",
      },
      margin: 20,
    },

    xAxis: {
      categories: ["USA", "China", "Brazil"],
      //   crosshair: true,
      accessibility: {
        description: "Countries",
      },
      lineColor: "#ffffff",
      labels: { style: { color: "white" } },
    },
    yAxis: {
      gridLineWidth: 0,
      min: 0,
      tickPositions: [0, 10, 20, 30, 40],
      labels: { style: { color: "white" } },
      title: {
        text: null, // ✅ Xoá chữ "Values"
      },
    },
    tooltip: {
      shared: true, // ✅ Hiển thị nhiều series cùng lúc
      backgroundColor: "#333",
      borderColor: "#fff",
      style: {
        color: "#fff",
      },
      valueSuffix: " kg",
    },
    credits: { enabled: false },
    plotOptions: {
      column: {
        pointWidth: 200, // ✅ Chiều rộng mỗi cột (px)

        pointPadding: 0.2,
        borderWidth: 0,
        states: {
          hover: {
            enabled: true,
            borderWidth: 1.3, // ✅ Làm sáng cột khi hover
          },
        },
      },
    },
    legend: {
      enabled: false, // ✅ Tắt hẳn phần chú thích
    },
    series: [
      {
        name: "Corn",
        data: [5, 15, 35],
      },
    ],
  });

  Highcharts.chart("box4", {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      spacingBottom: 30,
    },
    title: {
      text: "Biểu đồ 4",
      align: "left",
      style: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "Total<br>71",
      align: "center",
      verticalAlign: "middle",
      y: 40,
      style: {
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        startAngle: 0,
        endAngle: 360,
        center: ["50%", "50%"],
        innerSize: "70%", // ✅ Làm thành donut
      },
    },

    series: [
      {
        name: "Level",
        colorByPoint: true,
        data: [
          {
            name: "Total",
            y: 71,
            color: "#1e90ff", // ✅ Màu xanh giống ảnh
          },
        ],
      },
    ],
    credits: { enabled: false },
    legend: {
      enabled: true,
    },
  });

  Highcharts.chart("box5", {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      spacingBottom: 10,
    },
    title: {
      text: "Biểu đồ 5",
      style: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: { style: { color: "white" } },
      lineColor: "#ffffff",
    },
    yAxis: {
      title: { text: null },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "Reggane",
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 12.5, 10, 38.4, 35.5, 1.2, 22.0, 17.8,
        ],
      },
      {
        name: "Tallinn",
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 10.5, 39, -0.9,
        ],
        color: "red",
      },
    ],
    credits: { enabled: false },
    legend: {
      itemStyle: { color: "white" },
    },
  });
  Highcharts.chart("box6", {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      spacingBottom: 10,
    },
    title: {
      text: "Biểu đồ 5",
      style: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: { style: { color: "white" } },
      lineColor: "#ffffff",
    },
    yAxis: {
      title: { text: null },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "Reggane",
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 12.5, 10, 38.4, 35.5, 1.2, 22.0, 17.8,
        ],
      },
      {
        name: "Tallinn",
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 10.5, 39, -0.9,
        ],
        color: "red",
      },
      {
        name: "Tokyo",
        data: [
          5.2, 6.7, 10.5, 15.3, 19.8, 22.0, 26.4, 27.1, 23.3, 18.5, 13.0, 8.6,
        ],
        color: "#f2ff00ff", // màu xanh dương hoặc bạn chọn màu khác
      },
    ],
    credits: { enabled: false },
    legend: {
      itemStyle: { color: "white" },
    },
  });
  Highcharts.chart("box7", {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      spacingBottom: 10,
    },
    title: {
      text: "Biểu đồ 5",
      style: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: { style: { color: "white" } },
      lineColor: "#ffffff",
    },
    yAxis: {
      title: { text: null },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "Cairo",
        data: [
          14.2, 15.8, 18.6, 22.1, 26.7, 29.5, 30.4, 30.1, 28.3, 24.5, 19.2,
          15.3,
        ],
        color: "#f39c12", // cam
      },
      {
        name: "Helsinki",
        data: [
          -5.4, -4.1, 0.6, 6.8, 12.4, 16.9, 19.3, 17.8, 12.1, 6.0, 1.2, -2.7,
        ],
        color: "#3498db", // xanh
      },
      {
        name: "Jakarta",
        data: [
          26.1, 26.4, 26.8, 27.1, 27.3, 27.4, 27.1, 27.0, 26.8, 26.7, 26.5,
          26.2,
        ],
        color: "#e74c3c", // đỏ
      },
    ],
    credits: { enabled: false },
    legend: {
      itemStyle: { color: "white" },
    },
  });
}
initChart();
