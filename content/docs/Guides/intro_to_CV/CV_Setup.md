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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5S4FQR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDoDRLKSq%2BQcMGu4cOD5UinZwNRwKRamutl94SbtN8VpQIhAJn3%2FTny%2FuSFrZnAFGVGTBdIShGtBAzWpq6BXNPYPtrZKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvKfAhZzDod%2BfWYw4q3APKJp12zp8ZFG6SL27WDHpsgiLLhxx%2FsBCSbjLGqmHTcLJroUuFCzpt4YzwcCmCzFP2fJ0kYCI18qtLnhQdanBq1LRWa4PvyV9q9EnBt7vDNCmi8mGP6PY%2Bh5%2BUySoU2SFrZ20Fm00JTWtPbYM4HMrezgpWLhWpGESwL31rxHOTMsbbBwH%2FG5qEbXLw55Zcvia4vCbd18NfNXUXsEUFvSVSZg0WO2jognVFt0nQUVKLnNYgGKC3mlydGnS82zjb%2BFsxBXvQHGR5M%2BwSaTLBALkutZPmcuXMzIWhXo4xe%2FfqGmVfiaLxFRNliik%2BfnStfXKu%2BItAE%2FhcCT%2BoxdD6Z%2FEcGCr5PokdnAI3HoePA3mCgMSJP%2Fc%2FHyq7xHpRpzgkoFuS%2F88G6p2I%2F%2BL82YH%2FxYl4u0dFs45ySJlps33HDqRkf1%2FNDU8qNsQDwteREc2swmBpL%2B4IgnZMvXvT7BxU8bKhDqVDsAlZ5fESflSz3t2Mbhw%2FhJ6zBWdsRKBbcNufBJYaBJ4fLSxNPdWXH6vuiyaZdmrKjCgnmGRjlirP7MjU43%2Fb7RlF8mH90hD%2BfiyWVLmW0l%2Bk3FQhJVvoWh4hExX5uy6PsUFbXYHHSeT8OsR6kqgB%2FTr2he3ydvBmtDCKseu%2FBjqkAQ48B6dWBC22eLBoSTxUWq9%2BRaRg3IOXjQam0KvHAUWr6aulc8u8CqLPyB9mRiMSHdqlLzEQlSXNHXMMB9GgNzRbAW%2FXKbxIsIWKWiRPFCDlj3mPhQIYh9iAkul2tAARAC6QzzkzRM4thABB2V0dJL%2BR%2Bn21BChQUz7quysDbxUyrWqvorR2rmD26DN3Wq6DpLfjf8AStY3xvwMNOz8w9jugXJsk&X-Amz-Signature=ea9d75fa6cee6500f64ccf24ae678d47b7842adf31b9b320b455e03f15b995f2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUWZ6SNU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDlivkqmxj2m1R7NXA3E%2BaWOUR8xHfw2xqeRppGo0dJBgIhAN%2FaAzA4wldQC2XXeM%2B0nSKuLLTea8pxD3nqN2ryIlhUKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfBZqQJiMeLyW7Uskq3AP9NtsEawAIwCaKF%2Bka9e8moBPSXCCMH3gzE5Jt9IwNrOZbLMoIzL0Z0cwkdphVRpZbErjxaq6fu0%2BccS0XDtYQN6gZloLZ7qpbQV7p4as6Uu1jg%2FoazJ6Kb%2BparF1iZioa0z420I0DgWl8LwXxKEVeLEcY6SH%2Fd4QRBD1lqBuQ1mhhw3LwjKBOPaiElhywuImnXJmM0L1GYHDzHG20p0ZqC9B6ij2TNWeLwvajjpHlXOrnBc4VpPXZUfz%2BR8UaUARcBg6x5OFs2KTct4DnGNuKma%2FDuIGKngS4bdZjL45lwbEeDM3HxDjy1MI8ZItysKwdoutflFozLmtCd%2BHx7HYypYRZHzOQKtLDwKdk2jD33UXdCdhFirehNF4ENQOdJhxphJsRfoFpWGjC1JSi%2FoTc%2BRXlairR1LpuJa0P%2B%2FDrNmbE7sgk%2BC6KRoDdwChwh8MEBoEUg8ooj4CyLo1%2BXffTT8fLu24w9Zw2HIsqGbwH1vtOlj2XVAqa6S1m5%2F4T67YQ1GsOSl6lPyw6sSacZ56%2BC6F6BXlo8OnSWe90PVGQWTz%2B6YWvZlqfeiffhQncrmUjXy5kH0LREZKw9Xacp%2FUTOWTT8JZ0NwnZmSUzw1NPWL32%2FwUyQN8K8DvYjTDEseu%2FBjqkAV8ytzn02oY3cXZD20%2Fxi6pQeHPHQpXBcB7Vxi%2BxQXI3YZzr%2BA0RECBA4IsZ9mVWAzeSzg3qssBp6TwRo%2FQPFhUA%2F2gtib3Xuer3HcPrLMJBDLXIJ8hoq1%2F0iKa7SUdX1N2ymYgwVlFwscDSslXlbJ65LOz0roG6nS29HQlTuY35C71%2FfVDVQfQAYiii1xkD5odjmwTQ1VBu6enz2hLWaATq2Yd4&X-Amz-Signature=e96747e0a20aa4c157cf2e958df0263488aac5298bdd05e40b3e5e12054e5416&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
