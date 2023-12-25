#!/bin/bash
pm2 describe app > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  cd /var/frontend/
  pm2 start npm --name app -- start
else
  pm2 reload app
fi;