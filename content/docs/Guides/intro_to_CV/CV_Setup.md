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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PY4CWZJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCyzCQd8T1uQV5LW7Q0GsMQmRIYxuaVoQsLPCoTUVlJmwIgdo3wl1zPVQtFqO96OKN2FDIAIpU7M7%2Bjb%2BDMATCKYqcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkJKdJgKk4adyvDFCrcA2NtH4C99ekmrN1Z7C9z2CRgcbImr79vOhIfvxERrVKDPVmJoTOj%2FSUDNonPg790bJez9t93pXEb0pJNmLIBzIjHaoV210v37kY28mSmGis%2BAinqWGvLT93MmMD4vgvHoQkLgJrjfOfNZV7a5dD6hdDgnr%2ByQBMIxYAqH7iulGbFY4QNGuppWsf0VWMQQ5KmGWjqE1RdmHkWp4pfDbPdI5x6yzIx0729t8IkqAO%2FOwdPhPeIsdQJCoTmzUxfcfVFPdwOXqmkNbOmbaVoHyFQe2IIDYFBa5ASIekF0YS7RqQD2ghS3%2FeIc14BmbUinGD5mlwYk9IqkHcfbOxOXyUSebx72PG%2BGGBEO1ncWL1B89BDo5d75Z%2BgqGAF%2BX9Qoxqfz4A2BXJ16bC0MFqadk3eOeyBi%2B%2BcXAecytWANJhTtDgFVdrtAJmQfXmX9S%2BLqekPz%2BaGrGUMje02Ujg5HAkxCbJU%2FBYERxCw0sxvKO5XqiKE4JcdEOnqzZMQvrlSNwxTF9X1gvDOU5mmmxcE6Mtixm8mIB9dOEZmAiTLBQOKLrgFUlmkhlg86bQbJmRDZPRs5gHtgulWuIXaKRJ85rX3eaZPNpIS42AwpCzb69Qlv6BN%2Fe3uN5Id6bqZX946MPOP9cEGOqUBWZBklBRmqIjCuJMkssahV2lUjQTEi6A3t%2BC9mSf5iTn8ij0SF%2FNoCK%2BEZA1eOgytUsy5Qnl0ORsHKamxYu5WnKgd3LON7ESTQfAyD4%2FwPJ8xcrUzGNWVgEg2kmWVIHWoI04Fu5j4aWrIAywGEnIInA57d8odFD6%2F8pMBM%2B1PAtwmhvgcBMCgJYKdnklQGtUT8asK%2BbOCQB6FqEWtXbx1nAFkoS71&X-Amz-Signature=82197d36990dc2f68be107d7c3a1f00e5e930e7f23c3c8e1c797c1b46bac9e2c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL7SEKH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCVMjNJgJUmowp3V5jOm2XvR%2BvdCpry7bNWoFlPfTgS6AIgZZrKxlxHIzO2bArCPpzlQfIWxgKCaMUG1gmCI5ecfg4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvyz3AlKx%2FhejupsSrcAynGvHQ6zsn8zhwclgtLPWIqwMJ%2BeEJeM%2FK88XJBbMxIOkz%2FRxxQpa0XiwZu8XMOaRBbafVYA2wvFoEpMAq0teEL9eyAg%2BCvEDDuBCL7K98AcfWfXNcdZrBaF5jAouclyEtAR4MuYzlJh%2BhkF3AUiYFQzZx4eZxcjj8voqORMFd4Rpb%2BQGpEPaNkhYPH%2F4s%2BH3PQCQInF5QDJxA0FKX3N8cv4cIVIfVZrYsNqdI7msf4cYGK8ZEWT9929EKyfDDMfGeH%2FsXhCqSLqCr%2FjZjItksUEkEt7BoL5sXlPMJ7ICS2xefn95GgY4EB%2Blf9RJP6XsPFVTOaAbNi0vVXQZGmvWauPr0cxOty4BW%2FqfUwbLPFHS0Wwfp6a4FqvBcqDMfxXgUSnKPBHG9b0JDter9bXpRxVerffB5EVZlTnoaFU%2FHHxDrcZHVJVH%2Bbp8gjO5BFr%2Fk1zV2BAm4apR7Vd6epEpi9tZRm7hJQR8%2BF%2FCp%2BNINy4UFhiM65fU6sSmj8AnlvgaGo7126v193AVmT3ZfQaKk82hxNsCTl%2F8fQCZx5PmfaHw%2B9LSB32w2DlhmGulKfvJRfogWENxsR7oh017uyAyCE%2Blh%2BA9Tjwr1tCVjYIT3bF%2Fge0bBREb4Z%2FV5cMJKQ9cEGOqUBkySqjw30BYf7nwRViwXVCnQB%2F%2BqvwPjEtT1S3YQdKCo%2FZKL303wCgZ%2FMSYN13EkhEdzHblWvtg3eL4PRLKBlkD2zFwDGGHVhQ9cBEnpEEiJt%2B04R4h2cTkjabWhpxm7P8JtJPYWgHGetTP5R%2BOvVmO%2FmzGvPKZALK6ZMWIzAjBJiIoLLqwyXMVqioIPhEHoDXgs%2F3ZNEHDiaOUArjE9U%2FkvGaecO&X-Amz-Signature=8e2530ceeb57772a1cdf4ecf489fa53c8618be3059699948cc153019630dbdcb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
