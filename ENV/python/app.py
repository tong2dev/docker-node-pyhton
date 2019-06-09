from flask import Flask,jsonify
from datetime import datetime
from pytz import timezone

app = Flask(__name__)

@app.route('/')
def index():
  #datetime.now(tz=timezone('Asia/Bangkok')).strftime('%d-%m-%Y %H:%M:%S')
  return jsonify({'code': 200,'message':"Service Python",'time':datetime.now().strftime('%d-%m-%Y %H:%M:%S')})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')