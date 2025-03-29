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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XOSDGC2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEgbFtku0gpSanTvmDjAhLWu%2BJv1fcETATDsm56jlQpOAiBJucMV%2FL4hmlqonMsghfdi1hGK%2BWXDaKMxsTwXx8Yk3yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2BPIGQ1NFL7%2BE%2BfOsKtwD0bCpxtPLIZ8DI8bDS%2FziiR%2FoqJrrUASi4GAdwK6Jn%2BsCOSQ5pMrJ1vJ9hS7%2FQfQXu6XBa0J682o74bidssq4O6bhZAicljEJMW75cm0kdyC5tojFGs9bCozWBHjwXc3wsbpIzhNhjtIZYChvjCHSBVktfPioPoQH6l%2BzbLCsqojprLwx8b%2Fop5vYYk10PNNyNzOiDpjzPcv%2BxfmHHCk3WYDtl1MLLgT5kylWANQCNBIAD8QsI%2FNlQlj0nr%2F94JOPATZffJp62HwgTcpsbTAoJZOMeI7zRff5HfrR9YC2QMkUjGr1Q6PQDxYR%2B7WUqBeURbusXp4YChGi6L0Wtao7APG3vLt08net0KTaXdCVYDB930tWygL43QRuNRXDpxyy0DrwT3nJrjzIxZBCyx3MFQOKymkEjmKRDjyeJ1ufIZ1l1%2BuKykJOud24oVgqJ2HIBtJujnbyaX%2FOepTjm4r8WyAh9g67V%2FiQudIXRfZudnw1UA4umgwv1Kk69iBmecxcYpt6umKfM6XL%2Bb8DIltACIXbDiidix%2FvvWQ2jVkCbgHhPwh1sY2vRqCMlgcFaktPs2oDBxnW%2BfVqiqikth4aN6SpmSmC6qVwjFEY6UspZAMnbFMoTXerCfMafQ8w4t6cvwY6pgG4jm2xKIDh1PeYWClC3iuFmevCBwvP2CefyYVlzua3DzCSO51Z7ACHvNrf6GVTZi723BQUOWu0%2Fac7Ka7ZxyRWNLcInqoSnkn6nXuDjdhl4AAjL5ajiUcnHoL7m%2BFUZ2qmjRi0cUjJw11phh4vVi7jTYZEEETh8SsKy0CyhPeDBef3Vi4M5b%2FRkBovTbHRY1SUQYh8QXm1pNYAua6gWLPxljmdxW8O&X-Amz-Signature=34de07ddbd0a88a2cde7b92b2c0038260c8e69bddb98cdd3491d950bc37b17db&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U3QMNJG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDMyjYP85Pbj64imM8IWpdH7NFCz%2BIdYskK3ZP7iKM6kwIhAPmxHjZWZgeCb0Tql3048KvVggk7%2BNhJIvN8aPbL1H%2FjKv8DCGgQABoMNjM3NDIzMTgzODA1IgwVLAdoV8GnX5ke%2BVcq3AOP0I6MQNiWYSfyyT1eOwOgvh1VzorERFt2N0NAoHjPTB2FZEC%2FIjSfe%2BLEqOB1%2FqNS1rPlBapgVPwFpKkcOycsS5uW%2ByA9uX6cr3Tt8S21nRqH%2FPSnj8JgO9ENYAreJ4A2hRD6W5MtjiUp%2FhvZmgtCHLBPa70ID64%2FoVkqdf6y52iIUiK6ttVFIFStm8OxpqVaUkXmsY%2Ftw2WMNWbAilZ7UMY6oGzXFKOvPADfFbYA9UkKM3%2FhzsTiR6y7sEPpRK8lYYr12KvPDFzKctjhK5T39cYgHlDbyeD6omlXMD%2FRLJ9a6j86ef4%2FSMcJv0IfsFh25UK5EWJRR9sujFOtiSZpXH8LYtxeosSzp%2BfGBnNIOqabdzhPp07HjWbp7q%2F8RNRVUd2rZ7Xwz9nROM9TshQNwFCg%2FddJOPhxZsgFqFE3WbK23DiOXaCcvU7C9sQSOLsidSFAF9iyhdZcG9qlY9St0a6pLtGaTsXDLp5TWigVVf2AnagiXskD73ShG11HXK5gRtMgne1%2BsWImFdN5%2FflrNSeO8V2xW4bhDt4Z1Z%2Fasj3Hxuk5lJQCnJ%2B%2BNslIqk0Nl7OjOqDLAT6FW4%2BHVZOxR%2F0TECmUT9%2Fr1xqQ7mTohO3VVL2CTOD9lPy34TCL35y%2FBjqkAVr43CiZ0MgP%2B%2BGjUSWLGV3LQwzz87gUnyokDPrOs6QX6A80HNAs44yBUTMrOwDoYb9cRbxkxf6TwhhM5SLBvEEXMv6A7JYOQ5vKyKnbHiVD6qx5D3Wq7f8QTDxTj%2Ftdl9z%2BUG1EwkYqq1PDIQtE1RcI097Cq9e5MyyY4HGc%2BpVhOTe%2F2GdHMxreYsTmUH3V%2FwZ%2F66rwb1VeKpJFvAaZx3yCPCVx&X-Amz-Signature=16bddd8b474e380bfe4c78e7488cabb61352615a6cc26c22e25d7cff907bef0b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
