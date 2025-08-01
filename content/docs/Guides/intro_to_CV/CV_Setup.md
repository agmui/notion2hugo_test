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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4XDJAFH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7PYmm70EpX5bS1Bvg0uDSs2oYpbk6yTgs3S6JeXVyyAiACsMPGf3LuUU1AXi%2B9IsII1aexxg8tup1U2p%2FDEyXECyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeAQmMN2h5zPz0DrvKtwDUYtAvQSQ6WGmrnaFsjcmmYh1L7LtT9YK%2BVJd2Hb1yKdBzl8JMRB818qydEXoZ6u7lpjrHyrqHl%2FewcJ5TU6l41%2Brc3Rf0lrKphiT9gbA402WKrFXzhRBK2jWvsVJLkZRKx5Fu5qn2MESHqffyI2PbM195L7xyz0BU19GYtVGijCHQutXH49fEpcuhP9jcoKyCutYLm2f5%2BqUIRIY%2Bt5uX%2BD8%2FtpjBr2t9cCkpyT6fgye2U31XioowQlFFC61odz4FJGyNa4XLXXWWUoGJecsMuQE4oSC29WYterwVqKTqqKTofu8ybvE6RjJemg8RpdUuc2iHwI%2FWxvTDgZyoeyDlwriSbRvU%2BO1Qp7AOQCIRi%2B2PEAjnD2vh43c3j1hLb9BktWKbj6PFOhYQ9gGmv7R7hT7QA4hUK0SdUxAP2FcTSF%2F8FJa4wriOs0ZTPlL4iGjzLGONE4yg%2B2K2%2Br99GudP2Ezszkvt27FdOw%2FCUn2ks3hweJNZNMWGelIl8NUd8LSJbW4uazZq2rlLp%2B0sjGabL5rUKhZjdQjDpAIaXR%2F8%2FIxkt4RgdUlmUpWLUJ2lsMj2nD3RhDWnJ0nNgssMmZXRn1Ylexkroq0X1ANjfrV1cNagbWJMcgx5eV9PHgwo%2B2xxAY6pgHUlipRnzyJGkm9ZnyTRL3Mjitn%2FhYv%2F00Y9Iy%2B3LI02fscB5w%2BGtCLvHR6P3%2Bs1VCt4Kut90Gf9phZXvhRnbqgDaLXke1efzfVcNFKQHrgNf1dTl9ewEMPb6Sz5HRVh100J294fpJ1jt4v41m3iysDHYSkVLuGXoBJX2t72g%2Ftb5h2YFNmLjRa89KETaRUZdeDC82KYfg2StOBLP2Zu3IRs1sQti9D&X-Amz-Signature=6416cb02fdd72f0e6a1350871bd3ebbc8a1d34f3179d1b2d15c41ac256265fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466772IBMSU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Il2MU%2BjecJVDdEf5Uh0fKzYlUsbLVjG3yKGIAP4%2FVgIhAOeLNFAhg9h7gd3UO9m%2Bgl7%2Bp1ck00o1a3iYz%2BYBptpJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6NCD2ztq9QSaJnDMq3ANCoYHYEzMm1hp1nDQj27izVGv5gfx2S8uj0Bxlki3PtM3he7zNXWkf84LENbWd7SSDWRkQUTvuB5qJseggA307blLdVtge43w%2BDAyO0T%2FmRbPKkn%2Fc8T9S%2BgyISL7TTo4jeBBtP%2BdYyQorsZCEOdHrJCugPBqVYi16S3W3%2BSp1z%2FHGRWgfnhNgyQ6emJ1j3km8MKTpGEL%2FVKmH01ojniCrfEw1Se9edX9ykwL5wwdSWcCfVjiXEacESBSmNvM4qk%2FCB2D6ivF3pBTJ5zTVjtdOp88YUqs1rNZ1VwSp2CHvPrLw3Z5yfJajclQtqyCISc7HpFMGZ16y25HfUbHp6ykl7D%2F%2BZRpUqeefzhcGTTtJR2Oy58gyfCI%2FnXY5irwTVK2x7JHtJlJOBtIPZJl9SEwhjXVSusXX86pc1PZxTPKEhFKQNiS%2BqnLtV3uV9lof9lAXjWd7c4SjqiIl2Y6q%2BOuu1zK9P%2B8oWA04qNsNMmmNK2sBE3EwxKb38GIfEsrryIChh%2BpW3qTMxGC7T62MDuIIqGaQ5mSHqZVUJ3KebdJeF%2FH9vR1LqJuuGAsXdgRvjY%2BUq3OEzaqVUK9ddCyJfeVqVS1B%2Fb5yvYBQ76%2FDG%2FutiFU44QTaeCoheRuoYDC567HEBjqkAZzVzRCeGrqZuRQtuNHcfEvXv1toXzzdbGyKn4BUHQ90H%2Bu%2BojD4q2XPBjvm8dWAhG2eXQMrhsda4yYsRrNsDjoONIOs3iijlvE2yC9DzoOy9F8Tu859Gj6bpgGSh8M%2B4%2FfRGslFOcE%2BzWeOL8pLJYyYtQqvxuDrHiqAyU7LgjPkP7%2FvPsZqXMolMkVV86uA0%2B0kJ9cL0Eu%2FkJmUo5uF%2FAtf86dW&X-Amz-Signature=a054bee1ca436ef074328ef60bb008b905b3af48ed3ebca29f8c8a35fdee3a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
