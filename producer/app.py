from flask import Flask, request, jsonify
from kafka import KafkaProducer
import json

app = Flask(__name__)
producer = KafkaProducer(bootstrap_servers='kafka:9092', value_serializer=lambda v: json.dumps(v).encode('utf-8'))

@app.route('/produce', methods=['POST'])
def produce():
    message = request.json
    producer.send('test-topic', message)
    return jsonify({"status": "message sent"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
