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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LGCCHL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAWSrqQm6RYgwJwkDf203oceFH5Iv%2BaFWKiSkh5d6PDJAiB8B7eb8TjR1k%2FfachyIKWkh8BY3q7TcdiocPcM0edlcCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMybprhiUh0avjbs1yKtwDIY8LBcoLA3ac1cIII5B7mZ%2BLKO%2BHivkcyh5TMu1pJ9%2FgzpHMqVmSOt7qfgPCu%2FpctMsiGkjCidORLDG%2Br%2BLY%2BVawDzz7PGcvhuD42xwHXIF5EDK9pHvrUvKlOS6yPzUx%2FkRE%2F%2FbpFjb3tK7gXbDSN%2FngttgouGoXREU1ILVC2J%2F2OiTqNZcU%2BWNon77XVi93hE%2Fej%2BkkcPwUIwVvnbabB7MC7PIqMv1e75VGZMe4UwDT%2B4%2F%2FcNkFACXfqHkt3%2FcE5DqyktdpezMNn3NW1UYdas9tHXbEiA1rDz72f6yGLDry5OBFXnb7pwUhcxG4anyPxqlg6tzrlDOM%2FIsV0Inj2vjgBESXmag4lwGyI%2FB%2F0kls7xWuEOtZJ%2FGRSLL%2BophKsk%2FcvLY1q26AScP7dND5o0LAWKCN7iTp2Tx3UXYlY%2B49RdxhSf6xX9Km2GyGRa3SHbgl%2FdRY6Uv8vmXr%2BR94WF5mjKqze1PauNeHXZTQiZmfxhC4ZYirIgzKBDx54hjaHP9VcKGi2bTh0DHn%2B22nE9Yy9BgrSjRLPt1xI%2FDFGPx4PMR4iq%2FEZmKeYvHZHCPCQM3HBp8%2BCn8OhyVZP8ZPlYcTaII0S7N6i6Ztby54qky5KJ6DO3DmgS%2FBES0wy63VxAY6pgGnMDkU3wU%2BcKYQkX7zdwDaaHkFeOfLH8n5beE4kUcmod03smAHncikJZBn3xFAp8BYPSsp21TXxaDN%2Fi2TcIKEP2ndyQzXrEdhCON8TNnOZ9eirqn2N%2F5WMeLpJ4b2cttIaw240iaO0hhNYYPgwwrX9IIRL82h4CiXZvaDS5odag6KeiSpC%2FpsGOSHvjsiudwJ0n82HFrg%2F%2FMClJ4%2FKrGweweiPBQz&X-Amz-Signature=08b967b0f0dcffbc8491cf282c9d77e0908e59665cd65b5ebdef9649ecf487f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMIPY7ND%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3Nv05S8sAyWEH3E1kyiOIlyhQ5Pf2BWCDbFpb5x7mHAIhAOgfVGLzLSa2ARRrkt7vIWg%2BNTxpf59A%2BFc73dGU%2Bd5KKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7JE%2FCEoVBgdMoXIEq3AP0pQSIx%2FU6gj3r4dzrRgyFzJ6E1VvDShGGHsEXdK0%2F9tv4W%2FMwBJCgCWwCVsPj5W6ErmqEWbM3cyHgyBTKF5cTr5oEAOqUpdMrzQfU8r1LoPX1%2FDonxkrgeZRTVEjz1%2BoshrpttE2t7HG9TJhaTQMJWl9L2B5tDSsOIvrS6rttHAtogkG5aBa81sqBEzkL3ImD8MsbGbi5kCN7tAFOmciRj%2BRrvBW8TLVNV%2BjNReiH3FYAdk3G3N5KYIThQIoiqa1C0nGMv70uS2pb7JGHcE6YpIcNSA1wkXe7KVonFvmhoLQfbtrCzN8kbzzcR9PzXtpWyIKG%2BYlHAqsWeHK4%2F%2B4okZDKmpWiVWhPQ4E1QeJvVYhwDEznxW%2FpXWqiSKQaXONipCK4QGYCfGoSltV%2B3PRYf6IpR6Dx2XwdUrWFU8TYmTOlQnGOvgZgVPqPQ2%2FMtDlZPWwxceh7um%2BDcJ1rkZcGi0WXWDWR5Jtq5MLu%2B86geXaQy113PA%2F%2BS6%2B03mWxkDIsceYG6EBuGznSqkTYCZK2JuhU0R%2B3IynTm2kh5zxCyS5dsnjp94%2FCTQlr6akHpgG4HTdbr%2Bs7x2iCy8Gj%2BWp%2FqJF4WrjqedBLpegRIxpAaF8Ya0IElrjl52owgzCtrdXEBjqkAVFzcm7HG5AuxrgKDSR4S8tr4bso187NrBHbPU84pmMsl6nx7%2B0GZlgsMzUkwb9vuoy8vfpXoJZ66jZO3RY1Poob2e9C0KxW8jP%2BR%2BKh4P3KG%2FV8ziNE36qOVNqjhmfbLKA%2FdMk5Mi4VN0k8p4x5AAlIjVIRIicNEMbboLqBU0kQ4%2BS%2F3wzms8psHEVb9cA0dnUsh%2B%2BAD%2BKpI0Z7jN07MmmXe%2Fjh&X-Amz-Signature=8919feb0775ba5baa272d11a913a4f6324ca4115a0b48eb165ad6df3e723fe9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
