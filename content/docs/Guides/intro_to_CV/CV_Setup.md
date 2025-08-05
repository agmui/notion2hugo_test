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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKO6FIY5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFH4lD0ikq6kOqFRQnGt1ASeSKwL%2FM%2BZf%2Bj3DGic0oIIAiEAxc3Y1%2BDHUWWPGEnYSnoEl7c26B49McdmFbsEeelPNOMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFajSlTuuwwVDpxwfSrcAy1vpihHNMZF6n66kD2lillFWCEB9igXOerckmJ904k3V%2BPU0WyguO8nQoRVck71LrtbiC7hqL89RWPWgowC3i%2Bomktdsv3Sa2mmso5UofshOVrrNRRjAVsVzPAcvo8TwDNOFxrN1S%2BIg7YMpGaAzx30YBMYpevyp%2BXwtnecSIzr8xqJIeR8Kf1eR%2BJfK6etrScSJvEafsDtDxZow8bvcbOYJvnD0CbJ%2B6l%2FiyQmCM4MI1TF0Zouc5CZyFgS6zKTZNcWg3ExkcXBBxGY26QUvq1s4APzyYan7AhGk5ylyQeXhvpoN6iOzOOuLPDA%2FnSHs4tchubXqCE%2B%2FlI1yOoMSr6cKUGvfb2cVL6zUKdxCLSNGfufBZTLFnnUcXvZ9br0NvAVOww40jlUH%2FFzP63eIpyMlCw5hqWhcZH6zaV0%2BnJE2rPPSQ5yrebUji0DpQRk4iIHOCTLtxC1CiUA2IWeBWlg2DveAcjAu%2FwRBfyKzkxIHKxnPEEudMHLKhES%2Ft3ac892FOnGuirDInfeFBQ%2BQC20FBZ%2BlN2HVLcQH6npb5ZS%2F%2Bl%2FbM9MDOu8JJ2icQemaz%2Faf6m4%2FgFYPyj8lUMKgm%2BD3HgiyZu3KhgFj4jRr4cPgJQmynGUZnWOl%2FS3MJ30xMQGOqUBMgkI39%2Bnx%2BTOLeSXDGMm5FsXvF4xlLxZxR6pfwYRwWcBjbPc70RQmYR2wgf4Y2iyiHFmB438l4RBaoNC9NzL0nji56HCloJyBuV7VLYL77e2OaX8fsDp8Y%2Fn4bB4GZ8%2FXTeFKnEiZC36wh0zb1ip8vHig2Tjzom3V2rG9jA0fYRsm9fnRjiW8H2DxNuzEUYAqSUxDP5zBLa6bYIJiMRPEHlIUcTs&X-Amz-Signature=9bddb8fae3fa48c26bc1f9c303ab6470c533bd26b277b072b1fe5f7612806281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2AFTOHC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDeDzCpq8%2F4bo4ieZcnePKWym2%2FvinCPuT4xF5W2a%2Fr0gIhANGCJUhIfYRgtar2HT9L4uLNkGJtpBTV29z%2FnF%2BnAGt%2FKv8DCFAQABoMNjM3NDIzMTgzODA1IgxchzzjZyE5aemRkdoq3APk2qlB9TBCeKsUCz4U40X%2FxBCZNtTMlvPS41kgQSkjhB7YWapfzgaWQHDBGRkIwxAudnBoTmOJmZG0s3zPWGzuUzaWJT0v4g2gWVquxMXTrgPAJl1ty%2BwZAByMNYKRZIqqeoAdaQgNwOlxyDzUIz4mHvsS%2FXjk0ZMoPxmDsOpMif7GLkuyf6xZ6k8LDFjUw3nrzL%2BermlW6FTX2rSZZP8BWrnkFwmP0ZEiEpjZVuIwvw60lLPwDLtOWA%2FJymurBJnYAa7itogF5U4RBeQQ7hL4XshpGnY9IRehho9mYvSOe5FXqwnUnNAz6Qw%2B0iPVptcmZvdV6DE6%2BrifpqRY%2BLsR8LTbzMnuzV3VjKQ%2FYLp%2BnSDcgK1cX3EkzHE6BBtUzXm5%2Fz9HuLyUQnqv%2FcoUSW4%2F8uSJzEVTfq6XRDfa5B2T0ucRc%2BYpnXqWzLm0ajM48v1Gs45c1OrCsDZBgkort5bTTdZZ7igiQ0QzW4xbHHo2tIuSPUsd13VQoxUB41uTRS5C%2FeUPeSrR5DbFS16fzGhia8pqxrRaT8o5RQj2sWCYpzVTd8tic5oYF0WJ7f9SWS7c0cjPG%2BMvbjmuG862cMSGIYHl6V3rFLDLUmNTI3%2Ff7UP3IjfzLtRSsHX4DDDh9MTEBjqkAcMM%2FvkdE2%2BgSUr5S8o5LAPVRMHtymPI%2Fvh4n7g1HKtrgMmWAUHiVo%2FJT6nwFNB9sOnuC%2BoRNd9mbZjViJIc81Rrlv6vWt4V1SAaJ5ABmjik99aIhkZYDzjLFBbYme9IFe%2BPxI99NV2Kz77EBe42bMl2vJcgATWVEftWBkv0F4Xl5zUWoQ9F15YZYJfAB0bijB%2B4c4OgsE%2FLdZkAqB4l2Q0PhjxW&X-Amz-Signature=8d04a98c4f911a5de6d1e67305d927351042cd3c1e77ce88adef9334ff4a29ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
