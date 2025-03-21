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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSGVFYVM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBJ0ZJ0z317pZT%2FwkacZI6jrix26FYqyEjQN%2F1yn7N38AiAXxqcXKV6N0%2Ft20RtTTw%2BvhlDxA00ThLL1DKMNoEPtnCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK42R5EfkHxzqwvZKtwDyCqRTNAf6E%2BxQn4OJ9nbO5ARgHNoGpuuk%2Bw5nyydBE4TZ3kSi62HdjtzsjH8pdXLoi5wnuSiVIl180mFAYl5ANNwEDwABQl4563KJix1jxQ%2BAyBTbqfNlwXPB%2BzRVgCCrm%2FUDGmR8CXeV17x0zPK%2BiuuHoGdKSBS043%2F0%2BnICbWr2O7feev3ymleJGXkEftIyp9xOIvJNXyG7a8bOxZi24dIDEO0NZrfHViCyWdVHy045Uec1At6DF6YONaowpIS870cLL0n9b74H38FNlfSS4QkrCxPFvQBfhlCiN5fFKF2VoV%2BqOIxjUotYEvjHTansfXI11vHelyAF%2FYTAX%2B%2FTGjTjp7BOnZggyN6hNfapINM26BTxoIXosN5eOr3WQAaHPd0jpaaAzXYxzwRd2bTJJAwA1DNB6nzaK0RJc2F7v7C0edjXKjGDhtGEGo1FcxWHDQEKAAxC8TktGnQFk8%2FVcqAptTjMB%2BYbMHTdDFjbNY7AXGJC%2FUFGMYeKclYYZtPyqF8vKIfx2SufpQEGqcBZi169T%2F6TtBXFJnuRYYqogiJa6GSC6UwYvxSrDaKqGB%2FU1t8WoFK7BILPPFpMjbq2B89OcjJmxAT3IEQVJla3O2P40n6nPZagalVsWMwrafyvgY6pgHR4iaonxXuNaX4xYFRyvGPvYwVgFXthRqlRmfrKa%2BWgvt0caS6cMxgqRGXRiy3iyzp6HePPKVciTSeaPzFxokGzuv8%2FsUa7WLqW%2FZ8JyRWDEy63sIkoRi4UYBIs0cxJ3EzkWudIwOzVwuDSje2TdjyW1VBBfwB1cabtWc%2BCRQdK%2FMgEb74h259sFPnqGk40UYb2uL6%2FBSiSiM99oVD88EAJy1iC%2BTL&X-Amz-Signature=d288c75c99bdaf9fcc26d920aed0826406fbf6fe585ace7546754667657b6be8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AWE2HP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICrcvkDabz7esi6u4E1xKTfpr97wqwJT%2B8QOo08xRpk9AiBRohGznyHdoml%2ByZkQxEy%2BRPw0CgUQlqHz2JDM441CniqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiE6eiWdM6HXLgSh9KtwDLn2y72K3f%2Bkz0azEmhNmglg6kHgtSHoRD0hkS%2FvM%2BuYnwFZSoZnWIsEmkqUS9h%2BzeJtBG2TK3XAYpFl7rX%2BL6iPUnQh8VaFbjlPzN0yHqv%2Fi835PFHpz0blx4N0LTTASp05xfj58QcpX5qT26Nk6hf32doXI7Dudh9Soeph%2BG0NrM1TtDCxcGem1Wl39%2FuobhsPnxhLlAkWU294hd1OVpZL9cvDDa%2B%2BukGNreVCXlFvv0tJE5z0i6dvgqyAnDoVRv0RwINtn62Uv7E3HdA%2FpETyBQYz9ROZRuPd84K%2FkoBCNs5SPT%2F1VX%2FNcD1RAQxBoAoSav2sypy3zH5G%2FWsK%2BndBPxUKmZ%2FeNeBbp2RWgF6NHtcKgWTEQ9drSFj5G%2BuH4oruDgvHiL77zzwY0%2FmznP3y0dzbRGrMGunmQz54wIilRaOXQhPzeVBH8P9tixi7mnfv4olc%2Fa%2FWNX%2BFKG2xUfQNtcsV2ecqMm%2BFjtiR7LW8vyLj8P4mpQuN2MQdRkVo15o15pUbckDiQOxAD4Whxi%2FJTWzQ3aAaF0LmpBUqA7wkBCB13QAnqRNzw3NDtIvtfuzuBBgi9i4sttTNuFVLjjVJ2fWL%2BlyeSTGM7Mo5jQEGFljLl12bpt%2FcxJuIwjKjyvgY6pgGdAnETyqD8XOBxxv0IpUv5CTwlZSTsi28KuilUMdkeIUwfX5qd5uLlmqT6cqmLb8BO2l3%2BGIxBLfo9kJ4%2B1sHIe34skYA0mqTSB8IBxSRImITgeZxFRYMCS2WKPAF8rwrZoAvEZCgGOKahX75XVFVqX5wFCkURRdtYwEw0OLCH45NRd0nlasYXTRpe87aoYuoYhJS8ke2%2B91MrakKMzheX%2FUe6mutw&X-Amz-Signature=999166e3496aa3298933e375a4223a0e09527f61b05880a43c92d1fffc0ca74d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
