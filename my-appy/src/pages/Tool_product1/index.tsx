import { Graph, Cell, Dom, Line, Curve, Path } from '@antv/x6';
import ELK, { ElkNode, ElkEdge, ElkExtendedEdge } from 'elkjs'
import { Export } from '@antv/x6-plugin-export'
import { useEffect, useRef, useState } from 'react';
import { dataInfo, IEdge, INode } from "./data";
import { dataJson } from "./json";
import { customData } from "./origin"
console.log('[ customData ]-8-「index」', customData);
import Styles from "./style.less"
import { Button } from 'antd';
import Logo from "@/assets/antv.png";

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
        ports: {
            groups: {
                top: {
                    position: { name: 'top' },
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            fill: '#fff',
                            strokeWidth: 2,
                        },
                    },
                },
                right: {
                    position: { name: 'right' },
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            fill: '#fff',
                            strokeWidth: 2,
                        },
                    },
                },
                bottom: {
                    position: { name: 'bottom' },
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            fill: '#fff',
                            strokeWidth: 2,
                        },
                    },
                },
                left: {
                    position: { name: 'left' },
                    attrs: {
                        circle: {
                            r: 3,
                            magnet: true,
                            stroke: '#31d0c6',
                            fill: '#fff',
                            strokeWidth: 2,
                        },
                    },
                },
            },
            items: [
                {
                    id: 'top1',
                    group: 'top',
                },
                {
                    id: 'top2',
                    group: 'top',
                },
                {
                    id: 'top3',
                    group: 'top',
                },
                {
                    id: 'right1',
                    group: 'right',
                },
                {
                    id: 'right2',
                    group: 'right',
                },
                {
                    id: 'right3',
                    group: 'right',
                },
                {
                    id: 'bottom1',
                    group: 'bottom',
                },
                {
                    id: 'bottom2',
                    group: 'bottom',
                },
                {
                    id: 'bottom3',
                    group: 'bottom',
                },
                {
                    id: 'left1',
                    group: 'left',
                },
                {
                    id: 'left2',
                    group: 'left',
                },
                {
                    id: 'left3',
                    group: 'left',
                },
            ],
        },
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
                    strokeWidth: 1,
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

