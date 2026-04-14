import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';

import 'reactflow/dist/style.css';
import styles from './TestSchema.module.scss';
import useSchema from '../module/useSchema';
import { Button, Input, Typography } from '@/shared/ui';

const TestSchema = () => {
  const {
    nodes,
    edges,
    onConnect,
    onEdgesChange,
    onNodesChange,
    setSelectedNode,
    selectedNode,
    updateNodeLabel,
    addNode,
    setUpdateValue,
  } = useSchema();

  return (
    <div className={styles.root}>
      <button onClick={addNode}>Добавить блок</button>
      {selectedNode && (
        <div className={styles.changeBlock}>
          <Input
            placeholder='Название блока'
            onChange={e => setUpdateValue(e.target.value)}
          />
          <Button onClick={() => updateNodeLabel(selectedNode)}>
            <Typography>Сохранить</Typography>
          </Button>
        </div>
      )}
      <div className={styles.schemaWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(_, node) => setSelectedNode(node.id)}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default TestSchema;
