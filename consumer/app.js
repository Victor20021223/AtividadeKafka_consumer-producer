const kafka = require('kafka-node');

const startConsumer = () => {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });
  const consumer = new Consumer(
    client,
    [{ topic: 'test-topic', partition: 0 }],
    { autoCommit: true }
  );

  consumer.on('message', function (message) {
    console.log('Received message:', message.value);
  });

  consumer.on('error', function (err) {
    console.log('Error:', err);
  });
};

// Adicionar um pequeno atraso para garantir que o Kafka esteja pronto
setTimeout(startConsumer, 30000);  // 30 segundos de atraso
