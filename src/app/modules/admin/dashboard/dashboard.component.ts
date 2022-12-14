import { Component, ViewChild } from '@angular/core';
import { DiffMovimentsPerSleepService } from 'app/service/diff-moviments-per-sleep.service';
import { HoursOfSleepService } from 'app/service/hours-of-slee.service';
import { ApexOptions } from "ng-apexcharts";

import {
    ApexAxisChartSeries,
    ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    tooltip: any;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
    @ViewChild("chart") chart: ChartComponent;

    public chartOptions: Partial<ApexOptions>;

    constructor(
        private _diffMovimentsPerSleepService: DiffMovimentsPerSleepService,
        private _hoursOfSleepService: HoursOfSleepService
    ) {
        this.chartOptions = {
            chart: {
                animations: {
                    speed: 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor: '#fff',
                width: window.innerWidth < 1000 ? '1000px' : '100%',
                height: '340px',
                type: 'area',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#008FFB', '#FF6A6A', '#33085c'],
            series: [
                {
                    name: "Session Duration",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                {
                    name: "Page Views",
                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                },
                {
                    name: "Quantidade de Sono Ideal",
                    data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
                }
            ],
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.75
                    }
                }
            },
            fill: {
                opacity: 1,
                colors: ['#008FFB', '#FF6A6A', '#33085c'],
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 5,
                curve: "straight",
                dashArray: [0, 8, 5]
            },
            title: {
                text: "MorpCubile Dashboard",
                align: "left"
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (
                        val +
                        " - <strong>" +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        "</strong>"
                    );
                },
                markers: {
                    fillColors: ['#008FFB', '#FF6A6A', '#33085c'],
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                labels: {
                    trim: false,
                    style: {
                        colors: '#CBD5E1',
                        fontWeight: 'bold'
                    }
                },
                categories: [
                    "01:00 AM",
                    "02:00 AM",
                    "03:00 AM",
                    "04:00 AM",
                    "05:00 AM",
                    "06:00 AM",
                    "07:00 AM",
                    "08:00 AM",
                    "09:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 AM"
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetX: -10,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)";
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session";
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ],
                fillSeriesColor: false,
                followCursor: true,
                theme: 'dark',
            },
            grid: {
                show: true,
                borderColor: "#fff",
                padding: {
                    top: 10,
                    bottom: -10,
                    left: 25,
                    right: 10
                },
                position: 'back',
                xaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };
    }
}
