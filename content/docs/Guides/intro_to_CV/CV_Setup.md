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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WY4A2II%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIHJxNZMhdw5%2BK8vTPIqofAOhc3rTX7JAWBACuKnc799aAiBj06z5o2XLztmdaJBw1chX88CwJ%2B4OSpHZkmLU2Pi2Nir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMgVpGaSU9YMfNsq3QKtwDdyXlGv1ywCpzO5V21%2FZCvVhk4t%2FS%2FCyE9yFSz5gp8HxnVAxi7juw%2B%2FmtJVMlufD0ldKWo%2BvKTnjOm4RdfTrU9CT4mudI757Rd3BcLyj8sy1qlf8YydlF9WuAJYIySMAynaxpRlP%2FyyBDe0It65j55ydTPLKIKH7MEHmJ%2FA19SBIlZ5XSe%2BMHP3P0%2FPK9lDZNc5ZTWjVy4d6u0h9Rebc7cwzlPgDBuPSK5wvi%2B2%2BZC3LasA8Vt6DHQZ0iRvAsg3bVIioZIILtxbwDjb%2Fs4lsb792d7iC6EAmFBpN%2BRQmUdhSApn6wvr7thlUFHUArRuitqNL9Ib6KwRYIfdhK4Fzv6VFSVPyRkKakYB4YP0%2FDfL9MYB6GvHLt%2BuxgicTLpmRhhbKUmVyCqNbvmMOvV1EARyK3QXYKcFSWFaEbmBhtI6sIqEwSxDq52H8d24g447HJNpekLM6nDjcMh8sPQB5KFKakJxyvN74mZV%2F1CMCb%2FF1f%2BdDlvGI5nRC8YD0OFVONEAA23NNPEdgeHlCIR2K6UFQWfUMdjRttGGmSRApkN1jrfWgFNho2eAYzuS2Zn%2FLeiVHFZyrNxNuRVSkdvgNLXF32XxfGIrG0hZNfer%2BmJ6u1Fb%2FZtalVdY%2BbVHcwqO7vwgY6pgFrzR%2F1B%2BJmEyKLc81B0%2FaimLi3BETV6%2F%2BcUUkYoGI48uzoX8bCIGuLzNtvLqYG6S8ShDZceyCzC%2B8LmUlMgNTji4LflT0eQmor%2BfksK1hQ8yhVL%2BF9sWCdxHy1EsiJ16urBiNMS%2FItCtE3Nv5W0XWdcJdga%2BaabxK916oc7d%2BNjpWwQDenkYQM1htkoNYRs%2FCpSPAJyO0SvDecXeE2mh5AgbmxuB0U&X-Amz-Signature=a3f6d07cee4c866911b2f50d4eaa42ca8d66c7292fcd41f7c7784fa8118bdfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMUHS5I%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIC03KhnsJVj6qyf%2BFo2AfnegxVLHy2T4pmR9RRn4VFrxAiAthkeK8%2B1LBpJTQMABpXFPFxEmOWY4bybfxxLfI%2Fd5Byr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMcxM4GX5nWz0aGkAiKtwDxFaNhYeQcVYaniLdJyZqX1bpXfJXJSX%2BvyNmrGPPdlu2Ew%2BFsJ7t4TjNDIjhj9fTcWBcGA8q6TaogVYBafNDFSjFXQoqvwDS2xo71wolRTWpfMRZ36smLBLyYOQlK4QSHsdj9MfrIROjMjOs1FM25EbbocWRL%2BebE8%2F7QPhpWM7PIPOGfNEcbMaTbJGsKH2tFnTMJgpuI%2FgmQH7%2FA9YJm7Fp0UjXvUmCyds0nzI62%2Bu25cCxb8MQIRGKnd%2FoYDOebYJysL51Qq8TWqonGEffRgwaSzCYaJi8UwOz1Jafx9SoHtKQ6SCYgsRova0b41x2sWAmM%2FtGF4bMHsNEVZrnRhRmae2tSaoSQ1gbumnT7By4%2BJ4OJIOJFVPx2hLObnschbAoYonL%2Bfddjg05fjbPd5P22Tt%2BOM8E9W8Nc1NMfyRY%2FUu%2Bd2GrKtxWvUW%2BCnS3DJi7ZC27GOlxxzLTCBLElIrquczWuEaIDunYjQO0bmhQi2Pc9%2BfoLZzK7Wxo8yLNCT%2BtXqZ8lwWNXA%2FbcmrGXzfog7aPx0GsbGHvoJfaSMb57k%2F2Q7mvPPJHGyRoka7Z3bjm4m4S7IWgNJLmuqShD1mM5zKGr7kQAEQhFJDTvYcwsT9i8%2Fe2Tjrmo1Qwx%2B%2FvwgY6pgHveuXlr9N0Zyizh4gxKkzyZQ2CT130v%2BLpb5Q%2B2haaY2aWesCXLFd5nvnSEc%2BXx2OkdcYr0SEGwrVUZcJfQQdpbOtSTuVq8Vyh%2FTd8vIfdaweFVeYpa4Bh4WccmPoDeQi%2FNGvSeI%2FSikjLcwImxqfWes%2Bur8gDs2i8mIXvJp7gqRTcsCtOBb6YTxRNRGPCSBjT3JTrskwR%2F7aoBgz4q3lC7BRke570&X-Amz-Signature=cb32693ca1a5ebe2629ed643b3e7593d155fbdbb6d124bda9023232865caa67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
