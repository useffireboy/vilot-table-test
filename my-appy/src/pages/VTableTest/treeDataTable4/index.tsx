import React, { useEffect } from "react";
import { data } from "./data"
import * as VTable from '@visactor/vtable';
const CONTAINER_ID: string = "test-pivot-table-container-04";
const PivotTableComponent = () => {
    const tableRef = React.useRef<any>(null);

    useEffect(() => {
        if (tableRef.current) {
            return
        }
        const option: any = {
            rows: ['gbu', 'bu'],
            columns: ['category', 'sub_category'],
            indicators: ['Advisory Board', 'Collaboration Program',"Consulting Services"],
            enableDataAnalysis: true,
            indicatorTitle: '指标名称',
            indicatorsAsCol: true,
            rowHierarchyType: 'grid-tree',
            corner: { titleOnDimension: 'row' },
            rowExpandLevel:2,
            dataConfig: {
                // totals: {
                //     row: {
                //         showGrandTotals: false,
                //         showSubTotals: true,
                //         subTotalsDimensions: ['gbu'],
                //         grandTotalLabel: '行总计',
                //         subTotalLabel: '行小计'
                //     },
                //     column: {
                //         showGrandTotals: true,
                //         showSubTotals: true,
                //         subTotalsDimensions: ['Category'],
                //         grandTotalLabel: '列总计',
                //         subTotalLabel: '小计'
                //     }
                // }
            },
            records: data,
            widthMode: 'autoWidth' // 宽度模式：standard 标准模式； adaptive 自动填满容器
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