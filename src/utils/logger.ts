import path from 'path';
import util from 'util';
import { createLogger, format, transports } from 'winston';
import config from '../config/config';
import { EApplicationEnvironment } from '../constant/application';
import * as sourceMapSupport from 'source-map-support';

// Linking Trace Support
sourceMapSupport.install();

const consoleLogFormat = format.printf((info) => {
  const { level, message, timestamp, meta = {} } = info;

  const customLevel = level.toUpperCase();
  const customTimestamp = timestamp;
  const customMessage = message;

  const customMeta = util.inspect(meta, {
    showHidden: false,
    depth: null
  });

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const customLog = `${customLevel} [${customTimestamp}] ${customMessage}\nMETA ${customMeta}`;

  return customLog;
});

const consoleTransport = () => {
  if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
    return [
      new transports.Console({
        level: 'info',
        format: format.combine(format.timestamp(), consoleLogFormat)
      })
    ];
  } else {
    return [];
  }
};

const fileLogFormat = format.printf((info) => {
  const { level, message, timestamp, meta = {} } = info;

  const logMeta: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(meta as object)) {
    if (value instanceof Error) {
      logMeta[key] = {
        name: value.name,
        message: value.message,
        trace: value.stack || ''
      };
    } else {
      logMeta[key] = value;
    }
  }

  const logdata = {
    level: level.toUpperCase(),
    message,
    timestamp,
    meta: logMeta
  };

  return JSON.stringify(logdata, null, 4);
});

const fileTransport = () => {
  return [
    new transports.File({
      filename: path.join(__dirname, '../', '../', 'logs', `${config.ENV}.log`),
      level: 'info',
      format: format.combine(format.timestamp(), fileLogFormat)
    })
  ];
};

export default createLogger({
  defaultMeta: {
    meta: {}
  },
  transports: [...consoleTransport(), ...fileTransport()]
});
