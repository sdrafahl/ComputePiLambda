exports.handler = (event, context, callback) => {
  let x;
  let denominator = 1;
  let pi = 0;
  for(x =0;x<10000;x++) {
    if(x % 2 == 0) {
      pi += 1/denominator;
    } else {
      pi -= 1/denominator;
    }
    denominator += 2;
  }

  let response = {
        "statusCode": 200,
        "headers": {},
        "body": pi * 4,
        "isBase64Encoded": false
    };

    callback(null ,response);
}
