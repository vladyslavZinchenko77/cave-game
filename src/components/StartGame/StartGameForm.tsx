import React, { useState } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { initGame } from '../../services/gameService';

interface StartGameFormProps {
  onStartGame: (id: string) => void;
}

const StartGameForm: React.FC<StartGameFormProps> = ({ onStartGame }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { name: string; complexity: number }) => {
    try {
      setLoading(true);
      const id = await initGame(values.name, values.complexity);
      onStartGame(id);
    } catch (error) {
      console.error('Failed to start game:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="start-game"
      onFinish={onFinish}
      initialValues={{ complexity: 5 }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="complexity"
        label="Complexity"
        rules={[{ required: true, type: 'number', min: 0, max: 10 }]}
      >
        <InputNumber min={0} max={10} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Start Game
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StartGameForm;