interface Position {
    x: number
    y: number
}
let ad = 0;
const portIdToNodeIdMap: Record<string, string> = {};
const cells: Cell[] = [];
const elk = new ELK();
const Tool = () => {
    const graphRef = useRef<any>(null);
    const [data2, setData] = useState<{ nodes: INode[], edges: IEdge[] }>()
    const isScanRef = useRef<boolean>(false);

    const createNode = (item: any) => {
        const graph = graphRef.current;
        return graph.addNode({
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
        let vertices: any = [];
        // if (item.id === 4) {
        //     vertices = [
        //         { x: 700, y: 330 },
        //     ]
        // }
        // if (item.id === 42) {
        //     vertices = [
        //         { x: 700, y: 300 },
        //     ]
        // }
        // if (item.id === 16) {
        //     vertices = [
        //         { x: 1700, y: 580 },
        //     ]
        // }
        const edge = graph.addEdge({
            id: item.id,
            shape: 'custom-edge-label',
            source: item.source_id,
            target: item.target_id,
            label: item.info_num + "",
            // vertices,
            attrs: {
                line: item.transmitted_type === "Manual" ? {
                    strokeDasharray: 5,
                } : {},
            }
        })
        // console.log('[ edge ]-282-「index」', edge);
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

    const renderDiagram = (data: any) => {
        const graph = graphRef.current;
        const { nodes, edges } = data;
        const nodesData = nodes.map((item: INode) => {
            return createNode(item);
        })
        const edgesData = edges.map((item: IEdge) => {
            return createEdge(item);
        })
        graph.resetCells([...nodesData, ...edgesData])
        graph.zoomTo(0.7)
        graph.centerContent()
    }


    // const makeScan = () => {
    //     const graph = graphRef.current;
    //     // 获取视口的边界
    //     const viewport = graph.getViewport();
    //     const viewBBox = {
    //         x: viewport.x,
    //         y: viewport.y,
    //         width: viewport.width,
    //         height: viewport.height,
    //     };

    //     // 函数：检查节点是否在视口内
    //     function isNodeInView(node: any) {
    //         const bbox = node.getBBox();
    //         return !(bbox.x + bbox.width < viewBBox.x || bbox.x > viewBBox.x + viewBBox.width ||
    //             bbox.y + bbox.height < viewBBox.y || bbox.y > viewBBox.y + viewBBox.height);
    //     }

    //     // 函数：获取所有节点的最小包围盒
    //     function getUnionBBox(nodes: any) {
    //         let minBBox = null;
    //         for (const node of nodes) {
    //             const bbox = node.getBBox();
    //             if (!minBBox) {
    //                 minBBox = { ...bbox };
    //             } else {
    //                 minBBox.x = Math.min(minBBox.x, bbox.x);
    //                 minBBox.y = Math.min(minBBox.y, bbox.y);
    //                 minBBox.width = Math.max(minBBox.x + minBBox.width, bbox.x + bbox.width) - minBBox.x;
    //                 minBBox.height = Math.max(minBBox.y + minBBox.height, bbox.y + bbox.height) - minBBox.y;
    //             }
    //         }
    //         return minBBox;
    //     }

    //     // 辅助函数：计算平移偏移量
    //     function getTranslateOffset(scale: any, viewBBox: any, bbox: any) {
    //         const offsetX = (viewBBox.width - bbox.width * scale) / 2;
    //         const offsetY = (viewBBox.height - bbox.height * scale) / 2;
    //         return [offsetX, offsetY];
    //     }

    //     // 获取所有节点
    //     const nodes = graph.getNodes();

    //     // 检查所有节点是否在视口内
    //     const allNodesInView = nodes.every(isNodeInView);
    //     if (!allNodesInView) {
    //         // 如果有节点不在视口内，计算最小包围盒
    //         const unionBBox = getUnionBBox(nodes);

    //         // 根据视口和包围盒计算缩放级别
    //         const scaleWidth = viewBBox.width / unionBBox.width;
    //         const scaleHeight = viewBBox.height / unionBBox.height;
    //         const scale = Math.min(scaleWidth, scaleHeight);

    //         // 缩放图形到视口
    //         graph.scale(scale, scale); // 您可能需要调整缩放中心点
    //         graph.translate(...getTranslateOffset(scale, viewBBox, unionBBox));
    //     }

    //     if (window.renderERDiagramCallback) {
    //         window.renderERDiagramCallback();
    //     }
    //     isScanRef.current = false;
    // }

    useEffect(() => {
        const graph = new Graph({
            container: document.getElementById('container')!,
            panning: true,
            mousewheel: true,
            // 其他配置
            connecting: {
                router: {
                    name: 'normal', // 使用 orth 路由，专为避免重叠设计
                    args: {
                        padding: 30,
                    }
                },
                connector: {
                    name: 'rounded',
                },
            },
        })
        graph.use(new Export());
        graphRef.current = graph;
        graph.on('render:done', () => {
            if (window.renderERDiagramCallback) {
                setTimeout(() => {
                    window.renderERDiagramCallback();
                }, 100);
            }
        });
    }, [])

    useEffect(() => {
        if (data2?.nodes?.length) {
            renderDiagram(data2);
        }
    }, [data2])

    useEffect(() => {
        // 全局函数渲染ER图
        window.renderERDiagram = (data: any) => {
            isScanRef.current = true;
            setData(data);
        };
        window.getERDiagramAsBase64 = () => {
            return new Promise((resolve) => {
                window.renderERDiagramCallback = () => {
                    const graph = graphRef.current;
                    if (!graph) {
                        return resolve(null);
                    }
                    resolve("dataUri");
                };
            });
        };
    }, [])
    // console.log('[ data2 ]-317-「index」', data2);
    return (
        <div className={Styles.container}>
            <Button onClick={async () => {
                await window.renderERDiagram(dataJson);
                const res = await window.getERDiagramAsBase64();
            }}>数据1</Button>
            <Button onClick={async () => {
                await window.renderERDiagram(customData);
                const res = await window.getERDiagramAsBase64();
            }}>数据2</Button>
            <div className={Styles.leftBox + " " + Styles.box}>
                <div style={{ height: "100%", width: "100%" }} id="container"></div>
            </div>
            {/* <div className={Styles.rightBox + " " + Styles.box}>
                <div style={{ width: "100%" }}>
                    {
                        data2?.edges?.length && data2?.edges?.map(item => {
                            return <div style={{ display: "flex", lineHeight: 1.5, padding: "5px 2px", overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                                <span>
                                    <Button size='small' shape="circle">{item.index}</Button>
                                </span>
                                <span style={{ marginLeft: 5 }}>{item.description}</span>
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
            </div> */}
        </div>
    )
}
export default Tool;