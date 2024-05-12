#!/bin/bash
cd /home/angellovg/ServicioLinux
git pull origin Deployment
sudo systemctl restart nodeapp.service
