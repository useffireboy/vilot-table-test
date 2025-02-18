import React, { useEffect, useState } from "react";
import * as ReactVTable from '@visactor/react-vtable';

const PivotTableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // import * as ReactVTable from '@visactor/react-vtable';
        fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/North_American_Superstore_Pivot_data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
        return () => {
        }
    }, [])


    return (
        <div style={{ height: "80vh" }}>
            <ReactVTable.PivotTable records={data}>
                <ReactVTable.PivotColumnHeaderTitle
                    title={true}
                    headerStyle={{
                        textStick: true
                    }}
                />
                <ReactVTable.PivotColumnDimension dimensionKey={'Category'} title={'Category'} width={'auto'} />
                <ReactVTable.PivotRowDimension
                    dimensionKey={'City'}
                    title={'City'}
                    drillUp={true}
                    width={'auto'}
                    headerStyle={{
                        textStick: true
                    }}
                />
                <ReactVTable.PivotIndicator
                    indicatorKey={'Quantity'}
                    title={'Quantity'}
                    width={'auto'}
                    headerStyle={{
                        fontWeight: 'normal'
                    }}
                    style={{
                        padding: [16, 28, 16, 28],
                        color(args) {
                            if (args.dataValue >= 0) return 'black';
                            return 'red';
                        }
                    }}
                />
                <ReactVTable.PivotIndicator
                    indicatorKey={'Sales'}
                    title={'Sales'}
                    width={'auto'}
                    headerStyle={{
                        fontWeight: 'normal'
                    }}
                    style={{
                        padding: [16, 28, 16, 28],
                        color(args) {
                            if (args.dataValue >= 0) return 'black';
                            return 'red';
                        }
                    }}
                />
                <ReactVTable.PivotIndicator
                    indicatorKey={'Profit'}
                    title={'Profit'}
                    width={'auto'}
                    headerStyle={{
                        fontWeight: 'normal'
                    }}
                    style={{
                        padding: [16, 28, 16, 28],
                        color(args) {
                            if (args.dataValue >= 0) return 'black';
                            return 'red';
                        }
                    }}
                />
                <ReactVTable.PivotCorner
                    titleOnDimension={'row'}
                    headerStyle={{
                        fontWeight: 'bold'
                    }}
                />
            </ReactVTable.PivotTable>
        </div>
    )
}

export default PivotTableComponent;