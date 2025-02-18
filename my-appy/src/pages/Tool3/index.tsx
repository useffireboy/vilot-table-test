import { Graph, Dom } from '@antv/x6';
import { useEffect, useRef, useState } from 'react';
import { dataJson, initWidth, initHeight, boxWidth } from "./json";
import Logo from "@/assets/antv.png";
import { Button } from 'antd';

const myWindow = window as any;

const Colors: Record<string, string> = {
    '1': '#7a00e6',
    '2': '#4096ff',
    '3': '#389e0d',
}

const Colors2: Record<string, string> = {
    "CN": '#7a00e6',
    "IE": '#4096ff',
    "SG": '#389e0d',
    "MY": '#389e0d',
    "Global": '#4096ff',
}

Graph.registerNode(
    'lane',
    {
        inherit: 'rect',
        markup: [
            {
                tagName: 'rect',
                selector: 'body',
            },
            {
                tagName: 'rect',
                selector: 'name-rect',
            },
            {
                tagName: 'text',
                selector: 'name-text',
            },
        ],
        attrs: {
            body: {
                fill: '#FFF',
                stroke: '#7a00e6',
                strokeWidth: 1,
            },
            'name-rect': {
                width: 200,
                height: 30,
                fill: '#7a00e6',
                stroke: '#7a00e6',
                strokeWidth: 1,
                x: -1,
            },
            'name-text': {
                ref: 'name-rect',
                refY: 0.5,
                refX: 0.5,
                textAnchor: 'middle',
                fontWeight: 'bold',
                fill: '#fff',
                fontSize: 12,
            },
        },
    },
    true,
)

Graph.registerNode(
    'lane',
    {
        inherit: 'rect',
        markup: [
            {
                tagName: 'rect',
                selector: 'body',
            },
            {
                tagName: 'rect',
                selector: 'name-rect',
            },
            {
                tagName: 'text',
                selector: 'name-text',
            },
        ],
        attrs: {
            body: {
                fill: '#FFF',
                stroke: '#5F95FF',
                strokeWidth: 1,
            },
            'name-rect': {
                width: 200,
                height: 30,
                fill: '#5F95FF',
                stroke: '#fff',
                strokeWidth: 1,
                x: -1,
            },
            'name-text': {
                ref: 'name-rect',
                refY: 0.5,
                refX: 0.5,
                textAnchor: 'middle',
                fontWeight: 'bold',
                fill: '#fff',
                fontSize: 12,
            },
        },
    },
    true,
)


