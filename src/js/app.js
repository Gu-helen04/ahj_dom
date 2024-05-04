import createCells from './cells';
import definePosition from './definePosition';
import timerClock from './timer';

const size = 4;
const field = createCells(size);
const body = document.querySelector('body');
body.append(field);
field.style.setProperty('--side', size);
definePosition();
timerClock();
