#Rewritten code from /r2/r2/lib/db/_sorts.pyx

from datetime import datetime, timedelta
from math import log

epoch = datetime(1970, 1, 1)

def epoch_seconds(date):
    """Returns the number of seconds from the epoch to date."""
    td = date - epoch
    return td.days * 86400 + td.seconds + (float(td.microseconds) / 1000000)

def score(ups, downs):
    return ups - downs

def hot(ups, downs, date):
    """The hot formula. Should match the equivalent function in postgres."""
    s = score(ups, downs)
    order = log(max(abs(s), 1), 10)
    sign = 1 if s > 0 else -1 if s < 0 else 0
    seconds = epoch_seconds(date) - 1134028003
    return round(sign * order + seconds / 45000, 7)

print hot(5660, 0, datetime.now() - timedelta(hours=2))
print hot(5281, 0, datetime.now() - timedelta(hours=4))
print hot(3956, 0, datetime.now() - timedelta(hours=6))
print hot(2957, 0, datetime.now() - timedelta(hours=5))
print hot(5101, 0, datetime.now() - timedelta(hours=8))
print hot(3593, 0, datetime.now() - timedelta(hours=8))