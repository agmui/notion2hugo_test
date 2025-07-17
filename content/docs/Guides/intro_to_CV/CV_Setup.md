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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4V4ZF4D%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAEo1ncwC%2BYBqleGSxlRplr57pEy8EA6cHn6fxg4BXFNAiEA5a9uRN%2BCainLVE5V61Ln91y96Ej2%2BYQxrvtqThGhNsoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPF3XTvg0Um2QGazwyrcA9VbzhTLtj0hbU8urADvdwFoBJsuMFM0lpwCL5qD3m2W6epSuTuvsLGVfxHY0RQHaTvFBvWjZ8lmpaJjSUxFrxacEhqd%2BjzdQwWHSXdkiw3hgHwGPy%2FM0lFY6QL4tpa3nZgdvrdJZzlIvdLprq5WlxCAA6wgWXXRwAqNZ%2FRkQKirh%2B9FFGEhdwdbT9XF%2BCcJwIPHL6uSg6sqssFK1cb6xBkKH%2FfqDYE8O77Fg0xzl0KqGy9hTpXvrx5hd2rJPVZLZfbdRjUeLdQLwt2Uw%2FtPfmJDC8%2BgThWtc%2BjwyUfX%2Bwj6bPQrWcNsxpo70PoO8QP2Az6K6%2BKtaouoiGebl6wbzcy0gkf47azCdpbctpSTCIp9ACo%2B8gzqbqEI5KW1vnrjls0W%2Ftpn23Pjzhc2wBYhHCg9URNkIgN5rZJ1So9A%2Fsle8p98bqxQGKkHjF6tzqfV5l4I2oDY5e%2FQSllOZ%2FFmo5LjSUy2sGWIAis3xlCx8IuJiuXftpPMMNjde8gKLUJeXgi%2B1pMbCFmUsTo0mF09htn%2BFISk86JQbGd9iGCjRmpfJ8Spd5D6Jl8dlLD15IIUMvlJj79s1O42vmMt3vOW1a%2FG1k0c5ZAJnD%2F4w%2Bd7y7ispbsukZNV%2BdgcT3PLMIvn5MMGOqUBy3w05ULXix2OBngt8WrgXDLkuIE%2BM9v0x6VDQNSIiEnpGgrSVbgvw665AXlvOH94FE2Q2QDRR9s7JPvxYjbKlMKnrfl1UYULST87FRGVWtDsvRPHQJnXvPXbxU8cx1LvnIXtYPbvzhSlB%2FanSBz9XzgLLc1DpxTJ%2FbmMnUZYN3TKwqA7y3ZtWr5ChAuLKKDbS64Y1xekTz3LOOwuxYacR8aQHba8&X-Amz-Signature=32950745cdd5a7a814bba29f665f08bdce5653315a58735e27faf097358555e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASS5GSA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAZsX2cacjo5t9nPpR3wNl0yALshZhIy%2BJMZ4Uhpg5V4AiA7ruGJvzaiZ3JV6MTlaJbkSWeEu4HSoAT1a4AR2bttoSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMjlS7gJYH9VHjY6KmKtwDO4f7cCxkB3imUYnwPmIfQUDgX4Hp1Oz6THVXFWENq1KWL9myxMl0o69DTYM3EQ8XV%2F%2BpSWspZewUp%2BDXgyO03SFj6Eu2gcwpHJylAR77e1CL9c0VhAFEexJQfcIxF7WAh0k0aOav5qrFnHNe8QyNdy2WLH9NusTk%2BcKJ8AsE4Cl%2BIfFAnh3C7a9G5kD4nTlSXBq1nPx3%2BE3%2F5zaD08mDZ2RFbWb%2FY6H7AszqKc5g69jQcXOr2jFYJ%2ByHGEoZQ6s4%2Bn6sLh5PPYBQXT7HGCQaE%2FTXVvc2%2BbbkdtyXJAuicWLB9Ut9gzLdwvSYa%2BPgvs0Q2ZJbhZwc3xx%2FszI1p5X3GOF1izBNYnKtn5VOMbdqiDnkYdTuZU1otEfZsZqCFBrUoalC1BGT7PbWOyZihEuq9YHGc2FeI33XjZPS7MQvLAlrCk%2FLyXcjaO5N33Hm4jJDlQ8OrISvIeygPlA0LNKPnOLY%2Bq8SMsFp3z75KP1RmiSNTCp%2BDoeCSpaf5hziy3cTF%2FVuvDiuyWZAJ4zfecvvZINYw%2B5Ai6eMkZsoHQ4xTljhEselOI1Qx1hyJtMSvJOn43pUhrN%2BoqRnC5erdzyuEW%2BkL4jSlK3RdrdYPbVt%2BEPoqm4ZcgeEyK5Uuz8w1ObkwwY6pgHY6hpqUnYjYjNKebJ9NU4xKC4hi6BKhsuX%2FkRIdsvMnUzB%2FEqiV%2BEgWCAMb8gEuqb%2FDKz10dM%2BxyrvLX2GngfK%2BsopL7EQCmIZQG6ejDQ7bLlTi%2B5RIaaTP%2BakTuHY%2FVOL%2BL7jHFJt1Uw7dXLvx6zNaLmdCJPuGmqJoF%2FwC7otNcvUJxFAnah1M%2B8wlWeMYJqddn%2B9pYRbHmSCmFu77FxdqTkon1QF&X-Amz-Signature=a604bcb66bb37d122e7568f91a993b5f44268ce8cb31e97b5579c7babc77875e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
