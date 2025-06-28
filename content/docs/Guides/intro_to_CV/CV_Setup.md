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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DME3S62%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACYQXzm5VvkuKQt2AY2dsF7fgiLq%2BfF3TE0KlGLuSe3AiEAxJ0jMUIpRYFvpO2H%2BGuaMc5Atbqcu0S4n3YFMxDDnGUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0RMZktQqvbp6qspircAxOCE8pKafBRrW40kTpT%2BdYXKiTRBFMreAqK4UgXmpzxs8RWqoh8RJVTV6x0p6K%2BkZzfdqsHM259IGFRrIuAyvRIXWYeeVf37LXD8o8mhdUwLf3FEvnD2B%2Bf5w2us9jYkV2zGeiFwldpUTORGGTgFub6wjOdCfDbe3MxszqUrMrcGgMoWezQ4dJYTC1x%2BY%2BxQLVvoUwgePCSl%2FzuPTyjFnSH5m2uCPyJnQcvTI61nnM6d24zB0NmeKS9nequJzcmx5o3%2F2D4eDWUMcBA0ePsST7eQPJ%2B0NkSylyIIsuGml5tkl7UbuV3D3hbvzDwESCWV31mztdyPejvBQdyRi53uXYV%2FAifR9Zkz%2Bcv0UQQnj1ETA9wdayMtmqesTkDmHCech1bm6bqkk%2B1DByzKg3oiFUrs3MBAWoStaCWcA0MnxCuFNdSJUt4QXbM%2BmPO0wOYkaLkyX6aOLp1lEB4FGGF7otMltnmVsg5MUNh5JW7C%2F2wX2FWcpkVbnlUXjZuBsOwBGXqyknErlDWC%2F56U9yL1n3s4mhxolShHJB3ig0sKTb5sg1ezEWxBe3JhHZjlkLOiVPKMfl%2FR6SMhRV8byW6m7fL4bWJd1uaSWezQgG1Im0Si8DEpTMvQyVkRA7qMITS%2FcIGOqUBpsi4HjbGUnNiQchcrhGTkpkhqaDXFipjkUhnTPJCPimwsFJG0utRYchObpML4TZNl7at7SN3oOo9CeY28Cp7Bl6qJZ4tBcVmYRngv6wPyhNEsPIfLrkGYGnr4eUnrfWAp003skMxZMiS%2BLgHJojKK6O7Qi5%2Bk1DXb6DcyYs1S9w6bc31yfImnJmOySiSKhP8e17RBplo8tcInsA6U%2FP5SBRAggJS&X-Amz-Signature=c84cef5ebb53d5f113a351d467906777aa1b7cb3c0c927d808eaf63810da373d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SWPAC3O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvazgkGwnfWOyw2KFBIwab8CN22szAROGbkqXV0poR5QIgYpXgbFWSIc4%2Bqq6PKl722dDwjB9OIV%2Bl%2B4cmHH%2FE1qEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfql0%2BbTxqIm5A4pCrcA6nvIKowKgB7%2B6tOxyx4lq%2F5ZyBE4oyRmikuOUqJBz1mMsvL5m6g5q%2BD5%2Bi2v%2FpOC%2BGAoN52mWqoZOx49EP%2BadyuS87SQRnfG07q5ZMW3XsghOBLw61NnuRBfDET57A1258BJxH9J2vnI%2Bcd7IwG0dmCpv1975dTYpsIpajktxG%2Fs%2FxnJGdU11LlYGJ%2FBCgl%2FtelwNCsbKj2xr0Fz8azML5Mm3Knk0K9fMYD3hqIcNzkbOlTqh7EpY8%2FprmMTh1GemhINPpeTiITVUyQEZS1SqJS0c1UR5mlEXuCN2cPYQbYBfp9CiDqyV9l%2FlKV8VWzJ0KL5vb9hwCzZvf5qP%2FMB8Nw7rll8X4Wz2raTD1gi%2Fa6OHLok3XJhQ0Dht4f%2Bd9nWnVF4w0oUa4E1NkMRJFhOFHxSzyw1GoACSWnrzirm5Dc0DG6aJJ%2FOG4b2bBSwms8X2WD6iZxofTzg0RbKAybvgFWuyMIDh0QE0%2BdhV5ksXQHaJfX%2BKAY%2B095SFzJSUuenwpPCWuvyijIXbojg1zUN14qdNkp1h4hJneiqD%2BazHxKgjS32e2p6FT%2FaphWD8qw925VOvpTOoWfrXGVDUunpfq9YFKT7i46pD03oQKwvYWAjMcJdBNd8N6Ce628MM%2FR%2FcIGOqUBBMV19qVRc6wrYPus%2FrOR0EYuMPJpRqsHF%2B1LI7cx2D6DbglERRetKig62wBzDIp8s3XiBnJsvvCbH8ritM6m9T8koF2U5dOc%2BqK9B%2Bi66p0dD4iCRltL%2F08NxqwmFUlWzJT6mgGR8PdNeE6YoB9caZONnby0g4Z8Q5PuZPc%2FgYVdP8nC8YNWD1PxgZCDiRkubA66sYUcwlgq2K5cCSPE1g5poYSq&X-Amz-Signature=7ac0e7244cb85310c8e4985f1dc371a2644a636cb4ab891f638f992ff788467d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
