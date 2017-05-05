@echo off
title Running VJP Project on 127.0.0.1:8080 
start "" chrome.exe http://127.0.0.1:8080/
http-server
pause