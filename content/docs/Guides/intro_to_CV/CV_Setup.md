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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645QZIYCU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQQ3htGFqdZQIcZgvEG6LKZ7IEhWboI4XkZjXtKsTqSQIhALazE3rOJvjIxDSTGPf0bRgVNlg%2FMLus20q0Jb7cgSOIKv8DCD8QABoMNjM3NDIzMTgzODA1IgwlvuEh6FOhGUVIZ08q3AOHT0pN%2BdwyQLcqS0yCxZAGbilqbw4ZQHZmQxhcO9ihNrTFhyxVxOIa1pu6e7V7%2BK3EaqGaEt4TJVDT%2FhhITl3ZVQVX2LhfhuTQAfEp1XxdIgzXGkdSGAlp0buYlB%2BX%2Bf%2FuKxpNZN%2FVx7gyoU3Meqd4o%2B9u%2BbzwIN3YcOVBcyMmJT4GQWiOgTZPyAEfINUjlDJ%2F3Ln1HWF9P7dECDtYw9MvVrfCC3HSW9pOLCne1e0S6muHUPcgyImwbuPdJxdv2isLmEhqp4ik4NCOWjIHXlx1S9nEwElLgboducqpbsw5WwQToHaVwuKrFKuL8bmgwCzobcsFPEdXmVp8OPx4eEgc3xp5TDpnOhMvFVZ%2B5bHBPfvGdE9NDbylqbMQ1qvN5Q%2F0izXW4dqCuQHU8cdtIzgHVsjgFblAoptBEnavuSVLBR1BnGOU2XbfdXXjZMjWcoKRaUEaOxjIPsH2Dt%2FUTWY6hm5i%2FKEtzKn9e0NdyJMQbQRYaEucfu0Qo0N8gF%2B38dTYOPbpGgsr%2F2SyFH4fPlSDCkJeMgtGF1isoiuRYSJk8z2R81iulZ7RxJgcbxrml%2BaUnYrcWkRS3zcqtpNICrtG3nklYxD%2FKWgiugSdYD72ri0O4C7tkG3xgqUN8jCC5LHABjqkARQ%2BSEUjUaedBow0%2BePlpBrW%2BRuE%2Fe2%2FdRnHPPvMIk3DP0NOCvpqGP8%2Bjwutn0%2F4KflsBfbsCHbi6y5FC4X09oatWkUYfVqWx7ozg%2BGtWmcQOj3cb7VVYCtg5ORcuEn2RkEiVvjqXWutY%2FK9Ov3WYTckidsSDb5hFNenhC3Yi%2FCmYXSU%2Br5QarOjT37NU1uGCgpuhP0nl3tzikekVMpjh7PMeI%2FQ&X-Amz-Signature=2f5743be5a358aec14605f62ac1e86a7b8c8f0b24f0064d7837c618ffb054ea9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CAPZ4RK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyT5gVoktfFHuH37anf2ajcfi2cTVFKsknHk43QkF7cAiB3ABLFLBU6LgRArPiD1AA9eaCsmSMpuutH6GkTJekoFyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMK09m%2FIHOKjwtpXh7KtwDx1%2BEO%2BBtXIhxJNSnv0HUFyJFz98T97R8uu2B7GKKlQma%2FxaZS3kNfNFafWr28gNkLq8ar31bwGEwPdVn5v3vhN5D9HDhd4dtM3dhDEbCqgiFizMG1Yv2gVdbqTDWZKGFt5dN2QrP4Qnujorf%2FBxbBc81MnlkuKo%2FI25RYpmG%2FcDicGXVfl3ieD0lUHzNnny72NpEj0ZX2tkpUH8rOOq9AxWRKmzO2sgvPzcYaK%2Bv%2FvOpRIhnVHym%2FnPWGPmBvT%2BGBewCjiUAC%2F7THNXFtHS8vAkR%2FANrmigp1UFaZPhO9m2nOLAjyXl%2FCJVCDBl3dBDGvzI1xD887ruCiZIrPFVy2Z%2FOiUsSOhJ6hYK61ERo95JGnIrlYTssgKeqd5Ck5PdjSRpzjCqLZ0kEudnmuudqX5pUpaCa6vP%2FwgqHs6t6OjmkwBABFvSBkA11wIqb%2FAau8OqzpeiLhtt1aOtx%2FL%2BOZ9EEwWHxI9TkjIyFffRa9K9%2BIpkOIw9uC5lOKOonBUxD2KJXgONehkHgaKLEZGlCmKOOpLDDXGoe7%2Ft5AdfG4CitXYkzs6VDj480Bh%2B71IOAGVX%2BtUbenORJnyiAUofb8OStX%2F4BygGT7mpPwqF62%2FA2qo0OglHJovWvuwkwnOSxwAY6pgEKsFV8%2F%2BbsuPuXlDbxE6B3jCBY0rgirUCisC6u8zYNqN0QzfFEOf9kuXoK9aIsevWt3Be7Uxx9Jl3E1el1HD4v4xTtLZ6eUQc5%2FhPAqD5DD%2FE8F%2BuwEshPU6UdlhxYuUXUW%2FOt%2F3xfntUdK5tMlmYuNsU97OuYJeki6xWe6xhBc3CUuHqNnJmTAWZAnav6%2F7xnD05bswaQNsk2Bplfh50sk5CgBr5y&X-Amz-Signature=af1c7a274856fa69e34ddfcb77fa9bed7e6a57646fa3efb52d0dc6f2f475e38b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