Graph.registerNode(
    'custom-node',
    {
        inherit: 'rect', // 继承于 rect 节点
        width: 100,
        height: 100,
        markup: [
            {
                tagName: 'rect', // 标签名称
                selector: 'body', // 选择器
            },
            {
                tagName: 'image',
                selector: 'img',
            },
            {
                tagName: 'text',
                selector: 'label',
            },
            {
                tagName: 'rect',
                selector: 'badge',
            },
            {
                tagName: 'text',
                selector: 'badgeText',
            },
        ],
        attrs: {
            body: {
                stroke: '#8f8f8f',
                strokeWidth: 2,
                fill: '#fff',
            },
            img: {
                ref: "body",
                'xlink:href': Logo,
                width: 30,
                height: 30,
                refX: "33%",
                refY: "20%"
            },
            label: {
                ref: "body",
                refX: "50%",
                refY: "70%",
                contenteditable: 'true',
            },
            badge: {
                width: 24,
                height: 18,
                stroke: '#8f8f8f',
                strokeWidth: 1,
                fill: '#fff',
            },
            badgeText: {
                ref: "badge",
                fill: '#ffffff',
            }
        },
        // ports: {
        //     groups: {
        //         top: {
        //             position: { name: 'top' },
        //             attrs: {
        //                 circle: {
        //                     r: 3,
        //                     magnet: true,
        //                     stroke: '#31d0c6',
        //                     fill: '#fff',
        //                     strokeWidth: 2,
        //                 },
        //             },
        //         },
        //         right: {
        //             position: { name: 'right' },
        //             attrs: {
        //                 circle: {
        //                     r: 3,
        //                     magnet: true,
        //                     stroke: '#31d0c6',
        //                     fill: '#fff',
        //                     strokeWidth: 2,
        //                 },
        //             },
        //         },
        //         bottom: {
        //             position: { name: 'bottom' },
        //             attrs: {
        //                 circle: {
        //                     r: 3,
        //                     magnet: true,
        //                     stroke: '#31d0c6',
        //                     fill: '#fff',
        //                     strokeWidth: 2,
        //                 },
        //             },
        //         },
        //         left: {
        //             position: { name: 'left' },
        //             attrs: {
        //                 circle: {
        //                     r: 3,
        //                     magnet: true,
        //                     stroke: '#31d0c6',
        //                     fill: '#fff',
        //                     strokeWidth: 2,
        //                 },
        //             },
        //         },
        //     },
        //     items: [
        //         {
        //             id: 'top1',
        //             group: 'top',
        //         },
        //         {
        //             id: 'top2',
        //             group: 'top',
        //         },
        //         {
        //             id: 'top3',
        //             group: 'top',
        //         },
        //         {
        //             id: 'right1',
        //             group: 'right',
        //         },
        //         {
        //             id: 'right2',
        //             group: 'right',
        //         },
        //         {
        //             id: 'right3',
        //             group: 'right',
        //         },
        //         {
        //             id: 'bottom1',
        //             group: 'bottom',
        //         },
        //         {
        //             id: 'bottom2',
        //             group: 'bottom',
        //         },
        //         {
        //             id: 'bottom3',
        //             group: 'bottom',
        //         },
        //         {
        //             id: 'left1',
        //             group: 'left',
        //         },
        //         {
        //             id: 'left2',
        //             group: 'left',
        //         },
        //         {
        //             id: 'left3',
        //             group: 'left',
        //         },
        //     ],
        // },
        // tools: [
        //     {
        //         name: 'node-editor',
        //     }
        // ]
    },
    true,
)

Graph.registerEdge(
    'custom-edge-label',
    {
        inherit: 'edge',
        attrs: {
            line: {
                stroke: '#7a00e6',
            },
        },
        defaultLabel: {
            markup: [
                {
                    tagName: 'ellipse',
                    selector: 'body',
                },
                {
                    tagName: 'text',
                    selector: 'label',
                },
            ],
            attrs: {
                body: {
                    fill: '#ffffff',
                    stroke: '#000000',
                    strokeWidth: 2,
                    rx: 16,
                    ry: 16,
                },
                label: {
                    fill: '#000',
                    fontSize: 16,
                    textAnchor: 'middle',
                    textVerticalAnchor: 'middle',
                    pointerEvents: 'none',
                },
            },
            position: {
                distance: 0.3,
            },
        },
    },
    true,
)


