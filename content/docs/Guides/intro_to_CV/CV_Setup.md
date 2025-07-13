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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GA3T2LE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBi1jcRPxc4MBZDI6Ky5v6gbvg72hindf4Kc7ivgQ5I9AiEAuh2rSaZ%2FZ0cSWP0YGLUgR7PI8yr0lt%2BzvVOMD6WDbT0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLc5icYCGWUp1VQ9CCrcA7JjmIC6CQbrBQJ1CpAr3uyZjN35msKJE6bHYjc5o3pbW4Y5vaL4Rf61Pxi7kfWZE7hQ3my9WSFmBW7y3HtFuYXw75T97e9aUWYRsqlkjNevMlTnJUs5Fwxg8Gi1i5CGPB%2F%2FefAKmSll3u%2Feb%2B%2FbyerUknVLe3%2F6WPfLaDrNQh6qkkbs1VJNq0ICBmwl%2FKS76basYYmpm3eF%2Fm6a913cErPumSLQL1yeKODqVPH%2B9Dj4ADJreBI9U9prbBG1ECll26R3D1aN26IYUloob44F4PMrunPbfRbuzRLps0WAYBFeFhvE9iZMqH34hnFmsQuRV3wxbfvCBirsKaTOyHMkiB8XoglpmdOUb7A25X12mBQrMjylOTi9hrOaMl9f2fSl09wbAjtisAymfcL1RbpmwHc7%2BUTZFMZSumsmneL%2BT29dfnmSe8%2B1ftVnAV9GMe09eXPv%2F8Re0vq%2BI%2B6csEEQKOGhHHCzgpza1UQFveCIacEfOtc6DoJ2WUQfGwTgKApmXD%2FjBhnMJdfTRTxNrNWbY7Q5IT8NOMNsevFxaVbVxzjfE8k7Jsm4J%2FE6u2Fe7H5PX8fEyrpxe%2B3dRFaYJ2gJbyGRlhRzLk0NnywqdtGlK6myrwldLyfbVQsS4UE3MPjH0MMGOqUBChBdy0Ij2LMozBTxavC5Um0T753cAlNNGDg4eiYBb9C%2FDsOyCM85njn2AWoP%2FjmePCKeEKEhyQ6g6ke2BgGrFVq7PEHWvb3BgbSq7GbXOlhE5Q5SJmlTMQFIpEyztdEtyxcgkFSSKiEmKlL2Y4MVRUANFQH5Cr5WAlqwQc1KgGWVMSXXLGgKVUv4xrZawRfsGWmlana9I%2F5dQPFY%2BBANQ%2Fofhhyh&X-Amz-Signature=672e6383affcea0cead694e107205affa82e6284e24cfbbd234b3e7e6d5affb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WK6E4GN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC%2F8qYFyDXnvK3wZB2fDwwpCKaVK5k%2BXr8pnaxiHSHLXwIgNguqT7uXhFkIDOXFISAJvc56cCVdZPCtwSnnrChJiwIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFoLdx83cCZ65ASXmircAyBawFbkCD74CyHsfDzc1ubcFI5nEnWpuAyYpQ8yk%2BF6YSpvHKVNgL0nBFbf6TIxHjekLT0RK4oUk7F4ZuHj%2FlmgExxM77dtJ%2FCfegrRaPNQtAceLmRoFEKmf2d2wI4G4zvWZPtQJDSXLWrxnZBiPMuUHgi3iF%2FTr2UnfTfFd3D1rb1uvDJ1j5JySS08YNVSX%2BNpGIbNzdsfP2ozq2joMyiUBBTn1j4dgx%2F7Zgt9pFuyRvqIw5UGtnw9f%2BcMfzdmObYodCq2XR6DloSEYA3sY6DXKsUtJvCozrWTmEnEaVO%2Fx9zPSD7Sw0JQ2ptnmT9iz2vt6P1H0AVX2N80Tx4XSas3qKXCHf7tCnxUPPr5CoRt6gyKkDFvh2fvMq3BlLitowcRUpQPPwbvTlSjuqp1UYdzgtxZ%2FWH88YdyI%2BfKADs2Owfwpc8YzmYIncrQu1BQo1LwabGYNHDvAGCiE3rVbB14oOXO98DUSDn91NJicJMySmiryTUN%2BDGPppYgSycxCU%2F4Kw7LxN%2BFK4kJwF1Kk3e%2BMH1Rh95VMui2%2B41kb9FXFXOSPaak%2Fj8vJpVVaNi1k0Cg64ImjDowm9UPTmRXlw1Ua5ZhO8XnvFNrjZWOlY03KxCpodGwjlT6dN3AMOzI0MMGOqUBLn9Keih5t9mn%2BXlfjdqJQsQFwaMl9OPRJNcsUt9Y8LpYZ8%2FBh6vm98VljcGYPGMMGMc0%2FeoNQoV338TMaAUCND%2Bn%2F31%2Fw%2BFDZbposy%2FFaySgBDdtGD0AGHmQ3GfuMVuxOWfvEtqqWZM5%2FNJKlayk66w1z4M8hWc31vIe2WVUjA88TAO8ET%2FCgauaW%2BwHfkLmfR3upggUhkHlRAFIXrnEn4vFi%2BtB&X-Amz-Signature=49353daa458158d37f06de7a3fa0a1dde0174ef2c7da1a8acf47d5b33ec4e77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
