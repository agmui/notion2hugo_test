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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5YD44OY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDyy6pY0%2BzhgZ5ONNi5bd3y8WtE5ns8OOYKaXFarfvjQwIhAMPcel2DJyoyb1Yu1Mb7AStOEt%2Fi7Ua36Xk8OBOpzfeEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlcQZOoe5Yw%2BVop8gq3AMupSU%2F5bsVALa1OaCAL3QBZPuLsMABATPVC%2Bj1h7UA1VqxfLBqIPAZrwDIqgeWlioZD%2FTW%2B9TSjM9tn67hg9V2nRjuAFMx4f2QQiW2vhDMt6FNb%2BMmrnamxALHPh0WOfRgGFDAtOwkag%2BQ4oc86Ri9HuAOsZRcl%2BBNLQkH2xEhfGk%2Buh32imNNOlQtizUeIEMcpRKgKx4OsroFA%2F2FggCtmozmuiLRjQE3juHs3xqJ1eLJ9GQ4EXxG8tOWToxRJ19kJctL%2BasEmMkzgYooQiF0yJacove2uRTQHIGPfw0yihQIF1O8zDaHZ%2FaT3QHoGtgRe3h0gH5rY%2F4ZMIEMOqNRRMNWM7Sw1mNXUhfTmCvDoUbpUcmZGXDpqxRgan%2FJHGSqpynKrYHCwGpXNYpyxg9ajfCjo7nNIounU4DKRRFLQwMAqWUkabjt5httbM28C%2BciM%2FeoUj4IB7qZy7Sx5xVvrcny%2B9rie7cxJuRSCCvdqY8Bxyt%2FrsEUpDg6BE77cGVpteok5mh7nPG63hnA47mxtoMZVd9DfSO%2B%2BA9ynueI%2FmRwbkQTAZ2X%2FtDwQ6h8ZIPlCuemZIMxFI0tAktvTZJ%2BldW0jWyRmOqIa7MdQ%2B1XpSL%2FJIQV3UJoeARHNzCk6czABjqkAS%2F5ai3Skj4a2Nm6DTJHraGjLEpVgKHnOXVqN4I0jsTXe92I9ilEdcc1eX2H45PUCaDrUN0zSS3eG6BmiVmjH5e%2BCITHrLFK6JDyWwxYrtIblj0AiwF7x6jzxQfdGRVsVfVXZlGnLiYzHBMsLHXkPAlGnvMQtf1l5uH9Az8VX3nUVHuSKWQl87RAZZJinJoQ%2F2%2Fa4P9gTJMOmxjkLMctiSPdckP8&X-Amz-Signature=27b74a23f5a562e19849dfcafa681cac4df4dc8a5d22d7582571a4b2dd784c12&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RA6DGCW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAMFc5YN92ZxSonWfMNAQiIhaInR10UqtVanCGU1m3BzAiB%2FO9UFDoJgsBrSLYr47iIvdsFoLl1hTSRqQnWp561KpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiAtjOxFVQCApoeCKKtwD8yJt1%2F9BcpX9nB841HQlMDTEP4iYpGGq3%2FVqUwd8D37%2BSGGLASiHK1xqLUv36NVq7NhU9AJ%2FnlPRi4PzuCXcxi6MfwItGxTS4jnAl0evV69OQwaJ2QFNbiTsOsFJJcnaMdK0STOjfqpF8OagDhQPBkBhz7usQW7PXDukVtWR2rOh1UfXZEp6phAbDHa5t85liuiPohILDsje149Avy67iJ3hDzvff3nMeGpa6inpyd6KqfjW8rL4UCpFJ9%2Fewhy0ELOFlviSQRGmYXNsfEdWt5OGP76aB%2BrwnJAF0FQbIy5ejN1zGPAxPAYZNdEo6OxSIVZstxCAlvg23%2F93gGErsi%2BTu2Lv61eLZ7QOs89oN0zwS7u0EnzKmVkcfUwYJWZJw6XtBXHnYn2JL4bq3V5h4wNvYPhzJuS%2Bs%2B89twD%2BfXyhJ6CfFEpB1AjfuY1cQXdGNRdG5kWZ7EkjFO0Cen6bWQb4JHwM2o%2Fn6u%2BRCfvxCArT1mex4PfPzmXU0SOGJ1P5uwW27Z4puVO0nIsWKfJHNW1FsLvONB17w6WEqSEu%2FV95jS1m6ujFjvm49ULoBzMpXZwbsbZMuVpJm3nvGZ8aSt3YngTsOgzhmGIdgjZqTO7ctW%2BnLFLuDDTFIXww%2FunMwAY6pgG0twe%2FgjpJSwUn6Bswrp2CelkAIpyMtHpN0nSwYwRdrCjsStfvjjq9CuQXBXnd6cWaAi1NSbfRMzwxu9ytPzWd%2FEl5loG1pvKB6dBRasWOX80ZNPOKbGiYrHbSCY3FsinVdD7uIUOsCrpB9vT9yYpXlDLclYTmWd8HaierO6YtQB1V3IvFvQx1GwPsCxVfzlLENvD1B9arkw8Yp1HRdhTCggFv8EWJ&X-Amz-Signature=61df3c68609d7319676a8d8bb80900c713572c0da8075b52e98964f9b4dd3453&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
