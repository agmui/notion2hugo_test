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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GU3C6G%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD4o7w1MUdZMsDz%2BF29tD8Y5QM2PHeEI2t0iZ41o8veHgIgCaEJX3cFEvWfTdkzOL2xcjEol0AnXqFKFprET01Muqoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKvryc4%2BOegq2TMZyrcA%2FpB5o9%2B0KD05F6CeaaTCtTdX59bT%2FEckJmeT3wzeBaDW690BGDzEF%2BslJ3FOhlRdLp%2FaYanS3l8gt6t83oj49KAnXWjmLprrS1EJamn9FPQie%2FSLPnDhcKVAMnuFotlMzV9Y6oWx0Lu%2BKQew5YRelFREei1ljpOoFCsWBm2SyhrjsjoEL41Mq7dNieNeQCnsMIR2A2cw7ACk9UVYN0NPGPVuQHCFtHPzKlr4IkLs3iaHBWdYW0qL4wZBQG2ZxuZTRgc4KvabVRlF%2BgpEpnrLrm0A1OAmCvQULCbfdpHq7NvE9Y3gPtnbxwmNSHfwbwlnP3oSY46R2X%2BauLJCnrXry9O8Vk4px%2BUjGf0X401wGdAW3xRUMU58I5fRCtNNG19CdJkhLd1qbvhxQLsGMszkNlpEnbo4uvlZuAFLUGu7mtnVZyMicbqIJVY6Gwa1N9FzWHrW2OLL5mJ0I3EUBCAvAFQIG75hX1fBBVGq%2Bl9uFTFK5LYJe2ZS%2Fou37vS1hxvCLSX49GcKmZ%2BYGkGUbt4vcbo29jZUDmo%2FMGwWySi%2BIHOXiWqE8xEC56yoD2AhHTfa9YvE%2BZ%2FMSWV979zMi8oPoTtMJIRUMvUNWuANZZBO2rE069%2BdaQ8PzwlDp0xMPHT%2BcIGOqUBn6NNnVT2gDVB0oxXo61nDs1KuxkZdY9SAj%2BUWNMTgzKF2igK9oXcA99NiKr1aOlSEHjYY%2FQzrwWgDUiNDlF03FPd9DzY4IhuN0VMOhjcWCL4YEgKFeyYWhJqMOuG6CYnIEDUh6usQZ7VxMj%2BD7HVVHigIyDwUVkm%2FU6b1%2BMUwrLJ8vKfP5aUfEx7xoaufWgIY%2BVrQ%2Fq8p2464W5tW4%2B8xUpEKTU0&X-Amz-Signature=7690cabbc19fc2e31178b4eb6bfa66bfa2ee79cf79d6f6ada12949aa7b627ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZGWRFQS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCkjr88UUgP6u3CPDkZB%2FxrsnogcWNedDZflb2RtHKILAIhAPEFSypJsy82GHJmNi%2FCpL%2BeMSgBTeVnO4imL%2F6SqMmSKv8DCHMQABoMNjM3NDIzMTgzODA1Igy%2BkFZ0XlY9n7h3xfQq3AOz6VYD%2BlyXEUnKSWK9bZBYHQPrBdanSxolgauk03FDJQ8fQpanS%2Bix5TwWLF5%2B2C7KLkGB5rRxCK4o43iwE8Ge8w0RR7CrhuWJvZ%2BdqU1fk0R%2BgCMw1PmDjNxjLdBiF%2F0tBsgkWDrtlCzsjtI505n36arVj%2BSHgRONowXKrJhk7VUk%2Br%2Fy%2BU%2FWANxbgdb2PYMM60mwUcTQoNzxU19qI54oYaAEpIsdBlJpqW60SW08qKbWFRPYXQuCFnw8rI1luVgllBeMFFCV9DMTy0xOzwpqMAGSPShw8EKZlGl%2FYlEjt%2Br83kTPN8fOHAi7e27OmJ4VsCBF%2FgmF46YwKxcATaIGj88QMhbmDHzE%2F8KB%2F8S0jkyJiBw8LaVCUiNBtdxLQGkkSqouYpE0bBkbZIM7OjXBiWumS5tWpsWA8glSpUuh44uiz13p8MqYuvCu1E8JzkzOqTJXFurCBn9jMRHsrbtK1Pl6ICPgvpLBez69AjyRDaMVRia%2B8UhlzMohy6CnCyI6lTcdKvt098hbX%2F0AMYgMPDbl4FWmvkB5y9V2djSQG7wyfGR7M36YB29duqSs1qRKhLeIRnX9fKHSIA%2BRBP5Me%2BE6OAhqsj6vTEgX6Bo%2FUKNDWVJOONSnLayR%2FTCM1PnCBjqkAea%2FULBDZQHEn%2B%2F0eF7lZmJ3SSpISMxW0K1o3nq9%2B7SEoG5QApdFQMYXU6ngT6IUT4o7FCKiqn4aylz9mam8PbVy3RI4PzocFiJ9qceF95PQvssSczQpinR1si2YAQIsALHARR8F9DBaWf%2BYKgJgplat7eYQ0WqhHesw5geBC8vCFS%2F1%2FFSHggJcoddnRcM57qmN%2FEh1xiSfKG2D4GXAWsJ9JbEf&X-Amz-Signature=9c4b867b8fe2df7270fd5fa80c8851bf8591cee7eba5f77873b1204de77ae9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
