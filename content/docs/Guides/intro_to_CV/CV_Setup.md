---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5RD2K%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7pRqvLxZw9t3ziKi4XqiEAFyfroSxzFy7F3Wyst1hwIgUfu6t5SlhjKvf9aB3B%2FrVXCJchIO%2FSZ2GYm69zmWrjUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAR2imVfHVEiMKBtAircA%2BIuJAco09gTi0Iq3RTCU7%2B%2FfSVI115jDKCHPKUXnnT0QZrKtt8%2FRbDJehSVR%2Begcf65t5Z2E2o4wFeg61egPgaUQafSnqdORyv%2BGWxk1XgkKemgYSG9RQBmrF7JAiTPe7dczEOTOLV7j6ZvJJMYE1xSvIBkzGOfoP1msX2NlurN%2B7UZrZnY3TS1T1QjSfn3LX9cpwyVVqEy13W3%2BEY8JpBeZt0ZlO2vFU%2FKiffjtAsrRIC3RFDrFUCZVIElbCXpJKuY18vePzkPBpVKZJ4Ro6wL0auAAA8axsorxg9BanSVCfGwNfcwomerR%2Fy%2FcAh689IERKUbVr%2BBjqZClM%2BbKGZMgb7x7MBE%2FTb4qhey1oJuHCblOUh2j%2BAl1WJrelel%2FlIYqfsHMhkNXVoBsv1DRZ2qKkrnPKBu6Fg1VfjnxsR9oYbuqYjvkFUnl47Gp9JAz384%2B41y4yax1eMoobZ5vQGjc1gCAKxjuO0bMStqe842mLaCtxmLO6FAJ0SXBT794EWhigPzb1BV5Gor9m1dIhjrTHJ%2B4Lcel1Vqtid1oluXDCCoVa0HwKsiGNedJDrvIeHG9us%2Fj6RgxsRrxA67kMOqVDfIkQZH%2Bor6bbRP5BZC9BykOvxsr%2F8nkkU4MMvY2r4GOqUBdvdFtk%2B%2BHFspcItSCEf3uwu7TTLdoyROAqYvmXFj%2B2W48ykH3vgGYNsvV032wAQEDhkARCNnspJFZ0coqaxWASTAKCzkvHuJgmCtH03dwGQlc8MS8eMgNuFHkfIcfql5mnGztswtwcq6ZMtE7ccn56zOHoIllt2LNCJkQM9jwGJ9kbZEGhZTcFZshQYZbfcW96SPSf%2FDnZ%2BVKRuCjgZWOf7T9GGS&X-Amz-Signature=76a5493e7d11c403d73d768627211ef40150e22097fd9ffb8ab694c7952a9f4a&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52UYAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGt4FTggayAf7ALuWCYgGrdPnrP5BvwA3m8kCduc%2FjxAiEA9KPERsrLd88GjA14Rb35CxvgJy8PMXJiHR3qdz4sOiUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGfRzUotmWIKB37odSrcA8aTAG7ykHLwv%2FoRXh9i%2B6wBV9VqZudp%2Be%2BWURjv%2FWfNqDcxveubmBdScOR%2FXKUDEzz4kJlFOK%2Fn3lQzO3vNd6m2MACqvAG5Ip4V2b3oFumr03e7ohb7SznzpIPnB0FEnOU9rgXFoszQ4I4f6D6ksNGyyPF8JQlKEydO9c03kji43iCboJx0HXOH9NV0%2Br%2BtKnJic4C1n4EPceoC5eleA2EpJFPCnl6Tw3UuTUtNSqe5ojwlZJ1huxb3m%2FW%2BEaTDwWOB0ObT98mrRBzf6BGnGwPYDjsCeY%2BIKBFO0OJ0jZApalDzGPUBI%2FgJ5ECYYI%2Fy%2FbuvXSvCdiNGMOuUjveAf9L%2Fguw4%2BbdSOyIrv%2F4Js%2F9M0kkwGEAWAmNl%2Bk2ftI8k45ZuzuLOKm2CNFDTZUEFr3ylsGR9tXnquXIp2jjXl6e4Q%2FLRUa5rPylm28RZxaOG7rRRhlTBTWbH0UtwZFscXU78XUIRHKs1fAtCMO4QiZzgGuJqiZQaF5FS5ubyNY6wBWKFkhXv8MImgLqotiPULiDL%2BEtJAqmm%2FLQgdEjIK4%2FhZI4rCsn9jaahF8VRbJghHaJSWPdJneZ4sVI4uTVArWaVkyUkpBi0WrKqLFEEsYWOD5gs%2BOxLaKNLcFMiMNzY2r4GOqUBVp9K%2F8l3UXARMbNjv%2FGVF0oqMzxnPZak5zLD65SXrVJ2zFuWl%2BpOGpodPJ%2BbqLYY0EjfjZmIUkiu9JgZAHEypdEoUXVxobws5xPTb5Ds%2FyxQC1btnoGVi%2BxFx93pcAf1tFtNOgF%2Bt0hEtg6dhdzhcvxBDK59SCZk91OFi8HDXyp1srallNYRpIMK%2FrSUFOfG0Jjn6kbAAlK9tmY5ukCSt%2BxMBlP9&X-Amz-Signature=c1313a5ed85333472b93df04e21e24b317c3f17e3b7a9b2ec417b979324ce32c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
