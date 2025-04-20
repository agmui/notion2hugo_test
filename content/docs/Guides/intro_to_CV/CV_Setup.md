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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJRJLZR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCntcbO5OX3ga9SgxgUcA1TvR1SCchElQmXm6phkSWUvgIhANCitO8JtGIQcD8BnUeIvNNCPQQhUifC4vqiQ3End6DEKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQZCo2wmaldJqGgx4q3AOXFg05gn2zt8%2Fh%2BEOwYl9uOCjHevLqIH%2BlDtWtT92fLyGz0WxjWivXZ9hEcHwt0DzeOqL%2F3T3vLuMI0RNsutlKaG6%2BhguXZpOFgx1j%2BOzsHwIU%2BP74wNGvBr5b0t4Euv%2ByRxWEMDTmxwKoq2WrxT05LBGDz4a26wZgamYUQIx5qYKO%2F%2Bg6vMuChH6UiIHwMI0uzpYAxSanLa7OeBsfn%2B%2BScro%2B9pM6AATsrrnEHFadBa7R%2F3H3kS1nuQ0CQI8DDpySo%2F%2BJ%2BhSWS6fvQXuqV6HBkFXb3XeSB9eK1UvQJCqux43y%2FTeQNSVPgUnk2XNvsYwByI6kB1D5%2BKHHguz%2BZ6BhEyFHTSLc5qEOrxyyseMEzkBDUgqUSL5V4dvOaQd9SiT2V6pzrrLx3LlYuoDOB9aWR9Id6xGoaM1NbM8x%2FO%2FZ3aj9y44ktiG3R322AFb45vPVmedPR9dh8MWXFydyB2PjctbRx6u3cCuGEFs794avCyqeazx0ZxFH2%2B0QFyHqP48zfSmcnipIuxkFnNFJLETachwvh4KgCVvxX6Y%2FiJiaJ634AVRK%2FyCFlZS9v0K8zQvTFvthsv2GsOdeZKOjS%2FpU3txQPbY5SfB1gzwZ6dRIopoVVWxr4qWevvXaxjDigZHABjqkAZ4iNpub4VJL2zi%2FE5T71Yllk9EEnB15l0U5Y6Sif0DUjW1ZGg6mkNSFWcwDOB6%2BqT%2FiUwy8n9vMwYKTY%2BlXbbSJ7uO4DilvUxLsZRG9hOBjn87KqEZv1QOhvKbEPMAmIdqUfC7RwAEn9bY10r%2BHmqEBRdmTn7Jv%2FUyyDS84q1%2Bo5hmHwDK3yFG3%2BEzBNE818E36BhUr7Kz3X88N10pETPJ2JGte&X-Amz-Signature=a3bdae0a91e391e98b28190c476fbd3e28ba0ac29234b9925909aa43c6029336&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNONOBVF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDVPKAGeyqY2CCVhDsYZYLLoFePehUZIBJV7fNFPDv3iAIgS8yjOycTgeI4bpOdwv6a1SVieonR6YREIdMOYWt%2Fb9UqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzCZfVWzUKozckIHyrcA%2FkgY4MXZyf49R8lFfhBAlW66NNPVD2lkORU7nsImZ%2Fxd26rVm29GD9VWXXgifS1In31cZEXtrPaulwZceUIEvVqUnBELSbrEmGMP7zD0ffeOiU3jGoPDi4Bg8UJ3SFLoT81AmzMsdQZolAcBd3LnS2rGRV2bZovJQN1Sqzg8JEw3%2BOsjQbXAn2KFEO4MKMlc1BhxympXL2Zjc4bDwRGidO%2FtcMin2Wa23yShaLKQ1%2FwpovXpgGZ1vq6QNFF%2Bk7WxSFLpPktMs9NJQgcVCDj2KBe8MNGLibhIlT3gFEsnpMSOsLqNTaroKEpPOOQOcv9nUIf%2FjqI6B3WaIgGNlg%2FYTYqWyq4eGdLO9eIJ4Tnan1HTVNdcD53qWVnoQCueQRbCFMQmXIC0vFhZ9jAgyW5EOj03yplPZJvt5bYVrzpd2s7DmtIOS1lcmq%2BiIj7DkNrOiN92XET4L3uPH%2FYHGiN%2B9KGlg3oFiMnyGxDNs%2FCs%2BnsB6iu1938XrPsM2IOhYoM%2BpxoqUJmcomOAM5zxewjxSl7xA5%2FS07UOkcEKSWgl6fnLEqURUi0dL9p3lCeGhfV2O0n%2F7loagmheTtiq4XPQCLkog9gUSBFvmo9A7MjgCGLJS%2F4mUNXKIYy2NxZMO6BkcAGOqUB8XD6DQTQJzcIaIwDdYd%2B7tViVaGSFgwIUdO3i%2BaWd0VTVM7JoBzFx8sKEj5VJ3yf1vld0%2BNoRVnDm8DbOus355eEbqsC9wk0iaIGobQlfikOaOf%2FBig%2FG7Z%2FqKdNmqHLOJYCfZkvimPzLfspQDiwXoql2i%2B%2BIQ4%2F7ANN5kXX9TLomBm%2F4tmBhH%2BcCM6jHRXH4OhypHMWUtzu1FKm5s2SQvcVgwR6&X-Amz-Signature=8d2ad1c3b05d78a717d6691379156d7653b1d7cc603e2f929565cf9bbe278639&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
