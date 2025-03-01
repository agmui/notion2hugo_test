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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCIGSQ2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBvq1TLmjMuDtlf9ct80m3l2oUycZpCmc8Kw2HTxsM27AiAoYHQ%2Bp5F6IXHxHcejqMmcnFkriyfQF%2F9TW84CJy%2FFJyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjiAyivbcZ01cDSGoKtwDp9X4gA3rHB4hYjHadoQ1fZptfHRU0ZfGD90YvMSMeT7VL8jzc6FuMoWJC6Sb5%2FCTV2S%2Fz98Hyvy1NLvxFkW3of580QWr9mkwJVNU0TYWOYivbsZaqbL%2FZtV6eyCxd%2FIuJNzNuMNWdaWOG4u7i8Ay8WmLFo51iKSmNvVQnN0%2BA4GLRYUs90o9NIb1lGIelyMUXzp%2BZn%2FNN7htTeLeubrlqElojUTcbiXcSQwWgh4AOAM4917JbjzeI2FiaDmdCH%2Bon0uu3u4zjqRSjimxq%2BfJOfKkYlqwKDODVbiA2HG6AYZBwE5rhQmYc5TbQ9s9fxTifxSfztFeBx6etGFoyfRYKWP7rkNEWZqqnoRy5Ils2WShtfMYUICPZA2Kw39GsZbaegBhK3j12BxbA%2BQs4l4tLWEWWaUc7lelWb3gPvUOOnZ0oGLFC%2BfFXP3R8vxv4SAXOuDt9OilygMBtPeKKQl9Y1bFS8PlDpEAzLYL27Vo7uH0nzmE2v0TTl6gC2%2BFLisGKs2N8jV%2BRFMFDZXyHT4ZT1PMLDx33ls5sJAGLMQM0EqWx6XBwrZW8QKf%2BE50%2FMfog8tKIzXaVbiWOoB0otgSRbh8nhr5p5S1jMZs45zdF2VAfErYxYnz35cJEgIwrfKJvgY6pgHEIl7MYf2xVcedscCgVdcpf5qLqo%2FSrIBSiHncWJZYviW9sY4%2FyaxKNu65a7So965aasbBCEXVoW71%2FQxdWT8%2BO12OiGPMyJ2RZ6g8hQpCBZvOMLE0XilHgMNS4oL3qR4mVVn8fLaZASCwMV2UjWREow7UIqFl2zk1OpQVHhRjPntwPzv%2BGFy83pIqGKr6KF07LaAVrSpYqb9ej%2FzCOAbKsdlWBjiF&X-Amz-Signature=61e7df3ab6b3c0b7d95854dd3f6e31468130999a631acf37687158c988059332&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5MIHSF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBaj7NWt6meOUk0TjIZ%2FCIrqXQruW5URDLi3n8GrH4O8AiEA0uPfUjJ%2BNTz6s19s%2FBwOW7HVL0Fzyt8ikccBT6tcmNcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXiJvr4OtyuoyyBHircA5BnVxPXcoCz61OUQSFZJ%2BzSg7PJPDwBk2oUT3a1keiMzhPa2ES7Ir95c6N24BKzC6knp9M8ssJ1%2BUdsgTLPQxAZ0Bhm7X39P%2BcMJWyZsxRqaU4VIu8pwFq1W0KnbFlaMpBOd9gvf2%2FTxW57Kw6t5xNuT5rLnHntSc62DXyhvbMl4z3vqeMoqPvmxLOWvDMwtih4jwO80ADDl6Nhki%2BUXT4%2Bb%2FUroYe4iCJI48cO29HiLoRFCRXacNedEiJbpo%2FEIZik4va7BM60RX%2Buz06APaoWmcmi0mF4cUTZqQiI2e4JzgOVX%2FwXnuPY1GuoMWQb2LLh2KsGSwvWV6p0nimDk3nstAgylIJ%2FCQ4kLekqRDpnrHejxyiXQ5kFJrpeZ%2BWu%2BmpheaR3KekDR0d27tN%2BgdvUOrktrvVdLHTzYsBU3sisGADU3ytMe%2FrL5VRM%2BwTHf99PGflJilUKfYES6Tpr%2BxzqYWGDBVGJBi6etdVoOgMv36HOdMO%2Fxefwi6hm99pbiS2iffC%2BfKL93lx5uPN9sWlPTAMJGxJQLGAhdGbK1Vxjbz%2B11h8M6O66vtYdCl7VE8azQziCmSbaFMMYpH6l0pPbajDS6u6ET2XLUQmzykH%2B0KY999n9wqxXJ1VAMInyib4GOqUBSBxsU%2BOn%2F%2BSD8h8bweEkvLkmQ%2FVRqqj0a%2BwWowbfNcDBJJlGTXnFKVwslZIgpCCYKSxixif1Qoym3u4ryfpYtKdDg2EnOwJahAiBaimLW%2FPzP4zUr3hBW3mL0L2LrUDzOYrH5NG49Ua%2BOzrXpg1tmWrL2fBmcc0j1piXeMR402MXsmju1Fdh0XC7mmrnwUzEtxbET1EfHNqE9PO4EKHSB9XndpFe&X-Amz-Signature=362f72287f1e3c4a32fc10ddd4bff9a92a1e396dfc07f98587882a2be4c34a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
