import services from '@/services/demo';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button, message, Popconfirm, Popover } from 'antd';
import React, { useRef, useState } from 'react';
const { queryUserList } = services.UserController;
import { TYPE_ENUM } from "@/constants"

const getColumns: any = () => {
  const columns = [
    {
      title: 'ID 流水ID',
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: 'Serial Number流水号',
      dataIndex: 'name',
      render: (value: any, record: any) => {
        return <div><Link to={`/serial/attachments/${record.id}`}>{value}</Link></div>
      }
    },
    {
      title: 'Application 申请人',
      dataIndex: 'application',
      hideInSearch: true,
    },
    {
      title: 'Approver 当前审批人',
      dataIndex: 'approver',
      hideInSearch: true,
    },
    {
      title: 'Date 申请日期',
      dataIndex: 'date',
      hideInSearch: true,
    },
    {
      title: 'Type 流程类型',
      dataIndex: 'type',
      valueEnum: TYPE_ENUM,
    },
    {
      title: 'Amount/Time 金额/时间',
      dataIndex: 'amount',
      hideInSearch: true,
    },
    {
      title: 'Status 状态',
      dataIndex: 'status',
      hideInSearch: true,
    },
  ]
  return columns;
}

const TableList: React.FC<unknown> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);

  const confirm=()=>{
    console.log("confirm")
  }

  return (
    <PageContainer
      header={{
        title: "Serial"
      }}
    >
      <ProTable<API.UserInfo>
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: "auto",
        }}
        toolBarRender={() => [
          <Popconfirm
            title="确认批量下载选中流水号下的所有附件吗?"
            onConfirm={confirm}
            okText="确认"
            cancelText="取消"
            disabled={selectedRowsState.length === 0}
          >
            <Button
              key="1"
              type="primary"
              disabled={selectedRowsState.length === 0}
            >
              批量下载
            </Button>
          </Popconfirm>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryUserList({
            ...params,
            // FIXME: remove @ts-ignore
            // @ts-ignore
            sorter,
            filter,
          });
          return {
            data: data?.list || [],
            success,
          };
        }}
        columns={getColumns()}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
    </PageContainer>
  );
};

export default TableList;
