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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVILA5Y%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCEX6HGUm%2BucajDp4Ms%2BEjCQ4RXSvvWVAqdVQNgmc4d9AIgcyR8lfJcMcXlp9nJPaoJ9anARVRJR3K8vbviFdQaFiYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLjHgroKxd%2B%2FQxJ7%2FCrcAyB4NGDUfgPKJ1gP%2BuwC90K88BYuHbTv0ZO3N7B8gO6EDdGSVI6e6KaCHvnA6sD3emy7hH6RbKU9GiyrodkYdwThVcWDOGapOJdhTdfejOZDowwY0GSLxxc5ZB4wcSHf7kOUkytPcXgRUpZ6QlHPGATcjqxRgENbvwYZgxirkq1ZGPUv9p34lfzuqhNxlTKLdiMcUMzYMp2F0wO3zvinkBF2ddusevrhDqaYuKxXy7c%2B2U6PpYbhsFh22U7KlhSQk68X5LqwVaFRx5T3UaVbaxrPUoZQP8P9Kv9PRq7qi5uydM471JeW9XnAIjZl9WTDMzgldzC0HH6sg2YAkXqH6cvcBvlT%2FPuP2J2eNm3jJ8qkGdzQuuj05BeLCIFcL%2F3hHWO3mJVzv7Mx04%2FOEGDropWcOBbhIhOBasEDOkyMlU6ZDO9JYxBpmo%2Bh%2FXqwGDO5m5y%2B7IQTfCc%2FJ4fm74x3YT5rNdn6DQWXg9kT1UwnqwP9q1FGBJY0uCzJqBzvUbKKKwOaCGvkNcCdfbW0TSdD47rqUgH0he2nzvAiFcMo1K9SPlrSHBJK%2BHbmiW55hC9eE5E8q0OdTmhChbAWLZRKKGH8TXv%2BmpcalVOGPpjLahiWsIuNv2IJ6Wtlk2ILML%2BLhcIGOqUBKfuPgaB2luX56QsmW9FjGN3rv4u3ugn%2BLVDInV8X3WkiPMWpw8ks82N41Wxlnxnwj3qH7LGr3I220pjdJk%2FrYkiU6rfYfA6g94fF4OPKSSePDeq8YSs%2F7FinVmtJUaCYX4kOeLNjc9CO15aG6qhyDzhhfc82jEygjORTApBem2FwfaLiUSWa%2BDVrxqp05d%2Bl8fiNh%2FrbHA%2FURH6HUu8nnfdhaHKX&X-Amz-Signature=d6844cd2c23f03ccd3331e05f7b4c96a339e0453e2ec360a3487429b32427eca&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6X5BKET%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9Mg5MuxPY8fNM9qfXNTjbnHIqfbc6RED9W3JWoBOZUAIhAIJz9LIJ%2FY%2B4H5Iz7jfWg%2FtARdXzVNrasv%2BpZ5Mu3qDuKv8DCEAQABoMNjM3NDIzMTgzODA1IgzcGP3UfvLRRO1hSakq3AOTvN0lNx%2BlttkKP%2B4CxmySe5lM%2B%2BjoIQI5eC1IaRxfAdnk%2F0Yenb4Ca1i3yvFq57LgTypE01fP8gNhVHyw2DlCoWC37y42hdabfccfQk%2FKb1ruSULtsyDj1mBT39ooSo65wh12Po9M9HE1kEZtvrHahehGc2uvGEyD8p0QbP6sLg35MjJxQVKfic5WVZjoHrFx7yYlz1PJmUnT42RCDpYMdOyIM0ByfdZsCYYp8nV3pk5iRA6cwx03WG0aSSheUgFP1x8YTjC2Fsq40xdDoGdxbuCOpmExRIYr1%2BXK5uk92EHViitdH5K4NtXUFdffx%2FwDmdbnzFHt3ZFRLldHy2k5fNMseFx4uJwyWVr11XI%2FIUDtQ%2Fiy5vCTPf4bLp%2Bt%2FHWtCWOhlEKXiHyIeR3sn%2BVCam%2FvLzcxtKdaJvqqgWKSyk67IiSDkzplFjYtRHeaQ9MV3Hdyv2jJ225QDWK8nluLDuLh37m7ScHy%2BYwSJ1Haj5Vb5isJ%2B9SWfX35vm15cf3jiM3JaHdFE3urZrrEzIhwOUqDa7x6tCR17%2FA%2BcQdMdW2qoLyklD%2Bg%2Fv82QotWv3FeTyanvYy8tk6ob5OqKiqLqW9YKDgX2aCu2ULQ0I0f%2FDmyPn0SSrvR19Kh3TCti4XCBjqkAYZ%2BDgzAkHALz1Jpohlf0ePrsqvrcMTx6rTSw8Zccpl75acqPpJBEKoTFcs6aQqga2rt0Rn1kh8hX9c8RPKLfRjzVKVRShIex9f%2FAIp%2BSOrYWIlgP0W9TjOOn%2BP0L%2F35ENABvKCN5tuSCPszXuFHO8ycRakNYcoynERO%2BtBmifoqUilrxAo3tK6hLmTczgQuEftedu0a7JTmf3QQQ%2Fv71bGpWKfn&X-Amz-Signature=e4220032dafa82c80a8230051e1d368c203f9f7100ecb1a9fe39571a2e6ebe76&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
