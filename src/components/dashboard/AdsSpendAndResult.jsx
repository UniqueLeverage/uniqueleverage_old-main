import {useState} from "react";
import ReactApexChart from "react-apexcharts";

const AdsSpendAndResult = () => {
    const [series, setSeries] = useState([
        {name: 'Ad Spend', data: [4040, 4002, 8098, 6000, 9024, 4503, 9756]},
        {name: 'Result', data: [2615, 2594, 6551, 4354, 5745, 3264, 5756]}
    ]);
    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            zoom: {enabled: false},
            toolbar: {show: false},
        },
        grid: {
            show: false,
        },
        dataLabels: {enabled: false},
        colors: ["#488fe9", "#84b1ae"],
        xaxis: {
            categories: ["Sept 20", "Sept 21", "Sept 22", "Sept 23", "Sept 24", "Sept 25", "Sept 26"],
            labels: {
                style: {
                    colors: "#8d9093",
                    fontSize: '13px',
                }
            },
            axisBorder: {show: false},
            axisTicks: {show: false},
        },
        stroke: {width: 2, colors: ['#fff']},
        legend: {
            show: false
        },
        yaxis: {
            labels: {
                formatter: val => {
                    if (val >= 1000) {
                        return `$${(val / 1000).toFixed(0)}K`;
                    }
                    return `$${val}`;
                },
                style: {
                    colors: "#8d9093",
                    fontSize: '13px',
                },
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        fill: {opacity: 1},
        tooltip: {
            y: {
                formatter: val => {
                    if (val >= 1000) {
                        return `$${(val / 1000).toFixed(1)}K`;
                    }
                    return `$${val}`;
                }
            }
        },
    });

    return (
        <div className="chart-holder bg-white rounded-3 bg-white border">
            <div className="d-flex align-items-center justify-content-between border-bottom py-2 px-3">
                <div className="fw-bold-600 black-text-color">
                    Ads Spend vs Result
                </div>
                <div className="form-group">
                    <select
                        className="form-select form-select-sm small py-2 fw-bold-500 dark-gray-text-color"
                        id="filterBy"
                    >
                        <option value="days">Last 7 days</option>
                        <option value="months">Last month</option>
                        <option value="years">Last year</option>
                    </select>
                </div>
            </div>
            <div className="">
                <div id="chart">
                    <ReactApexChart options={options} series={series} type="bar" height={230}/>
                </div>
                <div id="html-dist"></div>
            </div>
        </div>
    );
};

export default AdsSpendAndResult;