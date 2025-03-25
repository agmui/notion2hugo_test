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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z6MDJIQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiOW925ewoFHi5vVT8ema77y2DixjddQ4NpeXVHBClDAiEA34u2C7%2B4UlbMGznIb%2BP2h0hsinp5iVmOvx0IbcIaNA0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDN719NYdl2jO%2BoLe2ircAxneFKXOdY0NDQ%2BtaFM2dNS0EStoeHvemewkFd0pVcjvYTMFKggoJsRWmj5%2BJ5YX0r0lTwE4SL4a%2F2rcC1TSb1yg%2B%2B%2Fy2oYsJXEvnxiXJerir1IxPO7PnGCGP3Frw3YVhnD%2Bq7tnPB7ifX8VLIs2spIr4LAUtljQn7G32lnearp1nexkEe4kaZ1JJcJHUbdbSkq179R5GqS6KM6eZxPSvk%2F%2BGI%2Bwni%2Fqh0lxotZKNJKlyFJuGO3xEMEJlm1Qtm%2FxbUqI3hw9GeRwmvYfJV2Rf6vdhGWayY%2BWzL7DzAEPvRzLJxMZn4H7cThDDFPsgk7ghKYPu2jikESi1fqUj5q4evlPVDRp6pO%2FaRY4jGEzm7lnt%2Fs6oIl%2FzJ3EIFnWZPKgvSkLI9%2FrW%2BP3bvkjuiALBrYGGl4fwHKPYJysmOffrVjEXr0LAxE3rTc1iWbU6Pdlj16R6srDepHj%2FxGcr8Njd9SNbaXt%2BINzWhCXdGTk2hF0AEEtev0Zyjp4cphmuheOkM0YhCiHn7TKC7SSMWpApUQFQC5VLqKAr0EJjT8u3n8We5MjmnVjnqsjhLgkHVkMDnHt%2BgtsctuewUkNMUMYbPdJX9vrd00ROQfHcaiZdZnlFHU75bp2rbX7o%2F8oMNqji78GOqUB%2BwpQy58MrHTqVHK4AeEFEPu0Lgqa1ILh4Jx5zfBFd56R8T8YI4P%2BTvZvUz17kHeDMyY3tiDqXKc63g%2FpAOEKLykneoImS%2BZNzPHvFIXOng2sprg4pLfQz1DE03kFi9qu3bfU%2FMXPGN%2FQ%2FnZaREuxsRIbsTLakfx%2FGGtpucJfQjLYb6Y%2BSDzaSTP65i%2FwPtOM5%2FVB92vZYUnY%2BX7JRAgKgZzBANsl&X-Amz-Signature=c447f19889f86c3fd46cd1058dbc941262e36124fb1f604e0fa14f16d2ebf71e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7IV26W%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXA%2FgvSD%2F1WDvFtnYpgrsrWYN%2F%2BI5duFkcQjRFHDYmAiEAxDD0dQq0ih7I2rCmaOR%2FaoZLQAuZG%2FAxN0P1ClJcSIAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNEN4pnfYJ5nzYGkvSrcA25fUx145vSxVmvrDYtrlFdyg8wMLo60Bzid%2BqvOHaif3Xl5L1NTHptqqhqkaxe%2FgTn5GzJrLfs9TY6tw7%2FBpMyUVRJlVtUfj3D27LRW2SLqcV2OJrHkVKiCpFjyjFtW9HfPDF1Hr9njRDFjx6nd4UXEy1iNajEj2hlBe6CPjrsZnqy1urA0iKFi%2Fz981e9WxK57i2bUcxykT7KvzEGMhhdpMNB7Ybvlp07W3Z%2FsW%2B8ewiQ2IMQx%2Bhx2wwF8AnZIdSYKyC62R9K02FVQGWbK8kpLDxWX5264pwvrksuJ1jEr4lr5JlbUOf3nbN0P%2BWCoDMyLD06iejbWvXenxxrm%2BTcLohP7ZnukcmseEEYwsVfTPwPCuPu47hVpGRCH2jwWeWD58DKVT1XXDWEtad4g%2FLscrCPHwk8ep15QrTFtJuwAkvzZ99hDaYiWGhXVzcug6P592g%2FKdK%2FNfEc9%2BsHFNw4qzPBdFJlvQtIAUqHxEj3cV3aYL2qXJoBUnF6f2nzpMRVMaTbAYhfsjqSxMyfXQqJAQ1Oe4CeGqv5B08q%2F%2BUDjgqInlyfn20nmu3mrF0oomoNtc4rVe%2B0PDkO8ygdoIuAaXeaSW4guauB1kwwnUFeZVokB1QgwuPfKHKK9MPeji78GOqUBjMU3x%2FFjnnawymOZDsQb63knfil0ZDeBeEVFO6n%2Fg60bWxNTymaN2P6f%2Bgh9W3HrjeI2%2B4DfZn9m99l4ekMknd47ZYfz31rON1iOa1Gl1tbG2z3LtXoCC59AYk%2FDtA2fInN1ceaU6xcTN4ES%2FCqc2RT4%2BayEfnK0NEcML43niGld0XxkPI7Cvu87cGsyL6kod4flcVRA2bNKko0NxI70glBsD%2F5K&X-Amz-Signature=da721f569acf2a3c65caab6ee26cbbd0894fb3c29aa3b0f1197d801c74b7835b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
