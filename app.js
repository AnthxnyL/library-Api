import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import indexRouter from './routes/index.js';
import bookRouter from './routes/books.js';
import userRouter from './routes/users.js';
import loanRouter from './routes/loans.js';
import statsRouter from './routes/stats.js';

dotenv.config();
connectDB();

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('/loans', loanRouter);
app.use('/stats', statsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

export default app;
