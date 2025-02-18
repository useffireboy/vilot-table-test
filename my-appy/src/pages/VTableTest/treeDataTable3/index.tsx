import React, { useEffect } from "react";
import { data } from "./data"
import * as VTable from '@visactor/vtable';
const CONTAINER_ID: string = "test-pivot-table-container-3";
const PivotTableComponent = () => {
    const tableRef = React.useRef<any>(null);

    useEffect(() => {
        if (tableRef.current) {
            return
        }

        const option: any = {
            records: data,
            rowTree: [
                {
                    dimensionKey: 'Catogery',
                    value: 'Furniture',
                    hierarchyState: 'collapse',
                    children: [
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Furnishings'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Tables'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Bookcases',
                            hierarchyState: 'collapse'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Chairs',
                            hierarchyState: 'collapse'
                        }
                    ]
                },
                {
                    dimensionKey: 'Catogery',
                    value: 'Furniture共计',
                },
                {
                    dimensionKey: 'Catogery',
                    value: 'Office Supplies',
                    children: [
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Envelopes'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Fasteners'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Labels'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Appliances'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Art'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Binders'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Paper'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Storage'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Supplies'
                        }
                    ]
                },
                {
                    dimensionKey: 'Catogery',
                    value: 'Office Supplies共计',
                },
                {
                    dimensionKey: 'Catogery',
                    value: 'Technology',
                    children: [
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Accessories'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Copiers'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Machines'
                        },
                        {
                            dimensionKey: 'Sub-Catogery',
                            value: 'Phones'
                        }
                    ]
                },
                {
                    dimensionKey: 'Catogery',
                    value: 'Technology共计',
                },
            ],
            columnTree: [
                {
                    dimensionKey: '230627170530059',
                    value: 'West',
                    children: [
                        {
                            dimensionKey: '230627170530056',
                            value: 'Sales',
                            indicatorKey: '230627170530019'
                        },
                        {
                            dimensionKey: '230627170530056',
                            value: 'Profit',
                            indicatorKey: '230627170530022'
                        },
                        {
                            dimensionKey: '230627170530056',
                            value: 'Profit2',
                            indicatorKey: '230627170530023'
                        }
                    ]
                },
                {
                    dimensionKey: '230627170530059',
                    value: 'South',
                    children: [
                        {
                            dimensionKey: '230627170530056',
                            value: 'Sales',
                            indicatorKey: '230627170530019'
                        },
                        {
                            dimensionKey: '230627170530056',
                            value: 'Profit',
                            indicatorKey: '230627170530022'
                        }
                    ]
                },
                {
                    dimensionKey: '230627170530059',
                    value: 'Central',
                    children: [
                        {
                            dimensionKey: '230627170530056',
                            value: 'Sales',
                            indicatorKey: '230627170530019'
                        },
                        {
                            dimensionKey: '230627170530056',
                            value: 'Profit',
                            indicatorKey: '230627170530022'
                        }
                    ]
                },
                {
                    dimensionKey: '230627170530059',
                    value: 'East',
                    children: [
                        {
                            dimensionKey: '230627170530056',
                            value: 'Sales',
                            indicatorKey: '230627170530019'
                        },
                        {
                            dimensionKey: '230627170530056',
                            value: 'Profit',
                            indicatorKey: '230627170530022'
                        }
                    ]
                }
            ],
            rows: [
                {
                    dimensionKey: 'Catogery',
                    title: 'Catogery',
                    width: 'auto'
                },
                //   {
                //     dimensionKey: 'Sub-Catogery',
                //     title: 'Sub-Catogery',
                //     width: 'auto'
                //   }
            ],
            columns: [
                {
                    dimensionKey: '230627170530059',
                    title: 'Region',
                    headerStyle: {
                        textStick: true
                    },
                    width: 'auto'
                }
            ],
            indicators: [
                {
                    indicatorKey: '230627170530019',
                    title: 'Sales',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                        fontWeight: 'normal'
                    },
                    format: value => {
                        if (value) return '$' + Number(value).toFixed(2);
                        return '';
                    },
                    style: {
                        padding: [16, 28, 16, 28],
                        color(args) {
                            if (args.dataValue >= 0) return 'black';
                            return 'red';
                        }
                    }
                },
                {
                    indicatorKey: '230627170530022',
                    title: 'Profit',
                    width: 'auto',
                    showSort: false,
                    headerStyle: {
                        fontWeight: 'normal'
                    },
                    format: value => {
                        if (value) return '$' + Number(value).toFixed(2);
                        return '';
                    },
                    style: {
                        padding: [16, 28, 16, 28],
                        color(args) {
                            if (args.dataValue >= 0) return 'black';
                            return 'red';
                        }
                    }
                }
            ],
            rowHierarchyType: 'tree',
            corner: {
                titleOnDimension: 'row',
                headerStyle: {
                    textStick: true
                }
            },
            widthMode: 'standard',
            rowHierarchyIndent: 20,
            rowHierarchyTextStartAlignment: true
        };

        tableRef.current = new VTable.PivotTable(document.getElementById(CONTAINER_ID)!, option);

        return () => {

        }
    }, [])


    return (
        <div style={{ height: "80vh" }} id={CONTAINER_ID}></div>
    )
}

export default PivotTableComponent;