const Tool = () => {
    const graphRef = useRef<any>(null);
    const [data2, setData] = useState<any>()
    const isScanRef = useRef<boolean>(false);

    const createNode = (item: any) => {
        const graph = graphRef.current;
        if (item.shape === "lane") {
            return graph.createNode(item);
        }
        return graph.createNode({
            id: item.id,
            shape: 'custom-node',
            label: Dom.breakText(item.name, { width: 100, height: 50 }, {}, { ellipsis: "..." }),
            attrs: {
                badge: {
                    fill: Colors2[item.location],
                },
                badgeText: {
                    text: item.location,
                },
                body: {
                    stroke: Colors2[item.location],
                }
            },
            position: {
                x: item.position.x,
                y: item.position.y,
            }
        })
    }

    const createEdge = (item: any) => {
        const graph = graphRef.current;
        const edge = graph.createEdge({
            id: item.id,
            shape: 'custom-edge-label',
            source: item.source_id,
            target: item.target_id,
            label: item.info_num + "",
            attrs: {
                line: item.transmitted_type === "Manual" ? {
                    strokeDasharray: 5,
                } : {},
            }
        })
        return edge;
    }

    const getDirection = (source: any, target: any) => {
        const { x: sourceX, y: sourceY } = source.position;
        const { x: targetX, y: targetY } = target.position;

        let directionX = '';
        let directionY = '';
        let direction1 = '';
        let direction2 = '';
        let preferredDirection = [];

        // 水平方向
        if (targetX >= sourceX) {
            directionX = 'right';
            direction1 = "left"
        } else if (targetX < sourceX) {
            directionX = 'left';
            direction1 = "right"
        }

        // 垂直方向
        if (targetY >= sourceY) {
            directionY = 'bottom';
            direction2 = 'top';
        } else if (targetY < sourceY) {
            directionY = 'top';
            direction2 = 'bottom';
        }

        // 选择最合适的连线方向
        if (Math.abs(targetX - sourceX) >= Math.abs(targetY - sourceY)) {
            // 水平方向距离更大
            if (directionX === 'right') {
                preferredDirection.push('right');
            } else {
                preferredDirection.push('left');
            }
            preferredDirection.push(directionY);
        } else {
            // 垂直方向距离更大
            if (directionY === 'bottom') {
                preferredDirection.push('bottom');
            } else {
                preferredDirection.push('top');
            }
            preferredDirection.push(directionX);
        }
        preferredDirection.push(direction1, direction2);
        return {
            preferredDirection,
        };
    }


    const buildData = (_data: any) => {
        const { nodes, edges } = _data;
        const nodeMap = new Map();
        const everyNodePortMap = new Map();
        nodes.forEach((node: any) => {
            nodeMap.set(node.id, node);
        });
        const edgeMap = new Map();
        const sourceIdToTargetIdMap = new Map();
        edges.forEach((edge: any) => {
            sourceIdToTargetIdMap.set(edge.source_id, edge.target_id);
            edgeMap.set(edge.id, edge);
        });
        edges.forEach((edge: any) => {
            const sourceNode = nodeMap.get(edge.source_id);
            const targetNode = nodeMap.get(edge.target_id);
            const { preferredDirection } = getDirection(sourceNode, targetNode);
            let sourcePort = "";
            out:
            for (let i = 0; i < preferredDirection.length; i++) {
                for (let k = 1; k <= 3; k++) {
                    const key = (preferredDirection[i] + k) + "_" + sourceNode.id
                    if (!everyNodePortMap.get(key)) {
                        sourcePort = preferredDirection[i] + k;
                        everyNodePortMap.set(key, edge);
                        break out;
                    }
                }
            }
            edge.source_id = {
                cell: sourceNode.id,
                port: sourcePort,
            }
            const { preferredDirection: preferredDirection2 } = getDirection(targetNode, sourceNode);
            let sourcePort2 = "";
            out:
            for (let i = 0; i < preferredDirection2.length; i++) {
                for (let k = 1; k <= 3; k++) {
                    const key = (preferredDirection2[i] + k) + "_" + targetNode.id
                    if (!everyNodePortMap.get(key)) {
                        sourcePort2 = preferredDirection2[i] + k;
                        everyNodePortMap.set(key, edge);
                        break out;
                    }
                }
            }
            edge.target_id = {
                cell: targetNode.id,
                port: sourcePort2,
            }
        });
        nodes.forEach((node: any) => {
            const nodeports = edges.filter((item: any) => (item.source_id.cell === node.id || item.target_id.cell === node.id));
        })
    }

    const renderDiagram = (data: any) => {
        const graph = graphRef.current;
        const { nodes, edges } = data;
        // const newData = buildData(data);
        const nodesData = nodes.map((item: any) => {
            return createNode(item);
        })
        const edgesData = edges.map((item: any) => {
            return createEdge(item);
        })
        graph.resetCells([...nodesData, ...edgesData])
        graph.resize(initWidth, initHeight);
        // graph.zoomTo(0.5)
        // graph.centerContent()
    }

    useEffect(() => {
        const graph = new Graph({
            container: document.getElementById('container')!,
            panning: false,
            mousewheel: false,
            // 其他配置
            connecting: {
                // router: {
                //     name: 'metro', // 使用 orth 路由，专为避免重叠设计
                //     args: {
                //         padding: 30,
                //     }
                // },
                connector: {
                    name: 'rounded',
                },
            },
            interacting: {
                nodeMovable: false,
                // magnetConnectable: true,
                // edgeMovable: true,
                // edgeLabelMovable: true,
                // vertexMovable: true,
                // vertexAddable: true,
                // vertexDeletable: true,
            },
        })

        // 全局函数渲染ER图
        myWindow.renderERDiagram = (data: any) => {
            isScanRef.current = true;
            setData(dataJson);
        };
        myWindow.getERDiagramAsBase64 = () => {
            return new Promise((resolve) => {
                myWindow.renderERDiagramCallback = () => {
                    const graph = graphRef.current;
                    if (!graph) {
                        return resolve(null);
                    }
                    resolve("dataUri:" + JSON.stringify(dataJson));
                };
            });
        };
        // graph.use(new Export());
        graphRef.current = graph;
        graph.on('render:done', () => {
            if (myWindow.renderERDiagramCallback) {
                setTimeout(() => {
                    myWindow.renderERDiagramCallback();
                }, 100);
            }
        });
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         myWindow.renderERDiagram([]);
    //     }, 2000);
    // }, [])

    useEffect(() => {
        if (data2?.nodes?.length) {
            renderDiagram(data2);
        }
    }, [data2])

    return (
        <>
            <Button style={{ position: 'fixed', bottom: 30, right: 30 }}
                onClick={() => {

                }}
            >点我</Button>
            <div style={{ position: 'relative', height: initHeight, width: initWidth }}>
                <div id="container"></div>
                <div style={{
                    height: initHeight - 30,
                    width: boxWidth,
                    position: 'absolute',
                    left: initWidth - boxWidth,
                    top: 30,
                    padding: "10px 10px 20px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    fontSize: 20
                }}>
                    <div style={{ width: "100%" }}>
                        {
                            dataJson?.edges?.length && dataJson?.edges?.map((item: any) => {
                                return <div style={{ display: "flex", lineHeight: 1.5, padding: "5px 2px", overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                                    <span>
                                        <Button size='small' shape="circle">{item.info_num}</Button>
                                    </span>
                                    <span style={{ marginLeft: 5 }}>
                                        <span style={{ fontWeight: 600 }}>{item.source_name + "->" + item.target_name + ": "}</span>
                                        <span>{item.pi_subject + ": " + item.pi_element}</span>
                                    </span>
                                </div>
                            })
                        }
                    </div>
                    <div style={{ marginTop: 20, display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <div>
                                <span style={{ border: '2px solid ' + Colors[1], display: 'inline-block', width: 100, height: 20 }}></span>
                                <span>xxxxxxx</span>
                            </div>
                            <div>
                                <span style={{ border: '2px solid ' + Colors[1], display: 'inline-block', width: 100, height: 20 }}></span>
                                <span>xxxxxxx</span>
                            </div>
                            <div>
                                <span style={{ border: '2px solid ' + Colors[1], display: 'inline-block', width: 100, height: 20 }}></span>
                                <span>xxxxxxx</span>
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div>
                                <span style={{ border: '2px solid ' + Colors[1], display: 'inline-block', width: 100, height: 20 }}></span>
                                <span>xxxxxxx</span>
                            </div>
                            <div>
                                <span style={{ border: '2px solid ' + Colors[1], display: 'inline-block', width: 100, height: 20 }}></span>
                                <span>xxxxxxx</span>
                            </div>
                            <div>
                                <span style={{ border: '2px solid ' + Colors[1], display: 'inline-block', width: 100, height: 20 }}></span>
                                <span>xxxxxxx</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tool;