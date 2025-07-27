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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZWBGRS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHXIQosQ%2FcCN0mtChFKaR1yaQ3RJ%2BD4UQ68lw44RuyTQAiBm8rMs3pLwZZ1Zm0UY2Srgpiy4Neoj82adnlpFdcFAhSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwtHT8U5Oj7xKQavYKtwDdczVILR1h61eqEUQxQM%2FACGHr9DZHYmnbkEzAcLI49OX8HowWKQv9XXpJefp0WKg10wF%2Fp%2BEm%2BqSoDIpRaMERFUJ5cE5kFbgkULjGYaIiIioE%2FfrEr0HBeUBYz6y9aC4lmM1Eid%2Fw38qhYDdYNfwe91%2FPj%2F5c%2FDAKa4WUYp1miRgsz6lUhBLeNf2c%2BmfhqpuOErdvUEPYfskcTDXSpCF%2ByOu7Iqh3niT6yyqOgZqq1zTL%2FCsq8jIaGKemTOGtAy8Qaq3HxE4WkWfciuteGoeVrOGLuK3qY8ZhEHIXsietWXohwra%2FCJHYxCv4ynpcRnJrySV34AADccnOUaEjvkE5ioR%2FbFlzG7gjv9ZgLS1yhdL2wA7PSUdmwhMwKEKF4j6%2BVZDQDaX0MOnCU%2FgHBZCISQsEZqipy20sjQ4jafNk0Q0rwDr3oeIstOaifkh7M7kQevI6CMTyzU%2BKt3sjuBKbAGky%2B5oTvGPNQ0P2o%2B%2Bk5oRD3OKPOIgrrxzjjsSmKK8JoVKoNtB74BF%2FNczN9IC4gY%2FULtt5o6PcAbd%2FuSxXfiCi5LHkPFCD0D%2FSCh4Qwu0FGxaNPkl0P7WtNLi%2B2I%2BSiJLlWJ5QLPaDZU3iyY0fz4ZrkNmAzI5rjvYyYgw38maxAY6pgEIwMGrwSRo0Y4KnrSIF4bEXNAXb9AM%2BNi7MPd6cGT3ghDTyyPD8qM5MgdGuXPUE8Yj9odFeqf5mT0py4PeLXCzIsVMv3R%2FRbaMoGUY7bfzW9n02qEyRJtRfznSh4anW%2F9oF8xhGh61ucMZI8Owqq13Ahp9OlSKYK%2BJIawoA7jU47IjBUVi6YDu4XQEMp%2BFw2APss6fbUeW17RZ0GyKI5NEc%2B5JwZh0&X-Amz-Signature=f529f1bde53365a6a10aadf449bf896a1ed6a9b1dfbc2edd09d6638ff6e0def9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCYTO2ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEjQ3fyF1A%2FBWKuEAYuZjKumA1Oq%2FS2yWW4HagvRVVYgAiEAuhoRpVJagQbCmHZEbmSV0VM%2F0%2FqNUlhhNTg7J2sdZFoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDHJbtxc7S14Pd9QKircA1FgVOZsu3ukytrAS3o0sFh7cEggTe6KLVYXvDZoxGWkSopqvKyuRUkRLYbzmVtYIoaGopRgG2t5d%2BDUKz5cjjpbq9zqAoNLQW6GKkN3AQPcGAyimaOmj5utUKqKIr%2B813w%2BUm5o26WbnjBLJ2iGZ31gqreezj8m8z1DUpdbZvuowKsD%2BHtLUrxD0AYyOZ9R6PprflyPoEy9VLnuhGAeQQeAUdTnyODusTWkgGW1VRMiJjBAh5aWFoa2v0BEdXQPojRMdTV2rxl5ny46fDVtVfAmwxXzOGF4%2FprrClx9IlL6PH4BlqpPELDsJE8oh%2BHXw6HqI4D15HXPd%2BguV%2BsryVEkW078QqkeGP9%2FRX4bKVKZash6zfH%2Frk4RqTd2ZEpzUTlDziRYWonabwKB4yoc0Kc0qzGAXMUE%2BRzwlIcfvKOym6NkqSbrQ42H2VbF3BelbJxaQV%2F7e0PTOM4m5iurViQjnIWwL3JqYazTn8GqcKbTqtOfIYVxI17OL8DHwvUgoQ9EmxmjpMEW8YMvl5A30fgQYfNhwAI4QCc8xJNIuVjaJVHk6mc4riIRZ1grxpr0ad7NLxr6%2FFp5Lfuo2WIbf5lmDQBFRlHSiebE1hXHo%2FFAigRlXCiSYB%2FP5aHyMNXJmsQGOqUB7P2vnVU9D4Dy0M85UkdYznUgApS5YYdYmQxgMk7nty5%2BqSFyjZsjwWj%2Fmlo8TgDKRqyzdnNCzkTLXawBjo%2F9yo3uGorufy1Z0xBDlgYscmGTi8%2BXhajFIp4ji4i9it7iIOe9qGx6mU%2BqR5Z11Fy6COowpzwUOzLeSzGNQfpMffxUseLcu37OFrFRDNZDQAVHjYesOZJ3a%2FU3%2BGkTOt8%2Bwb5Ulti9&X-Amz-Signature=cc3fb0f5990f8671687730675ff797127da237c7bf032771ce35ca3dba329f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
