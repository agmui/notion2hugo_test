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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663QWBOSL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDhPrKz4tph4RkJFQVDcBo7F4As%2F3NeF7DWc9GdhhMhrAiA7KiotJZpMJspMsmKJGPKOeSMTQNL6t7QbdNGKsrB1HiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIBIDwXEGv%2BV53QQ1KtwDYxyLrbBg1XIT3PEjHBbQnTjpYhFAwjP4%2FLs2ac%2F0i%2BCRkhaWg68cUdPA3ZLUWo%2BkWjlvcbgzLTYwLz5htfrf2Upj5LdfaRPqVARrVKRPult385qNwuRGkmYbswTUlTbVcTRzLxyngnE69%2Bp44NE2if6PUfMjZB3solVQpjtD0c3VrNNIwJQxssZVlMXDHWhzPhnvpnaq3PrSky%2BtTgAGV1PvBU05Zj29ugkQf7BRE5h8cupk%2Fx2K1dVJUct6IpazXDJ7Z1kQABVvyoioA33Gml8fFFeShcRLFZCeSIVl6qf6lDyhExf%2FHWxdoqXd1sGlz2B3ZpLqOWYoMtiBijLzDFZLEXVj5hOAlGLRWYD1%2BHV5TGqsJ9Zexj7s0xGCzxrowPRLiE%2B%2BoIBAFNz%2BG2vWv%2BTPqaOFPZwH1DCh%2BhaUEVgT%2Fj1XiJYzzpAj943KoJFEmcMSnXbwOl4iVn6YWS3xxVriZE%2FSVAuQFKqBRPkSnNdj%2FfSfl0hafvPsakMitLh5ax5atUGeg1T0A9RRTqR3LJbGGJKnKNDZjEV0LAzsQlO0X%2BzpnGH3iJc%2FyPCbop5EbziTa12ReW7C0khNalLURUDbAt4lAaVqFK7wnCeNgiIuO0BdGEfIoowzSQQwlM%2FowwY6pgFh5%2FFvChjx6M9WgyK7PlX4YNsDvUcyCLQqhdvIMErykWkzUO9MiaBVJmKYkX14RS8xM6lVIm2N97Y98jvHn0vNOU9xh4aP2W03P3nfUj7IS0R6XJl8DNVnnKG7%2FpxRt5NoKsS2i0xDXfC4S4bSRnuobdoM25OKLfgiuqtYawDnC6BtqPiAC7PyBZby2n8%2F5D0Wp6m7OBgs9t7NZ97T0MRV19OccNnq&X-Amz-Signature=4ea327c418a4df7f9e6de029e950899e8b133e2091f4477ad08d81084b25af5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMP6KQEQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCBVL2PEX2CCD8YK8ysFI%2FVJv60RzyELz16bJEaCZhdQIhAPUWsoWJwL9VR90ZiDm0BDYZ46rCyywyVTiIgiUXbPr7KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC6yHkPH7Lafhvg6Mq3ANbkq8Hp8KB67eTqKzh4Bye1Rk54fF%2BKeZ2Ippx3mB913TIsWMcXZZ%2Fuk3iJnGTsoOUL4epZSs%2FT2N46CgjLsVCoqvrocFxxKunJw9sTBOThfkoAVMjZYsLaxHaTYdIFT8Iheiey1r8jbkEv2XbvUuUQ%2FXcuJCqdubfZfBI7JBhNrGaU4zzKgBfoXY6XXXKWlb2Aun%2F8BtrMunElvfqGnTmYBqiRjCTvqxv3IJn5s5HMNiNwMPLgEtQbt98gIKS%2FY0R2spJMJX6aqupwtVeYWoZKfsvjl%2FJ451b%2FbbFcsy2CZ4%2FBUPHRkUeCdZySKMomBtcE8FlzZvAtJOO46VtdwOJFGgh16dbTyfMEF9En2wu8ttbaaFsxk%2F42alhxTAMOhw257xbpqqEQiTOkZdK73ux5bUD2nyIvLSrJwdOd6WJoBApkOuJJmFCL0EOGmXjSdkFGTYzAp7LnTOfX71QIYRPimpusm3eR6YwLPCZnajA2kj3nW8lf%2BVnWPDIdGLVrPw0V2ug7x5G%2F1p%2B6SH5m5lgLo%2F6tqV%2FSEhEVAl8nCwYQkpUI1iMPokz90BhgoudtOkHpUGv1HyjMSxuIL3XxkWoD786gHRBuTnySTQrlo8xrOr1388x4tsuOX4oHDCM0OjDBjqkAQQe8%2BdIqVyHaXhnUXL8i5Tgu4L5Q6UUUl9L0fD8JuoJFpJR7gNmAnEsTJvV%2B8FgBeR%2FzLl7Wq7qyUKA3LpXQW4oRBO7X%2FYzQrNiEeoxQR%2BSyP7HpnM8sM7OFGLBD078Nw%2BnIpe%2FyUNcrVccbn3z7Kg5m%2FlwtQKr83nZRMWqsHfIKAxAR5TYh%2Big77MluGySNl%2BYjogYJFFPUP213syTsU%2Fr9gLH&X-Amz-Signature=27cabae84dbf4d5c3d1e5480710e0c5c2757ac980592d4d205a79015d59174d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
