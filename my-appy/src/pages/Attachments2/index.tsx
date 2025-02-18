import { TYPE_ENUM } from '@/constants';
import services from '@/services/demo';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Checkbox, Radio, RadioChangeEvent } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const { queryAttachList } = services.UserController;

const CheckboxGroup = Checkbox.Group;

const getColumns: any = () => {
  const columns = [
    {
      title: 'ID 流水ID',
      dataIndex: 'serialId',
      hideInSearch: true,
    },
    {
      title: 'Serial Number流水号',
      dataIndex: 'serialName',
    },
    {
      title: 'File Name 文件名称',
      dataIndex: 'filename',
      hideInSearch: true,
    },
    {
      title: 'Name 上传人',
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: 'Date 上传时间',
      dataIndex: 'date',
      hideInSearch: true,
    },
    {
      title: 'Type 流程类型',
      dataIndex: 'type',
      valueEnum: TYPE_ENUM,
    },
  ]
  return columns;
}

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);
  const [ids, setIds] = useState<any>([]);
  const [idSelected, setIdSelected] = useState();
  const [dataSource, setDateSource] = useState<API.UserInfo[]>([]);
  const [checkedList, setCheckedList] = useState<any[]>([]);

  // const onChange = (e: RadioChangeEvent) => {
  //   console.log('radio checked', e.target.value);
  //   setIdSelected(e.target.value);
  // };

  const onChange = (list: any[]) => {
    setCheckedList(list);
  };

  const fetchData = async () => {
    try {
      const res = await queryAttachList({});
      const setList = new Set();
      let tempId: any = null;
      res?.data?.list?.forEach((item: any) => {
        if (!tempId) {
          tempId = item.serialId;
        }
        setList.add(item.serialId);
      });
      if (setList.size > 0 && tempId) {
        setIdSelected(tempId);
      }
      const ids = Array.from(setList);
      setCheckedList(ids);
      setIds(ids);
      setDateSource(res?.data?.list ?? []);
    } catch (error) {
    }
  }

  const tableSourceMemo = useMemo(() => {
    return dataSource.filter((item: any) => {
      return item.serialId === idSelected;
    })
  }, [idSelected, dataSource])

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <PageContainer
      header={{
        title: "Serial"
      }}
    >
      <ProTable<API.UserInfo>
        onSubmit={(params) => {
          console.log('[ onSubmit ]-117-「index」', params);
        }}
        onReset={() => {
          console.log('[ onReset ]-117-「index」');
        }}
        headerTitle={
          ids?.length ? (
            <div>
              <label style={{ marginRight: 10 }}>流水ID: </label>
              {/* <Radio.Group onChange={onChange} value={idSelected}>
                {
                  ids.map((item: string) => {
                    return <Radio key={item} value={item}>{item}</Radio>
                  })
                }
              </Radio.Group> */}
               <CheckboxGroup options={ids} value={checkedList} onChange={onChange} />
            </div>) : null
        }
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: "auto",
          collapsed: false,
          collapseRender() {
            return null;
          },
        }}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            disabled={selectedRowsState.length === 0}
          >
            批量下载
          </Button>,
        ]}
        dataSource={tableSourceMemo}
        columns={getColumns()}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
    </PageContainer>
  );
};

export default TableList;
