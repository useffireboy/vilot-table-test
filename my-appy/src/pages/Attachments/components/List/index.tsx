import services from '@/services/demo';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button} from 'antd';
import React, { useRef, useState } from 'react';
const { queryUserList2 } = services.UserController;

const getColumns: any = () => {
  const columns = [
    {
      title: 'File Name 文件名称',
      dataIndex: 'filename',
    },
    {
      title: 'Name 上传人',
      dataIndex: 'name',
    },
    {
      title: 'Date 上传时间',
      dataIndex: 'date',
      hideInSearch:true,
    },
  ]
  return columns;
}

const TableList: React.FC<unknown> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);

  return (
    <PageContainer
      header={{
        title: null
      }}
    >
      <ProTable<API.UserInfo>
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: "auto",
        }}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            disabled={selectedRowsState.length === 0}
            onClick={() => handleModalVisible(true)}
          >
            批量下载
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryUserList2({
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
