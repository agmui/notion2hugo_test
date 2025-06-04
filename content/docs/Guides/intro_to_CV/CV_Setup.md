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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLNHPR5%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCID4NBner8P0k63u0hF%2FtlUwufKoRCV%2B6fyS7VHYmPjv9AiEA5Fk5rzy0iAnae8Ku8hU3xF5S%2FnLC1svJ5NMofzK1%2B%2Fcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDM0VhgREIBpcHngr4ircA%2BQxW%2Fv%2FJS0tvfWrnl7uK%2BJqRu906P%2B%2FtMbtH5Ijy%2BEWLxT6vqY3FyOwUkzPg%2BD8zmK0v1mcN6MfR4mDmWQE9ejSWQAALVGeF1itIjyYVED9%2BgE9OS8Gyu%2FM6w5x4ks%2FnapzD2X6EPNRJUhi2JKJCFK8qsaCPYIlg88yZgIG7VD%2FM9iOSMFWpH%2FDyg44xYq3MBGJHK9WQTM1jSB82uGEseqZy%2BiUYF3vl%2FmzjIwKBYbePToho%2BT7PIZqW6NRSIQDjR93tEe%2Fwsx96LPs9PMHmgSNtDAYWPk4sDWQB%2FXk57leEpvF%2FHQM2VB1DUj5xZEHRdn1%2FD4mX2zGi5z%2B9dkKSSiL49rSMFRP9RAOHVjwGp64cu7K8L2xMkus1R2Iv9m%2FCk0f%2Fsmf8CE8pIa3C%2FK7rH4avcY22QTDV5VbvypxdnS9sJA2oCdpYA6v55xJCWFfsEROb6s2Nr2bTCLr96TpwOjntmAruPk1wvI668pZ5RG%2BUXd2rBskXduUPV%2BecQyvL3KpPFUPpBw12YU8b%2FO4B5ZG3F41yT4IlsTfRXnAKZsiQ0GHIv%2BqJaX0Go9CZy9c1CrF7upz1DOZKn1ReQaGAEjF83pwuqQqmW7jlFf7McgmWr5164RCr1ysAk8jMPPg%2FsEGOqUBfSvbzQmlBAb7kGXNzQSbHHxdQbaWE54Rk9DK2QPKCkMdYSd3POnm8PO1OCFkkGQl5xDhwPrdWcFqcFJR8XaTJeWsA4%2Bqg1HzwStILS8FQBfZCXVxAIytowInCZdJuLILee%2Bz5knzQ7QX7Av6fSA%2BnGPh8K8Vh1srbHhO8MJi8aCTEhNWvM02I4p7DxuupPf%2BnyuBDUWh%2Feu0qUzQGCHo8zY%2FmCzA&X-Amz-Signature=2f7d0ee3206bf165555e036f225fc0959457dc44cc9d87ddc3b2211b19bbe7b1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AWRDL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA8RDX0%2FVUR6cGqDkanWwtCyXCQLz9NJx%2FmlZ3PdufgzAiEA1RPxDBdIXBqb87D1SiB9QzigFYkOCSZ47k7Ncis%2FdGwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD%2FN62J%2B8NWgREkikyrcA2MqfZYnIlmfD3tAtwB6xqJdX1vCKw4f940wCrw5lXAijpyuTzv%2FkpDNNPlcPG2hWL%2FKshCiR4DFBwaGDsM0ELNdr%2F6MEf1li9bhuOa1bafwxsbQLxYmGag4JZUtpz3Q4IKD7FtEz2QG2O7J%2Fa%2FN8sMKN12Wm92khhL6oZTIUJ9YFMwp%2B%2BxzUqFKs5DAJcmcxd9PyKJYHCVXYVeby5k0P%2BiTVjlif5l8cOUSpbAY0S2muArGNReN5AH6OwNTk6oeOsDRaxCYVq7358OtOjLQR2h%2FB71tUCfhcosjbRQz%2BriKyAXKvScocpzsA%2FgB6LF8UmV6jTPVxSOmQeJa7MCsVsYBN%2B2%2FNG%2FRhbNPuZg2YN4FsqrWfTqmuyTv4x6ySvGy8CRP7EwXxuTrZoN%2BVLdVlC6MLa%2BJhStU6mE2XHyHJOPhy2yRrJt45q2BMYTagri2SiovrQR8mkL5QTlIvZo0WbCcBX0Cm32I%2BCXE3XVXmB6M21vfmNWf5ebvnGlzjEB1Jz7Sd2f%2FzXPvZMxP2gn6b9bk9YNVzJeX4Cidb6%2B2oXGU4mg1VmcLVps%2F%2Fyj6qcQ3WXKBMKopV1zPGjQc9v02io7Y8t43jKw1Pxf59vVWMhNd0%2B9Bw5VsJlCf2hRDMKbh%2FsEGOqUB0e8W9q%2BQobbUG175Y0Bj8BPyIbK8p2pieualo5uxRlgFNkp%2BOWjYYATG75V0y1ASCxDNnxCYnqciAuDXMAUDS1aVOlTMq0CHwX9ulAfYlwNqwPTwzZrSsylQ1wiTGFm2LkUd6AUV3qu%2F%2BMWYDQF6I%2F%2FCw2fR1eRdPGqfxod4qpedU4ooXk91lDcBb6MUMb0aFYS1NFw4XmpbR%2FgLiwTNvzQNrcD1&X-Amz-Signature=cdbcdf593832c296ed6b649b782a64e56187e29eec6f015def64c2dd75625e46&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
