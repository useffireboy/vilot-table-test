import React, { useEffect } from "react";
import { data } from "./data"
import * as VTable from '@visactor/vtable';
const CONTAINER_ID = "test-pivot-table-container";
const PivotTableComponent = () => {
    const tableRef = React.useRef<any>(null);

    useEffect(() => {
        if (tableRef.current) {
            return
        }

        const option = {
            rows: ['Order Year', 'Region', 'Segment', 'Ship Mode'],
            columns: ['Category', 'Sub-Category'],
            indicators: [],
            parseCustomTreeToMatchRecords:true,
            enableDataAnalysis: true,
            indicatorTitle: '指标名称',
            // indicatorsAsCol: false,
            rowHierarchyType: 'grid-tree',
            // columnHierarchyType: 'grid-tree',
            corner: { titleOnDimension: 'row' },
            dataConfig: {
                totals: {
                    row: {
                        showGrandTotals: true,
                        showSubTotals: true,
                        subTotalsDimensions: ['Order Year', 'Region', 'Segment'],
                        grandTotalLabel: '行总计',
                        subTotalLabel: '小计'
                    },
                    column: {
                        showGrandTotals: true,
                        showSubTotals: true,
                        subTotalsDimensions: ['Category'],
                        grandTotalLabel: '列总计',
                        subTotalLabel: '小计'
                    }
                }
            },
            records: data,
            widthMode: 'autoWidth' // 宽度模式：standard 标准模式； adaptive 自动填满容器
        };

        tableRef.current = new VTable.PivotTable(document.getElementById(CONTAINER_ID)!, option);

        return () => {

        }
    }, [])


    return (
        <div style={{ height: "80vh" }} id="test-pivot-table-container"></div>
    )
}

export default PivotTableComponent;


