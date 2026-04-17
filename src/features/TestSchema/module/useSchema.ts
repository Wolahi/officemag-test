import { useCallback, useState } from 'react';
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
} from 'reactflow';

const getId = () => `${Date.now().toLocaleString()}`;

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const useSchema = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [updateValue, setUpdateValue] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds: Edge[]) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    const newNode = {
      id: getId(),
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      data: { label: 'Новый блок' },
    };

    setNodes(nds => [...nds, newNode]);
  };

  const updateNodeLabel = (id: string) => {
    setNodes(nds =>
      nds?.map(node =>
        node?.id === id
          ? { ...node, data: { ...node.data, label: updateValue ?? '' } }
          : node
      )
    );
    setUpdateValue(null);
    setSelectedNode(null);
  };

  return {
    addEdge,
    onConnect,
    addNode,
    setUpdateValue,
    selectedNode,
    updateNodeLabel,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setSelectedNode,
  };
};

export default useSchema;
