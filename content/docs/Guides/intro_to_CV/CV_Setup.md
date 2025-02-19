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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KW5YZ7Z%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICqTWQfTIISZSxDzqkM4uWEFJVESLtEGG%2BEx5GIfdxVPAiEA9wV2R6diEZpvYHvp40z%2FPzCoRe3wwWOhGhC%2BpfNOHScqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBJKPSo58OnXSS5lircA6E1Qq8olMBmiXYYEMf0Ix1JUqq%2F764UZSn1mv7Cdex4TQ%2F3REqr%2BPSRU5K2HoNvG0He6NX6p9CZXL1mR%2Bb0N%2FDPFMWgC0NxtHp%2BC%2FXJUCZAlhJgaargB0oC3kP9k9IuN5yvt3uXKEaDEgUHFUp9ufwWU%2Fa9Cz6RR4NXGwYUV1Usz%2BFPR8BcIVOL1M82a67jsb7zlTSFuZZXHIi1tp3xbt8DNM4Gafh%2B36TFm4kBx4%2B%2FF4LNDrDkq6D%2FDQBqkziqK0Vvktrfu3yTfFjI%2B0BpEMOsR4g4bHcZ4k01BHTVb%2FlzXAQrh3WOefjovHxFgNBWd1MslbIbQIKDAWq%2BdJ1ZT1njaDQCSwR4hi0V3nEWxnN5RUN9PmuzYrDN%2Fabq%2Be1Z9rbCRraPSpdInbAVtuvsUMbrWCiKoJpgrg2zB0V0nbupLbcsEI1wvtqnog7i7WWENq9wGDWol0xcrx2G%2BSTmtIxB3vKCkMMG30xkSubJ9nS%2BezJfYqQUYHifSdCFUPJacJuUaAaLYbeCAf1NznEK2FfRFdwzkU3qNqf2QZrQl0XCN3pmJJhMb%2BKnC5bxbwEKtanyCqpauHxPAhe8%2FLv%2BB9MLLdbcmExngSFqrh5mk0E1aEKm1q8941cq2SRlMNbo1L0GOqUBHJ3SU9lq%2FbFzwPfAFXFyrzI2vwCDAmHmeXSPydlTFd%2BXfh8f4ClDnRQOebnTTvOjs6srP2OMHi8e8Iv19CvN5YHwCl%2FbeCUboEPBOH6pTxuMBsAfaZh1nMP51o%2FjKBxMH45vEaxWeqeQnI%2BvswNLo%2F5yux%2F%2By2GS1nHAn%2FV6YhhYn4sHrSFCnzMh8HLiAhFOZiGO5mjW5QYdCdm4oQxl5wpj1c3j&X-Amz-Signature=a11596596abdc114284122bc98a2645726a56e5cedb9100425c77cf64c66c1d0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNHMUES%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC6CQ6ONp08LCyGrGgP83ACVARTZdoibeAJ3KEragA3dAIhAJeq7K03AwLOPR1E4NXBuNpbhz28z%2FeTE6D1zQnMSuG9KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPLLcdGhs6lmV5AqUq3AN%2B1Rhs9dy5JQaIhyUCJLHWDhHyn0vz3ZgzOVpVmWHpfeE7TAopJeqFHxEHSjBit%2FClfD5j66jrCd%2Fvv17UQcFr1CZgFCpviD4hjQpiHBHSOLSd%2FaKmPFq9hoTU8FqpZafkwY3aFELZpVvu3eRaXVS6qs1nsTj1%2FbohQCBpyrm7gwF7hmHV2X9eMnkNHkenuHcbYPiyvZ0QUV%2FRv87qTpezYWskE4p1UOZQuWUeZ2TIHrc3MKzUcJ%2B3e2An6I9AwBXv%2FjMH3OVmRjM1c80HKvKuw%2F9XhtQfWfwgs%2FK0o304C%2Fp6yd%2Fk4rfJhFed59H0Q4NNkgsLzBv6mdVTfiyEWOURT2FI5Z%2FZezvm%2BTxCx6NRn1GZnL31LtSSaJwwET3JOjVVAPO%2FtOsXsfx5c1FpDO8fhjnaG3fVqZ0PXNIyEPpQDshhwFojCJZGf3l5QZEssi1sEy6P0GGchj5hEDNKIpNy%2BUwnWchZ1NwNHbMMUFgQYSsQXH0uLN26thZfRTu0oVxaRGX%2BcMB6zQAuy0T48wlihhuHcAwxj%2F%2BXUiD0llyqoXgo4kyDyucT%2Fdc28bgf92508PJKJwUZgAkx5y38vYnKQAZ1RBqxntYAqLkdOHPT5knBIQkBNaLoyjr0qzDM6dS9BjqkAWA3se2nikFvX%2Bo6jEauEdnaGKyZFQ7RYXq1roB4eeb8dlfINSnu0DjvfEfT41UTeXoF4vrQ2ZHJx3rA%2FkYjFNu9ef99bCuzrTbzQOfDaGasycxODj83cNvP1sf8%2FK8x6wxa%2BbnnuVcjLBtIYowg0%2F9Nl1Ef4eoEL1%2FjETEhwVlavJS1VeL9zUb8lrxINNbBiiURfC8eVS0I4GUdOfviqPdADRaS&X-Amz-Signature=c7320ee9fd2a6d0913ed4009deec88c7f6e3b4322195dda78f03338638aeb3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
