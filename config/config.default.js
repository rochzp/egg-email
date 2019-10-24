'use strict';

/**
 * egg-email default config
 * @member Config#email
 * @property {String} host - is the hostname or IP address to connect to (defaults to ‘localhost’)
 * @property {String} port - is the port to connect to (defaults to 587 if is secure is false or 465 if true)
 * @property {String} secure - if true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false
 * @property {String} secureConnection - 邮件服务端口
 */
exports.email = {
  app: true,
  agent: false,
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
};
