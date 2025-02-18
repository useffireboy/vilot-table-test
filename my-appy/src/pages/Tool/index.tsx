import { Graph, Cell } from '@antv/x6';
import ELK, { ElkNode, ElkEdge, ElkExtendedEdge } from 'elkjs'
import { Export } from '@antv/x6-plugin-export'
import { useEffect, useRef, useState } from 'react';
import { data2 } from "./data";
import { Button } from 'antd';

Graph.registerNode(
    'elk-node',
    {
        inherit: 'rect',
        attrs: {
            body: {
                fill: '#EFF4FF',
                stroke: '#5F95FF',
                strokeWidth: 1,
            },
            label: {
                refX: 0,
                refY: -4,
                textAnchor: 'start',
                textVerticalAnchor: 'bottom',
                fontSize: 10,
            },
        },
        ports: {
            groups: {
                port: {
                    position: {
                        name: 'absolute',
                    },
                    attrs: {
                        portBody: {
                            magnet: 'passive',
                            fill: '#5F95FF',
                            refWidth: '100%',
                            refHeight: '100%',
                        },
                    },
                    markup: [
                        {
                            tagName: 'rect',
                            selector: 'portBody',
                        },
                    ],
                },
            },
        },
    },
    true,
)

Graph.registerEdge(
    'elk-edge',
    {
        inherit: 'edge',
        attrs:{
            line: {
                stroke: '#A2B1C3',
                strokeWidth: 1,
                targetMarker: {
                    name: 'block',
                    width: 4,
                    height: 4,
                },
            },
            label:{
                fontSize: 10,
                fill:"red"
            }
        },
    },
    true,
)

interface Position {
    x: number
    y: number
}
let ad = 0;
const portIdToNodeIdMap: Record<string, string> = {}
const cells: Cell[] = []
const elk = new ELK()
const Tool = () => {
    const graphref = useRef<any>(null);
    const [src, setSrc] = useState()
    const addChildren = (children: ElkNode[], pos?: Position) => {
        const graph = graphref.current;
        children.forEach((child) => {
            const position = {
                x: (child.x || 0) + (pos ? pos.x : 0),
                y: (child.y || 0) + (pos ? pos.y : 0),
            }
            let label: string = ''
            if (typeof child.labels === 'string') {
                label = child.labels
            } else if (Array.isArray(child.labels) && child.labels[0]) {
                label = child.labels[0].text
            }
            const node = graph.createNode({
                shape: 'elk-node',
                id: child.id,
                position,
                label,
                size: {
                    width: child.width || 0,
                    height: child.height || 0,
                },
                ports: {
                    items: (child.ports || []).map((item) => {
                        portIdToNodeIdMap[item.id] = child.id
                        return {
                            id: item.id,
                            group: 'port',
                            args: {
                                x: item.x,
                                y: item.y,
                            },
                            size: {
                                width: item.width || 0,
                                height: item.height || 0,
                            },
                        }
                    }),
                },
            })

            cells.push(node)

            if (child.children) {
                addChildren(child.children, position)
            }

            if (child.edges) {
                addEdges(child.edges, position)
            }
        })
    }

    const addEdges = (edges: ElkEdge[], pos?: Position) => {
        const graph = graphref.current;
        edges.forEach((edge: ElkExtendedEdge) => {
            const { bendPoints = [] } = edge.sections[0]

            if (pos) {
                bendPoints.map((bendPoint: Position) => {
                    bendPoint.x += pos.x
                    bendPoint.y += pos.y
                })
            }

            const sourcePortId = edge.sources[0]
            const targetPortId = edge.targets[0]
            const sourceNodeId = portIdToNodeIdMap[sourcePortId]
            const targetNodeId = portIdToNodeIdMap[targetPortId]

            cells.push(
                graph.createEdge({
                    shape: 'elk-edge',
                    source: {
                        cell: sourceNodeId,
                        port: sourcePortId,
                    },
                    target: {
                        cell: targetNodeId,
                        port: targetPortId,
                    },
                    vertices: bendPoints,
                }),
            )
        })
    }

    const renderelk = (data: any) => {
        const graph = graphref.current;
        elk.layout(data,{
            layoutOptions: {
                'nodeDistance': "200", // 设置节点间的最小距离
                'spacing': "200", // 设置节点间的间隔
              },
        }).then((res) => {
            addChildren(res.children || [])
            addEdges(res.edges || [])
            graph.resetCells(cells)
            graph.zoomToFit({
                padding: 20,
                maxScale: 1,
            })
        })
    }

    useEffect(() => {
        const graph = new Graph({
            height: 500,
            container: document.getElementById('container')!,
            interacting: false,
        })
        graph.use(new Export());
        graphref.current = graph;
        graph.on('render:done', () => {
            if (window.renderERDiagramCallback) {
                window.renderERDiagramCallback();
            }
        });
        // renderelk(data);
    }, [])

    useEffect(() => {
        // 全局函数渲染ER图
        window.renderERDiagram = (data: any) => {
            const graph = graphref.current;
            graph.clearCells();
            renderelk(data);
            // data.nodes.forEach(node => {
            //     graph.addNode(node);
            // });

            // data.edges.forEach(edge => {
            //     graph.addEdge(edge);
            // });
        };
        // 使用 AntV X6 的 exportPNG 方法将图表导出为 PNG 并转换为 Base64
        window.getERDiagramAsBase64 = () => {
            return new Promise((resolve) => {
                window.renderERDiagramCallback = () => {
                    const graph = graphref.current;
                    if (!graph) {
                        return resolve(null);
                    }

                    graph.toPNG((dataUri) => {
                        console.log('[ dataUri ]-223-「index」', dataUri);
                        setSrc(dataUri);
                        resolve(dataUri);
                    });
                };
            });
            // const graph = graphref.current;
            // graph.toPNG((dataUri: string) => {
            //     console.log('[ dataUri ]-211-「index」', dataUri);
            //     setSrc(dataUri);
            //     callback(dataUri);
            //     // const reader = new FileReader();
            //     // reader.onloadend = () => {
            //     //     const base64data = reader.result;
            //     // };
            // });
        };
        setTimeout(() => {
            console.log("settimeout", ++ad);
            window.renderERDiagram(data2);
        }, 100);
        window.getERDiagramAsBase64();
    }, [])

    const downLoad = () => {
        window.getERDiagramAsBase64((base64Imag: string) => {
            console.log("生成图片啦", base64Imag)
        })
    }

    return (
        <div style={{ height: "100%", width: '100%' }}>
            <Button onClick={downLoad}>下载</Button>
            <div style={{ height: 600, width: "100%" }} id="container"></div>
        </div>
    )
}
export default Tool;