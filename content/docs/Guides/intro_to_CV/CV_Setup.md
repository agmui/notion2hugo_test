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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2RAHFT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr%2Fmwbhg6wcflOL3u7LFBnsSCSabSB3Lpcz3R9WdsG%2FAiA%2FgfeHbcs4I%2BOBnABgiSu6cpzp8MywimARVdT4JvEkQCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtosydmKH2HMXGjS1KtwDO4qSlRtU2bmZDwN9YPMb%2F4K4V9ayLjX1N%2FDzzBcYaZ8QRVB2Uy282tVnukEGT13pgf%2Bm1z%2Fi%2BcPzCsW6naPIkfHDvT8umTwnNKiRlfNJXSeYC9m8%2Fmd9QKsFy7iSD4cS8sF7CSWlj9mgV6KX072ct5w1UTZsaz7K5HDAKXAjXiAGCT1bAIRj8PvtKTJmx9kSgBsewMGZTHBy%2F83RedxcHtE7YBRqETkWdl90oayadcF%2BqLlSCHWe2WafTgFC%2F8mGKKzmTPzUDrMshGhPwT%2FwbPybCyG1jjW0gzNlWOMj7Z3S7XJVAOYLsy5nBEtVB4IHDyFIaYPqJIu12YTeK%2FLoshJ3vIi%2BnWTAtYv4noZx8jtWnEM46%2BtYd4L61ECAVHuv8GcX%2Bvcl3JgUXugvztI5mV0%2F599sjsybCjLcKOSRWnR8GWsnvrFZFTQdFRR59FYtsMbk%2FAawab%2BnLTVp8TJyuTYDnI58nHgYZqZmqecDb4FHXragQquLEGjHmLbaDOwIYURJz4IJ5EGnS9W9zpLkaib367CiL5u%2FKrwIYv27ApDgjuQXaNaQCqVcJpjDVeDr%2F7sB7Em2fBEAJOf65%2FHW4IuybjD1CuJzgWap%2FyQe6O%2BAaoU%2FJivT6JcN3ocw2Nb7wAY6pgF%2BGQEXP0vAnV8DXVh5p80UmybQdYybXSG07JLDL0hkvzQeYiFjdWXMAoWASBtxLanByykOwyZlO2A2l5ZIcx6rnGLN6aHdbpRKT%2FfWRKBWIva40WBxAS8LPjzh97NG2t%2FQ%2FXNbbvHc4GA3H%2FwfEzsSNNt1RH8JpN7RaNOpCZ95WEtUVTij2I6vkrUyJTpBVzb817oK71YCX8RjLqwiSdGWvW%2Fmfx40&X-Amz-Signature=a1fe0810714cd19fd597873afd4bb2754ffeb3ea8270b98637356331ebb5f168&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTFBDIA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrUCFhccc66JwtyyeTDm%2F5BgMBmEBO9rdfRliHjZxn8AIgL72pMq5sXOuCdPWOCx%2BoI3z4Ny9CgGfMBZQ7wvNrSV8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV4AQhqhohT6e5byyrcA1%2FDHzKpsK0lyhqtZPP6JLY3Kcy%2BZCl3FxmcY6cfdgwKz8Mf1a%2B9HpIDBUhZgB1y1OvdBsZ91Bb786UUb5oDgxiZiZp%2FymutDI6V%2B7o28cpbee4lM9XlCg2uOs1WJ6BZ%2B3EU6PzH9Uz%2FBQCrTouuSt5bIZDo8%2Ba0FFZIjdv7IYp20ZxcE92Ro%2FJRstGMeb4TVys%2BzOg7Odzffmp4BHHmmfjLZPxTL4clL2pRL5iiPH7Ko%2BXnK6esxYuU1jbshQB5wGyrmDeJyU6mf%2F8YQia8EjfZhLeJPfrPCTP7puIgtfl0RChF5shiSmqSGXomSNQeAKvvUPXFpKFa0rlL2BUvaF%2FVcEXL7RDW1xLN7DREPyGBlSSx81RtDDyDXYGiyhxebzofRGdCrbzYBbucXj5dDiiOUVTIw83%2Br5rqiFlBYo4l%2BQYQrUmjr3mbuSOztP%2FfWgyXcQyQGfYWKjr8mOmV6lMrf%2Bbjk4jOhf7cjAQEW2TloqAOORH1tZkk5bar4AozdRr7Z5NSWbXImQcsaicbb%2FPrrDMQP1GBb%2FPTaqiEOo7zh41KWvigLENgmoQzEIt2pJXzoIL5KJOEEjK98AVgeJg5GFs3TItnd4OzIJavV%2FJUlTx1WE%2FpA0PnrVa6MKjW%2B8AGOqUB1vpoBv6a9X%2BqKJV3h2Dcpgb4Kph3zaUENRiEd%2FkIR28q8MB2MpuZANKpufpPEKzfjwssyul9iZN6lG1viMAKbskQzi178i9XDUXvQPBJyAVA%2FY26B%2BYewwHP4BntN3urGtA7LJVsPo9OkE6gNAP57d1IyVwlbHVvT8Th8%2Bskab64p%2BEnpgRNEX9EMF82cSaHEadVUrPdQh%2BcnOoM1sUazYlhRA1D&X-Amz-Signature=b006a05a451eaf9c3022add59f86af9e50633b15db13a3d46a668f5e00b91e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
