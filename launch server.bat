@echo off
title VJP Project
echo Server started!
start "" chrome.exe http://127.0.0.1:8080/
http-server
pause