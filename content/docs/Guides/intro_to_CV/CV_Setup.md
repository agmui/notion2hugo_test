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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTLWM3TC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmnAle23jP3%2FO7%2Blrk863HmP7YPhAN9lWsL2XSzQSawAiEA%2FMuR80eUYL4dGNvUAKQVa%2Bd698pY1riYYThKdfJl6RMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf1YQBm%2ByYbUvrNESrcA8rWON0zEW4ogQYTdi2ICVpmS7bA42w0ubCEMLc6h3EimFfA1W04ldX4ciIgaNQKCz3bfaRG8mvkEl%2BGw5TYwtNnZpYDXExMI3nkTEitrlokqWo7qrEZlSjOxCV%2BZ3T7%2BdaEpszsnCToxvOl160VsI7nkTyJUFyw%2FasYQUwuzBqIAF2fm3h16lUj7Y4yvHWADzrg2n7WFlZSpR5jl%2BUgjdvtpb%2BkvMLDAxUlUV2FNo3utSyYafQNDbGHCnlZBtdNyuvCOdd55NRAyMqcQmpNGA%2FpmyYUyMG5N%2Fgx%2FZNEyoABJxyL4%2B0DSxlJr0FdP9jhz8DxLnElguMXKL1ZsIn3nfHkjR35cjiajvxgrI%2B2XFcqbkG2V0uFpBLkCi0tIUwN64T5QDPPjZUD5vRATVcmTm2t0683wmp0EaKXnZD3feILI8nOO5z73xItQu7IubmRHTqA3%2Fu5%2BNEPwSKUtEq5cuERY30MH6uD6xLvXMt0EfxZQH2EUXvJuTVAUBlr%2BQ00GQfgUJUkMPFP0z790wprU93FhY3L0PHOhGEN9z7mo%2FF8IdQEWrPvV8PkneoJOByi5fDp1cWuI34APEg80OYwMOWpkh4farDOHLkCD8ReKzhXmklceNzCkPfO96k5MLTEgsMGOqUB505wipfuF2F6GvbJ2eIB5EO%2FbDZBLNazs31BC36IN8mSwvsqJRBeknQzxC5ra%2BpNdNP8gGGNSmJecAKQdyy7z7UJ4JKI7ppo6lpm0jEkd%2FFnofKZWyjSigYRCmXiGMoLv6onoFnlmTuom0sayXXUoEDFNNxe4QsVO8aIY%2F8MG9iiILnUE1wfN14jnwooj7laV%2B9IvS17WKt4EAX1zIvFzixkNfIE&X-Amz-Signature=2f016820a666f1b59864a7b73c425c685b052e3c6a72ee527d2280f1462968f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JEFJLB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Qit9isR5Z2j5E4zSN1DaSPUVyYeaYWvBHMp3x0IWbAiEAjd8oh%2FPtK2FNiedL3VkK%2F%2B36ltIEdD0DyphHP%2BYZWRcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJWBqicH3Zq9YIuISrcA19DsSixy16DOlWf%2BOsJjsg5kQIzczMdwoiPpb1wTM5MTJrvXeu%2FIlCK8UMHUMwXgh8YSm%2BcYV6NAhKDROoyxIAWCIcnOWKJX5r7uJhq%2BQpo6cRalseKq1ewoIz4mWHO7%2FJhnmdOtlbuZTSoNGGTAV7cp7RCsiLkQjuY6HIaTBI%2BKM8hUocmYj5oOaQXOveddaCV3SA8%2Bp4AhCjW%2F5EAf7G0vMkt5pRvAI%2FQu%2F79IhZuJQv%2F97TWOmAf8wxSCXuNyoDde00fqg3ksDh7BTnN9Oh75%2F4j2IH7CBqs%2BFpkFL%2BwkQuHgyvcZ%2BiKnJWcimJ5qyoH3tUOqFJeMWlwHqnIdstvuLXTcCM43a%2FbKVOYGNUupGaIA88EwRTzTICicx2tI1qdmb6rFpyFY3CcU9dxnUERPO1kX%2BcT1dTU2fZ9UIUxJCeGQ5niXzgztMGHYmVK0qY4JrsDJC2RqqXBsqojf32d5jCF%2BTcGtpxNs3kJI9kwCYcYebmrfjZwBvRnIZ8nN7Ug%2Ft%2BIj18BjbX%2FY%2F31GUYeIsoccQhDLxEy7dMSY3V97NkZYBVo4RWa55DvUdHsR0%2F6E9yTmbU3u2vhREXvc4tVmCqWoTgN9uI53noZAjlSCxc6qqTI2ACXHy%2BNMOCOgsMGOqUB8%2Fmg2lDf%2F820e5B2amBJgw4kq%2B2HotvVlqsyg3Zat92xH0PhWrPznci5ahcrv2s4foomsNKa2U30pITQgAQ%2F5MVhDZjnEOD2ON2OXKFkEH4K%2BcwuMxkNtcVryAhMfwM%2FRur8HDnpLcs36M4AKS75JnOq376i7NC4iDQ39hNaxx6CWedvp8NJeaO0tMeaiYe2AO1qXuTjtZQ4a04rFqtj7d35KU0s&X-Amz-Signature=d8f7d5b22b56eed9b1b980e96e14e3b94811bd59c38864355bb90203882e00b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
