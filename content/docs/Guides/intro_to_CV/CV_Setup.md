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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBVKCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAP8XhP6J2xzrwBf2byMv3elTx7D7ZPJKG2olay8l9raAiEAmdZdhmwUJ9t%2BXlQSTUhocI8aaHnCnY0EHXN%2F4%2FaCJqsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSfD%2FAvuArV8DazaircA4ro5ejRYAG2hIhpnAQAr91QQEkoAfMF%2FyMHwTzIpfvTPbgnzbITPgrjaxdkZf22cFAPPkgHzqo8MMairDq2L8u8S4rB%2FA4gDnG8ZDoD3KA6jbWS41QHOQglMv6MSmtO3dQss%2FJDzRKBowcztviHUGYCfGcqbfLzQ%2F9zX%2F1lY8e5pKGUZXETja1rCv%2FiXwe1EWrGQk4KIziLMvhAxqzywlbcNs8trPtBGUaEmdY730uPKwkeVZI%2BfXmvlu36Lmwa%2BPOhpRl1TrtWdUatMKSq4RN4Tt%2Fi5Ddpbou7ZqF6MhF3z39xMtE8bYOeNP2Grz3cDa3ecIY%2BTLfcuQrz42X2qpxjo%2FTNG0ymmPfCwyraKQmUf%2Fz0lBF%2F5pEacxcYQjlRRrsoYeeWI6dYEEccxb24OcPukGPQlCBoxF7DxiSOYz0bGzzaHU9X1bqT2G4VBnRR%2FU4T%2BS8jODC4Gwn%2Fi7nna15ta9Mox2BTgAixA01tzQ7pyB1Yf7lDBpnqFWX4sjn5th5wvYqTyYzYc2f4AQxUfVG7FY7e0zWnCfy6LaDIcIHi7kQEq9WcuxBUIcbGz0fnYXSVK%2Fzi0Zo5wZZ%2B5KiUh7gb3TijzhWz25Qvd8FsR%2FOjE5BPeVeys2Y%2FokBkMMfE28QGOqUB5eMGy2pi%2Fd2Ou6yuvXaugmSmSpGsVdRmJqncD5xDDAZ63Hb6riEX4Q8xmAz1L5mrW%2BbDFDJDerI4QG6GhPlgEa4V%2BZVuqVePPlEvdUTJj6%2FZYzs1PEJb9maIc9LETGw9zd2zZEmSNzXnHvgo6C49gw4%2BMa6%2BqGC5zWv0peYSwsk74d4Vn%2B9Kz7uGglLemiTKN3wqftXrIWfPUndDywbprMFqZWCC&X-Amz-Signature=3cad1b5203f53a17b0b0cbb67fd8410d20f93f372b8c37a7e497307ccf10eab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK22XPM2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAMs4DbBQZQpZEh53oSOyjtiflc4PP8%2BGJkhVlAMZAwgIhAPbbCNhdVMpVducT%2BYrCdGhCzasqy47yiqtqQE5PayctKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG03WMsvka2mVZB7wq3ANBLvB16k70rB2A1JMYvLodS%2FvE5vz9NYSHAsjRM7jEKiiLFLkT0l0aI0mQ4VnrRvtbk2xkVDspfZP5h%2FD1%2BFVtc4lvDv0t7zu3kO48i%2BY6YgjQYKe4uKvVA5AwR1%2BoILMLDg0sktRCTprsCbHP8MQFkJhHhsV4BhOrob%2F%2BW7bHB%2F4zJ9tXMLb1uOImv%2BY%2FsVOp%2FQneyfpLyST856mfniteiGMTuFEqlXVi2LutW%2BCAhgYvKfiYOEXGY%2BmJPpDCgy9jXheYos5H8RrCyEx%2F7WLB9opO0XVJg49gsiAJ1M2X9htsJML3Yt3Out%2F4sycg6vUA%2BHSPz%2BAmyyQwPiOR36NckwZzX3kUPg6vTv5%2FfEMCkL7gJZX%2FLlqpiAcjy22W%2FmO0hPIfvpsMt6bTInOjfoImmJy%2BLF20YhjOTO7M44e5f5U1Pc9CipXMbg6eyUgumFE61m3GWY%2BovmRbOyqyNlQfr%2FP0bqBZW954VDOGhAIulQ1v7owCWeeDeCYkfmZ1N45d7u9LGLEn6tEMyxxxRz0CJlfg%2BlRwbkKNnNk4RzmYzDeQhUca8nYX65EmqDQDuDJ8iK7%2F9gpxR6n1Iz8Iweiby1lzwQR3iPflF2Q2P3W%2BVhfY9tdgRqF3F7agSzCUxdvEBjqkAXSQbr85Hmw7ZX2bnVMGZ5z0P%2BkDl%2B24QkqG27zhMwPsxBK3aiM8FO%2FOZJt4J9ccg8JEjYKaJcFPNXmwwR68Y6g3DZ1m6sTL5MVB%2BUI8mbA%2BQaaa9v7CDNdfLcHAUPG4Eb7IekdyNGFnOVwd2c%2BYEgDGNNvT72dwRDAxREgPds43XZHNN4%2B0P%2F7ZCmYTV%2F5J9%2BgE75pLGO9JfpfswJ9ztkqcEJMV&X-Amz-Signature=b67e6f420a451b64b79b59197235deebbf02108bc200db0328672616a9ba010b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
