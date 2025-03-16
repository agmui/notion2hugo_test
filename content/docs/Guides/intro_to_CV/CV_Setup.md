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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFRUEQW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcGr6A9bYVxAFTjailLqr2IwiSKKsF2gOMsZuFDRE6JAiEAt2ZrdPdxEWp8PzYRUullJrLF7zXn%2Bew12MhZkoh9rdQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDARxTpF46t2URfzmrSrcAzQC0vmUVI3YRZYWQ8GWBGEuw9VwiRK5EK22FPOsilHoYrrwCb%2BKOTEIFVOfU50jCgzBIQLRYC%2FyRvH88%2FsWtEBSbpOFK2w4QB0IjWhyVdHcw5%2BOE%2FT%2FS933VKCKL4Ym44ZfwlKmA58nDIEyi%2F4fa%2FeUvbqYfCm777NxdQdKkG3Bp6bIIFfyLeroZRsxIoccgh8p0yS6IyfCerrqjy4z9gDQufZs8YOSuJE80pmzWd83Oc99ERLzSpQvm8zoN3BAl0NqqjQrmy%2FDpokUvO94jaiNJ%2BmJtFHFqK%2F19Tjh8IgNxCa8TpyFOL%2FhpANoAAhwPsAWEutoGy46rCJsw9VES%2BD5f0z5GIJhUJPG8p8zauHkxosBt6wbSB35igWUT8zdVU3VCDvL%2FRn1smjF5bDaxSauP9p9xLm2wXsSLeDJbes%2Faq1w1GSuTkKbe18zqy8XB2477ae%2FyNuUmo%2FHWOT7MCQMfyVv1zHHTy0LfV8sCr3JWsEK3jpEhtPjlRYKdHtpXXVpuN231z2BmDBhpshaOtW%2Fyep6HxRNtOdXpz7ZejuX2uS9C%2Bfhcb%2FOcNvAXMvwNuelhUnuEoeOETsyFP2y%2BvUPkNiPVv%2BUZVlMRt0W%2Bpzbuc7jwOJPRHlRdRUUMOC9274GOqUBLNwvppCKYPampBCWxTEtPRJIHjjbwbtlIXvYvOBeaStMiPYAmVO2n9j8hlcqMMThyv3T1LHZAc0aPp4mnCoD9U8P2%2FsTN1QpwB2A9KgRRjDaUrjcB9fgD60u8cUNn63beT7GCGQ046Qx%2BK9ooarD8LZoxt1POFyqreXrUNeRT%2FLh1iQAJK4Oaht5Ye0aN4oETKskLHI%2FJ2o8GAtZfJQYJt4fagkP&X-Amz-Signature=874985a3ab118f9d84755cd9da80f806acfe88f1d5e008905d09ae78eb23684c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWF7JCB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoZ1Kw7oTLiUlqyVhCmPFGLuIiRVtRiQJMDqvBnAC2EgIhAPiXz8Gmi9ct9DluU%2FJdFaTS2GKeUILNMWIn2j5ChDizKv8DCC8QABoMNjM3NDIzMTgzODA1IgzOVweWYzlI9r2MH%2BAq3AMbODqOg%2BalJCnb6%2FdyI2rNxwNtROGUuahA7EsaQC96m6T6fawe2lc7PcJ2S5b2p7vNlFK2hOKeH6%2B7vf74q3UN5CXmkuR0EZPd9x%2B8a1K3aRYuJfbAFnULWPlG5IaWV2cAtTAMI83IpqbiyHfqdRyJ%2BBX4aD2ZOokFgGsX3w%2BRBV6WjnClWPlY3rmF6cBeo8xQxsLI4czSxHqBkXmpHBTS42Yd2Kmbv5da02xgcS%2F8YpCZEV1W5mu%2BiGB8KAQJFf2dhHXEHJ3XDPr7zUUtfViJ%2FtSveEEv3xoUVYlZJfp4zG4KKrVZ%2F9fz11hjN6j5%2FIFzx8rOTwY%2Fg5VWVQR6JQ4v88dYR4HG7bWgx8FaCKbEETGr6EvP8WXWr9lLZVwp8YgNnbmJALXC%2BK6dRb8JK6UiAyqEPY1fD2MOdWOtvzkybhct6%2B4s88lpj8affb6VG%2FFYIyrLSPegCqCDXo8wDeSozWtVWU9LXwcQRaQGAdALC5V5VvbhhADxk44kekU2XQciYEP9r1DfBJkGj2TyWAqAGMn1laLH0Z8%2BVnR%2Fz8vGN59CQawWdnw%2BjhDO0psoWQlKosx3lVnnh6h9xrMVfrqtx4I02sMd%2BmZcnjy3yCsH0QmfPtfQ4Lm%2BoQ4TujCKvtu%2BBjqkAd28pRj5swT%2FmLKl5ti3GqUapX7IUKtR60l6Ff0DCxXIBEfPJqEyA1j2%2FqnDJxwBG%2Bm5Sb4FnN%2FqbqAY4ip28qIEsyNanX8nhFxhcsxWP7WIwCTwjDwVfDDrEbKIr2%2F2IBfz8O3m4RUsA2m3aAI2RFEujYZVfWWvQCTnsNXL32l2t3gBhY%2FESvf8KVRiLc52rFXErwUBjAJHmpOFMXMNhejCDs28&X-Amz-Signature=3ca2599aa07bff1a2576dc40611b9cbdc86c7e6772eaca2b2649fbe44ea19f11&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
