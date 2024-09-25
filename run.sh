#!/bin/sh
cd back; npm run start > /dev/null 2>&1 &
cd ..
cd front; npm run dev > /dev/null 2>&1 &
cd ..
