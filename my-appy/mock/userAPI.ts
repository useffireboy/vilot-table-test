const users = [
  { id: 1234, name: 'SP3324232322', application: 'Zhang Fei', approver: 'Zhang Fei', date: '2022/08/19', type: "SR", amount: '3000.00', status: 'Closed' },
  { id: 2234, name: 'SP3324232322', application: 'Zhang Fei', approver: 'Zhang Fei', date: '2022/08/19', type: "SR", amount: '3000.00', status: 'Closed' },
];

const users2 = [
  { id: "f-123", filename: 'SCI201703.pdf', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-234", filename: 'xxxx会议记录2.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-235", filename: 'xxxx会议记录3.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-236", filename: 'xxxx会议记录4.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-237", filename: 'xxxx会议记录5.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-238", filename: 'xxxx会议记录6.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-239", filename: 'xxxx会议记录7.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
  { id: "f-2310", filename: 'xxxx会议记录8.xlsx', name: 'Zhang Fei', date: '2022/08/19' },
];

const attachList: any = [];
for (let index = 0; index < 90; index++) {
  const serialId = parseInt(Math.random() * 1000 + "") % 2 === 0 ? 1234 : 2234;
  const fileName = parseInt(Math.random() * 1000 + "") % 2 === 0 ? `xxxx会议记录${index}.xlsx` : "SCI" + parseInt(Math.random() * 100000 + "") + ".pdf";
  attachList.push({
    id: `f-${index}`,
    serialId: serialId,
    serialName: 'SP3324232322',
    filename: fileName,
    name: 'Zhang Fei',
    date: '2022/08/19',
    type: "SR"
  });
}
export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryUserList2': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users2 },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/v1/queryAttachList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: attachList },
      errorCode: 0,
    });
  },
};
