import winston from 'winston';

const { combine, timestamp, printf, simple, label } = winston.format;

const LevelColors: any = {
  info: '\x1b[32m',
  error: '\x1b[31m',
  warn: '\x1b[33m',
  debug: '\x1b[34m',
};

class Logger {
  winston: any;
  constructor(_label: string) {
    this.winston = winston.createLogger({
      levels: {
        error: 0,
        warn: 1,
        debug: 2,
        info: 3,
      },
      format: combine(
        simple(),
        label({ label: _label }),
        timestamp({ format: 'DD-MM-YYYY hh:mm:ss.SSS A' }),
        printf(
          (info) =>
            `[${info.label}] [\x1b[35m${info.timestamp}\x1b[0m] [${`${
              LevelColors[info.level]
            }${info.level.toUpperCase()}\x1b[0m`}]: ${info.message}`,
        ),
      ),
      transports: [new winston.transports.Console()],
    });
  }

  info(message: string) {
    return this.winston.info(message);
  }
  error(message: string) {
    return this.winston.error(message);
  }
  debug(message: string) {
    return this.winston.debug(message);
  }
  warn(message: string) {
    return this.winston.warn(message);
  }
}

export default Logger;
