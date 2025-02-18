import { Tabs, TabsProps } from 'antd';
import DataTable from "./dataTable/index";
import TreeDataTable from "./treeDataTable/index";
import TreeDataTable2 from "./treeDataTable2/index";
import TreeDataTable3 from "./treeDataTable3/index";
import TreeDataTable4 from "./treeDataTable4/index";

const PivotTableComponent = () => {

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '0',
            label: 'dataTable',
            children: <DataTable></DataTable>
        },
        {
            key: '1',
            label: 'treeDataTable',
            children: <TreeDataTable></TreeDataTable>
        },
        {
            key: '2',
            label: 'treeDataTable2',
            children: <TreeDataTable2></TreeDataTable2>
        },
        {
            key: '3',
            label: 'treeDataTable3',
            children: <TreeDataTable3></TreeDataTable3>
        },
        {
            key: '4',
            label: 'treeDataTable4',
            children: <TreeDataTable4></TreeDataTable4>
        },
    ];

    return (
        <Tabs defaultActiveKey="4" items={items} onChange={onChange} />
    )
}

export default PivotTableComponent;