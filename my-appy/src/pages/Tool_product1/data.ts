export interface INode {
  id: number;
  name: string,
  badge: string,
  type: string,
  x: number,
  y: number
}

export interface IEdge {
  id: string;
  source: number,
  target: number,
  index: number,
  description:string
  isxu?:boolean
}


export const dataInfo: { nodes: INode[], edges: IEdge[] } = {
  nodes: [
    {
      id: 1,
      name: "SBS",
      badge: 'CN',
      type: '1',
      x: 30,
      y: 300,
    },
    {
      id: 2,
      name: "EasyTrip",
      badge: 'CN',
      type: '2',
      x: 200,
      y: 300,
    },
    // {
    //   id: 3,
    //   name: "Employee",
    //   badge: 'CN',
    //   type: '1',
    //   x: 200,
    //   y: 150,
    // },
    {
      id: 4,
      name: "concur",
      badge: 'US',
      type: '2',
      x: 450,
      y: 300,
    },
    // {
    //   id: 5,
    //   name: "Tibco Middleware",
    //   badge: 'US',
    //   type: '1',
    //   x: 400,
    //   y: 150,
    // },
    // {
    //   id: 6,
    //   name: "Workday",
    //   badge: 'IE',
    //   type: '2',
    //   x: 550,
    //   y: 50,
    // },
    // {
    //   id: 7,
    //   name: "IICS Middleware",
    //   badge: 'US',
    //   type: '1',
    //   x: 750,
    //   y: 150,
    // },
    // {
    //   id: 8,
    //   name: "SPA Unity",
    //   badge: 'SG',
    //   type: '1',
    //   x: 700,
    //   y: 300,
    // },
    // {
    //   id: 9,
    //   name: "eTrack",
    //   badge: 'CN',
    //   type: '1',
    //   x: 200,
    //   y: 500,
    // },
    // {
    //   id: 10,
    //   name: "Cooperative Bank",
    //   badge: 'CN',
    //   type: '3',
    //   x: 200,
    //   y: 650,
    // },
  ],
  edges: [
    {
      id: "1-2",
      source: 1,
      target: 2,
      index: 1,
      description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
      isxu:true,
    },
    // {
    //   id: "3-4",
    //   source: 3,
    //   target: 4,
    //   index: 2,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    //   isxu:true
    // },
    {
      id: "2-4",
      source: 2,
      target: 4,
      index: 3,
      description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    },
    // {
    //   id: "5-4",
    //   source: 5,
    //   target: 4,
    //   index: 4,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "6-5",
    //   source: 6,
    //   target: 5,
    //   index: 5,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "6-7",
    //   source: 6,
    //   target: 7,
    //   index: 6,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "7-8",
    //   source: 7,
    //   target: 8,
    //   index: 7,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "4-8",
    //   source: 4,
    //   target: 8,
    //   index: 8,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "4-9",
    //   source: 4,
    //   target: 9,
    //   index: 9,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "8-9",
    //   source: 8,
    //   target: 9,
    //   index: 10,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
    // {
    //   id: "8-10",
    //   source: 8,
    //   target: 10,
    //   index: 11,
    //   description:"ashdkhaksjhdk=>daksndkaks=>dhaskhdjkashkdhahdhkash,dada,dafafsdds,dasdasdadasdas.",
    // },
  ]

}