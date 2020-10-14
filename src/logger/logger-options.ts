import * as winston from 'winston';

const alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all:true
  }),
  winston.format.label({
    label:'[LOGGER]'
  }),
  winston.format.timestamp({
    format:"DD-MM-YY HH:MM:SS"   //or YY-MM-DD
  }),
  winston.format.printf(
    info => info.level+ ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
    //msg =>colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`)
  )
);

export const loggerOptions = {
  levels: {
    error: 0,
    log: 1,
    warn: 2,
    verbose: 3,
    debug: 4,

  },

  transports: [
    new winston.transports.Console({
      /*stderrLevels: ['error'],*/
      level: 'error',
      //format: alignColorsAndTime
      format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
    }),
    new winston.transports.Console({
      /*stderrLevels: ['error'],*/
      level: 'warn',
      //format: alignColorsAndTime
      format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
    }),
    new winston.transports.Console({
      /*stderrLevels: ['error'],*/
      level: 'log',
      //format: alignColorsAndTime
      format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
    }),
    new winston.transports.Console({
      /*stderrLevels: ['error'],*/
      level: 'verbose',
      //format: alignColorsAndTime
      format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
    }),
    new winston.transports.Console({
      /*stderrLevels: ['error'],*/
      level: 'debug',
      //format: alignColorsAndTime
      format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
    }),

  ],

  /*
  colors: {
    error: 'white redBG',
    log: 'red',
    warn: 'yellow',
    verbose: 'white magentaBG',
    debug: 'cyan',
  },*/
};

