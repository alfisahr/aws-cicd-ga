#!/bin/bash
cd /var/frontend/
rm -r node_modules/
rm package-lock.json
npm install
npm run build