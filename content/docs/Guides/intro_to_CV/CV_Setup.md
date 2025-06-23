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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROO3WI47%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIE0UGhfEFc0hX%2Bjd8l0dg1l5weseuQs%2FlqgaK9TvSKdoAiEA9Dm0sJlNTfIiHVuGwn8vXC2cVhDSgzO48MG%2FnlwEvKwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD2e6QNWag1Xo12YGyrcA1pegYZJeiNtdP96dxj0Lp7OG2TZnw0CVt6KhiRLLdpSspZz%2FKwz5YQ9%2BDClmJXNsZspgWwKz%2FCxUrh5ZqUv9fM%2FrwDWNjy%2FMdP%2BtMYzKx3lLTry2%2BgaBGB7C7m67Sn7nLDeektwPfFAt0foUFT8YS6e%2BabtSwI4%2BnPZz54Z8x%2BjCK2IDPsbFx70y%2B8UZ8bfScf1Ti%2FcZYnP%2F36nIuvEjXKF%2BCxX8aDZxsJOd86C%2BdAjEUWvcN5xVNbJ824dOYHEw%2BlQ55x5zG8jQqd7yFzlztCx05kJMInBSw7OstScKQhPP4AdNznKuzYCeHld8R46esLCzAu7m0nY0ehuziUtOiQxGWRHTF2j9BEURC%2BrSWYIqpcBVMvhCJ%2BOFA0H48AmQX0F4PwmIZ0hmu1UzbePBRPrNuldZsws6ISZg7BKafoZgHm5GWOtL3HsrTVxzqlp%2BrmshQS4%2BAbX2W%2BzW%2F8OArLJGmdxr5Q4LYYKEMd42grpfHnsaxc9iQv25F4Kzh%2BdfnEi1BV%2FPbStPUoRt1mprc6tSV1gNQIeHfOlPgl3E%2BI6IRoJFeLZC0bAb6Qj1OkJB8cnaqVw3bxjTUOtuOrmpRY3vP5Z9MTiP%2BTAPGc91mckXaG3jJrMFxyBBqa8MOWq5sIGOqUB8xDM0dDo1F519bG5dZ8T89qHfUH%2FYXut2PyzJKJ3ID51x22cAy6MwqobGWyM%2BASvsX3b7u%2BI6V6QU5v1Agm%2Fu833e%2FbBQzYC1tYtx6ymBxJ9jUEN2Bf8oXghy0ECpzylFsC2ivrH6Yulf%2BCki0NL5KqYaUIcmHJpokt6CRPd3g0XRBs5TwGXWaa3KIrPXDvo%2BCxHgPOuWTrV1uvlxIFE%2B4ZniBGZ&X-Amz-Signature=59d216d1ef559b5fbd78ab52af710066a6723ea43555336acf36dc8cf4cd9091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKVHPLL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDArYwg9ATMN%2FYjg0QHeoR%2FfM1QB6ty5JLLNyteyftGIQIhAMoED%2FheCO4O2m2U9XnKyO2eIDpoEgS0W6c7Ohx0qKznKv8DCBsQABoMNjM3NDIzMTgzODA1Igx17qBTAJeQFlwCfTkq3AP41M3hhgIZRkNoqfZ1zU3mBJrWSAPjocJeGHnMQmPiTuwURtSA83iqhRLwTeMvlL8e5makLdPAaj8%2BRonOXVzVUKYVo9Yyp23lBqlEEj42CEzWTHMSxmIuXsvPKBtsXiNy2s%2Fo%2F%2FhNkxv4vwHZNa40NexFn7WfIhCARJdSf1cq1kfz2%2FvAq5R4JLpKrBW3OhKoqZN3ZLWv2JQmxa8jQ7%2BKnn42GqHkhNPDBb3bN3Uojo1NBZA%2BHHI4ihBNBSDYjgXxIhKmVreODhHw8qREVHlVU6OYc7R8gF4bREHxOJJ0QGcIIiZDwMvEUmQqdMpVknbahPzLOCoeGyRSBRAYrQYDd08axK6lzOXWRMLt0jkp%2B7p%2BrNR%2BqgmaKbj3eniA2%2F3qDKEJMMtxu2LYwwbs4cY1bIQDWt6psHUhyenf2n79yvyuSEGhvzRs5WbEDeds90pbCZQxZQd%2Bv%2BhOL9GBlEA%2Bz7%2FR%2FJXtsOwT53IiCLlWtgvcgVz2gwY916WUpNEK37Pnc2iujWvTa3MuqWC8xktT%2Fl1w8Nk7BW3O%2BnmzJFbPZxz%2FwTp2Wf3p4zlYHhA2PYi8%2B9AnzzBJbqSriRBkqJrYshcWDi8ESyuArZCl5bAYu0gXwwT%2BOjNnr2yiIjCjqubCBjqkATqpSxWmaQr9OKB6N0jjWD07j3rELODb8QKL5G6EAruPg8ZPtLeYKTrNTmK6OX4zbi2xSyOvmt2nh7R%2BXWUtbpguYHPkIZJzEqpyjCyKmc0PLVHZWRqR5%2BY1PykmwRofaUlHKI%2BjzCZ8ogCFJ8DddfE1jQB%2FtbHvKh%2FLwQwjASxj44Ww5wk44Zm8o%2BrLB23XUXw%2Fu0MsVIGL9AqZiLcfb7yGc353&X-Amz-Signature=c95f782f9eacd961283977a92dea705e7c745794a0616e1ffef3011729be5522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
